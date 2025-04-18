import { apiService } from '@/services/api.service';
import { API_ENDPOINTS } from '@/config/api.config';

class EmploymentHistoryService {
  // Récupérer tous les historiques d'emploi
  async getAllEmploymentHistories() {
    return await apiService.get(API_ENDPOINTS.EMPLOYMENT.HISTORY.LIST);
  }

  // Créer un nouvel enregistrement d'historique d'emploi
  async createEmploymentHistory(employmentHistoryData) {
    const formattedData = this.formatEmploymentHistoryData(employmentHistoryData);
    return await apiService.post(API_ENDPOINTS.EMPLOYMENT.HISTORY.CREATE, formattedData);
  }

  // Mettre à jour un enregistrement d'historique d'emploi existant
  async updateEmploymentHistory(id, employmentHistoryData) {
    const endpoint = API_ENDPOINTS.EMPLOYMENT.HISTORY.UPDATE.replace(':id', id);
    const formattedData = this.formatEmploymentHistoryData(employmentHistoryData);
    return await apiService.put(endpoint, formattedData);
  }

  // Supprimer un enregistrement d'historique d'emploi
  async deleteEmploymentHistory(id) {
    const endpoint = API_ENDPOINTS.EMPLOYMENT.HISTORY.DELETE.replace(':id', id);
    return await apiService.delete(endpoint);
  }

  // Formater les données de l'historique d'emploi
  formatEmploymentHistoryData(data) {
    return {
      employment_id: data.employment_id,
      employee_id: data.employee_id,
      employment_type_id: data.employment_type_id,
      start_date: data.start_date,
      probation_end_date: data.probation_end_date || null,
      end_date: data.end_date || null,
      position_id: data.position_id,
      department_id: data.department_id,
      work_location_id: data.work_location_id,
      position_salary: data.position_salary,
      probation_salary: data.probation_salary || null,
      supervisor_id: data.supervisor_id || null,
      employee_tax: data.employee_tax || null,
      fte: data.fte || null,
      active: data.active !== undefined ? data.active : true,
      health_welfare: data.health_welfare !== undefined ? data.health_welfare : false,
      pvd: data.pvd !== undefined ? data.pvd : false,
      saving_fund: data.saving_fund !== undefined ? data.saving_fund : false,
      social_security_id: data.social_security_id || null,
      grant_item_id: data.grant_item_id || null,
      created_by: data.created_by || null,
      updated_by: data.updated_by || null,
    };
  }
}

export const employmentHistoryService = new EmploymentHistoryService();
export default employmentHistoryService;