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
            <a href="#" data-bs-toggle="modal" data-bs-target="#add_role"
              class="btn btn-primary d-flex align-items-center"><i class="ti ti-circle-plus me-2"></i>Add Roles</a>
          </div>
          <div class="head-icons ms-2">
            <a href="#" class="" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Collapse"
              id="collapse-header" @click="toggleHeader">
              <i class="ti ti-chevrons-up"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- /Breadcrumb -->

      <!-- Assets Lists -->
      <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
          <h5>Roles List</h5>
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
            <div class="dropdown me-3">
              <a href="#" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown">
                Status
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="#" class="dropdown-item rounded-1">Active</a>
                </li>
                <li>
                  <a href="#" class="dropdown-item rounded-1">Inactive</a>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <a href="#" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown">
                Sort By : Last 7 Days
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="#" class="dropdown-item rounded-1">Recently Added</a>
                </li>
                <li>
                  <a href="#" class="dropdown-item rounded-1">Ascending</a>
                </li>
                <li>
                  <a href="#" class="dropdown-item rounded-1">Desending</a>
                </li>
                <li>
                  <a href="#" class="dropdown-item rounded-1">Last Month</a>
                </li>
                <li>
                  <a href="#" class="dropdown-item rounded-1">Last 7 Days</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-body p-0">
          <div class="custom-datatable-filter table-responsive">
            <a-table class="table datatable thead-light" :columns="columns" :data-source="data"
              :row-selection="rowSelection">
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'Role'">{{ record.Role }}</template>
                <template v-if="column.key === 'Status'">
                  <span :class="[
                    'badge',
                    record.Status === 'Active'
                      ? 'badge-success'
                      : record.Status === 'Inactive'
                        ? 'badge-danger'
                        : 'd-inline-flex',
                    'align-items-center',
                    'badge-xs',
                  ]">
                    <i class="ti ti-point-filled me-1"></i>
                    {{ record.Status }}
                  </span>
                </template>
                <template v-if="column.key === 'action'">
                  <div class="action-icon d-inline-flex">
                    <router-link to="/user-management/permission" class="me-2"><i
                        class="ti ti-shield"></i></router-link>
                    <a href="#" class="me-2" data-bs-toggle="modal" data-bs-target="#edit_role"><i
                        class="ti ti-edit"></i></a>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
                  </div>
                </template>
              </template>
            </a-table>
          </div>
        </div>
      </div>
    </div>

    <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
      <p class="mb-0">2014 - 2025 &copy; AronHR.</p>
      <p>
        Designed &amp; Developed By
        <a href="#" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
  <!-- /Page Wrapper -->
  <roles-modal></roles-modal>
</template>
<script>
const columns = [
  {
    sorter: false,
  },
  {
    title: "Role",
    dataIndex: "Role",
    key: "Role",
    sorter: {
      compare: (a, b) => {
        a = a.Role.toLowerCase();
        b = b.Role.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Created Date",
    dataIndex: "CreatedDate",
    sorter: {
      compare: (a, b) => {
        a = a.CreatedDate.toLowerCase();
        b = b.CreatedDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
    sorter: {
      compare: (a, b) => {
        a = a.Status.toLowerCase();
        b = b.Status.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "",
    key: "action",
    sorter: true,
  },
];
const data = [
  {
    Role: "Admin",
    CreatedDate: "12 Sep 2024",
    Status: "Active",
  },
  {
    Role: "HR Manager",
    CreatedDate: "24 Oct 2024",
    Status: "Active",
  },
  {
    Role: "Recruitment Manager",
    CreatedDate: "18 Feb 2024",
    Status: "Active",
  },
  {
    Role: "Payroll Manager",
    CreatedDate: "17 Oct 2024",
    Status: "Active",
  },
  {
    Role: "Leave Manager",
    CreatedDate: "20 Jul 2024",
    Status: "Active",
  },
  {
    Role: "Performance Manager",
    CreatedDate: "10 Apr 2024",
    Status: "Active",
  },
  {
    Role: "Reports Analyst",
    CreatedDate: "29 Aug 2024",
    Status: "Active",
  },
  {
    Role: "Employee",
    CreatedDate: "22 Feb 2024",
    Status: "Inactive",
  },
  {
    Role: "Client",
    CreatedDate: "03 Nov 2024",
    Status: "Active",
  },
  {
    Role: "Department Head",
    CreatedDate: "17 Dec 2024",
    Status: "Active",
  },
];
const rowSelection = {
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
};
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref } from "vue";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
export default {
  data() {
    return {
      title: "Users",
      text: "Administration",
      text1: "Users",
      data,
      columns,
      rowSelection,
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
