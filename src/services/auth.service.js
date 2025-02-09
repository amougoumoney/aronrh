import { apiService } from './api.service';
import { API_ENDPOINTS } from '../config/api.config';
import { roleService } from './role.service';

class AuthService {
    constructor() {
        this.tokenTimer = null;
        this.initTokenCheck();
    }

    // Initialize token check
    initTokenCheck() {
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

    // Helper method to get redirect path based on role
    getRedirectPath(role) {
        switch (role.toLowerCase()) {
            case 'admin':
                return '/dashboard/admin-dashboard';
            case 'hr-manager':
                return '/dashboard/hr-manager-dashboard';
            case 'hr-assistant':
                return '/dashboard/hr-assistant-dashboard';
            case 'manager':
            case 'employee':
            default:
                return '/dashboard/employee-dashboard';
        }
    }

    // Login
    async login(credentials) {
        try {
            const response = await apiService.post(API_ENDPOINTS.AUTH.LOGIN, credentials);
            
            // Validate response
            if (!response || typeof response !== 'object') {
                throw new Error('Invalid response format from server');
            }

            // Check for access token
            if (!response.access_token) {
                throw new Error('No access token received');
            }

            // Store token with bearer type
            const tokenType = response.token_type || 'Bearer';
            localStorage.setItem('token', response.access_token);
            apiService.setAuthToken(`${tokenType} ${response.access_token}`);

            // Validate and store user data
            if (response.user && typeof response.user === 'object') {
                localStorage.setItem('user', JSON.stringify(response.user));
                
                // Get user role from the roles array using slug
                const userRole = response.user.roles?.[0]?.slug || 'employee';
                localStorage.setItem('userRole', userRole);

                // Set token expiration
                if (response.expires_in) {
                    const expiresIn = response.expires_in * 1000;
                    const expirationTime = new Date().getTime() + expiresIn;
                    localStorage.setItem('tokenExpiration', expirationTime.toString());
                    
                    // Set timer for auto logout
                    this.setTokenTimer(expiresIn);
                }

                // Get role permissions
                try {
                    const rolePermissions = await roleService.getRolePermissions(userRole);
                    if (rolePermissions) {
                        localStorage.setItem('permissions', JSON.stringify(rolePermissions));
                    }
                    
                    // Get redirect path based on role
                    const redirectPath = this.getRedirectPath(userRole);
                    return {
                        ...response,
                        redirectPath,
                        success: true
                    };
                } catch (permError) {
                    console.error('Error fetching permissions:', permError);
                    // Continue even if permissions fetch fails
                    const redirectPath = this.getRedirectPath(userRole);
                    return {
                        ...response,
                        redirectPath,
                        success: true,
                        warning: 'Logged in successfully but failed to fetch permissions'
                    };
                }
            } else {
                this.clearAuthData();
                throw new Error('Invalid user data received');
            }
        } catch (error) {
            console.error('Login error:', error);
            
            // Clean up any partial auth data on error
            this.clearAuthData();

            // If the error has a response from the API
            if (error.response) {
                const statusCode = error.response.status;
                const apiError = error.response.data;

                // Handle specific status codes
                switch (statusCode) {
                    case 401:
                        throw {
                            type: 'AUTH_ERROR',
                            message: 'Invalid email or password',
                            statusCode: 401
                        };
                    case 422:
                        throw {
                            type: 'VALIDATION_ERROR',
                            message: apiError?.message || 'Validation failed',
                            errors: apiError?.errors,
                            statusCode: 422
                        };
                    case 429:
                        throw {
                            type: 'RATE_LIMIT_ERROR',
                            message: 'Too many login attempts. Please try again later.',
                            statusCode: 429
                        };
                    default:
                        throw {
                            type: 'SERVER_ERROR',
                            message: apiError?.message || 'An unexpected error occurred',
                            statusCode: statusCode
                        };
                }
            }
            
            // Check if it's a network error
            if (error.message === 'Network Error' || (!error.response && !error.status)) {
                throw {
                    type: 'NETWORK_ERROR',
                    message: 'Unable to connect to the server. Please check your connection.',
                    statusCode: 0
                };
            }

            // Handle parsing errors
            if (error instanceof SyntaxError) {
                throw {
                    type: 'PARSE_ERROR',
                    message: 'Invalid response format from server',
                    statusCode: 500
                };
            }

            // Handle other errors
            throw {
                type: 'UNKNOWN_ERROR',
                message: error.message || 'An unexpected error occurred',
                statusCode: 500
            };
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
                // Ensure the token is set in the API service before logout
                apiService.setAuthToken(`Bearer ${token}`);
                
                try {
                    // Try to call the API logout endpoint
                    await apiService.post(API_ENDPOINTS.AUTH.LOGOUT);
                } catch (error) {
                    // If API call fails, just log it but continue with local logout
                    console.warn('Logout API call failed:', error);
                }
            }
            
            // Always clear auth data regardless of API call success
            this.clearAuthData();
            
            return { success: true };
        } catch (error) {
            // Clear auth data even on error
            this.clearAuthData();
            console.error('Logout error:', error);
            return { success: true };
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
        try {
            const response = await apiService.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, resetData);
            return response;
        } catch (error) {
            console.error('Reset password error:', error);
            throw error;
        }
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