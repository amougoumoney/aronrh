import { apiService } from './api.service';
import { API_ENDPOINTS } from '../config/api.config';

class RoleService {
    // Get all roles
    async getRoles(params = {}) {
        const queryString = new URLSearchParams(params).toString();
        const endpoint = queryString ? `${API_ENDPOINTS.ROLE.LIST}?${queryString}` : API_ENDPOINTS.ROLE.LIST;
        return await apiService.get(endpoint);
    }

    // Get role details
    async getRoleDetails(id) {
        const endpoint = API_ENDPOINTS.ROLE.DETAILS.replace(':id', id);
        return await apiService.get(endpoint);
    }

    // Create role
    async createRole(data) {
        return await apiService.post(API_ENDPOINTS.ROLE.CREATE, data);
    }

    // Update role
    async updateRole(id, data) {
        const endpoint = API_ENDPOINTS.ROLE.UPDATE.replace(':id', id);
        return await apiService.put(endpoint, data);
    }

    // Delete role
    async deleteRole(id) {
        const endpoint = API_ENDPOINTS.ROLE.DELETE.replace(':id', id);
        return await apiService.delete(endpoint);
    }

    // Get role permissions
    async getRolePermissions(id) {
        const endpoint = API_ENDPOINTS.ROLE.GET_PERMISSIONS.replace(':id', id);
        return await apiService.get(endpoint);
    }

    // Update role permissions
    async updateRolePermissions(id, permissions) {
        const endpoint = API_ENDPOINTS.ROLE.UPDATE_PERMISSIONS.replace(':id', id);
        return await apiService.put(endpoint, { permissions });
    }
}

export const roleService = new RoleService(); 