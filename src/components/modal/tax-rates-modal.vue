<template>
  <!-- Add Tax Rate -->
  <div class="modal fade" id="add_tax_rate">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Tax Rate</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Tax Name</label>
                  <input type="text" class="form-control" placeholder="Enter Tax Name" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Tax Rate</label>
                  <input type="text" class="form-control" placeholder="Enter Tax Rate" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <vue-select :options="StatSelA" id="stata" placeholder="Select" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary">Add Tax Rate</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Tax Rate -->

  <!-- Edit Tax Rate -->
  <div class="modal fade" id="edit_tax_rate">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Tax Rate</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Tax Name</label>
                  <input type="text" class="form-control" placeholder="Enter Tax Name" value="GST" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Tax Rate</label>
                  <input type="text" class="form-control" placeholder="Enter Tax Rate" value="14%" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <vue-select :options="EditStatSelA" id="seedittata" placeholder="Active" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Tax Rate -->

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
            <router-link to="/finacial-settings/tax-rates" class="btn btn-danger">Yes, Delete</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
</template>
<script>
export default {
  data() {
    return {
      StatSelA: ["Select", "Active", "Inactive"],
      EditStatSelA: ["Select", "Active", "Inactive"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/financial-settings/tax-rates");
    },
  },
};
</script>
