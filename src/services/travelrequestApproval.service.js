import { apiService } from '@/services/api.service';
import { API_ENDPOINTS } from '@/config/api.config';

class TravelRequestApprovalService {
  // Récupérer toutes les approbations de demandes de voyage
  async getAllApprovals() {
    return await apiService.get(API_ENDPOINTS.TRAVEL_REQUEST_APPROVAL.LIST);
  }

  // Créer une nouvelle approbation de demande de voyage
  async createApproval(approvalData) {
    const formattedData = this.formatApprovalData(approvalData);
    return await apiService.post(API_ENDPOINTS.TRAVEL_REQUEST_APPROVAL.CREATE, formattedData);
  }

  // Mettre à jour une approbation de demande de voyage existante
  async updateApproval(id, approvalData) {
    const endpoint = API_ENDPOINTS.TRAVEL_REQUEST_APPROVAL.UPDATE.replace(':id', id);
    const formattedData = this.formatApprovalData(approvalData);
    return await apiService.put(endpoint, formattedData);
  }

  // Supprimer une approbation de demande de voyage
  async deleteApproval(id) {
    const endpoint = API_ENDPOINTS.TRAVEL_REQUEST_APPROVAL.DELETE.replace(':id', id);
    return await apiService.delete(endpoint);
  }

  // Formater les données de l'approbation
  formatApprovalData(data) {
    return {
      id: data.id,
      travel_request_id: data.travel_request_id,
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

export const travelRequestApprovalService = new TravelRequestApprovalService();
export default travelRequestApprovalService;