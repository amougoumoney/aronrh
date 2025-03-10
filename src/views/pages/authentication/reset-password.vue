<script>
import { ref, reactive, onMounted } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';
import { authService } from '@/services/auth.service';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const loading = ref(false);
    const message = ref('');
    const error = ref('');
    const showPassword = ref(false);
    const showPasswordConfirm = ref(false);

    const formData = reactive({
      token: '',
      email: '',
      password: '',
      password_confirmation: ''
    });

    const rules = {
      password: {
        required,
        minLength: minLength(8)
      },
      password_confirmation: {
        required,
        sameAs: (value) => value === formData.password || 'Passwords must match'
      }
    };

    const v$ = useVuelidate(rules, formData);

    onMounted(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');
      const email = urlParams.get('email');

      if (!token || !email) {
        error.value = 'Invalid or expired password reset link. Please request a new one.';
        setTimeout(() => {
          router.push('/forgot-password');
        }, 3000);
        return;
      }

      // Decode and validate email
      try {
        const decodedEmail = decodeURIComponent(email);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(decodedEmail)) {
          throw new Error('Invalid email format');
        }
        formData.email = decodedEmail;
      } catch (e) {
        error.value = 'Invalid email in reset link. Please request a new password reset.';
        setTimeout(() => {
          router.push('/forgot-password');
        }, 3000);
        return;
      }

      // Validate token
      if (!/^[a-f0-9]{64}$/i.test(token)) {
        error.value = 'Invalid reset token format. Please request a new password reset.';
        setTimeout(() => {
          router.push('/forgot-password');
        }, 3000);
        return;
      }

      formData.token = token;
    });

    const submitForm = async () => {
      try {
        const result = await v$.value.$validate();
        if (!result) return;

        loading.value = true;
        message.value = '';
        error.value = '';

        await authService.resetPassword({
          token: formData.token,
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.password_confirmation
        });

        message.value = 'Password has been reset successfully. Redirecting to login...';
        setTimeout(() => {
          router.push('/login');
        }, 3000);
      } catch (err) {
        if (err.response?.status === 422) {
          const errors = err.response.data.errors || {};
          const errorMessages = Object.values(errors)
            .flat()
            .filter(msg => msg)
            .join('\n');
          error.value = errorMessages || err.response.data.message || 'Validation error';
        } else if (err.response?.status === 400) {
          error.value = 'Invalid or expired reset token. Please request a new password reset link.';
          setTimeout(() => {
            router.push('/forgot-password');
          }, 3000);
        } else if (!err.response) {
          error.value = 'Unable to connect to the server. Please check your connection and try again.';
        } else {
          error.value = err.response?.data?.message || 'Failed to reset password. Please try again.';
        }
      } finally {
        loading.value = false;
      }
    };

    return {
      formData,
      loading,
      message,
      error,
      showPassword,
      showPasswordConfirm,
      v$,
      submitForm
    };
  },
  mounted() {
    this.updateBodyClass();
  },
  watch: {
    $route() {
      this.updateBodyClass();
    }
  },
  methods: {
    updateBodyClass() {
      if (this.$route.path.includes("/reset-password")) {
        document.body.classList.add("bg-white");
      } else {
        document.body.classList.remove("bg-white");
      }
    },
    togglePasswordVisibility(field) {
      if (field === 'password') {
        this.showPassword = !this.showPassword;
      } else {
        this.showPasswordConfirm = !this.showPasswordConfirm;
      }
    }
  }
};
</script>

<template>
  <div class="container-fuild">
    <div class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
      <div class="row">
        <div class="col-lg-5">
          <div
            class="login-background position-relative d-lg-flex align-items-center justify-content-center d-none flex-wrap vh-100">
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
          <div class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap">
            <div class="col-md-7 mx-auto p-4">
              <form @submit.prevent="submitForm">
                <div>
                  <div class="mx-auto mb-5 text-center">
                    <img src="@/assets/img/logo.svg" class="img-fluid" alt="Logo" />
                  </div>
                  <div class="">
                    <div class="text-center mb-3">
                      <h2 class="mb-2">Reset Password</h2>
                      <p class="mb-0">
                        Your new password must be different from previously used passwords.
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
                      <button type="button" class="btn-close" @click="error = ''"></button>
                    </div>

                    <div class="input-block mb-3">
                      <div class="mb-3">
                        <label class="form-label">New Password</label>
                        <div class="input-group" :class="{ 'is-invalid': v$.password.$error }">
                          <input :type="showPassword ? 'text' : 'password'" v-model="formData.password"
                            class="form-control" :class="{ 'is-invalid': v$.password.$error }" :disabled="loading" />
                          <span class="input-group-text">
                            <i @click="togglePasswordVisibility('password')" class="ti" :class="{
                              'ti-eye': showPassword,
                              'ti-eye-off': !showPassword,
                            }" style="cursor: pointer;"></i>
                          </span>
                        </div>
                        <div class="invalid-feedback" v-if="v$.password.$error">
                          Password must be at least 8 characters long
                        </div>
                      </div>

                      <div class="mb-3">
                        <label class="form-label">Confirm Password</label>
                        <div class="input-group" :class="{ 'is-invalid': v$.password_confirmation.$error }">
                          <input :type="showPasswordConfirm ? 'text' : 'password'"
                            v-model="formData.password_confirmation" class="form-control"
                            :class="{ 'is-invalid': v$.password_confirmation.$error }" :disabled="loading" />
                          <span class="input-group-text">
                            <i @click="togglePasswordVisibility('confirm')" class="ti" :class="{
                              'ti-eye': showPasswordConfirm,
                              'ti-eye-off': !showPasswordConfirm,
                            }" style="cursor: pointer;"></i>
                          </span>
                        </div>
                        <div class="invalid-feedback" v-if="v$.password_confirmation.$error">
                          Passwords must match
                        </div>
                      </div>

                      <div class="mb-3">
                        <button type="submit" class="btn btn-primary w-100" :disabled="loading">
                          <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                          {{ loading ? 'Resetting Password...' : 'Reset Password' }}
                        </button>
                      </div>
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
