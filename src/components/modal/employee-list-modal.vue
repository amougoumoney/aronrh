<template>
  <div class="modal fade" id="employeeModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <div class="d-flex align-items-center">
            <h4 class="modal-title me-2">{{ isEditMode ? 'Edit Employee' : 'Add New Employee' }}</h4>
            <span v-if="isEditMode">Employee ID : {{ formData.staff_id }}</span>
          </div>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        
        <form @submit.prevent="submitForm">
          <div class="contact-grids-tab">
            <ul class="nav nav-underline" id="employeeTabs" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#basic-info" type="button">
                  Basic Information
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#contact-info" type="button">
                  Contact Information
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#family-info" type="button">
                  Family Information
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#bank-info" type="button">
                  Bank Details
                </button>
              </li>
            </ul>
          </div>

          <div class="tab-content p-3">
            <!-- Onglet Informations de base -->
            <div class="tab-pane fade show active" id="basic-info">
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

                <div class="col-md-4 mb-3">
                  <label class="form-label">Staff ID <span class="text-danger">*</span></label>
                  <input v-model="formData.staff_id" type="text" class="form-control" :readonly="isEditMode" required>
                </div>

                <div class="col-md-4 mb-3">
                  <label class="form-label">Subsidiary</label>
                  <input v-model="formData.subsidiary" type="text" class="form-control">
                </div>

                <div class="col-md-4 mb-3">
                  <label class="form-label">Departement</label>
                  <select 
                    v-model="formData.departement_id"
                    class="form-control"
                  >
                    <option v-for="dept in departement" :key="dept.id" :value="dept.id">
                      {{ dept.nom }}
                    </option>
                     <option value="" disabled>
                      Select Department</option>
                  </select>
                </div>

                <div class="col-md-4 mb-3">
                  <label class="form-label">Status</label>
                  <select v-model="formData.status" class="form-control">
                    <option value="Expats">Expats</option>
                    <option value="Local">Local</option>
                  </select>
                </div>

                <div class="col-md-4 mb-3">
                  <label class="form-label">First Name <span class="text-danger">*</span></label>
                  <input v-model="formData.first_name" type="text" class="form-control" required>
                </div>

                <div class="col-md-4 mb-3">
                  <label class="form-label">Middle Name</label>
                  <input v-model="formData.middle_name" type="text" class="form-control">
                </div>

                <div class="col-md-4 mb-3">
                  <label class="form-label">Last Name <span class="text-danger">*</span></label>
                  <input v-model="formData.last_name" type="text" class="form-control" required>
                </div>

                <div class="col-md-4 mb-3">
                  <label class="form-label">Gender</label>
                  <select v-model="formData.gender" class="form-control">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div class="col-md-4 mb-3">
                  <label class="form-label">Date of Birth</label>
                  <input v-model="formData.date_of_birth" type="date" class="form-control">
                </div>

                <div class="col-md-4 mb-3">
                  <label class="form-label">Religion</label>
                  <input v-model="formData.religion" type="text" class="form-control">
                </div>

                <div class="col-md-6 mb-3">
                  <label class="form-label">Birth Place</label>
                  <input v-model="formData.birth_place" type="text" class="form-control">
                </div>

                <div class="col-md-6 mb-3">
                  <label class="form-label">Marital Status</label>
                  <select v-model="formData.marital_status" class="form-control">
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Onglet Informations de contact -->
            <div class="tab-pane fade" id="contact-info">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label class="form-label">Email <span class="text-danger">*</span></label>
                  <input v-model="formData.email" type="email" class="form-control" required>
                </div>

                <div class="col-md-6 mb-3">
                  <label class="form-label">Office Phone</label>
                  <input v-model="formData.office_phone" type="tel" class="form-control">
                </div>

                <div class="col-md-6 mb-3">
                  <label class="form-label">Mobile Phone <span class="text-danger">*</span></label>
                  <input v-model="formData.mobile_phone" type="tel" class="form-control" required>
                </div>

                <div class="col-md-6 mb-3">
                  <label class="form-label">Driver License Number</label>
                  <input v-model="formData.driver_license_number" type="text" class="form-control">
                </div>

                <div class="col-12 mb-3">
                  <label class="form-label">Permanent Address</label>
                  <textarea v-model="formData.permanent_address" class="form-control" rows="3"></textarea>
                </div>

                <div class="col-12 mb-3">
                  <label class="form-label">Current Address</label>
                  <textarea v-model="formData.current_address" class="form-control" rows="3"></textarea>
                </div>

                <div class="col-md-6 mb-3">
                  <label class="form-label">Stay With</label>
                  <input v-model="formData.stay_with" type="text" class="form-control">
                </div>

                <div class="col-md-6 mb-3">
                  <label class="form-label">Military Status</label>
                  <div class="form-check form-switch">
                    <input v-model="formData.military_status" class="form-check-input" type="checkbox">
                    <label class="form-check-label">Completed Military Service</label>
                  </div>
                </div>
              </div>
            </div>

            <!-- Onglet Informations familiales -->
            <div class="tab-pane fade" id="family-info">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label class="form-label">Spouse Name</label>
                  <input v-model="formData.spouse_name" type="text" class="form-control">
                </div>

                <div class="col-md-6 mb-3">
                  <label class="form-label">Spouse Occupation</label>
                  <input v-model="formData.spouse_occupation" type="text" class="form-control">
                </div>

                <div class="col-md-6 mb-3">
                  <label class="form-label">Father Name</label>
                  <input v-model="formData.father_name" type="text" class="form-control">
                </div>

                <div class="col-md-6 mb-3">
                  <label class="form-label">Father Occupation</label>
                  <input v-model="formData.father_occupation" type="text" class="form-control">
                </div>

                <div class="col-md-6 mb-3">
                  <label class="form-label">Mother Name</label>
                  <input v-model="formData.mother_name" type="text" class="form-control">
                </div>

                <div class="col-md-6 mb-3">
                  <label class="form-label">Mother Occupation</label>
                  <input v-model="formData.mother_occupation" type="text" class="form-control">
                </div>
              </div>
            </div>

            <!-- Onglet Informations bancaires -->
            <div class="tab-pane fade" id="bank-info">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label class="form-label">Bank Name</label>
                  <input v-model="formData.bank_name" type="text" class="form-control">
                </div>

                <div class="col-md-6 mb-3">
                  <label class="form-label">Bank Branch</label>
                  <input v-model="formData.bank_branch" type="text" class="form-control">
                </div>

                <div class="col-md-6 mb-3">
                  <label class="form-label">Bank Account Name</label>
                  <input v-model="formData.bank_account_name" type="text" class="form-control">
                </div>

                <div class="col-md-6 mb-3">
                  <label class="form-label">Bank Account Number</label>
                  <input v-model="formData.bank_account_number" type="text" class="form-control">
                </div>

                <div class="col-md-6 mb-3">
                  <label class="form-label">Identification Number</label>
                  <input v-model="formData.identification_number" type="text" class="form-control">
                </div>

                <div class="col-md-6 mb-3">
                  <label class="form-label">Social Security Number</label>
                  <input v-model="formData.social_security_number" type="text" class="form-control">
                </div>

                <div class="col-md-6 mb-3">
                  <label class="form-label">Tax Number</label>
                  <input v-model="formData.tax_number" type="text" class="form-control">
                </div>

                <div class="col-md-6 mb-3">
                  <label class="form-label">Passport Number</label>
                  <input v-model="formData.passport_number" type="text" class="form-control">
                </div>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-outline-light border me-2" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-primary">{{ isEditMode ? 'Update' : 'Save' }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Modal } from 'bootstrap';
