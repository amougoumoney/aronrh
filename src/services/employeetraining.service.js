import { apiService } from '@/services/api.service';
import { API_ENDPOINTS } from '@/config/api.config';

class EmployeeTrainingService {
  // Récupérer toutes les formations d'un employé
  async getAllEmployeeTrainings(employeeId) {
    const endpoint = API_ENDPOINTS.EMPLOYEE.TRAINING.LIST.replace(':employeeId', employeeId);
    return await apiService.get(endpoint);
  }

  // Créer une nouvelle formation pour un employé
  async createEmployeeTraining(employeeTrainingData) {
    const formattedData = this.formatEmployeeTrainingData(employeeTrainingData);
    return await apiService.post(API_ENDPOINTS.EMPLOYEE.TRAINING.CREATE, formattedData);
  }

  // Mettre à jour une formation d'employé existante
  async updateEmployeeTraining(id, employeeTrainingData) {
    const endpoint = API_ENDPOINTS.EMPLOYEE.TRAINING.UPDATE.replace(':id', id);
    const formattedData = this.formatEmployeeTrainingData(employeeTrainingData);
    return await apiService.put(endpoint, formattedData);
  }

  // Supprimer une formation d'employé
  async deleteEmployeeTraining(id) {
    const endpoint = API_ENDPOINTS.EMPLOYEE.TRAINING.DELETE.replace(':id', id);
    return await apiService.delete(endpoint);
  }

  // Formater les données de la formation d'employé
  formatEmployeeTrainingData(data) {
    return {
      id: data.id,
      employee_id: data.employee_id,
      training_id: data.training_id,
      status: data.status,
      created_by: data.created_by || 'admin',
      updated_by: data.updated_by || 'admin',
    };
  }
}

export const employeeTrainingService = new EmployeeTrainingService();
export default employeeTrainingService;