<script setup>
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref, onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
import OvertimeModal from "@/components/modal/overtime-modal.vue";
import OvertimeTable from "./overtime-table.vue";

const title = "Overtime";
const text = "Employee";
const text1 = "Overtime";

const dateRangeInput = ref(null);
const overTimeModalRef = ref(null);

// Fonction pour formater la plage de dates
const booking_range = (start, end) => {
    return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
};

const showOvertimeModal = () => {
    overTimeModalRef.value.show();
};

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

// Fonction pour activer/désactiver l'en-tête
const toggleHeader = () => {
    const header = document.getElementById("collapse-header");
    if (header) {
        header.classList.toggle("active");
        document.body.classList.toggle("header-collapse");
    }
};
</script>

<template>
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
        <div class="content">

            <!-- Breadcrumb -->
            <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                <breadcrumb :title="title" :text="text" :text1="text1" />
                <div class="d-flex my-xl-auto right-content align-items-center flex-wrap ">
                    <div class="me-2 mb-2">
                        <div class="dropdown">
                            <a href="javascript:void(0);"
                                class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                data-bs-toggle="dropdown">
                                <i class="ti ti-file-export me-1"></i>{{$t('dashboard.export')}}
                            </a>
                            <ul class="dropdown-menu  dropdown-menu-end p-3">
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                            class="ti ti-file-type-pdf me-1"></i>{{$t('dashboard.exportPDF')}}F</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                            class="ti ti-file-type-xls me-1"></i>{{$t('dashboard.exportEXCEL')}} </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="mb-2">
                        <a href="javascript:void(0);" data-bs-toggle="modal" @click="showOvertimeModal"
                            class="btn btn-primary d-flex align-items-center"><i class="ti ti-circle-plus me-2"></i>
                            {{$t('AddOvertime')}}</a>
                    </div>
                    <div class="head-icons ms-2">
                        <a href="javascript:void(0);" class="" data-bs-toggle="tooltip" data-bs-placement="top"
                            data-bs-original-title="Collapse" id="collapse-header" @click="toggleHeader">
                            <i class="ti ti-chevrons-up"></i>
                        </a>
                    </div>
                </div>
            </div>
            <!-- /Breadcrumb -->

            <!-- Overtime Counts -->
            <div class="row">
                <div class="col-xl-3 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center flex-wrap justify-content-between">
                                <div>
                                    <p class="fs-12 fw-medium mb-0 text-gray-5">{{$t('OvertimeEmployee')}}</p>
                                    <h4>12</h4>
                                </div>
                                <div>
                                    <span
                                        class="p-2 br-10 bg-transparent-primary border border-primary d-flex align-items-center justify-content-center"><i
                                            class="ti ti-user-check text-primary fs-18"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center flex-wrap justify-content-between">
                                <div>
                                    <p class="fs-12 fw-medium mb-0 text-gray-5">{{$t('OvertimeHours')}}</p>
                                    <h4>118</h4>
                                </div>
                                <div>
                                    <span
                                        class="p-2 br-10 bg-pink-transparent border border-pink d-flex align-items-center justify-content-center"><i
                                            class="ti ti-user-edit text-pink fs-18"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center flex-wrap justify-content-between">
                                <div>
                                    <p class="fs-12 fw-medium mb-0 text-gray-5">{{$t('PendingRequest')}}</p>
                                    <h4>23</h4>
                                </div>
                                <div>
                                    <span
                                        class="p-2 br-10 bg-transparent-purple border border-purple d-flex align-items-center justify-content-center"><i
                                            class="ti ti-user-exclamation text-purple fs-18"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center flex-wrap justify-content-between">
                                <div>
                                    <p class="fs-12 fw-medium mb-0 text-gray-5">{{$t('Rejected')}}</p>
                                    <h4>5</h4>
                                </div>
                                <div>
                                    <span
                                        class="p-2 br-10 bg-skyblue-transparent border border-skyblue d-flex align-items-center justify-content-center"><i
                                            class="ti ti-user-exclamation text-skyblue fs-18"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Overtime Counts -->

            <!-- Performance Indicator list -->
            <div class="card">
                <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                    <h5>{{$t('Overtime')}}</h5>
                    <div class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                        <div class="me-3">
                            <div class="input-icon-end position-relative">
                                <input type="text" class="form-control date-range bookingrange" ref="dateRangeInput"
                                    :placeholder="$t('dd/mm/yyyy - dd/mm/yyyy')">
                                <span class="input-icon-addon">
                                    <i class="ti ti-chevron-down"></i>
                                </span>
                            </div>
                        </div>
                        <div class="dropdown me-3">
                            <a href="javascript:void(0);"
                                class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                data-bs-toggle="dropdown">
                                {{$t('Employee')}}
                            </a>
                            <ul class="dropdown-menu  dropdown-menu-end p-3">
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Anthony Lewis</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Brian Villalobos</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Harvey Smith</a>
                                </li>
                            </ul>
                        </div>
                        <div class="dropdown me-3">
                            <a href="javascript:void(0);"
                                class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                data-bs-toggle="dropdown">
                                {{$t('Project')}}
                            </a>
                            <ul class="dropdown-menu  dropdown-menu-end p-3">
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">{{$t('OfficeManagement')}}</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">{{$t('ProjectManagement')}}</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">
                                        {{$t('HospitalAdministration')}}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="dropdown me-3">
                            <a href="javascript:void(0);"
                                class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                data-bs-toggle="dropdown">
                                {{$t('SelectStatus')}}
                            </a>
                            <ul class="dropdown-menu  dropdown-menu-end p-3">
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">{{$t('Accepted')}}</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">{{$t('Rejected')}}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <a href="javascript:void(0);"
                                class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                data-bs-toggle="dropdown">
                                {{$t('SortBy:Last7Days')}}
                            </a>
                            <ul class="dropdown-menu  dropdown-menu-end p-3">
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
                        <overtime-table></overtime-table>
                    </div>
                </div>
            </div>
            <!-- /Performance Indicator list -->

        </div>

        <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
            <p class="mb-0">2014 - 2025 &copy; AronHR.</p>
            <p>{{$t('designed')}} &amp; {{$t('developedBy')}} <a href="javascript:void(0);" class="text-primary">{{$t('dreams')}}</a></p>
        </div>

    </div>
    <!-- /Page Wrapper -->

    <overtime-modal ref="overTimeModalRef"></overtime-modal>
</template>