import EmployeeService from '@/services/employee.service.js';
import DepartmentPositionService from '@/services/departement.service'
import { defineExpose } from 'vue';
// Ajoutez en haut du fichier
import NotificationMessage from '@/components/NotificationComponents/NotificationMessage.vue';
import { useNotifications } from '@/composables/useNotifications';
import { data } from 'jquery';
import { v4 as uuidv4 } from 'uuid'; // Pour générer des noms de fichier uniques
import axios from 'axios';

// Dans votre setup
const { showNotification } = useNotifications();

const cloudName = 'ddwutdh6t'
const uploadPreset = 'preset_profile'; // Remplacez par votre upload preset
const uploading = ref(false);

const departement = ref([])  

const emit = defineEmits(['saved']);
const isEditMode = ref(false);

const formData = ref({
  staff_id: '',
  subsidiary: 'SMRU',
  first_name: '',
  middle_name: '',
  departement_id: null,
  last_name: '',
  gender: 'Male',
  date_of_birth: '',
  status: 'Expats',
  religion: '',
  birth_place: '',
  identification_number: '',
  social_security_number: '',
  tax_number: '',
  passport_number: '',
  bank_name: '',
  bank_branch: '',
  profile_picture: '',
  bank_account_name: '',
  bank_account_number: '',
  office_phone: '',
  mobile_phone: '',
  permanent_address: '',
  current_address: '',
  stay_with: '',
  military_status: false,
  marital_status: 'Single',
  spouse_name: '',
  spouse_occupation: '',
  father_name: '',
  father_occupation: '',
  mother_name: '',
  mother_occupation: '',
  driver_license_number: '',
  email: '',
});

