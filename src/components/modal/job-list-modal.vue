<script setup>
import { ref } from 'vue';
import { Modal } from 'bootstrap';
import { useNotifications } from '@/composables/useNotifications';
// import JobService from '@/services/job.service';

const currentDate = ref(new Date().toISOString().split('T')[0]);
const isEditMode = ref(false);
const { showNotification } = useNotifications();
const activeTab = ref('basic-info');

// Configuration Cloudinary pour l'image du poste
const cloudinaryConfig = {
  cloudName: 'ddwutdh6t',
  uploadPreset: 'upload_image',
};

const formData = ref({
  job_title: '',
  job_description: '',
  job_category: 'Select',
  job_type: 'Select',
  job_level: 'Select',
  experience: 'Select',
  qualification: 'Select',
  gender: 'Select',
  min_salary: 'Select',
  max_salary: 'Select',
  skills: '',
  job_image_url: '',
  job_image_name: '',
  expired_date: currentDate.value,
  address: '',
  city: 'Select',
  state: 'Select',
  country: 'Select',
  zip_code: ''
});

const options = {
  jobCategories: ["Select", "IOS", "Web & Application", "Networking"],
  jobTypes: ["Select", "Full Time", "Part Time"],
  jobLevels: ["Select", "Team Lead", "Manager", "Senior", "Junior"],
  experiences: ["Select", "Entry Level", "Mid Level", "Expert"],
  qualifications: ["Select", "Bachelor Degree", "Master Degree", "Others"],
  genders: ["Select", "Male", "Female"],
  minSalaries: ["Select", "10k - 15k", "15k -20k"],
  maxSalaries: ["Select", "40k - 50k", "50k - 60k"],
  cities: ["Select", "Los Angeles", "San Diego", "Fresno", "San Francisco"],
  states: ["Select", "California", "New York", "Texas", "Florida"],
  countries: ["Select", "USA", "Canada", "Germany", "France"],
};

