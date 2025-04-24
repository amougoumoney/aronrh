<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar> 
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content">
      <!-- Breadcrumb -->
      <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <index-breadcrumb :title="title" :text="text" :text1="text1" />
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="mb-2">
            <a href="javascript:void(0);" @click="openModal('new_custom_policy')" class="btn btn-primary d-flex align-items-center">
              <i class="ti ti-circle-plus me-2"></i>{{ $t('AddCustomPolicy') }}
            </a>
          </div>
          <div class="head-icons ms-2">
            <a href="javascript:void(0);" class="" data-bs-toggle="tooltip" data-bs-placement="top"
              data-bs-original-title="Collapse" id="collapse-header" @click="toggleHeader">
              <i class="ti ti-chevrons-up"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- /Breadcrumb -->

      <!-- Leaves Info -->
      <div class="row">
        <div class="col-xl-4 col-md-6" v-for="leave in leaveTypes" :key="leave.key">
          <div class="card">
            <div class="card-body d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <div class="form-check form-check-md form-switch me-1">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" role="switch" v-model="leave.active" />
                  </label>
                </div>
                <h6 class="d-flex align-items-center">{{ $t(leave.label) }}</h6>
              </div>
              <div class="d-flex align-items-center">
                <a href="javascript:void(0);" class="text-decoration-underline me-2" @click="openModal('add_custom_policy')">{{ $t('CustomPolicy') }}</a>
                <a href="javascript:void(0);" @click="openModal(leave.settingsModal)">
                  <i class="ti ti-settings"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Leaves Info -->
    </div>
    <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
      <p class="mb-0">2014 - 2025 &copy; AronHR.</p>
      <p>
        {{ $t('designed') }} &amp; {{ $t('developedBy') }}
        <a href="javascript:void(0);" class="text-primary">{{ $t('Dreams') }}</a>
      </p>
    </div>
  </div>
  <!-- /Page Wrapper -->

  <!-- Modal Definitions -->
  <div class="modal fade" id="new_custom_policy">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">New Custom Policy</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-0">
            <div class="mb-3">
              <label class="form-label">Leave Type</label>
              <vue-select :options="Leavetype" placeholder="Select" />
            </div>
            <div class="mb-3">
              <label class="form-label">Policy Name</label>
              <input type="text" class="form-control" v-model="policyName" />
            </div>
            <div class="mb-3">
              <label class="form-label">No of Days</label>
              <input type="text" class="form-control" v-model="noOfDays" />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-primary">Add Leaves</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="modal fade" id="annual_leave_settings">
    <!-- Annual Leave Settings Modal Content -->
  </div>
  <div class="modal fade" id="sick_leave_settings">
    <!-- Sick Leave Settings Modal Content -->
  </div>
  <div class="modal fade" id="hospitalisation_settings">
    <!-- Hospitalisation Settings Modal Content -->
  </div>
  <div class="modal fade" id="maternity_settings">
    <!-- Maternity Settings Modal Content -->
  </div>
  <div class="modal fade" id="paternity_settings">
    <!-- Paternity Settings Modal Content -->
  </div>
  <div class="modal fade" id="lop_settings">
    <!-- LOP Settings Modal Content -->
  </div>
  <div class="modal fade" id="delete_modal">
    <!-- Delete Confirmation Modal Content -->
  </div>
</template>

<script>
import indexBreadcrumb from '@/components/breadcrumb/index-breadcrumb.vue';
import { ref } from 'vue';
import bootstrap from 'bootstrap';

export default {
  components: {
    indexBreadcrumb
  },
  data() {
    return {
      title: "Leave Settings",
      text: "Employee",
      text1: "Leave Settings",
      policyName: '',
      noOfDays: '',
      leaveTypes: [
        { key: 'AnnualLeave', label: 'AnnualLeave', active: true, settingsModal: 'annual_leave_settings' },
        { key: 'SickLeave', label: 'SickLeave', active: false, settingsModal: 'sick_leave_settings' },
        { key: 'Hospitalisation', label: 'Hospitalisation', active: true, settingsModal: 'hospitalisation_settings' },
        { key: 'Maternity', label: 'Maternity', active: true, settingsModal: 'maternity_settings' },
        { key: 'Paternity', label: 'Paternity', active: false, settingsModal: 'paternity_settings' },
        { key: 'LOP', label: 'LOP', active: false, settingsModal: 'lop_settings' },
      ],
    };
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
    openModal(modalId) {
      const modal = new bootstrap.Modal(document.getElementById(modalId));
      modal.show();
    },
    submitForm() {
      // Handle form submission logic
      console.log("Form submitted: ", { policyName: this.policyName, noOfDays: this.noOfDays });
      // Reset fields after submission
      this.policyName = '';
      this.noOfDays = '';
    }
  },
};
</script>

<style>
/* Add any specific styles here */
</style>