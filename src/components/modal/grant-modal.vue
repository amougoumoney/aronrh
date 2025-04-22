<template>
  <div class="modal custom-modal fade" id="grant_modal" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ isEditing ? 'Edit Grant' : 'Add Grant' }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="handleSubmit">
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="form-label">{{$t('BGLine')}}</label>
                  <input type="text" v-model="formData.bg_line" class="form-control" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="form-label">{{$t('GrantPosition')}}</label>
                  <input type="text" v-model="formData.grant_position" class="form-control" required>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="form-label">{{$t('GrantSalary')}}</label>
                  <input type="number" v-model="formData.grant_salary" class="form-control" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="form-label">{{$t('GrantBenefit')}}</label>
                  <input type="number" v-model="formData.grant_benefit" class="form-control" required>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="form-label">{{$t('GrantLevelofEffort')}}</label>
                  <input type="number" v-model="formData.grant_level_of_effort" class="form-control" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="form-label">{{$t('GrantPositionNumber')}}</label>
                  <input type="number" v-model="formData.grant_position_number" class="form-control" required>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="input-block mb-3">
                  <label class="form-label">{{$t('GrantCostbyMonthly')}}</label>
                  <input type="number" v-model="formData.grant_cost_by_monthly" class="form-control" required>
                </div>
              </div>
              <div class="col-md-4">
                <div class="input-block mb-3">
                  <label class="form-label">{{$t('GrantTotalCostbyPerson')}}</label>
                  <input type="number" v-model="formData.grant_total_cost_by_person" class="form-control" required>
                </div>
              </div>
              <div class="col-md-4">
                <div class="input-block mb-3">
                  <label class="form-label">{{$t('GrantID')}}</label>
                  <select v-model="formData.grant_id" class="form-control">
                    <option v-for="grant in grants" :key="grant.id" :value="grant.id">
                      {{ grant.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="form-label">{{$t('PositionID')}}</label>
                  <select v-model="formData.position_id" class="form-control">
                    <option v-for="position in positions" :key="position.id" :value="position.id">
                      {{ position.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="form-label">{{$t('GrantTotalAmount')}}</label>
                  <input type="number" v-model="formData.grant_total_amount" class="form-control" required>
                </div>
              </div>
            </div>

            <div class="submit-section">
              <button type="submit" class="btn btn-primary">
                {{ isEditing ? $t('UpdateGrant') : $t('AddGrant') }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineEmits } from 'vue';
import GrantItemService from '@/services/grantitem.service'; // Import your service here
import { useNotifications } from '@/composables/useNotifications';

const emit = defineEmits(['submit']);
const {showNotification} = useNotifications();

const isEditing = ref(false);
const formData = ref({
  grant_id: 1,
  bg_line: '',
  grant_position: '',
  grant_salary: null,
  grant_benefit: null,
  grant_level_of_effort: null,
  grant_position_number: null,
  grant_cost_by_monthly: null,
  grant_total_cost_by_person: null,
  position_id: null,
  grant_total_amount: null,
});

const grants = ref([]);
const positions = ref([]);

const fetchGrants = async () => {
  try {
    const response = await GrantItemService.getGrants(); // Méthode à définir dans votre service
    grants.value = response.data;
  } catch (error) {
    console.error('Error fetching grants:', error);
  }
};

const fetchPositions = async () => {
  try {
    const response = await GrantItemService.getPositions(); // Méthode à définir dans votre service
    positions.value = response.data;
  } catch (error) {
    console.error('Error fetching positions:', error);
  }
};

onMounted(() => {
  fetchGrants();
  fetchPositions();
});

const handleSubmit = async () => {
  const payload = { ... formData.value };
  try {
    console.log('Submitting form:', payload);
    const response = isEditing.value
      ? await GrantItemService.updateGrantItem(payload.id, payload) 
      : await GrantItemService.createGrantItem(payload);

    showNotification({
      type: 'success',
      title: 'Success',
      message: isEditing.value ? 'Grant updated successfully!' : 'Grant added successfully!',
    });

    emit('submit', response.data);
    resetForm();
    closeModal();
  } catch (error) {
    console.error('Error:', error);
    showNotification({
      type: 'error',
      title: 'Error',
      message: error.response?.data?.message || 'An error occurred.',
    });
  }
};

const resetForm = () => {
  formData.value = {
    grant_id: null,
    bg_line: '',
    grant_position: '',
    grant_salary: null,
    grant_benefit: null,
    grant_level_of_effort: null,
    grant_position_number: null,
    grant_cost_by_monthly: null,
    grant_total_cost_by_person: null,
    position_id: null,
    grant_total_amount: null,
  };
  isEditing.value = false;
};

const closeModal = () => {
  document.querySelector('#grant_modal [data-bs-dismiss="modal"]').click();
};

const setEditData = (data) => {
  formData.value = { ...data };
  isEditing.value = true;
};
</script>

<style scoped>
.modal-dialog {
  max-width: 800px;
}
.input-block {
  position: relative;
}
.form-label {
  font-weight: 500;
}
</style>