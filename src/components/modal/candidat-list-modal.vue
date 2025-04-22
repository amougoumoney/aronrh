<template>
  <div 
    class="modal custom-modal fade" id="add_candidates" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            {{ isEditing ? 'Edit Grant' : 'Add Grant' }}
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="handleSubmit">
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="form-label">{{$t('GrantName')}}</label>
                  <input type="text" v-model="formData.grantName" class="form-control" :placeholder= "$t('e.g.,UNICEF-EP')" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="form-label">{{$t('GrantCode')}}</label>
                  <input type="text" v-model="formData.grantCode" class="form-control" :placeholder="$t('e.g.,B-24004')" required>
                </div>
              </div>
            </div>
  
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="form-label">{{$t('GrantBGLine')}}</label>
                  <input type="text" v-model="formData.grantBGLine" class="form-control" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="form-label">{{$t('GrantPosition')}}</label>
                  <input type="text" v-model="formData.grantPosition" class="form-control" required>
                </div>
              </div>
            </div>
  
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="form-label">{{$t('GrantSalary')}}</label>
                  <input type="number" v-model="formData.grantSalary" class="form-control" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="form-label">{{$t('GrantBenefit')}}</label>
                  <input type="number" v-model="formData.grantBenefit" class="form-control" required>
                </div>
              </div>  
            </div>
  
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="form-label">{{$t('GrantLevelofEffort')}} (%)</label>
                  <input type="number" v-model="formData.grantLevelOfEffort" class="form-control" min="0" max="100" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="form-label">{{$t('GrantPositionNumber')}}</label>
                  <input type="text" v-model="formData.grantPositionNumber" class="form-control" required>
                </div>
              </div>
            </div>
  
            <div class="row">
              <div class="col-md-4">
                <div class="input-block mb-3">
                  <label class="form-label">{{$t('GrantCostbyMonthly')}}</label>
                  <input type="number" v-model="formData.grantCostMonthly" class="form-control" required>
                </div>
              </div>
              <div class="col-md-4">
                <div class="input-block mb-3">
                  <label class="form-label">{{$t('GrantTotalAmount(Year)')}}</label>
                  <input type="number" v-model="formData.grantTotalAmountYear" class="form-control" required>
                </div>
              </div>
              <div class="col-md-4">
                <div class="input-block mb-3">
                  <label class="form-label">{{$t('GrantTotalCostbyPerson')}}</label>
                  <input type="number" v-model="formData.grantTotalCostByPerson" class="form-control" required>
                </div>
              </div>
            </div>
  
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="form-label">{{$t('GrantPositionID')}}</label>
                  <input type="text" v-model="formData.grantPositionId" class="form-control" required>
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
  import { ref } from 'vue';
  import { defineEmits } from 'vue';
  
  const emit = defineEmits(['submit']);
  
  const isEditing = ref(false);
  const formData = ref({
    grantName: '',
    grantCode: '',
    grantBGLine: '',
    grantPosition: '',
    grantSalary: null,
    grantBenefit: null,
    grantLevelOfEffort: null,
    grantPositionNumber: '',
    grantCostMonthly: null,
    grantTotalAmountYear: null,
    grantTotalCostByPerson: null,
    grantPositionId: ''
  });
  
  function handleSubmit() {
    // Emit the form data to the parent component
    emit('submit', formData.value);
    
    // Reset form after submission
    resetForm();
    
    // Close modal
    document.querySelector('#add_candidates[data-bs-dismiss="modal"]').click();
  }
  
  function resetForm() {
    formData.value = {
      grantName: '',
      grantCode: '',
      grantBGLine: '',
      grantPosition: '',
      grantSalary: null,
      grantBenefit: null,
      grantLevelOfEffort: null,
      grantPositionNumber: '',
      grantCostMonthly: null,
      grantTotalAmountYear: null,
      grantTotalCostByPerson: null,
      grantPositionId: ''
    };
    isEditing.value = false;
  }
  
  function setEditData(data) {
    formData.value = { ...data };
    isEditing.value = true;
  }
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