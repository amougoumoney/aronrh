import { apiService } from '@/services/api.service';
import { API_ENDPOINTS } from '@/config/api.config';

class LeaveBalanceService {
  // Récupérer tous les soldes de congés
  async getAllLeaveBalances() {
    return await apiService.get(API_ENDPOINTS.LEAVE_BALANCE.LIST);
  }

  // Créer un nouveau solde de congés
  async createLeaveBalance(leaveBalanceData) {
    const formattedData = this.formatLeaveBalanceData(leaveBalanceData);
    return await apiService.post(API_ENDPOINTS.LEAVE_BALANCE.CREATE, formattedData);
  }

  // Mettre à jour un solde de congés existant
  async updateLeaveBalance(id, leaveBalanceData) {
    const endpoint = API_ENDPOINTS.LEAVE_BALANCE.UPDATE.replace(':id', id);
    const formattedData = this.formatLeaveBalanceData(leaveBalanceData);
    return await apiService.put(endpoint, formattedData);
  }

  // Supprimer un solde de congés
  async deleteLeaveBalance(id) {
    const endpoint = API_ENDPOINTS.LEAVE_BALANCE.DELETE.replace(':id', id);
    return await apiService.delete(endpoint);
  }

  // Formater les données du solde de congés
  formatLeaveBalanceData(data) {
    return {
      id: data.id,
      employee_id: data.employee_id,
      leave_type_id: data.leave_type_id,
      remaining_days: data.remaining_days,
      created_by: data.created_by || null,
      updated_by: data.updated_by || null,
    };
  }
}

export const leaveBalanceService = new LeaveBalanceService();
export default leaveBalanceService;