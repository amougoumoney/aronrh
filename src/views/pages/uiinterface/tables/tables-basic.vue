<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <div class="page-wrapper cardhead">
    <div class="content">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col">
            <h3 class="page-title">{{ $t('BasicTables') }}</h3>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <div class="row">
        <div class="col-lg-6">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">{{ $t('BasicTable') }}</h4>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table mb-0">
                  <thead>
                    <tr>
                      <th>{{ $t('FirstName') }}</th>
                      <th>{{ $t('LastName') }}</th>
                      <th>{{ $t('Email') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John</td>
                      <td>Doe</td>
                      <td>john@example.com</td>
                    </tr>
                    <tr>
                      <td>Mary</td>
                      <td>Moe</td>
                      <td>mary@example.com</td>
                    </tr>
                    <tr>
                      <td>July</td>
                      <td>Dooley</td>
                      <td>july@example.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('StripedRows') }}</h5>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-striped mb-0">
                  <thead>
                    <tr>
                      <th>{{ $t('FirstName') }}</th>
                      <th>{{ $t('LastName') }}</th>
                      <th>{{ $t('Email') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John</td>
                      <td>Doe</td>
                      <td>john@example.com</td>
                    </tr>
                    <tr>
                      <td>Mary</td>
                      <td>Moe</td>
                      <td>mary@example.com</td>
                    </tr>
                    <tr>
                      <td>July</td>
                      <td>Dooley</td>
                      <td>july@example.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('BorderedTable') }}</h5>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered mb-0">
                  <thead>
                    <tr>
                      <th>{{ $t('FirstName') }}</th>
                      <th>{{ $t('LastName') }}</th>
                      <th>{{ $t('Email') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John</td>
                      <td>Doe</td>
                      <td>john@example.com</td>
                    </tr>
                    <tr>
                      <td>Mary</td>
                      <td>Moe</td>
                      <td>mary@example.com</td>
                    </tr>
                    <tr>
                      <td>July</td>
                      <td>Dooley</td>
                      <td>july@example.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('BorderlessTable') }}</h5>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-borderless mb-0">
                  <thead>
                    <tr>
                      <th>{{ $t('FirstName') }}</th>
                      <th>{{ $t('LastName') }}</th>
                      <th>{{ $t('Email') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John</td>
                      <td>Doe</td>
                      <td>john@example.com</td>
                    </tr>
                    <tr>
                      <td>Mary</td>
                      <td>Moe</td>
                      <td>mary@example.com</td>
                    </tr>
                    <tr>
                      <td>July</td>
                      <td>Dooley</td>
                      <td>july@example.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('HoverRows') }}</h5>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover mb-0">
                  <thead>
                    <tr>
                      <th>{{ $t('FirstName') }}</th>
                      <th>{{ $t('LastName') }}</th>
                      <th>{{ $t('Email') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John</td>
                      <td>Doe</td>
                      <td>john@example.com</td>
                    </tr>
                    <tr>
                      <td>Mary</td>
                      <td>Moe</td>
                      <td>mary@example.com</td>
                    </tr>
                    <tr>
                      <td>July</td>
                      <td>Dooley</td>
                      <td>july@example.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('ContextualClasses') }}</h5>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table mb-0">
                  <thead>
                    <tr>
                      <th>{{ $t('FirstName') }}</th>
                      <th>{{ $t('LastName') }}</th>
                      <th>{{ $t('Email') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{{ $t('Default') }}</td>
                      <td>Defaultson</td>
                      <td>def@somemail.com</td>
                    </tr>
                    <tr class="table-primary">
                      <td>{{ $t('Primary')}}</td>
                      <td>Doe</td>
                      <td>john@example.com</td>
                    </tr>
                    <tr class="table-secondary">
                      <td>{{ $t('Secondary') }}</td>
                      <td>Moe</td>
                      <td>mary@example.com</td>
                    </tr>
                    <tr class="table-success">
                      <td>{{ $t('Success') }}</td>
                      <td>Dooley</td>
                      <td>july@example.com</td>
                    </tr>
                    <tr class="table-danger">
                      <td>{{ $t('Danger') }}</td>
                      <td>Refs</td>
                      <td>bo@example.com</td>
                    </tr>
                    <tr class="table-warning">
                      <td>{{ $t('Warning') }}</td>
                      <td>Activeson</td>
                      <td>act@example.com</td>
                    </tr>
                    <tr class="table-info">
                      <td>{{ $t('Info') }}</td>
                      <td>Activeson</td>
                      <td>act@example.com</td>
                    </tr>
                    <tr class="table-light">
                      <td>{{ $t('Light') }}</td>
                      <td>Activeson</td>
                      <td>act@example.com</td>
                    </tr>
                    <tr class="table-dark">
                      <td>{{ $t('Dark') }}</td>
                      <td>Activeson</td>
                      <td>act@example.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('ResponsiveTables') }}</h5>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-nowrap mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>{{ $t('FirstName') }}</th>
                      <th>{{ $t('LastName') }}</th>
                      <th>{{ $t('Age') }}</th>
                      <th>{{ $t('City') }}</th>
                      <th>{{ $t('Country') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">{{ $t('TableWithoutBorders') }}</div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table text-nowrap table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">{{ $t('UserName') }}</th>
                      <th scope="col">{{ $t('TransactionId') }}</th>
                      <th scope="col">{{ $t('Created') }}</th>
                      <th scope="col">{{ $t('Status') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Harshrath</th>
                      <td>#5182-3467</td>
                      <td>24 {{ $t('May') }} 2022</td>
                      <td><span class="badge bg-primary">{{ $t('Fixed') }}</span></td>
                    </tr>
                    <tr>
                      <th scope="row">Zozo Hadid</th>
                      <td>#5182-3412</td>
                      <td>02 {{ $t('July') }} 2022</td>
                      <td><span class="badge bg-warning">{{ $t('InProgress') }}</span></td>
                    </tr>
                    <tr>
                      <th scope="row">Martiana</th>
                      <td>#5182-3423</td>
                      <td>15 {{ $t('April') }} 2022</td>
                      <td><span class="badge bg-success">{{ $t('Completed') }}</span></td>
                    </tr>
                    <tr>
                      <th scope="row">Alex Carey</th>
                      <td>#5182-3456</td>
                      <td>17 {{ $t('March') }} 2022</td>
                      <td><span class="badge bg-danger">{{ $t('Pending') }}</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">{{ $t('Stripedrows') }}</div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table text-nowrap table-striped">
                  <thead>
                    <tr>
                      <th scope="col">{{ $t('id') }}</th>
                      <th scope="col">{{ $t('Date') }}</th>
                      <th scope="col">{{ $t('Customer') }}</th>
                      <th scope="col">{{ $t('Action') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">2022R-01</th>
                      <td>27-010-2022</td>
                      <td>Moracco</td>
                      <td>
                        <button class="btn btn-sm btn-success btn-wave waves-effect waves-light">
                          <i class="feather-download align-middle me-2 d-inline-block"></i>{{ $t('Download') }}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2022R-02</th>
                      <td>28-10-2022</td>
                      <td>Thornton</td>
                      <td>
                        <button class="btn btn-sm btn-success btn-wave waves-effect waves-light">
                          <i class="feather-download align-middle me-2 d-inline-block"></i>{{ $t('Download') }}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2022R-03</th>
                      <td>22-10-2022</td>
                      <td>Larry Bird</td>
                      <td>
                        <button class="btn btn-sm btn-success btn-wave waves-effect waves-light">
                          <i class="feather-download align-middle me-2 d-inline-block"></i>{{ $t('Download') }}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2022R-04</th>
                      <td>29-09-2022</td>
                      <td>Erica Sean</td>
                      <td>
                        <button class="btn btn-sm btn-success btn-wave waves-effect waves-light">
                          <i class="feather-download align-middle me-2 d-inline-block"></i>{{ $t('Download') }}
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">{{ $t('Stripedcolumns') }}</div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table text-nowrap table-striped-columns">
                  <thead>
                    <tr>
                      <th scope="col">{{ $t('id') }}</th>
                      <th scope="col">{{ $t('Date') }}</th>
                      <th scope="col">{{ $t('Customer') }}</th>
                      <th scope="col">{{ $t('Action') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">2022R-01</th>
                      <td>27-010-2022</td>
                      <td>Moracco</td>
                      <td>
                        <button class="btn btn-sm btn-danger btn-wave waves-effect waves-light">
                          <i class="feather-trash align-middle me-2 d-inline-block"></i>{{ $t('Delete') }}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2022R-02</th>
                      <td>28-10-2022</td>
                      <td>Thornton</td>
                      <td>
                        <button class="btn btn-sm btn-danger btn-wave waves-effect waves-light">
                          <i class="feather-trash align-middle me-2 d-inline-block"></i>{{ $t('Delete') }}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2022R-03</th>
                      <td>22-10-2022</td>
                      <td>Larry Bird</td>
                      <td>
                        <button class="btn btn-sm btn-danger btn-wave waves-effect waves-light">
                          <i class="feather-trash align-middle me-2 d-inline-block"></i>{{ $t('Delete') }}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2022R-04</th>
                      <td>29-09-2022</td>
                      <td>Erica Sean</td>
                      <td>
                        <button class="btn btn-sm btn-danger btn-wave waves-effect waves-light">
                          <i class="feather-trash align-middle me-2 d-inline-block"></i>{{ $t('Delete') }}
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">{{ $t('SmallTables') }}</div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table text-nowrap table-sm">
                  <thead>
                    <tr>
                      <th scope="col">{{ $t('Invoice') }}</th>
                      <th scope="col">{{ $t('CreatedDate') }}</th>
                      <th scope="col">{{ $t('Status') }}</th>
                      <th scope="col">{{ $t('Action') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="checkebox-sm" checked="" />
                          <label class="form-check-label" for="checkebox-sm">
                            Zelensky
                          </label>
                        </div>
                      </th>
                      <td>25-{{$t('Apr')}}-2021</td>
                      <td><span class="badge bg-soft-success">{{ $t('Paid') }}</span></td>
                      <td>
                        <div class="hstack gap-2 fs-15">
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"><i
                              class="feather-download"></i></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"><i
                              class="feather-edit"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="checkebox-sm1" />
                          <label class="form-check-label" for="checkebox-sm1">
                            Kim Jong
                          </label>
                        </div>
                      </th>
                      <td>29-{{$t('April')}}-2022</td>
                      <td><span class="badge bg-soft-danger">{{ $t('Pending') }}</span></td>
                      <td>
                        <div class="hstack gap-2 fs-15">
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"><i
                              class="feather-download"></i></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"><i
                              class="feather-edit"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="checkebox-sm2" />
                          <label class="form-check-label" for="checkebox-sm2">
                            Obana
                          </label>
                        </div>
                      </th>
                      <td>30-Nov-2022</td>
                      <td><span class="badge bg-soft-success">{{ $t('Paid') }}</span></td>
                      <td>
                        <div class="hstack gap-2 fs-15">
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"><i
                              class="feather-download"></i></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"><i
                              class="feather-edit"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="checkebox-sm3" />
                          <label class="form-check-label" for="checkebox-sm3">
                            Sean Paul
                          </label>
                        </div>
                      </th>
                      <td>01-Jan-2022</td>
                      <td><span class="badge bg-soft-success">{{ $t('Paid') }}</span></td>
                      <td>
                        <div class="hstack gap-2 fs-15">
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"><i
                              class="feather-download"></i></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"><i
                              class="feather-edit"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="checkebox-sm4" />
                          <label class="form-check-label" for="checkebox-sm4">
                            Karizma
                          </label>
                        </div>
                      </th>
                      <td>14-{{ $t('Feb') }}-2022</td>
                      <td><span class="badge bg-soft-danger">{{ $t('Pending') }}</span></td>
                      <td>
                        <div class="hstack gap-2 fs-15">
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"><i
                              class="feather-download"></i></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"><i
                              class="feather-edit"></i></a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">{{ $t('TableHeadPrimary') }}</div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table text-nowrap">
                  <thead class="table-primary">
                    <tr>
                      <th scope="col">{{ $t('UserName') }}</th>
                      <th scope="col">{{ $t('TransactionId') }}</th>
                      <th scope="col">{{ $t('Created') }}</th>
                      <th scope="col">{{ $t('Status') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Harshrath</th>
                      <td>#5182-3467</td>
                      <td>24 May 2022</td>
                      <td>
                        <div class="hstack gap-2 fs-15">
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-soft-success rounded-pill"><i
                              class="feather-download"></i></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-soft-info rounded-pill"><i
                              class="feather-edit"></i></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-soft-danger rounded-pill"><i
                              class="feather-trash"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Zozo Hadid</th>
                      <td>#5182-3412</td>
                      <td>02 {{ $t('July') }} 2022</td>
                      <td>
                        <div class="hstack gap-2 fs-15">
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-soft-success rounded-pill"><i
                              class="feather-download"></i></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-soft-info rounded-pill"><i
                              class="feather-edit"></i></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-soft-danger rounded-pill"><i
                              class="feather-trash"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Martiana</th>
                      <td>#5182-3423</td>
                      <td>15 {{ $t('April') }} 2022</td>
                      <td>
                        <div class="hstack gap-2 fs-15">
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-soft-success rounded-pill"><i
                              class="feather-download"></i></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-soft-info rounded-pill"><i
                              class="feather-edit"></i></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-soft-danger rounded-pill"><i
                              class="feather-trash"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Alex Carey</th>
                      <td>#5182-3456</td>
                      <td>17 {{ $t('March') }} 2022</td>
                      <td>
                        <div class="hstack gap-2 fs-15">
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-soft-success rounded-pill"><i
                              class="feather-download"></i></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-soft-info rounded-pill"><i
                              class="feather-edit"></i></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-soft-danger rounded-pill"><i
                              class="feather-trash"></i></a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-12">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">{{ $t('HoverableRows') }}</div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table text-nowrap table-hover">
                  <thead>
                    <tr>
                      <th scope="col">{{ $t('ProductManager') }}</th>
                      <th scope="col">{{ $t('Category') }}</th>
                      <th scope="col">{{ $t('Team') }}</th>
                      <th scope="col">{{ $t('Status') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="avatar avatar-sm me-2 avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-10.jpg" alt="img" />
                          </div>
                          <div>
                            <div class="lh-1">
                              <span>Joanna Smith</span>
                            </div>
                            <div class="lh-1">
                              <span class="fs-11 text-muted">joannasmith14@gmail.com</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td><span class="badge bg-soft-primary">Fashion</span></td>
                      <td>
                        <div class="avatar-list-stacked">
                          <span class="avatar avatar-sm avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-02.jpg" alt="img" />
                          </span>
                          <span class="avatar avatar-sm avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-08.jpg" alt="img" />
                          </span>
                          <span class="avatar avatar-sm avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-02.jpg" alt="img" />
                          </span>
                          <a class="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                            href="javascript:void(0);">
                            +5
                          </a>
                        </div>
                      </td>
                      <td>
                        <div class="progress progress-xs">
                          <div class="progress-bar bg-primary" role="progressbar" style="width: 52%" aria-valuenow="52"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="avatar avatar-sm me-2 avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-02.jpg" alt="img" />
                          </div>
                          <div>
                            <div class="lh-1">
                              <span>Kara Kova</span>
                            </div>
                            <div class="lh-1">
                              <span class="fs-11 text-muted">milesakara@gmail.com</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td><span class="badge bg-soft-warning">{{ $t('Clothing') }}</span></td>
                      <td>
                        <div class="avatar-list-stacked">
                          <span class="avatar avatar-sm avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-04.jpg" alt="img" />
                          </span>
                          <span class="avatar avatar-sm avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-06.jpg" alt="img" />
                          </span>
                          <a class="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                            href="javascript:void(0);">
                            +6
                          </a>
                        </div>
                      </td>
                      <td>
                        <div class="progress progress-xs">
                          <div class="progress-bar bg-primary" role="progressbar" style="width: 40%" aria-valuenow="40"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="avatar avatar-sm me-2 avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-16.jpg" alt="img" />
                          </div>
                          <div>
                            <div class="lh-1">
                              <span>Donald Trimb</span>
                            </div>
                            <div class="lh-1">
                              <span class="fs-11 text-muted">donaldo21@gmail.com</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td><span class="badge bg-soft-dark">{{ $t('Electronics') }}</span></td>
                      <td>
                        <div class="avatar-list-stacked">
                          <span class="avatar avatar-sm avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-01.jpg" alt="img" />
                          </span>
                          <span class="avatar avatar-sm avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-11.jpg" alt="img" />
                          </span>
                          <span class="avatar avatar-sm avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-15.jpg" alt="img" />
                          </span>
                          <a class="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                            href="javascript:void(0);">
                            +2
                          </a>
                        </div>
                      </td>
                      <td>
                        <div class="progress progress-xs">
                          <div class="progress-bar bg-primary" role="progressbar" style="width: 17%" aria-valuenow="17"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="avatar avatar-sm me-2 avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-13.jpg" alt="img" />
                          </div>
                          <div>
                            <div class="lh-1">
                              <span>Justin Gaethje</span>
                            </div>
                            <div class="lh-1">
                              <span class="fs-11 text-muted">justingae@gmail.com</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td><span class="badge bg-soft-danger">{{ $t('Sports') }}</span></td>
                      <td>
                        <div class="avatar-list-stacked">
                          <span class="avatar avatar-sm avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-04.jpg" alt="img" />
                          </span>
                          <span class="avatar avatar-sm avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-06.jpg" alt="img" />
                          </span>
                          <a class="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                            href="javascript:void(0);">
                            +5
                          </a>
                        </div>
                      </td>
                      <td>
                        <div class="progress progress-xs">
                          <div class="progress-bar bg-primary" role="progressbar" style="width: 72%" aria-valuenow="72"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">{{ $t('HoverablerowsWithstripedrows') }}</div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table text-nowrap table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">{{ $t('Invoice') }}</th>
                      <th scope="col">{{ $t('Customer') }}</th>
                      <th scope="col">{{ $t('Status') }}</th>
                      <th scope="col">{{ $t('Date') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">IN-2032</th>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="avatar avatar-sm me-2 avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-15.jpg" alt="img" />
                          </div>
                          <div>
                            <div class="lh-1">
                              <span>Mark Cruise</span>
                            </div>
                            <div class="lh-1">
                              <span class="fs-11 text-muted">markcruise24@gmail.com</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span class="badge bg-soft-success"><i class="ri-check-fill align-middle me-1"></i>{{ $t('Paid') }}</span>
                      </td>
                      <td>Jul 26,2022</td>
                    </tr>
                    <tr>
                      <th scope="row">IN-2022</th>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="avatar avatar-sm me-2 avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-12.jpg" alt="img" />
                          </div>
                          <div>
                            <div class="lh-1">
                              <span>Charanjeep</span>
                            </div>
                            <div class="lh-1">
                              <span class="fs-11 text-muted">charanjeep@gmail.in</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span class="badge bg-soft-success"><i class="ri-check-fill align-middle me-1"></i>{{ $t('Paid') }}</span>
                      </td>
                      <td>Mar 14,2022</td>
                    </tr>
                    <tr>
                      <th scope="row">IN-2014</th>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="avatar avatar-sm me-2 avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-05.jpg" alt="img" />
                          </div>
                          <div>
                            <div class="lh-1">
                              <span>Samantha Julie</span>
                            </div>
                            <div class="lh-1">
                              <span class="fs-11 text-muted">julie453@gmail.com</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span class="badge bg-soft-danger"><i
                            class="ri-close-fill align-middle me-1"></i>{{ $t('Cancelled') }}</span>
                      </td>
                      <td>Feb 1,2022</td>
                    </tr>
                    <tr>
                      <th scope="row">IN-2036</th>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="avatar avatar-sm me-2 avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-11.jpg" alt="img" />
                          </div>
                          <div>
                            <div class="lh-1">
                              <span>Simon Cohen</span>
                            </div>
                            <div class="lh-1">
                              <span class="fs-11 text-muted">simon@gmail.com</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span class="badge bg-light text-dark"><i
                            class="ri-reply-line align-middle me-1"></i>{{ $t('Refunded') }}</span>
                      </td>
                      <td>{{ $t('Apr') }} 24,2022</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Always responsive -->
      <div class="row">
        <div class="col-xl-12">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">{{ $t('Alwaysresponsive') }}</div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table text-nowrap">
                  <thead>
                    <tr>
                      <th scope="col">{{ $t('TeamHead') }}</th>
                      <th scope="col">{{ $t('Category') }}</th>
                      <th scope="col">{{ $t('Role') }}</th>
                      <th scope="col">{{ $t('Gmail') }}</th>
                      <th scope="col">{{ $t('Team') }}</th>
                      <th scope="col">{{ $t('WorkProgress') }}</th>
                      <th scope="col">{{ $t('Revenue') }}</th>
                      <th scope="col">{{ $t('Action') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <span class="avatar avatar-xs me-2 online avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-03.jpg" alt="img" /> </span>Mayor Kelly
                        </div>
                      </td>
                      <td>{{ $t('Manufacturer') }}</td>
                      <td><span class="badge bg-soft-primary">{{ $t('TeamLead') }}</span></td>
                      <td>mayorkrlly@gmail.com</td>
                      <td>
                        <div class="avatar-list-stacked">
                          <span class="avatar avatar-sm avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-02.jpg" alt="img" />
                          </span>
                          <span class="avatar avatar-sm avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-08.jpg" alt="img" />
                          </span>
                          <span class="avatar avatar-sm avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-02.jpg" alt="img" />
                          </span>
                          <a class="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                            href="javascript:void(0);">
                            +4
                          </a>
                        </div>
                      </td>
                      <td>
                        <div class="progress progress-xs">
                          <div class="progress-bar bg-primary" role="progressbar" style="width: 52%" aria-valuenow="52"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </td>
                      <td>$10,984.29</td>
                      <td>
                        <div class="hstack gap-2 fs-15">
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-success"><i
                              class="feather-download"></i></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-info"><i
                              class="feather-edit"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <span class="avatar avatar-xs me-2 online avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-12.jpg" alt="img" /> </span>Andrew Garfield
                        </div>
                      </td>
                      <td>{{ $t('ManagingDirector') }}</td>
                      <td><span class="badge bg-soft-warning">{{ $t('Director') }}</span></td>
                      <td>andrewgarfield@gmail.com</td>
                      <td>
                        <div class="avatar-list-stacked">
                          <span class="avatar avatar-sm avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-01.jpg" alt="img" />
                          </span>
                          <span class="avatar avatar-sm avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-05.jpg" alt="img" />
                          </span>
                          <span class="avatar avatar-sm avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-11.jpg" alt="img" />
                          </span>
                          <span class="avatar avatar-sm avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-15.jpg" alt="img" />
                          </span>
                          <a class="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                            href="javascript:void(0);">
                            +4
                          </a>
                        </div>
                      </td>
                      <td>
                        <div class="progress progress-xs">
                          <div class="progress-bar bg-primary" role="progressbar" style="width: 91%" aria-valuenow="91"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </td>
                      <td>$1.4billion</td>
                      <td>
                        <div class="hstack gap-2 fs-15">
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-success"><i
                              class="feather-download"></i></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-info"><i
                              class="feather-edit"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <span class="avatar avatar-xs me-2 online avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-14.jpg" alt="img" /> </span>Simon Cowel
                        </div>
                      </td>
                      <td>{{ $t('ServiceManager') }}</td>
                      <td><span class="badge bg-soft-success">{{ $t('manager') }}</span></td>
                      <td>simoncowel234@gmail.com</td>
                      <td>
                        <div class="avatar-list-stacked">
                          <span class="avatar avatar-sm avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-06.jpg" alt="img" />
                          </span>
                          <span class="avatar avatar-sm avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-16.jpg" alt="img" />
                          </span>
                          <a class="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                            href="javascript:void(0);">
                            +10
                          </a>
                        </div>
                      </td>
                      <td>
                        <div class="progress progress-xs">
                          <div class="progress-bar bg-primary" role="progressbar" style="width: 45%" aria-valuenow="45"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </td>
                      <td>$7,123.21</td>
                      <td>
                        <div class="hstack gap-2 fs-15">
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-success"><i
                              class="feather-download"></i></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-info"><i
                              class="feather-edit"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <span class="avatar avatar-xs me-2 online avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-05.jpg" alt="img" /> </span>Mirinda Hers
                        </div>
                      </td>
                      <td>{{ $t('Recruiter') }}</td>
                      <td><span class="badge bg-soft-danger">{{ $t('Employee') }}</span></td>
                      <td>mirindahers@gmail.com</td>
                      <td>
                        <div class="avatar-list-stacked">
                          <span class="avatar avatar-sm avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-03.jpg" alt="img" />
                          </span>
                          <span class="avatar avatar-sm avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-10.jpg" alt="img" />
                          </span>
                          <span class="avatar avatar-sm avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-14.jpg" alt="img" />
                          </span>
                          <a class="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                            href="javascript:void(0);">
                            +6
                          </a>
                        </div>
                      </td>
                      <td>
                        <div class="progress progress-xs">
                          <div class="progress-bar bg-primary" role="progressbar" style="width: 21%" aria-valuenow="21"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </td>
                      <td>$2,325.45</td>
                      <td>
                        <div class="hstack gap-2 fs-15">
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-success"><i
                              class="feather-download"></i></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-info"><i
                              class="feather-edit"></i></a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Always responsive -->

      <!-- Primary Table -->
      <div class="row">
        <div class="col-xl-12">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">{{ $t('PrimaryTable') }}</div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table text-nowrap table-primary">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">{{ $t('First') }}</th>
                      <th scope="col">{{ $t('Last') }}</th>
                      <th scope="col">{{ $t('Handle') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry the Bird</td>
                      <td>Thornton</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Primary Table -->

      <!-- Table Head -->
      <div class="row">
        <div class="col-xl-12">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">{{ $t('Tableheadoptions') }}</div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table">
                  <thead class="thead-primary">
                    <tr>
                      <th>#</th>
                      <th class="w-25">{{ $t('thead-primary') }}</th>
                      <th>{{ $t('LastName') }}</th>
                      <th>{{ $t('UserName') }}</th>
                      <th>{{ $t('Role') }}</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div class="table-responsive">
                <table class="table">
                  <thead class="thead-secondary">
                    <tr>
                      <th>#</th>
                      <th class="w-25">{{ $t('thead-secondary') }}</th>
                      <th>{{ $t('LastName') }}</th>
                      <th>{{ $t('UserName') }}</th>
                      <th>{{ $t('Role') }}</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div class="table-responsive">
                <table class="table">
                  <thead class="thead-success">
                    <tr>
                      <th>#</th>
                      <th class="w-25">{{ $t('thead-success') }}</th>
                      <th>{{ $t('LastName') }}</th>
                      <th>{{ $t('UserName') }}</th>
                      <th>{{ $t('Role') }}</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div class="table-responsive">
                <table class="table">
                  <thead class="thead-warning">
                    <tr>
                      <th>#</th>
                      <th class="w-25">{{ $t('thead-warning') }}</th>
                      <th>{{ $t('LastName') }}</th>
                      <th>{{ $t('UserName') }}</th>
                      <th>{{ $t('Role') }}</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div class="table-responsive">
                <table class="table">
                  <thead class="thead-info">
                    <tr>
                      <th>#</th>
                      <th class="w-25">{{ $t('thead-info') }}</th>
                      <th>{{ $t('LastName') }}</th>
                      <th>{{ $t('UserName') }}</th>
                      <th>{{ $t('Role') }}</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div class="table-responsive">
                <table class="table">
                  <thead class="thead-danger">
                    <tr>
                      <th>#</th>
                      <th class="w-25">{{ $t('thead-danger') }}</th>
                      <th>{{ $t('LastName') }}</th>
                      <th>{{ $t('UserName') }}</th>
                      <th>{{ $t('Role') }}</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div class="table-responsive">
                <table class="table mb-0">
                  <thead class="thead-dark">
                    <tr>
                      <th>#</th>
                      <th class="w-25">{{ $t('thead-dark') }}</th>
                      <th>{{ $t('LastName') }}</th>
                      <th>{{ $t('UserName') }}</th>
                      <th>{{ $t('Role') }}</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div class="table-responsive">
                <table class="table mb-0">
                  <thead class="thead-light">
                    <tr>
                      <th>#</th>
                      <th class="w-25">{{ $t('thead-light') }}</th>
                      <th>{{ $t('LastName') }}</th>
                      <th>{{ $t('UserName') }}</th>
                      <th>{{ $t('Role') }}</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Table Head -->
    </div>
  </div>
</template>
