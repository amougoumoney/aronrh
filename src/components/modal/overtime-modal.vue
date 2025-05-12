<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { Modal } from "bootstrap";

const router = useRouter();
const currentDate = ref(new Date());
const dateFormat = "dd-MM-yyyy";

// Options pour les sélecteurs
const Employee = ref(["Anthony Lewis", "Brian Villalobos", "Harvey Smith"]);
const Status = ref(["Accepted", "Rejected"]);

// Données du formulaire
const formData = ref({
  employee: '',
  overtimeDate: currentDate.value,
  overtimeHours: '',
  remainingHours: '',
  description: '',
  status: ''
});

// Contrôle de l'affichage
const isEditMode = ref(false);
const isDetailView = ref(false);
const modalTitle = computed(() => {
  if (isDetailView.value) return "Overtime Details";
  return isEditMode.value ? "Edit Overtime" : "Add Overtime";
});

// Méthodes
const show = (mode = 'add', overtimeData = null) => {
  isEditMode.value = mode === 'edit';
  isDetailView.value = mode === 'view';
  
  if (overtimeData) {
    formData.value = { 
      ...overtimeData,
      overtimeDate: overtimeData.overtimeDate ? new Date(overtimeData.overtimeDate) : currentDate.value
    };
  } else {
    resetForm();
  }
  
  // Afficher la modale
  const modal = new Modal(document.getElementById('overtimeModal'));
  modal.show();
};

const resetForm = () => {
  formData.value = {
    employee: '',
    overtimeDate: currentDate.value,
    overtimeHours: '',
    remainingHours: '',
    description: '',
    status: ''
  };
};

const submitForm = () => {
  // Ici, ajoutez la logique pour sauvegarder les données
  // if (isEditMode.value) {
  //   OvertimeService.update(formData.value);
  // } else {
  //   OvertimeService.create(formData.value);
  // }
  
  router.push("/attendance/overtime");
};

// Exposer la méthode show au parent
defineExpose({ show });
</script>

<template>
  <!-- Modal unique pour ajout/édition/visualisation -->
  <div class="modal fade" id="overtimeModal">
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">{{ modalTitle }}</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        
        <form @submit.prevent="submitForm" v-if="!isDetailView">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Employee<span class="text-danger">*</span></label>
                  <select 
                    v-model="formData.employee" 
                    class="form-control" 
                    :disabled="isDetailView"
                    required
                  >
                    <option value="" disabled>Select Employee</option>
                    <option v-for="emp in Employee" :key="emp" :value="emp">
                      {{ emp }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Overtime date<span class="text-danger">*</span></label>
                  <div class="input-icon-end position-relative">
                    <date-picker 
                      v-model="formData.overtimeDate" 
                      class="form-control datetimepicker" 
                      placeholder="dd/mm/yyyy"
                      :editable="true" 
                      :clearable="false" 
                      :input-format="dateFormat"
                      :disabled="isDetailView"
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
                  <label class="form-label">Overtime<span class="text-danger">*</span></label>
                  <input 
                    type="number" 
                    class="form-control" 
                    v-model="formData.overtimeHours"
                    :disabled="isDetailView"
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
                    :disabled="isDetailView"
                    min="0"
                    step="0.1"
                    required
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Description</label>
                  <textarea 
                    class="form-control" 
                    rows="3"
                    v-model="formData.description"
                    :disabled="isDetailView"
                  ></textarea>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Status<span class="text-danger">*</span></label>
                  <select 
                    v-model="formData.status" 
                    class="form-control"
                    :disabled="isDetailView"
                    required
                  >
                    <option value="" disabled>Select Status</option>
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
              {{ isEditMode ? 'Save Changes' : 'Add Overtime' }}
            </button>
          </div>
        </form>

        <!-- Vue détail seulement -->
        <div class="modal-body pb-0" v-else>
          <div class="row">
            <div class="col-md-12">
              <div class="mb-3">
                <div class="p-3 mb-3 br-5 bg-transparent-light">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="d-flex align-items-center file-name-icon">
                        <a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
                          <img src="@/assets/img/users/user-32.jpg" class="img-fluid" alt="img" />
                        </a>
                        <div class="ms-2">
                          <h6 class="fw-medium fs-14">
                            <a href="javascript:void(0);">{{ formData.employee }}</a>
                          </h6>
                          <span class="fs-12 fw-normal">UI/UX Team</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div>
                        <p class="fs-14 fw-normal mb-1">Hours Worked</p>
                        <h6 class="fs-14 fw-medium">{{ formData.overtimeHours }}</h6>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div>
                        <p class="fs-14 fw-normal mb-1">Date</p>
                        <h6 class="fs-14 fw-medium">{{ formData.overtimeDate.toLocaleDateString() }}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <h6 class="fs-14 fw-medium">Office Management</h6>
                <p class="fs-12 fw-normal">
                  {{ formData.description || 'No description provided' }}
                </p>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Select Status <span class="text-danger">*</span></label>
                <select 
                  v-model="formData.status" 
                  class="form-control"
                  required
                >
                  <option v-for="status in Status" :key="status" :value="status">
                    {{ status }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
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
            <router-link to="/attendance/overtime" class="btn btn-danger">Yes, Delete</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>