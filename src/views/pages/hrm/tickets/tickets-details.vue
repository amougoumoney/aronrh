<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content">
      <!-- Breadcrumb -->
      <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div class="mb-2">
          <h6 class="fw-medium d-flex align-items-center">
            <router-link to="/tickets/ticket"><i class="ti ti-arrow-left me-2"></i>Ticket Details</router-link>
          </h6>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
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
              class="btn btn-primary d-flex align-items-center"><i class="ti ti-circle-plus me-2"></i>{{$t('AddTicket')}}</a>
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
        <div class="col-xl-9 col-md-8">
          <div class="card">
            <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <h5 class="text-info fw-medium">{{$t('ITSupport')}}</h5>
              <div class="d-flex align-items-center">
                <span class="badge bg-danger me-3"><i class="ti ti-circle-filled fs-5 me-1"></i>{{$t('high')}}</span>
                <div>
                  <vue-select :options="PublSel" id="publsel" placeholder="Mark as Private" />
                </div>
              </div>
            </div>
            <div class="card-body">
              <div>
                <div class="d-flex align-items-center justify-content-between flex-wrap border-bottom mb-3">
                  <div class="d-flex align-items-center flex-wrap">
                    <div class="mb-3">
                      <span class="badge badge-info rounded-pill mb-2">Tic - 001</span>
                      <div class="d-flex align-items-center mb-2">
                        <h5 class="fw-semibold me-2">{{$t('LaptopIssue')}}</h5>
                        <span class="badge bg-outline-pink d-flex align-items-center ms-1"><i
                            class="ti ti-circle-filled fs-5 me-1"></i>{{$t('Open')}}</span>
                      </div>
                      <div class="d-flex align-items-center flex-wrap row-gap-2">
                        <p class="d-flex align-items-center mb-0 me-2">
                          <img src="@/assets/img/profiles/avatar-06.jpg" class="avatar avatar-xs rounded-circle me-2"
                            alt="img" />
                          {{$t('Assignedto')}} <span class="text-dark ms-1">Juan Hermann</span>
                        </p>
                        <p class="d-flex align-items-center mb-0 me-2">
                          <i class="ti ti-calendar-bolt me-1"></i>{{$t('Updated20hoursago')}}
                        </p>
                        <p class="d-flex align-items-center mb-0">
                          <i class="ti ti-message-circle-share me-1"></i>9 {{$t('Comments')}}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <a href="javascript:void(0);" class="btn btn-primary"><i
                        class="ti ti-arrow-forward-up me-1"></i>{{$t('PostaReply')}}</a>
                  </div>
                </div>
                <div class="border-bottom mb-3 pb-3">
                  <div>
                    <p class="mb-3">
                     {{$t('paragraph1')}}
                    </p>
                    <ul class="list-styled-dotted border-bottom pb-3">
                      <li class="ms-4 mb-3">
                        {{$t('paragraph2')}}
                      </li>
                      <li class="ms-4">
                        {{$t('paragraph3')}}
                      </li>
                    </ul>
                  </div>
                  <div class="mt-4">
                    <div class="d-flex align-items-center mb-3">
                      <span class="avatar avatar-lg avatar-rounded me-2 flex-shrink-0"><img
                          src="@/assets/img/users/user-09.jpg" alt="Img" /></span>
                      <div>
                        <h6 class="fw-medium mb-1">James Hendriques</h6>
                        <p><i class="ti ti-calendar-bolt me-1"></i>{{$t('Updated5hoursago')}}</p>
                      </div>
                    </div>
                    <div>
                      <div class="mb-3">
                        <p>
                          {{$t('paragraph4')}}
                        </p>
                      </div>
                      <span class="badge bg-light fw-normal">{{$t('Screenshot.png')}}<i class="ti ti-download ms-1"></i></span>
                      <div class="d-flex align-items-center mt-3">
                        <a href="javascript:void(0);"
                          class="d-inline-flex align-items-center text-primary fw-medium me-3"><i
                            class="ti ti-arrow-forward-up me-1"></i>{{$t('Reply')}}</a>
                        <p>
                          <a href="javascript:void(0);" class="d-flex align-items-center"><i
                              class="ti ti-message-circle-share me-1"></i>1
                            {{$t('Comments')}}</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border-bottom mb-3 pb-3">
                  <div>
                    <div class="d-flex align-items-center mb-3">
                      <span class="avatar avatar-ld avatar-rounded me-2 flex-shrink-0"><img
                          src="@/assets/img/users/user-02.jpg" alt="Img" /></span>
                      <div>
                        <h6 class="mb-1">Marilyn Siegle</h6>
                        <p><i class="ti ti-calendar-bolt me-1"></i>{{$t('Updated6hoursago')}}</p>
                      </div>
                    </div>
                    <div>
                      <div class="mb-3">
                        <p>
                          {{$t('paragraph5')}}
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="badge bg-light fw-normal me-2">{{$t('Screenshot.png')}}<i
                            class="ti ti-download ms-1"></i></span>
                        <span class="badge bg-light fw-normal me-2">{{$t('Screenshot.png')}}<i
                            class="ti ti-download ms-1"></i></span>
                        <span class="badge bg-light fw-normal me-2">{{$t('Screenshot.png')}}<i
                            class="ti ti-download ms-1"></i></span>
                        <span class="badge bg-light fw-normal">{{$t('Screenshot.png')}}<i class="ti ti-download ms-1"></i></span>
                      </div>
                      <div class="d-flex align-items-center mt-3">
                        <a href="javascript:void(0);"
                          class="d-inline-flex align-items-center text-primary fw-medium me-3"><i
                            class="ti ti-arrow-forward-up me-1"></i>{{$t('Reply')}}</a>
                        <p>
                          <a href="javascript:void(0);" class="d-flex align-items-center"><i
                              class="ti ti-message-circle-share me-1"></i>1
                              {{$t('Comments')}}</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div class="d-flex align-items-center mb-3">
                      <span class="avatar avatar-lg avatar-rounded me-2 flex-shrink-0"><img
                          src="@/assets/img/profiles/avatar-22.jpg" alt="Img" /></span>
                      <div>
                        <h6 class="mb-1">Marilyn Siegle</h6>
                        <p><i class="ti ti-calendar-bolt me-1"></i>{{$t('Updated8hoursago')}}</p>
                      </div>
                    </div>
                    <div>
                      <div class="mb-3">
                        <p>
                          {{$t('paragraph6')}}
                        </p>
                      </div>
                      <div class="d-flex align-items-center mt-3">
                        <a href="javascript:void(0);"
                          class="d-inline-flex align-items-center text-primary fw-medium me-3"><i
                            class="ti ti-arrow-forward-up me-1"></i>{{$t('Reply')}}</a>
                        <p>
                          <a href="javascript:void(0);" class="d-flex align-items-center"><i
                              class="ti ti-message-circle-share me-1"></i>1
                            {{$t('Comments')}}</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-4">
          <div class="card">
            <div class="card-header p-3">
              <h4>{{$t('TicketDetails')}}</h4>
            </div>
            <div class="card-body p-0">
              <div class="border-bottom p-3">
                <div class="mb-3">
                  <label class="form-label">{{$t('ChangePriority')}}</label>
                  <vue-select :options="MediumTick" id="mediumtick" placeholder="High" />
                </div>
                <div class="mb-3">
                  <label class="form-label">{{$t('AssignTo')}}</label>
                  <vue-select :options="HerMan" id="herman" placeholder="Edgar Hansel" />
                </div>
                <div>
                  <label class="form-label">{{$t('TicketStatus')}}</label>
                  <vue-select :options="HoldTick" id="holdtick" placeholder="Open" />
                </div>
              </div>
              <div class="d-flex align-items-center border-bottom p-3">
                <span class="avatar avatar-md me-2 flex-shrink-0"><img src="@/assets/img/users/user-01.jpg"
                    class="rounded-circle" alt="Img" /></span>
                <div>
                  <span class="fs-12">{{$t('User')}}</span>
                  <p class="text-dark">Anthony Lewis</p>
                </div>
              </div>
              <div class="d-flex align-items-center border-bottom p-3">
                <span class="avatar avatar-md me-2 flex-shrink-0"><img src="@/assets/img/users/user-05.jpg"
                    class="rounded-circle" alt="Img" /></span>
                <div>
                  <span class="fs-12">{{$t('SupportAgent')}}</span>
                  <p class="text-dark">Edgar Hansel</p>
                </div>
              </div>
              <div class="border-bottom p-3">
                <span class="fs-12">{{$t('Category')}}</span>
                <p class="text-dark">{{$t('Repair')}} &amp; {{$t('Service')}}</p>
              </div>
              <div class="border-bottom p-3">
                <span class="fs-12">{{$t('Email')}}</span>
                <p class="text-dark">Hellana@example.com</p>
              </div>
              <div class="p-3">
                <span class="fs-12">{{$t('LastUpdated')}} / {{$t('ClosedOn')}}</span>
                <p class="text-dark">25 {{$t('May')}} 2024</p>
              </div>
            </div>
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
  <ticket-details-modal></ticket-details-modal>
</template>
<script>
export default {
  data() {
    return {
      MediumTick: ["High", "Medium", "Low"],
      HerMan: ["Edgar Hansel", "Juan Hermann"],
      HoldTick: ["Select", "Open", "On Hold", "Reopened"],
      PublSel: ["Mark as Private", "Mark as Public"],
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
