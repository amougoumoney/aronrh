<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content">
      <!-- Breadcrumb -->
      <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <breadcrumb :title="title" :text="text" :text1="text1" />
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="me-2 mb-2">
            <div class="dropdown">
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown">
                <i class="ti ti-file-export me-1"></i>Export
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                      class="ti ti-file-type-pdf me-1"></i>Export as PDF</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                      class="ti ti-file-type-xls me-1"></i>Export as Excel
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="mb-2">
            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_role"
              class="btn btn-primary d-flex align-items-center"><i class="ti ti-circle-plus me-2"></i>Add Roles</a>
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

      <!-- Assets Lists -->
      <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
          <h5>Permissions</h5>
          <p>Role Name : <span class="text-gray-9 fw-medium">Admin</span></p>
        </div>
        <div class="card-body p-0">
          <div class="table-responsive">
            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th class="no-sort">Modules</th>
                  <th>Allow All</th>
                  <th>Read</th>
                  <th>Write</th>
                  <th>Create</th>
                  <th>Delete</th>
                  <th>Import</th>
                  <th>Export</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-gray-9">Employee</td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-gray-9">Holidays</td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-gray-9">Leaves</td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-gray-9">Events</td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-gray-9">Sales</td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-gray-9">Training</td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-gray-9">Reports</td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-gray-9">Tickets</td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-gray-9">Holidays</td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-gray-9">Payroll</td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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
  <roles-modal></roles-modal>
</template>
<script>
export default {
  data() {
    return {
      title: "Permissions",
      text: "Administration",
      text1: "Permissions",
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
