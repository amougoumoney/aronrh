<script setup>
import { ref, computed } from 'vue';
import { Modal } from 'bootstrap';
import { useNotifications } from '@/composables/useNotifications';

const { showNotification } = useNotifications();

const emit = defineEmits(['saved']);
const isEditMode = ref(false);

// Données du formulaire
const formData = ref({
  employee_name: '',
  leave_type: '',
  from_date: new Date(),
  to_date: new Date(),
  days_count: '',
  remaining_days: '',
  reason: ''
});

// Options pour les selects
const employeeOptions = ref([
  { value: '', label: 'Select' },
  { value: 'Anthony Lewis', label: 'Anthony Lewis' },
  { value: 'Brian Villalobos', label: 'Brian Villalobos' },
  { value: 'Harvey Smith', label: 'Harvey Smith' }
]);

const leaveTypeOptions = ref([
  { value: '', label: 'Select' },
  { value: 'Medical Leave', label: 'Medical Leave' },
  { value: 'Casual Leave', label: 'Casual Leave' },
  { value: 'Annual Leave', label: 'Annual Leave' }
]);

// Calculer le nombre de jours entre les dates
const daysCount = computed(() => {
  if (!formData.value.from_date || !formData.value.to_date) return 0;
  
  const diffTime = Math.abs(new Date(formData.value.to_date) - new Date(formData.value.from_date));
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 pour inclure le jour de départ
});

// Afficher le modal
const show = (editMode = false, leaveData = null) => {
  isEditMode.value = editMode;
  
  if (editMode && leaveData) {
    formData.value = { ...leaveData };
  } else {
    // Réinitialiser le formulaire pour une nouvelle demande
    formData.value = {
      employee_name: '',
      leave_type: '',
      from_date: new Date(),
      to_date: new Date(),
      days_count: '',
      remaining_days: '',
      reason: ''
    };
  }
  
  const modalId = editMode ? 'edit_leaves' : 'add_leaves';
  const modal = new Modal(document.getElementById(modalId));
  modal.show();
};

// Soumettre le formulaire
const submitForm = async () => {
  try {
    // Validation
    if (!formData.value.employee_name || !formData.value.leave_type) {
      throw new Error('Please select employee and leave type');
    }
    
    if (new Date(formData.value.from_date) > new Date(formData.value.to_date)) {
      throw new Error('End date must be after start date');
    }
    
    // Mettre à jour le nombre de jours
    formData.value.days_count = daysCount.value;
    
    // Ici vous ajouteriez l'appel à votre API
    // const response = isEditMode.value 
    //   ? await updateLeave(formData.value)
    //   : await createLeave(formData.value);
    
    showNotification({
      type: 'success',
      title: 'Success',
      message: isEditMode.value ? 'Leave updated successfully' : 'Leave created successfully',
      timeout: 5000
    });
    
    emit('saved', {
      action: isEditMode.value ? 'update' : 'create',
      data: formData.value
    });
    
    // Fermer le modal
    const modalId = isEditMode.value ? 'edit_leaves' : 'add_leaves';
    const modal = Modal.getInstance(document.getElementById(modalId));
    modal.hide();
    
  } catch (error) {
    showNotification({
      type: 'error',
      title: 'Error',
      message: error.message || 'An error occurred',
      timeout: 8000
    });
  }
};

// Exposer les méthodes
defineExpose({ show });
</script>

<template>
  <!-- Add Leaves Modal -->
  <div class="modal fade" id="add_leaves" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Leave</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Employee Name</label>
                  <vue-select 
                    v-model="formData.employee_name"
                    :options="employeeOptions" 
                    placeholder="Select"
                    required
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Leave Type</label>
                  <vue-select 
                    v-model="formData.leave_type"
                    :options="leaveTypeOptions" 
                    placeholder="Select"
                    required
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">From</label>
                  <div class="input-icon-end position-relative">
                    <date-picker 
                      v-model="formData.from_date" 
                      class="form-control datetimepicker" 
                      placeholder="dd/mm/yyyy"
                      :editable="true" 
                      :clearable="false" 
                      input-format="dd-MM-yyyy"
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
                  <label class="form-label">To</label>
                  <div class="input-icon-end position-relative">
                    <date-picker 
                      v-model="formData.to_date" 
                      class="form-control datetimepicker" 
                      placeholder="dd/mm/yyyy"
                      :editable="true" 
                      :clearable="false" 
                      input-format="dd-MM-yyyy"
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
                  <label class="form-label">No of Days</label>
                  <input 
                    v-model="daysCount"
                    type="text" 
                    class="form-control" 
                    readonly
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Remaining Days</label>
                  <input 
                    v-model="formData.remaining_days"
                    type="text" 
                    class="form-control" 
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Reason</label>
                  <textarea 
                    v-model="formData.reason"
                    class="form-control" 
                    rows="3"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Add Leave</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Edit Leaves Modal -->
  <div class="modal fade" id="edit_leaves" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Leave</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Employee Name</label>
                  <vue-select 
                    v-model="formData.employee_name"
                    :options="employeeOptions" 
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Leave Type</label>
                  <vue-select 
                    v-model="formData.leave_type"
                    :options="leaveTypeOptions" 
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">From</label>
                  <div class="input-icon-end position-relative">
                    <date-picker 
                      v-model="formData.from_date" 
                      class="form-control datetimepicker" 
                      :editable="true" 
                      :clearable="false" 
                      input-format="dd-MM-yyyy"
                    />
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar text-gray-7"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">To</label>
                  <div class="input-icon-end position-relative">
                    <date-picker 
                      v-model="formData.to_date" 
                      class="form-control datetimepicker" 
                      :editable="true" 
                      :clearable="false" 
                      input-format="dd-MM-yyyy"
                    />
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar text-gray-7"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">No of Days</label>
                  <input 
                    v-model="daysCount"
                    type="text" 
                    class="form-control" 
                    readonly
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Remaining Days</label>
                  <input 
                    v-model="formData.remaining_days"
                    type="text" 
                    class="form-control" 
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Reason</label>
                  <textarea 
                    v-model="formData.reason"
                    class="form-control" 
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Delete Modal (unchanged) -->
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
            <router-link to="/leave/leaves-admin" class="btn btn-danger">Yes, Delete</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>