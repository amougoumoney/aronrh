<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content">
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <breadcrumb :title="title" :text="text" :text1="text1" />
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="me-2 mb-2">
            <div class="input-icon-end position-relative">
              <input type="text" class="form-control date-range bookingrange" placeholder="dd/mm/yyyy - dd/mm/yyyy"
                ref="dateRangeInput" />
              <span class="input-icon-addon">
                <i class="ti ti-chevron-down"></i>
              </span>
            </div>
          </div>
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
            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_event"
              class="btn btn-primary d-flex align-items-center"><i class="ti ti-circle-plus me-2"></i>Create</a>
          </div>
          <div class="ms-2 head-icons">
            <a href="javascript:void(0);" class="" data-bs-toggle="tooltip" data-bs-placement="top"
              data-bs-original-title="Collapse" id="collapse-header" @click="toggleHeader">
              <i class="ti ti-chevrons-up"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="row">
        <!-- Calendar Sidebar -->
        <div class="col-xxl-3 col-xl-4">
          <div class="card">
            <div class="card-body p-3">
              <div class="border-bottom pb-2 mb-4">
                <div class="datepic">
                  <v-calendar is-expanded :attributes="attributes" />
                </div>
              </div>

              <!-- Event -->
              <div class="border-bottom pb-4 mb-4">
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <h5>Event</h5>
                  <a href="javascript:void(0);" class="link-primary" data-bs-toggle="modal"
                    data-bs-target="#add_event"><i class="ti ti-square-rounded-plus-filled fs-16"></i></a>
                </div>
                <p class="fs-12 mb-2">
                  Drag and drop your event or click in the calendar
                </p>
                <div id="external-events">
                  <div class="fc-event bg-transparent-success mb-1" data-event='{ "title": "Team Events" }'
                    data-event-classname="bg-transparent-success">
                    <i class="ti ti-square-rounded text-success me-2"></i>Team Events
                  </div>
                  <div class="fc-event bg-transparent-warning mb-1" data-event='{ "title": "Team Events" }'
                    data-event-classname="bg-transparent-warning">
                    <i class="ti ti-square-rounded text-warning me-2"></i>Work
                  </div>
                  <div class="fc-event bg-transparent-danger mb-1" data-event='{ "title": "External" }'
                    data-event-classname="bg-transparent-danger">
                    <i class="ti ti-square-rounded text-danger me-2"></i>External
                  </div>
                  <div class="fc-event bg-transparent-skyblue mb-1" data-event='{ "title": "Projects" }'
                    data-event-classname="bg-transparent-skyblue">
                    <i class="ti ti-square-rounded text-skyblue me-2"></i>Projects
                  </div>
                  <div class="fc-event bg-transparent-purple mb-1" data-event='{ "title": "Applications" }'
                    data-event-classname="bg-transparent-purple">
                    <i class="ti ti-square-rounded text-purple me-2"></i>Applications
                  </div>
                  <div class="fc-event bg-transparent-info mb-0" data-event='{ "title": "Desgin" }'
                    data-event-classname="bg-transparent-info">
                    <i class="ti ti-square-rounded text-info me-2"></i>Desgin
                  </div>
                </div>
              </div>
              <!-- /Event -->

              <!-- Upcoming Event -->
              <div class="border-bottom pb-2 mb-4">
                <h5 class="mb-2">
                  Upcoming Event<span class="badge badge-success rounded-pill ms-2">15</span>
                </h5>
                <div class="border-start border-purple border-3 mb-3">
                  <div class="ps-3">
                    <h6 class="fw-medium mb-1">Meeting with Team Dev</h6>
                    <p class="fs-12">
                      <i class="ti ti-calendar-check text-info me-2"></i>15 Mar 2025
                    </p>
                  </div>
                </div>
                <div class="border-start border-pink border-3 mb-3">
                  <div class="ps-3">
                    <h6 class="fw-medium mb-1">Design System With Client</h6>
                    <p class="fs-12">
                      <i class="ti ti-calendar-check text-info me-2"></i>24 Mar 2025
                    </p>
                  </div>
                </div>
                <div class="border-start border-success border-3 mb-3">
                  <div class="ps-3">
                    <h6 class="fw-medium mb-1">UI/UX Team Call</h6>
                    <p class="fs-12">
                      <i class="ti ti-calendar-check text-info me-2"></i>28 Mar 2025
                    </p>
                  </div>
                </div>
              </div>
              <!-- /Upcoming Event -->

              <!-- Upgrade Details -->
              <div class="bg-dark rounded text-center position-relative p-4">
                <span class="avatar avatar-lg rounded-circle bg-white mb-2">
                  <i class="ti ti-alert-triangle text-dark"></i>
                </span>
                <h6 class="text-white mb-3">
                  Enjoy Unlimited Access on a small price monthly.
                </h6>
                <a href="javascript:void(0);" class="btn btn-white">Upgrade Now <i class="ti ti-arrow-right"></i></a>
                <div class="box-bg">
                  <span class="bg-right"><img src="@/assets/img/bg/email-bg-01.png" alt="" /></span>
                  <span class="bg-left"><img src="@/assets/img/bg/email-bg-02.png" alt="" /></span>
                </div>
              </div>
              <!-- /Upgrade Details -->
            </div>
          </div>
        </div>
        <!-- /Calendar Sidebar -->

        <div class="col-xxl-9 col-xl-8 theiaStickySidebar">
          <div class="card border-0">
            <div class="card-body">
              <FullCalendar :options="calendarOptions" :events="events"></FullCalendar>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
      <p class="mb-0">2014-2025 &copy; AronHR.</p>
      <p>
        Designed &amp; Developed By
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
  <!-- /Page Wrapper -->
  <calendar-modal></calendar-modal>
</template>
<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
import { ref } from "vue";
const currentDate = ref(new Date());
export default {
  data() {
    return {
      title: "Calendar",
      text: "Dashboard",
      text1: "Calendar",
      startdate: currentDate,
      events: [],
      attributes: [
        {
          key: "today",
          highlight: true,
          dates: new Date(),
        },
      ],
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin, // needed for dateClick
        ],
        headerToolbar: {
          left: "today,prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        events: [
          {
            title: "12:40p Test Event 1",
            start: currentDate,
            className: "bg-success",
          },
          {
            title: "11:20a Test Event 2",
            start: "2023-03-15",
            className: "bg-info",
          },
          {
            title: "10:33a Test Event 3",
            start: "2023-03-17",
            className: "bg-primary",
          },
          {
            title: "5:47a Event Name 4",
            start: "2023-03-15",
            className: "bg-purple",
          },
        ],

        initialView: "dayGridMonth",
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
      },
    };
  },
  props: {
    msg: String,
  },
  components: {
    FullCalendar,
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
