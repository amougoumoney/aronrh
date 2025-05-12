import { apiService } from '@/services/api.service';
import { API_ENDPOINTS } from '@/config/api.config';

class TrainerService {
  // Récupérer tous les enregistrements de lookup
  async getAllTrainer() {
    return await apiService.get(API_ENDPOINTS.TRAINER.LIST);
  }

  // Créer un nouvel enregistrement de lookup
  async createTrainer(trainerData) {
    const formattedData = this.formatTrainerData(trainerData);
    return await apiService.post(API_ENDPOINTS.TRAINER.CREATE, formattedData);
  }

  // Mettre à jour un enregistrement de lookup existant
  async updateTrainer(id, trainerData) {
    const endpoint = API_ENDPOINTS.TRAINER.UPDATE.replace(':id', id);
    const formattedData = this.formatTrainerData(trainerData);
    return await apiService.put(endpoint, formattedData);
  }

  // Supprimer un enregistrement de lookup
  async deleteTrainer(id) {
    const endpoint = API_ENDPOINTS.TRAINER.DELETE.replace(':id', id);
    return await apiService.delete(endpoint);
  }

  // Formater les données de lookup
  formatTrainerData(data) {
    return {
    first_name:data.first_name,
    last_name: data.last_name,
    role: data.role,
    //phone: '',
    email: data.email,
    description: data.description,
    profile_picture: data.profile_picture,
    status: data.status ||0,
    created_by: data.created_by || null,
    updated_by: data.updated_by || null,
    created_at: data.created_at || null,
    updated_at: data.updated_at || null,
    };
  }
}

export const trainerService = new TrainerService();
export default trainerService;