// Upload de l'image vers Cloudinary
const handleImageUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  // Vérification du type de fichier
  const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
  if (!validTypes.includes(file.type)) {
    showNotification({
      type: 'error',
      title: 'Error',
      message: 'Please upload a valid image (JPEG, PNG, GIF)',
      timeout: 5000
    });
    return;
  }

  // Vérification de la taille (max 2MB)
  if (file.size > 2 * 1024 * 1024) {
    showNotification({
      type: 'error',
      title: 'Error',
      message: 'Image size should not exceed 2MB',
      timeout: 5000
    });
    return;
  }

  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', cloudinaryConfig.uploadPreset);
    formData.append('cloud_name', cloudinaryConfig.cloudName);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/upload`,
      {
        method: 'POST',
        body: formData
      }
    );

    const data = await response.json();
    if (data.secure_url) {
      formData.value.job_image_url = data.secure_url;
      formData.value.job_image_name = file.name;
      showNotification({
        type: 'success',
        title: 'Success',
        message: 'Image uploaded successfully!',
        timeout: 3000
      });
    }
  } catch (error) {
    console.error('Image upload error:', error);
    showNotification({
      type: 'error',
      title: 'Error',
      message: 'Failed to upload image',
      timeout: 5000
    });
  }
};

const removeImage = () => {
  formData.value.job_image_url = '';
  formData.value.job_image_name = '';
};

const show = (editMode = false, jobData = null) => {
  isEditMode.value = editMode;

  if (editMode && jobData) {
    formData.value = { 
      ...jobData,
      expired_date: jobData.expired_date ? jobData.expired_date.split('T')[0] : currentDate.value
    };
  } else {
    resetForm();
  }

  const modal = new Modal(document.getElementById('job_modal'));
  modal.show();
};

const resetForm = () => {
  formData.value = {
    job_title: '',
    job_description: '',
    job_category: 'Select',
    job_type: 'Select',
    job_level: 'Select',
    experience: 'Select',
    qualification: 'Select',
    gender: 'Select',
    min_salary: 'Select',
    max_salary: 'Select',
    skills: '',
    job_image_url: '',
    job_image_name: '',
    expired_date: currentDate.value,
    address: '',
    city: 'Select',
    state: 'Select',
    country: 'Select',
    zip_code: ''
  };
  activeTab.value = 'basic-info';
};

const validateForm = () => {
  if (!formData.value.job_title) {
    showNotification({
      type: 'error',
      title: 'Error',
      message: 'Job title is required',
      timeout: 5000
    });
    return false;
  }
  
  if (formData.value.job_category === 'Select') {
    showNotification({
      type: 'error',
      title: 'Error',
      message: 'Please select a job category',
      timeout: 5000
    });
    return false;
  }
  
  // Ajouter d'autres validations au besoin
  return true;
};

const submitForm = async () => {
  if (!validateForm()) return;

  try {
    const payload = {
      ...formData.value,
      // Nettoyer les données si nécessaire
    };

    let response;
    if (isEditMode.value) {
      response = await JobService.updateJob(formData.value.id, payload);
      showNotification({
        type: 'success',
        title: 'Success',
        message: 'Job updated successfully!',
        timeout: 5000
      });
    } else {
      response = await JobService.createJob(payload);
      showNotification({
        type: 'success',
        title: 'Success',
        message: 'Job created successfully!',
        timeout: 5000
      });
    }

    emit('saved', {
      action: isEditMode.value ? 'update' : 'create',
      job: response.data
    });

    const modal = Modal.getInstance(document.getElementById('job_modal'));
    modal.hide();
  } catch (error) {
    console.error('Submission error:', error);
    handleSubmissionError(error);
  }
};

const handleSubmissionError = (error) => {
  let errorMessage = 'An error occurred while saving the job';
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
  <div class="modal fade" id="job_modal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">{{ isEditMode ? 'Edit Job Posting' : 'Create Job Posting' }}</h4>
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
              <div class="contact-grids-tab pt-0">
                <ul class="nav nav-underline" id="jobTabs" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button 
                      class="nav-link" 
                      :class="{ active: activeTab === 'basic-info' }"
                      @click="activeTab = 'basic-info'"
                      type="button"
                    >
                      Basic Information
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button 
                      class="nav-link" 
                      :class="{ active: activeTab === 'location' }"
                      @click="activeTab = 'location'"
                      type="button"
                    >
                      Location
                    </button>
                  </li>
                </ul>
              </div>
              
              <!-- Basic Info Tab -->
              <div v-if="activeTab === 'basic-info'" class="tab-content mt-3">
                <div class="row">
                  <div class="col-md-12">
                    <div class="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                      <div 
                        v-if="!formData.job_image_url"
                        class="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames"
                      >
                        <i class="ti ti-briefcase fs-36"></i>
                      </div>
                      <img 
                        v-else
                        :src="formData.job_image_url" 
                        alt="Job image" 
                        class="avatar avatar-xxl rounded-circle me-2"
                      >
                      <div class="profile-upload">
                        <div class="mb-2">
                          <h6 class="mb-1">Upload Job Image</h6>
                          <p class="fs-12">Image should be below 2MB (JPEG, PNG, GIF)</p>
                        </div>
                        <div class="profile-uploader d-flex align-items-center">
                          <div class="drag-upload-btn btn btn-sm btn-primary me-2">
                            Upload
                            <input 
                              type="file" 
                              class="form-control image-sign" 
                              @change="handleImageUpload"
                              accept="image/*"
                            >
                          </div>
                          <button 
                            v-if="formData.job_image_url"
                            type="button" 
                            class="btn btn-light btn-sm"
                            @click="removeImage"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="form-label">Job Title <span class="text-danger">*</span></label>
                      <input 
                        v-model="formData.job_title" 
                        type="text" 
                        class="form-control" 
                        required
                      >
                    </div>
                  </div>
                  
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="form-label">Job Description <span class="text-danger">*</span></label>
                      <textarea 
                        v-model="formData.job_description" 
                        rows="3" 
                        class="form-control" 
                        required
                      ></textarea>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Job Category <span class="text-danger">*</span></label>
                      <select 
                        v-model="formData.job_category" 
                        class="form-select" 
                        required
                      >
                        <option v-for="category in options.jobCategories" :key="category" :value="category">
                          {{ category }}
                        </option>
                      </select>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Job Type <span class="text-danger">*</span></label>
                      <select 
                        v-model="formData.job_type" 
                        class="form-select" 
                        required
                      >
                        <option v-for="type in options.jobTypes" :key="type" :value="type">
                          {{ type }}
                        </option>
                      </select>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Job Level <span class="text-danger">*</span></label>
                      <select 
                        v-model="formData.job_level" 
                        class="form-select" 
                        required
                      >
                        <option v-for="level in options.jobLevels" :key="level" :value="level">
                          {{ level }}
                        </option>
                      </select>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Experience <span class="text-danger">*</span></label>
                      <select 
                        v-model="formData.experience" 
                        class="form-select" 
                        required
                      >
                        <option v-for="exp in options.experiences" :key="exp" :value="exp">
                          {{ exp }}
                        </option>
                      </select>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Qualification <span class="text-danger">*</span></label>
                      <select 
                        v-model="formData.qualification" 
                        class="form-select" 
                        required
                      >
                        <option v-for="qual in options.qualifications" :key="qual" :value="qual">
                          {{ qual }}
                        </option>
                      </select>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Gender <span class="text-danger">*</span></label>
                      <select 
                        v-model="formData.gender" 
                        class="form-select" 
                        required
                      >
                        <option v-for="gender in options.genders" :key="gender" :value="gender">
                          {{ gender }}
                        </option>
                      </select>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Min. Salary <span class="text-danger">*</span></label>
                      <select 
                        v-model="formData.min_salary" 
                        class="form-select" 
                        required
                      >
                        <option v-for="salary in options.minSalaries" :key="salary" :value="salary">
                          {{ salary }}
                        </option>
                      </select>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Max. Salary <span class="text-danger">*</span></label>
                      <select 
                        v-model="formData.max_salary" 
                        class="form-select" 
                        required
                      >
                        <option v-for="salary in options.maxSalaries" :key="salary" :value="salary">
                          {{ salary }}
                        </option>
                      </select>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Job Expired Date <span class="text-danger">*</span></label>
                      <input 
                        v-model="formData.expired_date" 
                        type="date" 
                        class="form-control" 
                        required
                      >
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Required Skills</label>
                      <input 
                        v-model="formData.skills" 
                        type="text" 
                        class="form-control" 
                        placeholder="Separate skills with commas"
                      >
                    </div>
                  </div>
                </div>
                
                <div class="modal-footer">
                  <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
                    Cancel
                  </button>
                  <button 
                    type="button" 
                    class="btn btn-primary"
                    @click="activeTab = 'location'"
                  >
                    Next: Location
                  </button>
                </div>
              </div>
              
              <!-- Location Tab -->
              <div v-if="activeTab === 'location'" class="tab-content mt-3">
                <div class="row">
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="form-label">Address <span class="text-danger">*</span></label>
                      <input 
                        v-model="formData.address" 
                        type="text" 
                        class="form-control" 
                        required
                      >
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">City <span class="text-danger">*</span></label>
                      <select 
                        v-model="formData.city" 
                        class="form-select" 
                        required
                      >
                        <option v-for="city in options.cities" :key="city" :value="city">
                          {{ city }}
                        </option>
                      </select>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">State <span class="text-danger">*</span></label>
                      <select 
                        v-model="formData.state" 
                        class="form-select" 
                        required
                      >
                        <option v-for="state in options.states" :key="state" :value="state">
                          {{ state }}
                        </option>
                      </select>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Country <span class="text-danger">*</span></label>
                      <select 
                        v-model="formData.country" 
                        class="form-select" 
                        required
                      >
                        <option v-for="country in options.countries" :key="country" :value="country">
                          {{ country }}
                        </option>
                      </select>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Zip Code <span class="text-danger">*</span></label>
                      <input 
                        v-model="formData.zip_code" 
                        type="text" 
                        class="form-control" 
                        required
                      >
                    </div>
                  </div>
                  
                  <div class="col-md-12">
                    <div class="map-grid mb-3">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509170.989457427!2d-123.80081967108484!3d37.192957227641294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1669181581381!5m2!1sen!2sin"
                        style="border: 0" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade" class="w-100"></iframe>
                    </div>
                  </div>
                </div>
                
                <div class="modal-footer">
                  <button 
                    type="button" 
                    class="btn btn-light me-2"
                    @click="activeTab = 'basic-info'"
                  >
                    Back
                  </button>
                  <button type="submit" class="btn btn-primary">
                    {{ isEditMode ? 'Update Job' : 'Post Job' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-underline .nav-link.active {
  border-bottom: 2px solid #5d87ff;
  color: #5d87ff;
}

.map-grid {
  height: 250px;
  border-radius: 8px;
  overflow: hidden;
}

.avatar-xxl {
  width: 80px;
  height: 80px;
}

.frames {
  background-color: #f5f7fa;
  border: 1px dashed #5d87ff;
}
</style>