import { apiService } from '@/services/api.service';
import { API_ENDPOINTS } from '@/config/api.config';

class LeaveTypeService {
  // Récupérer tous les types de congés
  async getAllLeaveTypes() {
    return await apiService.get(API_ENDPOINTS.LEAVE_TYPE.LIST);
  }

  // Créer un nouveau type de congé
  async createLeaveType(leaveTypeData) {
    const formattedData = this.formatLeaveTypeData(leaveTypeData);
    return await apiService.post(API_ENDPOINTS.LEAVE_TYPE.CREATE, formattedData);
  }

  // Mettre à jour un type de congé existant
  async updateLeaveType(id, leaveTypeData) {
    const endpoint = API_ENDPOINTS.LEAVE_TYPE.UPDATE.replace(':id', id);
    const formattedData = this.formatLeaveTypeData(leaveTypeData);
    return await apiService.put(endpoint, formattedData);
  }

  // Supprimer un type de congé
  async deleteLeaveType(id) {
    const endpoint = API_ENDPOINTS.LEAVE_TYPE.DELETE.replace(':id', id);
    return await apiService.delete(endpoint);
  }

  // Formater les données du type de congé
  formatLeaveTypeData(data) {
    return {
      id: data.id,
      name: data.name,
      default_duration: data.default_duration || null,
      description: data.description || null,
      created_by: data.created_by || null,
      updated_by: data.updated_by || null,
      created_at: data.created_at || null,
      updated_at: data.updated_at || null,
    };
  }
}

export const leaveTypeService = new LeaveTypeService();
export default leaveTypeService;