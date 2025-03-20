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
          <div class="mb-2">
            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_budgets"
              class="btn btn-primary d-flex align-items-center"><i class="ti ti-circle-plus me-2"></i>Add Budget</a>
          </div>
          <div class="ms-2 head-icons">
            <a href="javascript:void(0);" class="" data-bs-toggle="tooltip" data-bs-placement="top"
              data-bs-original-title="Collapse" id="collapse-header" @click="toggleHeader">
              <i class="ti ti-chevrons-up"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- /Breadcrumb -->

      <!-- Budgets list -->
      <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
          <h5>Budget List</h5>
          <div class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
            <div class="dropdown">
              <a href="javascript:void(0);"
                class="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
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
        <div class="card-body p-0">
          <div class="custom-datatable-filter table-responsive">
            <a-table class="table datatable thead-light" :columns="columns" :data-source="data"
              :row-selection="rowSelection">
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'BudgetTitle'">
                  <h6 class="fw-medium">
                    <a href="javascript:void(0);">{{ record.BudgetTitle }}</a>
                  </h6>
                </template>
                <template v-if="column.key === 'action'">
                  <div class="action-icon d-inline-flex">
                    <a href="javascript:void(0);" class="me-2" data-bs-toggle="modal" data-bs-target="#edit_budgets"><i
                        class="ti ti-edit"></i></a>
                    <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                        class="ti ti-trash"></i></a>
                  </div>
                </template>
              </template>
            </a-table>
          </div>
        </div>
      </div>
      <!-- /Budgets list -->
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
  <budgets-modal></budgets-modal>
</template>
<script>
const columns = [
  {
    sorter: false,
  },
  {
    title: "Budget Title",
    dataIndex: "BudgetTitle",
    key: "BudgetTitle",
    sorter: {
      compare: (a, b) => {
        a = a.BudgetTitle.toLowerCase();
        b = b.BudgetTitle.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Budget Type",
    dataIndex: "BudgetType",
    sorter: {
      compare: (a, b) => {
        a = a.BudgetType.toLowerCase();
        b = b.BudgetType.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Start Date",
    dataIndex: "StartDate",
    sorter: {
      compare: (a, b) => {
        a = a.StartDate.toLowerCase();
        b = b.StartDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "End Date",
    dataIndex: "EndDate",
    sorter: {
      compare: (a, b) => {
        a = a.EndDate.toLowerCase();
        b = b.EndDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Total Revenue",
    dataIndex: "TotalRevenue",
    sorter: {
      compare: (a, b) => {
        a = a.TotalRevenue.toLowerCase();
        b = b.TotalRevenue.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: " Total Expense",
    dataIndex: "TotalExpense",
    sorter: {
      compare: (a, b) => {
        a = a.TotalExpense.toLowerCase();
        b = b.TotalExpense.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Tax Amount",
    dataIndex: "TaxAmount",
    sorter: {
      compare: (a, b) => {
        a = a.TaxAmount.toLowerCase();
        b = b.TaxAmount.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Budget Amount",
    dataIndex: "BudgetAmount",
    sorter: {
      compare: (a, b) => {
        a = a.BudgetAmount.toLowerCase();
        b = b.BudgetAmount.toLowerCase();
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
    BudgetTitle: "Office Supplies",
    BudgetType: "Category",
    StartDate: "14 Jan 2024",
    EndDate: "13 Feb 2024",
    TotalRevenue: "250000",
    TotalExpense: "150000",
    TaxAmount: "10000",
    BudgetAmount: "90000",
  },
  {
    BudgetTitle: "Recruitment",
    BudgetType: "Category",
    StartDate: "21 Jan 2024",
    EndDate: "20 Feb 2024",
    TotalRevenue: "300000",
    TotalExpense: "200000",
    TaxAmount: "15000",
    BudgetAmount: "85000",
  },
  {
    BudgetTitle: "Tender",
    BudgetType: "Project",
    StartDate: "10 Feb 2024",
    EndDate: "08 Dec 2024",
    TotalRevenue: "200000",
    TotalExpense: "170000",
    TaxAmount: "5000",
    BudgetAmount: "25000",
  },
  {
    BudgetTitle: "Salary 2024",
    BudgetType: "Category",
    StartDate: "18 Feb 2024",
    EndDate: "16 Dec 2024",
    TotalRevenue: "300000",
    TotalExpense: "200000",
    TaxAmount: "15000",
    BudgetAmount: "85000",
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
      title: "Budgets",
      text: "HR",
      text1: "Budgets",
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
