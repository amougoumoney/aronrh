<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content">
      <!-- Breadcrumb -->
      <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <breadcrumb :title="title" :text="text" :text1="text1" />
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="me-2 mb-2">
            <div class="d-flex align-items-center border bg-white rounded p-1 me-2">
              <router-link to="/tickets/ticket" class="btn btn-icon btn-sm me-1"><i
                  class="ti ti-list-tree"></i></router-link>
              <router-link to="/tickets/tickets-grid" class="btn btn-icon btn-sm active bg-primary text-white"><i
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
            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_ticket"
              class="btn btn-primary d-flex align-items-center"><i class="ti ti-circle-plus me-2"></i>{{$t('AddNewTicket')}}</a>
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
        <div class="col-xl-3 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-6 d-flex">
                  <div class="flex-fill">
                    <div
                      class="border border-dashed border-primary rounded-circle d-inline-flex align-items-center justify-content-center p-1 mb-3">
                      <span class="avatar avatar-lg avatar-rounded bg-primary-transparent"><i
                          class="ti ti-ticket fs-20"></i></span>
                    </div>
                    <p class="fw-medium fs-12 mb-1">{{$t('NewTickets')}}</p>
                    <h4>120</h4>
                  </div>
                </div>
                <div class="col-6 text-end d-flex">
                  <div class="d-flex flex-column justify-content-between align-items-end">
                    <span class="badge bg-transparent-purple d-inline-flex align-items-center mb-3">
                      <i class="ti ti-arrow-wave-right-down me-1"></i>
                      +19.01%
                    </span>
                    <div id="total-chart">
                      <apexchart type="bar" width="50" :options="totalChart.total" :series="totalChart.series">
                      </apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-6 d-flex">
                  <div class="flex-fill">
                    <div
                      class="border border-dashed border-purple rounded-circle d-inline-flex align-items-center justify-content-center p-1 mb-3">
                      <span class="avatar avatar-lg avatar-rounded bg-transparent-purple"><i
                          class="ti ti-folder-open fs-20"></i></span>
                    </div>
                    <p class="fw-medium fs-12 mb-1">{{$t('OpenTickets')}}</p>
                    <h4>60</h4>
                  </div>
                </div>
                <div class="col-6 text-end d-flex">
                  <div class="d-flex flex-column justify-content-between align-items-end">
                    <span class="badge bg-transparent-dark text-dark d-inline-flex align-items-center mb-3">
                      <i class="ti ti-arrow-wave-right-down me-1"></i>
                      +19.01%
                    </span>
                    <div id="active-chart">
                      <apexchart type="bar" width="50" :options="activeChart.active" :series="activeChart.series">
                      </apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-6 d-flex">
                  <div class="flex-fill">
                    <div
                      class="border border-dashed border-success rounded-circle d-inline-flex align-items-center justify-content-center p-1 mb-3">
                      <span class="avatar avatar-lg avatar-rounded bg-success-transparent"><i
                          class="ti ti-checks fs-20"></i></span>
                    </div>
                    <p class="fw-medium fs-12 mb-1">{{$t('SolvedTickets')}}</p>
                    <h4>50</h4>
                  </div>
                </div>
                <div class="col-6 text-end d-flex">
                  <div class="d-flex flex-column justify-content-between align-items-end">
                    <span class="badge bg-info-transparent d-inline-flex align-items-center mb-3">
                      <i class="ti ti-arrow-wave-right-down me-1"></i>
                      +19.01%
                    </span>
                    <div id="inactive-chart">
                      <apexchart type="bar" width="50" :options="inactiveChart.inactive" :series="inactiveChart.series">
                      </apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-6 d-flex">
                  <div class="flex-fill">
                    <div
                      class="border border-dashed border-info rounded-circle d-inline-flex align-items-center justify-content-center p-1 mb-3">
                      <span class="avatar avatar-lg avatar-rounded bg-info-transparent"><i
                          class="ti ti-progress-alert fs-20"></i></span>
                    </div>
                    <p class="fw-medium fs-12 mb-1">{{$t('PendingTickets')}}</p>
                    <h4>10</h4>
                  </div>
                </div>
                <div class="col-6 text-end d-flex">
                  <div class="d-flex flex-column justify-content-between align-items-end">
                    <span class="badge bg-secondary-transparent d-inline-flex align-items-center mb-3">
                      <i class="ti ti-arrow-wave-right-down me-1"></i>
                      +19.01%
                    </span>
                    <div id="location-chart">
                      <apexchart type="bar" width="50" :options="locationChart.location" :series="locationChart.series">
                      </apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body p-3">
          <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <h5>{{$t('TicketGrid')}}</h5>
            <div class="d-flex align-items-center flex-wrap row-gap-3">
              <div class="dropdown me-2">
                <a href="javascript:void(0);"
                  class="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center"
                  data-bs-toggle="dropdown">
                  {{$t('Priority')}}
                </a>
                <ul class="dropdown-menu dropdown-menu-end p-3">
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">{{$t('Priority')}}</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">{{$t('high')}}</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">{{$t('low')}}</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">{{$t('medium')}}</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown me-2">
                <a href="javascript:void(0);"
                  class="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center"
                  data-bs-toggle="dropdown">
                  {{$t('SelectStatus')}}
                </a>
                <ul class="dropdown-menu dropdown-menu-end p-3">
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">{{$t('Open')}}</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">{{$t('OnHold')}}</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">{{$t('Reopened')}}</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown">
                <a href="javascript:void(0);"
                  class="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center"
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
        </div>
      </div>
      <div class="row">
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <div class="form-check form-check-md">
                  <input class="form-check-input" type="checkbox" />
                </div>
                <div>
                  <router-link to="/ticktet/ticket-details"
                    class="avatar avatar-xl avatar-rounded online border p-1 border-primary rounded-circle">
                    <img src="@/assets/img/users/user-49.jpg" class="img-fluid h-auto w-auto" alt="img" />
                  </router-link>
                </div>
                <div class="dropdown">
                  <button class="btn btn-icon btn-sm rounded-circle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="ti ti-dots-vertical"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <a class="dropdown-item rounded-1" href="javascript:void(0);"><i
                          class="ti ti-edit me-1"></i>{{$t('Edit')}}</a>
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
                  <router-link to="/tickets/tickets-details">{{$t('LaptopIssue')}}</router-link>
                </h6>
                <span class="badge bg-info-transparent fs-10 fw-medium">Tic - 001</span>
              </div>
              <div class="d-flex flex-column">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <span>{{$t('Category')}}</span>
                  <h6 class="fw-medium">{{$t('HardwareIssues')}}</h6>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <span>{{$t('Status')}}</span>
                  <span class="badge bg-pink-transparent d-inline-flex align-items-center fs-10 fw-medium">
                    <i class="ti ti-circle-filled fs-5 me-1"></i>{{$t('Open')}}
                  </span>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span>{{$t('Priority')}}</span>
                  <span class="badge bg-outline-secondary d-inline-flex align-items-center fs-10 fw-medium">
                    <i class="ti ti-circle-filled fs-5 me-1"></i>{{$t('low')}}
                  </span>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <div>
                  <p class="mb-1 fs-12">{{$t('AssignedTo')}}</p>
                  <div class="d-flex align-items-center">
                    <span class="avatar avatar-xs avatar-rounded me-2">
                      <img src="@/assets/img/profiles/avatar-05.jpg" alt="Img" />
                    </span>
                    <h6 class="fw-normal">Edgar Hansel</h6>
                  </div>
                </div>
                <div class="icons-social d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-primary-transparent me-2"><i
                      class="ti ti-message text-primary"></i></a>
                  <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-light"><i
                      class="ti ti-phone"></i></a>
                </div>
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
                  <router-link to="/ticktet/ticket-details"
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
                      <a class="dropdown-item rounded-1" href="javascript:void(0);"><i
                          class="ti ti-edit me-1"></i>{{$t('Edit')}}</a>
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
                  <router-link to="/tickets/tickets-details">{{$t('PaymentIssue')}}</router-link>
                </h6>
                <span class="badge bg-info-transparent fs-10 fw-medium">Tic - 002</span>
              </div>
              <div class="d-flex flex-column">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <span>{{$t('Category')}}</span>
                  <h6 class="fw-medium">{{$t('SoftwareIssues')}}</h6>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <span>{{$t('Status')}}</span>
                  <span class="badge bg-pink-transparent d-inline-flex align-items-center fs-10 fw-medium">
                    <i class="ti ti-circle-filled fs-5 me-1"></i>{{$t('Open')}}
                  </span>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span>{{$t('Priority')}}</span>
                  <span class="badge bg-outline-danger d-inline-flex align-items-center fs-10 fw-medium">
                    <i class="ti ti-circle-filled fs-5 me-1"></i>{{$t('high')}}
                  </span>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <div>
                  <p class="mb-1 fs-12">{{$t('AssignedTo')}}</p>
                  <div class="d-flex align-items-center">
                    <span class="avatar avatar-xs avatar-rounded me-2">
                      <img src="@/assets/img/profiles/avatar-05.jpg" alt="Img" />
                    </span>
                    <h6 class="fw-normal">Edgar Hansel</h6>
                  </div>
                </div>
                <div class="icons-social d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-primary-transparent me-2"><i
                      class="ti ti-message text-primary"></i></a>
                  <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-light"><i
                      class="ti ti-phone"></i></a>
                </div>
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
                  <router-link to="/ticktet/ticket-details"
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
                      <a class="dropdown-item rounded-1" href="javascript:void(0);"><i
                          class="ti ti-edit me-1"></i>{{$t('Edit')}}</a>
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
                  <router-link to="/tickets/tickets-details">{{$t('BugReport')}}</router-link>
                </h6>
                <span class="badge bg-info-transparent fs-10 fw-medium">Tic - 003</span>
              </div>
              <div class="d-flex flex-column">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <span>{{$t('Category')}}</span>
                  <h6 class="fw-medium">{{$t('ITSupport')}}</h6>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <span>{{$t('Status')}}</span>
                  <span class="badge bg-pink-transparent d-inline-flex align-items-center fs-10 fw-medium">
                    <i class="ti ti-circle-filled fs-5 me-1"></i>{{$t('Open')}}
                  </span>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span>{{$t('Priority')}}</span>
                  <span class="badge bg-outline-danger d-inline-flex align-items-center fs-10 fw-medium">
                    <i class="ti ti-circle-filled fs-5 me-1"></i>{{$t('high')}}
                  </span>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <div>
                  <p class="mb-1 fs-12">{{$t('AssignedTo')}}</p>
                  <div class="d-flex align-items-center">
                    <span class="avatar avatar-xs avatar-rounded me-2">
                      <img src="@/assets/img/profiles/avatar-05.jpg" alt="Img" />
                    </span>
                    <h6 class="fw-normal">Edgar Hansel</h6>
                  </div>
                </div>
                <div class="icons-social d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-primary-transparent me-2"><i
                      class="ti ti-message text-primary"></i></a>
                  <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-light"><i
                      class="ti ti-phone"></i></a>
                </div>
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
                  <router-link to="/ticktet/ticket-details"
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
                      <a class="dropdown-item rounded-1" href="javascript:void(0);"><i
                          class="ti ti-edit me-1"></i>{{$t('Edit')}}</a>
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
                  <router-link to="/tickets/tickets-details">{{$t('AccessDenied')}}</router-link>
                </h6>
                <span class="badge bg-info-transparent fs-10 fw-medium">Tic - 004</span>
              </div>
              <div class="d-flex flex-column">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <span>{{$t('Category')}}</span>
                  <h6 class="fw-medium">{{$t('ITSupport')}}</h6>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <span>{{$t('Status')}}</span>
                  <span class="badge bg-pink-transparent d-inline-flex align-items-center fs-10 fw-medium">
                    <i class="ti ti-circle-filled fs-5 me-1"></i>{{$t('Open')}}
                  </span>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span>{{$t('Priority')}}</span>
                  <span class="badge bg-outline-danger d-inline-flex align-items-center fs-10 fw-medium">
                    <i class="ti ti-circle-filled fs-5 me-1"></i>{{$t('high')}}
                  </span>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <div>
                  <p class="mb-1 fs-12">{{$t('AssignedTo')}}</p>
                  <div class="d-flex align-items-center">
                    <span class="avatar avatar-xs avatar-rounded me-2">
                      <img src="@/assets/img/profiles/avatar-05.jpg" alt="Img" />
                    </span>
                    <h6 class="fw-normal">Edgar Hansel</h6>
                  </div>
                </div>
                <div class="icons-social d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-primary-transparent me-2"><i
                      class="ti ti-message text-primary"></i></a>
                  <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-light"><i
                      class="ti ti-phone"></i></a>
                </div>
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
                  <router-link to="/ticktet/ticket-details"
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
                      <a class="dropdown-item rounded-1" href="javascript:void(0);"><i
                          class="ti ti-edit me-1"></i>{{$t('Edit')}}</a>
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
                  <router-link to="/tickets/tickets-details">{{$t('DisplayGlitch')}}</router-link>
                </h6>
                <span class="badge bg-info-transparent fs-10 fw-medium">Tic - 005</span>
              </div>
              <div class="d-flex flex-column">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <span>{{$t('Category')}}</span>
                  <h6 class="fw-medium">{{$t('HardwareIssues')}}</h6>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <span>{{$t('Status')}}</span>
                  <span class="badge bg-pink-transparent d-inline-flex align-items-center fs-10 fw-medium">
                    <i class="ti ti-circle-filled fs-5 me-1"></i>{{$t('Open')}}
                  </span>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span>{{$t('Priority')}}</span>
                  <span class="badge bg-outline-danger d-inline-flex align-items-center fs-10 fw-medium">
                    <i class="ti ti-circle-filled fs-5 me-1"></i>{{$t('high')}}
                  </span>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <div>
                  <p class="mb-1 fs-12">{{$t('AssignedTo')}}</p>
                  <div class="d-flex align-items-center">
                    <span class="avatar avatar-xs avatar-rounded me-2">
                      <img src="@/assets/img/profiles/avatar-05.jpg" alt="Img" />
                    </span>
                    <h6 class="fw-normal">Edgar Hansel</h6>
                  </div>
                </div>
                <div class="icons-social d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-primary-transparent me-2"><i
                      class="ti ti-message text-primary"></i></a>
                  <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-light"><i
                      class="ti ti-phone"></i></a>
                </div>
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
                  <router-link to="/ticktet/ticket-details"
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
                      <a class="dropdown-item rounded-1" href="javascript:void(0);"><i
                          class="ti ti-edit me-1"></i>{{$t('Edit')}}</a>
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
                  <router-link to="/tickets/tickets-details">{{$t('SecurityAlert')}}</router-link>
                </h6>
                <span class="badge bg-info-transparent fs-10 fw-medium">Tic - 006</span>
              </div>
              <div class="d-flex flex-column">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <span>{{$t('Category')}}</span>
                  <h6 class="fw-medium">{{$t('ITSupport')}}</h6>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <span>{{$t('Status')}}</span>
                  <span class="badge bg-pink-transparent d-inline-flex align-items-center fs-10 fw-medium">
                    <i class="ti ti-circle-filled fs-5 me-1"></i>{{$t('Open')}}
                  </span>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span>{{$t('Priority')}}</span>
                  <span class="badge bg-outline-danger d-inline-flex align-items-center fs-10 fw-medium">
                    <i class="ti ti-circle-filled fs-5 me-1"></i>{{$t('high')}}
                  </span>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <div>
                  <p class="mb-1 fs-12">{{$t('AssignedTo')}}</p>
                  <div class="d-flex align-items-center">
                    <span class="avatar avatar-xs avatar-rounded me-2">
                      <img src="@/assets/img/profiles/avatar-05.jpg" alt="Img" />
                    </span>
                    <h6 class="fw-normal">Edgar Hansel</h6>
                  </div>
                </div>
                <div class="icons-social d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-primary-transparent me-2"><i
                      class="ti ti-message text-primary"></i></a>
                  <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-light"><i
                      class="ti ti-phone"></i></a>
                </div>
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
                  <router-link to="/ticktet/ticket-details"
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
                      <a class="dropdown-item rounded-1" href="javascript:void(0);"><i
                          class="ti ti-edit me-1"></i>{{$t('Edit')}}</a>
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
                  <router-link to="/tickets/tickets-details">{{$t('ConnectivityIssue')}}</router-link>
                </h6>
                <span class="badge bg-info-transparent fs-10 fw-medium">Tic - 007</span>
              </div>
              <div class="d-flex flex-column">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <span>{{$t('Category')}}</span>
                  <h6 class="fw-medium">{{$t('Connectivity')}}</h6>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <span>{{$t('Status')}}</span>
                  <span class="badge bg-pink-transparent d-inline-flex align-items-center fs-10 fw-medium">
                    <i class="ti ti-circle-filled fs-5 me-1"></i>{{$t('Open')}}
                  </span>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span>{{$t('Priority')}}</span>
                  <span class="badge bg-outline-danger d-inline-flex align-items-center fs-10 fw-medium">
                    <i class="ti ti-circle-filled fs-5 me-1"></i>{{$t('high')}}
                  </span>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <div>
                  <p class="mb-1 fs-12">{{$t('AssignedTo')}}</p>
                  <div class="d-flex align-items-center">
                    <span class="avatar avatar-xs avatar-rounded me-2">
                      <img src="@/assets/img/profiles/avatar-05.jpg" alt="Img" />
                    </span>
                    <h6 class="fw-normal">Edgar Hansel</h6>
                  </div>
                </div>
                <div class="icons-social d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-primary-transparent me-2"><i
                      class="ti ti-message text-primary"></i></a>
                  <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-light"><i
                      class="ti ti-phone"></i></a>
                </div>
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
                  <router-link to="/ticktet/ticket-details"
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
                      <a class="dropdown-item rounded-1" href="javascript:void(0);"><i
                          class="ti ti-edit me-1"></i>{{$t('Edit')}}</a>
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
                  <router-link to="/tickets/tickets-details">{{$t('UpdateError')}}</router-link>
                </h6>
                <span class="badge bg-info-transparent fs-10 fw-medium">Tic - 008</span>
              </div>
              <div class="d-flex flex-column">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <span>{{$t('Category')}}</span>
                  <h6 class="fw-medium">{{$t('ITSupport')}}</h6>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <span>{{$t('Status')}}</span>
                  <span class="badge bg-pink-transparent d-inline-flex align-items-center fs-10 fw-medium">
                    <i class="ti ti-circle-filled fs-5 me-1"></i>{{$t('Open')}}
                  </span>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span>{{$t('Priority')}}</span>
                  <span class="badge bg-outline-danger d-inline-flex align-items-center fs-10 fw-medium">
                    <i class="ti ti-circle-filled fs-5 me-1"></i>{{$t('high')}}
                  </span>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <div>
                  <p class="mb-1 fs-12">{{$t('AssignedTo')}}</p>
                  <div class="d-flex align-items-center">
                    <span class="avatar avatar-xs avatar-rounded me-2">
                      <img src="@/assets/img/profiles/avatar-05.jpg" alt="Img" />
                    </span>
                    <h6 class="fw-normal">Edgar Hansel</h6>
                  </div>
                </div>
                <div class="icons-social d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-primary-transparent me-2"><i
                      class="ti ti-message text-primary"></i></a>
                  <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-light"><i
                      class="ti ti-phone"></i></a>
                </div>
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
                  <router-link to="/ticktet/ticket-details"
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
                      <a class="dropdown-item rounded-1" href="javascript:void(0);"><i
                          class="ti ti-edit me-1"></i>{{$t('Edit')}}</a>
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
                  <router-link to="/tickets/tickets-details">{{$t('LoginFailure')}}</router-link>
                </h6>
                <span class="badge bg-info-transparent fs-10 fw-medium">Tic - 009</span>
              </div>
              <div class="d-flex flex-column">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <span>{{$t('Category')}}</span>
                  <h6 class="fw-medium">{{$t('ITSupport')}}</h6>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <span>{{$t('Status')}}</span>
                  <span class="badge bg-pink-transparent d-inline-flex align-items-center fs-10 fw-medium">
                    <i class="ti ti-circle-filled fs-5 me-1"></i>{{$t('Open')}}
                  </span>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span>{{$t('Priority')}}</span>
                  <span class="badge bg-outline-danger d-inline-flex align-items-center fs-10 fw-medium">
                    <i class="ti ti-circle-filled fs-5 me-1"></i>{{$t('high')}}
                  </span>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <div>
                  <p class="mb-1 fs-12">{{$t('AssignedTo')}}</p>
                  <div class="d-flex align-items-center">
                    <span class="avatar avatar-xs avatar-rounded me-2">
                      <img src="@/assets/img/profiles/avatar-05.jpg" alt="Img" />
                    </span>
                    <h6 class="fw-normal">Edgar Hansel</h6>
                  </div>
                </div>
                <div class="icons-social d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-primary-transparent me-2"><i
                      class="ti ti-message text-primary"></i></a>
                  <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-light"><i
                      class="ti ti-phone"></i></a>
                </div>
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
                  <router-link to="/ticktet/ticket-details"
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
                      <a class="dropdown-item rounded-1" href="javascript:void(0);"><i
                          class="ti ti-edit me-1"></i>{{$t('Edit')}}</a>
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
                  <router-link to="/tickets/tickets-details">{{$t('ServerTimeout')}}</router-link>
                </h6>
                <span class="badge bg-info-transparent fs-10 fw-medium">Tic - 010</span>
              </div>
              <div class="d-flex flex-column">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <span>{{$t('Category')}}</span>
                  <h6 class="fw-medium">{{$t('Connectivity')}}</h6>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <span>{{$t('Status')}}</span>
                  <span class="badge bg-pink-transparent d-inline-flex align-items-center fs-10 fw-medium">
                    <i class="ti ti-circle-filled fs-5 me-1"></i>{{$t('Open')}}
                  </span>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span>{{$t('Priority')}}</span>
                  <span class="badge bg-outline-danger d-inline-flex align-items-center fs-10 fw-medium">
                    <i class="ti ti-circle-filled fs-5 me-1"></i>{{$t('high')}}
                  </span>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <div>
                  <p class="mb-1 fs-12">{{$t('AssignedTo')}}</p>
                  <div class="d-flex align-items-center">
                    <span class="avatar avatar-xs avatar-rounded me-2">
                      <img src="@/assets/img/profiles/avatar-05.jpg" alt="Img" />
                    </span>
                    <h6 class="fw-normal">Edgar Hansel</h6>
                  </div>
                </div>
                <div class="icons-social d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-primary-transparent me-2"><i
                      class="ti ti-message text-primary"></i></a>
                  <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-light"><i
                      class="ti ti-phone"></i></a>
                </div>
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
                  <router-link to="/ticktet/ticket-details"
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
                      <a class="dropdown-item rounded-1" href="javascript:void(0);"><i
                          class="ti ti-edit me-1"></i>{{$t('Edit')}}</a>
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
                  <router-link to="/tickets/tickets-details">{{$t('EmailClientSetup')}}</router-link>
                </h6>
                <span class="badge bg-info-transparent fs-10 fw-medium">Tic - 011</span>
              </div>
              <div class="d-flex flex-column">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <span>{{$t('Category')}}</span>
                  <h6 class="fw-medium">{{$t('ITSupport')}}</h6>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <span>{{$t('Status')}}</span>
                  <span class="badge bg-pink-transparent d-inline-flex align-items-center fs-10 fw-medium">
                    <i class="ti ti-circle-filled fs-5 me-1"></i>{{$t('Open')}}
                  </span>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span>{{$t('Priority')}}</span>
                  <span class="badge bg-outline-danger d-inline-flex align-items-center fs-10 fw-medium">
                    <i class="ti ti-circle-filled fs-5 me-1"></i>{{$t('high')}}
                  </span>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <div>
                  <p class="mb-1 fs-12">{{$t('AssignedTo')}}</p>
                  <div class="d-flex align-items-center">
                    <span class="avatar avatar-xs avatar-rounded me-2">
                      <img src="@/assets/img/profiles/avatar-05.jpg" alt="Img" />
                    </span>
                    <h6 class="fw-normal">Edgar Hansel</h6>
                  </div>
                </div>
                <div class="icons-social d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-primary-transparent me-2"><i
                      class="ti ti-message text-primary"></i></a>
                  <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-light"><i
                      class="ti ti-phone"></i></a>
                </div>
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
                  <router-link to="/ticktet/ticket-details"
                    class="avatar avatar-xl avatar-rounded online border p-1 border-primary rounded-circle">
                    <img src="@/assets/img/users/user-56.jpg" class="img-fluid h-auto w-auto" alt="img" />
                  </router-link>
                </div>
                <div class="dropdown">
                  <button class="btn btn-icon btn-sm rounded-circle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="ti ti-dots-vertical"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <a class="dropdown-item rounded-1" href="javascript:void(0);"><i
                          class="ti ti-edit me-1"></i>{{$t('Edit')}}</a>
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
                  <router-link to="/tickets/tickets-details">{{$t('ApplicationCrashing')}}</router-link>
                </h6>
                <span class="badge bg-info-transparent fs-10 fw-medium">Tic - 012</span>
              </div>
              <div class="d-flex flex-column">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <span>{{$t('Category')}}</span>
                  <h6 class="fw-medium">{{$t('SoftwareIssues')}}</h6>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <span>{{$t('Status')}}</span>
                  <span class="badge bg-pink-transparent d-inline-flex align-items-center fs-10 fw-medium">
                    <i class="ti ti-circle-filled fs-5 me-1"></i>{{$t('Open')}}
                  </span>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span>{{$t('Priority')}}</span>
                  <span class="badge bg-outline-danger d-inline-flex align-items-center fs-10 fw-medium">
                    <i class="ti ti-circle-filled fs-5 me-1"></i>{{$t('high')}}
                  </span>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <div>
                  <p class="mb-1 fs-12">{{$t('AssignedTo')}}</p>
                  <div class="d-flex align-items-center">
                    <span class="avatar avatar-xs avatar-rounded me-2">
                      <img src="@/assets/img/profiles/avatar-05.jpg" alt="Img" />
                    </span>
                    <h6 class="fw-normal">Edgar Hansel</h6>
                  </div>
                </div>
                <div class="icons-social d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-primary-transparent me-2"><i
                      class="ti ti-message text-primary"></i></a>
                  <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-light"><i
                      class="ti ti-phone"></i></a>
                </div>
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
  <tickets-modal></tickets-modal>
</template>
<script>
import { totalChart, activeChart, inactiveChart, locationChart } from "./data";
export default {
  data() {
    return {
      totalChart: totalChart,
      activeChart: activeChart,
      inactiveChart: inactiveChart,
      locationChart: locationChart,
      title: "Tickets",
      text: "Employee",
      text1: "Tickets",
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
