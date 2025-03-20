<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
import Vue3TagsInput from "vue3-tags-input";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  components: {
    Vue3TagsInput,
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: " ",
      editorConfig: {},
      startdate: currentDate,
      startdateOne: currentDateOne,
      dateFormat: "dd-MM-yyyy",
      Remainder: ["Select", "Work", "Home"],
      Owner: ["Select", "Hendry", "Guilory", "Jami"],
      Guests: ["Select", "Darlee Robertson", "Sharon Roy", "Vaughan Lewis"],
      Deals: ["Select", "collins", "konopelski", "Adams"],
      Dealname: ["Select", "Collins", "Konopelski", "Adams"],
      Contacts: ["Select", "collins", "konopelski", "Adams"],
      Companies: ["Select", "Epicurean Delights", "Nimbus Networks", "UrbanPulse Design"],
      Pipeline: ["Select", "Sales", "Marketing", "Calls"],
      Status: ["Select", "Open", "Won", "Lost"],
      MonthsPeriod: ["Select", "Days", "Months"],
      Currencyvalue: ["Select", "Dollar", "Euro"],
      Contact: ["Select", "Darlee Robertson", "Sharon Roy", "Vaughan Lewis"],
      Project: [
        "Select",
        "Office Management App",
        "Clinic Management",
        "Educational Platform",
      ],
      Assignee: ["Select", "Active", "Inactive"],
      Source: [
        "Select",
        "Phone Calls",
        "Social Media",
        "Refferal Sites",
        "Web Analytics",
        "Previous Purchase",
      ],
      Priority: ["Select", "High", "Low", "Medium"],
      Companyname: [
        "Select",
        "BrightWave Innovations",
        "Stellar Dynamics",
        "Quantum Nexus",
      ],
      Reviews: ["Select", "Lowest", "Highest"],
      Industry: [
        "Select",
        "Retail Industry",
        "Banking",
        "Hotels",
        "Financial Services",
        "Insurance",
      ],
      Currency: ["Select", "USD", "Euro"],
      Language: ["Select", "English", "Arabic"],
      InactiStat: ["Select", "Active", "Inactive"],
      OneTags: [
        "Select",
        "Phone Calls",
        "Social Media",
        "Refferal Sites",
        "Web Analytics",
        "Previous Purchase",
      ],
      State: ["Select", "California", "New York", "Texas", "Florida"],
      StateCity: ["Select", "Los Angeles", "San Diego", "Fresno", "San Francisco"],
      Country: ["Select", "USA", "Canada", "Germany", "France"],
      tags: ["Collab", "Promotion", "Rated"],
      tagsOne: ["Collab", "Promotion", "Rated", "Davis"],
      tagsTwo: ["Promotion", "Rated", "Davis"],
      Twotags: ["Office Management", "App,Clinic", "Management", "Educational Platform"],
      Onetags: ["Vaughan Lewis"],
      Threetags: ["Collab"],
    };
  },
  methods: {
    submitFormThree() {
      this.$router.push("/crm/companies-crm");
    },
    submitFormTwo() {
      this.$router.push("/crm/contacts");
    },
    submitFormOne() {
      this.$router.push("/crm/deals-grid");
    },
    submitForm() {
      this.$router.push("/crm/activity");
    },
    submitFormFour() {
      this.$router.push("/crm/pipeline");
    },
  },
};
</script>

