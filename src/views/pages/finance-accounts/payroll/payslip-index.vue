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
            <a href="javascript:void(0);" class="btn btn-dark d-flex align-items-center"><i
                class="ti ti-download me-2"></i>{{ $t('Download') }}</a>
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

      <!-- Invoices -->
      <div>
        <div class="row">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <div class="row justify-content-between align-items-center border-bottom mb-3">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <div class="mb-2">
                        <img src="@/assets/img/logo.svg" class="img-fluid" alt="logo" />
                      </div>
                      <p>3099 Kennedy Court Framingham, MA 01702</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="text-end mb-3">
                      <h5 class="text-gray mb-1">
                        Payslip No <span class="text-primary"> #PS4283</span>
                      </h5>
                      <p class="fw-medium">
                        {{ $t('SalaryMonth') }} : <span class="text-dark">{{ $t('October') }} 2024</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="row border-bottom align-items-center mb-3">
                  <div class="col-md-5">
                    <div class="mb-3">
                      <p class="text-dark mb-2 fw-semibold">{{ $t('From') }}</p>
                      <div>
                        <h4 class="mb-1">XYZ Technologies</h4>
                        <p class="mb-1">2077 Chicago Avenue Orosi, CA 93647</p>
                        <p class="mb-1">
                          {{ $t('Email') }} : <span class="text-dark">xyztech@example.com</span>
                        </p>
                        <p>{{ $t('phone ') }}: <span class="text-dark">+1 987 654 3210</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="mb-3">
                      <p class="text-dark mb-2 fw-semibold">To</p>
                      <div>
                        <h4 class="mb-1">Anthony Lewis</h4>
                        <p class="mb-1">{{ $t('WebDesigner') }}</p>
                        <p class="mb-1">
                          {{ $t('Email') }}  : <span class="text-dark">anthony@example.com</span>
                        </p>
                        <p>{{ $t('phone ') }} : <span class="text-dark">+1 458 268 4738</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 class="text-center mb-4">{{ $t('PayslipforthemothofOctober2024') }}</h5>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="list-group mb-3">
                        <div class="list-group-item bg-light p-3 border-bottom-0">
                          <h6>{{ $t('earnings') }}</h6>
                        </div>
                        <div class="list-group-item">
                          <div class="d-flex align-items-center justify-content-between">
                            <p class="mb-0">{{ $t('BasicSalary') }}</p>
                            <h6 class="fw-medium">$3000</h6>
                          </div>
                        </div>
                        <div class="list-group-item">
                          <div class="d-flex align-items-center justify-content-between">
                            <p class="mb-0">{{ $t('HouseRentAllowance(H.R.A.)') }}</p>
                            <h6 class="fw-medium">$1000</h6>
                          </div>
                        </div>
                        <div class="list-group-item">
                          <div class="d-flex align-items-center justify-content-between">
                            <p class="mb-0">{{ $t('Conveyance') }}</p>
                            <h6 class="fw-medium">$200</h6>
                          </div>
                        </div>
                        <div class="list-group-item">
                          <div class="d-flex align-items-center justify-content-between">
                            <p class="mb-0">{{ $t('OtherAllowance') }}</p>
                            <h6 class="fw-medium">$100</h6>
                          </div>
                        </div>
                        <div class="list-group-item">
                          <div class="d-flex align-items-center justify-content-between">
                            <p class="mb-0">{{ $t('TotalEarnings') }}</p>
                            <h6 class="fw-medium">$4300</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="list-group mb-3">
                        <div class="list-group-item bg-light p-3 border-bottom-0">
                          <h6>{{ $t('Deductions') }}</h6>
                        </div>
                        <div class="list-group-item">
                          <div class="d-flex align-items-center justify-content-between">
                            <p class="mb-0">{{ $t('TaxDeductedatSource(T.D.S.)') }}</p>
                            <h6 class="fw-medium">$200</h6>
                          </div>
                        </div>
                        <div class="list-group-item">
                          <div class="d-flex align-items-center justify-content-between">
                            <p class="mb-0">{{ $t('ProvidentFund') }}</p>
                            <h6 class="fw-medium">$300</h6>
                          </div>
                        </div>
                        <div class="list-group-item">
                          <div class="d-flex align-items-center justify-content-between">
                            <p class="mb-0">ESI</p>
                            <h6 class="fw-medium">$150</h6>
                          </div>
                        </div>
                        <div class="list-group-item">
                          <div class="d-flex align-items-center justify-content-between">
                            <p class="mb-0">Loan</p>
                            <h6 class="fw-medium">$50</h6>
                          </div>
                        </div>
                        <div class="list-group-item">
                          <div class="d-flex align-items-center justify-content-between">
                            <p class="mb-0">{{ $t('TotalEarnings') }}</p>
                            <h6 class="fw-medium">$700</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>
                      {{ $t('NetSalary') }} :
                      <span class="text-gray-9 fw-medium">
                        $3600({{ $t('Threethousandsixhundredonly') }})</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Invoices -->
    </div>

    <!-- Footer -->
    <div class="footer d-sm-flex align-items-center justify-content-between bg-white border-top p-3">
      <p class="mb-0">2014 - 2025 &copy; AronHR.</p>
      <p>
        {{$t('designed')}} & {{$t('developedBy')}}
        <a href="javascript:void(0);" class="text-primary">{{$t('dreams')}}</a>
      </p>
    </div>
    <!-- /Footer -->
  </div>
  <!-- /Page Wrapper -->
</template>
<script>
export default {
  data() {
    return {
      title: "Payslip",
      text: "HR",
      text1: "Payslip",
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
