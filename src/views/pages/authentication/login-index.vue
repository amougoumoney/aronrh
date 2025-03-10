<script>
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import { authService } from '@/services/auth.service';
import { useUserStore } from '@/stores/users';

export default {
  name: 'LoginIndex',
  setup() {
    const router = useRouter();
    const showPassword = ref(false);
    const isLoading = ref(false);
    const error = ref(null);
    const userStore = useUserStore();
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

const redirectBasedOnRole = () => {
  // Récupérer l'utilisateur depuis localStorage
  const storedUser = localStorage.getItem('user');
  if (!storedUser) {
    router.push('/dashboard');
    return;
  }
  const rolePriority = ['admin', 'hr-manager', 'hr-assistant', 'manager', 'employee'];

  const user = JSON.parse(storedUser);

  // Vérifier si l'utilisateur a des rôles
  if (!user.roles || user.roles.length === 0) {
    router.push('/dashboard');
    return;
  }

  const role = user.roles.find(r => rolePriority.includes(r.toLowerCase())) || 'employee';

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

/*     const handleLogin = async () => {
      try {
        error.value = null;
        const result = await v$.value.$validate();
        if (!result) return;


        isLoading.value = true;
        const response = await authService.login(formData);
        
        if (response.access_token) {
          // Get the redirect path based on user role
          const userRole = authService.getCurrentRole();
          if (userRole) {
            console.log(userRole);
            const redirectPath = authService.getRedirectPath(userRole);
            router.push(redirectPath);
          } else {
            error.value = 'User role not found in response';
          }
        } else {
          error.value = 'Login failed. Please try again.';
        }
      } catch (err) {
        console.error('Login error:', err);
        
        // Handle error based on type
        if (err.type === 'AUTH_ERROR') {
          error.value = 'Invalid email or password';
        } else if (err.type === 'VALIDATION_ERROR' && err.errors) {
          error.value = Object.values(err.errors).flat().join(', ');
        } else if (err.type === 'NETWORK_ERROR') {
          error.value = 'Unable to connect to the server. Please check your connection.';
        } else if (err.type === 'RATE_LIMIT_ERROR') {
          error.value = 'Too many login attempts. Please try again later.';
        } else if (err.response?.data?.message) {
          error.value = err.response.data.message;
        } else {
          error.value = err.message || 'An unexpected error occurred';
        }
      } finally {
        isLoading.value = false;
      }
    }; */
  const login = async () => {
  error.value = null; // Réinitialisation des erreurs

  // Validation du formulaire avec Vuelidate
  const result = await v$.value.$validate();
  if (!result) {
    error.value = 'Veuillez corriger les erreurs du formulaire.';
    return;
  }

  try {
    // Récupération des utilisateurs depuis le localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Recherche de l'utilisateur correspondant
    const userL = users.find((user) => user.email === formData.email && user.password === formData.password);

    if (!userL) {
      throw { type: 'AUTH_ERROR' };
    }

    // Stockage du token et des informations de l'utilisateur
    localStorage.setItem('token', userL.token);
    localStorage.setItem('user', JSON.stringify(userL));
    localStorage.setItem('userRole', userL.roles[0]?.toLowerCase());
    localStorage.setItem('permissions', userL.permissions[0]?.toLowerCase());

    // Connexion via userStore
    userStore.login(userL, userL.token);

    // Redirection selon le rôle
    redirectBasedOnRole(userL);
  } catch (err) {
    console.error('Erreur de connexion:', err);

    // Gestion des erreurs selon leur type
    if (err.type === 'AUTH_ERROR') {
      error.value = 'Email ou mot de passe incorrect.';
    } else if (err.type === 'VALIDATION_ERROR' && err.errors) {
      error.value = Object.values(err.errors).flat().join(', ');
    } else if (err.type === 'NETWORK_ERROR') {
      error.value = 'Impossible de se connecter au serveur. Vérifiez votre connexion.';
    } else if (err.type === 'RATE_LIMIT_ERROR') {
      error.value = 'Trop de tentatives de connexion. Réessayez plus tard.';
    } else if (err.response?.data?.message) {
      error.value = err.response.data.message;
    } else {
      error.value = err.message || 'Une erreur inattendue s’est produite.';
    }
  }
};
    return {
      formData,
      showPassword,
      isLoading,
      error,
      v$,
      login,
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
            <!-- Add picture for background -->

            <!-- Overlay -->
          </div>
        </div>
        
        <div class="col-lg-7 col-md-12 col-sm-12">
          <div class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap">
            <div class="col-md-7 mx-auto p-4 d-flex flex-column">
              <!-- Form with @submit.prevent -->
              <div class="flex-grow-1 d-flex flex-column">
                <div class="mx-auto mb-5 text-center">
                  <!-- Custom Logo Box -->
                  <div class="login-logo-box">
                    <h1 class="login-logo-title">HRMS</h1>
                    <span class="login-logo-tagline">SMRU / BHF</span>
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
                  </div>
                </form>
              </div>
              
              <!-- Footer with logos -->
              <div class="footer mt-4">
                <div class="d-flex justify-content-center align-items-center">
                  <img src="@/assets/img/smru-logo.png" 
                      alt="SMRU Logo" 
                      class="me-4"
                      style="max-height: 50px;" />
                  <img src="@/assets/img/bhf-logo.png" 
                      alt="BHF Logo" 
                      style="max-height: 50px;" />
                </div>
                <div class="text-center mt-2">
                  <small class="text-muted">&copy; 2025 SMRU/BHF HR Management System</small>
                </div>
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