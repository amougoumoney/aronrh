<script>
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import moment from "moment";
import DateRangePicker from "daterangepicker";

export default {
  data() {
    return {
      title: "Leaves",
      text: "Employee",
      text1: "My Leaves",
    };
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
  mounted() {
    // Define the booking_range function for formatting
    const booking_range = (start, end) => {
      return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
    };

    // Access the date range input using $refs
    if (this.$refs.dateRangeInput) {
      const start = moment().subtract(6, "days");
      const end = moment();

      new DateRangePicker(
        this.$refs.dateRangeInput,
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

      // Call the booking_range function with the initial dates
      booking_range(start, end);
    }
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
      <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <index-breadcrumb :title="title" :text="text" :text1="text1" />
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="me-2 mb-2">
            <div class="dropdown">
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown">
                <i class="ti ti-file-export me-1"></i>{{ $t('dashboard.export') }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-file-type-pdf me-1"></i>
                    {{ $t('dashboard.exportPDF') }}</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                      class="ti ti-file-type-xls me-1"></i>{{ $t('dashboard.exportEXCEL') }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="mb-2">
            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_leaves"
              class="btn btn-primary d-flex align-items-center"><i class="ti ti-circle-plus me-2"></i>{{ $t('AddLeave')
              }}</a>
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
        <div class="col-xl-3 col-md-6">
          <div class="card bg-black-le">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div class="text-start">
                  <p class="mb-1">{{ $t('AnnualLeave') }}</p>
                  <h4>05</h4>
                </div>
                <div class="d-flex">
                  <div class="flex-shrink-0 me-2">
                    <span class="avatar avatar-md d-flex">
                      <i class="ti ti-calendar-event fs-32"></i>
                    </span>
                  </div>
                </div>
              </div>
              <span class="badge bg-secondary-transparent">{{ $t('RemainingLeaves') }} : 07</span>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card bg-blue-le">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div class="text-start">
                  <p class="mb-1">{{ $t('MedicalLeaves') }}</p>
                  <h4>11</h4>
                </div>
                <div class="d-flex">
                  <div class="flex-shrink-0 me-2">
                    <span class="avatar avatar-md d-flex">
                      <i class="ti ti-vaccine fs-32"></i>
                    </span>
                  </div>
                </div>
              </div>
              <span class="badge bg-info-transparent">{{ $t('RemainingLeaves') }} : 01</span>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card bg-purple-le">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div class="text-start">
                  <p class="mb-1">{{ $t('CasualLeave') }}</p>
                  <h4>02</h4>
                </div>
                <div class="d-flex">
                  <div class="flex-shrink-0 me-2">
                    <span class="avatar avatar-md d-flex">
                      <i class="ti ti-hexagon-letter-c fs-32"></i>
                    </span>
                  </div>
                </div>
              </div>
              <span class="badge bg-transparent-purple">{{ $t('RemainingLeaves') }} : 10</span>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card bg-pink-le">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div class="text-start">
                  <p class="mb-1">{{ $t('OtherLeaves') }}</p>
                  <h4>07</h4>
                </div>
                <div class="d-flex">
                  <div class="flex-shrink-0 me-2">
                    <span class="avatar avatar-md d-flex">
                      <i class="ti ti-hexagonal-prism-plus fs-32"></i>
                    </span>
                  </div>
                </div>
              </div>
              <span class="badge bg-pink-transparent">{{ $t('RemainingLeaves') }} : 05</span>
            </div>
          </div>
        </div>
      </div>
      <!-- /Leaves Info -->

      <!-- Leaves list -->
      <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
          <div class="d-flex">
            <h5 class="me-2">{{ $t('LeaveList') }}</h5>
            <span class="badge bg-primary-transparent me-2">{{ $t('TotalLeaves') }} : 48</span>
            <span class="badge bg-secondary-transparent">{{ $t('TotalRemainingLeaves') }} : 23</span>
          </div>
          <div class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
            <div class="me-3">
              <div class="input-icon-end position-relative">
                <input type="text" class="form-control date-range bookingrange" ref="dateRangeInput"
                  :placeholder="$t('dd/mm/yyyy - dd/mm/yyyy')" />
                <span class="input-icon-addon">
                  <i class="ti ti-chevron-down"></i>
                </span>
              </div>
            </div>
            <div class="dropdown me-3">
              <a href="javascript:void(0);"
                class="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                {{ $t('LeaveType') }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('MedicalLeave') }}</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('CasualLeave') }}</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('AnnualLeave') }}</a>
                </li>
              </ul>
            </div>
            <div class="dropdown me-3">
              <a href="javascript:void(0);"
                class="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                {{ $t('ApprovedBy') }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Doglas Martini</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Warren Morales</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Doglas Martini</a>
                </li>
              </ul>
            </div>
            <div class="dropdown me-3">
              <a href="javascript:void(0);"
                class="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                {{ $t('SelectStatus') }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);"
                    class="dropdown-item rounded-1 d-flex justify-content-start align-items-center"><span
                      class="rounded-circle bg-transparent-success d-flex justify-content-center align-items-center me-2"><i
                        class="ti ti-point-filled text-success"></i></span>{{ $t('Approved') }}</a>
                </li>
                <li>
                  <a href="javascript:void(0);"
                    class="dropdown-item rounded-1 d-flex justify-content-start align-items-center"><span
                      class="rounded-circle bg-transparent-danger d-flex justify-content-center align-items-center me-2"><i
                        class="ti ti-point-filled text-danger"></i></span>{{ $t('Declined') }}</a>
                </li>
                <li>
                  <a href="javascript:void(0);"
                    class="dropdown-item rounded-1 d-flex justify-content-start align-items-center"><span
                      class="rounded-circle bg-transparent-purple d-flex justify-content-center align-items-center me-2"><i
                        class="ti ti-point-filled text-purple"></i></span>{{ $t('New') }}</a>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <a href="javascript:void(0);"
                class="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                {{ $t('SortBy:Last7Days') }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('RecentlyAdded') }}</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('Ascending') }}</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('Descending') }}</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('lastMonth') }}</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('Last7Days') }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-body p-0">
          <div class="custom-datatable-filter table-responsive">
            <leaves-employee-table></leaves-employee-table>
          </div>
        </div>
      </div>
      <!-- /Leaves list -->
    </div>
    <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
      <p class="mb-0">2014 - 2025 &copy; AronHR.</p>
      <p>
        {{ $t('designed') }} &amp; {{ $t('developedBy') }}
        <a href="javascript:void(0);" class="text-primary">{{ $t('dreams') }}</a>
      </p>
    </div>
  </div>
  <!-- /Page Wrapper -->

  <leaves-employee-modal></leaves-employee-modal>
</template>
