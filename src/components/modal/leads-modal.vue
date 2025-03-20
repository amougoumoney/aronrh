<template>
  <!-- Add Leads -->
  <div class="modal fade" id="add_leads">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add New Lead</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Lead Name <span class="text-danger"> *</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <div class="d-flex align-items-center">
                    <div class="form-check me-3">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Person
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                        checked />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Organization
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="input-block mb-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <label class="col-form-label">Company <span class="text-danger"> *</span></label>
                    <a href="javascript:void(0);" class="add-new text-primary" data-bs-toggle="modal"
                      data-bs-target="#add_company"><i class="ti ti-plus text-primary me-1"></i>Add New</a>
                  </div>
                  <vue-select :options="InnvoSel" id="innvosel" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Value <span class="text-danger"> *</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Currency<span class="text-danger"> *</span></label>
                  <vue-select :options="EuroSeel" id="saedls" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="lead-phno-col">
                  <div class="row">
                    <div class="col-lg-8">
                      <div class="input-block mb-3">
                        <label class="form-label">Phone Number <span class="text-danger"> *</span></label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-lg-4 d-flex align-items-end">
                      <div class="input-block w-100 mb-3 d-flex align-items-center">
                        <div class="w-100">
                          <vue-select :options="HomeSeel" id="homeseel" placeholder="Work" />
                        </div>
                        <a href="javascript:void(0);" class="add-modal-row text-primary add-lead-phno ms-2"><i
                            class="ti ti-circle-plus"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="lead-email-col">
                  <div class="row">
                    <div class="col-lg-8">
                      <div class="input-block mb-3">
                        <label class="form-label">Email <span class="text-danger"> *</span></label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-lg-4 d-flex align-items-end">
                      <div class="input-block w-100 mb-3 d-flex align-items-center">
                        <div class="w-100">
                          <vue-select :options="OneHomeSeel" id="onehomeseel" placeholder="Work" />
                        </div>
                        <a href="javascript:void(0);" class="add-email-row text-primary add-lead-phno ms-2"><i
                            class="ti ti-circle-plus"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Source <span class="text-danger"> *</span></label>
                  <vue-select :options="SitesSele" id="sitesele" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Industry <span class="text-danger"> *</span></label>
                  <vue-select :options="IndusHos" id="indushos" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Owner <span class="text-danger"> *</span></label>
                  <vue-select :options="VaughanL" id="vaughanl" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Tags <span class="text-danger"> *</span></label>
                  <vue-select :options="Contect" id="contect" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Description <span class="text-danger"> *</span></label>
                  <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                </div>
              </div>
              <div class="col-md-6 d-flex align-items-center">
                <div class="mb-3">
                  <label class="form-label">Visibility</label>
                  <div class="d-flex align-items-center">
                    <div class="form-check me-3">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="public-id" />
                      <label class="form-check-label" for="public-id"> Public </label>
                    </div>
                    <div class="form-check me-3">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="private-id" checked />
                      <label class="form-check-label" for="private-id"> Private </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="people-id" checked />
                      <label class="form-check-label" for="people-id">
                        Select People
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <vue-select :options="LeadStat" id="leadstat" placeholder="Select" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Add Lead</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Leads -->

  <!-- Edit Leads -->
  <div class="modal fade" id="edit_leads">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Lead</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Lead Name <span class="text-danger"> *</span></label>
                  <input type="text" class="form-control" value="Schumm" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <div class="d-flex align-items-center">
                    <div class="form-check me-3">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                      <label class="form-check-label" for="flexRadioDefault4">
                        Person
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault30"
                        checked />
                      <label class="form-check-label" for="flexRadioDefault30">
                        Organization
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="input-block mb-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <label class="col-form-label">Company <span class="text-danger"> *</span></label>
                    <a href="javascript:void(0);" class="add-new text-primary" data-bs-toggle="modal"
                      data-bs-target="#add_company"><i class="ti ti-plus text-primary me-1"></i>Add New</a>
                  </div>
                  <vue-select :options="EditInnvoSel" id="editinnvosel" placeholder="BrightWave Innovations" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Value <span class="text-danger"> *</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Currency<span class="text-danger"> *</span></label>
                  <vue-select :options="EditEuroSeel" id="editsaedls" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="lead-phno-col">
                  <div class="row">
                    <div class="col-lg-8">
                      <div class="input-block mb-3">
                        <label class="form-label">Phone Number <span class="text-danger"> *</span></label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-lg-4 d-flex align-items-end">
                      <div class="input-block w-100 mb-3 d-flex align-items-center">
                        <div class="w-100">
                          <vue-select :options="EditHomeSeel" id="edithomeseel" placeholder="Work" />
                        </div>
                        <a href="javascript:void(0);" class="add-modal-row text-primary add-lead-phno ms-2"><i
                            class="ti ti-circle-plus"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="lead-email-col">
                  <div class="row">
                    <div class="col-lg-8">
                      <div class="input-block mb-3">
                        <label class="form-label">Email <span class="text-danger"> *</span></label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-lg-4 d-flex align-items-end">
                      <div class="input-block w-100 mb-3 d-flex align-items-center">
                        <div class="w-100">
                          <vue-select :options="EditOneHomeSeel" id="editonehomeseel" placeholder="Work" />
                        </div>
                        <a href="javascript:void(0);" class="add-email-row text-primary add-lead-phno ms-2"><i
                            class="ti ti-circle-plus"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Source <span class="text-danger"> *</span></label>
                  <vue-select :options="EditSitesSele" id="editsitesele" placeholder="Social Media" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Industry <span class="text-danger"> *</span></label>
                  <vue-select :options="EditIndusHos" id="editindushos" placeholder="Banking" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Owner <span class="text-danger"> *</span></label>
                  <vue-select :options="EditVaughanL" id="editvaughanl" placeholder="Sharon Roy" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Tags <span class="text-danger"> *</span></label>
                  <vue-select :options="EditContect" id="editcontect" placeholder="Contacted" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Description <span class="text-danger"> *</span></label>
                  <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                </div>
              </div>
              <div class="col-md-6 d-flex align-items-center">
                <div class="mb-3">
                  <label class="form-label">Visibility</label>
                  <div class="d-flex align-items-center">
                    <div class="form-check me-3">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="public-id2" />
                      <label class="form-check-label" for="public-id2"> Public </label>
                    </div>
                    <div class="form-check me-3">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="private-id2" checked />
                      <label class="form-check-label" for="private-id2"> Private </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="people-id2" checked />
                      <label class="form-check-label" for="people-id2">
                        Select People
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <vue-select :options="EditLeadStat" id="editleadstat" placeholder="Active" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Leads -->

  <!-- Add Company -->
  <div class="modal fade" id="add_company">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add New Company</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitFormOne">
          <div class="contact-grids-tab">
            <ul class="nav nav-underline" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="info-tab" data-bs-toggle="tab" data-bs-target="#basic-info"
                  type="button" role="tab" aria-selected="true">
                  Basic Information
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="address-tab" data-bs-toggle="tab" data-bs-target="#address" type="button"
                  role="tab" aria-selected="false">
                  Address
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="social-profile-tab" data-bs-toggle="tab" data-bs-target="#social-profile"
                  type="button" role="tab" aria-selected="false">
                  Social Profiles
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="access-tab" data-bs-toggle="tab" data-bs-target="#access" type="button"
                  role="tab" aria-selected="false">
                  Access
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
                        <img src="@/assets/img/profiles/avatar-30.jpg" alt="img" class="rounded-circle" />
                      </div>
                      <div class="profile-upload">
                        <div class="mb-2">
                          <h6 class="mb-1">Upload Profile Image</h6>
                          <p class="fs-12">Image should be below 4 mb</p>
                        </div>
                        <div class="profile-uploader d-flex align-items-center">
                          <div class="drag-upload-btn btn btn-sm btn-primary me-2">
                            Upload
                            <input type="file" class="form-control image-sign" multiple="" />
                          </div>
                          <a href="javascript:void(0);" class="btn btn-light btn-sm">Cancel</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Company Name <span class="text-danger">*</span></label>
                      <vue-select :options="Companyname" id="conapayNam" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Email</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Phone Number <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Phone Number 2</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Fax</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Website</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Reviews <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Owner <span class="text-danger">*</span></label>
                      <vue-select :options="GuilorSel" id="guilorsel" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Tags <span class="text-danger">*</span>
                      </label>
                      <vue3-tags-input class="input-tags form-control" placeholder="Add new" type="text"
                        data-role="tagsinput" name="Label" value="Tag1" :tags="tags" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <div class="d-flex justify-content-between align-items-center mb-2">
                        <label class="col-form-label p-0">Deals <span class="text-danger">*</span></label>
                        <a href="javascript:void(0);" class="add-new text-primary" data-bs-target="#add_deals"
                          data-bs-toggle="modal"><i class="ti ti-plus text-primary me-1"></i>Add New</a>
                      </div>
                      <vue-select :options="Adko" id="adkoo" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Industry <span class="text-danger">*</span></label>
                      <vue-select :options="BarrWel" id="BarrWel" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Source <span class="text-danger">*</span>
                      </label>
                      <vue-select :options="SocialMed" id="socialmed" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Currency <span class="text-danger">*</span></label>
                      <vue-select :options="LeadEuro" id="leadseuro" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Language <span class="text-danger">*</span></label>
                      <vue-select :options="ChinEng" id="chineng" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="form-label">About <span class="text-danger">*</span></label>
                      <textarea class="form-control"></textarea>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <div class="d-flex justify-content-between align-items-center mb-2">
                        <label class="col-form-label p-0">Contact <span class="text-danger">*</span></label>
                        <a href="javascript:void(0);" class="add-new text-primary" data-bs-target="#add_contact"
                          data-bs-toggle="modal"><i class="ti ti-plus text-primary me-1"></i>Add New</a>
                      </div>
                      <vue-select :options="Carol" id="carols" placeholder="Sharon Roy" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </div>
            <div class="tab-pane fade" id="address" role="tabpanel" aria-labelledby="address-tab" tabindex="0">
              <div class="modal-body pb-0">
                <div class="row">
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="form-label">Address <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Last Name <span class="text-danger">*</span></label>
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">State <span class="text-danger">*</span></label>
                      <vue-select :options="CanUsa" id="canusa" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Country <span class="text-danger">*</span></label>
                      <vue-select :options="IndoneSle" id="indonesle" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Zipcode <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </div>
            <div class="tab-pane fade" id="social-profile" role="tabpanel" aria-labelledby="social-profile-tab"
              tabindex="0">
              <div class="modal-body pb-0">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Facebook</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Twitter</label>
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Linked in</label>
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Skype</label>
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Whatsapp</label>
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Instagram</label>
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </div>
            <div class="tab-pane fade" id="access" role="tabpanel" aria-labelledby="access-tab" tabindex="0">
              <div class="modal-body pb-0">
                <div class="mb-4">
                  <h6 class="fs-14 fw-medium mb-1">Visibility</h6>
                  <div class="d-flex align-items-center">
                    <div class="form-check me-3">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault01" />
                      <label class="form-check-label text-dark" for="flexRadioDefault01">
                        Public
                      </label>
                    </div>
                    <div class="form-check me-3">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault02"
                        checked />
                      <label class="form-check-label text-dark" for="flexRadioDefault02">
                        Private
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault03"
                        checked />
                      <label class="form-check-label text-dark" for="flexRadioDefault03">
                        Select People
                      </label>
                    </div>
                  </div>
                </div>
                <div class="p-3 bg-gray br-5 mb-4">
                  <div class="d-flex align-items-center mb-3">
                    <input class="form-check-input me-1" type="checkbox" value="" id="user-06" />
                    <div class="d-flex align-items-center file-name-icon">
                      <a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
                        <img src="@/assets/img/reports/user-01.jpg" class="img-fluid" alt="img" />
                      </a>
                      <div class="ms-2">
                        <h6 class="fw-normal">
                          <a href="javascript:void(0);">Michael Walker</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <input class="form-check-input me-1" type="checkbox" value="" id="user-07" />
                    <div class="d-flex align-items-center file-name-icon">
                      <a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
                        <img src="@/assets/img/reports/user-02.jpg" class="img-fluid" alt="img" />
                      </a>
                      <div class="ms-2">
                        <h6 class="fw-normal">
                          <a href="javascript:void(0);">Sophie Headrick</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <input class="form-check-input me-1" type="checkbox" value="" id="user-08" />
                    <div class="d-flex align-items-center file-name-icon">
                      <a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
                        <img src="@/assets/img/reports/user-03.jpg" class="img-fluid" alt="img" />
                      </a>
                      <div class="ms-2">
                        <h6 class="fw-normal">
                          <a href="javascript:void(0);">Cameron Drake</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <input class="form-check-input me-1" type="checkbox" value="" id="user-09" />
                    <div class="d-flex align-items-center file-name-icon">
                      <a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
                        <img src="@/assets/img/reports/user-04.jpg" class="img-fluid" alt="img" />
                      </a>
                      <div class="ms-2">
                        <h6 class="fw-normal">
                          <a href="javascript:void(0);">Doris Crowley</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <input class="form-check-input me-1" type="checkbox" value="" id="user-11" />
                    <div class="d-flex align-items-center file-name-icon">
                      <a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
                        <img src="@/assets/img/profiles/avatar-12.jpg" class="img-fluid" alt="img" />
                      </a>
                      <div class="ms-2">
                        <h6 class="fw-normal">
                          <a href="javascript:void(0);">Thomas Bordelon</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-center">
                    <a href="javascript:void(0);" class="btn btn-primary">Confirm</a>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <vue-select :options="LeadInSel" id="leadinsel" placeholder="Select" />
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#success_compay">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Company -->

  <!-- Add Deals -->
  <div class="modal fade" id="add_deals">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add New Deals</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitFormTwo">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Deal Name <span class="text-danger"> *</span></label>
                  <vue-select :options="Ksiad" id="ksiad" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <label class="form-label">Pipeline <span class="text-danger"> *</span></label>
                    <a href="javascript:void(0);" class="add-new text-primary" data-bs-toggle="modal"
                      data-bs-target="#add_pipeline"><i class="ti ti-plus text-primary me-1"></i>Add New</a>
                  </div>
                  <vue-select :options="Callsma" id="Callsma" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Status <span class="text-danger"> *</span></label>
                  <vue-select :options="LostSta" id="loststa" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Deal Value <span class="text-danger"> *</span></label>
                  <vue-select :options="LeadAmount" id="leadamounsst" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Currency<span class="text-danger"> *</span></label>
                  <vue-select :options="OneLeadAmount" id="onleadamounsst" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Period <span class="text-danger"> *</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Period Value <span class="text-danger"> *</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Contact <span class="text-danger"> *</span></label>
                  <vue-select :options="ContactWel" id="contactwel" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Project * <span class="text-danger"> *</span></label>
                  <vue-select :options="PlatformApp" id="platformapp" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Due Date <span class="text-danger"> *</span>
                  </label>
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
                  <label class="form-label">Expected Closing Date <span class="text-danger"> *</span>
                  </label>
                  <div class="input-icon-end position-relative">
                    <date-picker v-model="startdateOne" class="form-control datetimepicker" placeholder="dd/mm/yyyy"
                      :editable="true" :clearable="false" :input-format="dateFormat" />
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar text-gray-7"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Assignee <span class="text-danger"> *</span></label>
                  <vue-select :options="AssignLed" id="assignled" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Tags <span class="text-danger"> *</span></label>
                  <vue3-tags-input class="input-tags form-control" placeholder="Add new" type="text"
                    data-role="tagsinput" name="Label" value="Tag1" :tags="tagsOne" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Followup Date <span class="text-danger"> *</span></label>
                  <div class="input-icon-end position-relative">
                    <date-picker v-model="startdateTwo" class="form-control datetimepicker" placeholder="dd/mm/yyyy"
                      :editable="true" :clearable="false" :input-format="dateFormat" />
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar text-gray-7"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Source <span class="text-danger"> *</span></label>
                  <vue-select :options="CudaBar" id="cudabar" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Priority <span class="text-danger"> *</span></label>
                  <vue-select :options="Proir" id="proir" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Description <span class="text-danger"> *</span></label>
                  <textarea class="form-control"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Add Deal</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Deals -->

  <!-- Add Pipeline -->
  <div class="modal fade" id="add_pipeline">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add New Pipeline</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitFormThree">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Pipeline Name <span class="text-danger"> *</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="input-block mb-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <label class="form-label">Pipeline Stages <span class="text-danger"> *</span></label>
                    <a href="javascript:void(0);" class="add-new text-primary" data-bs-toggle="modal"
                      data-bs-target="#add_stage"><i class="ti ti-plus text-primary me-1"></i>Add New</a>
                  </div>
                  <div class="p-3 border border-gray br-5 mb-2">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center">
                        <span class="me-2"><i class="ti ti-grip-vertical"></i></span>
                        <h6 class="fs-14 fw-normal">Inpipline</h6>
                      </div>
                      <div class="d-flex align-items-center">
                        <a href="javascript:void(0);" class="text-default" data-bs-toggle="modal"
                          data-bs-target="#edit_stage"><span class="me-2"><i class="ti ti-edit"></i></span></a>
                        <a href="javascript:void(0);" class="text-default" data-bs-toggle="modal"
                          data-bs-target="#delete_modal"><span><i class="ti ti-trash"></i></span></a>
                      </div>
                    </div>
                  </div>
                  <div class="p-3 border border-gray br-5 mb-2">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center">
                        <span class="me-2"><i class="ti ti-grip-vertical"></i></span>
                        <h6 class="fs-14 fw-normal">Follow Up</h6>
                      </div>
                      <div class="d-flex align-items-center">
                        <a href="javascript:void(0);" class="text-default" data-bs-toggle="modal"
                          data-bs-target="#edit_stage"><span class="me-2"><i class="ti ti-edit"></i></span></a>
                        <a href="javascript:void(0);" class="text-default" data-bs-toggle="modal"
                          data-bs-target="#delete_modal"><span><i class="ti ti-trash"></i></span></a>
                      </div>
                    </div>
                  </div>
                  <div class="p-3 border border-gray br-5">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center">
                        <span class="me-2"><i class="ti ti-grip-vertical"></i></span>
                        <h6 class="fs-14 fw-normal">Schedule Service</h6>
                      </div>
                      <div class="d-flex align-items-center">
                        <a href="javascript:void(0);" class="text-default" data-bs-toggle="modal"
                          data-bs-target="#edit_stage"><span class="me-2"><i class="ti ti-edit"></i></span></a>
                        <a href="javascript:void(0);" class="text-default"><span><i class="ti ti-trash"
                              data-bs-toggle="modal" data-bs-target="#delete_modal"></i></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Access</label>
                  <div class="d-flex access-item nav">
                    <div class="d-flex align-items-center">
                      <div class="radio-btn d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#all">
                        <input type="radio" class="status-radio me-2" id="all" name="status" checked />
                        <label for="all">All</label>
                      </div>
                      <div class="radio-btn d-flex align-items-center" data-bs-toggle="tab"
                        data-bs-target="#select-person">
                        <input type="radio" class="status-radio me-2" id="select" name="status" />
                        <label for="select">Select Person</label>
                      </div>
                    </div>
                  </div>
                  <div class="tab-content">
                    <div class="tab-pane fade" id="select-person">
                      <div class="access-wrapper">
                        <div class="p-3 border border-gray br-5 mb-2">
                          <div class="d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center file-name-icon">
                              <a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
                                <img src="@/assets/img/profiles/avatar-20.jpg" class="img-fluid" alt="img" />
                              </a>
                              <div class="ms-2">
                                <h6 class="fw-medium">
                                  <a href="javascript:void(0);">Sharon Roy</a>
                                </h6>
                              </div>
                            </div>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="text-danger">Remove</a>
                            </div>
                          </div>
                        </div>
                        <div class="p-3 border border-gray br-5 mb-2">
                          <div class="d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center file-name-icon">
                              <a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
                                <img src="@/assets/img/profiles/avatar-21.jpg" class="img-fluid" alt="img" />
                              </a>
                              <div class="ms-2">
                                <h6 class="fw-medium">
                                  <a href="javascript:void(0);">Sharon Roy</a>
                                </h6>
                              </div>
                            </div>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="text-danger">Remove</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#pipeline-access">
              Add Pipeline
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Pipeline -->

  <!-- Edit Pipeline -->
  <div class="modal fade" id="edit_pipeline">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Pipeline</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitFormThree">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Pipeline Name <span class="text-danger"> *</span></label>
                  <input type="text" class="form-control" value="Marketing" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="input-block mb-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <label class="form-label">Pipeline Stages <span class="text-danger"> *</span></label>
                    <a href="javascript:void(0);" class="add-new text-primary" data-bs-toggle="modal"
                      data-bs-target="#add_stage"><i class="ti ti-plus text-primary me-1"></i>Add New</a>
                  </div>
                  <div class="p-3 border border-gray br-5 mb-2">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center">
                        <span class="me-2"><i class="ti ti-grip-vertical"></i></span>
                        <h6 class="fs-14 fw-normal">Inpipline</h6>
                      </div>
                      <div class="d-flex align-items-center">
                        <a href="javascript:void(0);" class="text-default"><span class="me-2"><i
                              class="ti ti-edit"></i></span></a>
                        <a href="javascript:void(0);" class="text-default"><span><i class="ti ti-trash"></i></span></a>
                      </div>
                    </div>
                  </div>
                  <div class="p-3 border border-gray br-5 mb-2">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center">
                        <span class="me-2"><i class="ti ti-grip-vertical"></i></span>
                        <h6 class="fs-14 fw-normal">Follow Up</h6>
                      </div>
                      <div class="d-flex align-items-center">
                        <a href="javascript:void(0);" class="text-default"><span class="me-2"><i
                              class="ti ti-edit"></i></span></a>
                        <a href="javascript:void(0);" class="text-default"><span><i class="ti ti-trash"></i></span></a>
                      </div>
                    </div>
                  </div>
                  <div class="p-3 border border-gray br-5">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center">
                        <span class="me-2"><i class="ti ti-grip-vertical"></i></span>
                        <h6 class="fs-14 fw-normal">Schedule Service</h6>
                      </div>
                      <div class="d-flex align-items-center">
                        <a href="javascript:void(0);" class="text-default"><span class="me-2"><i
                              class="ti ti-edit"></i></span></a>
                        <a href="javascript:void(0);" class="text-default"><span><i class="ti ti-trash"></i></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Access</label>
                  <div class="d-flex access-item nav">
                    <div class="d-flex align-items-center">
                      <div class="radio-btn d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#all2">
                        <input type="radio" class="status-radio me-2" id="all2" name="status" checked />
                        <label for="all2">All</label>
                      </div>
                      <div class="radio-btn d-flex align-items-center" data-bs-toggle="tab"
                        data-bs-target="#select-person2">
                        <input type="radio" class="status-radio me-2" id="select2" name="status" />
                        <label for="select2">Select Person</label>
                      </div>
                    </div>
                  </div>
                  <div class="tab-content">
                    <div class="tab-pane fade" id="select-person2">
                      <div class="access-wrapper">
                        <div class="p-3 border border-gray br-5 mb-2">
                          <div class="d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center file-name-icon">
                              <a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
                                <img src="@/assets/img/profiles/avatar-20.jpg" class="img-fluid" alt="img" />
                              </a>
                              <div class="ms-2">
                                <h6 class="fw-medium">
                                  <a href="javascript:void(0);">Sharon Roy</a>
                                </h6>
                              </div>
                            </div>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="text-danger">Remove</a>
                            </div>
                          </div>
                        </div>
                        <div class="p-3 border border-gray br-5 mb-2">
                          <div class="d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center file-name-icon">
                              <a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
                                <img src="@/assets/img/profiles/avatar-21.jpg" class="img-fluid" alt="img" />
                              </a>
                              <div class="ms-2">
                                <h6 class="fw-medium">
                                  <a href="javascript:void(0);">Sharon Roy</a>
                                </h6>
                              </div>
                            </div>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="text-danger">Remove</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#pipeline-access">
              Add Pipeline
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Pipeline -->

  <!-- Pipeline Access -->
  <div class="modal fade" id="pipeline-access">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Pipeline Access</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitFormThree">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <div class="input-icon-end position-relative">
                    <input type="text" class="form-control" placeholder="Search" />
                    <span class="input-icon-addon">
                      <i class="ti ti-search text-gray-7"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <div class="p-2 border br-5">
                    <div class="pipeline-access-items">
                      <div class="d-flex align-items-center p-2">
                        <div class="form-check form-check-md me-2">
                          <input class="form-check-input" type="checkbox" />
                        </div>
                        <div class="d-flex align-items-center file-name-icon">
                          <a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-19.jpg" class="img-fluid" alt="img" />
                          </a>
                          <div class="ms-2">
                            <h6 class="fw-medium fs-12">
                              <a href="javascript:void(0);">Darlee Robertson</a>
                            </h6>
                            <span class="fs-10 fw-normal">Darlee Robertson</span>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center p-2">
                        <div class="form-check form-check-md me-2">
                          <input class="form-check-input" type="checkbox" />
                        </div>
                        <div class="d-flex align-items-center file-name-icon">
                          <a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-20.jpg" class="img-fluid" alt="img" />
                          </a>
                          <div class="ms-2">
                            <h6 class="fw-medium fs-12">
                              <a href="javascript:void(0);">Sharon Roy</a>
                            </h6>
                            <span class="fs-10 fw-normal">Installer</span>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center p-2">
                        <div class="form-check form-check-md me-2">
                          <input class="form-check-input" type="checkbox" />
                        </div>
                        <div class="d-flex align-items-center file-name-icon">
                          <a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
                            <img src="@/assets/img/profiles/avatar-21.jpg" class="img-fluid" alt="img" />
                          </a>
                          <div class="ms-2">
                            <h6 class="fw-medium fs-12">
                              <a href="javascript:void(0);">Vaughan Lewis</a>
                            </h6>
                            <span class="fs-10 fw-normal">Senior Manager</span>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center p-2">
                        <div class="form-check form-check-md me-2">
                          <input class="form-check-input" type="checkbox" />
                        </div>
                        <div class="d-flex align-items-center file-name-icon">
                          <a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
                            <img src="@/assets/img/users/user-33.jpg" class="img-fluid" alt="img" />
                          </a>
                          <div class="ms-2">
                            <h6 class="fw-medium fs-12">
                              <a href="javascript:void(0);">Jessica Louise</a>
                            </h6>
                            <span class="fs-10 fw-normal">Test Engineer</span>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center p-2">
                        <div class="form-check form-check-md me-2">
                          <input class="form-check-input" type="checkbox" />
                        </div>
                        <div class="d-flex align-items-center file-name-icon">
                          <a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
                            <img src="@/assets/img/users/user-34.jpg" class="img-fluid" alt="img" />
                          </a>
                          <div class="ms-2">
                            <h6 class="fw-medium fs-12">
                              <a href="javascript:void(0);">Test Engineer</a>
                            </h6>
                            <span class="fs-10 fw-normal">UI /UX Designer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Pipeline Access -->

  <!-- Add New Stage -->
  <div class="modal fade" id="add_stage">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add New Stage</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitFormThree">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Stage Name <span class="text-danger"> *</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Add Stage</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add New Stage -->

  <!-- Edit Stage -->
  <div class="modal fade" id="edit_stage">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Stage</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitFormThree">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Edit Name <span class="text-danger"> *</span></label>
                  <input type="text" class="form-control" value="Inpipeline" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Stage -->

  <!-- Add Contact -->
  <div class="modal fade" id="add_contact">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add New Contact</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitFormFor">
          <div class="contact-grids-tab">
            <ul class="nav nav-underline" id="myTab3" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="info-tab3" data-bs-toggle="tab" data-bs-target="#basic-info3"
                  type="button" role="tab" aria-selected="true">
                  Basic Information
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="address-tab3" data-bs-toggle="tab" data-bs-target="#address3" type="button"
                  role="tab" aria-selected="false">
                  Address
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="social-profile-tab3" data-bs-toggle="tab" data-bs-target="#social-profile3"
                  type="button" role="tab" aria-selected="false">
                  Social Profiles
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="access-tab3" data-bs-toggle="tab" data-bs-target="#access3" type="button"
                  role="tab" aria-selected="false">
                  Access
                </button>
              </li>
            </ul>
          </div>
          <div class="tab-content" id="myTabContent3">
            <div class="tab-pane fade show active" id="basic-info3" role="tabpanel" aria-labelledby="info-tab3"
              tabindex="0">
              <div class="modal-body pb-0">
                <div class="row">
                  <div class="col-md-12">
                    <div class="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                      <div
                        class="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames">
                        <img src="@/assets/img/profiles/avatar-30.jpg" alt="img" class="rounded-circle" />
                      </div>
                      <div class="profile-upload">
                        <div class="mb-2">
                          <h6 class="mb-1">Upload Profile Image</h6>
                          <p class="fs-12">Image should be below 4 mb</p>
                        </div>
                        <div class="profile-uploader d-flex align-items-center">
                          <div class="drag-upload-btn btn btn-sm btn-primary me-2">
                            Upload
                            <input type="file" class="form-control image-sign" multiple="" />
                          </div>
                          <a href="javascript:void(0);" class="btn btn-light btn-sm">Cancel</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Name <span class="text-danger"> *</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Last Name</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Job Title <span class="text-danger"> *</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Company Name <span class="text-danger"> *</span></label>
                      <vue-select :options="NexusDy" id="nexusdy" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Email</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Phone Number <span class="text-danger"> *</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Phone Number 2<span class="text-danger"> *</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Fax</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="input-block mb-3">
                      <div class="d-flex justify-content-between align-items-center">
                        <label class="col-form-label">Deals <span class="text-danger"> *</span></label>
                        <a href="javascript:void(0);" class="add-new text-primary" data-bs-target="#add_deals"
                          data-bs-toggle="modal"><i class="ti ti-plus text-primary me-1"></i>Add New</a>
                      </div>
                      <vue-select :options="DealMod" id="dealmod" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Date of Birth <span class="text-danger"> *</span>
                      </label>
                      <div class="input-icon-end position-relative">
                        <date-picker v-model="startdateThree" class="form-control datetimepicker"
                          placeholder="dd/mm/yyyy" :editable="true" :clearable="false" :input-format="dateFormat" />
                        <span class="input-icon-addon">
                          <i class="ti ti-calendar text-gray-7"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Reviews <span class="text-danger"> *</span></label>
                      <vue-select :options="ReviLow" id="revilow" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Owner <span class="text-danger"> *</span></label>
                      <vue-select :options="OwnerEmai" id="owneremai" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Industry <span class="text-danger"> *</span></label>
                      <vue-select :opitons="IndusTre" id="industre" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Currency <span class="text-danger"> *</span></label>
                      <vue-select :options="CurrUSD" id="currusd" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Language <span class="text-danger"> *</span></label>
                      <vue-select :opitons="Laneng" id="laneng" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Tags <span class="text-danger"> *</span>
                      </label>
                      <vue3-tags-input class="input-tags form-control" placeholder="Add new" type="text"
                        data-role="tagsinput" name="Label" value="Tag1" :tags="tagsTwo" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Source <span class="text-danger"> *</span>
                      </label>
                      <vue-select :options="SiteWeb" id="siteweb" placeholder="Select" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </div>
            <div class="tab-pane fade" id="address3" role="tabpanel" aria-labelledby="address-tab3" tabindex="0">
              <div class="modal-body pb-0">
                <div class="row">
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="form-label">Address <span class="text-danger"> *</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Last Name <span class="text-danger"> *</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">State <span class="text-danger"> *</span></label>
                      <vue-select :options="StateCan" id="statecan" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Country <span class="text-danger"> *</span></label>
                      <vue-select :options="CubaInd" id="cubaind" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Zipcode <span class="text-danger"> *</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </div>
            <div class="tab-pane fade" id="social-profile3" role="tabpanel" aria-labelledby="social-profile-tab3"
              tabindex="0">
              <div class="modal-body pb-0">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Facebook</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Twitter</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Linked in</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Skype</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Whatsapp</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Instagram</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </div>
            <div class="tab-pane fade" id="access3" role="tabpanel" aria-labelledby="access-tab3" tabindex="0">
              <div class="modal-body pb-0">
                <div class="mb-4">
                  <h6 class="fs-14 fw-medium mb-1">Visibility</h6>
                  <div class="d-flex align-items-center">
                    <div class="form-check me-3">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault12" />
                      <label class="form-check-label text-dark" for="flexRadioDefault12">
                        Public
                      </label>
                    </div>
                    <div class="form-check me-3">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault20"
                        checked />
                      <label class="form-check-label text-dark" for="flexRadioDefault20">
                        Private
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"
                        checked />
                      <label class="form-check-label text-dark" for="flexRadioDefault3">
                        Select People
                      </label>
                    </div>
                  </div>
                </div>
                <div class="p-3 bg-gray br-5 mb-4">
                  <div class="d-flex align-items-center mb-3">
                    <input class="form-check-input me-1" type="checkbox" value="" id="user-6" />
                    <div class="d-flex align-items-center file-name-icon">
                      <a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
                        <img src="@/assets/img/reports/user-01.jpg" class="img-fluid" alt="img" />
                      </a>
                      <div class="ms-2">
                        <h6 class="fw-normal">
                          <a href="javascript:void(0);">Michael Walker</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <input class="form-check-input me-1" type="checkbox" value="" id="user-7" />
                    <div class="d-flex align-items-center file-name-icon">
                      <a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
                        <img src="@/assets/img/reports/user-02.jpg" class="img-fluid" alt="img" />
                      </a>
                      <div class="ms-2">
                        <h6 class="fw-normal">
                          <a href="javascript:void(0);">Sophie Headrick</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <input class="form-check-input me-1" type="checkbox" value="" id="user-8" />
                    <div class="d-flex align-items-center file-name-icon">
                      <a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
                        <img src="@/assets/img/reports/user-03.jpg" class="img-fluid" alt="img" />
                      </a>
                      <div class="ms-2">
                        <h6 class="fw-normal">
                          <a href="javascript:void(0);">Cameron Drake</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <input class="form-check-input me-1" type="checkbox" value="" id="user-9" />
                    <div class="d-flex align-items-center file-name-icon">
                      <a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
                        <img src="@/assets/img/reports/user-04.jpg" class="img-fluid" alt="img" />
                      </a>
                      <div class="ms-2">
                        <h6 class="fw-normal">
                          <a href="javascript:void(0);">Doris Crowley</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <input class="form-check-input me-1" type="checkbox" value="" id="user-10" />
                    <div class="d-flex align-items-center file-name-icon">
                      <a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
                        <img src="@/assets/img/profiles/avatar-12.jpg" class="img-fluid" alt="img" />
                      </a>
                      <div class="ms-2">
                        <h6 class="fw-normal">
                          <a href="javascript:void(0);">Thomas Bordelon</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-center">
                    <a href="javascript:void(0);" class="btn btn-primary">Confirm</a>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <vue-select :options="ConfirSat" id="confirsat" placeholder="Select" />
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#success_compay">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Contact -->

  <!-- Success Contact -->
  <div class="modal fade" id="success_compay">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-body pb-0">
          <div class="p-4">
            <div class="row">
              <div class="col-md-12">
                <div class="d-flex flex-column align-items-center justify-content-center mb-3">
                  <img src="@/assets/img/reports-img/check-icon.svg" alt="icon" class="mb-3" />
                  <h5>Company Added Successfully</h5>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <router-link to="/crm/companies-crm" class="btn btn-dark d-flex justify-content-center">Back to
                    List</router-link>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <router-link to="/crm/companies-details"
                    class="btn btn-primary bg-primary-gradient d-flex justify-content-center">Detail Page</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Success Contact -->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span class="avatar avatar-xl bg-transparent-danger text-danger mb-3">
            <i class="ti ti-trash-x fs-36"></i>
          </span>
          <h4 class="mb-1">Confirm Delete</h4>
          <p class="mb-3">
            You want to delete all the marked items, this cant be undone once you delete.
          </p>
          <div class="d-flex justify-content-center">
            <a href="javascript:void(0);" class="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <router-link to="/crm/leads-list" class="btn btn-danger">Yes, Delete</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
