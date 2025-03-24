<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper cardhead">
    <div class="content">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col">
            <h3 class="page-title">{{ $t('VerticalForm') }}</h3>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('BasicForm') }}</h5>
            </div>
            <div class="card-body">
              <form action="#">
                <div class="mb-3">
                  <label class="form-label">{{ $t('FirstName') }}</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">{{ $t('LastName') }}</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">{{ $t('EmailAddress') }}</label>
                  <input type="email" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">{{ $t('Username') }}</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">{{ $t('Password') }}</label>
                  <input type="password" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">{{ $t('RepeatPassword') }}</label>
                  <input type="password" class="form-control" />
                </div>
                <div class="text-end">
                  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">{{ $t('Submit') }}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('AddressForm') }}</h5>
            </div>
            <div class="card-body">
              <form action="#">
                <div class="mb-3">
                  <label class="form-label">{{ $t('AddressLine1') }}</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">{{ $t('AddressLine2') }}</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">{{ $t('City') }}</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">{{ $t('State') }}</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">{{ $t('Country') }}</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">{{ $t('PostalCode') }}</label>
                  <input type="text" class="form-control" />
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
              <h5 class="card-title">{{ $t('TwoColumnVerticalForm') }}</h5>
            </div>
            <div class="card-body">
              <form action="#">
                <h5 class="card-title">{{ $t('PersonalInformation') }}</h5>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('FirstName') }}</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">{{ $t('LastName') }}</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">{{ $t('BloodGroup') }}</label>
                      <vue-select
                        :options="Verticalblood"
                        id="verticalblood"
                        placeholder="Select"
                      />
                    </div>
                    <div class="mb-3">
                      <label class="d-block">{{ $t('Gender') }}:</label>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="gender"
                          id="gender_male"
                          value="option1"
                        />
                        <label class="form-check-label" for="gender_male">{{ $t('Male') }}</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="gender"
                          id="gender_female"
                          value="option2"
                        />
                        <label class="form-check-label" for="gender_female">{{ $t('Female') }}</label>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('Username') }}</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">{{ $t('Email') }}</label>
                      <input type="text" class="form-control" />
                    </div>

                    <div class="mb-3">
                      <label class="form-label">{{ $t('Password') }}</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">{{ $t('RepeatPassword') }}</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <h5 class="card-title">{{ $t('PostalAddress') }}</h5>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('AddressLine1') }}</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">{{ $t('AddressLine2') }}</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">{{ $t('State') }}</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('City') }}</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">{{ $t('Country') }}</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">{{ $t('PostalCode') }}</label>
                      <input type="text" class="form-control" />
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
              <h5 class="card-title">{{ $t('TwoColumnVerticalForm') }}</h5>
            </div>
            <div class="card-body">
              <form action="#">
                <div class="row">
                  <div class="col-md-6">
                    <h5 class="card-title">{{ $t('PersonalDetails') }}</h5>
                    <div class="mb-3">
                      <label class="form-label">{{ $t('name') }}:</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">{{ $t('Password') }}:</label>
                      <input type="password" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">{{ $t('State') }}:</label>
                      <vue-select
                        :options="SelectState"
                        id="selectstate"
                        placeholder="Select State"
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">{{ $t('YourMessage') }}:</label>
                      <textarea
                        rows="5"
                        cols="5"
                        class="form-control"
                        placeholder="Enter message"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h5 class="card-title">{{ $t('PersonalDetails') }}</h5>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">{{ $t('FirstName') }}:</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">{{ $t('LastName') }}:</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">{{ $t('Email') }}:</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">{{ $t('phone') }}:</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="mb-3">
                          <label class="form-label">{{ $t('Addressline') }}:</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">{{ $t('Country') }}:</label>
                          <vue-select
                            :options="SelectCountry"
                            id="selectcountry"
                            placeholder="Select Country"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label>{{$t('State')}}/{{$t('Province')}}:</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">{{ $t('ZIPcode') }}:</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">{{ $t('City') }}:</label>
                          <input type="text" class="form-control" />
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
              <div class="card-title">{{ $t('VerticalFormswithicon') }}</div>
            </div>
            <div class="card-body">
              <div class="mb-3">
                <label for="form-text1" class="form-label fs-14">{{ $t('Entername') }}</label>
                <div class="input-group">
                  <div class="input-group-text"><i class="feather-user"></i></div>
                  <input
                    type="text"
                    class="form-control"
                    id="form-text1"
                    placeholder=""
                  />
                </div>
              </div>
              <div class="mb-3">
                <label for="form-password1" class="form-label fs-14"
                  >{{ $t('EnterPassword') }}</label
                >
                <div class="input-group">
                  <div class="input-group-text"><i class="feather-lock"></i></div>
                  <input
                    type="password"
                    class="form-control"
                    id="form-password1"
                    placeholder=""
                  />
                </div>
              </div>
              <div class="mb-3">
                <label for="form-password1" class="form-label fs-14"
                  >{{ $t('EnterRepeatPassword') }}</label
                >
                <div class="input-group">
                  <div class="input-group-text"><i class="feather-lock"></i></div>
                  <input
                    type="password"
                    class="form-control"
                    id="form-password1"
                    placeholder=""
                  />
                </div>
              </div>
              <button class="btn btn-primary" type="submit">{{ $t('Submit') }}</button>
            </div>
          </div>
        </div>

        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">{{ $t('Horizontalformlabelsizing') }}</div>
            </div>
            <div class="card-body">
              <div class="mb-3">
                <label for="colFormLabelSm" class="col-form-label col-form-label-sm"
                  >{{ $t('Email') }}</label
                >
                <input
                  type="email"
                  class="form-control form-control-sm"
                  id="colFormLabelSm"
                  placeholder="col-form-label-sm"
                />
              </div>
              <div class="mb-3">
                <label for="colFormLabel" class="col-form-label">{{ $t('Email') }}</label>
                <input
                  type="email"
                  class="form-control"
                  id="colFormLabel"
                  placeholder="col-form-label"
                />
              </div>
              <div>
                <label for="colFormLabelLg" class="col-form-label col-form-label-lg"
                  >{{ $t('Email') }}</label
                >
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      Verticalblood: ["Select", "A+", "O+", "B+", "AB+"],
      SelectState: ["California", "Texas", "Florida"],
      SelectCountry: ["Select Country", "USA", "France", "India", "Spain"],
    };
  },
};
</script>
