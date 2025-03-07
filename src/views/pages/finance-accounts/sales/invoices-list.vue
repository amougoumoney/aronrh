<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());

export default {
  data() {
    return {
      title: "Invoices",
      text: "Application",
      text1: "Invoices",
      startdate: currentDate,
      startdateOne: currentDateOne,
      dateFormat: "dd-MM-yyyy",
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

<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content">
      <!-- Breadcrumb -->
      <div
        class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3"
      >
        <breadcrumb :title="title" :text="text" :text1="text1" />
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="me-2 mb-2">
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <i class="ti ti-file-export me-2"></i>Export
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    ><i class="ti ti-file-type-pdf me-1"></i>Export as PDF</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    ><i class="ti ti-file-type-xls me-1"></i>Export as Excel
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="mb-2">
            <router-link
              to="/sales/add-invoices"
              class="btn btn-primary d-flex align-items-center"
              ><i class="ti ti-circle-plus me-2"></i>Add Invoice</router-link
            >
          </div>
          <div class="ms-2 head-icons">
            <a
              href="javascript:void(0);"
              class=""
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-original-title="Collapse"
              id="collapse-header"
              @click="toggleHeader"
            >
              <i class="ti ti-chevrons-up"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- /Breadcrumb -->

      <!-- Invoice Data -->
      <div class="row">
        <div class="col-xl-3 col-sm-6">
          <div class="card flex-fill">
            <div class="card-body">
              <div class="d-flex align-items-center overflow-hidden mb-2">
                <div>
                  <p class="fs-12 fw-normal mb-1 text-truncate">Total Invoice</p>
                  <h5>$3,237.94</h5>
                </div>
              </div>
              <div class="attendance-report-bar mb-2">
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px"
                >
                  <div class="progress-bar bg-pink" style="width: 85%"></div>
                </div>
              </div>
              <div>
                <p class="fs-12 fw-normal d-flex align-items-center text-truncate">
                  <span class="text-success fs-12 d-flex align-items-center me-1"
                    ><i class="ti ti-arrow-wave-right-up me-1"></i>+32.40%</span
                  >from last month
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6">
          <div class="card flex-fill">
            <div class="card-body">
              <div class="d-flex align-items-center overflow-hidden mb-2">
                <div>
                  <p class="fs-12 fw-normal mb-1 text-truncate">Outstanding</p>
                  <h5>$3,237.94</h5>
                </div>
              </div>
              <div class="attendance-report-bar mb-2">
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px"
                >
                  <div class="progress-bar bg-purple" style="width: 50%"></div>
                </div>
              </div>
              <div>
                <p class="fs-12 fw-normal d-flex align-items-center text-truncate">
                  <span class="text-danger fs-12 d-flex align-items-center me-1"
                    ><i class="ti ti-arrow-wave-right-up me-1"></i>-4.40%</span
                  >from last month
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6">
          <div class="card flex-fill">
            <div class="card-body">
              <div class="d-flex align-items-center overflow-hidden mb-2">
                <div>
                  <p class="fs-12 fw-normal mb-1 text-truncate">Draft</p>
                  <h5>$3,237.94</h5>
                </div>
              </div>
              <div class="attendance-report-bar mb-2">
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px"
                >
                  <div class="progress-bar bg-warning" style="width: 30%"></div>
                </div>
              </div>
              <div>
                <p class="fs-12 fw-normal d-flex align-items-center text-truncate">
                  <span class="text-success fs-12 d-flex align-items-center me-1"
                    ><i class="ti ti-arrow-wave-right-up me-1"></i>12%</span
                  >from last month
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6">
          <div class="card flex-fill">
            <div class="card-body">
              <div class="d-flex align-items-center overflow-hidden mb-2">
                <div>
                  <p class="fs-12 fw-normal mb-1 text-truncate">Total Overdue</p>
                  <h5>$3,237.94</h5>
                </div>
              </div>
              <div class="attendance-report-bar mb-2">
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px"
                >
                  <div class="progress-bar bg-danger" style="width: 20%"></div>
                </div>
              </div>
              <div>
                <p class="fs-12 fw-normal d-flex align-items-center text-truncate">
                  <span class="text-danger fs-12 d-flex align-items-center me-1"
                    ><i class="ti ti-arrow-wave-right-up me-1"></i>-15.40%</span
                  >from last month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Invoice Data -->

      <!-- Invoice DataTable -->
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div
              class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3"
            >
              <h5 class="d-flex align-items-center">
                Invoices<span class="badge badge-dark-transparent ms-2"
                  >2000 Invoices</span
                >
              </h5>
              <div class="d-flex align-items-center flex-wrap row-gap-3">
                <div class="input-icon position-relative w-120 me-2">
                  <span class="input-icon-addon">
                    <i class="ti ti-calendar"></i>
                  </span>
                  <date-picker
                    v-model="startdate"
                    class="form-control datetimepicker"
                    placeholder="Created Date"
                    :editable="true"
                    :clearable="false"
                    :input-format="dateFormat"
                  />
                </div>
                <div class="input-icon position-relative w-120 me-2">
                  <span class="input-icon-addon">
                    <i class="ti ti-calendar"></i>
                  </span>
                  <date-picker
                    v-model="startdateOne"
                    class="form-control datetimepicker"
                    placeholder="Due Date"
                    :editable="true"
                    :clearable="false"
                    :input-format="dateFormat"
                  />
                </div>
                <div class="dropdown me-2">
                  <a
                    href="javascript:void(0);"
                    class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Select Status
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1"
                        >Paid</a
                      >
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1"
                        >Overdue</a
                      >
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1"
                        >Pending</a
                      >
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1"
                        >Draft</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="dropdown">
                  <a
                    href="javascript:void(0);"
                    class="dropdown-toggle btn btn-white d-inline-flex align-items-center fs-12"
                    data-bs-toggle="dropdown"
                  >
                    <span class="fs-12 d-inline-flex me-1">Sort By : </span>
                    Last 7 Days
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1"
                        >Last 7 Days</a
                      >
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1"
                        >Created Date</a
                      >
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1"
                        >Due Date</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card-body p-0">
              <div class="custom-datatable-filter table-responsive">
                <invoices-table></invoices-table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Invoice DataTable -->
    </div>

    <!-- Footer -->
    <div
      class="footer d-sm-flex align-items-center justify-content-between bg-white border-top p-3"
    >
      <p class="mb-0">2014 - 2025 &copy; SmartHR.</p>
      <p>
        Designed &amp; Developed By
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
    <!-- /Footer -->

    <!-- /Page Wrapper -->

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
              You want to delete all the marked items, this cant be undone once you
              delete.
            </p>
            <div class="d-flex justify-content-center">
              <a
                href="javascript:void(0);"
                class="btn btn-light me-3"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <router-link to="/sales/invoices" class="btn btn-danger"
                >Yes, Delete</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Delete Modal -->
  </div>
  <!-- /Page Wrapper -->
</template>
