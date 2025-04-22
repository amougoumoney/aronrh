import { apiService } from '@/services/api.service';
import { API_ENDPOINTS } from '@/config/api.config';

class LeaveRequestApprovalService {
  // Récupérer toutes les approbations de demandes de congé
  async getAllLeaveRequestApprovals() {
    return await apiService.get(API_ENDPOINTS.LEAVE_REQUEST_APPROVAL.LIST);
  }

  // Créer une nouvelle approbation de demande de congé
  async createLeaveRequestApproval(leaveRequestApprovalData) {
    const formattedData = this.formatLeaveRequestApprovalData(leaveRequestApprovalData);
    return await apiService.post(API_ENDPOINTS.LEAVE_REQUEST_APPROVAL.CREATE, formattedData);
  }

  // Mettre à jour une approbation de demande de congé existante
  async updateLeaveRequestApproval(id, leaveRequestApprovalData) {
    const endpoint = API_ENDPOINTS.LEAVE_REQUEST_APPROVAL.UPDATE.replace(':id', id);
    const formattedData = this.formatLeaveRequestApprovalData(leaveRequestApprovalData);
    return await apiService.put(endpoint, formattedData);
  }

  // Supprimer une approbation de demande de congé
  async deleteLeaveRequestApproval(id) {
    const endpoint = API_ENDPOINTS.LEAVE_REQUEST_APPROVAL.DELETE.replace(':id', id);
    return await apiService.delete(endpoint);
  }

  // Formater les données de l'approbation de demande de congé
  formatLeaveRequestApprovalData(data) {
    return {
      id: data.id,
      leave_request_id: data.leave_request_id,
      approver_role: data.approver_role || null,
      approver_name: data.approver_name || null,
      approver_signature: data.approver_signature || null,
      approval_date: data.approval_date || null,
      status: data.status || null,
      created_by: data.created_by || null,
      updated_by: data.updated_by || null,
    };
  }
}

export const leaveRequestApprovalService = new LeaveRequestApprovalService();
export default leaveRequestApprovalService;