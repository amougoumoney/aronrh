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
          <div class="head-icons ms-2">
            <a href="javascript:void(0);" class="" data-bs-toggle="tooltip" data-bs-placement="top"
              data-bs-original-title="Collapse" id="collapse-header" @click="toggleHeader">
              <i class="ti ti-chevrons-up"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="d-flex flex-wrap gy-2 justify-content-between my-4">
        <div class="payroll-btns">
          <router-link to="/payroll/payroll" class="btn btn-white border me-2">{{ $t('Additions') }}</router-link>
          <router-link to="/payroll/payroll-overtime" class="btn btn-white border me-2">{{ $t('Overtime') }}</router-link>
          <router-link to="/payroll/payroll-deduction" class="btn btn-white border">{{ $t('Deductions') }}</router-link>
        </div>
        <div class="mb-2">
          <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_payroll"
            class="btn btn-primary d-flex align-items-center"><i class="ti ti-circle-plus me-2"></i>{{ $t('AddAddition') }}</a>
        </div>
      </div>

      <!-- /Breadcrumb -->

      <!-- Payroll list -->
      <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
          <h5>{{ $t('AdditionsList') }}</h5>
          <div class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
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
                  <h6 class="fs-14 fw-medium text-gray-9">{{ record.Name }}</h6>
                </template>
                <template v-if="column.key === 'action'">
                  <div class="action-icon d-inline-flex">
                    <a href="javascript:void(0);" class="me-2" data-bs-toggle="modal" data-bs-target="#edit_payroll"><i
                        class="ti ti-edit"></i></a>
                    <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                        class="ti ti-trash"></i></a>
                  </div>
                </template>
              </template>
            </a-table>
          </div>
        </div>
      </div>
      <!-- /Payroll list -->
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
  <payroll-modal></payroll-modal>
</template>
<script>
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
    title: "Category",
    dataIndex: "Category",
    key: "Category",
    sorter: {
      compare: (a, b) => {
        a = a.Category.toLowerCase();
        b = b.Category.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Default/Unit Amount",
    dataIndex: "UnitAmount",
    sorter: {
      compare: (a, b) => {
        a = a.UnitAmount.toLowerCase();
        b = b.UnitAmount.toLowerCase();
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
    Name: "Leave Balance Amount",
    Category: "Monthly Remuneration",
    UnitAmount: "$5",
  },
  {
    Name: "Arrears of Salary",
    Category: "Additional Remuneration",
    UnitAmount: "$8",
  },
  {
    Name: "Gratuity",
    Category: "Monthly Remuneration",
    UnitAmount: "$20",
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
      title: "Payroll Items",
      text: "HR",
      text1: "Payroll Items",
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
};
</script>
