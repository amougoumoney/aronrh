<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper cardhead">
    <div class="content container-fluid">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">{{ $t('FormValidation') }}</h3>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <!-- Row -->
      <div class="row">
        <div class="col-sm-12">
          <!-- Custom Boostrap Validation -->
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('CustomBootstrapFormValidation') }}</h5>
              <p class="card-text">
                {{ $t('for...') }}
                <code>novalidate</code> {{ $t('boolean...') }}
                <a
                  href="https://getbootstrap.com/docs/4.1/components/forms/#server-side"
                  target="_blank"
                  >{{ $t('readfulldocumentation') }}</a
                >.
              </p>
            </div>
            <form-validation-one></form-validation-one>
          </div>
          <!-- /Custom Boostrap Validation -->

          <!-- Default Browser Validation -->
          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">{{ $t('BrowserDefaults') }}</h5>
              <p class="card-text">
                {{ $t('Not...') }}
              </p>
            </div>
            <div class="card-body">
              <form class="needs-validation" novalidate>
                <div class="row">
                  <div class="col-sm">
                    <form>
                      <div class="form-row row">
                        <div class="col-md-4 mb-3">
                          <label for="validationDefault01">{{ $t('FirstName') }}</label>
                          <input
                            type="text"
                            class="form-control"
                            id="validationDefault01"
                            placeholder="First Name"
                            value="Mark"
                            required
                          />
                        </div>
                        <div class="col-md-4 mb-3">
                          <label for="validationDefault02">{{ $t('LastName') }}</label>
                          <input
                            type="text"
                            class="form-control"
                            id="validationDefault02"
                            placeholder="Last Name"
                            value="Otto"
                            required
                          />
                        </div>
                        <div class="col-md-4 mb-3">
                          <label for="validationDefaultUsername">{{ $t('Username') }}</label>
                          <div class="input-group">
                            <span class="input-group-text" id="inputGroupPrepend2"
                              >@</span
                            >
                            <input
                              type="text"
                              class="form-control"
                              id="validationDefaultUsername"
                              placeholder="Username"
                              aria-describedby="inputGroupPrepend2"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row row">
                        <div class="col-md-6 mb-3">
                          <label for="validationDefault03">{{ $t('City') }}</label>
                          <input
                            type="text"
                            class="form-control"
                            id="validationDefault03"
                            placeholder="City"
                            required
                          />
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault04">{{ $t('State') }}</label>
                          <input
                            type="text"
                            class="form-control"
                            id="validationDefault04"
                            placeholder="State"
                            required
                          />
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault05">{{ $t('Zip') }}</label>
                          <input
                            type="text"
                            class="form-control"
                            id="validationDefault05"
                            placeholder="Zip"
                            required
                          />
                        </div>
                      </div>
                      <div class="input-block mb-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="invalidCheck2"
                            required
                          />
                          <label class="form-check-label" for="invalidCheck2">
                            {{ $t('Agreetotermsandconditions') }}
                          </label>
                        </div>
                      </div>
                      <button class="btn btn-primary" type="submit">{{ $t('Submitform') }}</button>
                    </form>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- /Default Browser Validation -->

          <!-- Server Side Validation -->
          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">{{ $t('ServerSide') }}</h5>
              <p class="card-text">
                {{ $t('we...') }}
                <code>.is-invalid</code> {{ $t('and') }} <code>.is-valid</code>. {{ $t('Notethat') }}
                <code>.invalid-feedback</code> {{ $t('is...') }}
              </p>
            </div>
            <div class="card-body">
              <form class="needs-validation" novalidate>
                <div class="form-row row">
                  <div class="col-md-4 mb-3">
                    <label for="validationServer01">{{ $t('FirstName') }}</label>
                    <input
                      type="text"
                      class="form-control is-valid"
                      id="validationServer01"
                      placeholder="First Name"
                      value="Mark"
                      required
                    />
                    <div class="valid-feedback">{{ $t('Looksgood!') }}</div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="validationServer02">{{ $t('LastName') }}</label>
                    <input
                      type="text"
                      class="form-control is-valid"
                      id="validationServer02"
                      placeholder="Last Name"
                      value="Otto"
                      required
                    />
                    <div class="valid-feedback">{{ $t('Looksgood!') }}</div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="validationServerUsername">{{ $t('Username') }}</label>
                    <div class="input-group">
                      <span class="input-group-text" id="inputGroupPrepend3">@</span>
                      <input
                        type="text"
                        class="form-control is-invalid"
                        id="validationServerUsername"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend3"
                        required
                      />
                      <div class="invalid-feedback">{{ $t('Pleasechooseausername') }}.</div>
                    </div>
                  </div>
                </div>
                <div class="form-row row">
                  <div class="col-md-6 mb-3">
                    <label for="validationServer03">{{ $t('City') }}</label>
                    <input
                      type="text"
                      class="form-control is-invalid"
                      id="validationServer03"
                      placeholder="City"
                      required
                    />
                    <div class="invalid-feedback">{{ $t('Pleaseprovideavalidcity') }}.</div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="validationServer04">{{ $t('State') }}</label>
                    <input
                      type="text"
                      class="form-control is-invalid"
                      id="validationServer04"
                      placeholder="State"
                      required
                    />
                    <div class="invalid-feedback">{{ $t('Pleaseprovideavalidstate') }}.</div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="validationServer05">{{ $t('Zip') }}</label>
                    <input
                      type="text"
                      class="form-control is-invalid"
                      id="validationServer05"
                      placeholder="Zip"
                      required
                    />
                    <div class="invalid-feedback">{{ $t('Pleaseprovideavalidzip') }}.</div>
                  </div>
                </div>
                <div class="input-block mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input is-invalid"
                      type="checkbox"
                      value=""
                      id="invalidCheck3"
                      required
                    />
                    <label class="form-check-label" for="invalidCheck3">
                      {{ $t('Agreetotermsandconditions') }}
                    </label>
                    <div class="invalid-feedback">{{ $t('you...') }}</div>
                  </div>
                </div>
                <button class="btn btn-primary" type="submit">{{ $t('Submitform') }}</button>
              </form>
            </div>
          </div>
          <!-- /Server Side Validation -->

          <!-- Supported Elements -->
          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">{{ $t('SupportedElements') }}</h5>
              <p class="card-text">
                {{ $t('form...') }}
              </p>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm">
                  <form class="was-validated">
                    <div class="custom-checkbox mb-3">
                      <input
                        type="checkbox"
                        class="form-check-input me-1"
                        id="customControlValidation1"
                        required
                      />
                      <label for="customControlValidation1"
                        >{{ $t('Checkthiscustomcheckbox') }}</label
                      >
                      <div class="invalid-feedback">{{ $t('Exampleinvalidfeedbacktext') }}</div>
                    </div>
                    <div class="custom-radio">
                      <input
                        type="radio"
                        class="form-check-input me-1"
                        id="customControlValidation2"
                        name="radio-stacked"
                        required
                      />
                      <label for="customControlValidation2"
                        >{{ $t('Togglethiscustomradio') }}</label
                      >
                    </div>
                    <div class="custom-radio mb-3">
                      <input
                        type="radio"
                        class="form-check-input me-1"
                        id="customControlValidation3"
                        name="radio-stacked"
                        required
                      />
                      <label for="customControlValidation3"
                        >{{ $t('Ortogglethisothercustomradio') }}</label
                      >
                      <div class="invalid-feedback">
                        {{ $t('Moreexampleinvalidfeedbacktext') }}
                      </div>
                    </div>
                    <div class="input-block mb-3">
                      <select class="form-select" required>
                        <option value="">{{ $t('Openthisselectmenu') }}</option>
                        <option value="1">{{ $t('One') }}</option>
                        <option value="2">{{ $t('Two') }}</option>
                        <option value="3">{{ $t('Three') }}</option>
                      </select>
                      <div class="invalid-feedback">
                        {{ $t('Exampleinvalidcustomselectfeedback') }}
                      </div>
                    </div>

                    <div class="input-block mb-3">
                      <input
                        type="file"
                        class="form-control"
                        id="validatedCustomFile"
                        required
                      />
                      <div class="invalid-feedback">
                        {{ $t('Exampleinvalidcustomfilefeedback') }}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- /Supported Elements -->

          <!-- Validation Tooltips -->
          <div class="card mb-0">
            <div class="card-header">
              <h5 class="card-title mb-0">{{ $t('Tooltips') }}</h5>
              <p class="card-text">
                {{ $t('Youcanswapthe') }}<code>.{valid|invalid}-feedback</code> {{ $t('classesfor') }}
                <code>.{valid|invalid}-tooltip</code> {{ $t('kb') }}.
              </p>
            </div>
            <div class="card-body">
              <form
                ref="form"
                class="needs-validation"
                novalidate
                @submit.prevent="validateFormOne"
              >
                <div class="form-row row">
                  <div class="col-md-4 mb-3">
                    <label class="form-label" for="validationTooltip01">{{ $t('FirstName') }}</label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationTooltip01"
                      placeholder="First name"
                      value="Mark"
                      required
                    />
                    <div class="valid-tooltip">{{ $t('Looksgood!') }}</div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label class="form-label" for="validationTooltip02">{{ $t('LastName') }}</label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationTooltip02"
                      placeholder="Last name"
                      value="Otto"
                      required
                    />
                    <div class="valid-tooltip">{{ $t('Looksgood!') }}</div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label class="form-label" for="validationTooltipUsername"
                      >{{ $t('Username') }}</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="validationTooltipUsername"
                      placeholder="Username"
                      required
                    />
                    <div class="invalid-tooltip">
                      {{ $t('Pleasechooseauniqueandvalidusername') }}.
                    </div>
                  </div>
                </div>
                <div class="form-row row">
                  <div class="col-md-6 mb-3 mt-4">
                    <label class="form-label" for="validationTooltip03">{{ $t('City') }}</label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationTooltip03"
                      placeholder="City"
                      required
                    />
                    <div class="invalid-tooltip">{{ $t('Pleaseprovideavalidcity') }}.</div>
                  </div>
                  <div class="col-md-3 mb-3 mt-4">
                    <label class="form-label" for="validationTooltip04">{{ $t('State') }}</label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationTooltip04"
                      placeholder="State"
                      required
                    />
                    <div class="invalid-tooltip">{{ $t('Pleaseprovideavalidstate') }}.</div>
                  </div>
                  <div class="col-md-3 mb-3 mt-4">
                    <label class="form-label" for="validationTooltip05">{{ $t('Zip') }}</label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationTooltip05"
                      placeholder="Zip"
                      required
                    />
                    <div class="invalid-tooltip">{{ $t('Pleaseprovideavalidzip') }}.</div>
                  </div>
                </div>
                <button class="btn btn-primary mt-4" type="submit">{{ $t('Submitform') }}</button>
              </form>
            </div>
          </div>
          <!-- /Validation Tooltips -->
        </div>
        <!-- /Row -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: "Mark",
      lastName: "Otto",
      username: "",
      city: "",
      state: "",
      zip: "",
      agreed: false,
    };
  },
  mounted() {
    const forms = document.querySelectorAll(".needs-validation");
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  },
  methods: {
    validateFormOne() {
      const form = this.$refs.form;
      if (!form.checkValidity()) {
        form.classList.add("was-validated");
      } else {
        // Handle form submission
        alert("Form submitted successfully!");
      }
    },
  },
};
</script>