</template>
<script>
import Vue3TagsInput from "vue3-tags-input";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
const currentDateTwo = ref(new Date());
const currentDateThree = ref(new Date());
export default {
  components: {
    Vue3TagsInput,
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: " ",
      editorConfig: {},
      startdate: currentDate,
      startdateOne: currentDateOne,
      startdateTwo: currentDateTwo,
      startdateThree: currentDateThree,
      dateFormat: "dd-MM-yyyy",
      tags: ["Collab", "Promotion", "Rated"],
      tagsOne: ["Collab", "Promotion", "Rated", "Davis"],
      tagsTwo: ["Promotion", "Rated", "Davis"],
      ConfirSat: ["Select", "Active", "Inactive"],
      CubaInd: ["Select", "Indonesia", "Cuba"],
      StateCan: ["Select", "USA", "Canda"],
      SiteWeb: [
        "Select",
        "Phone Calls",
        "Social Media",
        "Refferal Sites",
        "Web Analytics",
        "Previous Purchase",
      ],
      Laneng: ["Select", "English", "Chinese"],
      CurrUSD: ["Select", "USD", "Euro"],
      IndusTre: ["Select", "Barry Cuda", "Tressa Wexler"],
      OwnerEmai: ["Select", "Hendry", "GUillory", "jami"],
      ReviLow: ["Select", "Lowest", "Highest"],
      DealMod: ["Select", "Collins", "Konopelski", "Adams"],
      NexusDy: ["Select", "BrightWave Innovations", "Stellar Dynamics", "Quantum Nexus"],
      Proir: ["Select", "High", "Low", "Medium"],
      CudaBar: ["Select", "Barry Cuda", "Tressa Wexler"],
      AssignLed: ["Select", "Active", "Inactive"],
      PlatformApp: ["Select", "Office Management App", "Eductional Platform"],
      ContactWel: ["Select", "Darlee Robertson", "Sharon Roy", "Vaughan Lewis"],
      OneLeadAmount: ["Select", "$4,50,000", "$3,15,000", "$8,40,000"],
      LeadAmount: ["Select", "$4,50,000", "$3,15,000", "$8,40,000"],
      LostSta: ["Select", "Open", "Won", "Lost"],
      Callsma: ["Select", "Sales", "Marketing", "Calls"],
      Ksiad: ["Select", "Collins", "Konopelski", "Adams"],
      LeadInSel: ["Select", "Active", "Inactive"],
      IndoneSle: ["Select", "Indonesia", "Cuba"],
      CanUsa: ["Select", "USA", "Canda"],
      Carol: ["Darlee Robertson", "Sharon Roy", "Vaughan", "Jessica", "Carol Thomas"],
      ChinEng: ["Select", "English", "CHinese"],
      LeadEuro: ["Select", "USD", "Euro"],
      SocialMed: [
        "Select",
        "Phone Calls",
        "Social Media",
        "Refferal Sites",
        "Web Analytics",
        "Previous Puruchase",
      ],
      BarrWel: ["Select", "Barry Cuda", "Tressa Wexler"],
      Adko: ["Select", "Collins", "Konopelski", "Adams"],
      GuilorSel: ["Select", "Hendry", "Guilory", "Jami"],
      Companyname: [
        "Select",
        "BrightWave Innovations",
        "Stellar Dynamics",
        "Quantum Nexus",
      ],
      LeadStat: ["Select", "Active", "Inactive"],
      Contect: ["Select", "Closed", "Contacted", "Not Contacted"],
      VaughanL: ["Select", "Darlee Robertson", "Sharon Roy", "Vaughab Lewis"],
      IndusHos: ["Select", "Rentail Industry", "Banking", "Hostels"],
      SitesSele: ["Select", "Phone Calls", "Social Media", "Referral Sites"],
      HomeSeel: ["Work", "Home"],
      OneHomeSeel: ["Work", "Home"],
      EuroSeel: ["Select", "USD", "Euro"],
      InnvoSel: ["Select", "Brighwave Innovations", "Steller Dynamics", "Quantum Nexus"],
      EditLeadStat: ["Select", "Active", "Inactive"],
      EditContect: ["Select", "Closed", "Contacted", "Not Contacted"],
      EditVaughanL: ["Select", "Darlee Robertson", "Sharon Roy", "Vaughab Lewis"],
      EditIndusHos: ["Select", "Rentail Industry", "Banking", "Hostels"],
      EditSitesSele: ["Select", "Phone Calls", "Social Media", "Referral Sites"],
      EditHomeSeel: ["Work", "Home"],
      EditOneHomeSeel: ["Work", "Home"],
      EditEuroSeel: ["Select", "USD", "Euro"],
      EditInnvoSel: [
        "Select",
        "Brighwave Innovations",
        "Steller Dynamics",
        "Quantum Nexus",
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/crm/leads-grid");
    },
    submitFormOne() {
      this.$router.push("/crm/companies-crm");
    },
    submitFormTwo() {
      this.$router.push("/crm/deals-grid");
    },
    submitFormThree() {
      this.$router.push("/crm/pipeline");
    },
    submitFormFour() {
      this.$router.push("/crm/contacts");
    },
  },
};
</script>
