export const API_CONFIG = {
    BASE_URL: process.env.VUE_APP_API_URL || 'http://127.0.0.1:8000/api/v1',
    HEADERS: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}` 
    }
};

// API endpoints
export const API_ENDPOINTS = {
    // Auth endpoints
    AUTH: {
        LOGIN: '/login',
        LOGOUT: '/logout',
        USER: '/user'
    },

    // User endpoints
    USER: {
        LIST: '/users',
        CREATE: '/users',
        UPDATE: '/users/:id',
        DELETE: '/users/:id',
        DETAILS: '/users/:id'
    },

    // Employee endpoints
    EMPLOYEE: {
        LIST: '/employees',
        CREATE: '/employees',
        UPDATE: '/employees/:id',
        DELETE: '/employees/:id',
        DETAILS: '/employees/:id',
        SITE_RECORDS: '/employees/site-records'
    },

    // Grant endpoints
    GRANT: {
        LIST: '/grants',
        UPLOAD: '/grants/upload'
    }
};