const show = (editMode = false, employeeData = null) => {
  isEditMode.value = editMode;
  
  if (editMode && employeeData) {
    formData.value = { ...employeeData };
  } else {
    // Reset form for new employee
    formData.value = {
      staff_id: '',
      subsidiary: 'SMRU',
      first_name: '',
      middle_name: '',
      departement_id: null,
      last_name: '',
      gender: 'Male',
      date_of_birth: '',
      status: '',
      religion: '',
      birth_place: '',
      identification_number: '',
      social_security_number: '',
      tax_number: '',
      passport_number: '',
      profile_picture: '',
      bank_name: '',
      bank_branch: '',
      bank_account_name: '',
      bank_account_number: '',
      office_phone: '',
      mobile_phone: '',
      permanent_address: '',
      current_address: '',
      stay_with: '',
      military_status: false,
      marital_status: 'Single',
      spouse_name: '',
      spouse_occupation: '',
      father_name: '',
      father_occupation: '',
      mother_name: '',
      mother_occupation: '',
      driver_license_number: '',
      email: '',
    };
  }
  
  const modal = new Modal(document.getElementById('employeeModal'));
  modal.show();
};

const fetchDepartement = async () => {
  try {
    const responsedepartement = await DepartmentPositionService.getAllDepartmentPositions()
    departement.value = responsedepartement.data

    console.log('departement.data', departement.value)
  } catch (error) {
    console.log('echec de chargement des departements', error)
    showNotification({
      type: 'error',
      title: 'Erreur',
      message: 'Impossible de charger les départements',
    });
  }
};
const submitForm = async () => {
  try {
    console.log('Full form data before submission:', JSON.parse(JSON.stringify(formData.value)));

    // Validation des champs obligatoires
    const requiredFields = {
      'staff_id': 'Staff ID',
      'first_name': 'First Name',
      'last_name': 'Last Name',
      'email': 'Email',
      'mobile_phone': 'Mobile Phone',
    };
    
    const missingFields = Object.entries(requiredFields)
      .filter(([field]) => !formData.value[field])
      .map(([_, name]) => name);
    
    if (missingFields.length > 0) {
      throw new Error(`Please fill all required fields: ${missingFields.join(', ')}`);
    }

    // Formatage des données avant envoi
    const formatPayloadValue = (value) => {
      if (value === '') return null;
      if (typeof value === 'boolean') return value ? 1 : 0;
      return value;
    };

    // Création du payload

    const payload = {
      ...formData.value,
      departement_id: formData.value.departement_id !== null ? Number(formData.value.departement_id) : null,
      military_status: formData.value.military_status ? 1 : 0,
      date_of_birth: formData.value.date_of_birth 
        ? new Date(formData.value.date_of_birth).toISOString().split('T')[0]
        : null
    };
    console.log('Final payload being sent:', payload);

    // Envoi à l'API
    let response;
    if (isEditMode.value) {
      response = await EmployeeService.updateEmployee(formData.value.staff_id, payload);
      showNotification({
        type: 'success',
        title: 'Success',
        message: 'Employee updated successfully!',
        timeout: 5000
      });
    } else {
       console.log('donnee Employee:', payload)
      response = await EmployeeService.createEmployee(payload);
      showNotification({
        type: 'success',
        title: 'Success',
        message: 'Employee created successfully!',
        timeout: 5000
      });
    }

    emit('saved', {
      action: isEditMode.value ? 'update' : 'create',
      employee: response.data
    });

    const modal = Modal.getInstance(document.getElementById('employeeModal'));
    modal.hide();
    
  } catch (error) {
    console.error('Submission error:', error);
    
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
};

const uploadImageToCloudinary = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
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
// Exposer la fonction show pour qu'elle puisse être appelée depuis le parent
defineExpose({ show });

onMounted(() => {
  fetchDepartement();
});

</script>

<style scoped>
.avatar {
  position: relative;
  width: 80px;
  height: 80px;
}
.upload-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>