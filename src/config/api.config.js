export const API_CONFIG = {
    BASE_URL: import.meta.env.VUE_APP_API_BASE_URL || 'http://localhost:3333/api',
    HEADERS: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
};

// API endpoints
export const API_ENDPOINTS = {
    // Auth endpoints(ok)
    AUTH: {
        LOGIN: '/login',
        LOGOUT: '/logout',
        REGISTER: '/register',
        REFRESH: '/refresh-token',
        FORGOT_PASSWORD: '/forgot-password',
        RESET_PASSWORD: '/reset-password',
        VERIFY_EMAIL: '/verify-email',
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

    // Employee endpoints(ok)
    EMPLOYEE: {
        LIST: '/employee',
        CREATE: '/employee',
        UPDATE: '/employee/:id',
        DELETE: '/employee/:id',
        DETAILS: '/employee/:id',
        SEARCH: '/employee/search',
        SITE_RECORDS: '/employee/site-records'
    },

    // Role endpoints(ok)
    ROLE: {
        LIST: '/roles',
        CREATE: '/roles',
        UPDATE: '/roles/:id',
        DELETE: '/roles/:id',
        DETAILS: '/roles/:id',
        GET_PERMISSIONS: '/roles/:id/permissions',
        UPDATE_PERMISSIONS: '/roles/:id/permissions'
    },

    // Permission endpoints(ok)
    PERMISSION: {
        LIST: '/permissions',
        CREATE: '/permissions',
        UPDATE: '/permissions/:id',
        DELETE: '/permissions/:id',
        DETAILS: '/permissions/:id',
        MODULES: '/permissions/modules',
        GENERATE: '/permissions/generate'
    },

    // Grant endpoints
    GRANT: {
        LIST: '/grant',
        CREATE: '/grant',
        UPDATE: '/grant/:id',
        DELETE: '/grant/:id',
        DETAILS: '/grant/:id',
        UPLOAD: '/grant/upload'
    },
        // Points de terminaison pour les items de subvention
    GRANT_ITEM: {
        LIST: '/grantitems',
        CREATE: '/grantitems',
        UPDATE: '/grantitems/:id',
        DELETE: '/grantitems/:id',
        DETAILS: '/grantitems/:id'
    },

    // Interview endpoints(ok)
    INTERVIEW: {
        LIST: '/interviews',
        CREATE: '/interviews',
        UPDATE: '/interviews/:id',
        DELETE: '/interviews/:id',
        DETAILS: '/interviews/:id',
        UPDATE_STATUS: '/interviews/:id/status',
        FEEDBACK: '/interviews/:id/feedback'
    },
    //Candidat endpoints
    CANDIDAT: {
        LIST: '/candidat',
        CREATE: '/candidat',
        UPDATE: '/candidat/:id',
        DELETE: '/candidat/:id',
        DETAILS: '/candidat/:id',
    },
     // Points de terminaison pour les départements
    DEPARTEMENT: {
        LIST: '/departement',
        CREATE: '/departement',
        UPDATE: '/departement/:id',
        DELETE: '/departement/:id',
        DETAILS: '/departement/:id'
    },

    // Points de terminaison pour les allocations d'emploi
    EMPLOYMENT_ALLOCATION: {
        LIST: '/grantallocation',
        CREATE: '/grantallocation',
        UPDATE: '/grantallocation/:id',
        DELETE: '/grantallocation/:id',
        DETAILS: '/grantallocation/:id'
    },

    // Points de terminaison pour les types d'emploi
    EMPLOYMENT_TYPE: {
        LIST: '/employmentTypes',
        CREATE: '/employmentTypes',
        UPDATE: '/employmentTypes/:id',
        DELETE: '/employmentTypes/:id',
        DETAILS: '/employmentTypes/:id'
    },

    // Points de terminaison pour les formations
    FORMATION: {
        LIST: '/formation',
        CREATE: '/formation',
        UPDATE: '/formation/:id',
        DELETE: '/formation/:id',
        DETAILS: '/formation/:id'
    },

    // Points de terminaison pour les employés de formation
    FORMATION_EMPLOYES: {
        LIST: '/formationemployes',
        CREATE: '/formationemployes',
        UPDATE: '/formationemployes/:id',
        DELETE: '/formationemployes/:id',
        DETAILS: '/formationemployes/:id'
    },

    // Points de terminaison pour les enfants employés(ok)
    ENFANT_EMPLOYES: {
        LIST: '/enfantemployes',
        CREATE: '/enfantemployes',
        UPDATE: '/enfantemployes/:id',
        DELETE: '/enfantemployes/:id',
        DETAILS: '/enfantemployes/:id'
    },

    // Points de terminaison pour les historiques d'emploi
    EMPLOYMENT_HISTORY: {
        LIST: '/employmentHistories',
        CREATE: '/employmentHistories',
        UPDATE: '/employmentHistories/:id',
        DELETE: '/employmentHistories/:id',
        DETAILS: '/employmentHistories/:id'
    },
        // Points de terminaison pour les localisations de travail
    WORK_LOCATION: {
        LIST: '/worklocation',
        CREATE: '/worklocation',
        UPDATE: '/worklocation/:id',
        DELETE: '/worklocation/:id',
        DETAILS: '/worklocation/:id'
    },

    // Points de terminaison pour les lookups
    LOOKUP: {
        LIST: '/lookup',
        CREATE: '/lookup',
        UPDATE: '/lookup/:id',
        DELETE: '/lookup/:id',
        DETAILS: '/lookup/:id'
    },

    // point de terminaison pour les paiements

    PAYROLL: {
        LIST: '/payroll',
        CREATE: '/payroll',
        UPDATE: '/payroll/:id',
        DELETE: '/payroll/:id',
        DETAILS: '/payroll/:id'
    },
    // point de terminaison pour la liste des formations
    
    TRAINERTYPE: {
        LIST: '/trainertype',
        CREATE: '/trainertype',
        UPDATE: '/trainertype/:id',
        DELETE: '/trainertype/:id',
        DETAILS: '/trainertype/:id'
    },
    // point de terminaison pour les formateurs 
    
    TRAINER: {
        LIST: '/trainer',
        CREATE: '/trainer',
        UPDATE: '/trainer/:id',
        DELETE: '/trainer/:id',
        DETAILS: '/trainer/:id'
    },
    
    // point de terminaison pour les formations
    
    TRAINING: {
        LIST: '/training',
        CREATE: '/training',
        UPDATE: '/training/:id',
        DELETE: '/training/:id',
        DETAILS: '/training/:id'
    },

    JOB_OFFER: {
        LIST: '/job',
        CREATE: '/job',
        UPDATE: '/job/:id',
        DELETE: '/job/:id',
        DETAILS: '/job/:id'
    },

};