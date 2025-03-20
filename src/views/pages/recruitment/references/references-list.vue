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
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">
                    <i class="ti ti-file-type-pdf me-1"></i>{{ $t('dashboard.exportPDF') }}
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">
                    <i class="ti ti-file-type-xls me-1"></i>{{ $t('dashboard.exportEXCEL') }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="mb-2">
            <router-link to="/recruitment/references/add" class="btn btn-primary d-flex align-items-center">
              <i class="ti ti-circle-plus me-2"></i>{{ $t('AddReference') }}
            </router-link>
          </div>
        </div>
      </div>
      <!-- /Breadcrumb -->

      <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
          <h5>{{ $t('ReferencesList') }}</h5>
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
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown">
                {{ $t('Status') }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('Completed') }}</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('Pending') }}</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('Declined') }}</a>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown">
                {{ $t('SortBy:Last7Days') }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('Ascending') }}</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('Descending') }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-body p-0">
          <div class="custom-datatable-filter table-responsive">
            <a-table class="table datatable thead-light" :columns="columns" :data-source="references"
              :row-selection="rowSelection">
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'status'">
                  <span :class="['badge', getStatusClass(record.status), 'align-items-center', 'badge-xs']">
                    <i class="ti ti-point-filled me-1"></i>
                    {{ record.status }}
                  </span>
                </template>
                <template v-if="column.key === 'action'">
                  <div class="action-icon d-inline-flex">
                    <a href="javascript:void(0);" class="me-2" @click="viewReferenceDetails(record.id)">
                      <i class="ti ti-eye"></i>
                    </a>
                    <router-link :to="`/recruitment/references/edit/${record.id}`" class="me-2">
                      <i class="ti ti-edit"></i>
                    </router-link>
                    <a href="javascript:void(0);" @click="deleteReference(record.id)">
                      <i class="ti ti-trash"></i>
                    </a>
                  </div>
                </template>
              </template>
            </a-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
import indexBreadcrumb from "@/components/breadcrumb/index-breadcrumb.vue";
import router from "../../../../router";
const dateRangeInput = ref(null);
const title = ref("References");
const text = ref("Recruitment");
const text1 = ref("References List");

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: "Reference Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Job Title",
    dataIndex: "jobTitle",
    sorter: (a, b) => a.jobTitle.localeCompare(b.jobTitle),
  },
  {
    title: "Candidate Name",
    dataIndex: "candidateName",
    sorter: (a, b) => a.candidateName.localeCompare(b.candidateName),
  },
  {
    title: "Status",
    dataIndex: "status",
    sorter: (a, b) => a.status.localeCompare(b.status),
  },
  {
    title: "Date Added",
    dataIndex: "dateAdded",
    sorter: (a, b) => new Date(a.dateAdded) - new Date(b.dateAdded),
  },
  {
    title: "",
    key: "action",
    sorter: false,
  },
];

const rowSelection = {
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
};

const references = ref([
  {
    id: 1,
    name: "John Smith",
    jobTitle: "Software Engineer",
    candidateName: "Jane Doe",
    status: "Pending",
    dateAdded: "2023-08-01",
  },
]);

const booking_range = (start, end) => {
  return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
};

onMounted(() => {
  if (dateRangeInput.value) {
    const start = moment().subtract(6, "days");
    const end = moment();

    new DateRangePicker(dateRangeInput.value, {
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
    }, booking_range);

    booking_range(start, end);
  }

  fetchReferences();
});

const getStatusClass = (status) => {
  const statusClasses = {
    Completed: "bg-success-light",
    Pending: "bg-warning-light",
    Declined: "bg-danger-light",
  };
  return statusClasses[status] || "bg-secondary-light";
};

const formatDate = (date) => new Date(date).toLocaleDateString();

const viewReferenceDetails = (referenceId) => {
  router.push(`/recruitment/references/details/${referenceId}`);
};

const deleteReference = (id) => {
  if (confirm("Are you sure you want to delete this reference?")) {
    console.log("Deleting reference with ID:", id);
  }
};

const fetchReferences = async () => {
  try {
    // Implement API call to fetch references
    // const response = await referenceService.getReferences();
    // references.value = response.data;
  } catch (error) {
    console.error("Error fetching references:", error);
  }
};
</script>