<template>
  <!-- Add Activiy -->
  <div class="modal fade" id="add_activity">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add New Activity</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Title <span class="text-danger"> *</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-12">
                <label class="form-label">Activity Type <span class="text-danger"> *</span></label>
                <div class="activity-items d-flex align-items-center mb-3">
                  <a href="#" class="br-5 d-flex align-items-center justify-content-center active me-2">
                    <i class="ti ti-phone me-1"></i>Calls</a>
                  <a href="#" class="br-5 d-flex align-items-center justify-content-center me-2">
                    <i class="ti ti-mail me-1"></i>Email</a>
                  <a href="#" class="br-5 d-flex align-items-center justify-content-center me-2">
                    <i class="ti ti-user-circle me-1"></i>Meeting</a>
                  <a href="#" class="br-5 d-flex align-items-center justify-content-center me-2">
                    <i class="ti ti-list-check me-1"></i>Task</a>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Due Date <span class="text-danger"> *</span></label>
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
                  <label class="form-label">Time <span class="text-danger"> *</span></label>
                  <div class="input-icon-end position-relative">
                    <input type="text" class="form-control datetimepicker-time" />
                    <span class="input-icon-addon">
                      <i class="ti ti-clock-hour-10 text-gray-7"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-12 lead-phno-col del-phno-col">
                <div class="row">
                  <div class="col-lg-8">
                    <div class="input-block mb-3">
                      <label class="form-label">Remainder <span class="text-danger"> *</span></label>
                      <div class="input-icon-start position-relative">
                        <input type="text" class="form-control" />
                        <span class="input-icon-addon">
                          <i class="ti ti-bell text-gray-7"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 d-flex align-items-end">
                    <div class="input-block w-100 mb-3 d-flex align-items-center">
                      <div class="w-100">
                        <vue-select :options="Remainder" id="remainder" placeholder="Select" />
                      </div>
                      <h6 class="fs-14 fw-normal ms-3">Before Use</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Owner <span class="text-danger"> *</span></label>
                  <vue-select :options="Owner" id="remainderr" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Guests <span class="text-danger"> *</span></label>
                  <vue-select :options="Guests" id="guests" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Description <span class="text-danger"> *</span></label>
                  <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                </div>
              </div>
              <div class="col-md-12">
                <div class="input-block mb-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <label class="col-form-label">Deals <span class="text-danger"> *</span></label>
                    <a href="#" class="add-new text-primary" data-bs-toggle="modal" data-bs-target="#add_deals"><i
                        class="ti ti-plus text-primary me-1"></i>Add New</a>
                  </div>
                  <vue-select :options="Deals" id="dealsed" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="input-block mb-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <label class="col-form-label">Contacts <span class="text-danger"> *</span></label>
                    <a href="#" class="add-new text-primary" data-bs-toggle="modal" data-bs-target="#add_contact"><i
                        class="ti ti-plus text-primary me-1"></i>Add New</a>
                  </div>
                  <vue-select :options="Contacts" id="contactss" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="input-block mb-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <label class="col-form-label">Companies <span class="text-danger"> *</span></label>
                    <a href="#" class="add-new text-primary" data-bs-toggle="modal" data-bs-target="#add_company"><i
                        class="ti ti-plus text-primary me-1"></i>Add New</a>
                  </div>
                  <vue-select :options="Companies" id="between" placeholder="Select" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Add Activity</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Activity -->

  <!-- Add Activiy -->
  <div class="modal fade" id="edit_activity">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Activity</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Title <span class="text-danger"> *</span></label>
                  <input type="text" class="form-control" value="We scheduled a meeting for next week" />
                </div>
              </div>
              <div class="col-md-12">
                <label class="form-label">Activity Type <span class="text-danger"> *</span></label>
                <div class="activity-items d-flex align-items-center mb-3">
                  <a href="#" class="br-5 d-flex align-items-center justify-content-center active me-2">
                    <i class="ti ti-phone me-1"></i>Calls</a>
                  <a href="#" class="br-5 d-flex align-items-center justify-content-center me-2">
                    <i class="ti ti-mail me-1"></i>Email</a>
                  <a href="#" class="br-5 d-flex align-items-center justify-content-center me-2">
                    <i class="ti ti-user-circle me-1"></i>Meeting</a>
                  <a href="#" class="br-5 d-flex align-items-center justify-content-center me-2">
                    <i class="ti ti-list-check me-1"></i>Task</a>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Due Date <span class="text-danger"> *</span></label>
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
                  <label class="form-label">Time <span class="text-danger"> *</span></label>
                  <div class="input-icon-end position-relative">
                    <input type="text" class="form-control datetimepicker-time" />
                    <span class="input-icon-addon">
                      <i class="ti ti-clock-hour-10 text-gray-7"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-12 lead-phno-col del-phno-col">
                <div class="row">
                  <div class="col-lg-8">
                    <div class="input-block mb-3">
                      <label class="form-label">Remainder <span class="text-danger"> *</span></label>
                      <div class="input-icon-start position-relative">
                        <input type="text" class="form-control" />
                        <span class="input-icon-addon">
                          <i class="ti ti-bell text-gray-7"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 d-flex align-items-end">
                    <div class="input-block w-100 mb-3 d-flex align-items-center">
                      <div class="w-100">
                        <vue-select :options="Remainder" id="remainderone" placeholder="Home" />
                      </div>
                      <h6 class="fs-14 fw-normal ms-3">Before Use</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Owner <span class="text-danger"> *</span></label>
                  <vue-select :options="Owner" id="guilory" placeholder="Guilory" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Guests <span class="text-danger"> *</span></label>
                  <vue-select :options="Guests" id="sharonroyy" placeholder="Sharon Roy" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Description <span class="text-danger"> *</span></label>
                  <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                </div>
              </div>
              <div class="col-md-12">
                <div class="input-block mb-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <label class="col-form-label">Deals <span class="text-danger"> *</span></label>
                    <a href="#" class="add-new text-primary" data-bs-toggle="modal" data-bs-target="#add_deals"><i
                        class="ti ti-plus text-primary me-1"></i>Add New</a>
                  </div>
                  <vue-select :options="Deals" id="konopelski" placeholder="konopelski" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="input-block mb-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <label class="col-form-label">Contacts <span class="text-danger"> *</span></label>
                    <a href="#" class="add-new text-primary" data-bs-toggle="modal" data-bs-target="#add_contact"><i
                        class="ti ti-plus text-primary me-1"></i>Add New</a>
                  </div>
                  <vue-select :options="Contacts" id="konopelskii" placeholder="konopelski" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="input-block mb-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <label class="col-form-label">Companies <span class="text-danger"> *</span></label>
                    <a href="#" class="add-new text-primary" data-bs-toggle="modal" data-bs-target="#add_company"><i
                        class="ti ti-plus text-primary me-1"></i>Add New</a>
                  </div>
                  <vue-select :options="Companies" id="nimbus" placeholder="Nimbus Networks" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Activity -->

  <!-- Add Deals -->
  <div class="modal fade" id="add_deals">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add New Deals</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitFormOne">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Deal Name <span class="text-danger"> *</span></label>
                  <vue-select :options="Dealname" id="nimbusdeals" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <label class="form-label">Pipeline <span class="text-danger"> *</span></label>
                    <a href="#" class="add-new text-primary" data-bs-toggle="modal" data-bs-target="#add_pipeline"><i
                        class="ti ti-plus text-primary me-1"></i>Add New</a>
                  </div>
                  <vue-select :options="Pipeline" id="marketing" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Status <span class="text-danger"> *</span></label>
                  <vue-select :options="Status" id="open" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Deal Value <span class="text-danger"> *</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Currency<span class="text-danger"> *</span></label>
                  <vue-select :options="Currencyvalue" id="currencythreelakhs" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Period <span class="text-danger"> *</span></label>
                  <vue-select :options="MonthsPeriod" id="monthsperiod" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Period Value <span class="text-danger"> *</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Contact <span class="text-danger"> *</span></label>
                  <vue3-tags-input class="input-tags form-control" placeholder="Add new" type="text"
                    data-role="tagsinput" name="Label" value="Tag1" :tags="Onetags" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Project<span class="text-danger"> *</span></label>
                  <vue3-tags-input class="input-tags form-control" placeholder="Add new" type="text"
                    data-role="tagsinput" name="Label" value="Tag1" :tags="Twotags" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Due Date <span class="text-danger"> *</span>
                  </label>
                  <div class="input-icon-end position-relative">
                    <input type="text" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar text-gray-7"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Expected Closing Date <span class="text-danger"> *</span>
                  </label>
                  <div class="input-icon-end position-relative">
                    <input type="text" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar text-gray-7"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Assignee <span class="text-danger"> *</span></label>
                  <vue3-tags-input class="input-tags form-control" placeholder="Add new" type="text"
                    data-role="tagsinput" name="Label" value="Tag1" :tags="Onetags" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Tags <span class="text-danger"> *</span></label>
                  <vue3-tags-input class="input-tags form-control" placeholder="Add new" type="text"
                    data-role="tagsinput" name="Label" value="Tag1" :tags="Threetags" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Followup Date <span class="text-danger"> *</span></label>
                  <div class="input-icon-end position-relative">
                    <input type="text" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar text-gray-7"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Source <span class="text-danger"> *</span></label>
                  <vue-select :options="Source" id="sourceethree" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Priority <span class="text-danger"> *</span></label>
                  <vue-select :options="Priority" id="prioritythree" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Description <span class="text-danger"> *</span></label>
                  <textarea class="form-control"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Add Deal</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Deals -->

  <!-- Add Contact -->
  <div class="modal fade" id="add_contact">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add New Contact</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitFormTwo">
          <div class="contact-grids-tab">
            <ul class="nav nav-underline" id="myTabs" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="info-tabs" data-bs-toggle="tab" data-bs-target="#basic-info3"
                  type="button" role="tab" aria-selected="true">
                  Basic Information
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="address-tabs" data-bs-toggle="tab" data-bs-target="#address3" type="button"
                  role="tab" aria-selected="false">
                  Address
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="social-profile-tabs" data-bs-toggle="tab" data-bs-target="#social-profile3"
                  type="button" role="tab" aria-selected="false">
                  Social Profiles
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="access-tabs" data-bs-toggle="tab" data-bs-target="#access3" type="button"
                  role="tab" aria-selected="false">
                  Access
                </button>
              </li>
            </ul>
          </div>
          <div class="tab-content" id="myTabContents">
            <div class="tab-pane fade show active" id="basic-info1" role="tabpanel" aria-labelledby="info-tab1"
              tabindex="0">
              <div class="modal-body pb-0">
                <div class="row">
                  <div class="col-md-12">
                    <div class="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                      <div
                        class="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames">
                        <i class="ti ti-photo text-gray-2 fs-16"></i>
                      </div>
                      <div class="profile-upload">
                        <div class="mb-2">
                          <h6 class="mb-1">Upload Profile Image</h6>
                          <p class="fs-12">Image should be below 4 mb</p>
                        </div>
                        <div class="profile-uploader d-flex align-items-center">
                          <div class="drag-upload-btn btn btn-sm btn-primary me-2">
                            Upload
                            <input type="file" class="form-control image-sign" multiple="" />
                          </div>
                          <a href="#" class="btn btn-light btn-sm">Cancel</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">First Name <span class="text-danger"> *</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Last Name</label>
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Job Title <span class="text-danger"> *</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Company Name <span class="text-danger"> *</span></label>
                      <vue-select :options="Companyname" id="dynamics" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Email</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Phone Number <span class="text-danger"> *</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Phone Number 2<span class="text-danger"> *</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Fax</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="input-block mb-3">
                      <div class="d-flex justify-content-between align-items-center mb-2">
                        <label class="col-form-label p-0">Deals <span class="text-danger"> *</span></label>
                        <a href="#" class="add-new text-primary" data-bs-target="#add_deals" data-bs-toggle="modal"><i
                            class="ti ti-plus text-primary me-1"></i>Add New</a>
                      </div>
                      <vue-select :options="Deals" id="dynamicsadams" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Date of Birth <span class="text-danger"> *</span>
                      </label>
                      <div class="input-icon-end position-relative">
                        <input type="text" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                        <span class="input-icon-addon">
                          <i class="ti ti-calendar text-gray-7"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Ratings <span class="text-danger"> *</span></label>
                      <div class="input-icon-end position-relative">
                        <input type="text" class="form-control" />
                        <span class="input-icon-addon">
                          <i class="ti ti-star text-gray-6"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Owner <span class="text-danger"> *</span></label>
                      <vue-select :options="Owner" id="dynamicsowner" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Industry <span class="text-danger"> *</span></label>
                      <vue-select :options="Industry" id="dynamicsindustry" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Currency <span class="text-danger"> *</span></label>
                      <vue-select :options="Currency" id="dynamicscurrency" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Language <span class="text-danger"> *</span></label>
                      <vue-select :options="Language" id="multilanguage" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Tags <span class="text-danger"> *</span>
                      </label>
                      <vue3-tags-input class="input-tags form-control" placeholder="Add new" type="text"
                        data-role="tagsinput" name="Label" value="Tag1" :tags="tagsOne" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Source <span class="text-danger"> *</span>
                      </label>
                      <vue-select :options="OneTags" id="multitags" placeholder="Select" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </div>
            <div class="tab-pane fade" id="address1" role="tabpanel" aria-labelledby="address-tab1" tabindex="0">
              <div class="modal-body pb-0">
                <div class="row">
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="form-label">Address <span class="text-danger"> *</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Country <span class="text-danger"> *</span></label>
                      <vue-select :options="Country" id="multicountry" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">State <span class="text-danger"> *</span></label>
                      <vue-select :options="State" id="multistate" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">City <span class="text-danger"> *</span></label>
                      <select class="select">
                        <option>Select</option>
                        <option>Los Angeles</option>
                        <option>San Diego</option>
                        <option>Fresno</option>
                        <option>San Francisco</option>
                      </select>
                      <vue-select :options="StateCity" id="multistatecity" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Zipcode <span class="text-danger"> *</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </div>
            <div class="tab-pane fade" id="social-profile1" role="tabpanel" aria-labelledby="social-profile-tab1"
              tabindex="0">
              <div class="modal-body pb-0">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Facebook</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Twitter</label>
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">LinkedIn</label>
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Skype</label>
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Whatsapp</label>
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Instagram</label>
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </div>
            <div class="tab-pane fade" id="access1" role="tabpanel" aria-labelledby="access-tab1" tabindex="0">
              <div class="modal-body pb-0">
                <div class="mb-4">
                  <h6 class="fs-14 fw-medium mb-1">Visibility</h6>
                  <div class="d-flex align-items-center">
                    <div class="form-check me-3">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label class="form-check-label text-dark" for="flexRadioDefault1">
                        Public
                      </label>
                    </div>
                    <div class="form-check me-3">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                        checked />
                      <label class="form-check-label text-dark" for="flexRadioDefault2">
                        Private
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"
                        checked />
                      <label class="form-check-label text-dark" for="flexRadioDefault3">
                        Select People
                      </label>
                    </div>
                  </div>
                </div>
                <div class="p-3 bg-gray br-5 mb-4">
                  <div class="d-flex align-items-center mb-3">
                    <input class="form-check-input me-1" type="checkbox" value="" id="user-6" />
                    <div class="d-flex align-items-center file-name-icon">
                      <a href="#" class="avatar avatar-md border avatar-rounded">
                        <img src="@/assets/img/reports/user-01.jpg" class="img-fluid" alt="img" />
                      </a>
                      <div class="ms-2">
                        <h6 class="fw-normal"><a href="#">Michael Walker</a></h6>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <input class="form-check-input me-1" type="checkbox" value="" id="user-7" />
                    <div class="d-flex align-items-center file-name-icon">
                      <a href="#" class="avatar avatar-md border avatar-rounded">
                        <img src="@/assets/img/reports/user-02.jpg" class="img-fluid" alt="img" />
                      </a>
                      <div class="ms-2">
                        <h6 class="fw-normal"><a href="#">Sophie Headrick</a></h6>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <input class="form-check-input me-1" type="checkbox" value="" id="user-8" />
                    <div class="d-flex align-items-center file-name-icon">
                      <a href="#" class="avatar avatar-md border avatar-rounded">
                        <img src="@/assets/img/reports/user-03.jpg" class="img-fluid" alt="img" />
                      </a>
                      <div class="ms-2">
                        <h6 class="fw-normal"><a href="#">Cameron Drake</a></h6>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <input class="form-check-input me-1" type="checkbox" value="" id="user-9" />
                    <div class="d-flex align-items-center file-name-icon">
                      <a href="#" class="avatar avatar-md border avatar-rounded">
                        <img src="@/assets/img/reports/user-04.jpg" class="img-fluid" alt="img" />
                      </a>
                      <div class="ms-2">
                        <h6 class="fw-normal"><a href="#">Doris Crowley</a></h6>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <input class="form-check-input me-1" type="checkbox" value="" id="user-10" />
                    <div class="d-flex align-items-center file-name-icon">
                      <a href="#" class="avatar avatar-md border avatar-rounded">
                        <img src="@/assets/img/profiles/avatar-12.jpg" class="img-fluid" alt="img" />
                      </a>
                      <div class="ms-2">
                        <h6 class="fw-normal"><a href="#">Thomas Bordelon</a></h6>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-center">
                    <a href="#" class="btn btn-primary">Confirm</a>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <vue-select :options="InactiStat" id="inactistat" placeholder="Select" />
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#success_compay">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Contact -->

  <!-- Add Company -->
  <div class="modal fade" id="add_company">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add New Company</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitFormThree">
          <div class="contact-grids-tab">
            <ul class="nav nav-underline" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="info-tab" data-bs-toggle="tab" data-bs-target="#basic-info"
                  type="button" role="tab" aria-selected="true">
                  Basic Information
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="address-tab" data-bs-toggle="tab" data-bs-target="#address" type="button"
                  role="tab" aria-selected="false">
                  Address
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="social-profile-tab" data-bs-toggle="tab" data-bs-target="#social-profile"
                  type="button" role="tab" aria-selected="false">
                  Social Profiles
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="access-tab" data-bs-toggle="tab" data-bs-target="#access" type="button"
                  role="tab" aria-selected="false">
                  Access
                </button>
              </li>
            </ul>
          </div>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="basic-info" role="tabpanel" aria-labelledby="info-tab"
              tabindex="0">
              <div class="modal-body pb-0">
                <div class="row">
                  <div class="col-md-12">
                    <div class="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                      <div
                        class="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames">
                        <img src="@/assets/img/profiles/avatar-30.jpg" alt="img" class="rounded-circle" />
                      </div>
                      <div class="profile-upload">
                        <div class="mb-2">
                          <h6 class="mb-1">Upload Profile Image</h6>
                          <p class="fs-12">Image should be below 4 mb</p>
                        </div>
                        <div class="profile-uploader d-flex align-items-center">
                          <div class="drag-upload-btn btn btn-sm btn-primary me-2">
                            Upload
                            <input type="file" class="form-control image-sign" multiple="" />
                          </div>
                          <a href="#" class="btn btn-light btn-sm">Cancel</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Company Name <span class="text-danger">*</span></label>
                      <vue-select :options="Companyname" id="multicompany" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Email</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Phone Number <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Phone Number 2</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Fax</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Website</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Reviews <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Owner <span class="text-danger">*</span></label>
                      <vue-select :options="Owner" id="multiJami" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Tags <span class="text-danger">*</span>
                      </label>
                      <vue3-tags-input class="input-tags form-control" placeholder="Add new" type="text"
                        data-role="tagsinput" name="Label" value="Tag1" :tags="tagsTwo" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <div class="d-flex justify-content-between align-items-center mb-2">
                        <label class="col-form-label p-0">Deals <span class="text-danger">*</span></label>
                        <a href="#" class="add-new text-primary" data-bs-target="#add_deals" data-bs-toggle="modal"><i
                            class="ti ti-plus text-primary me-1"></i>Add New</a>
                      </div>
                      <vue-select :options="Deals" id="multideals" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Industry <span class="text-danger">*</span></label>
                      <vue-select :options="Industry" id="industrydeals" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Source <span class="text-danger">*</span>
                      </label>
                      <vue-select :options="Source" id="sites" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Currency <span class="text-danger">*</span></label>
                      <vue-select :options="Currency" id="sitescurrency" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Language <span class="text-danger">*</span></label>
                      <vue-select :options="Language" id="siteslanguage" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="form-label">About <span class="text-danger">*</span></label>
                      <textarea class="form-control"></textarea>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <div class="d-flex justify-content-between align-items-center mb-2">
                        <label class="col-form-label p-0">Contact <span class="text-danger">*</span></label>
                        <a href="#" class="add-new text-primary" data-bs-target="#add_contact" data-bs-toggle="modal"><i
                            class="ti ti-plus text-primary me-1"></i>Add New</a>
                      </div>
                      <vue-select :options="Contact" id="sitesthomas" placeholder="Sharon Roy" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </div>
            <div class="tab-pane fade" id="address" role="tabpanel" aria-labelledby="address-tab" tabindex="0">
              <div class="modal-body pb-0">
                <div class="row">
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="form-label">Address <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Last Name <span class="text-danger">*</span></label>
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">State <span class="text-danger">*</span></label>
                      <vue-select :options="State" id="sitesstate" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Country <span class="text-danger">*</span></label>
                      <vue-select :options="Country" id="sitesindo" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Zipcode <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </div>
            <div class="tab-pane fade" id="social-profile" role="tabpanel" aria-labelledby="social-profile-tab"
              tabindex="0">
              <div class="modal-body pb-0">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Facebook</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Twitter</label>
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Linked in</label>
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Skype</label>
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Whatsapp</label>
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Instagram</label>
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </div>
            <div class="tab-pane fade" id="access" role="tabpanel" aria-labelledby="access-tab" tabindex="0">
              <div class="modal-body pb-0">
                <div class="mb-4">
                  <h6 class="fs-14 fw-medium mb-1">Visibility</h6>
                  <div class="d-flex align-items-center">
                    <div class="form-check me-3">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault01" />
                      <label class="form-check-label text-dark" for="flexRadioDefault01">
                        Public
                      </label>
                    </div>
                    <div class="form-check me-3">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault02"
                        checked />
                      <label class="form-check-label text-dark" for="flexRadioDefault02">
                        Private
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault03"
                        checked />
                      <label class="form-check-label text-dark" for="flexRadioDefault03">
                        Select People
                      </label>
                    </div>
                  </div>
                </div>
                <div class="p-3 bg-gray br-5 mb-4">
                  <div class="d-flex align-items-center mb-3">
                    <input class="form-check-input me-1" type="checkbox" value="" id="user-6" />
                    <div class="d-flex align-items-center file-name-icon">
                      <a href="#" class="avatar avatar-md border avatar-rounded">
                        <img src="@/assets/img/reports/user-01.jpg" class="img-fluid" alt="img" />
                      </a>
                      <div class="ms-2">
                        <h6 class="fw-normal">
                          <a href="#">Michael Walker</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <input class="form-check-input me-1" type="checkbox" value="" id="user-07" />
                    <div class="d-flex align-items-center file-name-icon">
                      <a href="#" class="avatar avatar-md border avatar-rounded">
                        <img src="@/assets/img/reports/user-02.jpg" class="img-fluid" alt="img" />
                      </a>
                      <div class="ms-2">
                        <h6 class="fw-normal">
                          <a href="#">Sophie Headrick</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <input class="form-check-input me-1" type="checkbox" value="" id="user-08" />
                    <div class="d-flex align-items-center file-name-icon">
                      <a href="#" class="avatar avatar-md border avatar-rounded">
                        <img src="@/assets/img/reports/user-03.jpg" class="img-fluid" alt="img" />
                      </a>
                      <div class="ms-2">
                        <h6 class="fw-normal">
                          <a href="#">Cameron Drake</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <input class="form-check-input me-1" type="checkbox" value="" id="user-09" />
                    <div class="d-flex align-items-center file-name-icon">
                      <a href="#" class="avatar avatar-md border avatar-rounded">
                        <img src="@/assets/img/reports/user-04.jpg" class="img-fluid" alt="img" />
                      </a>
                      <div class="ms-2">
                        <h6 class="fw-normal">
                          <a href="#">Doris Crowley</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <input class="form-check-input me-1" type="checkbox" value="" id="user-11" />
                    <div class="d-flex align-items-center file-name-icon">
                      <a href="#" class="avatar avatar-md border avatar-rounded">
                        <img src="@/assets/img/profiles/avatar-12.jpg" class="img-fluid" alt="img" />
                      </a>
                      <div class="ms-2">
                        <h6 class="fw-normal">
                          <a href="#">Thomas Bordelon</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-center">
                    <a href="#" class="btn btn-primary">Confirm</a>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <vue-select :options="Status" id="Statusindo" placeholder="Select" />
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#success_compay">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Company -->

  <!-- Add Pipeline -->
  <div class="modal fade" id="add_pipeline">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add New Pipeline</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitFormFour">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Pipeline Name <span class="text-danger"> *</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="input-block mb-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <label class="form-label">Pipeline Stages <span class="text-danger"> *</span></label>
                    <a href="#" class="add-new text-primary" data-bs-toggle="modal" data-bs-target="#add_stage"><i
                        class="ti ti-plus text-primary me-1"></i>Add New</a>
                  </div>
                  <div class="p-3 border border-gray br-5 mb-2">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center">
                        <span class="me-2"><i class="ti ti-grip-vertical"></i></span>
                        <h6 class="fs-14 fw-normal">Inpipline</h6>
                      </div>
                      <div class="d-flex align-items-center">
                        <a href="#" class="text-default" data-bs-toggle="modal" data-bs-target="#edit_stage"><span
                            class="me-2"><i class="ti ti-edit"></i></span></a>
                        <a href="#" class="text-default" data-bs-toggle="modal" data-bs-target="#delete_modal"><span><i
                              class="ti ti-trash"></i></span></a>
                      </div>
                    </div>
                  </div>
                  <div class="p-3 border border-gray br-5 mb-2">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center">
                        <span class="me-2"><i class="ti ti-grip-vertical"></i></span>
                        <h6 class="fs-14 fw-normal">Follow Up</h6>
                      </div>
                      <div class="d-flex align-items-center">
                        <a href="#" class="text-default" data-bs-toggle="modal" data-bs-target="#edit_stage"><span
                            class="me-2"><i class="ti ti-edit"></i></span></a>
                        <a href="#" class="text-default" data-bs-toggle="modal" data-bs-target="#delete_modal"><span><i
                              class="ti ti-trash"></i></span></a>
                      </div>
                    </div>
                  </div>
                  <div class="p-3 border border-gray br-5">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center">
                        <span class="me-2"><i class="ti ti-grip-vertical"></i></span>
                        <h6 class="fs-14 fw-normal">Schedule Service</h6>
                      </div>
                      <div class="d-flex align-items-center">
                        <a href="#" class="text-default" data-bs-toggle="modal" data-bs-target="#edit_stage"><span
                            class="me-2"><i class="ti ti-edit"></i></span></a>
                        <a href="#" class="text-default"><span><i class="ti ti-trash" data-bs-toggle="modal"
                              data-bs-target="#delete_modal"></i></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Access</label>
                  <div class="d-flex access-item nav">
                    <div class="d-flex align-items-center">
                      <div class="radio-btn d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#all">
                        <input type="radio" class="status-radio me-2" id="all" name="status" checked />
                        <label for="all">All</label>
                      </div>
                      <div class="radio-btn d-flex align-items-center" data-bs-toggle="tab"
                        data-bs-target="#select-person">
                        <input type="radio" class="status-radio me-2" id="select" name="status" />
                        <label for="select">Select Person</label>
                      </div>
                    </div>
                  </div>
                  <div class="tab-content">
                    <div class="tab-pane fade" id="select-person">
                      <div class="access-wrapper">
                        <div class="p-3 border border-gray br-5 mb-2">
                          <div class="d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center file-name-icon">
                              <a href="#" class="avatar avatar-md border avatar-rounded">
                                <img src="@/assets/img/profiles/avatar-20.jpg" class="img-fluid" alt="img" />
                              </a>
                              <div class="ms-2">
                                <h6 class="fw-medium">
                                  <a href="#">Sharon Roy</a>
                                </h6>
                              </div>
                            </div>
                            <div class="d-flex align-items-center">
                              <a href="#" class="text-danger">Remove</a>
                            </div>
                          </div>
                        </div>
                        <div class="p-3 border border-gray br-5 mb-2">
                          <div class="d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center file-name-icon">
                              <a href="#" class="avatar avatar-md border avatar-rounded">
                                <img src="@/assets/img/profiles/avatar-21.jpg" class="img-fluid" alt="img" />
                              </a>
                              <div class="ms-2">
                                <h6 class="fw-medium">
                                  <a href="#">Sharon Roy</a>
                                </h6>
                              </div>
                            </div>
                            <div class="d-flex align-items-center">
                              <a href="#" class="text-danger">Remove</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#pipeline-access">
              Add Pipeline
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Pipeline -->

  <!-- Edit Pipeline -->
  <div class="modal fade" id="edit_pipeline">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Pipeline</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitFormFour">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Pipeline Name <span class="text-danger"> *</span></label>
                  <input type="text" class="form-control" value="Marketing" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="input-block mb-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <label class="form-label">Pipeline Stages <span class="text-danger"> *</span></label>
                    <a href="#" class="add-new text-primary" data-bs-toggle="modal" data-bs-target="#add_stage"><i
                        class="ti ti-plus text-primary me-1"></i>Add New</a>
                  </div>
                  <div class="p-3 border border-gray br-5 mb-2">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center">
                        <span class="me-2"><i class="ti ti-grip-vertical"></i></span>
                        <h6 class="fs-14 fw-normal">Inpipline</h6>
                      </div>
                      <div class="d-flex align-items-center">
                        <a href="#" class="text-default"><span class="me-2"><i class="ti ti-edit"></i></span></a>
                        <a href="#" class="text-default"><span><i class="ti ti-trash"></i></span></a>
                      </div>
                    </div>
                  </div>
                  <div class="p-3 border border-gray br-5 mb-2">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center">
                        <span class="me-2"><i class="ti ti-grip-vertical"></i></span>
                        <h6 class="fs-14 fw-normal">Follow Up</h6>
                      </div>
                      <div class="d-flex align-items-center">
                        <a href="#" class="text-default"><span class="me-2"><i class="ti ti-edit"></i></span></a>
                        <a href="#" class="text-default"><span><i class="ti ti-trash"></i></span></a>
                      </div>
                    </div>
                  </div>
                  <div class="p-3 border border-gray br-5">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center">
                        <span class="me-2"><i class="ti ti-grip-vertical"></i></span>
                        <h6 class="fs-14 fw-normal">Schedule Service</h6>
                      </div>
                      <div class="d-flex align-items-center">
                        <a href="#" class="text-default"><span class="me-2"><i class="ti ti-edit"></i></span></a>
                        <a href="#" class="text-default"><span><i class="ti ti-trash"></i></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Access</label>
                  <div class="d-flex access-item nav">
                    <div class="d-flex align-items-center">
                      <div class="radio-btn d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#all2">
                        <input type="radio" class="status-radio me-2" id="all2" name="status" checked />
                        <label for="all2">All</label>
                      </div>
                      <div class="radio-btn d-flex align-items-center" data-bs-toggle="tab"
                        data-bs-target="#select-person2">
                        <input type="radio" class="status-radio me-2" id="select2" name="status" />
                        <label for="select2">Select Person</label>
                      </div>
                    </div>
                  </div>
                  <div class="tab-content">
                    <div class="tab-pane fade" id="select-person2">
                      <div class="access-wrapper">
                        <div class="p-3 border border-gray br-5 mb-2">
                          <div class="d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center file-name-icon">
                              <a href="#" class="avatar avatar-md border avatar-rounded">
                                <img src="@/assets/img/profiles/avatar-20.jpg" class="img-fluid" alt="img" />
                              </a>
                              <div class="ms-2">
                                <h6 class="fw-medium">
                                  <a href="#">Sharon Roy</a>
                                </h6>
                              </div>
                            </div>
                            <div class="d-flex align-items-center">
                              <a href="#" class="text-danger">Remove</a>
                            </div>
                          </div>
                        </div>
                        <div class="p-3 border border-gray br-5 mb-2">
                          <div class="d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center file-name-icon">
                              <a href="#" class="avatar avatar-md border avatar-rounded">
                                <img src="@/assets/img/profiles/avatar-21.jpg" class="img-fluid" alt="img" />
                              </a>
                              <div class="ms-2">
                                <h6 class="fw-medium">
                                  <a href="#">Sharon Roy</a>
                                </h6>
                              </div>
                            </div>
                            <div class="d-flex align-items-center">
                              <a href="#" class="text-danger">Remove</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#pipeline-access">
              Add Pipeline
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Pipeline -->

  <!-- Pipeline Access -->
  <div class="modal fade" id="pipeline-access">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Pipeline Access</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitFormFour">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <div class="input-icon-end position-relative">
                    <input type="text" class="form-control" placeholder="Search" />
                    <span class="input-icon-addon">
                      <i class="ti ti-search text-gray-7"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <div class="p-2 border br-5">
                    <div class="pipeline-access-items">
                      <div class="d-flex align-items-center p-2">
                        <div class="form-check form-check-md me-2">
                          <input class="form-check-input" type="checkbox" />
                        </div>
                        <div class="d-flex align-items-center file-name-icon">
                          <a href="#" class="avatar avatar-md border avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-19.jpg" class="img-fluid" alt="img" />
                          </a>
                          <div class="ms-2">
                            <h6 class="fw-medium fs-12">
                              <a href="#">Darlee Robertson</a>
                            </h6>
                            <span class="fs-10 fw-normal">Darlee Robertson</span>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center p-2">
                        <div class="form-check form-check-md me-2">
                          <input class="form-check-input" type="checkbox" />
                        </div>
                        <div class="d-flex align-items-center file-name-icon">
                          <a href="#" class="avatar avatar-md border avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-20.jpg" class="img-fluid" alt="img" />
                          </a>
                          <div class="ms-2">
                            <h6 class="fw-medium fs-12">
                              <a href="#">Sharon Roy</a>
                            </h6>
                            <span class="fs-10 fw-normal">Installer</span>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center p-2">
                        <div class="form-check form-check-md me-2">
                          <input class="form-check-input" type="checkbox" />
                        </div>
                        <div class="d-flex align-items-center file-name-icon">
                          <a href="#" class="avatar avatar-md border avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-21.jpg" class="img-fluid" alt="img" />
                          </a>
                          <div class="ms-2">
                            <h6 class="fw-medium fs-12">
                              <a href="#">Vaughan Lewis</a>
                            </h6>
                            <span class="fs-10 fw-normal">Senior Manager</span>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center p-2">
                        <div class="form-check form-check-md me-2">
                          <input class="form-check-input" type="checkbox" />
                        </div>
                        <div class="d-flex align-items-center file-name-icon">
                          <a href="#" class="avatar avatar-md border avatar-rounded">
                            <img src="@/assets/img/users/user-33.jpg" class="img-fluid" alt="img" />
                          </a>
                          <div class="ms-2">
                            <h6 class="fw-medium fs-12">
                              <a href="#">Jessica Louise</a>
                            </h6>
                            <span class="fs-10 fw-normal">Test Engineer</span>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center p-2">
                        <div class="form-check form-check-md me-2">
                          <input class="form-check-input" type="checkbox" />
                        </div>
                        <div class="d-flex align-items-center file-name-icon">
                          <a href="#" class="avatar avatar-md border avatar-rounded">
                            <img src="@/assets/img/users/user-34.jpg" class="img-fluid" alt="img" />
                          </a>
                          <div class="ms-2">
                            <h6 class="fw-medium fs-12">
                              <a href="#">Test Engineer</a>
                            </h6>
                            <span class="fs-10 fw-normal">UI /UX Designer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Pipeline Access -->

  <!-- Add New Stage -->
  <div class="modal fade" id="add_stage">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add New Stage</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitFormFour">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Stage Name <span class="text-danger"> *</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Add Stage</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add New Stage -->

  <!-- Edit Stage -->
  <div class="modal fade" id="edit_stage">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Stage</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitFormFour">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Edit Name <span class="text-danger"> *</span></label>
                  <input type="text" class="form-control" value="Inpipeline" />
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
  <!-- /Edit Stage -->

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
            <router-link to="/crm/activity" class="btn btn-danger">Yes, Delete</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
</template>
