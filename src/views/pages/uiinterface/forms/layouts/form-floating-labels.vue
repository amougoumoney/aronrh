<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper cardhead">
    <div class="content">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col">
            <h3 class="page-title">{{ $t('FloatingLabel') }}</h3>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <!-- Floating Label -->
      <div class="row">
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">{{ $t('BasicExamples') }}</div>
            </div>
            <div class="card-body">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">{{ $t('Emailaddress') }}</label>
              </div>
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">{{ $t('Password') }}</label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">{{ $t('Readonlyplaintext') }}</div>
            </div>
            <div class="card-body">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  readonly
                  class="form-control-plaintext"
                  id="floatingEmptyPlaintextInput"
                  placeholder="name@example.com"
                />
                <label for="floatingEmptyPlaintextInput">{{ $t('Emptyinput') }}</label>
              </div>
              <div class="form-floating">
                <input
                  type="email"
                  readonly
                  class="form-control-plaintext"
                  id="floatingPlaintextInput"
                  placeholder="name@example.com"
                  value="name@example.com"
                />
                <label for="floatingPlaintextInput">{{ $t('Inputwithvalue') }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Floating Label -->

      <!-- Floating Label -->
      <div class="row">
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">{{ $t('floating...') }}</div>
            </div>
            <div class="card-body">
              <form class="form-floating my-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInputValue"
                  placeholder="name@example.com"
                  value="test@example.com"
                />
                <label for="floatingInputValue">{{ $t('Inputwithvalue') }}</label>
              </form>
              <form class="form-floatin">
                <input
                  type="email"
                  class="form-control is-invalid"
                  id="floatingInputInvalid"
                  placeholder="name@example.com"
                  value="test@example.com"
                />
                <label for="floatingInputInvalid">{{ $t('Invalidinput') }}</label>
              </form>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">{{ $t('Textareas') }}</div>
            </div>
            <div class="card-body">
              <div class="form-floating mb-4">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                ></textarea>
                <label for="floatingTextarea">{{ $t('Description') }}</label>
              </div>
              <div class="form-floating">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  rows="1"
                  disabled=""
                ></textarea>
                <label for="floatingTextarea2">{{ $t('Disabled') }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Floating Label -->

      <!-- Floating Label -->
      <div class="row">
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">{{ $t('FloatingLabelsInSelect') }}</div>
            </div>
            <div class="card-body">
              <div class="form-floating">
                <vue-select
                  :options="SelectLabels"
                  aria-label="Floating label select example"
                  id="floatingSelect"
                  placeholder="Open this select menu"
                />
                <label for="floatingSelect">{{ $t('Workswithselects') }}</label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">{{ $t('FloatingLabelsWithLayouts') }}</div>
            </div>
            <div class="card-body">
              <div class="row g-2">
                <div class="col-md">
                  <div class="form-floating">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInputGrid"
                      placeholder="name@example.com"
                      value="mdo@example.com"
                    />
                    <label for="floatingInputGrid">{{ $t('Emailaddress') }}</label>
                  </div>
                </div>
                <div class="col-md">
                  <div class="form-floating">
                    <vue-select
                      :options="SelectLabelsOne"
                      id="floatingSelectGrid"
                      placeholder="Open this select menu"
                    />

                    <label for="floatingSelectGrid">{{ $t('Workswithselects') }}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Floating Label -->

      <!-- Floating Label Colors -->
      <div class="row">
        <div class="col-xl-12">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">{{ $t('FloatingLabelColors') }}</div>
            </div>
            <div class="card-body">
              <div class="row gy-4">
                <div class="col-xl-4">
                  <div class="form-floating mb-4 floating-primary">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInputprimary"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInputprimary">{{ $t('Primary') }}</label>
                  </div>
                </div>
                <div class="col-xl-4">
                  <div class="form-floating mb-4 floating-secondary">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInputsecondary"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInputsecondary">{{ $t('Secondary') }}</label>
                  </div>
                </div>
                <div class="col-xl-4">
                  <div class="form-floating mb-4 floating-warning">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInputwarning"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInputwarning">{{ $t('Warning') }}</label>
                  </div>
                </div>
                <div class="col-xl-4">
                  <div class="form-floating mb-4 floating-info">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInputinfo"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInputinfo">{{ $t('Info') }}</label>
                  </div>
                </div>
                <div class="col-xl-4">
                  <div class="form-floating mb-4 floating-success">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInputsuccess"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInputsuccess">{{ $t('Success') }}</label>
                  </div>
                </div>
                <div class="col-xl-4">
                  <div class="form-floating mb-4 floating-danger">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInputdanger"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInputdanger">{{ $t('Danger') }}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Floating Label Colors -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      SelectLabels: ["Open this select menu", "One", "Two", "Three"],
      SelectLabelsOne: ["Open this select menu", "One", "Two", "Three"],
    };
  },
};
</script>
