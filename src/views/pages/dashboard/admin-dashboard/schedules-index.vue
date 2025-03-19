<template>
  <div class="row">
    <!-- Schedules -->
    <div class="col-xxl-4 d-flex">
      <div class="card flex-fill">
        <div class="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
          <h5 class="mb-2">{{$t('schedules')}}</h5>
          <router-link to="/recuritment/candidates" class="btn btn-light btn-md mb-2">{{$t('viewAll')}}</router-link>
        </div>
        <div class="card-body">
          <div class="bg-transparent-secondary p-3 br-5 mb-4">
            <span class="badge badge-secondary badge-xs mb-1">{{$t('UI/UXDesigner')}}</span>
            <h6 class="mb-1 text-truncate">{{$t('interviewCandidates')}} - {{$t('UI/UXDesigner')}}</h6>
            <div class="d-flex align-items-center flex-wrap border-bottom pb-2">
              <p class="fs-13 mb-1 me-2">
                <i class="ti ti-calendar-event me-2"></i>{{$t('Thu15Feb2025')}}
              </p>
              <p class="fs-13 mb-1">
                <i class="ti ti-clock-hour-11 me-2"></i>{{$t('01:00PM02:20PM')}}
              </p>
            </div>
            <div class="d-flex align-items-center justify-content-between border-top mt-1 pt-3">
              <div class="avatar-list-stacked avatar-group-sm">
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/users/user-49.jpg" alt="img" />
                </span>
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/users/user-13.jpg" alt="img" />
                </span>
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/users/user-11.jpg" alt="img" />
                </span>
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/users/user-22.jpg" alt="img" />
                </span>
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/users/user-58.jpg" alt="img" />
                </span>
                <a class="avatar bg-primary avatar-rounded text-fixed-white fs-10 fw-medium" href="javascript:void(0);">
                  +3
                </a>
              </div>
              <a href="javascript:void(0);" class="btn btn-primary btn-xs">{{$t('joinMeeting')}}</a>
            </div>
          </div>
          <div class="bg-transparent-secondary p-3 br-5 mb-0">
            <span class="badge badge-dark badge-xs mb-1">{{$t('IOSDeveloper')}}</span>
            <h6 class="mb-1 text-truncate">{{$t('interviewCandidates')}} - {{$t('IOSDeveloper')}}</h6>
            <div class="d-flex align-items-center flex-wrap border-bottom pb-2">
              <p class="fs-13 mb-1 me-2">
                <i class="ti ti-calendar-event me-2"></i>{{$t('Thu15Feb2025')}}
              </p>
              <p class="fs-13 mb-1">
                <i class="ti ti-clock-hour-11 me-2"></i>{{$t('02:00PM04:20PM')}}
              </p>
            </div>
            <div class="d-flex align-items-center justify-content-between border-top mt-1 pt-3">
              <div class="avatar-list-stacked avatar-group-sm">
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/users/user-49.jpg" alt="img" />
                </span>
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/users/user-13.jpg" alt="img" />
                </span>
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/users/user-11.jpg" alt="img" />
                </span>
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/users/user-22.jpg" alt="img" />
                </span>
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/users/user-58.jpg" alt="img" />
                </span>
                <a class="avatar bg-primary avatar-rounded text-fixed-white fs-10 fw-medium" href="javascript:void(0);">
                  +3
                </a>
              </div>
              <a href="javascript:void(0);" class="btn btn-primary btn-xs">{{$t('joinMeeting')}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Schedules -->

    <!-- Recent Activities -->
    <div class="col-xxl-4 col-xl-6 d-flex">
      <div class="card flex-fill">
        <div class="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
          <h5 class="mb-2">{{$t('recentActivities')}}</h5>
          <router-link to="/crm/activity" class="btn btn-light btn-md mb-2">{{$t('viewAll')}}</router-link>
        </div>
        <div class="card-body">
          <div class="recent-item">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-items-center w-100">
                <a href="javscript:void(0);" class="avatar avatar-md flex-shrink-0">
                  <img src="@/assets/img/users/user-38.jpg" class="rounded-circle" alt="img" />
                </a>
                <div class="ms-2 flex-fill">
                  <div class="d-flex align-items-center justify-content-between">
                    <h6 class="fs-medium text-truncate">
                      <a href="javscript:void(0);">Matt Morgan</a>
                    </h6>
                    <p class="fs-13">{{$t('05:30PM')}}</p>
                  </div>
                  <p class="fs-13">
                    {{$t('addedNewProject')}} <span class="text-primary">{{$t('ARONHRDashboard')}}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="recent-item">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-items-center w-100">
                <a href="javscript:void(0);" class="avatar avatar-md flex-shrink-0">
                  <img src="@/assets/img/users/user-01.jpg" class="rounded-circle" alt="img" />
                </a>
                <div class="ms-2 flex-fill">
                  <div class="d-flex align-items-center justify-content-between">
                    <h6 class="fs-medium text-truncate">
                      <a href="javscript:void(0);">Jay Ze</a>
                    </h6>
                    <p class="fs-13">{{$t('05:00PM')}}</p>
                  </div>
                  <p class="fs-13">{{$t('commentedonUploadedDocument')}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="recent-item">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-items-center w-100">
                <a href="javscript:void(0);" class="avatar avatar-md flex-shrink-0">
                  <img src="@/assets/img/users/user-19.jpg" class="rounded-circle" alt="img" />
                </a>
                <div class="ms-2 flex-fill">
                  <div class="d-flex align-items-center justify-content-between">
                    <h6 class="fs-medium text-truncate">
                      <a href="javscript:void(0);">Mary Donald</a>
                    </h6>
                    <p class="fs-13">{{$t('05:30PM')}}</p>
                  </div>
                  <p class="fs-13">{{$t('ApprovedTaskProjects')}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="recent-item">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-items-center w-100">
                <a href="javscript:void(0);" class="avatar avatar-md flex-shrink-0">
                  <img src="@/assets/img/users/user-11.jpg" class="rounded-circle" alt="img" />
                </a>
                <div class="ms-2 flex-fill">
                  <div class="d-flex align-items-center justify-content-between">
                    <h6 class="fs-medium text-truncate">
                      <a href="javscript:void(0);">George David</a>
                    </h6>
                    <p class="fs-13">{{$t('06:00PM')}}</p>
                  </div>
                  <p class="fs-13">{{$t('RequestingAccesstoModuleTickets')}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="recent-item">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-items-center w-100">
                <a href="javscript:void(0);" class="avatar avatar-md flex-shrink-0">
                  <img src="@/assets/img/users/user-20.jpg" class="rounded-circle" alt="img" />
                </a>
                <div class="ms-2 flex-fill">
                  <div class="d-flex align-items-center justify-content-between">
                    <h6 class="fs-medium text-truncate">
                      <a href="javscript:void(0);">Aaron Zeen</a>
                    </h6>
                    <p class="fs-13">{{$t('06:30PM')}}</p>
                  </div>
                  <p class="fs-13">{{$t('DownloadedAppReports')}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="recent-item">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-items-center w-100">
                <a href="javscript:void(0);" class="avatar avatar-md flex-shrink-0">
                  <img src="@/assets/img/users/user-08.jpg" class="rounded-circle" alt="img" />
                </a>
                <div class="ms-2 flex-fill">
                  <div class="d-flex align-items-center justify-content-between">
                    <h6 class="fs-medium text-truncate">
                      <a href="javscript:void(0);">Hendry Daniel</a>
                    </h6>
                    <p class="fs-13">{{$t('05:30PM')}}</p>
                  </div>
                  <p class="fs-13">{{$t('CompletedNewProject')}} <span>HMS</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Recent Activities -->

    <!-- Birthdays -->
    <div class="col-xxl-4 col-xl-6 d-flex">
      <div class="card flex-fill">
        <div class="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
          <h5 class="mb-2">{{$t('birthdays')}}</h5>
          <a href="javascript:void(0);" class="btn btn-light btn-md mb-2">{{$t('viewAll')}}</a>
        </div>
        <div class="card-body pb-1">
          <h6 class="mb-2">{{$t('today')}}</h6>
          <div class="bg-light p-2 border border-dashed rounded-top mb-3">
            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <span class="avatar avatar-md">
                  <img src="@/assets/img/users/user-38.jpg" class="rounded-circle" alt="img" />
                </span>
                <div class="ms-2 overflow-hidden">
                  <h6 class="fs-medium">Andrew Jermia</h6>
                  <p class="fs-13">{{$t('IOSDeveloper')}}</p>
                </div>
              </div>
              <a href="javascript:vOid(0);" class="btn btn-secondary btn-xs"><i class="ti ti-cake me-1"></i>{{$t('send')}}</a>
            </div>
          </div>
          <h6 class="mb-2">{{$t('tomorow')}}</h6>
          <div class="bg-light p-2 border border-dashed rounded-top mb-3">
            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <span class="avatar avatar-md">
                  <img src="@/assets/img/users/user-10.jpg" class="rounded-circle" alt="img" />
                </span>
                <div class="ms-2 overflow-hidden">
                  <h6 class="fs-medium">Mary Zeen</h6>
                  <p class="fs-13">{{$t('UI/UXDesigner')}}</p>
                </div>
              </div>
              <a href="javascript:vOid(0);" class="btn btn-secondary btn-xs"><i class="ti ti-cake me-1"></i>{{$t('send')}}</a>
            </div>
          </div>
          <div class="bg-light p-2 border border-dashed rounded-top mb-3">
            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <span class="avatar avatar-md">
                  <img src="@/assets/img/users/user-09.jpg" class="rounded-circle" alt="img" />
                </span>
                <div class="ms-2 overflow-hidden">
                  <h6 class="fs-medium">Antony Lewis</h6>
                  <p class="fs-13">{{$t('AndroidDeveloper')}}</p>
                </div>
              </div>
              <a href="javascript:vOid(0);" class="btn btn-secondary btn-xs"><i class="ti ti-cake me-1"></i>{{$t('send')}}</a>
            </div>
          </div>
          <h6 class="mb-2">25 Jan 2025</h6>
          <div class="bg-light p-2 border border-dashed rounded-top mb-3">
            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <span class="avatar avatar-md">
                  <img src="@/assets/img/users/user-12.jpg" class="rounded-circle" alt="img" />
                </span>
                <div class="ms-2 overflow-hidden">
                  <h6 class="fs-medium">Doglas Martini</h6>
                  <p class="fs-13">{{$t('.NetDeveloper')}}</p>
                </div>
              </div>
              <a href="javascript:vOid(0);" class="btn btn-secondary btn-xs"><i class="ti ti-cake me-1"></i>{{$t('send')}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Birthdays -->
  </div>
</template>
