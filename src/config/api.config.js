export const API_CONFIG = {
    BASE_URL: process.env.VUE_APP_API_URL || 'http://127.0.0.1:8000/api/v1',
    HEADERS: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
};

// API endpoints
export const API_ENDPOINTS = {
    // Auth endpoints
    AUTH: {
        LOGIN: '/auth/login',
        REGISTER: '/auth/register',
        LOGOUT: '/auth/logout',
        USER: '/auth/user',
        REFRESH: '/auth/refresh',
        FORGOT_PASSWORD: '/auth/forgot-password',
        RESET_PASSWORD: '/auth/reset-password',
        VERIFY_EMAIL: '/auth/verify-email'
    },
    
    // User endpoints
    USER: {
        PROFILE: '/user/profile',
        UPDATE_PROFILE: '/user/profile/update',
        CHANGE_PASSWORD: '/user/change-password',
    },

    // Employee endpoints
    EMPLOYEE: {
        LIST: '/employees',
        CREATE: '/employees',
        UPDATE: '/employees/:id',
        DELETE: '/employees/:id',
        DETAILS: '/employees/:id',
        SEARCH: '/employees/search'
    },

    // Department endpoints
    DEPARTMENT: {
        LIST: '/departments',
        CREATE: '/departments',
        UPDATE: '/departments/:id',
        DELETE: '/departments/:id',
    },

    // Leave endpoints
    LEAVE: {
        LIST: '/leaves',
        CREATE: '/leaves',
        UPDATE: '/leaves/:id',
        DELETE: '/leaves/:id',
        APPROVE: '/leaves/:id/approve',
        REJECT: '/leaves/:id/reject',
    },

    // Attendance endpoints
    ATTENDANCE: {
        LIST: '/attendance',
        CHECK_IN: '/attendance/check-in',
        CHECK_OUT: '/attendance/check-out',
        MONTHLY_REPORT: '/attendance/monthly-report',
    },

    // Payroll endpoints
    PAYROLL: {
        LIST: '/payroll',
        GENERATE: '/payroll/generate',
        DETAILS: '/payroll/:id',
        SALARY_SLIP: '/payroll/:id/slip',
    },

    // Settings endpoints
    SETTINGS: {
        COMPANY: '/settings/company',
        GENERAL: '/settings/general',
        EMAIL: '/settings/email',
        NOTIFICATION: '/settings/notification',
    },

    // Permission endpoints
    PERMISSION: {
        LIST: '/permissions',
        CREATE: '/permissions',
        UPDATE: '/permissions/:id',
        DELETE: '/permissions/:id',
        DETAILS: '/permissions/:id',
        MODULES: '/permissions/modules',
        GENERATE: '/permissions/generate'
    },

    // Role endpoints
    ROLE: {
        LIST: '/roles',
        CREATE: '/roles',
        UPDATE: '/roles/:id',
        DELETE: '/roles/:id',
        DETAILS: '/roles/:id',
        GET_PERMISSIONS: '/roles/:id/permissions',
        UPDATE_PERMISSIONS: '/roles/:id/permissions'
    },

    // Grant endpoints
    GRANT: {
        LIST: '/grants',
        CREATE: '/grants',
        UPDATE: '/grants/:id',
        DELETE: '/grants/:id',
        DETAILS: '/grants/:id',
        APPROVE: '/grants/:id/approve',
        REJECT: '/grants/:id/reject',
        DOCUMENTS: '/grants/:id/documents',
        UPLOAD_DOCUMENT: '/grants/:id/documents/upload',
        DELETE_DOCUMENT: '/grants/:id/documents/:documentId'
    }
}; 