<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper cardhead">
    <div class="content">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col">
            <h3 class="page-title">{{ $t('Grid&Gutters') }}</h3>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <div class="row">
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">{{ $t('FormGrid') }}</div>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label class="form-label">{{ $t('FirstName') }}</label>
                  <input type="text" class="form-control" placeholder="First Name" />
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">{{ $t('LastName') }}</label>
                  <input type="text" class="form-control" placeholder="Last Name" />
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">{{ $t('Address') }}</label>
                  <div class="row">
                    <div class="col-xl-12 mb-3">
                      <input type="text" class="form-control" placeholder="Street" />
                    </div>
                    <div class="col-xl-12 mb-3">
                      <input type="text" class="form-control" placeholder="Landmark" />
                    </div>
                    <div class="col-xxl-6 col-xl-12 mb-3">
                      <input type="text" class="form-control" placeholder="City" />
                    </div>
                    <div class="col-xxl-6 col-xl-12 mb-3">
                      <vue-select
                        :options="FormState"
                        id="formstate"
                        placeholder="State"
                      />
                    </div>
                    <div class="col-xxl-6 col-xl-12 mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Postal/Zip code"
                      />
                    </div>
                    <div class="col-xxl-6 col-xl-12 mb-3">
                      <vue-select
                        :options="FormCountry"
                        id="formcountry"
                        placeholder="Country"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="row">
                    <div class="col-xl-12 mb-3">
                      <label class="form-label">{{ $t('Email') }}</label>
                      <input type="email" class="form-control" placeholder="Email" />
                    </div>
                    <div class="col-xl-12 mb-3">
                      <label class="form-label">DOB</label>
                      <date-picker
                        v-model="startdate"
                        placeholder="From"
                        class="form-control"
                        :editable="true"
                        :clearable="false"
                        :input-format="dateFormat"
                      />
                    </div>
                    <div class="col-xl-12 mb-3">
                      <div class="row">
                        <label class="form-label mb-1">{{ $t('MaritialStatus') }}</label>
                        <div class="col-xl-6">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="status-married"
                              required=""
                            />
                            <label class="form-check-label" for="status-married">
                              Married
                            </label>
                          </div>
                        </div>
                        <div class="col-xl-6">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="status-unmarried"
                              required=""
                            />
                            <label class="form-check-label" for="status-unmarried">
                              Single
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-12"></div>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">{{ $t('ContactNumber') }}</label>
                  <input type="number" class="form-control" placeholder="Phone Number" />
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">{{ $t('AlternativeContact') }}</label>
                  <input type="number" class="form-control" placeholder="Phone Number" />
                </div>
                <div class="col-md-12">
                  <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck"> {{ $t('Checkmeout') }} </label>
                  </div>
                </div>
                <div class="col-md-12">
                  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">{{ $t('Signin') }}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">{{ $t('Gutters') }}</div>
            </div>
            <div class="card-body">
              <form class="row g-3 mt-0">
                <div class="col-md-6">
                  <label class="form-label">{{ $t('FirstName') }}</label>
                  <input type="text" class="form-control" placeholder="First Name" />
                </div>
                <div class="col-md-6">
                  <label class="form-label">{{ $t('LastName') }}</label>
                  <input type="text" class="form-control" placeholder="Last Name" />
                </div>
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">{{ $t('Email') }}</label>
                  <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">{{ $t('Password') }}</label>
                  <input type="password" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">{{ $t('Address') }}</label>
                  <input type="text" class="form-control" id="inputAddress" />
                </div>
                <div class="col-12">
                  <label for="inputAddress2" class="form-label">{{ $t('Address2') }}</label>
                  <input type="text" class="form-control" id="inputAddress2" />
                </div>
                <div class="col-md-6">
                  <label for="inputCity" class="form-label">{{ $t('City') }}</label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-4">
                  <label for="inputState" class="form-label">{{ $t('State') }}</label>
                  <vue-select
                    :options="FormState1"
                    id="formstate1"
                    placeholder="Choose"
                  />
                </div>
                <div class="col-md-2">
                  <label for="inputZip" class="form-label">{{ $t('Zip') }}</label>
                  <input type="text" class="form-control" id="inputZip" />
                </div>
                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck3" />
                    <label class="form-check-label" for="gridCheck3">
                      {{ $t('Checkmeout') }}
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">{{ $t('Signin') }}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
export default {
  data() {
    return {
      FormState: ["State", "..."],
      FormState1: ["Choose", "..."],
      FormCountry: ["Country", "..."],
      startdate: currentDate,
      dateFormat: "dd-MM-yyyy",
    };
  },
};
</script>
