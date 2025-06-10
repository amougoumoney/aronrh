<script setup>
import { ref, defineEmits, defineExpose, onMounted } from 'vue';
import {Modal}  from 'bootstrap';
import { useNotifications } from '@/composables/useNotifications';
import CandidatsService from '@/services/candidat.service';
import ReferencesService from '@/services/reference.service';

const currentDate = ref(new Date().toISOString().split('T')[0]);
const isEditMode = ref(false);
const {showNotification} = useNotifications();
const candidat = ref([]);

const formData = ref({
  id: null,
  entrepriseName: '',
  entrepriseAdresse: '',
  phoneEntreprise: '',
  name: "",
  jobTitle: "",
  candidateName: "", // Utilisez candidateName directement
  status: "",
});

const status = ref([
  { label: 'Pending' },
  { label: 'Expired' },
  { label: 'Completed' } // Corrigé la casse pour la cohérence
]);

const fetchCandidate = async () => {
  try {
    const response = await CandidatsService.getAllCandidats();
    candidat.value = response.data;
    console.log('candidate list:', candidat.value); // Corrigé le console.log
  } catch(error) {
    console.log('fetchCandidate error:', error); // Corrigé la faute de frappe
  }
};

// Charger les candidats au montage du composant
onMounted(() => {
  fetchCandidate();
});

const show = (editMode = false, referenceData = null) => {
  isEditMode.value = editMode;
  
  if (editMode && referenceData) {
    formData.value = { 
      ...referenceData,
    };
  } else {
    formData.value = {
        id: null,
        entrepriseName: '',
        entrepriseAdresse: '',
        phoneEntreprise: '',
        name: "",
        jobTitle: "",
        candidateName: "", // Utilisez candidateName directement
        status: "",
    };
  }
  
  const modal = new Modal(document.getElementById('reference_modal'));
  modal.show();
};

defineExpose({ show });
const emit = defineEmits(['saved']);

const submitForm = async () => {
  try {
    const payload = {
      ...formData.value,
      name: formData.value.name || null,
      entreprise_name: formData.value.entrepriseName,
      entreprise_adresse: formData.value.entrepriseAdresse,
      phone_entreprise: formData.value.phoneEntreprise,
      job_title: formData.value.jobTitle || null,
      candidate_id: formData.value.candidateName || null, // Assurez-vous que c'est le bon nom de champ attendu par l'API
      status: formData.value.status || null,
    };

    let response;
    if (isEditMode.value) {
      response = await ReferencesService.updatereference(formData.value.id, payload);
      showNotification({
        type: 'success',
        title: 'Success',
        message: 'Reference updated successfully!',
        timeout: 5000
      });
    } else {
      response = await ReferencesService.createreference(payload);
      showNotification({
        type: 'success',
        title: 'Success',
        message: 'Reference created successfully!',
        timeout: 5000
      });
    }

    emit('saved', {
      action: isEditMode.value ? 'update' : 'create',
      reference: response.data,
    });

    const modal = Modal.getInstance(document.getElementById('reference_modal'));
    modal.hide();
  } catch (error) {
    console.error('Submission error:', error);
    
    let errorMessage = 'An error occurred while saving the reference';
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
  }
};
</script>

<template>
  <!-- Reference Modal -->
  <div class="modal fade" id="reference_modal">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">{{ isEditMode ? 'Edit Reference' : 'Add New Reference'}}</h4>
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
              <div class="col-md-12">
                <h5 class="mb-3">Reference Information</h5>
              </div>
                <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Entreprise Name <span class="text-danger">*</span></label>
                  <input 
                    class="form-control" 
                    type="text" 
                    v-model="formData.entrepriseName" 
                    maxlength="255"
                    required
                  >
                </div>
              </div>              
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Entreprise Adress <span class="text-danger">*</span></label>
                  <input 
                    class="form-control" 
                    type="text" 
                    v-model="formData.entrepriseAdresse" 
                    maxlength="255"
                    required
                  >
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Phone Number <span class="text-danger">*</span></label>
                  <input 
                    class="form-control" 
                    type="number" 
                    v-model="formData.phoneEntreprise" 
                    min="0"
                    required
                  >
                </div>
              </div>
            <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Name <span class="text-danger">*</span></label>
                  <input 
                    class="form-control" 
                    type="text" 
                    v-model="formData.name" 
                    maxlength="255"
                    required
                  >
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Job Title</label>
                  <input 
                    class="form-control" 
                    type="text" 
                    v-model="formData.jobTitle" 
                    maxlength="255"
                  >
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Candidate</label>
                  <select class="form-control" v-model="formData.candidateName">
                    <option value="">Select Candidate</option>
                    <option 
                      v-for="candidate in candidat" 
                      :key="candidate.id" 
                      :value="candidate.id"
                    >
                      {{ candidate.firstName }} {{ candidate.lastName }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <select class="form-control" v-model="formData.status">
                    <option value="">Select Status</option>
                    <option 
                      v-for="statut in status" 
                      :key="statut.label" 
                      :value="statut.label"
                    >
                      {{ statut.label }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-primary">
              {{ isEditMode ? 'Update Reference' : 'Add Re.ference' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>