<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content">
      <!-- Breadcrumb -->
      <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <breadcrumb :title="title" :text="text" :text1="text1" />
        <div class="mb-2">
          <div class="d-flex align-items-center">
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
            <div class="head-icons ms-2 mb-0">
              <a href="javascript:void(0);" class="" data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-original-title="Collapse" id="collapse-header" @click="toggleHeader">
                <i class="ti ti-chevrons-up"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- /Breadcrumb -->

      <div class="card">
        <div class="card-body p-3">
          <div class="d-flex align-items-center justify-content-between">
            <h5>Knowledgebase</h5>
            <div class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
              <div class="me-3">
                <div class="input-icon-end position-relative">
                  <input type="text" class="form-control date-range bookingrange" ref="dateRangeInput"
                    placeholder="dd/mm/yyyy - dd/mm/yyyy" />
                  <span class="input-icon-addon">
                    <i class="ti ti-chevron-down"></i>
                  </span>
                </div>
              </div>
              <div class="dropdown">
                <a href="javascript:void(0);"
                  class="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center"
                  data-bs-toggle="dropdown">
                  Sort By : Last 7 Days
                </a>
                <ul class="dropdown-menu dropdown-menu-end p-3">
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-8">
          <div class="card">
            <div class="card-body pb-1">
              <div class="d-flex align-items-center mb-3">
                <i class="ti ti-folder text-primary fs-24 me-1"></i>
                <a href="javascript:void(0);" class="text-dark fs-16 fw-medium text-truncate">Introduction to ARONHR
                  <span class="text-primary">( 06 )</span></a>
              </div>
              <div class="col-xl-12">
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="d-flex align-items-center mb-2 pb-1">
                      <i class="ti ti-file me-1"></i>
                      <a href="javascript:void(0);" class="text-dark fs-14 fw-medium text-truncate">What is an ARONHR
                        and
                        Why is it Important?
                      </a>
                    </div>
                    <div class="ps-3">
                      <p class="fs-14 fw-normal mb-1">
                        An ARONHR is software that centralizes and automates human resource
                        tasks such as payroll, recruitment, and employee management. It
                        improves efficiency and reduces administrative burden for HR
                        teams.
                      </p>
                      <router-link to="/supports/knowledgebase-details" class="text-primary fs-12 fw-medium">Read
                        More</router-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-12">
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="d-flex align-items-center mb-2 pb-1">
                      <i class="ti ti-file me-1"></i>
                      <a href="javascript:void(0);" class="text-dark fs-14 fw-medium text-truncate">The Key Features of
                        an ARONHR Explained
                      </a>
                    </div>
                    <div class="ps-3">
                      <p class="fs-14 fw-normal mb-1">
                        Key features of an ARONHR include employee data management, payroll,
                        time tracking, leave management, performance reviews, and
                        compliance. These features help streamline HR operations.
                      </p>
                      <router-link to="/supports/knowledgebase-details" class="text-primary fs-12 fw-medium">Read
                        More</router-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-12">
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="d-flex align-items-center mb-2 pb-1">
                      <i class="ti ti-file me-1"></i>
                      <a href="javascript:void(0);" class="text-dark fs-14 fw-medium text-truncate">How ARONHR Helps
                        Automate HR Tasks
                      </a>
                    </div>
                    <div class="ps-3">
                      <p class="fs-14 fw-normal mb-1">
                        ARONHR automates repetitive tasks like payroll processing,
                        attendance tracking, and benefits administration, freeing up HR
                        personnel to focus on strategic activities. This enhances
                        productivity and accuracy.
                      </p>
                      <router-link to="/supports/knowledgebase-details" class="text-primary fs-12 fw-medium">Read
                        More</router-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-12">
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="d-flex align-items-center mb-2 pb-1">
                      <i class="ti ti-file me-1"></i>
                      <a href="javascript:void(0);" class="text-dark fs-14 fw-medium text-truncate">ARONHR Terminology :
                        A
                        Beginner’s Guide</a>
                    </div>
                    <div class="ps-3">
                      <p class="fs-14 fw-normal mb-1">
                        Common ARONHR terms like ESS (Employee Self-Service), and MSS
                        (Manager Self-Service) are essential for navigating the system
                        effectively. This guide breaks down key terms for new users.
                      </p>
                      <router-link to="/supports/knowledgebase-details" class="text-primary fs-12 fw-medium">Read
                        More</router-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-12">
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="d-flex align-items-center mb-2 pb-1">
                      <i class="ti ti-file me-1"></i>
                      <a href="javascript:void(0);" class="text-dark fs-14 fw-medium text-truncate">Cloud vs On-Premise
                        ARONHR vs Hybrid</a>
                    </div>
                    <div class="ps-3">
                      <p class="fs-14 fw-normal mb-1">
                        Cloud ARONHR offers flexibility and remote access, while on-premise
                        gives full control over data. Hybrid ARONHR combines both, offering
                        a balance between flexibility and data security.
                      </p>
                      <router-link to="/supports/knowledgebase-details" class="text-primary fs-12 fw-medium">Read
                        More</router-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-12">
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="d-flex align-items-center mb-2 pb-1">
                      <i class="ti ti-file me-1"></i>
                      <a href="javascript:void(0);" class="text-dark fs-14 fw-medium text-truncate">Common Challenges
                        When Implementing an ARONHR</a>
                    </div>
                    <div class="ps-3">
                      <p class="fs-14 fw-normal mb-1">
                        Implementing an ARONHR can face challenges such as data migration &
                        integration with existing systems. This guide covers solutions to
                        overcome these common obstacles for a smoother transition.
                      </p>
                      <router-link to="/supports/knowledgebase-details" class="text-primary fs-12 fw-medium">Read
                        More</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 theiaStickySidebar">
          <div class="card">
            <div class="card-body pb-1">
              <div class="d-flex align-items-center border-bottom mb-3 pb-3">
                <a href="javascript:void(0);" class="text-dark fs-16 fw-semibold text-truncate">Categories</a>
              </div>
              <div class="d-flex align-items-center mb-2 pb-1">
                <i class="ti ti-folder text-primary fs-16 me-1"></i>
                <a href="javascript:void(0);" class="text-gray fs-14 fw-normal text-truncate">Employee Self-Service
                  (ESS) <span class="text-primary">( 10 )</span>
                </a>
              </div>
              <div class="d-flex align-items-center mb-2 pb-1">
                <i class="ti ti-folder text-primary fs-16 me-1"></i>
                <a href="javascript:void(0);" class="text-gray fs-14 fw-normal text-truncate">Manager Self-Service (MSS)
                  <span class="text-primary">( 12 )</span>
                </a>
              </div>
              <div class="d-flex align-items-center mb-2 pb-1">
                <i class="ti ti-folder text-primary fs-16 me-1"></i>
                <a href="javascript:void(0);" class="text-gray fs-14 fw-normal text-truncate">Payroll Management <span
                    class="text-primary">( 08 )</span>
                </a>
              </div>
              <div class="d-flex align-items-center mb-2 pb-1">
                <i class="ti ti-folder text-primary fs-16 me-1"></i>
                <a href="javascript:void(0);" class="text-gray fs-14 fw-normal text-truncate">Attendance & Time Tracking
                  <span class="text-primary">( 07 )</span>
                </a>
              </div>
              <div class="d-flex align-items-center mb-2 pb-1">
                <i class="ti ti-folder text-primary fs-16 me-1"></i>
                <a href="javascript:void(0);" class="text-gray fs-14 fw-normal text-truncate">Leave Management <span
                    class="text-primary">( 06 )</span>
                </a>
              </div>
              <div class="d-flex align-items-center mb-2 pb-1">
                <i class="ti ti-folder text-primary fs-16 me-1"></i>
                <a href="javascript:void(0);" class="text-gray fs-14 fw-normal text-truncate">Performance Management
                  <span class="text-primary">( 13 )</span>
                </a>
              </div>
              <div class="d-flex align-items-center mb-2 pb-1">
                <i class="ti ti-folder text-primary fs-16 me-1"></i>
                <a href="javascript:void(0);" class="text-gray fs-14 fw-normal text-truncate">Reports & Analytics <span
                    class="text-primary">( 15 )</span>
                </a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body pb-1">
              <div class="d-flex align-items-center border-bottom mb-3 pb-3">
                <a href="javascript:void(0);" class="text-dark fs-16 fw-semibold text-truncate">Popular Articles</a>
              </div>
              <div class="d-flex align-items-center mb-2 pb-1">
                <i class="ti ti-file me-1"></i>
                <a href="javascript:void(0);" class="text-gray fs-14 fw-normal text-truncate">What is an ARONHR and Why
                  is
                  it Important?
                </a>
              </div>
              <div class="d-flex align-items-center mb-2 pb-1">
                <i class="ti ti-file me-1"></i>
                <a href="javascript:void(0);" class="text-gray fs-14 fw-normal text-truncate">How to view & update your
                  personal information
                </a>
              </div>
              <div class="d-flex align-items-center mb-2 pb-1">
                <i class="ti ti-file me-1"></i>
                <a href="javascript:void(0);" class="text-gray fs-14 fw-normal text-truncate">Viewing and managing team
                  attendance
                </a>
              </div>
              <div class="d-flex align-items-center mb-2 pb-1">
                <i class="ti ti-file me-1"></i>
                <a href="javascript:void(0);" class="text-gray fs-14 fw-normal text-truncate">How Payroll is Processed :
                  A Step-by-Step Guide
                </a>
              </div>
              <div class="d-flex align-items-center mb-2 pb-1">
                <i class="ti ti-file me-1"></i>
                <a href="javascript:void(0);" class="text-gray fs-14 fw-normal text-truncate">How to clock in/out using
                  the hrms portal
                </a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body pb-1">
              <div class="d-flex align-items-center border-bottom mb-3 pb-3">
                <a href="javascript:void(0);" class="text-dark fs-16 fw-semibold text-truncate">Latest Articles</a>
              </div>
              <div class="d-flex align-items-center mb-2 pb-1">
                <i class="ti ti-file me-1"></i>
                <a href="javascript:void(0);" class="text-gray fs-14 fw-normal text-truncate">How to update & view
                  team’s work schedules
                </a>
              </div>
              <div class="d-flex align-items-center mb-2 pb-1">
                <i class="ti ti-file me-1"></i>
                <a href="javascript:void(0);" class="text-gray fs-14 fw-normal text-truncate">How to clock in/out using
                  the hrms portal
                </a>
              </div>
              <div class="d-flex align-items-center mb-2 pb-1">
                <i class="ti ti-file me-1"></i>
                <a href="javascript:void(0);" class="text-gray fs-14 fw-normal text-truncate">How to Apply for Internal
                  Job Postings in Hrms
                </a>
              </div>
              <div class="d-flex align-items-center mb-2 pb-1">
                <i class="ti ti-file me-1"></i>
                <a href="javascript:void(0);" class="text-gray fs-14 fw-normal text-truncate">How to track your
                  attendance and work hours
                </a>
              </div>
              <div class="d-flex align-items-center mb-2 pb-1">
                <i class="ti ti-file me-1"></i>
                <a href="javascript:void(0);" class="text-gray fs-14 fw-normal text-truncate">How to conduct performance
                  reviews
                </a>
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
</template>
<script>
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref } from "vue";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
export default {
  data() {
    return {
      title: "Knowledgebase",
      text: "Administration",
      text1: "Knowledgebase",
    };
  },
  setup() {
    const dateRangeInput = ref(null);

    // Move the function declaration outside of the onMounted callback
    function booking_range(start, end) {
      return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
    }

    onMounted(() => {
      if (dateRangeInput.value) {
        const start = moment().subtract(6, "days");
        const end = moment();

        new DateRangePicker(
          dateRangeInput.value,
          {
            startDate: start,
            endDate: end,
            ranges: {
              Today: [moment(), moment()],
              Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
              "Last 7 Days": [moment().subtract(6, "days"), moment()],
              "Last 30 Days": [moment().subtract(29, "days"), moment()],
              "This Month": [moment().startOf("month"), moment().endOf("month")],
              "Last Month": [
                moment().subtract(1, "month").startOf("month"),
                moment().subtract(1, "month").endOf("month"),
              ],
            },
          },
          booking_range
        );

        booking_range(start, end);
      }
    });

    return {
      dateRangeInput,
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
