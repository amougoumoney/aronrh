import { apiService } from '@/services/api.service';
import { API_ENDPOINTS } from '@/config/api.config';

class WorkLocationService {
  // Récupérer tous les emplacements de travail
  async getAllWorkLocations() {
    return await apiService.get(API_ENDPOINTS.WORK_LOCATION.LIST);
  }

  // Créer un nouvel emplacement de travail
  async createWorkLocation(workLocationData) {
    const formattedData = this.formatWorkLocationData(workLocationData);
    return await apiService.post(API_ENDPOINTS.WORK_LOCATION.CREATE, formattedData);
  }

  // Mettre à jour un emplacement de travail existant
  async updateWorkLocation(id, workLocationData) {
    const endpoint = API_ENDPOINTS.WORK_LOCATION.UPDATE.replace(':id', id);
    const formattedData = this.formatWorkLocationData(workLocationData);
    return await apiService.put(endpoint, formattedData);
  }

  // Supprimer un emplacement de travail
  async deleteWorkLocation(id) {
    const endpoint = API_ENDPOINTS.WORK_LOCATION.DELETE.replace(':id', id);
    return await apiService.delete(endpoint);
  }

  // Formater les données de l'emplacement de travail
  formatWorkLocationData(data) {
    return {
      id: data.id,
      name: data.name,
      type: data.type,
      created_at: data.created_at || null,
      updated_at: data.updated_at || null,
      created_by: data.created_by || null,
      updated_by: data.updated_by || null,
    };
  }
}

export const workLocationService = new WorkLocationService();
export default workLocationService;