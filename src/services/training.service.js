import { apiService } from '@/services/api.service';
import { API_ENDPOINTS } from '@/config/api.config';

class TrainingService {
  // Récupérer toutes les formations
  async getAllTrainings() {
    return await apiService.get(API_ENDPOINTS.TRAINING.LIST);
  }

  // Créer une nouvelle formation
  async createTraining(trainingData) {
    const formattedData = this.formatTrainingData(trainingData);
    return await apiService.post(API_ENDPOINTS.TRAINING.CREATE, formattedData);
  }

  // Mettre à jour une formation existante
  async updateTraining(id, trainingData) {
    const endpoint = API_ENDPOINTS.TRAINING.UPDATE.replace(':id', id);
    const formattedData = this.formatTrainingData(trainingData);
    return await apiService.put(endpoint, formattedData);
  }

  // Supprimer une formation
  async deleteTraining(id) {
    const endpoint = API_ENDPOINTS.TRAINING.DELETE.replace(':id', id);
    return await apiService.delete(endpoint);
  }

  // Formater les données de formation
  formatTrainingData(data) {
    return {
      id: data.id,
      title: data.title,
      organizer: data.organizer,
      start_date: data.start_date,
      end_date: data.end_date,
      created_at: data.created_at || null,
      updated_at: data.updated_at || null,
      created_by: data.created_by || null,
      updated_by: data.updated_by || null,
    };
  }
}

export const trainingService = new TrainingService();
export default trainingService;
