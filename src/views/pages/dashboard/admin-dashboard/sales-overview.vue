<template>
  <div class="row">
    <!-- Sales Overview -->
    <div class="col-xl-7 d-flex">
      <div class="card flex-fill">
        <div class="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
          <h5 class="mb-2">{{ $t('salesOverview') }}</h5>
          <div class="d-flex align-items-center">
            <div class="dropdown mb-2">
              <a href="#"
                class="dropdown-toggle btn btn-white border-0 btn-sm d-inline-flex align-items-center fs-13 me-2"
                data-bs-toggle="dropdown">
                {{ $t('allDepartments') }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="#" class="dropdown-item rounded-1">{{ $t('UI/UXDesigner') }}</a>
                </li>
                <li>
                  <a href="#" class="dropdown-item rounded-1">{{ $t('HRManager') }}</a>
                </li>
                <li>
                  <a href="#" class="dropdown-item rounded-1">{{ $t('juniorTester') }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-body pb-0">
          <div class="d-flex align-items-center justify-content-between flex-wrap">
            <div class="d-flex align-items-center mb-1">
              <p class="fs-13 text-gray-9 me-3 mb-0">
                <i class="ti ti-square-filled me-2 text-primary"></i>{{ $t('income') }}
              </p>
              <p class="fs-13 text-gray-9 mb-0">
                <i class="ti ti-square-filled me-2 text-gray-2"></i>{{ $t('expenses') }}
              </p>
            </div>
            <p class="fs-13 mb-1">{{ $t('lastUpdatedat11:30PM') }}</p>
          </div>
          <div id="sales-income">
            <apexchart type="bar" height="290" :options="salesIncome.inCome" :series="salesIncome.series">
            </apexchart>
          </div>
        </div>
      </div>
    </div>
    <!-- /Sales Overview -->

    <!-- Invoices -->
    <div class="col-xl-5 d-flex">
      <div class="card flex-fill">
        <div class="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
          <h5 class="mb-2">{{ $t('invoices') }}</h5>
          <div class="d-flex align-items-center">
            <div class="dropdown mb-2">
              <a href="#"
                class="dropdown-toggle btn btn-white btn-sm d-inline-flex align-items-center fs-13 me-2 border-0"
                data-bs-toggle="dropdown">
                {{ $t('invoices') }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="#" class="dropdown-item rounded-1">{{ $t('invoices') }}</a>
                </li>
                <li>
                  <a href="#" class="dropdown-item rounded-1">{{ $t('paid') }}</a>
                </li>
                <li>
                  <a href="#" class="dropdown-item rounded-1">{{ $t('unpaid') }}</a>
                </li>
              </ul>
            </div>
            <div class="dropdown mb-2">
              <a href="#" class="btn btn-white border btn-sm d-inline-flex align-items-center"
                data-bs-toggle="dropdown">
                <i class="ti ti-calendar me-1"></i>{{ $t('thisWeek') }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="#" class="dropdown-item rounded-1">{{ $t('thisMonth') }}</a>
                </li>
                <li>
                  <a href="#" class="dropdown-item rounded-1">{{ $t('thisWeek') }}</a>
                </li>
                <li>
                  <a href="#" class="dropdown-item rounded-1">{{ $t('today') }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-body pt-2">
          <div class="table-responsive pt-1">
            <table class="table table-nowrap table-borderless mb-0">
              <tbody>
                <tr>
                  <td class="px-0">
                    <div class="d-flex align-items-center">
                      <router-link to="/sales/invoice-details" class="avatar avatar-md">
                        <img src="@/assets/img/users/user-39.jpg" class="img-fluid rounded-circle" alt="img" />
                      </router-link>
                      <div class="ms-2">
                        <h6 class="fw-medium">
                          <router-link to="/sales/invoice-details">{{ $t('redesignWebsite') }}</router-link>
                        </h6>
                        <span class="fs-13 d-inline-flex align-items-center">#INVOO2<i
                            class="ti ti-circle-filled fs-4 mx-1 text-primary"></i>{{ $t('logistics') }}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fs-13 mb-1">{{ $t('payment') }}</p>
                    <h6 class="fw-medium">$3560</h6>
                  </td>
                  <td class="px-0 text-end">
                    <span class="badge badge-danger-transparent badge-xs d-inline-flex align-items-center"><i
                        class="ti ti-circle-filled fs-5 me-1"></i>{{ $t('unpaid') }}</span>
                  </td>
                </tr>
                <tr>
                  <td class="px-0">
                    <div class="d-flex align-items-center">
                      <router-link to="/sales/invoice-details" class="avatar avatar-md">
                        <img src="@/assets/img/users/user-40.jpg" class="img-fluid rounded-circle" alt="img" />
                      </router-link>
                      <div class="ms-2">
                        <h6 class="fw-medium">
                          <router-link to="/sales/invoice-details">{{ $t('moduleCompletion') }}</router-link>
                        </h6>
                        <span class="fs-13 d-inline-flex align-items-center">#INVOO5<i
                            class="ti ti-circle-filled fs-4 mx-1 text-primary"></i>Yip Corp</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fs-13 mb-1">{{ $t('payment') }}</p>
                    <h6 class="fw-medium">$4175</h6>
                  </td>
                  <td class="px-0 text-end">
                    <span class="badge badge-danger-transparent badge-xs d-inline-flex align-items-center"><i
                        class="ti ti-circle-filled fs-5 me-1"></i>{{ $t('unpaid') }}</span>
                  </td>
                </tr>
                <tr>
                  <td class="px-0">
                    <div class="d-flex align-items-center">
                      <router-link to="/sales/invoice-details" class="avatar avatar-md">
                        <img src="@/assets/img/users/user-55.jpg" class="img-fluid rounded-circle" alt="img" />
                      </router-link>
                      <div class="ms-2">
                        <h6 class="fw-medium">
                          <router-link to="/sales/invoice-details">{{ $t('changeOnEmpModule') }}</router-link>
                        </h6>
                        <span class="fs-13 d-inline-flex align-items-center">#INVOO3<i
                            class="ti ti-circle-filled fs-4 mx-1 text-primary"></i>Ignis LLP</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fs-13 mb-1">{{ $t('payment') }}</p>
                    <h6 class="fw-medium">$6985</h6>
                  </td>
                  <td class="px-0 text-end">
                    <span class="badge badge-danger-transparent badge-xs d-inline-flex align-items-center"><i
                        class="ti ti-circle-filled fs-5 me-1"></i>{{ $t('unpaid') }}</span>
                  </td>
                </tr>
                <tr>
                  <td class="px-0">
                    <div class="d-flex align-items-center">
                      <router-link to="/sales/invoice-details" class="avatar avatar-md">
                        <img src="@/assets/img/users/user-42.jpg" class="img-fluid rounded-circle" alt="img" />
                      </router-link>
                      <div class="ms-2">
                        <h6 class="fw-medium">
                          <router-link to="/sales/invoice-details">{{ $t('changesOnTheBoard') }}</router-link>
                        </h6>
                        <span class="fs-13 d-inline-flex align-items-center">#INVOO2<i
                            class="ti ti-circle-filled fs-4 mx-1 text-primary"></i>Ignis LLP</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fs-13 mb-1">{{ $t('payment') }}</p>
                    <h6 class="fw-medium">$1457</h6>
                  </td>
                  <td class="px-0 text-end">
                    <span class="badge badge-danger-transparent badge-xs d-inline-flex align-items-center"><i
                        class="ti ti-circle-filled fs-5 me-1"></i>{{ $t('unpaid') }}</span>
                  </td>
                </tr>
                <tr>
                  <td class="px-0">
                    <div class="d-flex align-items-center">
                      <router-link to="/sales/invoice-details" class="avatar avatar-md">
                        <img src="@/assets/img/users/user-44.jpg" class="img-fluid rounded-circle" alt="img" />
                      </router-link>
                      <div class="ms-2">
                        <h6 class="fw-medium">
                          <router-link to="/sales/invoice-details">{{ $t('hospitalManagement') }}</router-link>
                        </h6>
                        <span class="fs-13 d-inline-flex align-items-center">#INVOO6<i
                            class="ti ti-circle-filled fs-4 mx-1 text-primary"></i>HCL Corp</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fs-13 mb-1">{{ $t('payment') }}</p>
                    <h6 class="fw-medium">$6458</h6>
                  </td>
                  <td class="px-0 text-end">
                    <span class="badge badge-success-transparent badge-xs d-inline-flex align-items-center"><i
                        class="ti ti-circle-filled fs-5 me-1"></i>{{ $t('paid') }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <router-link to="/sales/invoices" class="btn btn-light btn-md w-100 mt-2">{{ $t('viewAll') }}</router-link>
        </div>
      </div>
    </div>
    <!-- /Invoices -->
  </div>
</template>
<script>
import { salesIncome } from "./data";

export default {
  data() {
    return {
      salesIncome: salesIncome,
    };
  },
};
</script>
