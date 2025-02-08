import { ROLE_HIERARCHY, DEFAULT_ROUTES, ROLE_MENU_ACCESS } from '../config/role-menu.config';

class MenuService {
    // Get user's role
    getUserRole() {
        return localStorage.getItem('userRole')?.toLowerCase() || 'employee';
    }

    // Get user's permissions
    getUserPermissions() {
        return JSON.parse(localStorage.getItem('permissions') || '[]');
    }

    // Check if user has required role based on hierarchy
    hasRole(requiredRole) {
        const userRole = this.getUserRole();
        const userRoleLevel = ROLE_HIERARCHY[userRole] || 999;
        const requiredRoleLevel = ROLE_HIERARCHY[requiredRole] || 999;
        
        return userRoleLevel <= requiredRoleLevel;
    }

    // Check if user has any of the required roles
    hasAnyRole(requiredRoles) {
        if (!requiredRoles || requiredRoles.length === 0) return true;
        return requiredRoles.some(role => this.hasRole(role));
    }

    // Check if menu item is allowed for user's role
    isMenuAllowed(menuValue) {
        const userRole = this.getUserRole();
        const roleAccess = ROLE_MENU_ACCESS[userRole];
        return roleAccess?.allowedMenus.includes(menuValue) || false;
    }

    // Check if submenu item is allowed for user's role
    isSubmenuAllowed(parentMenuValue, submenuValue) {
        const userRole = this.getUserRole();
        const roleAccess = ROLE_MENU_ACCESS[userRole];
        return roleAccess?.allowedSubMenus?.[parentMenuValue]?.includes(submenuValue) || false;
    }

    // Get allowed menus for current user
    getAllowedMenus() {
        const userRole = this.getUserRole();
        return ROLE_MENU_ACCESS[userRole]?.allowedMenus || [];
    }

    // Get allowed submenus for a specific menu
    getAllowedSubmenus(menuValue) {
        const userRole = this.getUserRole();
        return ROLE_MENU_ACCESS[userRole]?.allowedSubMenus?.[menuValue] || [];
    }

    // Filter sidebar data based on user's role
    filterSidebarData(sidebarData) {
        const allowedMenus = this.getAllowedMenus();
        
        return sidebarData.map(section => ({
            ...section,
            menu: section.menu.filter(menuItem => {
                // Check if menu item is allowed
                const isAllowed = allowedMenus.includes(menuItem.menuValue);
                
                // If it has subroutes, filter them too
                if (menuItem.hasSubRoute || menuItem.hasSubRouteTwo) {
                    const allowedSubmenus = this.getAllowedSubmenus(menuItem.menuValue);
                    
                    menuItem.subMenus = menuItem.subMenus.filter(subMenu => {
                        // For items with nested submenus
                        if (subMenu.customSubmenuTwo) {
                            subMenu.subMenusTwo = subMenu.subMenusTwo.filter(subMenuTwo => 
                                this.canAccessRoute(subMenuTwo.route)
                            );
                            return subMenu.subMenusTwo.length > 0;
                        }
                        
                        // If parent menu has specific submenu restrictions
                        if (allowedSubmenus.length > 0) {
                            return allowedSubmenus.includes(subMenu.menuValue);
                        }
                        
                        return this.canAccessRoute(subMenu.route);
                    });
                    
                    // Only include menu item if it has allowed submenu items
                    return isAllowed && menuItem.subMenus.length > 0;
                }
                
                return isAllowed;
            })
        })).filter(section => section.menu.length > 0);
    }

    // Check if user has required permission
    hasPermission(requiredPermission) {
        if (!requiredPermission) return true;
        const userRole = this.getUserRole();
        const rolePermissions = ROLE_MENU_ACCESS[userRole]?.permissions || [];
        const userPermissions = this.getUserPermissions();
        
        return rolePermissions.includes(requiredPermission) || 
               userPermissions.includes(requiredPermission);
    }

    // Check if user has all required permissions
    hasAllPermissions(requiredPermissions) {
        if (!requiredPermissions || requiredPermissions.length === 0) return true;
        return requiredPermissions.every(permission => this.hasPermission(permission));
    }

    // Check if user has any of the required permissions
    hasAnyPermission(requiredPermissions) {
        if (!requiredPermissions || requiredPermissions.length === 0) return true;
        return requiredPermissions.some(permission => this.hasPermission(permission));
    }

    // Get default route for current user
    getDefaultRoute() {
        const userRole = this.getUserRole();
        return DEFAULT_ROUTES[userRole] || '/dashboard/employee-dashboard';
    }

    // Check if user can access a specific route
    canAccessRoute(route, requiredRoles = [], requiredPermissions = []) {
        return this.hasAnyRole(requiredRoles) && this.hasAnyPermission(requiredPermissions);
    }
}

export const menuService = new MenuService(); 