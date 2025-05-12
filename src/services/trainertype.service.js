import { apiService } from '@/services/api.service';
import { API_ENDPOINTS } from '@/config/api.config';

class TrainertypeService {
  // Récupérer tous les enregistrements de lookup
  async getAllTrainertype() {
    return await apiService.get(API_ENDPOINTS.TRAINERTYPE.LIST);
  }

  // Créer un nouvel enregistrement de lookup
  async createTrainertype(trainertypeData) {
    const formattedData = this.formatTrainertypeData(trainertypeData);
    return await apiService.post(API_ENDPOINTS.TRAINERTYPE.CREATE, formattedData);
  }

  // Mettre à jour un enregistrement de lookup existant
  async updateTrainertype(id, trainertypeData) {
    const endpoint = API_ENDPOINTS.TRAINERTYPE.UPDATE.replace(':id', id);
    const formattedData = this.formatTrainertypeData(trainertypeData);
    return await apiService.put(endpoint, formattedData);
  }

  // Supprimer un enregistrement de lookup
  async deleteTrainertype(id) {
    const endpoint = API_ENDPOINTS.TRAINERTYPE.DELETE.replace(':id', id);
    return await apiService.delete(endpoint);
  }

  // Formater les données de lookup
  formatTrainertypeData(data) {
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

export const trainertypeService = new TrainertypeService();
export default trainertypeService;