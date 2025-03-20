<script>
import { ref } from "vue";
const currentDate = ref(new Date());

export default {
    data() {
        return {
            title: "Attendance",
            text: "Employee",
            text1: "My Attendance",
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
                            <router-link to="/attendance/attendance-admin"
                                class="btn btn-icon btn-sm active bg-primary text-white me-1"><i
                                    class="ti ti-brand-days-counter"></i></router-link>
                            <router-link to="/attendance/attendance-admin" class="btn btn-icon btn-sm"><i
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
                            data-bs-toggle="modal" data-bs-target="#attendance_report"><i
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

            <div class="row">
                <div class="col-xl-3 col-lg-4 d-flex">
                    <div class="card flex-fill">
                        <div class="card-body">
                            <div class="mb-3 text-center">
                                <h6 class="fw-medium text-gray-5 mb-2">{{$t('GoodMorning')}}, Adrian</h6>
                                <h4>{{$t('08:35AM,11Mar2025')}}</h4>
                            </div>
                            <div class="attendance-circle-progress mx-auto mb-3" data-value='65'>
                                <span class="progress-left">
                                    <span class="progress-bar border-success"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar border-success"></span>
                                </span>
                                <div class="avatar avatar-xxl avatar-rounded">
                                    <img src="@/assets/img/profiles/avatar-27.jpg" alt="Img">
                                </div>
                            </div>
                            <div class="text-center">
                                <div class="badge badge-md badge-primary mb-3">{{$t('Production')}} : 3.45 hrs</div>
                                <h6 class="fw-medium d-flex align-items-center justify-content-center mb-3">
                                    <i class="ti ti-fingerprint text-primary me-1"></i>
                                    {{$t('PunchInat10.00AM')}}
                                </h6>
                                <a href="javascript:void(0);" class="btn btn-dark w-100">{{$t('PunchOut')}}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-9 col-lg-8 d-flex">
                    <div class="row flex-fill">
                        <div class="col-xl-3 col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="border-bottom mb-2 pb-2">
                                        <span class="avatar avatar-sm bg-primary mb-2"><i
                                                class="ti ti-clock-stop"></i></span>
                                        <h2 class="mb-2">8.36 / <span class="fs-20 text-gray-5"> 9</span></h2>
                                        <p class="fw-medium text-truncate">{{$t('TotalHoursToday')}}</p>
                                    </div>
                                    <div>
                                        <p class="d-flex align-items-center fs-13">
                                            <span class="avatar avatar-xs rounded-circle bg-success flex-shrink-0 me-2">
                                                <i class="ti ti-arrow-up fs-12"></i>
                                            </span>
                                            <span>5% {{$t('thisWeek')}}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="border-bottom mb-2 pb-2">
                                        <span class="avatar avatar-sm bg-dark mb-2"><i
                                                class="ti ti-clock-up"></i></span>
                                        <h2 class="mb-2">10 / <span class="fs-20 text-gray-5"> 40</span></h2>
                                        <p class="fw-medium text-truncate">{{$t('TotalHoursWeek')}}</p>
                                    </div>
                                    <div>
                                        <p class="d-flex align-items-center fs-13">
                                            <span class="avatar avatar-xs rounded-circle bg-success flex-shrink-0 me-2">
                                                <i class="ti ti-arrow-up fs-12"></i>
                                            </span>
                                            <span>7% {{$t('lastWeek')}}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="border-bottom mb-2 pb-2">
                                        <span class="avatar avatar-sm bg-info mb-2"><i
                                                class="ti ti-calendar-up"></i></span>
                                        <h2 class="mb-2">75 / <span class="fs-20 text-gray-5"> 98</span></h2>
                                        <p class="fw-medium text-truncate">{{$t('TotalHoursMonth')}}</p>
                                    </div>
                                    <div>
                                        <p class="d-flex align-items-center fs-13 text-truncate">
                                            <span class="avatar avatar-xs rounded-circle bg-danger flex-shrink-0 me-2">
                                                <i class="ti ti-arrow-down fs-12"></i>
                                            </span>
                                            <span>8% {{$t('lastMonth')}}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="border-bottom mb-2 pb-2">
                                        <span class="avatar avatar-sm bg-pink mb-2"><i
                                                class="ti ti-calendar-star"></i></span>
                                        <h2 class="mb-2">16 / <span class="fs-20 text-gray-5"> 28</span></h2>
                                        <p class="fw-medium text-truncate">{{$t('OvertimethisMonth')}}</p>
                                    </div>
                                    <div>
                                        <p class="d-flex align-items-center fs-13 text-truncate">
                                            <span class="avatar avatar-xs rounded-circle bg-danger flex-shrink-0 me-2">
                                                <i class="ti ti-arrow-down fs-12"></i>
                                            </span>
                                            <span>6% {{$t('lastMonth')}}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-xl-3">
                                            <div class="mb-3">
                                                <p class="d-flex align-items-center mb-1"><i
                                                        class="ti ti-point-filled text-dark-transparent me-1"></i>
                                                    {{$t('TotalWorkinghours')}}</p>
                                                <h3>12h 36m</h3>
                                            </div>
                                        </div>
                                        <div class="col-xl-3">
                                            <div class="mb-3">
                                                <p class="d-flex align-items-center mb-1"><i
                                                        class="ti ti-point-filled text-success me-1"></i>{{$t('ProductiveHours')}}
                                                    </p>
                                                <h3>08h 36m</h3>
                                            </div>
                                        </div>
                                        <div class="col-xl-3">
                                            <div class="mb-3">
                                                <p class="d-flex align-items-center mb-1"><i
                                                        class="ti ti-point-filled text-warning me-1"></i>{{$t('Breakhours')}}</p>
                                                <h3>22m 15s</h3>
                                            </div>
                                        </div>
                                        <div class="col-xl-3">
                                            <div class="mb-3">
                                                <p class="d-flex align-items-center mb-1"><i
                                                        class="ti ti-point-filled text-info me-1"></i>{{$t('Overtime')}}</p>
                                                <h3>02h 15m</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="progress bg-transparent-dark mb-3" style="height: 24px;">
                                                <div class="progress-bar bg-white rounded" role="progressbar"
                                                    style="width: 18%;"></div>
                                                <div class="progress-bar bg-success rounded me-2" role="progressbar"
                                                    style="width: 18%;"></div>
                                                <div class="progress-bar bg-warning rounded me-2" role="progressbar"
                                                    style="width: 5%;"></div>
                                                <div class="progress-bar bg-success rounded me-2" role="progressbar"
                                                    style="width: 28%;"></div>
                                                <div class="progress-bar bg-warning rounded me-2" role="progressbar"
                                                    style="width: 17%;"></div>
                                                <div class="progress-bar bg-success rounded me-2" role="progressbar"
                                                    style="width: 22%;"></div>
                                                <div class="progress-bar bg-warning rounded me-2" role="progressbar"
                                                    style="width: 5%;"></div>
                                                <div class="progress-bar bg-info rounded me-2" role="progressbar"
                                                    style="width: 3%;"></div>
                                                <div class="progress-bar bg-info rounded" role="progressbar"
                                                    style="width: 2%;"></div>
                                                <div class="progress-bar bg-white rounded" role="progressbar"
                                                    style="width: 18%;"></div>
                                            </div>

                                        </div>
                                        <div class="co-md-12">
                                            <div
                                                class="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                                                <span class="fs-10">06:00</span>
                                                <span class="fs-10">07:00</span>
                                                <span class="fs-10">08:00</span>
                                                <span class="fs-10">09:00</span>
                                                <span class="fs-10">10:00</span>
                                                <span class="fs-10">11:00</span>
                                                <span class="fs-10">12:00</span>
                                                <span class="fs-10">01:00</span>
                                                <span class="fs-10">02:00</span>
                                                <span class="fs-10">03:00</span>
                                                <span class="fs-10">04:00</span>
                                                <span class="fs-10">05:00</span>
                                                <span class="fs-10">06:00</span>
                                                <span class="fs-10">07:00</span>
                                                <span class="fs-10">08:00</span>
                                                <span class="fs-10">09:00</span>
                                                <span class="fs-10">10:00</span>
                                                <span class="fs-10">11:00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                    <h5>{{$t('EmployeeAttendance')}}</h5>
                    <div class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                        <div class="me-3">
                            <div class="input-icon w-120 position-relative">
                                <span class="input-icon-addon">
                                    <i class="ti ti-calendar"></i>
                                </span>
                                <date-picker v-model="startdate" class="form-control datetimepicker"
                                    placeholder="dd/mm/yyyy" :editable="true" :clearable="false"
                                    :input-format="dateFormat" />
                            </div>
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
                        <attendence-employee-table></attendence-employee-table>
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

    <attendance-employee-modal></attendance-employee-modal>
</template>