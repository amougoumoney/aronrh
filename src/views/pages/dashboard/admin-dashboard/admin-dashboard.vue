<template>
  <LayoutHeader></LayoutHeader>
  <LayoutSidebar></LayoutSidebar>
  <div class="page-wrapper">
    <div class="content">
      <!-- Breadcrumb -->
      <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <index-breadcrumb :title="title" :text="text" :text1="text1" />
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="me-2 mb-2">
            <div class="dropdown">
              <a href="#" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown">
                <i class="ti ti-file-export me-1"></i>Export
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="#" class="dropdown-item rounded-1"><i class="ti ti-file-type-pdf me-1"></i>Export as PDF</a>
                </li>
                <li>
                  <a href="#" class="dropdown-item rounded-1"><i class="ti ti-file-type-xls me-1"></i>Export as Excel
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="mb-2">
            <div class="input-icon w-120 position-relative">
              <span class="input-icon-addon">
                <i class="ti ti-calendar text-gray-9"></i>
              </span>
              <a-date-picker class="form-control yearpicker" v-model:value="value5" picker="year" value="2025"
                placeholder="2025" />
            </div>
          </div>
          <div class="ms-2 head-icons">
            <a href="#" :class="{ active: isCollapsed }" @click="toggleCollapse" data-bs-toggle="tooltip"
              data-bs-placement="top" data-bs-original-title="Collapse" id="collapse-header">
              <i class="ti ti-chevrons-up"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- /Breadcrumb -->

      <welcome-wrap></welcome-wrap>

      <employee-status></employee-status>

      <job-applicants></job-applicants>

      <sales-overview></sales-overview>

      <project-table></project-table>

      <schedules-index></schedules-index>
    </div>
    <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
      <p class="mb-0">2014 - 2025 &copy; AronHR.</p>
      <p>
        Designed &amp; Developed By
        <a href="#" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
  <admin-dashboard-modal></admin-dashboard-modal>
</template>
<script setup>
import { ref } from "vue";
import LayoutHeader from "../../../layouts/layout-header.vue";
import LayoutSidebar from "../../../layouts/layout-sidebar.vue";
import welcomeWrap from "./welcome-wrap.vue";
import employeeStatus from "./employee-status.vue";
import jobApplicants from "./job-applicants.vue";
import salesOverview from "./sales-overview.vue";
import projectTable from "./project-table.vue";
import schedulesIndex from "./schedules-index.vue";
const title = ref("Admin Dashboard");
const text = ref("Dashboard");
const text1 = ref("Admin Dashboard");
const value5 = ref();
const isCollapsed = ref(false);

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;

  if (isCollapsed.value) {
    document.body.classList.add("header-collapse");
  } else {
    document.body.classList.remove("header-collapse");
  }
};
</script>
