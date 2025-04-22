<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper cardhead">
    <div class="content">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">{{ $t('FormSelect2') }}</h3>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('BasicSelect2') }}</h5>
            </div>
            <div class="card-body">
              <vue-select :options="SelectOne" id="selectone" placeholder="Selection-1" />
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('MultipleSelect') }}</h5>
            </div>
            <div class="card-body">
              <vue-select :options="SelectTwo" id="selecttwo" placeholder="" />
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('SingleSelectWithPlaceholder') }}</h5>
            </div>
            <div class="card-body">
              <vue-select :options="SelectThree" id="selectthree" placeholder="Texas" />
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('MultipleSelectWithPlaceholder') }}</h5>
            </div>
            <div class="card-body">
              <vue-select :options="SelectFour" id="selectfour" placeholder="Select" />
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('MultipleSelectWithPlaceholder') }}</h5>
            </div>
            <div class="card-body">
              <vue-select :options="SelectFive" id="selectfive" placeholder="" />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <!-- Basic -->
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('Basic') }}</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <p>
                    {{ $t('Use...') }}
                  </p>
                  <vue-select :options="SelectSix" id="selectsix" placeholder="Orange" />
                </div>
              </div>
            </div>
          </div>
          <!-- /Basic -->

          <!-- Nested -->
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('Nested') }}</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <p>{{ $t('Add.') }}</p>
                  <select class="form-control nested">
                    <optgroup label="Group1">
                      <option selected="selected">{{ $('orange') }}</option>
                      <option>{{ $t('white') }}</option>
                      <option>{{ $t('purple') }}</option>
                    </optgroup>
                    <optgroup label="Group2">
                      <option>{{ $t('purple') }}</option>
                      <option>{{ $('orange') }}</option>
                      <option>{{ $t('white') }}</option>
                    </optgroup>
                    <optgroup label="Group3">
                      <option>{{ $t('white') }}</option>
                      <option>{{ $t('purple') }}</option>
                      <option>{{ $('orange') }}</option>
                    </optgroup>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <!-- /Nested -->

          <!-- Placeholder -->
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('Placeholder') }}</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <p>{{ $t('Apply...') }}.</p>
                  <vue-select
                    :options="SelectSeven"
                    id="selectseven"
                    placeholder="Choose"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- /Placeholder -->

          <!-- Tagging with multi-value -->
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('Tag...') }}</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <p>{{ $t('set...') }}.</p>
                  <select class="form-control tagging" multiple="multiple">
                    <option>{{ $('orange') }}</option>
                    <option>{{ $t('white') }}</option>
                    <option>{{ $t('purple') }}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <!-- /Tagging with multi-value -->
        </div>

        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('SmallSelect2') }}</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <p>{{ $t('use...') }}.</p>
                  <vue-select
                    :options="SelectEight"
                    id="selecteight"
                    placeholder="Orange"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{$t('Disablingoptions')}}</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <p>{{ $t('DisableSelectusingdisabledattribute') }}.</p>
                  <vue-select
                    :options="SelectNine"
                    id="selectnine"
                    placeholder="Choose"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('LimitingthenumberofTagging') }}</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <p>
                    {{ $t('setMaximum') }}.
                  </p>
                  <select class="form-control tagging" multiple="multiple">
                    <option>{{ $('orange') }}</option>
                    <option>{{ $t('white') }}</option>
                    <option>{{ $t('purple') }}</option>
                  </select>
                </div>
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
      SelectOne: [
        "Selection-1",
        "Selection-2",
        "Selection-3",
        "Selection-4",
        "Selection-5",
      ],
      SelectTwo: ["Multiple-1", "Multiple-2", "Multiple-3", "Multiple-4", "Multiple-5"],
      SelectThree: ["Texas", "Georgia", "California", "Washington D.C", "Virginia"],
      SelectFour: ["Apple", "Mango", "Orange", "Guava", "Pineapple"],
      SelectFive: ["Apple", "Mango", "Orange", "Guava", "Pineapple"],
      SelectSix: ["Orange", "White", "Purple"],
      SelectSeven: ["First", "Second", "Third", "Fourth", "Fifth"],
      SelectEight: ["Orange", "White", "Purple"],
      SelectNine: ["First", "Second", "Third"],
    };
  },
};
</script>
