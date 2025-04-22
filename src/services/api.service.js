import { API_CONFIG } from '../config/api.config';
import axios from 'axios';

class ApiService {
    constructor() {
        this.baseURL = API_CONFIG.BASE_URL;
        this.headers = API_CONFIG.HEADERS;
        this.axiosInstance = axios.create({
            baseURL: this.baseURL,
            headers: this.headers,
            withCredentials: true
        })
    }

    // Set auth token
    setAuthToken(token) {
        if (token) {
            this.axiosInstance.defaults.headers['Authorization'] = this.headers['Authorization'];
        } else {
            delete this.headers['Authorization'];
            delete this.axiosInstance.defaults.headers['Authorization'];
        }
    }

    // Get full URL
    getFullURL(endpoint) {
        return `${this.baseURL}${endpoint}`;
    }

    // Handle response
    async handleResponse(response) {
        const data = await response.json();
        
        if (!response.ok) {
            const error = new Error(data.message || response.statusText);
            error.response = {
                status: response.status,
                data: data
            };
            return Promise.reject(error);
        }
        
        return data;
    }

    // GET request
    async get(endpoint) {
        try {
            const response = await fetch(this.getFullURL(endpoint), {
                method: 'GET',
                headers: this.headers,
                credentials: 'include'
            });
            return this.handleResponse(response);
        } catch (error) {
            if (!error.response) {
                error.message = 'Network Error';
            }
            return Promise.reject(error);
        }
    }

    // POST request
    async post(endpoint, data) {
        try {
            const response = await fetch(this.getFullURL(endpoint), {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify(data),
                credentials: 'include'
            });
            return this.handleResponse(response);
        } catch (error) {
            if (!error.response) {
                error.message = 'Network Error';
            }
            return Promise.reject(error);
        }
    }

    // PUT request
    async put(endpoint, data) {
        try {
            const response = await fetch(this.getFullURL(endpoint), {
                method: 'PUT',
                headers: this.headers,
                body: JSON.stringify(data),
                credentials: 'include'
            });
            return this.handleResponse(response);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    // DELETE request
    async delete(endpoint) {
        try {
            const response = await fetch(this.getFullURL(endpoint), {
                method: 'DELETE',
                headers: this.headers,
                credentials: 'include'
            });
            return this.handleResponse(response);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    // PATCH request
    async patch(endpoint, data) {
        try {
            const response = await fetch(this.getFullURL(endpoint), {
                method: 'PATCH',
                headers: this.headers,
                body: JSON.stringify(data),
                credentials: 'include'
            });
            return this.handleResponse(response);
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

export const apiService = new ApiService(); 