<template>
  <div class="row">
    <!-- Jobs Applicants -->
    <div class="col-xxl-4 d-flex">
      <div class="card flex-fill">
        <div
          class="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap"
        >
          <h5 class="mb-2">{{ $t('jobApplicants') }}</h5>
          <router-link to="/recuritment/job-list" class="btn btn-light btn-md mb-2"
            >{{ $t('viewAll') }}</router-link
          >
        </div>
        <div class="card-body">
          <ul
            class="nav nav-tabs tab-style-1 nav-justified d-sm-flex d-block p-0 mb-4"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <a
                class="nav-link fw-medium"
                data-bs-toggle="tab"
                data-bs-target="#openings"
                aria-current="page"
                href="#openings"
                aria-selected="true"
                role="tab"
                >{{ $t('openings') }}</a
              >
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link fw-medium active"
                data-bs-toggle="tab"
                data-bs-target="#applicants"
                href="#applicants"
                aria-selected="false"
                tabindex="-1"
                role="tab"
                >{{ $t('applicants') }}</a
              >
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade" id="openings">
              <div class="d-flex align-items-center justify-content-between mb-4">
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="avatar overflow-hidden flex-shrink-0 bg-gray-100"
                  >
                    <img
                      src="@/assets/img/icons/apple.svg"
                      class="img-fluid rounded-circle w-auto h-auto"
                      alt="img"
                    />
                  </a>
                  <div class="ms-2 overflow-hidden">
                    <p class="text-dark fw-medium text-truncate mb-0">
                      <a href="javascript:void(0);">{{ $t('seniorIOSDeveloper') }}</a>
                    </p>
                    <span class="fs-12">{{ $t('noOfOpenings') }} : 25 </span>
                  </div>
                </div>
                <a
                  href="javascript:void(0);"
                  class="btn btn-light btn-sm p-0 btn-icon d-flex align-items-center justify-content-center"
                  ><i class="ti ti-edit"></i
                ></a>
              </div>
              <div class="d-flex align-items-center justify-content-between mb-4">
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="avatar overflow-hidden flex-shrink-0 bg-gray-100"
                  >
                    <img
                      src="@/assets/img/icons/php.svg"
                      class="img-fluid w-auto h-auto"
                      alt="img"
                    />
                  </a>
                  <div class="ms-2 overflow-hidden">
                    <p class="text-dark fw-medium text-truncate mb-0">
                      <a href="javascript:void(0);">{{ $t('juniorPHPDeveloper') }}</a>
                    </p>
                    <span class="fs-12">{{ $t('noOfOpenings') }} : 20 </span>
                  </div>
                </div>
                <a
                  href="javascript:void(0);"
                  class="btn btn-light btn-sm p-0 btn-icon d-flex align-items-center justify-content-center"
                  ><i class="ti ti-edit"></i
                ></a>
              </div>
              <div class="d-flex align-items-center justify-content-between mb-4">
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="avatar overflow-hidden flex-shrink-0 bg-gray-100"
                  >
                    <img
                      src="@/assets/img/icons/react.svg"
                      class="img-fluid w-auto h-auto"
                      alt="img"
                    />
                  </a>
                  <div class="ms-2 overflow-hidden">
                    <p class="text-dark fw-medium text-truncate mb-0">
                      <a href="javascript:void(0);">{{ $t('juniorReactDeveloper') }} </a>
                    </p>
                    <span class="fs-12">{{ $t('noOfOpenings') }} : 30 </span>
                  </div>
                </div>
                <a
                  href="javascript:void(0);"
                  class="btn btn-light btn-sm p-0 btn-icon d-flex align-items-center justify-content-center"
                  ><i class="ti ti-edit"></i
                ></a>
              </div>
              <div class="d-flex align-items-center justify-content-between mb-0">
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="avatar overflow-hidden flex-shrink-0 bg-gray-100"
                  >
                    <img
                      src="@/assets/img/icons/laravel-icon.svg"
                      class="img-fluid w-auto h-auto"
                      alt="img"
                    />
                  </a>
                  <div class="ms-2 overflow-hidden">
                    <p class="text-dark fw-medium text-truncate mb-0">
                      <a href="javascript:void(0);">{{ $t('seniorLaravelDeveloper') }}</a>
                    </p>
                    <span class="fs-12">{{ $t('noOfOpenings') }} : 40 </span>
                  </div>
                </div>
                <a
                  href="javascript:void(0);"
                  class="btn btn-light btn-sm p-0 btn-icon d-flex align-items-center justify-content-center"
                  ><i class="ti ti-edit"></i
                ></a>
              </div>
            </div>
            <div class="tab-pane fade show active" id="applicants">
              <div class="d-flex align-items-center justify-content-between mb-4">
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="avatar overflow-hidden flex-shrink-0"
                  >
                    <img
                      src="@/assets/img/users/user-09.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                    />
                  </a>
                  <div class="ms-2 overflow-hidden">
                    <p class="text-dark fw-medium text-truncate mb-0">
                      <a href="javascript:void(0);">Brian Villalobos</a>
                    </p>
                    <span class="fs-13 d-inline-flex align-items-center"
                      >Exp : 5+ {{ $t('years') }}<i
                        class="ti ti-circle-filled fs-4 mx-2 text-primary"
                      ></i
                      >USA</span
                    >
                  </div>
                </div>
                <span class="badge badge-secondary badge-xs">{{ $t('UI/UXDesigner') }}</span>
              </div>
              <div class="d-flex align-items-center justify-content-between mb-4">
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="avatar overflow-hidden flex-shrink-0"
                  >
                    <img
                      src="@/assets/img/users/user-32.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                    />
                  </a>
                  <div class="ms-2 overflow-hidden">
                    <p class="text-dark fw-medium text-truncate mb-0">
                      <a href="javascript:void(0);">Anthony Lewis</a>
                    </p>
                    <span class="fs-13 d-inline-flex align-items-center"
                      >Exp : 4+ {{ $t('years') }}<i
                        class="ti ti-circle-filled fs-4 mx-2 text-primary"
                      ></i
                      >USA</span
                    >
                  </div>
                </div>
                <span class="badge badge-info badge-xs">{{ $t('pythonDeveloper') }}</span>
              </div>
              <div class="d-flex align-items-center justify-content-between mb-4">
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="avatar overflow-hidden flex-shrink-0"
                  >
                    <img
                      src="@/assets/img/users/user-32.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                    />
                  </a>
                  <div class="ms-2 overflow-hidden">
                    <p class="text-dark fw-medium text-truncate mb-0">
                      <a href="javascript:void(0);">Stephan Peralt</a>
                    </p>
                    <span class="fs-13 d-inline-flex align-items-center"
                      >Exp : 6+ {{ $t('years') }}<i
                        class="ti ti-circle-filled fs-4 mx-2 text-primary"
                      ></i
                      >USA</span
                    >
                  </div>
                </div>
                <span class="badge badge-pink badge-xs">{{ $t('androidDeveloper') }}</span>
              </div>
              <div class="d-flex align-items-center justify-content-between mb-0">
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="avatar overflow-hidden flex-shrink-0"
                  >
                    <img
                      src="@/assets/img/users/user-34.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                    />
                  </a>
                  <div class="ms-2 overflow-hidden">
                    <p class="text-dark fw-medium text-truncate mb-0">
                      <a href="javascript:void(0);">Doglas Martini</a>
                    </p>
                    <span class="fs-13 d-inline-flex align-items-center"
                      >Exp : 2+ {{ $t('years') }}<i
                        class="ti ti-circle-filled fs-4 mx-2 text-primary"
                      ></i
                      >USA</span
                    >
                  </div>
                </div>
                <span class="badge badge-purple badge-xs">{{ $t('reactDeveloper') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Jobs Applicants -->

    <!-- Employees -->
    <div class="col-xxl-4 col-xl-6 d-flex">
      <div class="card flex-fill">
        <div
          class="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap"
        >
          <h5 class="mb-2">{{ $t('employees') }}</h5>
          <router-link to="/employee/employee-list" class="btn btn-light btn-md mb-2"
            >{{ $t('viewAll') }}</router-link
          >
        </div>
        <div class="card-body p-0">
          <div class="table-responsive">
            <table class="table table-nowrap mb-0">
              <thead>
                <tr>
                  <th>{{ $t('name') }}</th>
                  <th>{{ $t('department') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <a href="javascript:void(0);" class="avatar">
                        <img
                          src="@/assets/img/users/user-32.jpg"
                          class="img-fluid rounded-circle"
                          alt="img"
                        />
                      </a>
                      <div class="ms-2">
                        <h6 class="fw-medium">
                          <a href="javascript:void(0);">Anthony Lewis</a>
                        </h6>
                        <span class="fs-12">{{ $t('finance') }}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="badge badge-secondary-transparent badge-xs">
                      {{ $t('finance') }}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <a href="javascript:void(0);" class="avatar">
                        <img
                          src="@/assets/img/users/user-09.jpg"
                          class="img-fluid rounded-circle"
                          alt="img"
                        />
                      </a>
                      <div class="ms-2">
                        <h6 class="fw-medium">
                          <a href="javascript:void(0);">Brian Villalobos</a>
                        </h6>
                        <span class="fs-12">{{ $t('PHPDeveloper') }}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="badge badge-danger-transparent badge-xs"
                      >{{ $t('development') }}</span
                    >
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <a href="javascript:void(0);" class="avatar">
                        <img
                          src="@/assets/img/users/user-01.jpg"
                          class="img-fluid rounded-circle"
                          alt="img"
                        />
                      </a>
                      <div class="ms-2">
                        <h6 class="fw-medium">
                          <a href="javascript:void(0);">Stephan Peralt</a>
                        </h6>
                        <span class="fs-12">{{ $t('executive') }}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="badge badge-info-transparent badge-xs">{{ $t('marketing') }}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <a href="javascript:void(0);" class="avatar">
                        <img
                          src="@/assets/img/users/user-34.jpg"
                          class="img-fluid rounded-circle"
                          alt="img"
                        />
                      </a>
                      <div class="ms-2">
                        <h6 class="fw-medium">
                          <a href="javascript:void(0);">Doglas Martini</a>
                        </h6>
                        <span class="fs-12">{{ $t('projectManager') }}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="badge badge-purple-transparent badge-xs">{{ $t('manager') }}</span>
                  </td>
                </tr>
                <tr>
                  <td class="border-0">
                    <div class="d-flex align-items-center">
                      <a href="javascript:void(0);" class="avatar">
                        <img
                          src="@/assets/img/users/user-37.jpg"
                          class="img-fluid rounded-circle"
                          alt="img"
                        />
                      </a>
                      <div class="ms-2">
                        <h6 class="fw-medium">
                          <a href="javascript:void(0);">Anthony Lewis</a>
                        </h6>
                        <span class="fs-12">{{ $t('UI/UXDesigner') }}</span>
                      </div>
                    </div>
                  </td>
                  <td class="border-0">
                    <span class="badge badge-pink-transparent badge-xs"
                      >{{ $t('UI/UXDesigner') }}</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- /Employees -->

    <!-- Todo -->
    <div class="col-xxl-4 col-xl-6 d-flex">
      <div class="card flex-fill">
        <div
          class="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap"
        >
          <h5 class="mb-2">{{ $t('todo') }}</h5>
          <div class="d-flex align-items-center">
            <div class="dropdown mb-2 me-2">
              <a
                href="javascript:void(0);"
                class="btn btn-white border btn-sm d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <i class="ti ti-calendar me-1"></i>{{ $t('today') }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >{{ $t('thisMonth') }}</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >{{ $t('thisWeek') }}</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('today') }}</a>
                </li>
              </ul>
            </div>
            <a
              href="javascript:void(0);"
              class="btn btn-primary btn-icon btn-xs rounded-circle d-flex align-items-center justify-content-center p-0 mb-2"
              data-bs-toggle="modal"
              data-bs-target="#add_todo"
              ><i class="ti ti-plus fs-16"></i
            ></a>
          </div>
        </div>
        <div class="card-body">
          <div
            class="d-flex align-items-center todo-item border p-2 br-5 mb-2"
            :class="{ 'todo-strike': isClicked }"
            @click="toggleClicked"
          >
            <i class="ti ti-grid-dots me-2"></i>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="todo1" />
              <label class="form-check-label fw-medium" for="todo1">{{ $t('addHolidays') }}</label>
            </div>
          </div>
          <div
            class="d-flex align-items-center todo-item border p-2 br-5 mb-2"
            :class="{ 'todo-strike': isClickedOne }"
            @click="toggleClickedOne"
          >
            <i class="ti ti-grid-dots me-2"></i>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="todo2" />
              <label class="form-check-label fw-medium" for="todo2"
                >{{ $t('addMeetingtoClient') }}</label
              >
            </div>
          </div>
          <div
            class="d-flex align-items-center todo-item border p-2 br-5 mb-2"
            :class="{ 'todo-strike': isClickedTwo }"
            @click="toggleClickedTwo"
          >
            <i class="ti ti-grid-dots me-2"></i>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="todo3" />
              <label class="form-check-label fw-medium" for="todo3"
                >{{ $t('chatWith') }} Adrian</label
              >
            </div>
          </div>
          <div
            class="d-flex align-items-center todo-item border p-2 br-5 mb-2"
            :class="{ 'todo-strike': isClickedThree }"
            @click="toggleClickedThree"
          >
            <i class="ti ti-grid-dots me-2"></i>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="todo4" />
              <label class="form-check-label fw-medium" for="todo4"
                >{{ $t('managementCall') }}</label
              >
            </div>
          </div>
          <div
            class="d-flex align-items-center todo-item border p-2 br-5 mb-2"
            :class="{ 'todo-strike': isClickedFour }"
            @click="toggleClickedFour"
          >
            <i class="ti ti-grid-dots me-2"></i>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="todo5" />
              <label class="form-check-label fw-medium" for="todo5">{{ $t('addPayroll') }}</label>
            </div>
          </div>
          <div
            class="d-flex align-items-center todo-item border p-2 br-5 mb-0"
            :class="{ 'todo-strike': isClickedFive }"
            @click="toggleClickedFive"
          >
            <i class="ti ti-grid-dots me-2"></i>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="todo6" />
              <label class="form-check-label fw-medium" for="todo6"
                >{{ $t('addPolicyforIncrement') }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Todo -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      isClicked: false,
      isClickedOne: false,
      isClickedTwo: false,
      isClickedThree: false,
      isClickedFour: false,
      isClickedFive: false,
    };
  },
  methods: {
    toggleClicked() {
      this.isClicked = !this.isClicked;
    },
    toggleClickedOne() {
      this.isClickedOne = !this.isClickedOne;
    },
    toggleClickedTwo() {
      this.isClickedTwo = !this.isClickedTwo;
    },
    toggleClickedThree() {
      this.isClickedThree = !this.isClickedThree;
    },
    toggleClickedFour() {
      this.isClickedFour = !this.isClickedFour;
    },
    toggleClickedFive() {
      this.isClickedFive = !this.isClickedFive;
    },
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
