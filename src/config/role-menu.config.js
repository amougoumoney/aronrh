// Role hierarchy (higher index = lower priority)
export const ROLE_HIERARCHY = {
    'admin': 1,
    'hr-manager': 2,
    'hr-assistant': 3,
    'manager': 4,
    'employee': 5
};

// Default routes for each role
export const DEFAULT_ROUTES = {
    'admin': '/dashboard/admin-dashboard',
    'hr-manager': '/dashboard/hr-manager-dashboard',
    'hr-assistant': '/dashboard/hr-assistant-dashboard',
    'manager': '/dashboard/employee-dashboard',
    'employee': '/dashboard/employee-dashboard'
};

// Role-based menu access configuration
export const ROLE_MENU_ACCESS = {
    'admin': {
        allowedMenus: ['Dashboard', 'Jobs', 'Candidates', 'Referrals', 'Clients', 'Projects', 'Employee', 'Tickets', 'Holidays', 'Attendance', 'Performance'],
        permissions: ['view_all', 'manage_all']
    },
    'hr-manager': {
        allowedMenus: ['Dashboard', 'Jobs', 'Candidates', 'Employee', 'Tickets', 'Holidays', 'Attendance'],
        permissions: ['view_hr', 'manage_hr', 'view_employees', 'manage_employees']
    },
    'hr-assistant': {
        allowedMenus: ['Dashboard', 'Jobs', 'Candidates', 'Employee', 'Holidays', 'Attendance'],
        permissions: ['view_hr', 'view_employees']
    },
    'employee': {
        allowedMenus: ['Dashboard', 'Tickets', 'Holidays', 'Attendance'],
        permissions: ['view_self']
    }
}; 