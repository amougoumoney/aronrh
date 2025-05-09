<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { Modal } from "bootstrap";
const router = useRouter();
const currentDate = ref(new Date());
const dateFormat = "dd-MM-yyyy";

// Options pour les sélecteurs
const Project = ref([
  "Office Management",
  "Project Management",
  "Hospital Administration"
]);

// Données du formulaire
const formData = ref({
  project: '',
  deadline: currentDate.value,
  totalHours: '',
  remainingHours: '',
  date: currentDate.value,
  hours: ''
});

// Contrôle de l'affichage
const isEditMode = ref(false);
const modalTitle = computed(() => isEditMode.value ? "Edit Todays Work" : "Add Todays Work");

// Méthodes
const show = (editMode = false, timesheetData = null) => {
  isEditMode.value = editMode;
  
  if (editMode && timesheetData) {
    formData.value = { 
      ...timesheetData,
      deadline: timesheetData.deadline ? new Date(timesheetData.deadline) : currentDate.value,
      date: timesheetData.date ? new Date(timesheetData.date) : currentDate.value
    };
  } else {
    resetForm();
  }
  
  // Afficher la modale
  const modal = new Modal(document.getElementById('timesheetModal'));
  modal.show();
};

const resetForm = () => {
  formData.value = {
    project: '',
    deadline: currentDate.value,
    totalHours: '',
    remainingHours: '',
    date: currentDate.value,
    hours: ''
  };
};

const submitForm = () => {
  // Ici, ajoutez la logique pour sauvegarder les données
  // if (isEditMode.value) {
  //   TimesheetService.update(formData.value);
  // } else {
  //   TimesheetService.create(formData.value);
  // }
  
  router.push("/attendance/timesheets");
};

// Calcul des heures restantes (exemple)
const calculateRemainingHours = () => {
  if (formData.value.totalHours && formData.value.hours) {
    formData.value.remainingHours = parseFloat(formData.value.totalHours) - parseFloat(formData.value.hours);
  }
};

// Exposer la méthode show au parent
defineExpose({ show });
</script>

<template>
  <!-- Modal unique pour ajout/édition -->
  <div class="modal fade" id="timesheetModal">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">{{ modalTitle }}</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Project <span class="text-danger">*</span></label>
                  <select 
                    v-model="formData.project" 
                    class="form-control" 
                    required
                  >
                    <option value="" disabled>Select Project</option>
                    <option v-for="project in Project" :key="project" :value="project">
                      {{ project }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Deadline <span class="text-danger">*</span></label>
                  <div class="input-icon-end position-relative">
                    <date-picker 
                      v-model="formData.deadline" 
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
                  <label class="form-label">Total Hours <span class="text-danger">*</span></label>
                  <input 
                    type="number" 
                    class="form-control" 
                    v-model="formData.totalHours"
                    @input="calculateRemainingHours"
                    min="0"
                    step="0.1"
                    required
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Remaining Hours<span class="text-danger">*</span></label>
                  <input 
                    type="number" 
                    class="form-control" 
                    v-model="formData.remainingHours"
                    readonly
                    required
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Date<span class="text-danger">*</span></label>
                  <div class="input-icon-end position-relative">
                    <date-picker 
                      v-model="formData.date" 
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
                  <label class="form-label">Hours<span class="text-danger">*</span></label>
                  <input 
                    type="number" 
                    class="form-control" 
                    v-model="formData.hours"
                    @input="calculateRemainingHours"
                    min="0"
                    step="0.1"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">
              {{ isEditMode ? 'Save Changes' : 'Add Changes' }}
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
            <button class="btn btn-light me-3" data-bs-dismiss="modal">Cancel</button>
            <router-link to="/attendance/timesheets" class="btn btn-danger">Yes, Delete</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>