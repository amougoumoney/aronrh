<script setup>
import { ref, defineEmits, defineExpose } from 'vue';
import {Modal} from 'bootstrap';
import { useNotifications } from '@/composables/useNotifications';
import ChildEmployeeService from '@/services/employeeChild.service';

const currentDate = ref(new Date().toISOString().split('T')[0]); // Format as YYYY-MM-DD
const isEditMode = ref(false);
const {showNotification} = useNotifications();

const formData = ref({
  identifiant_employe: null,
  nom: '',
  date_de_naissance: currentDate,
  cree_par: '',
  mis_a_jour_par: ''
});

const show = (editMode = false, childData = null, employeeId = null) => {
  isEditMode.value = editMode;
  
  if (editMode && childData) {
    formData.value = { 
      ...childData,
      date_of_birth: childData.date_of_birth ? childData.date_of_birth.split('T')[0] : currentDate.value
    };
  } else {
    formData.value = {
      identifiant_employe: employeeId,
      nom: '',
      date_de_naissance: currentDate.value,
      cree_par: '',
      mis_a_jour_par: ''
    };
  }
  
  const modal = new Modal(document.getElementById('employee_child_modal'));
  modal.show();
};

defineExpose({ show });

const emit = defineEmits(['saved']);

const submitForm = async () => {
  try {
    const payload = {
      ...formData.value,
      nom: formData.value.nom || null,
      date_de_naissance: formData.value.date_de_naissance|| null
    };

    let response;
    if (isEditMode.value) {
      console.log('Editing child:', payload);
      response = await ChildEmployeeService.updateChild(formData.value.id, payload);
      showNotification({
        type: 'success',
        title: 'Success',
        message: 'Child information updated successfully!',
        timeout: 5000
      });
    } else {
      console.log('Creating child:', payload);
      response = await ChildEmployeeService.createChild(payload);
      showNotification({
        type: 'success',
        title: 'Success',
        message: 'Child information added successfully!',
        timeout: 5000
      });
    }

    emit('saved', {
      action: isEditMode.value ? 'update' : 'create',
      child: response.data
    });

    const modal = Modal.getInstance(document.getElementById('employee_child_modal'));
    modal.hide();
  } catch (error) {
    console.error('Submission error:', error);
    
    let errorMessage = 'An error occurred while saving child information';
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
  <!-- Employee Child Modal -->
  <div class="modal fade" id="employee_child_modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">{{ isEditMode ? 'Edit Child Information' : 'Add New Child'}}</h4>
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
              <!-- Child Information -->
              <div class="col-md-12">
                <h5 class="mb-3">Child Information</h5>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Child Name <span class="text-danger">*</span></label>
                  <input 
                    class="form-control" 
                    type="text" 
                    v-model="formData.nom" 
                    maxlength="255"
                    required
                  >
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Date of Birth <span class="text-danger">*</span></label>
                  <input 
                    class="form-control" 
                    type="date" 
                    v-model="formData.date_de_naissance"
                    required
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-primary">
              {{ isEditMode ? 'Update Information' : 'Add Child' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>