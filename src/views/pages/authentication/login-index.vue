<script>
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import { authService } from '@/services/auth.service';
import Swal from 'sweetalert2';

export default {
  name: 'LoginIndex',
  setup() {
    const router = useRouter();
    const showPassword = ref(false);
    const isLoading = ref(false);
    const error = ref(null);

    const formData = reactive({
      email: '',
      password: '',
      remember_me: false
    });

    const rules = {
      email: { 
        required, 
        email,
        $autoDirty: true 
      },
      password: { 
        required, 
        minLength: minLength(6),
        $autoDirty: true 
      }
    };

    const v$ = useVuelidate(rules, formData);

    // Check for existing token on mount
    onMounted(() => {
      const token = localStorage.getItem('token');
      if (token) {
        // Verify token validity
        verifyToken(token);
      }
    });

    const verifyToken = async (token) => {
      try {
        const response = await authService.verifyToken(token);
        if (response.valid) {
          redirectBasedOnRole(response.user);
        } else {
          // Token invalid, remove it
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }
      } catch (err) {
        console.error('Token verification failed:', err);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    };

    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };

    const redirectBasedOnRole = (user) => {
      if (!user || !user.role) {
        router.push('/dashboard');
        return;
      }

      // Convert role to lowercase for case-insensitive comparison
      const role = user.role.toLowerCase();
      
      switch (role) {
        case 'admin':
          router.push('/dashboard/admin-dashboard');
          break;
        case 'hr-manager':
          router.push('/dashboard/hr-manager-dashboard');
          break;
        case 'hr-assistant':
          router.push('/dashboard/hr-assistant-dashboard');
          break;
        case 'manager':
          router.push('/dashboard/employee-dashboard');
          break;
        case 'employee':
          router.push('/dashboard/employee-dashboard');
          break;
        default:
          router.push('/dashboard');
      }
    };

    const handleLogin = async () => {
      try {
        error.value = null;
        const result = await v$.value.$validate();
        if (!result) return;

        isLoading.value = true;
        const response = await authService.login(formData);
        
        if (response.access_token) {
          // Redirect to the appropriate dashboard
          router.push(response.dashboardPath);
        }
      } catch (err) {
        console.error('Login error:', err);
        
        let errorMessage = 'Invalid credentials';
        if (err.response?.status === 429) {
          errorMessage = 'Too many login attempts. Please try again later.';
        } else if (err.response?.data?.message) {
          errorMessage = err.response.data.message;
        }

        // Show error message
        await Swal.fire({
          title: 'Login Failed',
          text: errorMessage,
          icon: 'error',
          timer: 2000,
          showConfirmButton: false,
          position: 'top-end',
          toast: true
        });

        error.value = errorMessage;
      } finally {
        isLoading.value = false;
      }
    };

    return {
      formData,
      showPassword,
      isLoading,
      error,
      v$,
      handleLogin,
      togglePassword
    };
  }
};
</script>

<template>
  <div class="container-fuild">
    <div class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
      <div class="row">
        <div class="col-lg-5">
          <div class="login-background position-relative d-lg-flex align-items-center justify-content-center d-none flex-wrap vh-100">
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
              <!-- Form with @submit.prevent -->
              <form @submit.prevent="handleLogin">
                <div>
                  <div class="mx-auto mb-5 text-center">
                    <img src="@/assets/img/logo.svg" class="img-fluid" alt="Logo" />
                  </div>
                  <div class="">
                    <div class="text-center mb-3">
                      <h2 class="mb-2">Sign In</h2>
                      <p class="mb-0">Please enter your details to sign in</p>
                    </div>

                    <!-- Error Alert -->
                    <div v-if="error" class="alert alert-danger alert-dismissible fade show" role="alert">
                      {{ error }}
                      <button type="button" class="btn-close" @click="error = null"></button>
                    </div>

                    <!-- Email Input -->
                    <div class="mb-3">
                      <label class="form-label">Email Address</label>
                      <div class="input-group" :class="{ 'is-invalid': v$.email.$error }">
                        <input 
                          type="email" 
                          v-model="formData.email"
                          class="form-control" 
                          :class="{ 'is-invalid': v$.email.$error }"
                        />
                        <span class="input-group-text">
                          <i class="ti ti-mail"></i>
                        </span>
                      </div>
                      <div class="invalid-feedback" v-if="v$.email.$error">
                        {{ v$.email.$errors[0].$message }}
                      </div>
                    </div>

                    <!-- Password Input -->
                    <div class="mb-3">
                      <label class="form-label">Password</label>
                      <div class="input-group" :class="{ 'is-invalid': v$.password.$error }">
                        <input
                          :type="showPassword ? 'text' : 'password'"
                          v-model="formData.password"
                          class="form-control"
                          :class="{ 'is-invalid': v$.password.$error }"
                        />
                        <span class="input-group-text">
                          <i 
                            @click="togglePassword"
                            class="ti"
                            :class="{
                              'ti-eye': showPassword,
                              'ti-eye-off': !showPassword,
                            }"
                            style="cursor: pointer;"
                          ></i>
                        </span>
                      </div>
                      <div class="invalid-feedback" v-if="v$.password.$error">
                        {{ v$.password.$errors[0].$message }}
                      </div>
                    </div>

                    <!-- Remember Me & Forgot Password -->
                    <div class="d-flex justify-content-between align-items-center mb-3">
                      <div class="form-check">
                        <input 
                          type="checkbox" 
                          class="form-check-input" 
                          id="remember"
                          v-model="formData.remember_me"
                        >
                        <label class="form-check-label" for="remember">Remember me</label>
                      </div>
                      <router-link to="/forgot-password" class="text-primary">Forgot Password?</router-link>
                    </div>

                    <!-- Submit Button -->
                    <button 
                      type="submit" 
                      class="btn btn-primary w-100 mb-3"
                    >
                      <span v-if="isLoading" class="spinner-border spinner-border-sm me-2"></span>
                      {{ isLoading ? 'Signing in...' : 'Sign In' }}
                    </button>

                    <!-- Register Link -->
                    <div class="text-center">
                      <p>Don't have an account? <router-link to="/register" class="text-primary">Sign Up</router-link></p>
                    </div>
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

<style scoped>
.input-group-text {
  cursor: pointer;
}

.invalid-feedback {
  display: block;
}
</style>
