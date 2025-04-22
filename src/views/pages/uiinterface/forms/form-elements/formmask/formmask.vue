<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <!-- Page Wrapper -->
  <div class="page-wrapper cardhead">
    <div class="content">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">{{ $t('FormMask') }}</h3>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('FormMask') }}</h5>
              <p class="sub-header">
                {{ $t('maskphrase') }}
              </p>
            </div>
            <div class="card-body">
              <b-form action="#">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label">{{ $t('phone') }}</label>
                    <MaskedInput
                      v-model="phone"
                      class="form-control"
                      :mask="'(999) 999-9999'"
                    />
                    <span class="form-text text-muted">(999) 999-9999</span>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">{{ $t('Date') }}</label>
                    <MaskedInput
                      v-model="date"
                      class="form-control"
                      :mask="'99 / 99 / 9999'"
                    />
                    <span class="form-text text-muted">{{ $t('dd/mm/yyyy') }}</span>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">{{ $t('SSNfield1') }}</label>
                    <MaskedInput
                      v-model="ssn"
                      class="form-control"
                      :mask="'999-99-9999'"
                    />
                    <span class="form-text text-muted">{{ $t('e.g') }} "999-99-9999"</span>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">Phone field + ext.</label>
                    <MaskedInput
                      v-model="phoneExt"
                      class="form-control"
                      :mask="'(999) 999-9999? x99999'"
                    />
                    <span class="form-text text-muted">+40 999 999 999</span>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">{{ $t('ProductKey') }}</label>
                    <MaskedInput
                      v-model="product"
                      class="form-control"
                      :mask="'a*-999-a999'"
                    />
                    <span class="form-text text-muted">{{ $t('e.g') }} a*-999-a999</span>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">{{ $t('Currency') }}</label>
                    <MaskedInput
                      v-model="currency"
                      class="form-control"
                      :mask="'999,999,999.99'"
                    />
                    <span class="form-text text-muted">$ 999,999,999.99</span>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">{{ $t('EyeScript') }}</label>
                    <MaskedInput
                      v-model="eyescript"
                      class="form-control"
                      :mask="'~9.99 ~9.99 999'"
                    />
                    <span class="form-text text-muted">~9.99 ~9.99 999</span>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">{{ $t('Percent') }}</label>
                    <MaskedInput v-model="pct" class="form-control" :mask="'99%'" />
                    <span class="form-text text-muted">{{ $t('e.g') }} "99%"</span>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">{{ $t('CreditCardNumber') }}</label>
                    <MaskedInput
                      v-model="ccn"
                      class="form-control"
                      :mask="'9999 9999 9999 9999'"
                    />
                    <span class="form-text text-muted">{{ $t('e.g') }}"999.999.999.9999"</span>
                  </div>
                </div>
              </b-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Page Wrapper -->
</template>
<script>
import MaskedInput from "./MaskedInput.vue";

export default {
  components: {
    MaskedInput,
  },
  name: "app",
  data: () => ({
    date: "",
    userMask: "aa-aa-AAAA",
    userField: "",
    rawVal: "",
    phone: "",
    ssn: "",
    phoneExt: "",
    product: "",
    currency: "",
    eyescript: "",
    pct: "",
    ccn: "",
  }),
};
</script>

<style>
masked-input {
  height: 40px;
}
</style>
