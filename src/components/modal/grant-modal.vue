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
                  <label class="form-label">Grant Name</label>
                  <input type="text" v-model="formData.grantName" class="form-control" placeholder="e.g., UNICEF-EP" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="form-label">Grant Code</label>
                  <input type="text" v-model="formData.grantCode" class="form-control" placeholder="e.g., B-24004" required>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="form-label">Grant BG Line</label>
                  <input type="text" v-model="formData.grantBGLine" class="form-control" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="form-label">Grant Position</label>
                  <input type="text" v-model="formData.grantPosition" class="form-control" required>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="form-label">Grant Salary</label>
                  <input type="number" v-model="formData.grantSalary" class="form-control" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="form-label">Grant Benefit</label>
                  <input type="number" v-model="formData.grantBenefit" class="form-control" required>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="form-label">Grant Level of Effort (%)</label>
                  <input type="number" v-model="formData.grantLevelOfEffort" class="form-control" min="0" max="100" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="form-label">Grant Position Number</label>
                  <input type="text" v-model="formData.grantPositionNumber" class="form-control" required>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="input-block mb-3">
                  <label class="form-label">Grant Cost by Monthly</label>
                  <input type="number" v-model="formData.grantCostMonthly" class="form-control" required>
                </div>
              </div>
              <div class="col-md-4">
                <div class="input-block mb-3">
                  <label class="form-label">Grant Total Amount (Year)</label>
                  <input type="number" v-model="formData.grantTotalAmountYear" class="form-control" required>
                </div>
              </div>
              <div class="col-md-4">
                <div class="input-block mb-3">
                  <label class="form-label">Grant Total Cost by Person</label>
                  <input type="number" v-model="formData.grantTotalCostByPerson" class="form-control" required>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="form-label">Grant Position ID</label>
                  <input type="text" v-model="formData.grantPositionId" class="form-control" required>
                </div>
              </div>
            </div>

            <div class="submit-section">
              <button type="submit" class="btn btn-primary">
                {{ isEditing ? 'Update Grant' : 'Add Grant' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GrantModal',
  data() {
    return {
      isEditing: false,
      formData: {
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
      }
    };
  },
  methods: {
    handleSubmit() {
      // Emit the form data to parent component
      this.$emit('submit', this.formData);
      
      // Reset form after submission
      this.resetForm();
      
      // Close modal
      document.querySelector('#grant_modal [data-bs-dismiss="modal"]').click();
    },
    resetForm() {
      this.formData = {
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
      this.isEditing = false;
    },
    setEditData(data) {
      this.formData = { ...data };
      this.isEditing = true;
    }
  }
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