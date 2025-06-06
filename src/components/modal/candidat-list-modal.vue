<script setup>
import { ref } from 'vue';
import { Modal } from 'bootstrap';
import { useNotifications } from '@/composables/useNotifications';
import axios from 'axios';
import  CandidatService from '@/services/candidat.service';

const currentDate = ref(new Date().toISOString().split('T')[0]);
const isEditMode = ref(false);
const { showNotification } = useNotifications();
const cvUploading = ref(false);


// Configuration Cloudinary
const cloudinaryConfig = {
  cloudName: 'ddwutdh6t',
  uploadPreset: 'upload_document',
};

const statusOptions = [
  { value: 'sent', label: 'Sent' },
  { value: 'scheduled', label: 'Scheduled' },
  { value: 'received', label: 'Received' },
  { value: 'interviewed', label: 'Interviewed' },
  { value: 'hired', label: 'Hired' },
  { value: 'offered', label: 'Offered' }
];

const formData = ref({
  first_name: '',
  last_name: '',
  email: '',
  place_birtday:'',
  job_position: '',
  status: '',
  birthday: '',
  application_date: currentDate.value,
  telephone: '',
  cv:'',
  cv_name: ''
});

// Upload du CV vers Cloudinary
const handleCVUpload = async (file) => {
  
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', cloudinaryConfig.uploadPreset);

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data.secure_url; 
  } catch (error) {
    console.error('CV upload error:', error);
    showNotification({
      type: 'error',
      title: 'Error',
      message: 'Failed to upload CV',
      timeout: 5000
    });
  } finally {
    cvUploading.value = false;
  }
};

const Uploaddocument = async (event) =>{
  const file = event.target.files[0];
  if (!file) return;

  // Vérification du type de fichier
  const validTypes = ['application/pdf', 'application/msword', 
                     'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  if (!validTypes.includes(file.type)) {
    showNotification({
      type: 'error',
      title: 'Error',
      message: 'Please upload a PDF or Word document only',
      timeout: 5000
    });
    return;
  }

  // Vérification de la taille (max 5MB)
  if (file.size > 5 * 1024 * 1024) {
    showNotification({
      type: 'error',
      title: 'Error',
      message: 'File size should not exceed 5MB',
      timeout: 5000
    });
    return;
  }

  cvUploading.value = true;
  const documentUrl= await handleCVUpload(file)
  formData.value.cv = documentUrl

}

const removeCV = () => {
  formData.value.cv = '';
  formData.value.cv_name = '';
};

const show = (editMode = false, candidateData = null) => {
  isEditMode.value = editMode;

  if (editMode && candidateData) {
    formData.value = { 
      ...candidateData,
      birth_date: candidateData.birth_date ? candidateData.birth_date.split('T')[0] : currentDate.value,
      application_date: candidateData.application_date ? candidateData.application_date.split('T')[0] : currentDate.value,
      cv: candidateData.cv || '',
      cv_name: candidateData.cv_name || ''
    };
  } else {
    resetForm();
  }

  const modal = new Modal(document.getElementById('candidate_modal'));
  modal.show();
};

const resetForm = () => {
  formData.value = {
  first_name: '',
  last_name: '',
  email: '',
  place_birtday:'',
  job_position: '',
  status: '',
  birthday: '',
  application_date: currentDate.value,
  telephone: '',
  cv:'',
  cv_name: ''
  };
};

const submitForm = async () => {
  if (!formData.value.cv) {
    showNotification({
      type: 'error',
      title: 'Error',
      message: 'Please upload a CV',
      timeout: 5000
    });
    return;
  }

  try {
    let response;
    if (isEditMode.value) {
      response = await  CandidatService.updateCandidat(formData.value.id, formData.value);

      console.log('candidat.data', response)
      showNotification({
        type: 'success',
        title: 'Success',
        message: 'Candidate updated successfully!',
        timeout: 5000
      });
    } else {
      console.log('data.send', formData.value)
      response = await  CandidatService.createCandidat(formData.value);
          console.log('candidat.data', response)
      showNotification({
        type: 'success',
        title: 'Success',
        message: 'Candidate created successfully!',
        timeout: 5000
      });
    }

    emit('saved', {
      action: isEditMode.value ? 'update' : 'create',
      candidate: response.data
    });

    const modal = Modal.getInstance(document.getElementById('candidate_modal'));
    modal.hide();
  } catch (error) {
    console.error('Submission error:', error);
    handleSubmissionError(error);
  }
};

