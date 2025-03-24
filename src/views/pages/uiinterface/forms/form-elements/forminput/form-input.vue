<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper cardhead">
    <div class="content container-fluid">
      <div class="page-header">
        <h4 class="page-title my-auto">{{ $t('InputGroups') }}</h4>
        <div>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <a href="javascript:void(0)">{{ $t('UIElements') }}</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">{{ $t('InputGroups') }}</li>
          </ol>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('BasicExamples') }}</h5>
            </div>
            <div class="card-body">
              <b-form action="#">
                <div class="form-group row">
                  <label class="col-form-label col-lg-2">{{ $t('GroupLeft') }}</label>
                  <div class="col-lg-10 mb-3">
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon1">@</span>
                      <b-form-input type="text" class="form-control" placeholder="Username" aria-label="Username"
                        aria-describedby="basic-addon1"></b-form-input>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-form-label col-lg-2">{{ $t('GroupRight') }}</label>
                  <div class="col-lg-10 mb-3">
                    <div class="input-group">
                      <b-form-input type="text" class="form-control" placeholder="Recipient's username"
                        aria-label="Recipient's username" aria-describedby="basic-addon2"></b-form-input>
                      <span class="input-group-text" id="basic-addon2">@example.com</span>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-form-label col-lg-2">{{ $t('URLExample') }}</label>
                  <div class="col-lg-10 mb-3">
                    <div class="input-group">
                      <span class="input-group-text">https://</span>
                      <b-form-input type="text" class="form-control"></b-form-input>
                    </div>
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-form-label col-lg-2">{{ $t('GroupwithPrice') }}</label>
                  <div class="col-lg-10 mb-3">
                    <div class="input-group">
                      <span class="input-group-text">$</span>
                      <b-form-input type="text" class="form-control"></b-form-input>
                      <span class="input-group-text">.00</span>
                    </div>
                  </div>
                </div>

                <div class="form-group row mb-0">
                  <label class="col-form-label col-lg-2">{{ $t('GroupwithPrice(Left)') }}</label>
                  <div class="col-lg-10 mb-3">
                    <div class="input-group">
                      <span class="input-group-text">$</span>
                      <span class="input-group-text">0.00</span>
                      <b-form-input type="text" class="form-control"></b-form-input>
                    </div>
                  </div>
                </div>
              </b-form>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('Sizing') }}</h5>
            </div>
            <div class="card-body">
              <b-form action="#">
                <div class="form-group row">
                  <label class="col-form-label col-lg-2">{{ $t('InputGroupLarge') }}</label>
                  <div class="col-lg-10 mb-3">
                    <div class="input-group input-group-lg">
                      <span class="input-group-text" id="sizing-addon1">{{ $t('Large') }}</span>
                      <b-form-input type="text" class="form-control input-height" placeholder="Username"
                        aria-describedby="sizing-addon1"></b-form-input>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-form-label col-lg-2">{{ $t('InputGroupDefault') }}</label>
                  <div class="col-lg-10 mb-3">
                    <div class="input-group">
                      <span class="input-group-text" id="sizing-addon2">{{ $t('Default') }}</span>
                      <b-form-input type="text" class="form-control" placeholder="Username"
                        aria-describedby="sizing-addon2"></b-form-input>
                    </div>
                  </div>
                </div>
                <div class="form-group row mb-0">
                  <label class="col-form-label col-lg-2">{{ $t('InputGroupSmall') }}</label>
                  <div class="col-lg-10">
                    <div class="input-group input-group-sm">
                      <span class="input-group-text" id="sizing-addon3">{{ $t('Small') }}</span>
                      <b-form-input type="text" class="form-control" placeholder="Username"
                        aria-describedby="sizing-addon3"></b-form-input>
                    </div>
                  </div>
                </div>
              </b-form>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('CheckboxandRadioAddons') }}</h5>
            </div>
            <div class="card-body">
              <b-form action="#">
                <div class="form-group row">
                  <label class="col-form-label col-lg-2">{{ $t('Checkbox') }}</label>
                  <div class="col-lg-10 mb-3">
                    <div class="input-group">
                      <span class="input-group-text">
                        <input type="checkbox" />
                      </span>
                      <b-form-input type="text" class="form-control"></b-form-input>
                    </div>
                  </div>
                </div>
                <div class="form-group row mb-0">
                  <label class="col-form-label col-lg-2">{{ $t('Radio') }}</label>
                  <div class="col-lg-10 mb-3">
                    <div class="input-group">
                      <span class="input-group-text">
                        <input type="radio" />
                      </span>
                      <b-form-input type="text" class="form-control"></b-form-input>
                    </div>
                  </div>
                </div>
              </b-form>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('MultipleAddons') }}</h5>
            </div>
            <div class="card-body">
              <b-form action="#">
                <div class="form-group row">
                  <label class="col-form-label col-lg-2">{{ $t('RadioandTextAddons') }}</label>
                  <div class="col-lg-10">
                    <div class="input-group">
                      <span class="input-group-text">
                        <input type="checkbox" />
                      </span>
                      <span class="input-group-text">$</span>
                      <b-form-input type="text" class="form-control"></b-form-input>
                    </div>
                  </div>
                </div>
                <div class="form-group row mb-0">
                  <label class="col-form-label col-lg-2">{{ $t('TwoAddons') }}</label>
                  <div class="col-lg-10">
                    <div class="input-group">
                      <span class="input-group-text">$</span>
                      <span class="input-group-text">0.00</span>
                      <b-form-input type="text" class="form-control"></b-form-input>
                    </div>
                  </div>
                </div>
              </b-form>
            </div>
          </div>
          <!-- <div class="card">
            <div class="card-header">
              <h5 class="card-title">Buttons with dropdowns</h5>
            </div>
            <div class="card-body">
              <b-form action="#">
                <div class="form-group row">
                  <label class="col-form-label col-lg-2">Radio and Text Addons</label>
                  <div class="col-lg-10">
                    <div class="input-group">
                      <button type="button" class="btn btn-white dropdown-toggle" data-bs-toggle="dropdown">
                        Dropdown
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="javascript:void(0);">Action</a>
                        <a class="dropdown-item" href="javascript:void(0);">Another action</a>
                        <a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                        <div role="separator" class="dropdown-divider"></div>
                        <a class="dropdown-item" href="javascript:void(0);">Separated link</a>
                      </div>
                      <b-form-input type="text" class="form-control" placeholder="Left dropdown"></b-form-input>
                    </div>
                  </div>

                  <div class="form-group row mb-0">
                    <label class="col-form-label col-lg-2">Two Addons</label>
                    <div class="col-lg-10">
                      <div class="input-group">
                        <b-form-input type="text" class="form-control" placeholder="Right dropdown"></b-form-input>
                        <div class="input-group-append">
                          <button type="button" class="btn btn-white dropdown-toggle" data-bs-toggle="dropdown">
                            Dropdown
                          </button>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0);">Action</a>
                            <a class="dropdown-item" href="javascript:void(0);">Another action</a>
                            <a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                            <div role="separator" class="dropdown-divider"></div>
                            <a class="dropdown-item" href="javascript:void(0);">Separated link</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </b-form>
            </div>
          </div> -->
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('Buttonswithdropdowns') }}</h5>
            </div>
            <div class="card-body">
              <b-form action="#">
                <div class="mb-3 row">
                  <label class="col-form-label col-lg-2">{{ $t('LeftDropdownTextAddons') }}</label>
                  <div class="col-lg-10">
                    <div class="input-group">
                      <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Dropdown
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);">{{ $t('Action') }}</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);">{{ $t('Anotheraction') }}</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);">{{ $t('Somethingelsehere') }}</a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);">{{ $t('Separatedlink') }}</a>
                        </li>
                      </ul>
                      <input type="text" class="form-control" aria-label="Text input with dropdown button" />
                    </div>
                  </div>
                </div>

                <div class="mb-3 row mb-0">
                  <label class="col-form-label col-lg-2">{{ $t('RightDropdownTextAddons') }}</label>
                  <div class="col-lg-10">
                    <div class="input-group">
                      <input type="text" class="form-control" aria-label="Text input with dropdown button" />
                      <button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Dropdown
                      </button>
                      <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);">{{ $t('Action') }}</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);">{{ $t('Anotheraction') }}</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);">{{ $t('Somethingelsehere') }}</a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);">{{ $t('Separatedlink') }}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="mb-3 row mb-0">
                  <label class="col-form-label col-lg-2">{{ $t('RightDropdownTextAddons') }}</label>
                  <div class="col-lg-10">
                    <div class="input-group">
                      <button class="btn btn-soft-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        {{ $t('Dropdown') }}
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);">{{ $t('Actionbefore') }}</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);">{{ $t('Anotheractionbefore') }}</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);">{{ $t('Somethingelsehere') }}</a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);">{{ $t('Separatedlink') }}</a>
                        </li>
                      </ul>
                      <input type="text" class="form-control" aria-label="Text input with 2 dropdown buttons" />
                      <button class="btn btn-soft-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Dropdown
                      </button>
                      <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);">{{ $t('Action') }}</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);">{{ $t('Anotheraction') }}</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);">{{ $t('Somethingelsehere') }}</a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);">{{ $t('Separatedlink') }}</a>
                        </li>
                      </ul>
                    </div>
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
export default {
  data() {
    return {};
  },
};
</script>
