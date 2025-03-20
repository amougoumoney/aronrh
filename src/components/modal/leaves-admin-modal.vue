<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());

export default {
  data() {
    return {
      Employeename: ["Select", "Anthony Lewis", "Brian Villalobos", "Harvey Smith"],
      Leavetype: ["Select", "Medical Leave", "Casual Leave", "Annual Leave"],
      startdate: currentDate,
      startdateOne: currentDateOne,
      dateFormat: "dd-MM-yyyy",
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/leave/leaves-admin");
    },
  },
};
</script>

<template>
  <!-- Add Leaves -->
  <div class="modal fade" id="add_leaves">
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
                  <vue-select :options="Employeename" id="employeeleave" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Leave Type</label>
                  <vue-select :options="Leavetype" id="employeeleavetype" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">From </label>
                  <div class="input-icon-end position-relative">
                    <date-picker v-model="startdate" class="form-control datetimepicker" placeholder="dd/mm/yyyy"
                      :editable="true" :clearable="false" :input-format="dateFormat" />
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar text-gray-7"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">To </label>
                  <div class="input-icon-end position-relative">
                    <date-picker v-model="startdateOne" class="form-control datetimepicker" placeholder="dd/mm/yyyy"
                      :editable="true" :clearable="false" :input-format="dateFormat" />
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar text-gray-7"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">No of Days</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Remaining Days</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Reason</label>
                  <textarea class="form-control" rows="3"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Add Leaves</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Leaves -->

  <!-- Edit Leaves -->
  <div class="modal fade" id="edit_leaves">
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
                  <vue-select :options="Employeename" id="employeeleaveone" placeholder="Anthony Lewis" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Leave Type</label>
                  <vue-select :options="Leavetype" id="employeeleavetypeone" placeholder="Medical Leave" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">From </label>
                  <div class="input-icon-end position-relative">
                    <date-picker v-model="startdate" class="form-control datetimepicker" value="14/01/24"
                      placeholder="dd/mm/yyyy" :editable="true" :clearable="false" :input-format="dateFormat" />
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar text-gray-7"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">To </label>
                  <div class="input-icon-end position-relative">
                    <date-picker v-model="startdateOne" class="form-control datetimepicker" value="15/01/24"
                      placeholder="dd/mm/yyyy" :editable="true" :clearable="false" :input-format="dateFormat" />
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar text-gray-7"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">No of Days</label>
                  <input type="text" class="form-control" value="01" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Remaining Days</label>
                  <input type="text" class="form-control" value="07" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Reason</label>
                  <textarea class="form-control" rows="3"> Going to Hospital </textarea>
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
  <!-- /Edit Leaves -->

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
            <a href="#" class="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <router-link to="/leave/leaves-admin" class="btn btn-danger">Yes, Delete</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
</template>
