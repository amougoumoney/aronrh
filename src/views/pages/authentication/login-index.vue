<script setup>
import { ref, reactive, onMounted } from 'vue';
import router from '../../../router';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import { authService } from '@/services/auth.service';
import { useUserStore } from '@/stores/users';

const showPassword = ref(false);
const isLoading = ref(false);
const error = ref(null);
const userStore = useUserStore();

const formData = reactive({
  email: 'nelson@gmail.com',
  password: 'password@123',
  remember_me: false
});

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(6) }
};

const v$ = useVuelidate(rules, formData);

onMounted(() => {
  const token = localStorage.getItem('token');
  if (token) {
    // verifyToken(token);
  }
});

const verifyToken = async (token) => {
  try {
    const response = await authService.verifyToken(token);
    if (response.valid) {
      redirectBasedOnRole(response.user);
    } else {
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

const redirectBasedOnRole = () => {

  const storedUser = localStorage.getItem('user');
  if (!storedUser) {
    router.push('/dashboard');
    return;
  }
  console.log('storedUser', storedUser)
  const user = JSON.parse(storedUser);
  if (!user.roles || user.roles.length === 0) {
    router.push('/dashboard');
    return;
  }
  const role = user.roles[0].toLowerCase();
  const routes = {
    admin: '/dashboard/admin-dashboard',
    'hr-manager': '/dashboard/hr-manager-dashboard',
    'hr-assistant': '/dashboard/hr-assistant-dashboard',
    manager: '/dashboard/employee-dashboard',
    employee: '/dashboard/employee-dashboard'
  };
  router.push(routes[role] || '/dashboard');
};

const login = async () => {
  error.value = null;
  const result = await v$.value.$validate();
  if (!result) {
    error.value = 'Veuillez corriger les erreurs du formulaire.';
    return;
  }

  try {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userL = users.find(user => user.email === formData.email && user.password === formData.password);

    if (!userL) {
      error.value = 'Email ou mot de passe incorrect.';
      return;
    }

    localStorage.setItem('token', 'fake-jwt-token');
    localStorage.setItem('user', JSON.stringify(userL));
    localStorage.setItem('userRole', userL.roles[0].toLowerCase());
    localStorage.setItem('permissions', userL.permissions[0].toLowerCase());
    redirectBasedOnRole();
  } catch (err) {
    error.value = 'Une erreur est survenue lors de la connexion.';
    console.error('Login error:', err);
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
            <!-- Add picture for background -->

            <!-- Overlay -->
          </div>
        </div>

        <div class="col-lg-7 col-md-12 col-sm-12">
          <div class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap">
            <div class="col-md-7 mx-auto p-4 d-flex flex-column">
              <!-- Form with @submit.prevent -->
              <div class="mx-auto mb-5 text-center">
                <!-- Custom Logo Box -->
                <div class="login-logo-box">
                  <h1 class="login-logo-title">AR HR</h1>
                </div>
              </div>


              <form @submit.prevent="login" class="flex-grow-1 d-flex flex-column">
                <div class="flex-grow-1">
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
                      <input type="email" v-model="formData.email" class="form-control"
                        :class="{ 'is-invalid': v$?.email.$error }" />
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
                      <input :type="showPassword ? 'text' : 'password'" v-model="formData.password" class="form-control"
                        :class="{ 'is-invalid': v$.password.$error }" />
                      <span class="input-group-text">
                        <i @click="togglePassword" class="ti" :class="{
                          'ti-eye': showPassword,
                          'ti-eye-off': !showPassword,
                        }" style="cursor: pointer;"></i>
                      </span>
                    </div>
                    <div class="invalid-feedback" v-if="v$.password.$error">
                      {{ v$.password.$errors[0].$message }}
                    </div>
                  </div>

                  <!-- Remember Me & Forgot Password -->
                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="remember" v-model="formData.remember_me">
                      <label class="form-check-label" for="remember">Remember me</label>
                    </div>
                    <router-link to="/forgot-password" class="text-primary">Forgot Password?</router-link>
                  </div>

                  <!-- Submit Button -->
                  <button type="submit" class="btn btn-primary w-100 mb-3">
                    <span v-if="isLoading" class="spinner-border spinner-border-sm me-2"></span>
                    {{ isLoading ? 'Signing in...' : 'Sign In' }}
                  </button>
                </div>
              </form>
            </div>

            <!-- Footer with logos -->
            <div class="footer mt-4">
              <div class="text-center mt-2">
                <small class="text-muted">&copy; 2025 ARONHR/ HR Management System</small>
              </div>
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