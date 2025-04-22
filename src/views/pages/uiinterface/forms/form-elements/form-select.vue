<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper cardhead">
    <div class="content">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">{{ $t('FormSelect') }}</h3>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('Basics') }}</h5>
            </div>
            <div class="card-body">
              <vue-select
                :options="FormSelect"
                id="formselect"
                placeholder="Open this select menu"
              />
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('Sizing') }}</h5>
            </div>
            <div class="card-body">
              <vue-select
                class="formselectone mb-3"
                :options="FormSelectOne"
                id="formselectone"
                placeholder="Open this select menu"
              />
              <vue-select
                :options="FormSelectTwo"
                id="formselecttwo"
                placeholder="Open this select menu"
              />
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('MultipleSelect') }}</h5>
            </div>
            <div class="card-body">
              <select class="form-select" multiple aria-label="multiple select example">
                <option selected>{{ $t('Openthisselectmenu') }}</option>
                <option value="1">{{ $t('One') }}</option>
                <option value="2">{{ $t('Two') }}</option>
                <option value="3">{{ $t('Three') }}</option>
              </select>
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
      FormSelect: ["Open this select menu", "One", "Two", "Three"],
      FormSelectOne: ["Open this select menu", "One", "Two", "Three"],
      FormSelectTwo: ["Open this select menu", "One", "Two", "Three"],
    };
  },
};
</script>
