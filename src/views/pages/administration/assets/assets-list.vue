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
            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_assets"
              class="btn btn-primary d-flex align-items-center"><i class="ti ti-circle-plus me-2"></i>Add Asset</a>
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

      <!-- Assets Lists -->
      <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
          <h5>Assets List</h5>
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
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown">
                Status
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
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
        <div class="card-body p-0">
          <div class="custom-datatable-filter table-responsive">
            <a-table class="table datatable thead-light" :columns="columns" :data-source="data"
              :row-selection="rowSelection">
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'AssetName'">
                  <h6 class="fs-14 fw-medium">{{ record.AssetName }}</h6>
                </template>
                <template v-if="column.key === 'AssetUser'">
                  <div class="d-flex align-items-center file-name-icon">
                    <a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
                      <img :src="require(`@/assets/img/users/${record.Image}`)" class="img-fluid" alt="img" />
                    </a>
                    <div class="ms-2">
                      <h6 class="fw-medium">
                        <a href="javascript:void(0);">{{ record.AssetUser }}</a>
                      </h6>
                    </div>
                  </div>
                </template>
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
                    <a href="javascript:void(0);" class="me-2" data-bs-toggle="modal" data-bs-target="#edit_assets"><i
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
  <assets-modal></assets-modal>
</template>
<script>
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref } from "vue";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
const columns = [
  {
    sorter: false,
  },
  {
    title: "Asset Name",
    dataIndex: "AssetName",
    key: "AssetName",
    sorter: {
      compare: (a, b) => {
        a = a.AssetName.toLowerCase();
        b = b.AssetName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Asset User",
    dataIndex: "AssetUser",
    key: "AssetUser",
    sorter: {
      compare: (a, b) => {
        a = a.AssetUser.toLowerCase();
        b = b.AssetUser.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Purchase Date",
    dataIndex: "PurchaseDate",
    sorter: {
      compare: (a, b) => {
        a = a.PurchaseDate.toLowerCase();
        b = b.PurchaseDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Warranty",
    dataIndex: "Warranty",
    sorter: {
      compare: (a, b) => {
        a = a.Warranty.toLowerCase();
        b = b.Warranty.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Warranty End Date",
    dataIndex: "WarrantyEndDate",
    sorter: {
      compare: (a, b) => {
        a = a.WarrantyEndDate.toLowerCase();
        b = b.WarrantyEndDate.toLowerCase();
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
    AssetName: "Dell Laptop",
    AssetUser: "Anthony Lewis",
    PurchaseDate: "12 Sep 2024",
    Warranty: "12 months",
    Image: "user-32.jpg",
    WarrantyEndDate: "12 Sep 2024",
    Status: "Active",
  },
  {
    AssetName: "Canon Portable Printer",
    AssetUser: "Brian Villalobos",
    PurchaseDate: "24 Oct 2024",
    Warranty: "12 months",
    Image: "user-09.jpg",
    WarrantyEndDate: "24 Oct 2024",
    Status: "Active",
  },
  {
    AssetName: "Dell Laptop",
    AssetUser: "Sophie Headrick",
    PurchaseDate: "18 Feb 2024",
    Warranty: "12 months",
    Image: "user-38.jpg",
    WarrantyEndDate: "18 Feb 2024",
    Status: "Active",
  },
  {
    AssetName: "Dell Laptop",
    AssetUser: "Stephan Peralt",
    PurchaseDate: "17 Oct 2024",
    Warranty: "12 months",
    Image: "user-33.jpg",
    WarrantyEndDate: "17 Oct 2024",
    Status: "Active",
  },
  {
    AssetName: "Dell Laptop",
    AssetUser: "Thomas Bordelon",
    PurchaseDate: "20 Aug 2024",
    Warranty: "12 months",
    Image: "user-27.jpg",
    WarrantyEndDate: "20 Aug 2024",
    Status: "Active",
  },
  {
    AssetName: "Dell Laptop",
    AssetUser: "Doglas Martini",
    PurchaseDate: "10 Apr 2024",
    Warranty: "12 months",
    Image: "user-32.jpg",
    WarrantyEndDate: "10 Apr 2024",
    Status: "Active",
  },
  {
    AssetName: "Dell Laptop",
    AssetUser: "Cameron Drake",
    PurchaseDate: "29 Aug 2024",
    Warranty: "12 months",
    Image: "user-09.jpg",
    WarrantyEndDate: "29 Aug 2024",
    Status: "Active",
  },
  {
    AssetName: "Dell Laptop",
    AssetUser: "Harvey Smith",
    PurchaseDate: "22 Feb 2024",
    Warranty: "12 months",
    Image: "user-38.jpg",
    WarrantyEndDate: "22 Feb 2024",
    Status: "Inactive",
  },
  {
    AssetName: "Dell Laptop",
    AssetUser: "Michael Walker",
    PurchaseDate: "03 Nov 2024",
    Warranty: "12 months",
    Image: "user-33.jpg",
    WarrantyEndDate: "03 Nov 2024",
    Status: "Active",
  },
  {
    AssetName: "Dell Laptop",
    AssetUser: "Doris Crowley",
    PurchaseDate: "17 Dec 2024",
    Warranty: "12 months",
    Image: "user-27.jpg",
    WarrantyEndDate: "17 Dec 2024",
    Status: "Active",
  },
];
const rowSelection = {
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
};
export default {
  data() {
    return {
      title: "Assets",
      text: "Administration",
      text1: "Assets",
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
