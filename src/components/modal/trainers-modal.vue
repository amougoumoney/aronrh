<script setup>
import { ref, nextTick } from "vue";
import { useRouter } from "vue-router";
import { Modal } from "bootstrap";
import { useNotifications } from '@/composables/useNotifications';
import TrainerService from '@/services/trainerList.service';
import axios from "axios";

const { showNotification } = useNotifications();
const router = useRouter();

// States
const isEditMode = ref(false);
const uploading = ref(false);
const Status = ref([
  { label: 'Active', value: 1 },
  { label: 'Inactive', value: 0 }
]);

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

// Configuration Cloudinary
const cloudinaryConfig = {
  cloudName: 'ddwutdh6t',
  uploadPreset: 'Profile_trainer',
};

const uploadImageToCloudinary = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', cloudinaryConfig.uploadPreset);

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data.secure_url; // Retourner l'URL de l'image
  } catch (error) {
    console.error('Erreur lors du téléversement de l\'image:', error);
    throw error;
  }
};
const handleImageUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
  const maxSize = 5 * 1024 * 1024; // 5MB

  if (!validTypes.includes(file.type)) {
    showNotification({
      type: 'error',
      title: 'Format invalide',
      message: 'Seuls les JPEG, PNG et WEBP sont acceptés',
      timeout: 5000
    });
    return;
  }

  if (file.size > maxSize) {
    showNotification({
      type: 'error',
      title: 'Fichier trop lourd',
      message: 'La taille maximale est de 5MB',
      timeout: 5000
    });
    return;
  }

  uploading.value = true; // Afficher l'overlay de chargement
  try {
        // Afficher un loader pendant l'upload
    showNotification({
      type: 'info',
      title: 'Upload en cours',
      message: 'Traitement de votre image...',
      timeout: 2000
    });

    const imageUrl = await uploadImageToCloudinary(file);
    formData.value.profile_picture = imageUrl; // Mettre à jour l'URL dans formData
        showNotification({
      type: 'success',
      title: 'Succès',
      message: 'Image uploadée avec succès!',
      timeout: 3000
    });
  } catch (error) {
    showNotification({
      type: 'error',
      title: 'Échec du téléversement',
      message: 'Échec du téléversement de l\'image',
      timeout: 5000
    });
  } finally {
    uploading.value = false; // Cacher l'overlay de chargement
  }
};
const removeImage = async () => {
  // Optionnel: Supprimer l'image de Cloudinary si nécessaire
  // (nécessite une implémentation côté serveur pour la suppression sécurisée)
  
  formData.value.image = '';
  formData.value.profile_picture = '';
};

// Modal control
function show(editMode = false, trainerData = null) {
  isEditMode.value = editMode;

  if (editMode && trainerData) {
    formData.value = { 
      ...trainerData,
      first_name: trainerData.firstName || trainerData.first_name,
      last_name: trainerData.lastName || trainerData.last_name,
      profile_picture: trainerData.profilePicture || trainerData.profile_picture
    };
  } else {
    resetForm();
  }

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
    status: 1
  };
}

// Delete trainer
const deleteTrainer = async (id) => {
  try {
    await TrainerService.deleteTrainer(id);
    showNotification({
      type: 'success',
      title: 'Success',
      message: 'Trainer deleted successfully!',
      timeout: 5000
    });
    router.push("/training/trainers");
  } catch (error) {
    console.error('Error deleting trainer:', error);
    showNotification({
      type: 'error',
      title: 'Error',
      message: 'Failed to delete trainer',
      timeout: 5000
    });
  }
};

// Form submission
const submitForm = async () => {
  try {
    const payload = {
      ...formData.value,
      firstName: formData.value.first_name,
      lastName: formData.value.last_name,
      profilePicture: formData.value.profile_picture
    };

    if (isEditMode.value) {
      await TrainerService.updateTrainer(formData.value.id, payload);
      showNotification({
        type: 'success',
        title: 'Success',
        message: 'Trainer updated successfully!',
        timeout: 5000
      });
    } else {
      await TrainerService.createTrainer(payload);
      showNotification({
        type: 'success',
        title: 'Success',
        message: 'Trainer added successfully!',
        timeout: 5000
      });
    }

    const modal = Modal.getInstance(document.getElementById('trainerModal'));
    modal.hide();
    router.push("/training/trainers");
    
  } catch (error) {
    console.error('Error:', error);
    let errorMessage = 'An error occurred while saving the trainer';
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

defineExpose({ show, deleteTrainer });
</script>

<template>
  <!-- Add/Edit Modal -->
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
                  <div class="avatar avatar-xxl rounded-circle border border-dashed me-3 position-relative">
                    <img v-if="formData.profile_picture" :src="formData.profile_picture" class="rounded-circle" alt="Profile">
                    <i v-else class="ti ti-photo text-gray-2 fs-16"></i>
                    <div v-if="uploading" class="upload-overlay d-flex align-items-center justify-content-center">
                      <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  </div>
                  <div class="profile-upload">
                    <h6>Upload Profile Image</h6>
                    <div class="d-flex align-items-center mt-2">
                      <label class="btn btn-sm btn-primary me-2 mb-0">
                        <input 
                          type="file" 
                          @change="handleImageUpload" 
                          class="d-none" 
                          accept="image/jpeg, image/png, image/webp"
                          :disabled="uploading"
                        >
                        <span v-if="!uploading">Upload</span>
                        <span v-else>Uploading...</span>
                      </label>
                      <button 
                        v-if="formData.profile_picture" 
                        type="button" 
                        class="btn btn-sm btn-light" 
                        @click="removeImage"
                        :disabled="uploading"
                      >
                        Remove
                      </button>
                    </div>
                    <small class="text-muted d-block mt-2">Max size: 2MB (JPEG, PNG, WebP)</small>
                  </div>
                </div>
              </div>
              
              <!-- Form fields -->
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">First Name*</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    v-model="formData.first_name"
                    required
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
            <button type="submit" class="btn btn-primary" :disabled="uploading">
              {{ isEditMode ? 'Save Changes' : 'Add Trainer' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Delete Modal -->
  <div class="modal fade" id="deleteTrainerModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span class="avatar avatar-xl bg-transparent-danger text-danger mb-3">
            <i class="ti ti-trash-x fs-36"></i>
          </span>
          <h4 class="mb-1">Confirm Delete</h4>
          <p class="mb-3">
            Are you sure you want to delete this trainer? This action cannot be undone.
          </p>
          <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-light me-3" data-bs-dismiss="modal">Cancel</button>
            <button 
              type="button" 
              class="btn btn-danger" 
              data-bs-dismiss="modal"
              @click="deleteTrainer(currentTrainerId)"
            >
              Yes, Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.upload-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
}

.avatar-xxl {
  width: 100px;
  height: 100px;
  position: relative;
}

.avatar img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>