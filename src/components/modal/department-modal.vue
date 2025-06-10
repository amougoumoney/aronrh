<template>
  <div class="modal fade" id="departmentModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="d-flex align-items-center">
            <h4 class="modal-title me-2">{{ isEditMode ? 'Edit Department' : 'Add New Department' }}</h4>
            <span v-if="isEditMode">Department ID : {{ formData.id }}</span>
          </div>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12 mb-3">
                <label class="form-label">Department Name <span class="text-danger">*</span></label>
                <input v-model="formData.nom" type="text" class="form-control" required>
              </div>

              <div class="col-md-12 mb-3">
                <label class="form-label">Position</label>
                <input v-model="formData.position" type="text" class="form-control">
              </div>

              <div class="col-md-12 mb-3">
                <label class="form-label">Description</label>
                <textarea v-model="formData.description" class="form-control" rows="3"></textarea>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-outline-light border me-2" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-primary" :disabled="loading">
              <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              {{ isEditMode ? (loading ? 'Updating...' : 'Update') : (loading ? 'Saving...' : 'Save') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Modal } from 'bootstrap';
import departmentPositionService from '@/services/departement.service';
import { useNotifications } from '@/composables/useNotifications';

const { showNotification } = useNotifications();

const emit = defineEmits(['saved']);
const isEditMode = ref(false);
const loading = ref(false);

const formData = ref({
  id: null,
  nom: '',
  position: '',
  description: ''
});

const show = (editMode = false, departmentData = null) => {
  isEditMode.value = editMode;
  
  if (editMode && departmentData) {
    formData.value = { ...departmentData };
  } else {
    // Reset form for new department
    formData.value = {
      id: null,
      nom: '',
      position: '',
      description: ''
    };
  }
  
  const modal = new Modal(document.getElementById('departmentModal'));
  modal.show();
};

const submitForm = async () => {
  try {
    loading.value = true;
    
    // Validation
    if (!formData.value.nom) {
      throw new Error('Department name is required');
    }

    // Format payload
    const payload = {
      nom: formData.value.nom,
      position: formData.value.position || null,
      description: formData.value.description || null
    };

    let response;
    if (isEditMode.value) {
      response = await departmentPositionService.updateDepartmentPosition(formData.value.id, payload);
      showNotification({
        type: 'success',
        title: 'Success',
        message: 'Department updated successfully!',
        timeout: 5000
      });
    } else {
      response = await departmentPositionService.createDepartmentPosition(payload);
      showNotification({
        type: 'success',
        title: 'Success',
        message: 'Department created successfully!',
        timeout: 5000
      });
    }

    emit('saved', {
      action: isEditMode.value ? 'update' : 'create',
      department: response.data
    });

    const modal = Modal.getInstance(document.getElementById('departmentModal'));
    modal.hide();
    
  } catch (error) {
    console.error('Submission error:', error);
    
    let errorMessage = 'An error occurred while saving the department';
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
  } finally {
    loading.value = false;
  }
};

// Expose the show function to parent component
defineExpose({ show });
</script>

<style scoped>
/* You can reuse your existing styles or add specific ones for departments */
.modal-content {
  border-radius: 10px;
}

.modal-header {
  border-bottom: 1px solid #eee;
  padding: 15px 20px;
}

.modal-title {
  font-weight: 600;
  margin: 0;
}

.custom-btn-close {
  padding: 0.5rem;
  margin: -0.5rem -0.5rem -0.5rem auto;
}

.form-label {
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.btn-primary {
  background-color: #3b7ddd;
  border-color: #3b7ddd;
}

.btn-primary:hover {
  background-color: #326abc;
  border-color: #326abc;
}

.btn-outline-light {
  color: #6c757d;
  border-color: #dee2e6;
}

.btn-outline-light:hover {
  background-color: #f8f9fa;
  border-color: #dee2e6;
}
</style>