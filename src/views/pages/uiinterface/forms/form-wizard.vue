<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper cardhead">
    <div class="content container-fluid">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">{{ $t('FormWizard') }}</h3>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <div class="row">
        <!-- Lightbox -->
        <div class="col-lg-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title mb-0">{{ $t('BasicWizard') }}</h4>
            </div>
            <div class="card-body">
              <div id="basic-pills-wizard" class="twitter-bs-wizard">
                <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                  <li
                    ref="sellerTab"
                    class="nav-item flex-fill"
                    role="presentation"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Seller Details"
                  >
                    <a
                      ref="sellerLink"
                      class="nav-link active rounded-circle mx-auto d-flex align-items-center justify-content-center"
                    >
                      <i class="far fa-user"></i>
                    </a>
                  </li>
                  <li
                    ref="companyTab"
                    class="nav-item flex-fill"
                    role="presentation"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Company Document"
                  >
                    <a
                      ref="companyLink"
                      class="nav-link rounded-circle mx-auto d-flex align-items-center justify-content-center"
                    >
                      <i class="fas fa-map-pin"></i>
                    </a>
                  </li>
                  <li
                    ref="bankTab"
                    class="nav-item flex-fill"
                    role="presentation"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Bank Details"
                  >
                    <a
                      ref="bankLink"
                      class="nav-link rounded-circle mx-auto d-flex align-items-center justify-content-center"
                    >
                      <i class="fas fa-credit-card"></i>
                    </a>
                  </li>
                </ul>
                <!-- wizard-nav -->

                <div class="tab-content twitter-bs-wizard-tab-content mt-4">
                  <div class="tab-pane active" id="seller-details">
                    <div class="mb-4">
                      <h5>{{ $t('EnterYourPersonalDetails') }}</h5>
                    </div>
                    <form>
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label for="basicpill-firstname-input" class="form-label"
                              >{{ $t('FirstName') }}</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              id="basicpill-firstname-input"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label for="basicpill-lastname-input" class="form-label"
                              >{{ $t('LastName') }}</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              id="basicpill-lastname-input"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label for="basicpill-phoneno-input" class="form-label"
                              >{{ $t('phone') }}</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              id="basicpill-phoneno-input"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label for="basicpill-email-input" class="form-label"
                              >{{ $t('Email') }}</label
                            >
                            <input
                              type="email"
                              class="form-control"
                              id="basicpill-email-input"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                    <ul class="pager wizard twitter-bs-wizard-pager-link">
                      <li class="next">
                        <a
                          href="javascript: void(0);"
                          class="btn btn-primary"
                          @click="nextTab"
                          >{{ $t('Next') }} <i class="bx bx-chevron-right ms-1"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                  <!-- tab pane -->
                  <div class="tab-pane" id="company-document">
                    <div>
                      <div class="mb-4">
                        <h5>{{ $t('EnterYourAddress') }}</h5>
                      </div>
                      <form>
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label for="basicpill-pancard-input" class="form-label"
                                >{{ $t('Address1') }}</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                id="basicpill-pancard-input"
                              />
                            </div>
                          </div>

                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label for="basicpill-vatno-input" class="form-label"
                                >{{ $t('Address2') }}</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                id="basicpill-vatno-input"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label for="basicpill-cstno-input" class="form-label"
                                >{{ $t('Landmark') }}</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                id="basicpill-cstno-input"
                              />
                            </div>
                          </div>

                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label for="basicpill-servicetax-input" class="form-label"
                                >{{ $t('Town') }}</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                id="basicpill-servicetax-input"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                      <ul class="pager wizard twitter-bs-wizard-pager-link">
                        <li class="previous">
                          <a
                            href="javascript: void(0);"
                            class="btn btn-primary"
                            @click="previousTab"
                            ><i class="bx bx-chevron-left me-1"></i> {{ $t('Previous') }}</a
                          >
                        </li>
                        <li class="next">
                          <a
                            href="javascript: void(0);"
                            class="btn btn-primary"
                            @click="nextTab"
                            >{{ $t('Next') }} <i class="bx bx-chevron-right ms-1"></i
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- tab pane -->
                  <div class="tab-pane" id="bank-detail">
                    <div>
                      <div class="mb-4">
                        <h5>{{ $t('PaymentDetails') }}</h5>
                      </div>
                      <form>
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label for="basicpill-namecard-input" class="form-label"
                                >{{ $t('NameonCard') }}</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                id="basicpill-namecard-input"
                              />
                            </div>
                          </div>

                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label class="form-label">{{ $t('CreditCardType') }}</label>
                              <select class="form-select">
                                <option selected>{{ $t('SelectCardType') }}</option>
                                <option value="AE">{{ $t('AmericanExpress') }}</option>
                                <option value="VI">{{ $t('Visa') }}</option>
                                <option value="MC">{{ $t('MasterCard') }}</option>
                                <option value="DI">{{ $t('Discover') }}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label for="basicpill-cardno-input" class="form-label"
                                >{{ $t('CreditCardNumber') }}</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                id="basicpill-cardno-input"
                              />
                            </div>
                          </div>

                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label
                                for="basicpill-card-verification-input"
                                class="form-label"
                                >{{ $t('CardVerificationNumber') }}</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                id="basicpill-card-verification-input"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label for="basicpill-expiration-input" class="form-label"
                                >{{ $t('ExpirationDate') }}</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                id="basicpill-expiration-input"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                      <ul class="pager wizard twitter-bs-wizard-pager-link">
                        <li class="previous">
                          <a
                            href="javascript: void(0);"
                            class="btn btn-primary"
                            @click="previousTab"
                            ><i class="bx bx-chevron-left me-1"></i> {{ $t('Previous') }}</a
                          >
                        </li>
                        <li class="float-end">
                          <a
                            href="javascript: void(0);"
                            class="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target=".confirmModal"
                            >{{ $t('SaveChanges') }}</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- tab pane -->
                </div>
                <!-- end tab content -->
              </div>
            </div>
            <!-- end card body -->
          </div>
        </div>
        <!-- /Wizard -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const sellerTab = ref(null);
    const companyTab = ref(null);
    const bankTab = ref(null);

    const sellerLink = ref(null);
    const companyLink = ref(null);
    const bankLink = ref(null);

    const nextTab = () => {
      // Logic to navigate to the next tab
    };

    const previousTab = () => {
      // Logic to navigate to the previous tab
    };

    onMounted(() => {
      // Logic for initialization
    });

    return {
      sellerTab,
      companyTab,
      bankTab,
      sellerLink,
      companyLink,
      bankLink,
      nextTab,
      previousTab,
    };
  },
};
</script>
