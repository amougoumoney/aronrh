<script>
export default {
  mounted() {
    this.updateBodyClass();
  },
  watch: {
    // Watch for route changes
    $route() {
      this.updateBodyClass();
    },
  },
  methods: {
    updateBodyClass() {
      if (this.$route.path.includes("/forgot-password-2")) {
        document.body.classList.add("bg-white");
      } else {
        document.body.classList.remove("bg-white");
      }
    },
    submitForm() {
      this.$router.push("/email-verification-2");
    },
  },
};
</script>

<template>
  <div class="container-fuild">
    <div class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
      <div class="row">
        <div class="col-lg-5">
          <div
            class="d-lg-flex align-items-center justify-content-center d-none flex-wrap vh-100 bg-primary-transparent">
            <div>
              <img src="@/assets/img/bg/authentication-bg-04.svg" alt="Img" />
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-md-12 col-sm-12">
          <div class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap">
            <div class="col-md-7 mx-auto p-4">
              <form @submit.prevent="submitForm">
                <div>
                  <div class="mx-auto mb-5 text-center">
                    <img src="@/assets/img/logo.svg" class="img-fluid" alt="Logo" />
                  </div>
                  <div class="">
                    <div class="text-center mb-3">
                      <h2 class="mb-2">Forgot Password?</h2>
                      <p class="mb-0">
                        If you forgot your password, well, then we'll email you
                        instructions to reset your password.
                      </p>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Email Address</label>
                      <div class="input-group">
                        <input type="text" value="" class="form-control border-end-0" />
                        <span class="input-group-text border-start-0">
                          <i class="ti ti-mail"></i>
                        </span>
                      </div>
                    </div>
                    <div class="mb-3">
                      <button type="submit" class="btn btn-primary w-100">Submit</button>
                    </div>
                    <div class="text-center">
                      <h6 class="fw-normal text-dark mb-0">
                        Return to
                        <router-link to="login-2" class="hover-a">Sign In</router-link>
                      </h6>
                    </div>
                  </div>
                  <div class="mt-5 text-center">
                    <p class="mb-0 text-gray-9">
                      Copyright &copy; {{ new Date().getFullYear() }} - AronHR
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