const handleSubmissionError = (error) => {
  let errorMessage = 'An error occurred while saving the candidate';
  let errorType = 'error';
  
  if (error.response) {
    switch (error.response.status) {
      case 400:
        errorMessage = error.response.data?.message || 'Invalid data provided';
        break;
      case 401:
        errorMessage = 'Authentication required';
        break;
      case 500:
        errorMessage = 'Server error, please try again later';
        break;
      default:
        errorMessage = `Request failed with status ${error.response.status}`;
    }
  } else if (error.message) {
    errorMessage = error.message;
    errorType = 'warning';
  }
  
  showNotification({
    type: errorType,
    title: 'Error',
    message: errorMessage,
    timeout: 8000
  });
};

defineExpose({ show });
const emit = defineEmits(['saved']);
</script>

<template>
  <div class="modal fade" id="candidate_modal">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">{{ isEditMode ? 'Edit Candidate' : 'Add New Candidate'}}</h4>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-0">
            <div class="row">
              <!-- Candidate Information -->
              <div class="col-md-12">
                <h5 class="mb-3">Candidate Information</h5>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">First Name <span class="text-danger">*</span></label>
                  <input 
                    class="form-control" 
                    type="text" 
                    v-model="formData.first_name" 
                    maxlength="255"
                    required
                  >
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Last Name <span class="text-danger">*</span></label>
                  <input 
                    class="form-control" 
                    type="text" 
                    v-model="formData.last_name" 
                    maxlength="255"
                    required
                  >
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Date of Birth</label>
                  <input 
                    class="form-control" 
                    type="date" 
                    v-model="formData.birthday"
                  >
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Place of Birth</label>
                  <input 
                    class="form-control" 
                    type="text" 
                    v-model="formData.place_birtday"
                    maxlength="255"
                  >
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Email <span class="text-danger">*</span></label>
                  <input 
                    class="form-control" 
                    type="email" 
                    v-model="formData.email" 
                    maxlength="255"
                    required
                  >
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Phone Number</label>
                  <input 
                    class="form-control" 
                    type="number" 
                    v-model="formData.telephone" 
                    maxlength="15"
                    min="0"
                  >
                </div>
              </div>
              
              <!-- Application Information -->
              <div class="col-md-12 mt-4">
                <h5 class="mb-3">Application Information</h5>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Job Position <span class="text-danger">*</span></label>
                  <input 
                    class="form-control" 
                    type="text" 
                    v-model="formData.job_position" 
                    maxlength="255"
                    required
                  >
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Application Status <span class="text-danger">*</span></label>
                  <select 
                    class="form-select" 
                    v-model="formData.status"
                    required
                  >
                    <option v-for="status in statusOptions" :key="status.value" :value="status.value">
                      {{ status.label }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Application Date <span class="text-danger">*</span></label>
                  <input 
                    class="form-control" 
                    type="date" 
                    v-model="formData.application_date"
                    required
                  >
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">CV <span class="text-danger">*</span></label>
                  <div v-if="!formData.cv">
                    <input 
                      class="form-control" 
                      type="file" 
                      @change="Uploaddocument"
                      accept=".pdf,.doc,.docx"
                      :disabled="cvUploading"
                      required
                    >
                    <small class="text-muted">Formats acceptés: PDF, DOC, DOCX (Max 5MB)</small>
                  </div>
                  <div v-else class="d-flex align-items-center mt-2">
                    <i class="ti ti-file-text me-2"></i>
                    <span class="text-truncate" style="max-width: 200px">{{ formData.cv_name }}</span>
                    <button 
                      type="button" 
                      class="btn btn-sm btn-link text-danger ms-2"
                      @click="removeCV"
                      :disabled="cvUploading"
                    >
                      <i class="ti ti-trash"></i>
                    </button>
                    <a 
                      :href="formData.cv" 
                      target="_blank" 
                      class="btn btn-sm btn-link ms-1"
                      title="View CV"
                    >
                      <i class="ti ti-eye"></i>
                    </a>
                  </div>
                  <div v-if="cvUploading" class="mt-2">
                    <div class="progress" style="height: 6px;">
                      <div 
                        class="progress-bar progress-bar-striped progress-bar-animated" 
                        role="progressbar" 
                        style="width: 100%"
                      ></div>
                    </div>
                    <small class="text-muted">Uploading CV...</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-primary" :disabled="cvUploading">
              {{ isEditMode ? 'Update Candidate' : 'Add Candidate' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.progress {
  background-color: #e9ecef;
}
.text-truncate {
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>