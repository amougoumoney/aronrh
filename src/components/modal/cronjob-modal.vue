<template>
  <!--Add Cronjob -->
  <div class="modal fade" id="add_cronjob">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Cronjob</h4>
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
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Name</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Schedule</label>
                  <vue-select :options="ScheSel" id="schesel" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-2 d-flex align-items-center">
                    <div class="mb-3">
                      <label class="form-label">Next Run</label>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="mb-3">
                      <div class="input-icon-end position-relative">
                        <date-picker
                          v-model="startdate"
                          class="form-control datetimepicker"
                          placeholder="dd/mm/yyyy"
                          :editable="true"
                          :clearable="false"
                          :input-format="dateFormat"
                        />
                        <span class="input-icon-addon">
                          <i class="ti ti-calendar text-gray-7"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="mb-3">
                      <div class="input-icon position-relative w-100">
                        <input
                          type="text"
                          class="form-control timepicker ps-3"
                          placeholder="-- : -- : --"
                        />
                        <span class="input-icon-addon">
                          <i class="ti ti-clock-hour-3"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">URL</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Add Cronjob</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Cronjob -->

  <!-- Edit Cronjob -->
  <div class="modal fade" id="edit_cronjob">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Cronjob</h4>
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
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    value="Report Generation Cron"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Schedule</label>
                  <vue-select
                    :options="EditScheSel"
                    id="editschesel"
                    placeholder="5 Minutes"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-2 d-flex align-items-center">
                    <div class="mb-3">
                      <label class="form-label">Next Run</label>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="mb-3">
                      <div class="input-icon-end position-relative">
                        <date-picker
                          v-model="startdateOne"
                          class="form-control datetimepicker"
                          placeholder="dd/mm/yyyy"
                          :editable="true"
                          :clearable="false"
                          :input-format="dateFormat"
                        />
                        <span class="input-icon-addon">
                          <i class="ti ti-calendar text-gray-7"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="mb-3">
                      <div class="input-icon position-relative w-100">
                        <input
                          type="text"
                          class="form-control timepicker ps-3"
                          placeholder="-- : -- : --"
                          value="14:02 PM"
                        />
                        <span class="input-icon-addon">
                          <i class="ti ti-clock-hour-3"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">URL</label>
                  <input type="text" class="form-control" value="www.example.com" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Save Cronjob</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Cronjob -->
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      startdate: currentDate,
      startdateOne: currentDateOne,
      dateFormat: "dd-MM-yyyy",
      ScheSel: ["Select", "5 Minutes", "3 Minutes"],
      EditScheSel: ["Select", "5 Minutes", "3 Minutes"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/others-settings/cronjob");
    },
  },
};
</script>
