<template>
  <!-- Welcome Wrap -->
  <div class="card border-0">
    <div class="card-body d-flex align-items-center justify-content-between flex-wrap pb-1">
      <div class="d-flex align-items-center mb-3">
        <span class="avatar avatar-xl flex-shrink-0">
          <img src="@/assets/img/profiles/avatar-31.jpg" class="rounded-circle" alt="img" />
        </span>
        <div class="ms-3">
          <h3 class="mb-2">
            {{ $t('welcomeBack') }}, {{ username }}
            <a href="javascript:void(0);" class="edit-icon"><i class="ti ti-edit fs-14"></i></a>
          </h3>
          <p>
            {{ $t('youHave') }}
            <span class="text-primary text-decoration-underline">21</span> {{ $t('pendingApprovals') }}
            &
            <span class="text-primary text-decoration-underline">14</span> {{ $t('leaveRequests') }}
          </p>
        </div>
      </div>


    </div>
  </div>
  <!-- /Welcome Wrap -->

  <div class="row">
    <!-- Widget Info -->
    <div class="col-xxl-8 d-flex">
      <div class="row flex-fill">
        <div class="col-md-3 d-flex">
          <div class="card flex-fill">
            <div class="card-body">
              <span class="avatar rounded-circle bg-primary mb-2">
                <i class="ti ti-calendar-share fs-16"></i>
              </span>
              <h6 class="fs-13 fw-medium text-default mb-1">{{ $t('attendanceOverview') }}</h6>
              <h3 class="mb-3">
                120/154
                <span class="fs-12 fw-medium text-success"><i class="fa-solid fa-caret-up me-1"></i>+2.1%</span>
              </h3>
              <router-link to="/attendance/attendance-employee" class="link-default">{{ $t('viewDetails')
              }}</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-3 d-flex">
          <div class="card flex-fill">
            <div class="card-body">
              <span class="avatar rounded-circle bg-secondary mb-2">
                <i class="ti ti-browser fs-16"></i>
              </span>
              <h6 class="fs-13 fw-medium text-default mb-1">{{ $t('totalNoofProjects') }}</h6>
              <h3 class="mb-3">
                90/125
                <span class="fs-12 fw-medium text-danger"><i class="fa-solid fa-caret-down me-1"></i>-2.1%</span>
              </h3>
              <router-link to="/projects/projects-list" class="link-default">{{ $t('viewAll') }}</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-3 d-flex">
          <div class="card flex-fill">
            <div class="card-body">
              <span class="avatar rounded-circle bg-info mb-2">
                <i class="ti ti-users-group fs-16"></i>
              </span>
              <h6 class="fs-13 fw-medium text-default mb-1">{{ $t('totalNoOfClients') }}</h6>
              <h3 class="mb-3">
                69/86
                <span class="fs-12 fw-medium text-danger"><i class="fa-solid fa-caret-down me-1"></i>-11.2%</span>
              </h3>
              <router-link to="/projects/clients" class="link-default">{{ $t('viewAll') }}</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-3 d-flex">
          <div class="card flex-fill">
            <div class="card-body">
              <span class="avatar rounded-circle bg-pink mb-2">
                <i class="ti ti-checklist fs-16"></i>
              </span>
              <h6 class="fs-13 fw-medium text-default mb-1">{{ $t('totalNoofTasks') }}</h6>
              <h3 class="mb-3">
                225/28
                <span class="fs-12 fw-medium text-success"><i class="fa-solid fa-caret-down me-1"></i>+11.2%</span>
              </h3>
              <router-link to="/projects/tasks" class="link-default">{{ $t('viewAll') }}</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-3 d-flex">
          <div class="card flex-fill">
            <div class="card-body">
              <span class="avatar rounded-circle bg-purple mb-2">
                <i class="ti ti-moneybag fs-16"></i>
              </span>
              <h6 class="fs-13 fw-medium text-default mb-1">{{ $t('earnings') }}</h6>
              <h3 class="mb-3">
                $21445
                <span class="fs-12 fw-medium text-success"><i class="fa-solid fa-caret-up me-1"></i>+10.2%</span>
              </h3>
              <router-link to="/sales/expenses" class="link-default">{{ $t('viewAll') }}</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-3 d-flex">
          <div class="card flex-fill">
            <div class="card-body">
              <span class="avatar rounded-circle bg-danger mb-2">
                <i class="ti ti-browser fs-16"></i>
              </span>
              <h6 class="fs-13 fw-medium text-default mb-1">{{ $t('profitThisWeek') }}</h6>
              <h3 class="mb-3">
                $5,544
                <span class="fs-12 fw-medium text-success"><i class="fa-solid fa-caret-up me-1"></i>+2.1%</span>
              </h3>
              <router-link to="/super-admin/purchase-transaction" class="link-default">{{ $t('viewAll') }}</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-3 d-flex">
          <div class="card flex-fill">
            <div class="card-body">
              <span class="avatar rounded-circle bg-success mb-2">
                <i class="ti ti-users-group fs-16"></i>
              </span>
              <h6 class="fs-13 fw-medium text-default mb-1">{{ $t('jobApplicants') }}</h6>
              <h3 class="mb-3">
                98
                <span class="fs-12 fw-medium text-success"><i class="fa-solid fa-caret-up me-1"></i>+2.1%</span>
              </h3>
              <router-link to="/recuritment/job-list" class="link-default">{{ $t('viewAll') }}</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-3 d-flex">
          <div class="card flex-fill">
            <div class="card-body">
              <span class="avatar rounded-circle bg-dark mb-2">
                <i class="ti ti-user-star fs-16"></i>
              </span>
              <h6 class="fs-13 fw-medium text-default mb-1">{{ $t('newHire') }}</h6>
              <h3 class="mb-3">
                45/48
                <span class="fs-12 fw-medium text-danger"><i class="fa-solid fa-caret-down me-1"></i>-11.2%</span>
              </h3>
              <router-link to="/recuritment/candidates" class="link-default">{{ $t('viewAll') }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Widget Info -->

    <!-- Employees By Department -->
    <div class="col-xxl-4 d-flex">
      <div class="card flex-fill">
        <div class="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
          <h5 class="mb-2">{{ $t('employeesByDepartment') }}</h5>
          <div class="dropdown mb-2">
            <a href="javascript:void(0);" class="btn btn-white border btn-sm d-inline-flex align-items-center"
              data-bs-toggle="dropdown">
              <i class="ti ti-calendar me-1"></i>{{ $t('thisWeek') }}
            </a>
            <ul class="dropdown-menu dropdown-menu-end p-3">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('thisMonth') }}</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('thisWeek') }}</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('lastWeek') }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-body">
          <div id="emp-department">
            <apexchart type="bar" height="220" :options="empDepartment.department" :series="empDepartment.series">
            </apexchart>
          </div>
          <p class="fs-13">
            <i class="ti ti-circle-filled me-2 fs-8 text-primary"></i>
            {{ $t('noOfEmployeesIncreasedBy') }} <span class="text-success fw-bold">+20%</span> {{ $t('fromLastWeek') }}
          </p>
        </div>
      </div>
    </div>
    <!-- /Employees By Department -->
  </div>
</template>
<script>
import { empDepartment } from "./data";

export default {
  data() {
    return {
      empDepartment: empDepartment,
      username: '',
    };
  },
  created() {
    this.getUserDetails(); // Call getUserDetails when component is created
  },
  methods: {
    getUserDetails() {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        try {
          const userData = JSON.parse(userStr);
          this.username = userData.name || 'User';
        } catch (e) {
          this.username = 'User';
        }
      } else {
        this.username = 'User';
      }
    },
  },
};
</script>
