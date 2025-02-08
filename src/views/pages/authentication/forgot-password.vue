<script>
import { ref, reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { authService } from '@/services/auth.service';

export default {
  setup() {
    const loading = ref(false);
    const message = ref('');
    const error = ref('');
    const secondsRemaining = ref(0);

    const formData = reactive({
      email: ''
    });

    const rules = {
      email: { required, email }
    };

    const v$ = useVuelidate(rules, formData);

    return {
      formData,
      loading,
      message,
      error,
      secondsRemaining,
      v$
    };
  },
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
      if (this.$route.path.includes("/forgot-password")) {
        document.body.classList.add("bg-white");
      } else {
        document.body.classList.remove("bg-white");
      }
    },
    async submitForm() {
      try {
        const result = await this.v$.$validate();
        if (!result) return;

        this.loading = true;
        this.message = '';
        this.error = '';

        const response = await authService.forgotPassword(this.formData.email);
        
        this.message = response.message || 'Password reset link has been sent to your email';
        setTimeout(() => {
          this.$router.push('/login');
        }, 3000);
      } catch (err) {
        console.error('Forgot password error:', err);
        
        // Bad request error
        if (err.response?.status === 400) {
          this.error = err.response.data.message || 'Unable to send reset link';
        }
        // Validation error
        else if (err.response?.status === 422) {
          this.error = err.response.data.errors?.email?.[0] 
            || err.response.data.message 
            || 'The email field is invalid.';
        }
        // Network or connection error
        else if (!err.response) {
          this.error = 'Unable to connect to the server. Please check your connection and try again.';
        }
        // Other errors
        else {
          this.error = 'Failed to send reset link. Please try again.';
        }
      } finally {
        this.loading = false;
      }
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
            class="login-background position-relative d-lg-flex align-items-center justify-content-center d-none flex-wrap vh-100"
          >
            <div class="bg-overlay-img">
              <img src="@/assets/img/bg/bg-01.png" class="bg-1" alt="" />
              <img src="@/assets/img/bg/bg-02.png" class="bg-2" alt="" />
              <img src="@/assets/img/bg/bg-03.png" class="bg-3" alt="" />
            </div>
            <div class="authentication-card w-100">
              <div class="authen-overlay-item border w-100">
                <h1 class="text-white fs-40">
                  Empowering people <br />
                  through seamless HR <br />
                  management.
                </h1>
                <div class="my-4 mx-auto authen-overlay-img">
                  <img src="@/assets/img/bg/authentication-bg-01.png" alt="" />
                </div>
                <div>
                  <p class="text-white fs-20 fw-semibold text-center">
                    Efficiently manage your workforce, streamline <br />
                    operations effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-md-12 col-sm-12">
          <div
            class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap"
          >
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
                        Enter your email and we'll send you instructions to reset your password.
                      </p>
                    </div>

                    <!-- Success Message -->
                    <div v-if="message" class="alert alert-success alert-dismissible fade show" role="alert">
                      {{ message }}
                      <button type="button" class="btn-close" @click="message = ''"></button>
                    </div>

                    <!-- Error Message -->
                    <div v-if="error" class="alert alert-danger alert-dismissible fade show" role="alert">
                      {{ error }}
                      <div v-if="secondsRemaining > 0" class="mt-2">
                        Please try again in {{ secondsRemaining }} seconds
                      </div>
                      <button type="button" class="btn-close" @click="error = ''"></button>
                    </div>

                    <div class="mb-3">
                      <label class="form-label">Email Address</label>
                      <div class="input-group" :class="{ 'is-invalid': v$.email.$error }">
                        <input 
                          type="email" 
                          v-model="formData.email"
                          class="form-control" 
                          :class="{ 'is-invalid': v$.email.$error }"
                          :disabled="loading"
                        />
                        <span class="input-group-text">
                          <i class="ti ti-mail"></i>
                        </span>
                      </div>
                      <div class="invalid-feedback" v-if="v$.email.$error">
                        {{ v$.email.$errors[0].$message }}
                      </div>
                    </div>

                    <div class="mb-3">
                      <button 
                        type="submit" 
                        class="btn btn-primary w-100"
                        :disabled="loading || secondsRemaining > 0"
                      >
                        <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                        {{ loading ? 'Sending...' : 'Send Reset Link' }}
                      </button>
                    </div>

                    <div class="text-center">
                      <h6 class="fw-normal text-dark mb-0">
                        Return to
                        <router-link to="/login" class="text-primary">Sign In</router-link>
                      </h6>
                    </div>
                  </div>
                  <div class="mt-5 text-center">
                    <p class="mb-0 text-gray-9">
                      Copyright &copy; {{ new Date().getFullYear() }} - Smarthr
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
