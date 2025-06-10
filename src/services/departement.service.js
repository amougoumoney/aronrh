import { apiService } from '@/services/api.service';
import { API_ENDPOINTS } from '@/config/api.config';

class DepartmentPositionService {
  // Récupérer toutes les positions de département
  async getAllDepartmentPositions() {
    return await apiService.get(API_ENDPOINTS.DEPARTEMENT.LIST);
  }

  // Créer une nouvelle position de département
  async createDepartmentPosition(departmentPositionData) {
    const formattedData = this.formatDepartmentPositionData(departmentPositionData);
    return await apiService.post(API_ENDPOINTS.DEPARTEMENT.CREATE, formattedData);
  }

  // Mettre à jour une position de département existante
  async updateDepartmentPosition(id, departmentPositionData) {
    const endpoint = API_ENDPOINTS.DEPARTEMENT.UPDATE.replace(':id', id);
    const formattedData = this.formatDepartmentPositionData(departmentPositionData);
    return await apiService.put(endpoint, formattedData);
  }

  // Supprimer une position de département
  async deleteDepartmentPosition(id) {
    const endpoint = API_ENDPOINTS.DEPARTEMENT.DELETE.replace(':id', id);
    return await apiService.delete(endpoint);
  }

  // Formater les données de la position de département
  formatDepartmentPositionData(data) {
    return {
      id: data.id,
      nom:data.nom,
      description: data.description,
      position: data.position,
      cree_par: data.cree_par || 'admin',
      signaler_a: data.signaler_a || 'admin',
      mis_a_jour_par: data.mis_a_jour_par || 'admin',
    };
  }
}

export const departmentPositionService = new DepartmentPositionService();
export default departmentPositionService;