<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper cardhead">
    <div class="content">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">{{ $t('FileUpload') }}</h3>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <div class="row">
        <!-- Drag Card -->
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('SingleFileUpload') }}</h5>
            </div>
            <div class="card-body">
              <div class="custom-file-container" data-upload-id="myFirstImage">
                <label
                  >{{ $t('Upload(SingleFile)') }}
                  <a
                    href="javascript:void(0)"
                    class="custom-file-container__image-clear"
                    title="Clear Image"
                    >x</a
                  ></label
                >
                <label class="custom-file-container__custom-file">
                  <input
                    type="file"
                    class="custom-file-container__custom-file__custom-file-input"
                  />
                  <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                  <span
                    class="custom-file-container__custom-file__custom-file-control"
                  ></span>
                </label>
                <div class="custom-file-container__image-preview"></div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('MultipleFileUpload') }}</h5>
            </div>
            <div class="card-body">
              <div class="custom-file-container" data-upload-id="mySecondImage">
                <label
                  >{{ $t('Upload(AllowMultiple)') }}
                  <a
                    href="javascript:void(0)"
                    class="custom-file-container__image-clear"
                    title="Clear Image"
                    >x</a
                  ></label
                >
                <label class="custom-file-container__custom-file">
                  <input
                    type="file"
                    class="custom-file-container__custom-file__custom-file-input"
                    multiple
                  />
                  <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                  <span
                    class="custom-file-container__custom-file__custom-file-control"
                  ></span>
                </label>
                <div class="custom-file-container__image-preview"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Drag Card -->
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
