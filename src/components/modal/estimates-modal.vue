<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());

export default {
  data() {
    return {
      Client: ["Select", "Michael Walker", "Sophie Headrick", "Cameron Drake"],
      Project: ["Select", "Project Management", "Office Management"],
      Tax: ["Select", "VAT", "GST", "No Tax"],
      startdate: currentDate,
      startdateOne: currentDateOne,
      dateFormat: "dd-MM-yyyy",
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/sales/estimates");
    },
  },
};
</script>

<template>
  <!-- Add Estimate  -->
  <div class="modal fade" id="add_estimate">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add New Estimate</h4>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Client <span class="text-danger"> *</span></label
                  >
                  <vue-select :options="Client" id="headrick" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Project <span class="text-danger"> *</span></label
                  >
                  <vue-select
                    :options="Project"
                    id="manage-project"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Email <span class="text-danger"> *</span></label
                  >
                  <input type="email" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Tax <span class="text-danger"> *</span></label
                  >
                  <vue-select :options="Tax" id="manage-tax" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Client Address</label>
                  <textarea class="form-control" rows="3"></textarea>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Biling Address</label>
                  <textarea class="form-control" rows="3"></textarea>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Estimate Date</label>
                  <div class="input-icon position-relative w-100 me-2">
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar"></i>
                    </span>
                    <date-picker
                      v-model="startdate"
                      class="form-control datetimepicker"
                      placeholder="dd/mm/yyyy"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Expiry Date</label>
                  <div class="input-icon position-relative w-100 me-2">
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar"></i>
                    </span>
                    <date-picker
                      v-model="startdateOne"
                      class="form-control datetimepicker"
                      placeholder="dd/mm/yyyy"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <h4 class="mb-2">Add Items</h4>
              <div class="border rounded p-3 mb-3">
                <div class="add-estimate-info">
                  <div class="row">
                    <div class="col-md-2">
                      <div class="mb-3">
                        <label class="form-label">Item</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="mb-3">
                        <label class="form-label">Description</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div class="mb-3">
                        <label class="form-label">Unit Cost</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div class="mb-3">
                        <label class="form-label">Qty</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div class="mb-3">
                        <label class="form-label">Amount</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="javascript:void(0);"
                  class="text-primary add-more-estimate fw-medium d-flex align-items-center mb-2"
                  ><i class="ti ti-plus me-2"></i>Add New Item</a
                >
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Total </label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Tax </label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Discount(%) </label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Grand Total </label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Other Information</label>
                <textarea class="form-control" rows="3"></textarea>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Add Estimate</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Estimate -->

  <!-- Add Estimate  -->
  <div class="modal fade" id="edit_estimate">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Estimate</h4>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Client <span class="text-danger"> *</span></label
                  >
                  <vue-select
                    :options="Client"
                    id="headrick-one"
                    placeholder="Michael Walker"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Project <span class="text-danger"> *</span></label
                  >
                  <vue-select
                    :options="Project"
                    id="manage-project-one"
                    placeholder="Project Management"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Email <span class="text-danger"> *</span></label
                  >
                  <input
                    type="email"
                    class="form-control"
                    value="michaelwalker@example.com"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Tax <span class="text-danger"> *</span></label
                  >
                  <vue-select :options="Tax" id="manage-tax-one" placeholder="VAT" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Client Address</label>
                  <textarea class="form-control" rows="3"></textarea>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Biling Address</label>
                  <textarea class="form-control" rows="3"></textarea>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Estimate Date</label>
                  <div class="input-icon position-relative w-100 me-2">
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar"></i>
                    </span>
                    <date-picker
                      v-model="startdate"
                      class="form-control datetimepicker"
                      placeholder="dd/mm/yyyy"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Expiry Date</label>
                  <div class="input-icon position-relative w-100 me-2">
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar"></i>
                    </span>
                    <date-picker
                      v-model="startdate"
                      class="form-control datetimepicker"
                      placeholder="dd/mm/yyyy"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <h4 class="mb-2">Add Items</h4>
              <div class="border rounded p-3 mb-3">
                <div class="add-estimate-info">
                  <div class="row">
                    <div class="col-md-2">
                      <div class="mb-3">
                        <label class="form-label">Item</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="mb-3">
                        <label class="form-label">Description</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div class="mb-3">
                        <label class="form-label">Unit Cost</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div class="mb-3">
                        <label class="form-label">Qty</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div class="mb-3">
                        <label class="form-label">Amount</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="javascript:void(0);"
                  class="text-primary add-more-estimate fw-medium d-flex align-items-center mb-2"
                  ><i class="ti ti-plus me-2"></i>Add New Item</a
                >
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Total </label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Tax </label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Discount(%) </label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Grand Total </label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Other Information</label>
                <textarea class="form-control" rows="3"></textarea>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Add Estimate</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Estimate -->

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
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link to="/sales/estimates" class="btn btn-danger"
              >Yes, Delete</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
</template>
