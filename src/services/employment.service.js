import { apiService } from '@/services/api.service';
import { API_ENDPOINTS } from '@/config/api.config';

class EmploymentService {
  // Récupérer tous les enregistrements d'emploi
  async getAllEmployments() {
    return await apiService.get(API_ENDPOINTS.EMPLOYMENT.LIST);
  }

  // Créer un nouvel enregistrement d'emploi
  async createEmployment(employmentData) {
    const formattedData = this.formatEmploymentData(employmentData);
    return await apiService.post(API_ENDPOINTS.EMPLOYMENT.CREATE, formattedData);
  }

  // Mettre à jour un enregistrement d'emploi existant
  async updateEmployment(id, employmentData) {
    const endpoint = API_ENDPOINTS.EMPLOYMENT.UPDATE.replace(':id', id);
    const formattedData = this.formatEmploymentData(employmentData);
    return await apiService.put(endpoint, formattedData);
  }

  // Supprimer un enregistrement d'emploi
  async deleteEmployment(id) {
    const endpoint = API_ENDPOINTS.EMPLOYMENT.DELETE.replace(':id', id);
    return await apiService.delete(endpoint);
  }

  // Formater les données de l'enregistrement d'emploi
  formatEmploymentData(data) {
    return {
      employee_id: data.employee_id,
      employment_type: data.employment_type,
      start_date: data.start_date,
      probation_end_date: data.probation_end_date || null,
      end_date: data.end_date || null,
      department_position_id: data.department_position_id || null,
      work_location_id: data.work_location_id || null,
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
      created_by: data.created_by || null,
      updated_by: data.updated_by || null,
    };
  }
}

export const employmentService = new EmploymentService();
export default employmentService;