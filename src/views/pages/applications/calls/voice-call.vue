<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content pb-4">
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <breadcrumb :title="title" :text="text" :text1="text1" />
        <div class="head-icons">
          <a href="javascript:void(0);" class="" data-bs-toggle="tooltip" data-bs-placement="top"
            data-bs-original-title="Collapse" id="collapse-header" @click="toggleHeader">
            <i class="ti ti-chevrons-up"></i>
          </a>
        </div>
      </div>

      <div class="row">
        <!-- Call -->
        <div class="col-xxl-12">
          <div class="card incoming-call mb-0">
            <div class="card-header">
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <span class="avatar avatar-lg avatar-rounded me-2">
                    <img src="@/assets/img/users/user-32.jpg" class="img-fluid rounded-circle" alt="img" />
                  </span>
                  <div>
                    <h5 class="mb-1"><a href="javascript:void(0);">Anthony Lewis</a></h5>
                    <span class="d-block">Online</span>
                  </div>
                </div>
                <a href="javascript:void(0);" class="avatar avatar-md rounded-circle bg-gray-200 text-dark">
                  <i class="ti ti-user-plus fs-20"></i>
                </a>
              </div>
            </div>
            <div class="card-body position-relative text-center d-flex flex-column justify-content-center">
              <div class="voice-call-img mb-3">
                <img src="@/assets/img/users/user-32.jpg" class="img-fluid rounded-circle" alt="img" />
              </div>
              <h4 class="display-4">Anthony Lewis</h4>
              <p>00:24</p>
              <a href="javascript:void(0);" class="avatar avatar-xl position-absolute end-0 bottom-0 m-3"><img
                  src="@/assets/img/users/user-05.jpg" alt="Img" /></a>
            </div>
            <div class="card-footer">
              <div class="d-flex align-items-center justify-content-center">
                <a href="javascript:void(0);"
                  class="btn btn-light call-item p-0 d-flex align-items-center justify-content-center me-3"><i
                    class="ti ti-video fs-20"></i></a>
                <a href="javascript:void(0);"
                  class="btn btn-danger call-item p-0 d-flex align-items-center justify-content-center me-3"><i
                    class="ti ti-phone fs-20"></i></a>
                <a href="javascript:void(0);"
                  class="btn btn-light call-item p-0 d-flex align-items-center justify-content-center"><i
                    class="ti ti-microphone fs-20"></i></a>
              </div>
            </div>
          </div>
        </div>
        <!-- /Call -->
      </div>
    </div>

    <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
      <p class="mb-0">2014-2025 &copy; AronHR.</p>
      <p>
        Designed &amp; Developed By
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
  <!-- /Page Wrapper -->
</template>
<script>
export default {
  data() {
    return {
      title: "Voice Call",
      text: "Application",
      text1: "Voice Call",
    };
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
