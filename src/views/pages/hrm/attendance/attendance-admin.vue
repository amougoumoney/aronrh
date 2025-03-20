<script>
import { ref } from "vue";
const currentDate = ref(new Date());

export default {
    data() {
        return {
            title: "Attendance Admin",
            text: "Employee",
            text1: "Attendance Admin",
            startdate: currentDate,
            dateFormat: "dd-MM-yyyy",
        }
    },
    methods: {
        toggleHeader() {
            document.getElementById("collapse-header").classList.toggle("active");
            document.body.classList.toggle("header-collapse");
        },
    },
}
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
                <div class="d-flex my-xl-auto right-content align-items-center flex-wrap ">
                    <div class="me-2 mb-2">
                        <div class="d-flex align-items-center border bg-white rounded p-1 me-2">
                            <router-link to="/attendance/attendance-employee" class="btn btn-icon btn-sm me-1"><i
                                    class="ti ti-brand-days-counter"></i></router-link>
                            <router-link to="/attendance/attendance-admin"
                                class="btn btn-icon btn-sm active bg-primary text-white"><i
                                    class="ti ti-calendar-event"></i></router-link>
                        </div>
                    </div>
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
                                            class="ti ti-file-type-pdf me-1"></i>{{$t('dashboard.exportPDF')}}</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                            class="ti ti-file-type-xls me-1"></i>{{$t('dashboard.exportEXCEL')}} </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="mb-2">
                        <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center"
                            data-bs-target="#attendance_report" data-bs-toggle="modal"><i
                                class="ti ti-file-analytics me-2"></i>{{$t('Report')}}</a>
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

            <div class="card border-0">
                <div class="card-body">
                    <div class="row align-items-center mb-4">
                        <div class="col-md-5">
                            <div class="mb-3 mb-md-0">
                                <h4 class="mb-1">{{$t('AttendanceDetailsToday')}}</h4>
                                <p>{{$t('Datafromthe800+totalnoofemployees')}}</p>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="d-flex align-items-center justify-content-md-end">
                                <h6>{{$t('TotalAbsentiestoday')}}</h6>
                                <div class="avatar-list-stacked avatar-group-sm ms-4">
                                    <span class="avatar avatar-rounded">
                                        <img class="border border-white" src="@/assets/img/profiles/avatar-02.jpg"
                                            alt="img">
                                    </span>
                                    <span class="avatar avatar-rounded">
                                        <img class="border border-white" src="@/assets/img/profiles/avatar-03.jpg"
                                            alt="img">
                                    </span>
                                    <span class="avatar avatar-rounded">
                                        <img class="border border-white" src="@/assets/img/profiles/avatar-05.jpg"
                                            alt="img">
                                    </span>
                                    <span class="avatar avatar-rounded">
                                        <img class="border border-white" src="@/assets/img/profiles/avatar-06.jpg"
                                            alt="img">
                                    </span>
                                    <span class="avatar avatar-rounded">
                                        <img class="border border-white" src="@/assets/img/profiles/avatar-07.jpg"
                                            alt="img">
                                    </span>
                                    <a class="avatar bg-primary avatar-rounded text-fixed-white fs-12"
                                        href="javascript:void(0);">
                                        +1
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border rounded">
                        <div class="row gx-0">
                            <div class="col-md col-sm-4 border-end">
                                <div class="p-3">
                                    <span class="fw-medium mb-1 d-block">{{$t('Present')}}</span>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h5>250</h5>
                                        <span class="badge badge-success d-inline-flex align-items-center">
                                            <i class="ti ti-arrow-wave-right-down me-1"></i>
                                            +1%
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md col-sm-4 border-end">
                                <div class="p-3">
                                    <span class="fw-medium mb-1 d-block">{{$t('LateLogin')}}</span>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h5>45</h5>
                                        <span class="badge badge-danger d-inline-flex align-items-center">
                                            <i class="ti ti-arrow-wave-right-down me-1"></i>
                                            -1%
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md col-sm-4 border-end">
                                <div class="p-3">
                                    <span class="fw-medium mb-1 d-block">{{$t('Uninformed')}}</span>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h5>15</h5>
                                        <span class="badge badge-danger d-inline-flex align-items-center">
                                            <i class="ti ti-arrow-wave-right-down me-1"></i>
                                            -12%
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md col-sm-4 border-end">
                                <div class="p-3">
                                    <span class="fw-medium mb-1 d-block">{{$t('Permisson')}}</span>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h5>03</h5>
                                        <span class="badge badge-success d-inline-flex align-items-center">
                                            <i class="ti ti-arrow-wave-right-down me-1"></i>
                                            +1%
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md col-sm-4">
                                <div class="p-3">
                                    <span class="fw-medium mb-1 d-block">{{$t('Absent')}}</span>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h5>12</h5>
                                        <span class="badge badge-danger d-inline-flex align-items-center">
                                            <i class="ti ti-arrow-wave-right-down me-1"></i>
                                            -19%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                    <h5>{{$t('AdminAttendance')}}</h5>
                    <div class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                        <div class="me-3">
                            <div class="input-icon w-120 position-relative">
                                <span class="input-icon-addon">
                                    <i class="ti ti-calendar"></i>
                                </span>
                                <date-picker v-model="startdate" class="form-control datetimepicker"
                                    :placeholder="$t('dd/mm/yyyy')" :editable="true" :clearable="false"
                                    :input-format="dateFormat" />
                            </div>
                        </div>
                        <div class="dropdown me-3">
                            <a href="javascript:void(0);"
                                class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                data-bs-toggle="dropdown">
                                {{$t('Department')}}
                            </a>
                            <ul class="dropdown-menu  dropdown-menu-end p-3">
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">{{$t('finance')}}</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">
                                        {{$t('ApplicationDevelopment')}}</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">{{$t('ITManagement')}}</a>
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
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">{{$t('Present')}}</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">{{$t('Absent')}}</a>
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
                        <attendence-admin-table></attendence-admin-table>
                    </div>
                </div>
            </div>

        </div>

        <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
            <p class="mb-0">2014 - 2025 &copy; AronHR.</p>
            <p>{{$t('designed')}} &amp; {{$t('developedBy')}} <a href="javascript:void(0);" class="text-primary">{{$t('dreams')}}</a></p>
        </div>

    </div>
    <!-- /Page Wrapper -->

    <attendence-admin-modal></attendence-admin-modal>
</template>