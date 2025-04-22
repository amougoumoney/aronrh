import { apiService } from '@/services/api.service';
import { API_ENDPOINTS } from '@/config/api.config';

class TraditionalLeaveService {
  // Récupérer tous les congés traditionnels
  async getAllTraditionalLeaves() {
    return await apiService.get(API_ENDPOINTS.TRADITIONAL_LEAVE.LIST);
  }

  // Créer un nouveau congé traditionnel
  async createTraditionalLeave(traditionalLeaveData) {
    const formattedData = this.formatTraditionalLeaveData(traditionalLeaveData);
    return await apiService.post(API_ENDPOINTS.TRADITIONAL_LEAVE.CREATE, formattedData);
  }

  // Mettre à jour un congé traditionnel existant
  async updateTraditionalLeave(id, traditionalLeaveData) {
    const endpoint = API_ENDPOINTS.TRADITIONAL_LEAVE.UPDATE.replace(':id', id);
    const formattedData = this.formatTraditionalLeaveData(traditionalLeaveData);
    return await apiService.put(endpoint, formattedData);
  }

  // Supprimer un congé traditionnel
  async deleteTraditionalLeave(id) {
    const endpoint = API_ENDPOINTS.TRADITIONAL_LEAVE.DELETE.replace(':id', id);
    return await apiService.delete(endpoint);
  }

  // Formater les données du congé traditionnel
  formatTraditionalLeaveData(data) {
    return {
      id: data.id,
      name: data.name,
      description: data.description || null,
      date: data.date,
      created_by: data.created_by || null,
      updated_by: data.updated_by || null,
    };
  }
}

export const traditionalLeaveService = new TraditionalLeaveService();
export default traditionalLeaveService;