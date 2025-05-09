<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
import { Modal } from 'bootstrap';
import Multiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.min.css';
import EmployeeService from '@/services/employee.service';
import TrainertypeService from '@/services/trainertype.service'

const router = useRouter();
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
const isEditMode = ref(false);
const employee = ref([])
// Données statiques (pourrait être remplacé par des appels API)
const Trainingtype = ref([]);
const Trainer = ref([]);
const Employees = ref(["Bernardo Galaviz", "Jeffrey Warden"]);
const Status = ref(["Active", "Inactive"]);
const dateFormat = "dd-MM-yyyy";


const fetchTrainer = async() =>{
  try {
    const response = await TrainertypeService.getAllTrainertype()
     Trainingtype.value = response.data.filter(trainer => trainer.status === true)
  } catch (error) {
    console.error('trainer',error)
  }
}

// Données du formulaires
const formData = ref({
  training_type: '',
  trainer: '',
  employees: [],
  training_cost: '',
  start_date: currentDate.value,
  end_date: currentDateOne.value,
  description: '',
  status: 'Active'
});

const fetchemployee = async () => {
  try {
    const response = await EmployeeService.getEmployees()
    employee.value = response.data
  }catch(error){
    console.log('erruer de chargement des employees:', error)
  }
}

// Met à jour Employees en fonction des éléments sélectionnés
watch(() => formData.value.employees, (newVal, oldVal) => {
  // Ajouter les anciens sélectionnés retirés
  const removed = oldVal.filter(e => !newVal.includes(e));
  removed.forEach(emp => {
    if (!employee.value.includes(emp)) {
      employee.value.push(emp);
    }
  });

  // Retirer les nouveaux sélectionnés
  Employees.value = Employees.value.filter(e => !newVal.includes(e));
});

// Afficher la modale en mode ajout ou édition
const show = (editMode = false, trainingData = null) => {
  isEditMode.value = editMode;
  
  if (editMode && trainingData) {
    // Remplir le formulaire avec les données existantes
    formData.value = {
      ...trainingData,
      start_date: trainingData.start_date ? new Date(trainingData.start_date) : currentDate.value,
      end_date: trainingData.end_date ? new Date(trainingData.end_date) : currentDateOne.value
    };
  } else {
    // Réinitialiser le formulaire pour un nouvel ajout
    formData.value = {
      training_type: '',
      trainer: '',
      employees: [],
      training_cost: '',
      start_date: currentDate.value,
      end_date: currentDateOne.value,
      description: '',
      status: 'Active'
    };
  }
  
  const modal = new Modal(document.getElementById('trainingModal'));
  modal.show();
};

// Soumettre le formulaire
const submitForm = async () => {
  try {
    // Ici, vous devriez appeler votre service API pour créer/mettre à jour la formation
    // Exemple:
    // if (isEditMode.value) {
    //   await TrainingService.updateTraining(formData.value.id, formData.value);
    // } else {
    //   await TrainingService.createTraining(formData.value);
    // }
    
    // Fermer la modale
    const modal = Modal.getInstance(document.getElementById('trainingModal'));
    modal.hide();
    
    // Rediriger ou rafraîchir les données
    router.push("/training/training-list");
    
  } catch (error) {
    console.error("Error submitting training:", error);
    // Gérer les erreurs ici
  }
};

// Calculer la durée de la formation en jours
const trainingDuration = computed(() => {
  if (!formData.value.start_date || !formData.value.end_date) return 0;
  const diff = formData.value.end_date - formData.value.start_date;
  return Math.ceil(diff / (1000 * 60 * 60 * 24)) + 1; // +1 pour inclure le premier jour
});

defineExpose({ show });
onMounted(() => {
  fetchemployee();
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
                  :options="employee"
                  :multiple="true"
                  :close-on-select="false"
                  :clear-on-select="false"
                  :preserve-search="true"
                  placeholder="Select employees"
                />
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
                    <option v-for="status in Status" :key="status" :value="status">
                      {{ status }}
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
            <a href="/training/training-list" class="btn btn-danger">Yes, Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>