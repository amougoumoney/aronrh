<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper cardhead">
    <div class="content">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col">
            <h3 class="page-title">{{ $t('HorizontalForm') }}</h3>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <div class="row">
        <div class="col-xl-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header">
              <h5 class="card-title">{{ $t('BasicForm') }}</h5>
            </div>
            <div class="card-body">
              <form action="#">
                <div class="row mb-3">
                  <label class="col-lg-3 col-form-label">{{ $t('FirstName') }}</label>
                  <div class="col-lg-9">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-lg-3 col-form-label">{{ $t('LastName') }}</label>
                  <div class="col-lg-9">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-lg-3 col-form-label">{{ $t('EmailAddress') }}</label>
                  <div class="col-lg-9">
                    <input type="email" class="form-control" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-lg-3 col-form-label">{{ $t('Username') }}</label>
                  <div class="col-lg-9">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-lg-3 col-form-label">{{ $t('Password') }}</label>
                  <div class="col-lg-9">
                    <input type="password" class="form-control" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-lg-3 col-form-label">{{ $t('RepeatPassword') }}</label>
                  <div class="col-lg-9">
                    <input type="password" class="form-control" />
                  </div>
                </div>
                <div class="text-end">
                  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">{{ $t('Submit') }}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-xl-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header">
              <h5 class="card-title">{{ $t('AddressForm') }}</h5>
            </div>
            <div class="card-body">
              <form action="#">
                <div class="row mb-3">
                  <label class="col-lg-3 col-form-label">{{ $t('Address1') }}</label>
                  <div class="col-lg-9">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-lg-3 col-form-label">{{ $t('Address2') }}</label>
                  <div class="col-lg-9">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-lg-3 col-form-label">{{ $t('City') }}</label>
                  <div class="col-lg-9">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-lg-3 col-form-label">{{ $t('State') }}</label>
                  <div class="col-lg-9">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-lg-3 col-form-label">{{ $t('Country') }}</label>
                  <div class="col-lg-9">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-lg-3 col-form-label">{{ $t('PostalCode') }}</label>
                  <div class="col-lg-9">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="text-end">
                  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">{{ $t('Submit') }}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('TwoColumnHorizontalForm') }}</h5>
            </div>
            <div class="card-body">
              <h6 class="mb-3">{{ $t('PersonalInformation') }}</h6>
              <form action="#">
                <div class="row">
                  <div class="col-xl-6">
                    <div class="row mb-3">
                      <label class="col-lg-3 col-form-label">{{ $t('FirstName') }}</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-lg-3 col-form-label">{{ $t('LastName') }}</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-lg-3 col-form-label">{{ $t('Gender') }}</label>
                      <div class="col-lg-9">
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gender"
                            id="gender_male"
                            value="option1"
                            checked
                          />
                          <label class="form-check-label" for="gender_male"> {{ $t('Male') }} </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gender"
                            id="gender_female"
                            value="option2"
                          />
                          <label class="form-check-label" for="gender_female">
                            {{ $t('Female') }}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-lg-3 col-form-label">{{ $t('BloodGroup') }}</label>
                      <div class="col-lg-9">
                        <vue-select
                          :options="FormBlood"
                          id="formblood"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="row mb-3">
                      <label class="col-lg-3 col-form-label">{{ $t('Username') }}</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-lg-3 col-form-label">{{ $t('Email') }}</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-lg-3 col-form-label">{{ $t('Password') }}</label>
                      <div class="col-lg-9">
                        <input type="password" class="form-control" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-lg-3 col-form-label">{{ $t('RepeatPassword') }}</label>
                      <div class="col-lg-9">
                        <input type="password" class="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <h6 class="mb-3">{{ $t('Address') }}</h6>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="row mb-3">
                      <label class="col-lg-3 col-form-label">{{ $t('AddressLine1') }}</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-lg-3 col-form-label">{{ $t('AddressLine2') }}</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-lg-3 col-form-label">{{ $t('State') }}</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="row mb-3">
                      <label class="col-lg-3 col-form-label">{{ $t('City') }}</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-lg-3 col-form-label">{{ $t('Country') }}</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-lg-3 col-form-label">{{ $t('PostalCode') }}</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-end">
                  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">{{ $t('Submit') }}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('TwoColumnHorizontalForm2') }}</h5>
            </div>
            <div class="card-body">
              <form action="#">
                <div class="row">
                  <div class="col-xl-6">
                    <h6 class="mb-3">{{ $t('PersonalInformation') }}</h6>
                    <div class="row mb-3">
                      <label class="col-lg-3 col-form-label">{{ $t('FirstName') }}</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-lg-3 col-form-label">{{ $t('LastName') }}</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-lg-3 col-form-label">{{ $t('Password') }}</label>
                      <div class="col-lg-9">
                        <input type="password" class="form-control" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-lg-3 col-form-label">{{ $t('State') }}</label>
                      <div class="col-lg-9">
                        <vue-select
                          :options="Formhorizontalstate"
                          id="formhorizontalstate"
                          placeholder="Select State"
                        />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-lg-3 col-form-label">{{ $t('About') }}</label>
                      <div class="col-lg-9">
                        <textarea
                          rows="4"
                          cols="5"
                          class="form-control"
                          placeholder="Enter message"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <h6 class="mb-3">{{ $t('PersonalDetails') }}</h6>
                    <div class="row">
                      <label class="col-lg-3 col-form-label">{{ $t('name') }}</label>
                      <div class="col-lg-9">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="mb-3">
                              <input
                                type="text"
                                placeholder="First Name"
                                class="form-control"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="mb-3">
                              <input
                                type="text"
                                placeholder="Last Name"
                                class="form-control"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-lg-3 col-form-label">{{ $t('Email') }}</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-lg-3 col-form-label">{{ $t('phone') }}</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-lg-3 col-form-label">{{ $t('Address') }}</label>
                      <div class="col-lg-9">
                        <input type="text" class="form-control" />
                        <div class="row mt-4">
                          <div class="col-md-6">
                            <div class="mb-3">
                              <vue-select
                                :options="Formhorizontalcountry"
                                id="formhorizontalcountry"
                                placeholder="Select Country"
                              />
                            </div>
                            <div class="mb-3">
                              <input
                                type="text"
                                placeholder="ZIP code"
                                class="form-control"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="mb-3">
                              <input
                                type="text"
                                placeholder="State/Province"
                                class="form-control"
                              />
                            </div>
                            <div class="mb-3">
                              <input
                                type="text"
                                placeholder="City"
                                class="form-control"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-end">
                  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">{{ $t('Submit') }}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">{{ $t('HorizontalformWithIcons') }}</div>
            </div>
            <div class="card-body">
              <form>
                <div class="row mb-3">
                  <label for="inputEmail1" class="col-sm-2 col-form-label">{{ $t('Email') }}</label>
                  <div class="col-sm-10">
                    <div class="input-group">
                      <input type="email" class="form-control" id="inputEmail1" />
                      <div class="input-group-text">
                        <vue-feather type="mail"></vue-feather>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputPassword1" class="col-sm-2 col-form-label"
                    >{{ $t('Password') }}</label
                  >
                  <div class="col-sm-10">
                    <div class="input-group">
                      <input type="password" class="form-control" id="inputPassword1" />
                      <div class="input-group-text">
                        <vue-feather type="lock"></vue-feather>
                      </div>
                    </div>
                  </div>
                </div>

                <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">{{ $t('Signin') }}</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">{{ $t('Horizontalformlabelsizing') }}</div>
            </div>
            <div class="card-body">
              <div class="row mb-3">
                <label
                  for="colFormLabelSm"
                  class="col-sm-2 col-form-label col-form-label-sm"
                  >{{ $t('Email') }}</label
                >
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="colFormLabelSm"
                    placeholder="col-form-label-sm"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label for="colFormLabel" class="col-sm-2 col-form-label">{{ $t('Email') }}</label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control"
                    id="colFormLabel"
                    placeholder="col-form-label"
                  />
                </div>
              </div>
              <div class="row">
                <label
                  for="colFormLabelLg"
                  class="col-sm-2 col-form-label col-form-label-lg"
                  >{{ $t('Email') }}</label
                >
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    id="colFormLabelLg"
                    placeholder="col-form-label-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-12">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">{{ $t('Autosizing') }}</div>
            </div>
            <div class="card-body">
              <form class="row gy-2 gx-3 align-items-center mb-4">
                <div class="col-auto">
                  <label class="visually-hidden" for="autoSizingInput">{{ $t('name') }}</label>
                  <input
                    type="text"
                    class="form-control"
                    id="autoSizingInput"
                    placeholder="Jane Doe"
                  />
                </div>
                <div class="col-auto">
                  <label class="visually-hidden" for="autoSizingInputGroup"
                    >{{ $t('Username') }}</label
                  >
                  <div class="input-group">
                    <div class="input-group-text">@</div>
                    <input
                      type="text"
                      class="form-control"
                      id="autoSizingInputGroup"
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div class="col-auto">
                  <label class="visually-hidden" for="autoSizingSelect">{{ $t('Preference') }}</label>
                  <vue-select
                    :options="Formchoose"
                    id="formchoose"
                    placeholder="Choose..."
                  />
                </div>
                <div class="col-auto">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="autoSizingCheck"
                    />
                    <label class="form-check-label" for="autoSizingCheck">
                      {{ $t('Rememberme') }}
                    </label>
                  </div>
                </div>
                <div class="col-auto">
                  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">{{ $t('Submit') }}</button>
                </div>
              </form>
              <span class="fw-semibold mb-1 text-muted"
                >{{ $t('youcan') }}.</span
              >
              <form class="row gx-3 gy-2 align-items-center mt-0">
                <div class="col-sm-3">
                  <label class="visually-hidden" for="specificSizeInputName">{{ $t('name') }}</label>
                  <input
                    type="text"
                    class="form-control"
                    id="specificSizeInputName"
                    placeholder="Jane Doe"
                  />
                </div>
                <div class="col-sm-3">
                  <label class="visually-hidden" for="specificSizeInputGroupUsername"
                    >{{ $t('Username') }}</label
                  >
                  <div class="input-group">
                    <div class="input-group-text">@</div>
                    <input
                      type="text"
                      class="form-control"
                      id="specificSizeInputGroupUsername"
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div class="col-sm-3">
                  <label class="visually-hidden" for="specificSizeSelect"
                    >{{ $t('Preference') }}</label
                  >
                  <vue-select
                    :options="Formchooseone"
                    id="specificSizeSelect"
                    placeholder="Choose..."
                  />
                </div>
                <div class="col-auto">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="autoSizingCheck2"
                    />
                    <label class="form-check-label" for="autoSizingCheck2">
                      {{ $t('Rememberme') }}
                    </label>
                  </div>
                </div>
                <div class="col-auto">
                  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">{{ $t('Submit') }}</button>
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
export default {
  data() {
    return {
      FormBlood: ["Select", "A+", "O+", "B+", "AB+"],
      Formhorizontalstate: ["Select State", "California", "Texas", "Florida"],
      Formhorizontalcountry: ["Select Country", "USA", "France", "India", "Spain"],
      Formchoose: ["Choose", "One", "Two", "Three"],
      Formchooseone: ["Choose", "One", "Two", "Three"],
    };
  },
};
</script>
