// Role hierarchy (higher index = lower priority)
export const ROLE_HIERARCHY = {
    'admin': 1,
    'hr-manager': 2, 
    'hr-assistant': 3,
    'manager': 4,
    'employee': 5,
    'superadmin':6
};

// Default routes for each role
export const DEFAULT_ROUTES = {
    'admin': '/dashboard/admin-dashboard',
    'hr-manager': '/dashboard/hr-manager-dashboard', 
    'hr-assistant': '/dashboard/hr-assistant-dashboard',
    'employee': '/dashboard/employee-dashboard',
    'superadmin':'/super-admin/dashboard'
};

// Role-based menu access configuration
export const ROLE_MENU_ACCESS = {
    'admin': {
        allowedMenus: [
            'Dashboard',
            'Recruitment',
            'Clients',
            'Projects',
            'Employee',
            'Tickets',
            'Holidays',
            'Attendance',
            'Performance',
            'Grants',
            'Training',
            'Reports',
            'Requests',
            'Leaves',
            'Travel',
            'Assets',
            'User Management',
            'Help & Supports',
            'Accounting',
            'Payroll',
        ],
        allowedSubMenus: {
            'Dashboard': ['Admin Dashboard'],
            'Leaves': ['Leaves (Admin)', 'Leave Settings'],
            'Travel': ['Travel (Admin)'],
            'Attendance': ['Attendance (Admin)', 'Timesheets', 'Schedule Timing', 'Overtime'],
            'Recruitment': ['Interviews', 'References'],
            'Employee': ['Employee Lists', 'Employee Details'],
            'User Management': ['Users', 'Roles & Permissions']
        },
        permissions: [
            'view_all',
            'manage_all', 
            'access_all_dashboards',
            'manage_grants',
            'manage_requests',
            'manage_leave',
            'manage_recruitment'
        ]
    },
    'hr-manager': {
        allowedMenus: [
            'Dashboard',
            'Recruitment',
            'Jobs',
            'Candidates',
            'Referrals', 
            'Employee',
            'Tickets',
            'Holidays',
            'Attendance',
            'Grants',
            'Payroll',
            'Training',
            'Reports',
            'Requests',
            'Leaves',
            'Travel',
            'Training',
            'Reports'
        ],
        allowedSubMenus: {
            'Dashboard': ['HR Manager Dashboard'],
            'Leaves': ['Leaves (Admin)', 'Leave Settings'],
            'Travel': ['Travel (Admin)'],
            'Attendance': ['Attendance (Admin)', 'Timesheets', 'Schedule Timing', 'Overtime'],
            'Recruitment': ['Interviews', 'References', 'Candidates'],
            'Employee': ['Employee Lists', 'Employee Details'],
            'Payroll': ['Employee Salary', 'Payslip', 'Payroll Items'],
            'Training': ['Training List', 'Trainers'],
            'Reports': ['Expense Report', 'Invoice Report', 'Sales Report', 'Profit & Loss Report', 'Employee Report', 'Client Report', 'Project Report', 'Task Report', 'Ticket Report', 'Holiday Report', 'Attendance Report', 'Performance Report', 'Grant Report', 'Request Report', 'Leave Report', 'Travel Report', 'Asset Report', 'User Report']
        },
        permissions: [
            'view_hr',
            'manage_hr',
            'view_employees',
            'manage_employees',
            'manage_grants',
            'manage_requests', 
            'manage_leave',
            'manage_recruitment'
        ]
    },
    'hr-assistant': {
        allowedMenus: [
            'Dashboard',
            'Recruitment',
            'Candidates',
            'Employee',
            'Holidays', 
            'Attendance',
            'Grants',
            'Training',
            'Reports',
            'Requests',
            'Leaves',
            'Travel',
            'Payroll',
            'Training',
            'Reports'
        ],
        allowedSubMenus: {
            'Dashboard': ['HR Assistant Dashboard'],
            'Leaves': ['Leaves (Admin)'],
            'Travel': ['Travel (Admin)', 'Travel (Employee)'],
            'Attendance': ['Attendance (Admin)', 'Timesheets', 'Schedule Timing'],
            'Recruitment': ['Interviews', 'References'],
            'Employee': ['Employee Lists', 'Employee Details'],
            'Payroll': ['Employee Salary', 'Payslip', 'Payroll Items'],
            'Training': ['Training List', 'Trainers'],
            'Reports': ['Expense Report', 'Invoice Report', 'Sales Report', 'Profit & Loss Report', 'Employee Report', 'Client Report', 'Project Report', 'Task Report', 'Ticket Report', 'Holiday Report', 'Attendance Report', 'Performance Report', 'Grant Report', 'Request Report', 'Leave Report', 'Travel Report', 'Asset Report', 'User Report']
        },
        permissions: [
            'view_hr',
            'view_employees',
            'manage_grants',
            'manage_requests',
            'manage_leave',
            'view_recruitment'
        ]
    },
    'employee': {
        allowedMenus: [
            'Dashboard',
            'Attendance',
            'Requests',
            'Leaves',
            'Travel'
        ],
        allowedSubMenus: {
            'Dashboard': ['Employee Dashboard'],
            'Leaves': ['Leave (Employee)'],
            'Travel': ['Travel (Employee)'],
            'Attendance': ['Attendance (Employee)', 'Timesheets']
        },
        permissions: [
            'view_self',
            'view_requests',
            'manage_leave',
            'manage_travel'
        ]
    }, 
    'superadmin':{
        allowedMenus: [
            'Dashboard',
            'Recruitment',
            'Clients',
            'Projects',
            'Employee',
            'Tickets',
            'Holidays',
            'Attendance',
            'Performance',
            'Grants',
            'Training',
            'Reports',
            'Requests',
            'Leaves',
            'Travel',
            'Assets',
            'User Management',
            'Help & Supports',
            'Accounting',
            'Payroll',
        ],
        allowedSubMenus: {
            'Dashboard': ['Admin Dashboard','Dashboard'],
            'Leaves': ['Leaves (Admin)', 'Leave Settings'],
            'Travel': ['Travel (Admin)'],
            'Attendance': ['Attendance (Admin)', 'Timesheets', 'Schedule Timing', 'Overtime'],
            'Recruitment': ['Interviews', 'References'],
            'Employee': ['Employee Lists', 'Employee Details'],
            'User Management': ['Users', 'Roles & Permissions']
        },
        permissions: [
            'view_all',
            'manage_all', 
            'access_all_dashboards',
            'manage_grants',
            'manage_requests',
            'manage_leave',
            'manage_recruitment'
        ]
    }
};