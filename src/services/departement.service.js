import { apiService } from '@/services/api.service';
import { API_ENDPOINTS } from '@/config/api.config';

class DepartmentPositionService {
  // Récupérer toutes les positions de département
  async getAllDepartmentPositions() {
    return await apiService.get(API_ENDPOINTS.DEPARTMENT.POSITION.LIST);
  }

  // Créer une nouvelle position de département
  async createDepartmentPosition(departmentPositionData) {
    const formattedData = this.formatDepartmentPositionData(departmentPositionData);
    return await apiService.post(API_ENDPOINTS.DEPARTMENT.POSITION.CREATE, formattedData);
  }

  // Mettre à jour une position de département existante
  async updateDepartmentPosition(id, departmentPositionData) {
    const endpoint = API_ENDPOINTS.DEPARTMENT.POSITION.UPDATE.replace(':id', id);
    const formattedData = this.formatDepartmentPositionData(departmentPositionData);
    return await apiService.put(endpoint, formattedData);
  }

  // Supprimer une position de département
  async deleteDepartmentPosition(id) {
    const endpoint = API_ENDPOINTS.DEPARTMENT.POSITION.DELETE.replace(':id', id);
    return await apiService.delete(endpoint);
  }

  // Formater les données de la position de département
  formatDepartmentPositionData(data) {
    return {
      id: data.id,
      department: data.department,
      position: data.position,
      report_to: data.report_to || null,
      created_by: data.created_by || 'admin',
      updated_by: data.updated_by || 'admin',
    };
  }
}

export const departmentPositionService = new DepartmentPositionService();
export default departmentPositionService;