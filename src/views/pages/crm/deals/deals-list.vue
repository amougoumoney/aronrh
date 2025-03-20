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
            <div class="d-flex align-items-center border bg-white rounded p-1 me-2">
              <router-link to="/crm/deals-list" class="btn btn-icon btn-sm active bg-primary text-white me-1"><i
                  class="ti ti-list-tree"></i></router-link>
              <router-link to="/crm/deals-grid" class="btn btn-icon btn-sm"><i
                  class="ti ti-layout-grid"></i></router-link>
            </div>
          </div>
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
            <a href="#" data-bs-toggle="modal" data-bs-target="#add_deals"
              class="btn btn-primary d-flex align-items-center"><i class="ti ti-circle-plus me-2"></i>Add Deal</a>
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

      <!-- Contact List -->
      <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
          <h5>Contact List</h5>
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
                Stage
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="#" class="dropdown-item rounded-1">Quality To Buy</a>
                </li>
                <li>
                  <a href="#" class="dropdown-item rounded-1">Proposal Made</a>
                </li>
              </ul>
            </div>

            <div class="dropdown me-3">
              <a href="#" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown">
                Select Status
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
                <template v-if="column.key === 'DealName'">
                  <h6 class="fw-medium fs-14">
                    <router-link to="/crm/deals-details">{{
                      record.DealName
                    }}</router-link>
                  </h6>
                </template>
                <template v-if="column.key === 'Tags'">
                  <span :class="[
                    'badge',
                    {
                      'badge-info-transparent': record.Tags === 'Promotion',
                      'badge-warning-transparent': record.Tags === 'Rated',
                      'badge-pink-transparent': record.Tags === 'Collab',
                      'badge-danger-transparent': record.Tags === 'Rejected',
                    },
                  ]">{{ record.Tags }}</span>
                </template>
                <template v-if="column.key === 'Status'">
                  <span :class="[
                    'badge',
                    record.Status === 'Open'
                      ? 'badge-info'
                      : record.Status === 'Won'
                        ? 'badge-success'
                        : record.Status === 'Lost'
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
                    <a href="#" class="me-2" data-bs-toggle="modal" data-bs-target="#edit_deals"><i
                        class="ti ti-edit"></i></a>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
                  </div>
                </template>
              </template>
            </a-table>
          </div>
        </div>
      </div>
      <!-- /Contact List -->
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
  <deals-grid-modal></deals-grid-modal>
</template>
<script>
const columns = [
  {
    sorter: false,
  },
  {
    title: "Deal Name",
    dataIndex: "DealName",
    key: "DealName",
    sorter: {
      compare: (a, b) => {
        a = a.DealName.toLowerCase();
        b = b.DealName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Stage",
    dataIndex: "Stage",
    sorter: {
      compare: (a, b) => {
        a = a.Stage.toLowerCase();
        b = b.Stage.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "DealValue",
    dataIndex: "DealValue",
    sorter: {
      compare: (a, b) => {
        a = a.DealValue.toLowerCase();
        b = b.DealValue.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Tags",
    dataIndex: "Tags",
    key: "Tags",
    sorter: {
      compare: (a, b) => {
        a = a.Tags.toLowerCase();
        b = b.Tags.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Expected Closed Date",
    dataIndex: "ExpectedClosedDate",
    key: "ExpectedClosedDate",
    sorter: {
      compare: (a, b) => {
        a = a.ExpectedClosedDate.toLowerCase();
        b = b.ExpectedClosedDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Owner",
    dataIndex: "Owner",
    sorter: {
      compare: (a, b) => {
        a = a.Owner.toLowerCase();
        b = b.Owner.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Probability",
    dataIndex: "Probability",
    sorter: {
      compare: (a, b) => {
        a = a.Probability.toLowerCase();
        b = b.Probability.toLowerCase();
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
    DealName: "Collins",
    Stage: "Quality To Buy",
    DealValue: "$4,50,000",
    Tags: "Promotion",
    ExpectedClosedDate: "14 Jan 2024",
    Owner: "Hendry",
    Probability: "70%",
    Status: "Open",
  },
  {
    DealName: "Konopelski",
    Stage: "Proposal Made",
    DealValue: "$3,15,000",
    Tags: "Rated",
    ExpectedClosedDate: "21 Jan 2024",
    Owner: "Guilory",
    Probability: "85%",
    Status: "Won",
  },
  {
    DealName: "Adams",
    Stage: "Contact Made",
    DealValue: "$8,40,000",
    Tags: "Promotion",
    ExpectedClosedDate: "20 Feb 2024",
    Owner: "Jami",
    Probability: "60%",
    Status: "Open",
  },
  {
    DealName: "Schumm",
    Stage: "Quality To Buy",
    DealValue: "$6,10,000",
    Tags: "Collab",
    ExpectedClosedDate: "15 Mar 2024",
    Owner: "Theresa",
    Probability: "75%",
    Status: "Won",
  },
  {
    DealName: "Wisozk",
    Stage: "Presentation",
    DealValue: "$4,70,000",
    Tags: "Rejected",
    ExpectedClosedDate: "12 Apr 2024",
    Owner: "Smith",
    Probability: "80%",
    Status: "Won",
  },
  {
    DealName: "Heller",
    Stage: "Appointment",
    DealValue: "$5,50,000",
    Tags: "Rated",
    ExpectedClosedDate: "20 May 2024",
    Owner: "Martin",
    Probability: "65%",
    Status: "Lost",
  },
  {
    DealName: "Gutkowski",
    Stage: "Qualify to Buy",
    DealValue: "$5,00,000",
    Tags: "Calls",
    ExpectedClosedDate: "06 Jul 2024",
    Owner: "Newell",
    Probability: "90%",
    Status: "Lost",
  },
  {
    DealName: "Walter",
    Stage: "Proposal Made",
    DealValue: "$4,50,000",
    Tags: "Rejected",
    ExpectedClosedDate: "02 Sep 2024",
    Owner: "Janet",
    Probability: "55%",
    Status: "Won",
  },
  {
    DealName: "Hansen",
    Stage: "Presentation",
    DealValue: "$6,20,000",
    Tags: "Collab",
    ExpectedClosedDate: "15 Nov 2024",
    Owner: "Craig",
    Probability: "95%",
    Status: "Lost",
  },
  {
    DealName: "Leuschke",
    Stage: "Appointment",
    DealValue: "$7,40,000",
    Tags: "Calls",
    ExpectedClosedDate: "10 Dec 2024",
    Owner: "Daniel",
    Probability: "50%",
    Status: "Won",
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
      title: "Companies",
      text: "Superadmin",
      text1: "Companies",
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
