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
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                      class="ti ti-file-type-pdf me-1"></i>{{ $t('dashboard.exportPDF') }}</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                      class="ti ti-file-type-xls me-1"></i>{{ $t('dashboard.exportEXCEL') }}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="mb-2">
            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#new-employee-salary"
              class="btn btn-primary d-flex align-items-center"><i class="ti ti-circle-plus me-2"></i>{{ $t('AddSalary') }}</a>
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

      <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
          <h5>{{ $t('EmployeeSalaryList') }}</h5>
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
                {{ $t('Designation') }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('finance') }}</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('Developer') }}</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('executive') }}</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('manager') }}</a>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown">
                {{$t('SortBy:Last7Days')}}
              </a>
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
            <a-table class="table datatable thead-light" :columns="columns" :data-source="data"
              :row-selection="rowSelection">
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'Name'">
                  <div class="d-flex align-items-center file-name-icon">
                    <a href="javascript:void(0);" class="avatar avatar-md">
                      <img :src="`@/assets/img/users/${record.Image}`" class="img-fluid rounded-circle" alt="img" />
                    </a>
                    <div class="ms-2">
                      <h6 class="fw-medium">
                        <a href="javascript:void(0);">{{ record.Name }}</a>
                      </h6>
                      <span class="d-block mt-1">{{ record.Work }}</span>
                    </div>
                  </div>
                </template>
                <template v-if="column.key === 'Designation'">
                  <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown">
                      <span
                        class="rounded-circle bg-transparent-success d-flex justify-content-center align-items-center me-2"></span>
                      {{ record.Designation }}
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end p-3">
                      <li>
                        <a href="javascript:void(0);"
                          class="dropdown-item rounded-1 d-flex justify-content-start align-items-center"><span
                            class="rounded-circle bg-transparent-success d-flex justify-content-center align-items-center me-2"></span>{{ $t('finance') }}</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);"
                          class="dropdown-item rounded-1 d-flex justify-content-start align-items-center"><span
                            class="rounded-circle bg-transparent-skyblue d-flex justify-content-center align-items-center me-2"></span>{{ $t('Developer') }}
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);"
                          class="dropdown-item rounded-1 d-flex justify-content-start align-items-center"><span
                            class="rounded-circle bg-transparent-skyblue d-flex justify-content-center align-items-center me-2"></span>{{ $t('executive') }}
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);"
                          class="dropdown-item rounded-1 d-flex justify-content-start align-items-center"><span
                            class="rounded-circle bg-transparent-skyblue d-flex justify-content-center align-items-center me-2"></span>{{ $t('manager') }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </template>

                <template v-if="column.key === 'Payslip'">
                  <div>
                    <span class="badge badge-dark badge-md">{{ record.Payslip }}</span>
                  </div>
                </template>
                <template v-if="column.key === 'action'">
                  <div class="action-icon d-inline-flex">
                    <a href="javascript:void(0);" class="me-2" data-bs-toggle="modal"
                      data-bs-target="#edit-employee-salary"><i class="ti ti-edit"></i></a>
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
        {{$t('designed')}}  &amp; {{$t('developedBy')}}
        <a href="javascript:void(0);" class="text-primary">{{$t('dreams')}}</a>
      </p>
    </div>
  </div>
  <!-- /Page Wrapper -->
  <employee-salary-modal></employee-salary-modal>
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
    title: "Emp ID",
    dataIndex: "EmpID",
    sorter: {
      compare: (a, b) => {
        a = a.EmpID.toLowerCase();
        b = b.EmpID.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
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
    title: "Designation",
    dataIndex: "Designation",
    key: "Designation",
    sorter: {
      compare: (a, b) => {
        a = a.Designation.toLowerCase();
        b = b.Designation.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Joining Date",
    dataIndex: "JoiningDate",
    key: "JoiningDate",
    sorter: {
      compare: (a, b) => {
        a = a.JoiningDate.toLowerCase();
        b = b.JoiningDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Payslip",
    dataIndex: "Payslip",
    key: "Payslip",
    sorter: {
      compare: (a, b) => {
        a = a.Payslip.toLowerCase();
        b = b.Payslip.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "",
    key: "action",
    sorter: false,
  },
];
const data = [
  {
    EmpID: "Emp-001",
    Name: "Anthony Lewis",
    Work: "Finance",
    Email: "anthony@example.com",
    Phone: "(123) 4567 890",
    Designation: "Finance",
    JoiningDate: "12 Sep 2024",
    Salary: "$40000",
    Payslip: "Generate Slip",
    Image: "user-32.jpg",
  },
  {
    EmpID: "Emp-002",
    Name: "Brian Villalobos",
    Work: "Developer",
    Email: "brian@example.com",
    Phone: "(179) 7382 829",
    Designation: "Developer",
    JoiningDate: "24 Oct 2024",
    Salary: "$35000",
    Payslip: "Generate Slip",
    Image: "user-09.jpg",
  },
  {
    EmpID: "Emp-003",
    Name: "Harvey Smith",
    Work: "Developer",
    Email: "harvey@example.com",
    Phone: "(184) 2719 738",
    Designation: "Executive",
    JoiningDate: "18 Feb 2024",
    Salary: "$20000",
    Payslip: "Generate Slip",
    Image: "user-01.jpg",
  },
  {
    EmpID: "Emp-004",
    Name: "Stephan Peralt",
    Work: "Executive Officer",
    Email: "peral@example.com",
    Phone: "(193) 7839 748",
    Designation: "Executive ",
    JoiningDate: "17 Oct 2024",
    Salary: "$$22000",
    Payslip: "Generate Slip",
    Image: "user-33.jpg",
  },
  {
    EmpID: "Emp-005",
    Name: "Doglas Martini",
    Work: "Manager",
    Email: "martniwr@example.com",
    Phone: "(183) 9302 890",
    Designation: "Manager",
    JoiningDate: "20 Jul 2024",
    Salary: "$25000",
    Payslip: "Generate Slip",
    Image: "user-34.jpg",
  },
  {
    EmpID: "Emp-006",
    Name: "Linda Ray",
    Work: "Finance",
    Email: "ray456@example.com",
    Phone: "(120) 3728 039",
    Designation: "Finance",
    JoiningDate: "10 Apr 2024",
    Salary: "$30000",
    Payslip: "Generate Slip",
    Image: "user-02.jpg",
  },
  {
    EmpID: "Emp-007",
    Name: "Elliot Murray",
    Work: "Developer",
    Email: "murray@example.com",
    Phone: "(102) 8480 832",
    Designation: "Finance",
    JoiningDate: "29 Aug 2024",
    Salary: "$35000",
    Payslip: "Generate Slip",
    Image: "user-35.jpg",
  },
  {
    EmpID: "Emp-008",
    Name: "Rebecca Smtih",
    Work: "Executive",
    Email: "smtih@example.com",
    Phone: "(162) 8920 713",
    Designation: "Executive",
    JoiningDate: "22 Feb 2024",
    Salary: "$45000",
    Payslip: "Generate Slip",
    Image: "user-36.jpg",
  },
  {
    EmpID: "Emp-009",
    Name: "Connie Waters",
    Work: "Developer",
    Email: "connie@example.com",
    Phone: "(189) 0920 723",
    Designation: "Developer",
    JoiningDate: "03 Nov 2024",
    Salary: "$50000",
    Payslip: "Generate Slip",
    Image: "user-37.jpg",
  },
  {
    EmpID: "Emp-010",
    Name: "Lori Broaddus",
    Work: "Finance",
    Email: "broaddus@example.com",
    Phone: "(168) 8392 823",
    Designation: "Finance ",
    JoiningDate: "17 Dec 2024",
    Salary: "$25000",
    Payslip: "Generate Slip",
    Image: "user-38.jpg",
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
      data,
      columns,
      rowSelection,
      title: "Employee Salary",
      text: "HR",
      text1: "Employee Salary",
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
