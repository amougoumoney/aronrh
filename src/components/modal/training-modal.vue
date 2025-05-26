<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
import { Modal } from 'bootstrap';
import Multiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.min.css';
import EmployeeService from '@/services/employee.service';
import TrainertypeService from '@/services/trainertype.service'
import { useNotifications } from "@/composables/useNotifications";
import TrainingService  from "@/services/training.service";
import TrainerService from "@/services/trainerList.service"

const { showNotification } = useNotifications()
const router = useRouter();
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
const isEditMode = ref(false);
const employeeOptions = ref([]); // Options pour le multiselect
const employeeImages = ref({}); // Dictionnaire pour stocker les images par ID employé
const Trainer = ref({})

// Données statiques
const Trainingtype = ref([]);
const Status = ref([  { label: 'Active', value: 1 },
  { label: 'Inactive', value: 0 }]);
const dateFormat = "dd-MM-yyyy";

const fetchTrainingType = async() => {
  try {
    const response = await TrainertypeService.getAllTrainertype()
    Trainingtype.value = response.data.filter(trainer => trainer.status === true)
  } catch (error) {
    console.error('trainer',error)
  }
}

const fetchTrainer = async () => {
  try {
    const responseTrainer = await TrainerService.getAllTrainer()
    Trainer.value = responseTrainer.data
  } catch (error) {
    console.log('echec du chargement des formateurs', error)
  }
}

// Données du formulaire
const formData = ref({
  training_type: '',
  trainer: '',
  employees: [], // Ce sera un tableau de strings (IDs)
  training_cost: '',
  start_date: currentDate.value,
  end_date: currentDateOne.value,
  description: '',
  status: 0
});

const fetchEmployee = async () => {
  try {
    const response = await EmployeeService.getEmployees()
    // Préparer les options pour le multiselect
    employeeOptions.value = response.data.map(emp => ({
      value: emp.id, // L'ID comme valeur
      label: `${emp.firstName} ${emp.lastName}`, // Nom complet comme label
      image: emp.profilePicture // Stocker l'image
    }));
    
    // Créer un dictionnaire d'images pour accès rapide
    employeeImages.value = response.data.reduce((acc, emp) => {
      acc[emp.id] = emp.profilePicture;
      return acc;
    }, {});
    
  } catch(error) {
    console.log('erreur de chargement des employés:', error)
  }
}

// Fonction pour obtenir l'image d'un employé par son ID
const getEmployeeImage = (employeeId) => {
  return employeeImages.value[employeeId] || 'default-user.jpg';
};

// Afficher la modale en mode ajout ou édition
const show = (editMode = false, trainingData = null) => {
  isEditMode.value = editMode;
  
  if (editMode && trainingData) {
    // Convertir les données existantes si nécessaire
    formData.value = {
      ...trainingData,
      employees: Array.isArray(trainingData.employees) 
        ? trainingData.employees 
        : [trainingData.employees].filter(Boolean),
      start_date: trainingData.start_date ? new Date(trainingData.start_date) : currentDate.value,
      end_date: trainingData.end_date ? new Date(trainingData.end_date) : currentDateOne.value
    };
  } else {
    // Réinitialiser le formulaire
    formData.value = {
      training_type: '',
      trainer: '',
      employees: [],
      training_cost: '',
      start_date: currentDate.value,
      end_date: currentDateOne.value,
      description: '',
      status: 1
    };
  }
  
  const modal = new Modal(document.getElementById('trainingModal'));
  modal.show();
};

