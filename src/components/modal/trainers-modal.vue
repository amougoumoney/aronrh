<script setup>
import { ref, nextTick } from "vue";
import { useRouter } from "vue-router";
import { Modal } from "bootstrap"; // Ensure bootstrap is imported
import { useNotifications } from '@/composables/useNotifications';
import TrainerService  from '@/services/trainerList.service'

const { showNotification } = useNotifications();

const isEditMode = ref(false);
const Status = ref([  { label: 'Active', value: 1 },
  { label: 'Inactive', value: 0 }]);

const formData = ref({
  first_name: '',
  last_name: '',
  role: '',
  phone: '',
  email: '',
  description: '',
  profile_picture: '',
  status: 1
});

const router = useRouter();

function show(editMode = false, trainerData = null) {
  isEditMode.value = editMode;

  if (editMode && trainerData) {
    formData.value = { ...trainerData };
  } else {
    resetForm();
  }

  // Display the modal
  nextTick(() => {
    const modal = new Modal(document.getElementById('trainerModal'));
    modal.show();
  });
}

function resetForm() {
  formData.value = {
      first_name: '',
      last_name: '',
      role: '',
      phone: '',
      email: '',
      description: '',
      profile_picture: '',
      status: 0
  };
}

defineExpose({ show });

const submitForm = async () => {
  // Here, you should add logic to save the data
  // Example:
  try {
      if (isEditMode.value) {
    const response = await TrainerService.updateTrainer(formData.value.id, formData.value);
    console.log('response.data', response)
    showNotification({
    type: 'success',
    title: 'Success',
    message: 'Trainers updated successfully!',
    timeout: 5000
  });
  } else {
    const responseCreate = await TrainerService. createTrainer(formData.value);
    console.log("trainer.create:", responseCreate)
    showNotification({
    type: 'success',
    title: 'Success',
    message: 'Trainer add successfully!',
    timeout: 5000
  });
   }
  } catch (error) {
    console.log('error', error)
    let errorMessage = 'An error occurred while saving the employee';
    let errorType = 'error';
    
    if (error.response) {
      // Gestion des erreurs HTTP
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

  // Close the modal
  const modal = Modal.getInstance(document.getElementById('trainerModal'));
  modal.hide();

  // Redirect
  router.push("/training/trainers");
}
</script>

<template>
  <!-- Modal unique pour ajout/édition -->
  <div class="modal fade" id="trainerModal">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">{{ isEditMode ? 'Edit' : 'Add' }} Trainer</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                  <div class="d-flex align-items-center flex-wrap bg-light rounded p-3 mb-4">
                    <div class="avatar avatar-xxl rounded-circle border border-dashed me-3">
                      <img v-if="formData.profile_picture" :src="formData.profile_picture" class="rounded-circle" alt="Profile">
                      <i v-else class="ti ti-photo text-gray-2 fs-16"></i>
                        <!-- Overlay de chargement -->
                      <div v-if="uploading" class="upload-overlay">
                        <div class="spinner-border text-primary" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                    <div class="profile-upload">
                      <h6>Upload Profile Image</h6>
                      <div class="d-flex align-items-center mt-2">
                        <label type="button" class="btn btn-sm btn-primary me-2">
                          Upload
                          <input type="file" @change="handleImageUpload" class="d-none" accept="image/jpeg, image/png, image/webp" >
                        </label>
                        <button type="button" class="btn btn-sm btn-light" @click="removeImage">Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">First Name*</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    v-model="formData.first_name"
                    
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Last Name*</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    v-model="formData.last_name"
                    required
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Role*</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    v-model="formData.role"
                    required
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Phone*</label>
                  <input 
                    type="tel" 
                    class="form-control" 
                    v-model="formData.phone"
                    required
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Email*</label>
                  <input 
                    type="email" 
                    class="form-control" 
                    v-model="formData.email"
                    required
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Description</label>
                  <textarea 
                    class="form-control"
                    v-model="formData.description"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Status*</label>
                  <select 
                    v-model="formData.status" 
                    class="form-control"
                    required
                  >
                    <option v-for="option in Status" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">
              {{ isEditMode ? 'Save Changes' : 'Add Trainer' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Delete Modal (peut rester inchangé) -->
  <div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span class="avatar avatar-xl bg-transparent-danger text-danger mb-3">
            <i class="ti ti-trash-x fs-36"></i>
          </span>
          <h4 class="mb-1">Confirm Delete</h4>
          <p class="mb-3">
            You want to delete all the marked items, this cant be undone once you delete.
          </p>
          <div class="d-flex justify-content-center">
            <a href="javascript:void(0);" class="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <router-link to="/training/trainers" class="btn btn-danger">Yes, Delete</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>