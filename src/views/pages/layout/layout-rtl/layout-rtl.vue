<template>
  <div :data-layout="layoutType">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <div class="page-wrapper">
      <div class="content">
        <!-- Breadcrumb -->
        <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
          <breadcrumb :title="title" :text="text" :text1="text1" />
          <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
            <div class="ms-2 mb-2">
              <div class="dropdown">
                <a href="#" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                  data-bs-toggle="dropdown">
                  <i class="ti ti-file-export ms-1"></i>Export
                </a>
                <ul class="dropdown-menu dropdown-menu-end p-3">
                  <li>
                    <a href="#" class="dropdown-item rounded-1"><i class="ti ti-file-type-pdf ms-1"></i>Export as
                      PDF</a>
                  </li>
                  <li>
                    <a href="#" class="dropdown-item rounded-1"><i class="ti ti-file-type-xls ms-1"></i>Export as Excel
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="mb-2">
              <div class="input-icon w-120 position-relative">
                <span class="input-icon-addon">
                  <!-- <i class="ti ti-calendar text-gray-9"></i> -->
                </span>
                <a-date-picker v-model:value="value5" picker="year" placeholder="2025" />
              </div>
            </div>
          </div>
        </div>
        <!-- /Breadcrumb -->

        <rtl-welcome-wrap></rtl-welcome-wrap>

        <rtl-employee-status></rtl-employee-status>

        <rtl-job-applicants></rtl-job-applicants>

        <rtl-sales-overview></rtl-sales-overview>

        <rtl-project-table></rtl-project-table>

        <rtl-schedules-index></rtl-schedules-index>
      </div>
    </div>
  </div>
  <admin-dashboard-modal></admin-dashboard-modal>
</template>

<script>
import { ref, computed, watchEffect, onBeforeUnmount } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";

export default {
  setup() {
    const value5 = ref();
    const route = useRoute(); // Get the current route

    // Compute the layout type (data-layout attribute)
    const layoutType = computed(() => {
      return route.path === "/layouts/layout-rtl" ? "layout-mode-rtl" : "vertical";
    });

    // Function to update body class based on route path
    const updateBodyClass = () => {
      if (route.path === "/layouts/layout-rtl") {
        document.body.classList.add("layout-mode-rtl");
      } else {
        document.body.classList.remove("layout-mode-rtl");
      }
    };

    // Watch for route changes and update the class
    watchEffect(() => {
      updateBodyClass();
    });

    // Cleanup the class before component is destroyed
    onBeforeUnmount(() => {
      document.body.classList.remove("layout-mode-rtl");
    });

    // Cleanup when route changes before the component updates
    onBeforeRouteUpdate(() => {
      document.body.classList.remove("layout-mode-rtl");
    });

    return {
      title: "Admin Dashboard",
      text: "Dashboard",
      text1: "Admin Dashboard",
      value5,
      layoutType,
    };
  },
};
</script>

<style scoped>
/* Add any scoped styles here */
</style>
