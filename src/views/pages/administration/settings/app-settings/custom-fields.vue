<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content">
      <!-- Breadcrumb -->
      <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <breadcrumb :title="title" :text="text" :text1="text1" />
        <div class="head-icons ms-2">
          <a href="javascript:void(0);" class="" data-bs-toggle="tooltip" data-bs-placement="top"
            data-bs-original-title="Collapse" id="collapse-header" @click="toggleHeader">
            <i class="ti ti-chevrons-up"></i>
          </a>
        </div>
      </div>
      <!-- /Breadcrumb -->

      <settings-tab></settings-tab>
      <div class="row">
        <app-sidebar></app-sidebar>
        <div class="col-xl-9">
          <div class="card">
            <div class="card-header">
              <div class="d-flex justify-content-between align-items-center">
                <h4>Custom Fields</h4>
                <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal"
                  data-bs-target="#new-field"><i class="ti ti-circle-plus me-2"></i>Add Fields</a>
              </div>
            </div>
            <div class="card-body p-0">
              <div class="table-responsive">
                <table class="table">
                  <thead class="thead-light">
                    <tr>
                      <th class="no-sort">
                        <div class="form-check form-check-md">
                          <input class="form-check-input" type="checkbox" id="select-all" />
                        </div>
                      </th>
                      <th class="fw-semibold">Module</th>
                      <th class="fw-semibold">Label</th>
                      <th class="fw-semibold">Type</th>
                      <th class="fw-semibold">Default Value</th>
                      <th class="fw-semibold">Required/Disable</th>
                      <th class="fw-semibold">Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th class="no-sort">
                        <div class="form-check form-check-md">
                          <input class="form-check-input" type="checkbox" />
                        </div>
                      </th>
                      <th>Employee</th>
                      <th class="text-gray fw-normal">Preferred Language</th>
                      <th class="text-gray fw-normal">Select</th>
                      <th class="text-gray fw-normal">English</th>
                      <th class="text-gray fw-normal">Required</th>
                      <th class="d-flex">
                        <span class="badge badge-success badge-sm d-flex align-items-center"><i
                            class="ti ti-point-filled"></i>Active</span>
                      </th>
                      <th>
                        <div class="dropdown">
                          <a href="javascript:void(0);" class="text-gray" data-bs-toggle="dropdown"><i
                              class="ti ti-dots-vertical"></i></a>
                          <div class="dropdown-menu">
                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                              data-bs-target="#edit-field"><i class="ti ti-edit me-2"></i>Edit</a>
                            <a href="javascript:void(0);" class="dropdown-item"><i
                                class="ti ti-trash me-2"></i>Delete</a>
                          </div>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th class="no-sort">
                        <div class="form-check form-check-md">
                          <input class="form-check-input" type="checkbox" />
                        </div>
                      </th>
                      <th>Projects</th>
                      <th class="text-gray fw-normal">Project Type</th>
                      <th class="text-gray fw-normal">Select</th>
                      <th class="text-gray fw-normal">Internal</th>
                      <th class="text-gray fw-normal">Required</th>
                      <th class="d-flex">
                        <span class="badge badge-success badge-sm d-flex align-items-center"><i
                            class="ti ti-point-filled"></i>Active</span>
                      </th>
                      <th>
                        <div class="dropdown">
                          <a href="javascript:void(0);" class="text-gray" data-bs-toggle="dropdown"><i
                              class="ti ti-dots-vertical"></i></a>
                          <div class="dropdown-menu">
                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                              data-bs-target="#edit-field"><i class="ti ti-edit me-2"></i>Edit</a>
                            <a href="javascript:void(0);" class="dropdown-item"><i
                                class="ti ti-trash me-2"></i>Delete</a>
                          </div>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th class="no-sort">
                        <div class="form-check form-check-md">
                          <input class="form-check-input" type="checkbox" />
                        </div>
                      </th>
                      <th>Tasks</th>
                      <th class="text-gray fw-normal">Task Type</th>
                      <th class="text-gray fw-normal">Select</th>
                      <th class="text-gray fw-normal">Design</th>
                      <th class="text-gray fw-normal">Required</th>
                      <th class="d-flex">
                        <span class="badge badge-success badge-sm d-flex align-items-center"><i
                            class="ti ti-point-filled"></i>Active</span>
                      </th>
                      <th>
                        <div class="dropdown">
                          <a href="javascript:void(0);" class="text-gray" data-bs-toggle="dropdown"><i
                              class="ti ti-dots-vertical"></i></a>
                          <div class="dropdown-menu">
                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                              data-bs-target="#edit-field"><i class="ti ti-edit me-2"></i>Edit</a>
                            <a href="javascript:void(0);" class="dropdown-item"><i
                                class="ti ti-trash me-2"></i>Delete</a>
                          </div>
                        </div>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
      <p class="mb-0">2014 - 2025 &copy; AronHR.</p>
      <p>
        Designed &amp; Developed By
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
  <!-- /Page Wrapper -->
  <custom-fields-modal></custom-fields-modal>
</template>
<script>
export default {
  data() {
    return {
      title: "Settings",
      text: "Administration",
      text1: "Settings",
    };
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
