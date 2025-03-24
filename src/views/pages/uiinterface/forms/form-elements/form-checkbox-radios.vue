<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper cardhead">
    <div class="content">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col">
            <h3 class="page-title">{{ $t('Checks&Radios') }}</h3>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <div class="row">
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <h5 class="card-title">{{ $t('Checkbox') }}</h5>
            </div>
            <div class="card-body">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  {{ $t('Defaultcheckbox') }}
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked=""
                />
                <label class="form-check-label" for="flexCheckChecked">
                  {{ $t('Checkedcheckbox') }}
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <h5 class="card-title">{{ $t('Disabled') }}</h5>
            </div>
            <div class="card-body">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDisabled"
                  disabled=""
                />
                <label class="form-check-label" for="flexCheckDisabled">
                  {{ $t('Disabledcheckbox') }}
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckCheckedDisabled"
                  checked=""
                  disabled=""
                />
                <label class="form-check-label" for="flexCheckCheckedDisabled">
                  {{ $t('Disabledcheckedcheckbox') }}
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <h5 class="card-title">{{ $t('Radios') }}</h5>
            </div>
            <div class="card-body">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  {{ $t('Defaultradio') }}
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked=""
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  {{$t('DefaultCheckedradio')}}
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <h5 class="card-title">{{ $t('Radios') }}</h5>
            </div>
            <div class="card-body">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDisabled"
                  id="flexRadioDisabled"
                  disabled=""
                />
                <label class="form-check-label" for="flexRadioDisabled">
                  {{ $t('Disabledradio') }}
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDisabled"
                  id="flexRadioCheckedDisabled"
                  checked=""
                  disabled=""
                />
                <label class="form-check-label" for="flexRadioCheckedDisabled">
                  {{ $t('Disabledcheckedradio') }}
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <h5 class="card-title">{{ $t('Default(stacked)') }}</h5>
            </div>
            <div class="card-body">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  {{ $t('Defaultcheckbox') }}
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck2"
                  disabled=""
                />
                <label class="form-check-label" for="defaultCheck2">
                  {{ $t('Disabledcheckbox') }}
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  checked=""
                />
                <label class="form-check-label" for="exampleRadios1">
                  {{ $t('Defaultradio') }}
                </label>
              </div>
              <div class="form-check mb-0">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios3"
                  value="option3"
                  disabled=""
                />
                <label class="form-check-label" for="exampleRadios3">
                  {{ $t('Disabledradio') }}
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <h5 class="card-title">{{ $t('Switches') }}</h5>
            </div>
            <div class="card-body">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label class="form-check-label" for="flexSwitchCheckDefault"
                  >{{ $t('Defaultswitchcheckboxinput') }}</label
                >
              </div>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  checked=""
                />
                <label class="form-check-label" for="flexSwitchCheckChecked"
                  >{{ $t('Checkedswitchcheckboxinput') }}</label
                >
              </div>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDisabled"
                  disabled=""
                />
                <label class="form-check-label" for="flexSwitchCheckDisabled"
                  >{{ $t('Disabledswitchcheckboxinput') }}</label
                >
              </div>
              <div class="form-check form-switch mb-0">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckCheckedDisabled"
                  checked=""
                  disabled=""
                />
                <label class="form-check-label" for="flexSwitchCheckCheckedDisabled"
                  >{{ $t('Disabledcheckedswitchcheckboxinput') }}</label
                >
              </div>
            </div>
          </div>
        </div>

        <div class="col-xxl-4 col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">{{ $t('CheckboxSizes') }}</div>
            </div>
            <div class="card-body d-sm-flex align-items-center justify-content-between">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="checkebox-sm"
                  checked=""
                />
                <label class="form-check-label" for="checkebox-sm"> {{ $t('Default') }} </label>
              </div>
              <div class="form-check form-check-md d-flex align-items-center">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="checkebox-md"
                  checked=""
                />
                <label class="form-check-label" for="checkebox-md"> {{ $t('medium') }} </label>
              </div>
              <div class="form-check form-check-lg d-flex align-items-center">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="checkebox-lg"
                  checked=""
                />
                <label class="form-check-label" for="checkebox-lg"> {{ $t('Large') }} </label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">{{ $t('RadioSizes') }}</div>
            </div>
            <div class="card-body d-sm-flex align-items-center justify-content-between">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="Radio" id="Radio-sm" />
                <label class="form-check-label" for="Radio-sm"> {{ $t('Default') }} </label>
              </div>
              <div class="form-check form-check-md">
                <input class="form-check-input" type="radio" name="Radio" id="Radio-md" />
                <label class="form-check-label" for="Radio-md"> {{ $t('medium') }} </label>
              </div>
              <div class="form-check form-check-lg">
                <input
                  class="form-check-input"
                  type="radio"
                  name="Radio"
                  id="Radio-lg"
                  checked=""
                />
                <label class="form-check-label" for="Radio-lg"> {{ $t('Large') }} </label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">{{ $t('SwitchSizes') }}</div>
            </div>
            <div class="card-body d-sm-flex align-item-center justify-content-between">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="switch-sm"
                />
                <label class="form-check-label" for="switch-sm">{{ $t('Default') }}</label>
              </div>
              <div class="form-check form-check-md form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="switch-md"
                />
                <label class="form-check-label" for="switch-md">{{ $t('medium') }}</label>
              </div>
              <div class="form-check form-check-lg form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="switch-lg"
                />
                <label class="form-check-label" for="switch-lg">{{ $t('Large') }}</label>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <h5 class="card-title">{{ $t('Inline') }}</h5>
            </div>
            <div class="card-body">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineCheckbox1">1</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineCheckbox2">2</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox3"
                  value="option3"
                  disabled=""
                />
                <label class="form-check-label" for="inlineCheckbox3">3 ({{ $t('Disabled') }})</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">1</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2">2</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                  disabled=""
                />
                <label class="form-check-label" for="inlineRadio3">3 ({{ $t('Disabled') }})</label>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <h5 class="card-title">{{ $t('Withoutlabels') }}</h5>
            </div>
            <div class="card-body">
              <span class="me-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkboxNoLabel"
                  value=""
                  aria-label="..."
                />
              </span>
              <span>
                <input
                  class="form-check-input"
                  type="radio"
                  name="radioNoLabel"
                  id="radioNoLabel1"
                  value=""
                  aria-label="..."
                />
              </span>
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
    return {};
  },
};
</script>
