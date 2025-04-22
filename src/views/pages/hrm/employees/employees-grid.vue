<template>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content">
      <!-- Breadcrumb -->
      <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div class="my-auto mb-2">
          <h2 class="mb-1">{{$t('Employee')}}</h2>
          <nav>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/dashboard/"><i class="ti ti-smart-home"></i></router-link>
              </li>
              <li class="breadcrumb-item"></li>
              <li class="breadcrumb-item active" aria-current="page">{{$t('EmployeeGrid')}}</li>
            </ol>
          </nav>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="me-2 mb-2">
            <div class="d-flex align-items-center border bg-white rounded p-1 me-2">
              <router-link to="/employee/employee-list" class="btn btn-icon btn-sm me-1"><i
                  class="ti ti-list-tree"></i></router-link>
              <router-link to="/employee/employee-grid" class="btn btn-icon btn-sm active bg-primary text-white"><i
                  class="ti ti-layout-grid"></i></router-link>
            </div>
          </div>
          <div class="me-2 mb-2">
            <div class="dropdown">
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown">
                <i class="ti ti-file-export me-1"></i>{{$t('dashboard.export')}}
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                      class="ti ti-file-type-pdf me-1"></i>{{$t('dashboard.exportPDF')}}</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                      class="ti ti-file-type-xls me-1"></i>{{$t('dashboard.exportEXCEL')}}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="mb-2">
            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_employee"
              class="btn btn-primary d-flex align-items-center"><i class="ti ti-circle-plus me-2"></i>{{$t('AddEmployee')}}</a>
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

      <div class="row">
        <!-- Total Plans -->
        <div class="col-lg-3 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-body d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center overflow-hidden">
                <div>
                  <span class="avatar avatar-lg bg-dark rounded-circle"><i class="ti ti-users"></i></span>
                </div>
                <div class="ms-2 overflow-hidden">
                  <p class="fs-12 fw-medium mb-1 text-truncate">{{$t('TotalEmployee')}}</p>
                  <h4>1007</h4>
                </div>
              </div>
              <div>
                <span class="badge badge-soft-purple badge-sm fw-normal">
                  <i class="ti ti-arrow-wave-right-down"></i>
                  +19.01%
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- /Total Plans -->

        <!-- Total Plans -->
        <div class="col-lg-3 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-body d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center overflow-hidden">
                <div>
                  <span class="avatar avatar-lg bg-success rounded-circle"><i class="ti ti-user-share"></i></span>
                </div>
                <div class="ms-2 overflow-hidden">
                  <p class="fs-12 fw-medium mb-1 text-truncate">{{$t('Active')}}</p>
                  <h4>1007</h4>
                </div>
              </div>
              <div>
                <span class="badge badge-soft-primary badge-sm fw-normal">
                  <i class="ti ti-arrow-wave-right-down"></i>
                  +19.01%
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- /Total Plans -->

        <!-- Inactive Plans -->
        <div class="col-lg-3 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-body d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center overflow-hidden">
                <div>
                  <span class="avatar avatar-lg bg-danger rounded-circle"><i class="ti ti-user-pause"></i></span>
                </div>
                <div class="ms-2 overflow-hidden">
                  <p class="fs-12 fw-medium mb-1 text-truncate">{{$t('Inactive')}}</p>
                  <h4>1007</h4>
                </div>
              </div>
              <div>
                <span class="badge badge-soft-dark badge-sm fw-normal">
                  <i class="ti ti-arrow-wave-right-down"></i>
                  +19.01%
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- /Inactive Companies -->

        <!-- No of Plans  -->
        <div class="col-lg-3 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-body d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center overflow-hidden">
                <div>
                  <span class="avatar avatar-lg bg-info rounded-circle"><i class="ti ti-user-plus"></i></span>
                </div>
                <div class="ms-2 overflow-hidden">
                  <p class="fs-12 fw-medium mb-1 text-truncate">{{$t('NewJoiners')}}</p>
                  <h4>67</h4>
                </div>
              </div>
              <div>
                <span class="badge badge-soft-secondary badge-sm fw-normal">
                  <i class="ti ti-arrow-wave-right-down"></i>
                  +19.01%
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- /No of Plans -->
      </div>
      <div class="card">
        <div class="card-body p-3">
          <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <h5>{{$t('EmployeesGrid')}}</h5>
            <div class="d-flex align-items-center flex-wrap row-gap-3">
              <div class="dropdown me-3">
                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                  data-bs-toggle="dropdown">
                  {{$t('Designation')}}
                </a>
                <ul class="dropdown-menu dropdown-menu-end p-3">
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">{{$t('finance')}}</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">{{$t('Developer')}}</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">{{$t('executive')}}</a>
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
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">{{$t('Last7Days')}}</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">{{$t('Ascending')}}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Clients Grid -->
      <div class="row">
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <div class="form-check form-check-md">
                  <input class="form-check-input" type="checkbox" />
                </div>
                <div>
                  <router-link to="/employee/employee-details"
                    class="avatar avatar-xl avatar-rounded online border p-1 border-primary rounded-circle">
                    <img src="@/assets/img/users/user-32.jpg" class="img-fluid h-auto w-auto" alt="img" />
                  </router-link>
                </div>
                <div class="dropdown">
                  <button class="btn btn-icon btn-sm rounded-circle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="ti ti-dots-vertical"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#edit_employee">
                        <i class="ti ti-edit me-1"></i>{{$t('Edit')}}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#delete_modal"><i class="ti ti-trash me-1"></i>{{$t('Delete')}}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="text-center mb-3">
                <h6 class="mb-1">
                  <router-link to="/employee/employee-details">Anthony Lewis</router-link>
                </h6>
                <span class="badge bg-pink-transparent fs-10 fw-medium">{{$T('SoftwareDeveloper')}}</span>
              </div>
              <div class="row text-center">
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Projects')}}</span>
                    <h6 class="fw-medium">20</h6>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Done')}}</span>
                    <h6 class="fw-medium">13</h6>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Progress')}}</span>
                    <h6 class="fw-medium">7</h6>
                  </div>
                </div>
              </div>
              <p class="mb-2 text-center">
                {{$t('Productivity')}} : <span class="text-purple"> 65%</span>
              </p>
              <div class="progress progress-xs mb-2">
                <div class="progress-bar bg-purple" role="progressbar" style="width: 65%"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <div class="form-check form-check-md">
                  <input class="form-check-input" type="checkbox" />
                </div>
                <div>
                  <router-link to="/employee/employee-details"
                    class="avatar avatar-xl avatar-rounded online border p-1 border-primary rounded-circle">
                    <img src="@/assets/img/users/user-09.jpg" class="img-fluid h-auto w-auto" alt="img" />
                  </router-link>
                </div>
                <div class="dropdown">
                  <button class="btn btn-icon btn-sm rounded-circle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="ti ti-dots-vertical"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#edit_employee">
                        <i class="ti ti-edit me-1"></i>{{$t('Edit')}}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#delete_modal"><i class="ti ti-trash me-1"></i>{{$t('Delete')}}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="text-center mb-3">
                <h6 class="mb-1">
                  <router-link to="/employee/employee-details">Brian Villalobos</router-link>
                </h6>
                <span class="badge badge-purple-transparent fs-10 fw-medium">{{$t('Developer')}}</span>
              </div>
              <div class="row text-center">
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Projects')}}</span>
                    <h6 class="fw-medium">30</h6>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Done')}}</span>
                    <h6 class="fw-medium">10</h6>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Progress')}}</span>
                    <h6 class="fw-medium">20</h6>
                  </div>
                </div>
              </div>
              <p class="mb-2 text-center">
                {{$t('Productivity')}} : <span class="text-warning"> 30%</span>
              </p>
              <div class="progress progress-xs mb-2">
                <div class="progress-bar bg-warning" role="progressbar" style="width: 30%"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <div class="form-check form-check-md">
                  <input class="form-check-input" type="checkbox" />
                </div>
                <div>
                  <router-link to="/employee/employee-details"
                    class="avatar avatar-xl avatar-rounded online border p-1 border-primary rounded-circle">
                    <img src="@/assets/img/users/user-01.jpg" class="img-fluid h-auto w-auto" alt="img" />
                  </router-link>
                </div>
                <div class="dropdown">
                  <button class="btn btn-icon btn-sm rounded-circle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="ti ti-dots-vertical"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#edit_employee">
                        <i class="ti ti-edit me-1"></i>{{$t('Edit')}}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#delete_modal"><i class="ti ti-trash me-1"></i>{{$t('Delete')}}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="text-center mb-3">
                <h6 class="mb-1">
                  <router-link to="/employee/employee-details">Harvey Smith</router-link>
                </h6>
                <span class="badge badge-purple-transparent fs-10 fw-medium">{{$t('Developer')}}</span>
              </div>
              <div class="row text-center">
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Projects')}}</span>
                    <h6 class="fw-medium">25</h6>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Done')}}</span>
                    <h6 class="fw-medium">7</h6>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Progress')}}</span>
                    <h6 class="fw-medium">18</h6>
                  </div>
                </div>
              </div>
              <p class="mb-2 text-center">
                {{$t('Productivity')}} : <span class="text-danger"> 20%</span>
              </p>
              <div class="progress progress-xs mb-2">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 20%"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <div class="form-check form-check-md">
                  <input class="form-check-input" type="checkbox" />
                </div>
                <div>
                  <router-link to="/employee/employee-details"
                    class="avatar avatar-xl avatar-rounded online border p-1 border-primary rounded-circle">
                    <img src="@/assets/img/users/user-33.jpg" class="img-fluid h-auto w-auto" alt="img" />
                  </router-link>
                </div>
                <div class="dropdown">
                  <button class="btn btn-icon btn-sm rounded-circle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="ti ti-dots-vertical"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#edit_employee">
                        <i class="ti ti-edit me-1"></i>{{$t('Edit')}}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#delete_modal"><i class="ti ti-trash me-1"></i>{{$t('Delete')}}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="text-center mb-3">
                <h6 class="mb-1">
                  <router-link to="/employee/employee-details">Stephan Peralt</router-link>
                </h6>
                <span class="badge badge-dark-transparent fs-10 fw-medium">{{$t('SoftwareDeveloper')}}</span>
              </div>
              <div class="row text-center">
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Projects')}}</span>
                    <h6 class="fw-medium">15</h6>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Done')}}</span>
                    <h6 class="fw-medium">13</h6>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Progress')}}</span>
                    <h6 class="fw-medium">2</h6>
                  </div>
                </div>
              </div>
              <p class="mb-2 text-center">
                {{$t('Productivity')}} : <span class="text-success"> 90%</span>
              </p>
              <div class="progress progress-xs mb-2">
                <div class="progress-bar bg-success" role="progressbar" style="width: 90%"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <div class="form-check form-check-md">
                  <input class="form-check-input" type="checkbox" />
                </div>
                <div>
                  <router-link to="/employee/employee-details"
                    class="avatar avatar-xl avatar-rounded online border p-1 border-primary rounded-circle">
                    <img src="@/assets/img/users/user-34.jpg" class="img-fluid h-auto w-auto" alt="img" />
                  </router-link>
                </div>
                <div class="dropdown">
                  <button class="btn btn-icon btn-sm rounded-circle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="ti ti-dots-vertical"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#edit_employee">
                        <i class="ti ti-edit me-1"></i>{{$t('Edit')}}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#delete_modal"><i class="ti ti-trash me-1"></i>{{$t('Delete')}}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="text-center mb-3">
                <h6 class="mb-1">
                  <router-link to="/employee/employee-details">Doglas Martini</router-link>
                </h6>
                <span class="badge badge-secondary-transparent fs-10 fw-medium">{{$t('FullStackDeveloper')}}</span>
              </div>
              <div class="row text-center">
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Projects')}}</span>
                    <h6 class="fw-medium">15</h6>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Done')}}</span>
                    <h6 class="fw-medium">2</h6>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Progress')}}</span>
                    <h6 class="fw-medium">13</h6>
                  </div>
                </div>
              </div>
              <p class="mb-2 text-center">
                {{$t('Productivity')}} : <span class="text-danger"> 10%</span>
              </p>
              <div class="progress progress-xs mb-2">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 10%"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <div class="form-check form-check-md">
                  <input class="form-check-input" type="checkbox" />
                </div>
                <div>
                  <router-link to="/employee/employee-details"
                    class="avatar avatar-xl avatar-rounded online border p-1 border-primary rounded-circle">
                    <img src="@/assets/img/users/user-02.jpg" class="img-fluid h-auto w-auto" alt="img" />
                  </router-link>
                </div>
                <div class="dropdown">
                  <button class="btn btn-icon btn-sm rounded-circle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="ti ti-dots-vertical"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#edit_employee">
                        <i class="ti ti-edit me-1"></i>{{$t('Edit')}}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#delete_modal"><i class="ti ti-trash me-1"></i>{{$t('Delete')}}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="text-center mb-3">
                <h6 class="mb-1">
                  <router-link to="/employee/employee-details">Linda Ray</router-link>
                </h6>
                <span class="badge bg-pink-transparent fs-10 fw-medium">{{$t('SoftwareDeveloper')}}</span>
              </div>
              <div class="row text-center">
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Projects')}}</span>
                    <h6 class="fw-medium">20</h6>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Done')}}</span>
                    <h6 class="fw-medium">10</h6>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Progress')}}</span>
                    <h6 class="fw-medium">10</h6>
                  </div>
                </div>
              </div>
              <p class="mb-2 text-center">
                {{$t('Productivity')}} : <span class="text-purple"> 50%</span>
              </p>
              <div class="progress progress-xs mb-2">
                <div class="progress-bar bg-purple" role="progressbar" style="width: 50%"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <div class="form-check form-check-md">
                  <input class="form-check-input" type="checkbox" />
                </div>
                <div>
                  <router-link to="/employee/employee-details"
                    class="avatar avatar-xl avatar-rounded online border p-1 border-primary rounded-circle">
                    <img src="@/assets/img/users/user-35.jpg" class="img-fluid h-auto w-auto" alt="img" />
                  </router-link>
                </div>
                <div class="dropdown">
                  <button class="btn btn-icon btn-sm rounded-circle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="ti ti-dots-vertical"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#edit_employee">
                        <i class="ti ti-edit me-1"></i>{{$t('Edit')}}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#delete_modal"><i class="ti ti-trash me-1"></i>{{$t('Delete')}}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="text-center mb-3">
                <h6 class="mb-1">
                  <router-link to="/employee/employee-details">Elliot Murray</router-link>
                </h6>
                <span class="badge badge-purple-transparent fs-10 fw-medium">{{$t('Developer')}}</span>
              </div>
              <div class="row text-center">
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Projects')}}</span>
                    <h6 class="fw-medium">40</h6>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Done')}}</span>
                    <h6 class="fw-medium">35</h6>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Progress')}}</span>
                    <h6 class="fw-medium">5</h6>
                  </div>
                </div>
              </div>
              <p class="mb-2 text-center">
                {{$t('Productivity')}} : <span class="text-success"> 93%</span>
              </p>
              <div class="progress progress-xs mb-2">
                <div class="progress-bar bg-success" role="progressbar" style="width: 93%"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <div class="form-check form-check-md">
                  <input class="form-check-input" type="checkbox" />
                </div>
                <div>
                  <router-link to="/employee/employee-details"
                    class="avatar avatar-xl avatar-rounded online border p-1 border-primary rounded-circle">
                    <img src="@/assets/img/users/user-36.jpg" class="img-fluid h-auto w-auto" alt="img" />
                  </router-link>
                </div>
                <div class="dropdown">
                  <button class="btn btn-icon btn-sm rounded-circle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="ti ti-dots-vertical"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#edit_employee">
                        <i class="ti ti-edit me-1"></i>{{$t('Edit')}}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#delete_modal"><i class="ti ti-trash me-1"></i>{{$t('Delete')}}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="text-center mb-3">
                <h6 class="mb-1">
                  <router-link to="/employee/employee-details">Rebecca Smtih</router-link>
                </h6>
                <span class="badge badge-soft-skyblue fs-10 fw-medium">{{$t('Tester')}}</span>
              </div>
              <div class="row text-center">
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Projects')}}</span>
                    <h6 class="fw-medium">30</h6>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Done')}}</span>
                    <h6 class="fw-medium">22</h6>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Progress')}}</span>
                    <h6 class="fw-medium">8</h6>
                  </div>
                </div>
              </div>
              <p class="mb-2 text-center">
                {{$t('Productivity')}} : <span class="text-pink"> 80%</span>
              </p>
              <div class="progress progress-xs mb-2">
                <div class="progress-bar bg-pink" role="progressbar" style="width: 80%"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <div class="form-check form-check-md">
                  <input class="form-check-input" type="checkbox" />
                </div>
                <div>
                  <router-link to="/employee/employee-details"
                    class="avatar avatar-xl avatar-rounded online border p-1 border-primary rounded-circle">
                    <img src="@/assets/img/users/user-37.jpg" class="img-fluid h-auto w-auto" alt="img" />
                  </router-link>
                </div>
                <div class="dropdown">
                  <button class="btn btn-icon btn-sm rounded-circle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="ti ti-dots-vertical"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#edit_employee">
                        <i class="ti ti-edit me-1"></i>{{$t('Edit')}}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#delete_modal"><i class="ti ti-trash me-1"></i>{{$t('Delete')}}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="text-center mb-3">
                <h6 class="mb-1">
                  <router-link to="/employee/employee-details">Connie Waters</router-link>
                </h6>
                <span class="badge bg-pink-transparent fs-10 fw-medium">{{$t('SoftwareDeveloper')}}</span>
              </div>
              <div class="row text-center">
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Projects')}}</span>
                    <h6 class="fw-medium">25</h6>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Done')}}</span>
                    <h6 class="fw-medium">11</h6>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Progress')}}</span>
                    <h6 class="fw-medium">14</h6>
                  </div>
                </div>
              </div>
              <p class="mb-2 text-center">
                {{$t('Productivity')}} : <span class="text-warning"> 35%</span>
              </p>
              <div class="progress progress-xs mb-2">
                <div class="progress-bar bg-warning" role="progressbar" style="width: 35%"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <div class="form-check form-check-md">
                  <input class="form-check-input" type="checkbox" />
                </div>
                <div>
                  <router-link to="/employee/employee-details"
                    class="avatar avatar-xl avatar-rounded online border p-1 border-primary rounded-circle">
                    <img src="@/assets/img/users/user-38.jpg" class="img-fluid h-auto w-auto" alt="img" />
                  </router-link>
                </div>
                <div class="dropdown">
                  <button class="btn btn-icon btn-sm rounded-circle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="ti ti-dots-vertical"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#edit_employee">
                        <i class="ti ti-edit me-1"></i>{{$t('Edit')}}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#delete_modal"><i class="ti ti-trash me-1"></i>{{$t('Delete')}}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="text-center mb-3">
                <h6 class="mb-1">
                  <router-link to="/employee/employee-details">Lori Broaddus</router-link>
                </h6>
                <span class="badge badge-secondary-transparent fs-10 fw-medium">{{$t('FullStackDeveloper')}}</span>
              </div>
              <div class="row text-center">
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Projects')}}</span>
                    <h6 class="fw-medium">40</h6>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Done')}}</span>
                    <h6 class="fw-medium">27</h6>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Progress')}}</span>
                    <h6 class="fw-medium">16</h6>
                  </div>
                </div>
              </div>
              <p class="mb-2 text-center">
               {{$t('Productivity')}} : <span class="text-pink"> 75%</span>
              </p>
              <div class="progress progress-xs mb-2">
                <div class="progress-bar bg-pink" role="progressbar" style="width: 75%"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <div class="form-check form-check-md">
                  <input class="form-check-input" type="checkbox" />
                </div>
                <div>
                  <router-link to="/employee/employee-details"
                    class="avatar avatar-xl avatar-rounded online border p-1 border-primary rounded-circle">
                    <img src="@/assets/img/users/user-30.jpg" class="img-fluid h-auto w-auto" alt="img" />
                  </router-link>
                </div>
                <div class="dropdown">
                  <button class="btn btn-icon btn-sm rounded-circle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="ti ti-dots-vertical"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#edit_employee">
                        <i class="ti ti-edit me-1"></i>{{$t('Edit')}}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#delete_modal"><i class="ti ti-trash me-1"></i>{{$t('Delete')}}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="text-center mb-3">
                <h6 class="mb-1">
                  <router-link to="/employee/employee-details">Trent Frazier</router-link>
                </h6>
                <span class="badge bg-pink-transparent fs-10 fw-medium">{{$t('SoftwareDeveloper')}}</span>
              </div>
              <div class="row text-center">
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Projects')}}</span>
                    <h6 class="fw-medium">30</h6>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Done')}}</span>
                    <h6 class="fw-medium">17</h6>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Progress')}}</span>
                    <h6 class="fw-medium">13</h6>
                  </div>
                </div>
              </div>
              <p class="mb-2 text-center">
                {{$t('Productivity')}} : <span class="text-purple"> 60%</span>
              </p>
              <div class="progress progress-xs mb-2">
                <div class="progress-bar bg-purple" role="progressbar" style="width: 60%"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <div class="form-check form-check-md">
                  <input class="form-check-input" type="checkbox" />
                </div>
                <div>
                  <router-link to="/employee/employee-details"
                    class="avatar avatar-xl avatar-rounded online border p-1 border-primary rounded-circle">
                    <img src="@/assets/img/users/user-31.jpg" class="img-fluid h-auto w-auto" alt="img" />
                  </router-link>
                </div>
                <div class="dropdown">
                  <button class="btn btn-icon btn-sm rounded-circle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="ti ti-dots-vertical"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#edit_employee">
                        <i class="ti ti-edit me-1"></i>{{$t('Edit')}}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#delete_modal"><i class="ti ti-trash me-1"></i>{{$t('Delete')}}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="text-center mb-3">
                <h6 class="mb-1">
                  <router-link to="/employee/employee-details">Norene Valle</router-link>
                </h6>
                <span class="badge bg-danger-transparent fs-10 fw-medium">{{$t('Trainee')}}</span>
              </div>
              <div class="row text-center">
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Projects')}}</span>
                    <h6 class="fw-medium">10</h6>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Done')}}</span>
                    <h6 class="fw-medium">1</h6>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <span class="fs-12">{{$t('Progress')}}</span>
                    <h6 class="fw-medium">9</h6>
                  </div>
                </div>
              </div>
              <p class="mb-2 text-center">
                {{$t('Productivity')}} : <span class="text-danger"> 10%</span>
              </p>
              <div class="progress progress-xs mb-2">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 10%"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="text-center mb-4">
            <a href="javascript:void(0);" class="btn btn-primary"><i class="ti ti-loader-3 me-1"></i>{{$t('LoadMore')}}</a>
          </div>
        </div>
      </div>
      <!-- /Clients Grid -->
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
  <employee-list-modal></employee-list-modal>
</template>
<script>
export default {
  data() {
    return {
      title: "Employee",
      text: "Employee",
      text1: "Employee Grid",
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
