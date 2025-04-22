import { apiService } from '@/services/api.service';
import { API_ENDPOINTS } from '@/config/api.config';

class EmployeeGrantItemService {
  // Récupérer tous les éléments de subvention pour un employé
  async getAllEmployeeGrantItems(employeeId) {
    const endpoint = API_ENDPOINTS.EMPLOYEE.GRANT_ITEMS.LIST.replace(':employeeId', employeeId);
    return await apiService.get(endpoint);
  }

  // Créer un nouvel élément de subvention pour un employé
  async createEmployeeGrantItem(employeeGrantItemData) {
    const formattedData = this.formatEmployeeGrantItemData(employeeGrantItemData);
    return await apiService.post(API_ENDPOINTS.EMPLOYEE.GRANT_ITEMS.CREATE, formattedData);
  }

  // Mettre à jour un élément de subvention pour un employé
  async updateEmployeeGrantItem(id, employeeGrantItemData) {
    const endpoint = API_ENDPOINTS.EMPLOYEE.GRANT_ITEMS.UPDATE.replace(':id', id);
    const formattedData = this.formatEmployeeGrantItemData(employeeGrantItemData);
    return await apiService.put(endpoint, formattedData);
  }

  // Supprimer un élément de subvention pour un employé
  async deleteEmployeeGrantItem(id) {
    const endpoint = API_ENDPOINTS.EMPLOYEE.GRANT_ITEMS.DELETE.replace(':id', id);
    return await apiService.delete(endpoint);
  }

  // Formater les données de l'élément de subvention pour un employé
  formatEmployeeGrantItemData(data) {
    return {
      employee_id: data.employee_id,
      grant_items_id: data.grant_items_id,
      level_of_effort: data.level_of_effort,
      start_date: data.start_date,
      end_date: data.end_date || null,
      active: data.active,
      created_by: data.created_by || 'admin',
      updated_by: data.updated_by || 'admin',
    };
  }
}

export const employeeGrantItemService = new EmployeeGrantItemService();
export default employeeGrantItemService;