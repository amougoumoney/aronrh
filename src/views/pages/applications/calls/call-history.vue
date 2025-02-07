<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <!-- Breadcrumb -->
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <breadcrumb :title="title" :text="text" :text1="text1" />
        <div class="head-icons">
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
      <!-- /Breadcrumb -->

      <div class="card">
        <div
          class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3"
        >
          <h5>Call History List</h5>
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
                Call Type
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Incoming</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Outgoing</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Missed Call</a
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
              class="table datatable"
              :columns="columns"
              :data-source="data"
              :row-selection="rowSelection"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'Name'">
                  <div class="d-flex align-items-center">
                    <a
                      href="javascript:void(0);"
                      class="avatar avatar-md"
                      data-bs-toggle="modal"
                      data-bs-target="#view_details"
                    >
                      <img
                        :src="require(`@/assets/img/users/${record.Image}`)"
                        class="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div class="ms-2">
                      <p class="text-dark fw-medium mb-0">
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#view_details"
                          >{{ record.Name }}</a
                        >
                      </p>
                      <span class="fs-12">{{ record.Email }}</span>
                    </div>
                  </div>
                </template>
                <template v-if="column.key === 'CallType'">
                  <div class="d-inline-flex align-items-center">
                    <i :class="record.Class"></i>{{ record.CallType }}
                  </div>
                </template>
                <template v-if="column.key === 'action'">
                  <div class="action-icon d-inline-flex">
                    <a
                      href="javascript:void(0);"
                      class="me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#call_history"
                      ><i class="ti ti-eye"></i
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
    </div>

    <div
      class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3"
    >
      <p class="mb-0">2014-2025 &copy; SmartHR.</p>
      <p>
        Designed &amp; Developed By
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
  <call-history-modal></call-history-modal>
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
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    sorter: {
      compare: (a, b) => {
        a = a.Name.toLowerCase();
        b = b.Name.toLowerCase();
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
    title: "Call Type",
    dataIndex: "CallType",
    key: "CallType",
    sorter: {
      compare: (a, b) => {
        a = a.CallType.toLowerCase();
        b = b.CallType.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Duration",
    dataIndex: "Duration",
    sorter: {
      compare: (a, b) => {
        a = a.Duration.toLowerCase();
        b = b.Duration.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Date & Time",
    dataIndex: "DateTime",
    sorter: {
      compare: (a, b) => {
        a = a.DateTime.toLowerCase();
        b = b.DateTime.toLowerCase();
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
    Name: "Anthony Lewis",
    Email: "anthony@example.com",
    Phone: "(123) 4567 890",
    CallType: "Incoming",
    Class: "ti ti-phone-incoming text-success me-2",
    Duration: "0.25",
    Image: "user-32.jpg",
    DateTime: "14 Jan 2024, 04:27 AM",
  },
  {
    Name: "Brian Villalobos",
    Email: "brian@example.com",
    Phone: "(179) 7382 829",
    CallType: "Outgoing",
    Class: "ti ti-phone-outgoing text-success me-2",
    Duration: "0.1",
    Image: "user-09.jpg",
    DateTime: "21 Jan 2024, 03:19 AM",
  },
  {
    Name: "Harvey Smith",
    Email: "harvey@example.com",
    Phone: "(184) 2719 738",
    CallType: "Incoming",
    Class: "ti ti-video text-success me-2",
    Duration: "0.4",
    Image: "user-01.jpg",
    DateTime: "20 Feb 2024, 12:15 PM",
  },
  {
    Name: "peral@example.com",
    Email: "peral@example.com",
    Phone: "(193) 7839 748",
    CallType: "Missed Call",
    Class: "ti ti-phone-x text-danger me-2",
    Duration: "0",
    Image: "user-33.jpg",
    DateTime: "15 Mar 2024, 12:11 AM",
  },
  {
    Name: "Doglas Martini",
    Email: "martniwr@example.com",
    Phone: "(183) 9302 890",
    CallType: "Outgoing",
    Class: "ti ti-video text-success me-2",
    Duration: "0.35",
    Image: "user-33.jpg",
    DateTime: "12 Apr 2024, 05:48 PM",
  },
  {
    Name: "Linda Ray",
    Email: "ray456@example.com",
    Phone: "(120) 3728 039",
    CallType: "Incomiing",
    Class: "ti ti-phone-incoming text-success me-2",
    Duration: "1.4",
    Image: "user-02.jpg",
    DateTime: "20 May 2024, 06:11 PM",
  },
  {
    Name: "Elliot Murray",
    Email: "murray@example.com",
    Phone: "(102) 8480 832",
    CallType: "Missed call",
    Class: "ti ti-video text-danger me-2",
    Duration: "0",
    Image: "user-35.jpg",
    DateTime: "06 Jul 2024, 07:15 PM",
  },
  {
    Name: "Rebecca Smtih",
    Email: "smtih@example.com",
    Phone: "(162) 8920 713",
    CallType: "Outgoing",
    Class: "ti ti-phone-outgoing text-success me-2",
    Duration: "0.45",
    Image: "user-36.jpg",
    DateTime: "02 Sep 2024, 09:21 PM",
  },
  {
    Name: "Connie Waters",
    Email: "connie@example.com",
    Phone: "(189) 0920 723",
    CallType: "Incoming",
    Class: "ti ti-phone-incoming text-success me-2",
    Duration: "0.5",
    Image: "user-37.jpg",
    DateTime: "15 Nov 2024, 12:44 PM",
  },
  {
    Name: "Lori Broaddus",
    Email: "broaddus@example.com",
    Phone: "(168) 8392 823",
    CallType: "Missed call",
    Class: "ti ti-phone-x text-danger me-2",
    Duration: "0",
    Image: "user-38.jpg",
    DateTime: "10 Dec 2024, 11:23 PM",
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
      title: "Call History",
      text: "Application",
      text1: "Call History",
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
