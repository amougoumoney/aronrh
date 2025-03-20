<template>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content">
      <!-- Breadcrumb -->
      <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div class="my-auto mb-2">
          <h6 class="fw-medium d-inline-flex align-items-center mb-3 mb-sm-0">
            <router-link to="/employee/employee-list">
              <i class="ti ti-arrow-left me-2"></i>{{ $t('EmployeeDetails') }}</router-link>
          </h6>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="mb-2">
            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_bank_satutory"
              class="btn btn-primary d-flex align-items-center"><i class="ti ti-circle-plus me-2"></i>{{
                $t('bank&Statutory') }}
            </a>
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
        <div class="col-xl-4 theiaStickySidebar">
          <div class="card card-bg-1">
            <div class="card-body p-0">
              <span class="avatar avatar-xl avatar-rounded border border-2 border-white m-auto d-flex mb-2">
                <img src="@/assets/img/users/user-13.jpg" class="w-auto h-auto" alt="Img" />
              </span>
              <div class="text-center px-3 pb-3 border-bottom">
                <div class="mb-3">
                  <h5 class="d-flex align-items-center justify-content-center mb-1">
                    Stephan Peralt<i class="ti ti-discount-check-filled text-success ms-1"></i>
                  </h5>
                  <span class="badge badge-soft-dark fw-medium me-2">
                    <i class="ti ti-point-filled me-1"></i>{{ $t('SoftwareDeveloper') }}
                  </span>
                  <span class="badge badge-soft-secondary fw-medium">10+ {{ $t('yearsofExperience') }}</span>
                </div>
                <div>
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <span class="d-inline-flex align-items-center">
                      <i class="ti ti-id me-2"></i>
                      {{ $t('ClientID') }}
                    </span>
                    <p class="text-dark">CLT-0024</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <span class="d-inline-flex align-items-center">
                      <i class="ti ti-star me-2"></i>
                      {{ $t('Team') }}
                    </span>
                    <p class="text-dark">{{ $t('UI/UXDesign') }}</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <span class="d-inline-flex align-items-center">
                      <i class="ti ti-calendar-check me-2"></i>
                      {{ $t('DateOfJoin') }}
                    </span>
                    <p class="text-dark">1{{ $t('st') }} Jan 2023</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <span class="d-inline-flex align-items-center">
                      <i class="ti ti-calendar-check me-2"></i>
                      {{ $t('ReportOffice') }}
                    </span>
                    <div class="d-flex align-items-center">
                      <span class="avatar avatar-sm avatar-rounded me-2">
                        <img src="@/assets/img/profiles/avatar-12.jpg" alt="Img" />
                      </span>
                      <p class="text-gray-9 mb-0">Doglas Martini</p>
                    </div>
                  </div>
                  <div class="row gx-2 mt-3">
                    <div class="col-6">
                      <div>
                        <a href="javascript:void(0);" class="btn btn-dark w-100" data-bs-toggle="modal"
                          data-bs-target="#edit_employee"><i class="ti ti-edit me-1"></i>{{ $t('EditInfo') }}</a>
                      </div>
                    </div>
                    <div class="col-6">
                      <div>
                        <router-link to="/applications/chat" class="btn btn-primary w-100"><i
                            class="ti ti-message-heart me-1"></i>{{ $t('Message') }}</router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-3 border-bottom">
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <h6>{{ $t('Basicinformation') }}</h6>
                  <a href="javascript:void(0);" class="btn btn-icon btn-sm" data-bs-toggle="modal"
                    data-bs-target="#edit_employee"><i class="ti ti-edit"></i></a>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <span class="d-inline-flex align-items-center">
                    <i class="ti ti-phone me-2"></i>
                    {{ $t('phone') }}
                  </span>
                  <p class="text-dark">(163) 2459 315</p>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <span class="d-inline-flex align-items-center">
                    <i class="ti ti-mail-check me-2"></i>
                    {{ $t('Email') }}
                  </span>
                  <a href="javascript:void(0);"
                    class="text-info d-inline-flex align-items-center">perralt12@example.com<i
                      class="ti ti-copy text-dark ms-2"></i></a>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <span class="d-inline-flex align-items-center">
                    <i class="ti ti-gender-male me-2"></i>
                    {{ $t('Gender') }}
                  </span>
                  <p class="text-dark text-end">{{ $t('Male') }}</p>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <span class="d-inline-flex align-items-center">
                    <i class="ti ti-cake me-2"></i>
                    {{ $t('Birdthday') }}
                  </span>
                  <p class="text-dark text-end">{{ $t('24thJuly') }} 2000</p>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span class="d-inline-flex align-items-center">
                    <i class="ti ti-map-pin-check me-2"></i>
                    {{ $t('Address') }}
                  </span>
                  <p class="text-dark text-end">
                    1861 Bayonne Ave, <br />
                    Manchester, NJ, 08759
                  </p>
                </div>
              </div>
              <div class="p-3 border-bottom">
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <h6>{{ $t('PersonalInformation') }}</h6>
                  <a href="javascript:void(0);" class="btn btn-icon btn-sm" data-bs-toggle="modal"
                    data-bs-target="#edit_personal"><i class="ti ti-edit"></i></a>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <span class="d-inline-flex align-items-center">
                    <i class="ti ti-e-passport me-2"></i>
                    {{ $t('PassportNo') }}
                  </span>
                  <p class="text-dark">QRET4566FGRT</p>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <span class="d-inline-flex align-items-center">
                    <i class="ti ti-calendar-x me-2"></i>
                    {{ $t('PassportExpDate') }}
                  </span>
                  <p class="text-dark text-end">15 {{ $t('May') }} 2029</p>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <span class="d-inline-flex align-items-center">
                    <i class="ti ti-gender-male me-2"></i>
                    {{ $t('Nationality') }}
                  </span>
                  <p class="text-dark text-end">{{ $t('Indian') }}</p>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <span class="d-inline-flex align-items-center">
                    <i class="ti ti-bookmark-plus me-2"></i>
                    {{ $t('Religion') }}
                  </span>
                  <p class="text-dark text-end">{{ $t('Christianity') }}</p>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <span class="d-inline-flex align-items-center">
                    <i class="ti ti-hotel-service me-2"></i>
                    {{ $t('Maritalstatus') }}
                  </span>
                  <p class="text-dark text-end">{{ $t('Yes') }}</p>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <span class="d-inline-flex align-items-center">
                    <i class="ti ti-briefcase-2 me-2"></i>
                    {{ $t('Employmentofspouse') }}
                  </span>
                  <p class="text-dark text-end">{{ $t('No') }}</p>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span class="d-inline-flex align-items-center">
                    <i class="ti ti-baby-bottle me-2"></i>
                    {{ $t('No.ofchildren') }}
                  </span>
                  <p class="text-dark text-end">2</p>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between mb-2">
            <h6>{{ $t('EmergencyContactNumber') }}</h6>
            <a href="javascript:void(0);" class="btn btn-icon btn-sm" data-bs-toggle="modal"
              data-bs-target="#edit_emergency"><i class="ti ti-edit"></i></a>
          </div>
          <div class="card">
            <div class="card-body p-0">
              <div class="p-3 border-bottom">
                <div class="d-flex align-items-center justify-content-between">
                  <div>
                    <span class="d-inline-flex align-items-center"> {{ $t('Primary') }} </span>
                    <h6 class="d-flex align-items-center fw-medium mt-1">
                      Adrian Peralt
                      <span class="d-inline-flex mx-1"><i class="ti ti-point-filled text-danger"></i></span>{{
                      $t('Father') }}
                    </h6>
                  </div>
                  <p class="text-dark">+1 127 2685 598</p>
                </div>
              </div>
              <div class="p-3 border-bottom">
                <div class="d-flex align-items-center justify-content-between">
                  <div>
                    <span class="d-inline-flex align-items-center"> {{ $t('Secondary') }} </span>
                    <h6 class="d-flex align-items-center fw-medium mt-1">
                      Karen Wills
                      <span class="d-inline-flex mx-1"><i class="ti ti-point-filled text-danger"></i></span>{{
                      $t('Mother') }}
                    </h6>
                  </div>
                  <p class="text-dark">+1 989 7774 787</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8">
          <div>
            <div class="tab-content custom-accordion-items">
              <div class="tab-pane active show" id="bottom-justified-tab1" role="tabpanel">
                <div class="accordion accordions-items-seperate" id="accordionExample">
                  <div class="accordion-item">
                    <div class="accordion-header" id="headingOne">
                      <div class="accordion-button">
                        <div class="d-flex align-items-center flex-fill">
                          <h5>{{ $t('AboutEmployee') }}</h5>
                          <a href="javascript:void(0);" class="btn btn-sm btn-icon ms-auto" data-bs-toggle="modal"
                            data-bs-target="#edit_employee"><i class="ti ti-edit"></i></a>
                          <a href="javascript:void(0);" class="d-flex align-items-center collapsed collapse-arrow"
                            data-bs-toggle="collapse" data-bs-target="#primaryBorderOne" aria-expanded="false"
                            aria-controls="primaryBorderOne">
                            <i class="ti ti-chevron-down fs-18"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div id="primaryBorderOne" class="accordion-collapse collapse show border-top"
                      aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body mt-2">
                        {{ $t('Phrase') }}
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <div class="accordion-header" id="headingTwo">
                      <div class="accordion-button">
                        <div class="d-flex align-items-center flex-fill">
                          <h5>{{ $t('BankInformation') }}</h5>
                          <a href="javascript:void(0);" class="btn btn-sm btn-icon ms-auto" data-bs-toggle="modal"
                            data-bs-target="#edit_bank"><i class="ti ti-edit"></i></a>
                          <a href="javascript:void(0);" class="d-flex align-items-center collapsed collapse-arrow"
                            data-bs-toggle="collapse" data-bs-target="#primaryBorderTwo" aria-expanded="false"
                            aria-controls="primaryBorderTwo">
                            <i class="ti ti-chevron-down fs-18"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div id="primaryBorderTwo" class="accordion-collapse collapse border-top"
                      aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col-md-3">
                            <span class="d-inline-flex align-items-center">
                              {{ $t('BankName') }}
                            </span>
                            <h6 class="d-flex align-items-center fw-medium mt-1">
                              {{ $t('SwizIntenationalBank') }}
                            </h6>
                          </div>
                          <div class="col-md-3">
                            <span class="d-inline-flex align-items-center">
                              {{ $t('Bankaccountno') }}
                            </span>
                            <h6 class="d-flex align-items-center fw-medium mt-1">
                              159843014641
                            </h6>
                          </div>
                          <div class="col-md-3">
                            <span class="d-inline-flex align-items-center">
                              IFSC Code
                            </span>
                            <h6 class="d-flex align-items-center fw-medium mt-1">
                              ICI24504
                            </h6>
                          </div>
                          <div class="col-md-3">
                            <span class="d-inline-flex align-items-center"> {{ $t('Branch') }} </span>
                            <h6 class="d-flex align-items-center fw-medium mt-1">
                              Alabama USA
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <div class="accordion-header" id="headingThree">
                      <div class="accordion-button">
                        <div class="d-flex align-items-center justify-content-between flex-fill">
                          <h5>{{ $t('FamilyInformation') }}</h5>
                          <div class="d-flex">
                            <a href="javascript:void(0);" class="btn btn-icon btn-sm" data-bs-toggle="modal"
                              data-bs-target="#edit_familyinformation"><i class="ti ti-edit"></i></a>
                            <a href="javascript:void(0);" class="d-flex align-items-center collapsed collapse-arrow"
                              data-bs-toggle="collapse" data-bs-target="#primaryBorderThree" aria-expanded="false"
                              aria-controls="primaryBorderThree">
                              <i class="ti ti-chevron-down fs-18"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="primaryBorderThree" class="accordion-collapse collapse border-top"
                      aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col-md-3">
                            <span class="d-inline-flex align-items-center"> {{ $t('name') }} </span>
                            <h6 class="d-flex align-items-center fw-medium mt-1">
                              Hendry Peralt
                            </h6>
                          </div>
                          <div class="col-md-3">
                            <span class="d-inline-flex align-items-center">
                              {{ $t('Relationship') }}
                            </span>
                            <h6 class="d-flex align-items-center fw-medium mt-1">
                              {{ $t('Brother') }}
                            </h6>
                          </div>
                          <div class="col-md-3">
                            <span class="d-inline-flex align-items-center">
                              {{ $t('Dateofbirth') }}
                            </span>
                            <h6 class="d-flex align-items-center fw-medium mt-1">
                              25 {{ $t('May') }} 2014
                            </h6>
                          </div>
                          <div class="col-md-3">
                            <span class="d-inline-flex align-items-center"> {{ $t('phone') }} </span>
                            <h6 class="d-flex align-items-center fw-medium mt-1">
                              +1 265 6956 961
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="accordion-item">
                        <div class="row">
                          <div class="accordion-header" id="headingFour">
                            <div class="accordion-button">
                              <div class="d-flex align-items-center justify-content-between flex-fill">
                                <h5>{{ $t('EducationDetails') }}</h5>
                                <div class="d-flex">
                                  <a href="javascript:void(0);" class="btn btn-icon btn-sm" data-bs-toggle="modal"
                                    data-bs-target="#edit_education"><i class="ti ti-edit"></i></a>
                                  <a href="javascript:void(0);"
                                    class="d-flex align-items-center collapsed collapse-arrow" data-bs-toggle="collapse"
                                    data-bs-target="#primaryBorderFour" aria-expanded="false"
                                    aria-controls="primaryBorderFour">
                                    <i class="ti ti-chevron-down fs-18"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="primaryBorderFour" class="accordion-collapse collapse border-top"
                            aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              <div>
                                <div class="mb-3">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                      <span class="d-inline-flex align-items-center fw-normal">
                                        {{ $t('OxfordUniversity') }}
                                      </span>
                                      <h6 class="d-flex align-items-center mt-1">
                                        {{ $t('ComputerScience') }}
                                      </h6>
                                    </div>
                                    <p class="text-dark">2020 - 2022</p>
                                  </div>
                                </div>
                                <div class="mb-3">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                      <span class="d-inline-flex align-items-center fw-normal">
                                        {{ $t('CambridgeUniversity') }}
                                      </span>
                                      <h6 class="d-flex align-items-center mt-1">
                                        {{ $t('ComputerNetwork&Systems') }}
                                      </h6>
                                    </div>
                                    <p class="text-dark">2016- 2019</p>
                                  </div>
                                </div>
                                <div>
                                  <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                      <span class="d-inline-flex align-items-center fw-normal">
                                        {{ $t('OxfordSchool') }}
                                      </span>
                                      <h6 class="d-flex align-items-center mt-1">
                                        Grade X
                                      </h6>
                                    </div>
                                    <p class="text-dark">2012 - 2016</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="accordion-item">
                        <div class="row">
                          <div class="accordion-header" id="headingFive">
                            <div class="accordion-button collapsed">
                              <div class="d-flex align-items-center justify-content-between flex-fill">
                                <h5>{{ $t('Experience') }}</h5>
                                <div class="d-flex">
                                  <a href="javascript:void(0);" class="btn btn-icon btn-sm" data-bs-toggle="modal"
                                    data-bs-target="#edit_experience"><i class="ti ti-edit"></i></a>
                                  <a href="javascript:void(0);"
                                    class="d-flex align-items-center collapsed collapse-arrow" data-bs-toggle="collapse"
                                    data-bs-target="#primaryBorderFive" aria-expanded="false"
                                    aria-controls="primaryBorderFive">
                                    <i class="ti ti-chevron-down fs-18"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="primaryBorderFive" class="accordion-collapse collapse border-top"
                            aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              <div>
                                <div class="mb-3">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                      <h6 class="d-inline-flex align-items-center fw-medium">
                                        Google
                                      </h6>
                                      <span class="d-flex align-items-center badge bg-secondary-transparent mt-1"><i
                                          class="ti ti-point-filled me-1"></i>
                                        {{ $t('UI/UXDeveloper') }}</span>
                                    </div>
                                    <p class="text-dark">Jan 2013 - {{ $t('Present') }}</p>
                                  </div>
                                </div>
                                <div class="mb-3">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                      <h6 class="d-inline-flex align-items-center fw-medium">
                                        Salesforce
                                      </h6>
                                      <span class="d-flex align-items-center badge bg-secondary-transparent mt-1"><i
                                          class="ti ti-point-filled me-1"></i>
                                        {{ $t('WebDeveloper') }}</span>
                                    </div>
                                    <p class="text-dark">Dec 2012- Jan 2015</p>
                                  </div>
                                </div>
                                <div>
                                  <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                      <h6 class="d-inline-flex align-items-center fw-medium">
                                        {{ $t('HubSpot') }}
                                      </h6>
                                      <span class="d-flex align-items-center badge bg-secondary-transparent mt-1"><i
                                          class="ti ti-point-filled me-1"></i>
                                        {{ $t('SoftwareDeveloper') }}</span>
                                    </div>
                                    <p class="text-dark">Dec 2011- Jan 2012</p>
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
                    <div class="card-body">
                      <div class="contact-grids-tab p-0 mb-3">
                        <ul class="nav nav-underline" id="myTab" role="tablist">
                          <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="info-tab2" data-bs-toggle="tab"
                              data-bs-target="#basic-info2" type="button" role="tab" aria-selected="true">
                              {{ $t('projects') }}
                            </button>
                          </li>
                          <li class="nav-item" role="presentation">
                            <button class="nav-link" id="address-tab2" data-bs-toggle="tab" data-bs-target="#address2"
                              type="button" role="tab" aria-selected="false">
                              {{ $t('Assets') }}
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div class="tab-content" id="myTabContent3">
                        <div class="tab-pane fade show active" id="basic-info2" role="tabpanel"
                          aria-labelledby="info-tab2" tabindex="0">
                          <div class="row">
                            <div class="col-md-6 d-flex">
                              <div class="card flex-fill mb-4 mb-md-0">
                                <div class="card-body">
                                  <div class="d-flex align-items-center pb-3 mb-3 border-bottom">
                                    <router-link to="/projects/projects-details" class="flex-shrink-0 me-2">
                                      <img src="@/assets/img/social/project-03.svg" alt="Img" />
                                    </router-link>
                                    <div>
                                      <h6 class="mb-1">
                                        <router-link to="/projects/projects-details">{{ $t('WorldHealth')
                                          }}</router-link>
                                      </h6>
                                      <div class="d-flex align-items-center">
                                        <p class="mb-0 fs-13">8 {{ $t('Tasks') }}</p>
                                        <p class="fs-13">
                                          <span class="mx-1"><i class="ti ti-point-filled text-primary"></i></span>15
                                          {{ $t('Completed') }}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-md-6">
                                      <div>
                                        <span class="mb-1 d-block">{{ $t('Deadline') }}</span>
                                        <p class="text-dark">31 {{ $t('July') }} 2025</p>
                                      </div>
                                    </div>
                                    <div class="col-md-6">
                                      <div>
                                        <span class="mb-1 d-block">{{ $t('ProjectLead') }}</span>
                                        <a href="javascript:void(0);" class="fw-normal d-flex align-items-center">
                                          <img class="avatar avatar-sm rounded-circle me-2"
                                            src="@/assets/img/profiles/avatar-01.jpg" alt="Img" />
                                          Leona
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 d-flex">
                              <div class="card flex-fill mb-0">
                                <div class="card-body">
                                  <div class="d-flex align-items-center pb-3 mb-3 border-bottom">
                                    <router-link to="/projects/projects-details" class="flex-shrink-0 me-2">
                                      <img src="@/assets/img/social/project-01.svg" alt="Img" />
                                    </router-link>
                                    <div>
                                      <h6 class="mb-1 text-truncate">
                                        <router-link to="/projects/projects-details">
                                          {{ $t('HospitalAdministration') }}</router-link>
                                      </h6>
                                      <div class="d-flex align-items-center">
                                        <p class="mb-0 fs-13">8 {{ $t('Tasks') }}</p>
                                        <p class="fs-13">
                                          <span class="mx-1"><i class="ti ti-point-filled text-primary"></i></span>15
                                          {{ $t('Completed') }}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-md-6">
                                      <div>
                                        <span class="mb-1 d-block">{{ $t('Deadline') }}</span>
                                        <p class="text-dark">31 {{ $t('July') }} 2025</p>
                                      </div>
                                    </div>
                                    <div class="col-md-6">
                                      <div>
                                        <span class="mb-1 d-block">{{ $t('ProjectLead') }}</span>
                                        <a href="javascript:void(0);" class="fw-normal d-flex align-items-center">
                                          <img class="avatar avatar-sm rounded-circle me-2"
                                            src="@/assets/img/profiles/avatar-01.jpg" alt="Img" />
                                          Leona
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tab-pane fade" id="address2" role="tabpanel" aria-labelledby="address-tab2"
                          tabindex="0">
                          <div class="row">
                            <div class="col-md-12 d-flex">
                              <div class="card flex-fill">
                                <div class="card-body">
                                  <div class="row align-items-center">
                                    <div class="col-md-8">
                                      <div class="d-flex align-items-center">
                                        <router-link to="/projects/projects-details" class="flex-shrink-0 me-2">
                                          <img src="@/assets/img/products/product-05.jpg"
                                            class="img-fluid rounded-circle" alt="img" />
                                        </router-link>
                                        <div>
                                          <h6 class="mb-1">
                                            <router-link to="/projects/projects-details">Dell Laptop -
                                              #343556656</router-link>
                                          </h6>
                                          <div class="d-flex align-items-center">
                                            <p>
                                              <span class="text-primary">AST - 001<i
                                                  class="ti ti-point-filled text-primary mx-1"></i></span>{{
                                              $t('Assignedon') }}
                                              22
                                              Nov, 2022 {{ $t('10:32AM') }}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-md-3">
                                      <div>
                                        <span class="mb-1 d-block">{{ $t('AssignedBy') }}</span>
                                        <a href="javascript:void(0);" class="fw-normal d-flex align-items-center">
                                          <img class="avatar avatar-sm rounded-circle me-2"
                                            src="@/assets/img/profiles/avatar-01.jpg" alt="Img" />
                                          Andrew Symon
                                        </a>
                                      </div>
                                    </div>
                                    <div class="col-md-1">
                                      <div class="dropdown ms-2">
                                        <a href="javascript:void(0);" class="d-inline-flex align-items-center"
                                          data-bs-toggle="dropdown" aria-expanded="false">
                                          <i class="ti ti-dots-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end p-3">
                                          <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded-1"
                                              data-bs-toggle="modal" data-bs-target="#asset_info">{{ $t('ViewInfo')
                                              }}</a>
                                          </li>
                                          <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded-1"
                                              data-bs-toggle="modal" data-bs-target="#refuse_msg">{{ $t('RaiseIssue') }}
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-12 d-flex">
                              <div class="card flex-fill mb-0">
                                <div class="card-body">
                                  <div class="row align-items-center">
                                    <div class="col-md-8">
                                      <div class="d-flex align-items-center">
                                        <router-link to="/projects/projects-details" class="flex-shrink-0 me-2">
                                          <img src="@/assets/img/products/product-06.jpg"
                                            class="img-fluid rounded-circle" alt="img" />
                                        </router-link>
                                        <div>
                                          <h6 class="mb-1">
                                            <router-link to="/projects/projects-details">{{ $t('BluetoothMouse') }} -
                                              #478878</router-link>
                                          </h6>
                                          <div class="d-flex align-items-center">
                                            <p>
                                              <span class="text-primary">AST - 001<i
                                                  class="ti ti-point-filled text-primary mx-1"></i></span>{{
                                              $t('Assignedon') }}
                                              22
                                              Nov, 2022 {{ $t('10:32AM') }}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-md-3">
                                      <div>
                                        <span class="mb-1 d-block">{{ $t('AssignedBy') }}</span>
                                        <a href="javascript:void(0);" class="fw-normal d-flex align-items-center">
                                          <img class="avatar avatar-sm rounded-circle me-2"
                                            src="@/assets/img/profiles/avatar-01.jpg" alt="Img" />
                                          Andrew Symon
                                        </a>
                                      </div>
                                    </div>
                                    <div class="col-md-1">
                                      <div class="dropdown ms-2">
                                        <a href="javascript:void(0);" class="d-inline-flex align-items-center"
                                          data-bs-toggle="dropdown" aria-expanded="false">
                                          <i class="ti ti-dots-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end p-3">
                                          <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded-1"
                                              data-bs-toggle="modal" data-bs-target="#asset_info">{{ $t('ViewInfo')
                                              }}</a>
                                          </li>
                                          <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded-1"
                                              data-bs-toggle="modal" data-bs-target="#refuse_msg">{{ $t('RaiseIssue') }}
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
      <p class="mb-0">2014 - 2025 &copy; AronHR.</p>
      <p>{{ $t('designed') }} &amp; {{ $t('developedBy') }} <a href="javascript:void(0);" class="text-primary">{{
        $t('dreams') }}</a></p>
    </div>
  </div>
  <!-- /Page Wrapper -->
  <employee-details-modal></employee-details-modal>
</template>
<script>
export default {
  data() {
    return {

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