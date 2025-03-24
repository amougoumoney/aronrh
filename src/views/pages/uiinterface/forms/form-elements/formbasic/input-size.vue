<template>
  <div class="card">
    <div class="card-header">
      <h5 class="card-title">{{ $t('BasicInputs') }}</h5>
    </div>
    <div class="card-body">
      <b-form action="#">
        <div class="form-group row">
          <label class="col-form-label col-md-2">{{ $t('TextInput') }}</label>
          <div class="col-md-10 mb-3">
            <b-form-input type="text" class="form-control"></b-form-input>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">{{ $t('Password') }}</label>
          <div class="col-md-10 mb-3">
            <b-form-input type="password" class="form-control"></b-form-input>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">{{ $t('DisabledInput') }}</label>
          <div class="col-md-10 mb-3">
            <b-form-input
              type="text"
              class="form-control"
              disabled="disabled"
            ></b-form-input>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">{{ $t('ReadonlyInput') }}</label>
          <div class="col-md-10 mb-3">
            <b-form-input
              type="text"
              class="form-control"
              placeholder="readonly"
            ></b-form-input>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">{{ $t('Placeholder') }}</label>
          <div class="col-md-10 mb-3">
            <b-form-input
              type="text"
              class="form-control"
              placeholder="Placeholder"
            ></b-form-input>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">{{ $t('FileInput') }}</label>
          <div class="col-md-10 mb-3">
            <input class="form-control" type="file" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">{{ $t('DefaultSelect') }}</label>
          <div class="col-md-10 mb-3">
            <vue-select :options="Select" id="select" placeholder="-- Select --" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">{{ $t('Radio') }}</label>
          <div class="col-md-10 mb-3">
            <div class="radio">
              <label> <input type="radio" name="radio" /> {{ $t('Option1') }} </label>
            </div>
            <div class="radio">
              <label> <input type="radio" name="radio" /> {{ $t('Option2') }}</label>
            </div>
            <div class="radio">
              <label> <input type="radio" name="radio" /> {{ $t('Option3') }}</label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">{{ $t('Checkbox') }}</label>
          <div class="col-md-10 mb-3">
            <div class="checkbox">
              <label> <input type="checkbox" name="checkbox" /> {{ $t('Option1') }} </label>
            </div>
            <div class="checkbox">
              <label> <input type="checkbox" name="checkbox" /> {{ $t('Option2') }} </label>
            </div>
            <div class="checkbox">
              <label> <input type="checkbox" name="checkbox" /> {{ $t('Option3') }}</label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">{{ $t('Textarea') }}</label>
          <div class="col-md-10 mb-3">
            <b-form-textarea
              id="textarea"
              v-model="text"
              rows="5"
              max-rows="6"
              placeholder="Enter text here"
            ></b-form-textarea>
          </div>
        </div>
        <div class="form-group mb-0 row">
          <label class="col-form-label col-md-2">{{ $t('InputAddons') }}</label>
          <div class="col-md-10">
            <div class="input-group">
              <span class="input-group-text">$</span>
              <b-form-input class="form-control" type="text"></b-form-input>
              <b-button variant="primary">{{ $t('Button') }}</b-button>
            </div>
          </div>
        </div>
      </b-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Select: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
      text: "",
    };
  },
  mounted() {},
};
</script>
