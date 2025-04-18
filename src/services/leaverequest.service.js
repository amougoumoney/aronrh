import { apiService } from '@/services/api.service';
import { API_ENDPOINTS } from '@/config/api.config';

class LeaveRequestService {
  // Récupérer toutes les demandes de congé
  async getAllLeaveRequests() {
    return await apiService.get(API_ENDPOINTS.LEAVE_REQUEST.LIST);
  }

  // Créer une nouvelle demande de congé
  async createLeaveRequest(leaveRequestData) {
    const formattedData = this.formatLeaveRequestData(leaveRequestData);
    return await apiService.post(API_ENDPOINTS.LEAVE_REQUEST.CREATE, formattedData);
  }

  // Mettre à jour une demande de congé existante
  async updateLeaveRequest(id, leaveRequestData) {
    const endpoint = API_ENDPOINTS.LEAVE_REQUEST.UPDATE.replace(':id', id);
    const formattedData = this.formatLeaveRequestData(leaveRequestData);
    return await apiService.put(endpoint, formattedData);
  }

  // Supprimer une demande de congé
  async deleteLeaveRequest(id) {
    const endpoint = API_ENDPOINTS.LEAVE_REQUEST.DELETE.replace(':id', id);
    return await apiService.delete(endpoint);
  }

  // Formater les données de la demande de congé
  formatLeaveRequestData(data) {
    return {
      id: data.id,
      employee_id: data.employee_id,
      leave_type_id: data.leave_type_id,
      start_date: data.start_date,
      end_date: data.end_date,
      total_days: data.total_days,
      reason: data.reason,
      status: data.status,
      created_by: data.created_by || null,
      updated_by: data.updated_by || null,
    };
  }
}

export const leaveRequestService = new LeaveRequestService();
export default leaveRequestService;