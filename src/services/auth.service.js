import { apiService } from './api.service';
import { API_ENDPOINTS } from '../config/api.config';
import Swal from 'sweetalert2';
import { roleService } from './role.service';

class AuthService {
    constructor() {
        this.tokenTimer = null;
        this.initTokenCheck();
    }

    // Initialize token check
    initTokenCheck() {
        // Check token expiration on service initialization
        const expiration = localStorage.getItem('tokenExpiration');
        if (expiration) {
            const timeLeft = new Date(parseInt(expiration)) - new Date();
            if (timeLeft > 0) {
                this.setTokenTimer(timeLeft);
            } else {
                this.logout();
            }
        }
    }

    // Set token timer
    setTokenTimer(duration) {
        if (this.tokenTimer) {
            clearTimeout(this.tokenTimer);
        }
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration);
    }

    // Helper method to get primary role
    getPrimaryRole(roles) {
        const rolePriority = {
            'admin': 1,
            'hr-manager': 2,
            'hr-assistant': 3,
            'manager': 4,
            'employee': 5
        };

        return roles.sort((a, b) => 
            (rolePriority[a] || 999) - (rolePriority[b] || 999)
        )[0] || 'employee';
    }

    // Helper method to get dashboard path based on role
    getDashboardPath(role) {
        switch (role.toLowerCase()) {
            case 'admin':
                return '/dashboard/admin-dashboard';
            case 'hr-manager':
                return '/dashboard/hr-manager-dashboard';
            case 'hr-assistant':
                return '/dashboard/hr-assistant-dashboard';
            case 'manager':
                return '/dashboard/employee-dashboard';
            case 'employee':
                return '/dashboard/employee-dashboard';
            default:
                return '/dashboard/employee-dashboard';
        }
    }

    // Login
    async login(credentials) {
        try {
            const response = await apiService.post(API_ENDPOINTS.AUTH.LOGIN, credentials);
            if (response.access_token) {
                // Store token with bearer type
                localStorage.setItem('token', response.access_token);
                apiService.setAuthToken(`${response.token_type} ${response.access_token}`);

                // Store user data
                localStorage.setItem('user', JSON.stringify(response.user));
                
                // Get user role from the roles array using slug
                const userRole = response.user.roles?.[0]?.slug || 'employee';
                localStorage.setItem('userRole', userRole);

                // Set token expiration
                const expiresIn = response.expires_in * 1000;
                const expirationTime = new Date().getTime() + expiresIn;
                localStorage.setItem('tokenExpiration', expirationTime.toString());
                
                // Set timer for auto logout
                this.setTokenTimer(expiresIn);

                // Show success toast
                await Swal.fire({
                    title: 'Login Successful!',
                    text: 'Welcome back ' + response.user.name,
                    icon: 'success',
                    timer: 1500,
                    showConfirmButton: false,
                    position: 'top-end',
                    toast: true
                });

                // Get role permissions
                try {
                    const rolePermissions = await roleService.getRolePermissions(userRole);
                    localStorage.setItem('permissions', JSON.stringify(rolePermissions));
                } catch (permError) {
                    console.error('Error fetching permissions:', permError);
                }

                // Return the dashboard path with the response
                return {
                    ...response,
                    dashboardPath: this.getDashboardPath(userRole)
                };
            }
            return response;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }

    // Register
    async register(userData) {
        return await apiService.post(API_ENDPOINTS.AUTH.REGISTER, userData);
    }

    // Logout
    async logout() {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    // Ensure the token is set in the API service before logout
                    apiService.setAuthToken(`Bearer ${token}`);
                    
                    // Call the API logout endpoint
                    await apiService.post(API_ENDPOINTS.AUTH.LOGOUT);

                    // Show success message
                    await Swal.fire({
                        title: 'Logged Out',
                        text: 'You have been successfully logged out',
                        icon: 'success',
                        timer: 1500,
                        showConfirmButton: false,
                        position: 'top-end',
                        toast: true
                    });
                } catch (apiError) {
                    console.error('API logout error:', apiError);
                    // Don't show error for API failure
                }
            }
            
            // Always clear auth data
            this.clearAuthData();
        } catch (error) {
            console.error('Logout error:', error);
            // Clear auth data even on error
            this.clearAuthData();
            throw error;
        }
    }

    // Clear auth data
    clearAuthData() {
        try {
            // Clear all auth-related data from localStorage
            const itemsToClear = [
                'token',
                'user',
                'userRole',
                'tokenExpiration',
                'permissions',
                'intendedRoute',
                'error'
            ];

            itemsToClear.forEach(item => {
                localStorage.removeItem(item);
            });
            
            // Reset API service auth header
            apiService.setAuthToken(null);
            
            // Clear token timer if exists
            if (this.tokenTimer) {
                clearTimeout(this.tokenTimer);
                this.tokenTimer = null;
            }
        } catch (error) {
            console.error('Error clearing auth data:', error);
        }
    }

    // Verify token
    async verifyToken(token) {
        try {
            const response = await apiService.post(API_ENDPOINTS.AUTH.REFRESH, { token });
            return response;
        } catch (error) {
            console.error('Token verification failed:', error);
            this.clearAuthData();
            return { valid: false };
        }
    }

    // Refresh token
    async refreshToken() {
        try {
            const response = await apiService.post(API_ENDPOINTS.AUTH.REFRESH);
            if (response.token) {
                localStorage.setItem('token', response.token);
                apiService.setAuthToken(response.token);

                // Update expiration
                const expiresIn = 24 * 60 * 60 * 1000; // 24 hours
                const expirationTime = new Date().getTime() + expiresIn;
                localStorage.setItem('tokenExpiration', expirationTime);
                
                // Reset timer
                this.setTokenTimer(expiresIn);
            }
            return response;
        } catch (error) {
            console.error('Token refresh failed:', error);
            this.clearAuthData();
            throw error;
        }
    }

    // Forgot Password
    async forgotPassword(email) {
        return await apiService.post(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, { email });
    }

    // Reset Password
    async resetPassword(resetData) {
        return await apiService.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, resetData);
    }

    // Verify Email
    async verifyEmail(token) {
        return await apiService.post(API_ENDPOINTS.AUTH.VERIFY_EMAIL, { token });
    }

    // Check if user is authenticated
    isAuthenticated() {
        const token = localStorage.getItem('token');
        const expiration = localStorage.getItem('tokenExpiration');
        
        if (!token || !expiration) {
            return false;
        }

        const expirationTime = new Date(parseInt(expiration));
        const now = new Date();

        return now < expirationTime;
    }

    // Get authentication token
    getToken() {
        return localStorage.getItem('token');
    }

    // Get current user
    getCurrentUser() {
        const userStr = localStorage.getItem('user');
        return userStr ? JSON.parse(userStr) : null;
    }
}

export const authService = new AuthService(); 