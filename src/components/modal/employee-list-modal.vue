<template>
  <!-- Add Employee -->
  <div class="modal fade" id="add_employee">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <div class="d-flex align-items-center">
            <h4 class="modal-title me-2">{{ $t('AddNewEmployee') }}</h4>
            <span>{{ $t('EmployeeID:EMP-0024') }}</span>
          </div>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="contact-grids-tab">
            <ul class="nav nav-underline" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="info-tab" data-bs-toggle="tab" data-bs-target="#basic-info"
                  type="button" role="tab" aria-selected="true">
                  {{ $t('BasicInformation') }}
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="address-tab" data-bs-toggle="tab" data-bs-target="#address" type="button"
                  role="tab" aria-selected="false">
                  {{ $t('Permissions') }}
                </button>
              </li>
            </ul>
          </div>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="basic-info" role="tabpanel" aria-labelledby="info-tab"
              tabindex="0">
              <div class="modal-body pb-0">
                <div class="row">
                  <div class="col-md-12">
                    <div class="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                      <div
                        class="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames">
                        <i class="ti ti-photo text-gray-2 fs-16"></i>
                      </div>
                      <div class="profile-upload">
                        <div class="mb-2">
                          <h6 class="mb-1">{{ $t('UploadProfileImage') }}</h6>
                          <p class="fs-12">{{ $t('Imageshouldbebelow4mb') }}</p>
                        </div>
                        <div class="profile-uploader d-flex align-items-center">
                          <div class="drag-upload-btn btn btn-sm btn-primary me-2">
                            {{ $t('Upload') }}
                            <input type="file" class="form-control image-sign" multiple="" />
                          </div>
                          <a href="#" class="btn btn-light btn-sm">{{ $t('cancel') }}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('FirstName') }} <span class="text-danger"> *</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('LastName') }}</label>
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('EmployeeID') }} <span class="text-danger"> *</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('JoiningDate') }} <span class="text-danger"> *</span></label>
                      <div class="input-icon-end position-relative">
                        <date-picker v-model="startdate" class="form-control datetimepicker" placeholder="dd/mm/yyyy"
                          :editable="true" :clearable="false" :input-format="dateFormat" />
                        <span class="input-icon-addon">
                          <i class="ti ti-calendar text-gray-7"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('Username') }} <span class="text-danger"> *</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('email') }} <span class="text-danger"> *</span></label>
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('Password') }} <span class="text-danger"> *</span></label>
                      <div class="pass-group">
                        <input :type="showPassword ? 'text' : 'password'" class="pass-input form-control" />
                        <span @click="toggleShow" class="ti toggle-password" :class="{
                          'ti-eye': showPassword,
                          'ti-eye-off': !showPassword,
                        }"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('ConfirmPassword') }} <span class="text-danger"> *</span></label>
                      <div class="pass-group">
                        <input :type="showPassword1 ? 'text' : 'password'" class="pass-inputs form-control" />
                        <span @click="toggleShow1" class="ti toggle-passwords" :class="{
                          'ti-eye': showPassword1,
                          'ti-eye-off': !showPassword1,
                        }"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('PhoneNumber') }} <span class="text-danger"> *</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('Company') }}<span class="text-danger"> *</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('department') }}</label>
                      <vue-select :options="DepartM" id="departm" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('Designation') }}</label>
                      <vue-select :options="Desig" id="desigOne" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('About') }} <span class="text-danger"> *</span></label>
                      <textarea class="form-control" rows="3"></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-light border me-2" data-bs-dismiss="modal">
                  {{ $t('cancel') }}
                </button>
                <button type="submit" class="btn btn-primary">{{ $t('save') }}</button>
              </div>
            </div>
            <div class="tab-pane fade" id="address" role="tabpanel" aria-labelledby="address-tab" tabindex="0">
              <div class="modal-body">
                <div class="card bg-light-500 shadow-none">
                  <div class="card-body d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                    <h6>{{ $t('EnableOptions') }}</h6>
                    <div class="d-flex align-items-center justify-content-end">
                      <div class="form-check form-switch me-2">
                        <label class="form-check-label mt-0">
                          <input class="form-check-input me-2" type="checkbox" role="switch" />
                          {{ $t('EnableallModule') }}
                        </label>
                      </div>
                      <div class="form-check d-flex align-items-center">
                        <label class="form-check-label mt-0">
                          <input class="form-check-input" type="checkbox" checked="" />
                          {{ $t('SelectAll') }}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="table-responsive border rounded">
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>
                          <div class="form-check form-switch me-2">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input me-2" type="checkbox" role="switch" checked />
                              {{ $t('Holidays') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" checked="" />
                              {{ $t('Read') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Write') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Create') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" checked="" />
                              {{ $t('Delete') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Import') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('export') }}
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check form-switch me-2">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input me-2" type="checkbox" role="switch" />
                              {{ $t('Leaves') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Read') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Write') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Create') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Delete') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Import') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('export') }}
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check form-switch me-2">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input me-2" type="checkbox" role="switch" />
                              {{ $t('Clients') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Read') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Write') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Create') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Delete') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Import') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('export') }}
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check form-switch me-2">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input me-2" type="checkbox" role="switch" />
                              {{ $t('projects') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Read') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Write') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Create') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Delete') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Import') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('export') }}
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check form-switch me-2">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input me-2" type="checkbox" role="switch" />
                              {{ $t('Tasks') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Read') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Write') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Create') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Delete') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Import') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('export') }}
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check form-switch me-2">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input me-2" type="checkbox" role="switch" />
                              {{ $t('Chats') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Read') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Write') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Create') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Delete') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Import') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('export') }}
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check form-switch me-2">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input me-2" type="checkbox" role="switch" checked />
                              {{ $t('Assets') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Read') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Write') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" checked="" />
                              {{ $t('Create') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Delete') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" checked="" />
                              {{ $t('Import') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('export') }}
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check form-switch me-2">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input me-2" type="checkbox" role="switch" />
                              {{ $t('TimingSheets') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Read') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Write') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Create') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Delete') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Import') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('export') }}
                            </label>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-light border me-2" data-bs-dismiss="modal">
                  {{ $t('cancel') }}
                </button>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#success_modal">
                  {{ $t('save') }}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Employee -->

  <!-- Edit Employee -->
  <div class="modal fade" id="edit_employee">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <div class="d-flex align-items-center">
            <h4 class="modal-title me-2">{{ $t('EditEmployee') }}</h4>
            <span>{{ $t('EmployeeID ') }}: EMP -0024</span>
          </div>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="contact-grids-tab">
            <ul class="nav nav-underline" id="myTab2" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="info-tab2" data-bs-toggle="tab" data-bs-target="#basic-info2"
                  type="button" role="tab" aria-selected="true">
                  {{ $t('BasicInformation') }}
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="address-tab2" data-bs-toggle="tab" data-bs-target="#address2" type="button"
                  role="tab" aria-selected="false">
                  {{ $t('Permissions') }}
                </button>
              </li>
            </ul>
          </div>
          <div class="tab-content" id="myTabContent2">
            <div class="tab-pane fade show active" id="basic-info2" role="tabpanel" aria-labelledby="info-tab2"
              tabindex="0">
              <div class="modal-body pb-0">
                <div class="row">
                  <div class="col-md-12">
                    <div class="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                      <div
                        class="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames">
                        <img src="@/assets/img/users/user-13.jpg" alt="img" class="rounded-circle" />
                      </div>
                      <div class="profile-upload">
                        <div class="mb-2">
                          <h6 class="mb-1">{{ $t('UploadProfileImage') }}</h6>
                          <p class="fs-12">{{ $t('Imageshouldbebelow4mb') }}</p>
                        </div>
                        <div class="profile-uploader d-flex align-items-center">
                          <div class="drag-upload-btn btn btn-sm btn-primary me-2">
                            {{ $t('Upload') }}
                            <input type="file" class="form-control image-sign" multiple="" />
                          </div>
                          <a href="#" class="btn btn-light btn-sm">{{ $t('cancel') }}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('FirstName') }} <span class="text-danger"> *</span></label>
                      <input type="text" class="form-control" value="Anthony" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('LastName') }}</label>
                      <input type="email" class="form-control" value="Lewis" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('EmployeeID') }}<span class="text-danger"> *</span></label>
                      <input type="text" class="form-control" value="Emp-001" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('JoiningDate') }} <span class="text-danger"> *</span></label>
                      <div class="input-icon-end position-relative">
                        <date-picker v-model="startdateOne" class="form-control datetimepicker" placeholder="dd/mm/yyyy"
                          :editable="true" :clearable="false" :input-format="dateFormat" />
                        <span class="input-icon-addon">
                          <i class="ti ti-calendar text-gray-7"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('Username') }} <span class="text-danger"> *</span></label>
                      <input type="text" class="form-control" value="Anthony" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('Email') }}<span class="text-danger"> *</span></label>
                      <input type="email" class="form-control" value="anthony@example.com	" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('Password') }}<span class="text-danger"> *</span></label>
                      <div class="pass-group">
                        <input :type="showPassword ? 'text' : 'password'" class="pass-input form-control" />
                        <span @click="toggleShow" class="ti toggle-password" :class="{
                          'ti-eye': showPassword,
                          'ti-eye-off': !showPassword,
                        }"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('ConfirmPassword') }} <span class="text-danger"> *</span></label>
                      <div class="pass-group">
                        <input :type="showPassword1 ? 'text' : 'password'" class="pass-inputs form-control" />
                        <span @click="toggleShow1" class="ti toggle-passwords" :class="{
                          'ti-eye': showPassword1,
                          'ti-eye-off': !showPassword1,
                        }"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('PhoneNumber') }} <span class="text-danger"> *</span></label>
                      <input type="text" class="form-control" value="(123) 4567 890" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('Company') }}<span class="text-danger"> *</span></label>
                      <input type="text" class="form-control" value="Abac Company" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('Department') }}</label>
                      <vue-select :options="EditDepartM" id="editdepartm" placeholder="Finance" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('Designation') }}</label>
                      <vue-select :options="EditDesig" id="editdesig" placeholder="Finance" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="form-label">About <span class="text-danger"> *</span></label>
                      <textarea class="form-control" rows="3"></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-light border me-2" data-bs-dismiss="modal">
                  {{ $t('cancel') }}
                </button>
                <button type="submit" class="btn btn-primary">{{ $t('save') }}</button>
              </div>
            </div>
            <div class="tab-pane fade" id="address2" role="tabpanel" aria-labelledby="address-tab2" tabindex="0">
              <div class="modal-body">
                <div class="card bg-light-500 shadow-none">
                  <div class="card-body d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                    <h6>{{ $t('EnableOptions') }}</h6>
                    <div class="d-flex align-items-center justify-content-end">
                      <div class="form-check form-switch me-2">
                        <label class="form-check-label mt-0">
                          <input class="form-check-input me-2" type="checkbox" role="switch" />
                          {{ $t('EnableallModule') }}
                        </label>
                      </div>
                      <div class="form-check d-flex align-items-center">
                        <label class="form-check-label mt-0">
                          <input class="form-check-input" type="checkbox" checked="" />
                          {{ $t('SelectAll') }}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="table-responsive border rounded">
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>
                          <div class="form-check form-switch me-2">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input me-2" type="checkbox" role="switch" checked />
                              {{ $t('Holidays') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" checked="" />
                              {{ $t('Read') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Write') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Create') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" checked="" />
                              {{ $t('Delete') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Import') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('export') }}
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check form-switch me-2">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input me-2" type="checkbox" role="switch" />
                              {{ $t('Leaves') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Read') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Write') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Create') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Delete') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Import') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('export') }}
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check form-switch me-2">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input me-2" type="checkbox" role="switch" />
                              {{ $t('Clients') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Read') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Write') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Create') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Delete') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Import') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('export') }}
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check form-switch me-2">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input me-2" type="checkbox" role="switch" />
                              {{ $t('projects') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Read') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Write') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Create') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Delete') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Import') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('export') }}
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check form-switch me-2">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input me-2" type="checkbox" role="switch" />
                              {{ $t('Tasks') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Read') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Write') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Create') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Delete') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Import') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('export') }}
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check form-switch me-2">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input me-2" type="checkbox" role="switch" />
                              {{ $t('Chats') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Read') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Write') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Create') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Delete') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Import') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('export') }}
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check form-switch me-2">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input me-2" type="checkbox" role="switch" checked />
                              {{ $t('Assets') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Read') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Write') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" checked="" />
                              {{ $t('Create') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Delete') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" checked="" />
                              {{ $t('Import') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('export') }}
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check form-switch me-2">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input me-2" type="checkbox" role="switch" />
                              {{ $t('TimingSheets') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Read') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Write') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Create') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Delete') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('Import') }}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div class="form-check d-flex align-items-center">
                            <label class="form-check-label mt-0">
                              <input class="form-check-input" type="checkbox" />
                              {{ $t('export') }}
                            </label>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-light border me-2" data-bs-dismiss="modal">
                  {{ $t('cancel') }}
                </button>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#success_modal">
                  {{ $t('save') }}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Employee -->

  <!-- Add Employee Success -->
  <div class="modal fade" id="success_modal" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body">
          <div class="text-center p-3">
            <span class="avatar avatar-lg avatar-rounded bg-success mb-3"><i class="ti ti-check fs-24"></i></span>
            <h5 class="mb-2">{{ $t('EmployeeAddedSuccessfully') }}</h5>
            <p class="mb-3">
              Stephan Peralt {{ $t('hasbeenaddedwithClientID:') }}
              <span class="text-primary">#EMP - 0001</span>
            </p>
            <div>
              <div class="row g-2">
                <div class="col-6">
                  <router-link to="/employee/employee-list"
                    class="btn btn-dark w-100">{{ $t('BacktoList') }}</router-link>
                </div>
                <div class="col-6">
                  <router-link to="/employee/employee-details"
                    class="btn btn-primary w-100">{{ $t('DetailPage') }}</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Client Success -->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span class="avatar avatar-xl bg-transparent-danger text-danger mb-3">
            <i class="ti ti-trash-x fs-36"></i>
          </span>
          <h4 class="mb-1">{{ $t('ConfirmDelete') }}</h4>
          <p class="mb-3">
            {{ $t('Youwanttodeleteallthemarkeditems,thiscantbeundoneonceyoudelete.') }}
          </p>
          <div class="d-flex justify-content-center">
            <a href="#" class="btn btn-light me-3" data-bs-dismiss="modal">{{ $t('cancel') }}</a>
            <router-link to="/employee/employee-list" class="btn btn-danger">{{ $t('Yes,Delete') }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      showPassword: false,
      showPassword1: false,
      startdate: currentDate,
      startdateOne: currentDateOne,
      dateFormat: "dd-MM-yyyy",
      Desig: ["Select", "Finance", "Developer", "Executive"],
      DepartM: ["Select", "All Department", "Finance", "Executive"],
      EditDesig: ["Select", "Finance", "Developer", "Executive"],
      EditDepartM: ["Select", "All Department", "Finance", "Executive"],
    };
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
    buttonLabel1() {
      return this.showPassword1 ? "Hide" : "Show";
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    toggleShow1() {
      this.showPassword1 = !this.showPassword1;
    },
    submitForm() {
      this.$router.push("/employee/employee-list");
    },
  },
};
</script>