// Soumettre le formulaire
const submitForm = async () => {
  try {
    // Préparer les données pour l'API
    const payload = {
      ...formData.value,
      employees: formData.value.employees // Déjà au bon format (string[])
    };
    
    // Ici, vous devriez appeler votre service API
     if (isEditMode.value) {
       await TrainingService.updateTraining(payload.id, payload);
      showNotification({
      type: 'success',
      title: 'Success',
      message: 'Training updated successfully!',
      timeout: 5000
     });
     } else {
      console.log('training.data:', payload)
       await TrainingService.createTraining(payload);
      showNotification({
      type: 'success',
      title: 'Success',
      message: 'Training add successfully!',
      timeout: 5000
     });
     }
    
    const modal = Modal.getInstance(document.getElementById('trainingModal'));
    modal.hide();
    router.push("/training/training-list");
    
    
  } catch (error) {
    console.error("Error submitting training:", error);

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

// Calculer la durée de la formation
const trainingDuration = computed(() => {
  if (!formData.value.start_date || !formData.value.end_date) return 0;
  const diff = formData.value.end_date - formData.value.start_date;
  return Math.ceil(diff / (1000 * 60 * 60 * 24)) + 1;
});

defineExpose({ show });
onMounted(() => {
  fetchEmployee();
  fetchTrainingType();
  fetchTrainer()
}); 
</script>

<template>
  <!-- Modal unique pour ajout/édition -->
  <div class="modal fade" id="trainingModal">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">{{ isEditMode ? 'Edit' : 'Add' }} Training</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Training Type*</label>
                  <select v-model="formData.training_type" class="form-control" required>
                    <option value="" disabled>Select Training Type</option>
                    <option v-for="type in Trainingtype" :key="type.id" :value="type.id">
                      {{ type.type }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Trainer*</label>
                  <select v-model="formData.trainer" class="form-control" required>
                    <option value="" disabled>Select Trainer</option>
                    <option v-for="trainer in Trainer" :key="trainer.id" :value="trainer.id">
                      {{ trainer.firstName + ' ' +trainer.lastName }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <label class="form-label">Employees*</label>
                <Multiselect
                  v-model="formData.employees"
                  :options="employeeOptions"
                  :multiple="true"
                  :close-on-select="false"
                  :clear-on-select="false"
                  :preserve-search="true"
                  placeholder="Select employees"
                  label="label"
                  track-by="value"
                />
                <!-- Afficher les employés sélectionnés avec leurs images -->
                <div class="avatar-list-stacked avatar-group-sm mt-2">
                  <span 
                    v-for="employeeId in formData.employees" 
                    :key="employeeId" 
                    class="avatar border-0"
                  >
                    <img 
                      :src="`@/assets/img/users/${getEmployeeImage(employeeId)}`" 
                      class="rounded-circle" 
                      alt="img" 
                    />
                  </span>
                  <span 
                    v-if="formData.employees.length > 0" 
                    class="avatar group-counts bg-primary rounded-circle border-0 fs-10"
                  >
                    +{{ formData.employees.length }}
                  </span>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Training Cost (FCFA)*</label>
                  <input 
                    type="number" 
                    class="form-control" 
                    v-model="formData.training_cost" 
                    min="0" 
                    required
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Start Date*</label>
                  <div class="input-icon-end position-relative">
                    <date-picker 
                      v-model="formData.start_date" 
                      class="form-control datetimepicker" 
                      placeholder="dd/mm/yyyy"
                      :editable="true" 
                      :clearable="false" 
                      :input-format="dateFormat"
                      required
                    />
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar text-gray-7"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">End Date*</label>
                  <div class="input-icon-end position-relative">
                    <date-picker 
                      v-model="formData.end_date" 
                      class="form-control datetimepicker" 
                      placeholder="dd/mm/yyyy"
                      :editable="true" 
                      :clearable="false" 
                      :input-format="dateFormat"
                      :min-date="formData.start_date"
                      required
                    />
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar text-gray-7"></i>
                    </span>
                  </div>
                  <small v-if="trainingDuration > 0" class="text-muted">
                    Duration: {{ trainingDuration }} day(s)
                  </small>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Description*</label>
                  <textarea 
                    class="form-control" 
                    v-model="formData.description"
                    rows="3"
                    required
                  ></textarea>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Status*</label>
                  <select v-model="formData.status" class="form-control" required>
                    <option v-for="status in Status" :key="status.value" :value="status.value">
                      {{ status.label }}
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
              {{ isEditMode ? 'Update' : 'Add' }} Training
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Delete Modal -->
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
            <a href="/training/training-list" class="btn btn-danger">Yes, Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>