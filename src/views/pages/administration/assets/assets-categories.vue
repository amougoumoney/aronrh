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
          <div class="me-2 mb-2"></div>
          <div class="mb-2">
            <a href="#" data-bs-toggle="modal" data-bs-target="#add_assets"
              class="btn btn-primary d-flex align-items-center"><i class="ti ti-circle-plus me-2"></i>Add Category</a>
          </div>
          <div class="ms-2 head-icons">
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
          <h5>Asset Category List</h5>
        </div>
        <div class="card-body p-0">
          <div class="custom-datatable-filter table-responsive">
            <a-table class="table datatable thead-light" :columns="columns" :data-source="data"
              :row-selection="rowSelection">
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'CategoryName'">
                  <h6 class="fs-14 fw-medium">{{ record.CategoryName }}</h6>
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
                    <a href="#" class="me-2" data-bs-toggle="modal" data-bs-target="#edit_assets"><i
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
  <!-- Add Assets -->
  <div class="modal fade" id="add_assets">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Category</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Category Name</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <vue-select :options="AddAssetSat" id="addassetsat" placeholder="Select" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Add Category</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Assets -->

  <!-- Edit Assets -->
  <div class="modal fade" id="edit_assets">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Category</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Category Name</label>
                  <input type="text" class="form-control" value="Office Furnitures" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <vue-select :options="AssetSat" id="assetsat" placeholder="Active" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Assets -->

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
            You want to delete all the marked items, this cant be undone once you delete.
          </p>
          <div class="d-flex justify-content-center">
            <a href="#" class="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <router-link to="/asset/asset-categories" class="btn btn-danger">Yes, Delete</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
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
    title: "Category Name",
    dataIndex: "CategoryName",
    key: "CategoryName",
    sorter: {
      compare: (a, b) => {
        a = a.CategoryName.toLowerCase();
        b = b.CategoryName.toLowerCase();
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
    CategoryName: "Laptops",
    Status: "Active",
  },
  {
    CategoryName: "Mobile Phones",
    Status: "Active",
  },
  {
    CategoryName: "Office Furnitures",
    Status: "Active",
  },
  {
    CategoryName: "Printers",
    Status: "Active",
  },
  {
    CategoryName: "Keyboards",
    Status: "Active",
  },
  {
    CategoryName: "Mouse",
    Status: "Active",
  },
  {
    CategoryName: "Headsets",
    Status: "Active",
  },
  {
    CategoryName: "Scanners",
    Status: "Inactive",
  },
  {
    CategoryName: "Projectors",
    Status: "Active",
  },
  {
    CategoryName: "Tablets",
    Status: "Active",
  },
];
const rowSelection = {
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
};
export default {
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
  data() {
    return {
      title: "Assets Category",
      text: "Administration",
      text1: "Assets Category",
      data,
      columns,
      rowSelection,
      AddAssetSat: ["Select", "Active", "Inactive"],
      AssetSat: ["Select", "Active", "Inactive"],
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
