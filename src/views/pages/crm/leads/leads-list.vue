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
            <div class="d-flex align-items-center border bg-white rounded p-1 me-2">
              <router-link
                to="/crm/leads-list"
                class="btn btn-icon btn-sm active bg-primary text-white me-1"
                ><i class="ti ti-list-tree"></i
              ></router-link>
              <router-link to="/crm/leads-grid" class="btn btn-icon btn-sm"
                ><i class="ti ti-layout-grid"></i
              ></router-link>
            </div>
          </div>
          <div class="me-2 mb-2">
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <i class="ti ti-file-export me-1"></i>Export
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
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#add_leads"
              class="btn btn-primary d-flex align-items-center"
              ><i class="ti ti-circle-plus me-2"></i>Add Lead</a
            >
          </div>
          <div class="head-icons ms-2">
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

      <!-- Leads List -->
      <div class="card">
        <div
          class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3"
        >
          <h5>Leads List</h5>
          <div
            class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3"
          >
            <div class="me-3">
              <div class="input-icon-end position-relative">
                <input
                  type="text"
                  class="form-control date-range bookingrange"
                  ref="dateRangeInput"
                  placeholder="dd/mm/yyyy - dd/mm/yyyy"
                />
                <span class="input-icon-addon">
                  <i class="ti ti-chevron-down"></i>
                </span>
              </div>
            </div>
            <div class="dropdown me-3">
              <a
                href="javascript:void(0);"
                class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                Tags
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Closed</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Contacted</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Lost</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Not Contacted</a
                  >
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                Sort By : Last 7 Days
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Recently Added</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Ascending</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Desending</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Last Month</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Last 7 Days</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-body p-0">
          <div class="custom-datatable-filter table-responsive">
            <a-table
              class="table datatable thead-light"
              :columns="columns"
              :data-source="data"
              :row-selection="rowSelection"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'LeadName'">
                  <h6 class="fs-14 fw-medium">
                    <router-link to="/crm/leads-details">{{
                      record.LeadName
                    }}</router-link>
                  </h6>
                </template>
                <template v-if="column.key === 'CompanyName'">
                  <div class="d-flex align-items-center file-name-icon">
                    <router-link
                      to="/crm/companies-details"
                      class="avatar avatar-md border avatar-rounded"
                    >
                      <img
                        :src="require(`@/assets/img/company/${record.Image}`)"
                        class="img-fluid"
                        alt="img"
                      />
                    </router-link>
                    <div class="ms-2">
                      <h6 class="fw-normal fs-14 text-gray-5">
                        <router-link to="/crm/companies-details">{{
                          record.CompanyName
                        }}</router-link>
                      </h6>
                    </div>
                  </div>
                </template>
                <template v-if="column.key === 'Tags'">
                  <span
                    :class="[
                      'badge',
                      {
                        'badge-success-transparent': record.Tags === 'Closed',
                        'badge-purple-transparent': record.Tags === 'Contacted',
                        'badge-danger-transparent': record.Tags === 'Lost',
                        'badge-warning-transparent': record.Tags === 'Not Contacted',
                      },
                    ]"
                    >{{ record.Tags }}</span
                  >
                </template>
                <template v-if="column.key === 'action'">
                  <div class="action-icon d-inline-flex">
                    <a
                      href="javascript:void(0);"
                      class="me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_leads"
                      ><i class="ti ti-edit"></i
                    ></a>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                      ><i class="ti ti-trash"></i
                    ></a>
                  </div>
                </template>
              </template>
            </a-table>
          </div>
        </div>
      </div>
      <!-- /Leads List -->
    </div>

    <div
      class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3"
    >
      <p class="mb-0">2014 - 2025 &copy; SmartHR.</p>
      <p>
        Designed &amp; Developed By
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
  <!-- /Page Wrapper -->
  <leads-modal></leads-modal>
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
    title: "Lead Name",
    dataIndex: "LeadName",
    key: "LeadName",
    sorter: {
      compare: (a, b) => {
        a = a.LeadName.toLowerCase();
        b = b.LeadName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Company Name",
    dataIndex: "CompanyName",
    key: "CompanyName",
    sorter: {
      compare: (a, b) => {
        a = a.CompanyName.toLowerCase();
        b = b.CompanyName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Phone",
    dataIndex: "Phone",
    sorter: {
      compare: (a, b) => {
        a = a.Phone.toLowerCase();
        b = b.Phone.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Email",
    dataIndex: "Email",
    sorter: {
      compare: (a, b) => {
        a = a.Email.toLowerCase();
        b = b.Email.toLowerCase();
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
    title: " Created Date",
    dataIndex: "CreatedDate",
    key: "CreatedDate",
    sorter: {
      compare: (a, b) => {
        a = a.CreatedDate.toLowerCase();
        b = b.CreatedDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Lead Owner",
    dataIndex: "LeadOwner",
    sorter: {
      compare: (a, b) => {
        a = a.LeadOwner.toLowerCase();
        b = b.LeadOwner.toLowerCase();
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
    LeadName: "Collins",
    CompanyName: "BrightWave Innovations",
    Phone: "(123) 4567 890",
    Email: "anthony@example.com",
    Tags: "Closed",
    CreatedDate: "14 Jan 2024",
    Image: "company-01.svg",
    LeadOwner: "Hendry",
  },
  {
    LeadName: "Konopelski",
    CompanyName: "Stellar Dynamics",
    Phone: "(179) 7382 829",
    Email: "brian@example.com",
    Tags: "Contacted",
    CreatedDate: "21 Jan 2024",
    Image: "company-02.svg",
    LeadOwner: "Guilory",
  },
  {
    LeadName: "Adams",
    CompanyName: "Quantum Nexus",
    Phone: "(184) 2719 738",
    Email: "harvey@example.com",
    Tags: "Lost",
    CreatedDate: "20 Feb 2024",
    Image: "company-03.svg",
    LeadOwner: "Jami",
  },
  {
    LeadName: "Schumm",
    CompanyName: "EcoVision Enterprises",
    Phone: "(193) 7839 748",
    Email: "peral@example.com",
    Tags: "Not Contacted",
    CreatedDate: "15 Mar 2024",
    Image: "company-04.svg",
    LeadOwner: "Theresa",
  },
  {
    LeadName: "Wisozk",
    CompanyName: "Aurora Technologies",
    Phone: "(183) 9302 890",
    Email: "martniwr@example.com",
    Tags: "Closed",
    CreatedDate: "12 Apr 2024",
    Image: "company-05.svg",
    LeadOwner: "Smith",
  },
  {
    LeadName: "Heller",
    CompanyName: "BlueSky Ventures",
    Phone: "(120) 3728 039",
    Email: "ray456@example.com",
    Tags: "Contacted",
    CreatedDate: "20 May 2024",
    Image: "company-06.svg",
    LeadOwner: "Martin",
  },
  {
    LeadName: "Gutkowski",
    CompanyName: "TerraFusion Energy",
    Phone: "(102) 8480 832",
    Email: "murray@example.com",
    Tags: "Not Contacted",
    CreatedDate: "06 Jul 2024",
    Image: "company-07.svg",
    LeadOwner: "Newell",
  },
  {
    LeadName: "Walter",
    CompanyName: "UrbanPulse Design",
    Phone: "(162) 8920 713",
    Email: "smtih@example.com",
    Tags: "Closed",
    CreatedDate: "02 Sep 2024",
    Image: "company-08.svg",
    LeadOwner: "Janet",
  },
  {
    LeadName: "Hansen",
    CompanyName: "Nimbus Networks",
    Phone: "(189) 0920 723",
    Email: "connie@example.com",
    Tags: "Closed",
    CreatedDate: "15 Nov 2024",
    Image: "company-09.svg",
    LeadOwner: "Craig",
  },
  {
    LeadName: "Leuschke",
    CompanyName: "Epicurean Delights",
    Phone: "(168) 8392 823",
    Email: "broaddus@example.com",
    Tags: "Lost",
    CreatedDate: "10 Dec 2024",
    Image: "company-10.svg",
    LeadOwner: "Daniel",
  },
];
const rowSelection = {
  onChange: () => {},
  onSelect: () => {},
  onSelectAll: () => {},
};
export default {
  data() {
    return {
      title: "Leads",
      text: "Superadmin",
      text1: "Leads List",
      data,
      columns,
      rowSelection,
    };
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
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
};
</script>
