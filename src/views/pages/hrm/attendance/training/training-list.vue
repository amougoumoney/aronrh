<script setup>
import { ref, onMounted } from "vue";
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import moment from "moment";
import DateRangePicker from "daterangepicker";
import trainingModal from "@/components/modal/training-modal.vue";
import triningTable from './training-table.vue';

// Refs
const dateRangeInput = ref(null);
const trainingModalRef = ref(null);

// Data
const title = "Training";
const text = "Performance";
const text1 = "Add New Training";


// Methods
function toggleHeader() {
  document.getElementById("collapse-header").classList.toggle("active");
  document.body.classList.toggle("header-collapse");
}

function booking_range(start, end) {
  return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
}

function showAddTrainingModal() {
  trainingModalRef.value.show();
}

// Lifecycle
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
          <div class="mb-2">
            <button @click="showAddTrainingModal" class="btn btn-primary d-flex align-items-center">
              <i class="ti ti-circle-plus me-2"></i>{{$t('AddTraining')}}
            </button>
          </div>
          <div class="head-icons ms-2">
            <button class="btn" @click="toggleHeader" data-bs-toggle="tooltip" data-bs-placement="top"
              data-bs-original-title="Collapse" id="collapse-header">
              <i class="ti ti-chevrons-up"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- /Breadcrumb -->

      <!-- Performance Indicator list -->
      <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
          <h5>{{$t('TrainingList')}}</h5>
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
            <div class="dropdown">
              <button class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                {{$t('SortBy:Last7Days')}}
              </button>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{$t('RecentlyAdded')}}</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{$t('Ascending')}}</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{$t('Descending')}}</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{$t('lastMonth')}}</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{$t('Last7Days')}}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-body p-0">
          <div class="custom-datatable-filter table-responsive">
            <trining-table @edit-training="(data) => trainingModalRef.value.show(true, data)"></trining-table>
          </div>
        </div>
      </div>
      <!-- /Performance Indicator list -->
    </div>

    <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
      <p class="mb-0">2014 - 2025 &copy; AronHR.</p>
      <p>
        {{$t('designed')}} &amp; {{$t('developedBy')}}
        <a href="javascript:void(0);" class="text-primary">{{$t('dreams')}}</a>
      </p>
    </div>
  </div>
  <!-- /Page Wrapper -->

  <!-- Training Modal Component -->
  <training-modal ref="trainingModalRef" @training-saved="refreshTrainingList"></training-modal>
</template>