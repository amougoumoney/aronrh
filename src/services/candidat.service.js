import { apiService } from '@/services/api.service';
import { API_ENDPOINTS } from '@/config/api.config';

class CandidatService {
  // Récupérer toutes les positions de département
  async getAllCandidats() {
    return await apiService.get(API_ENDPOINTS.CANDIDAT.LIST);
  }

  // Créer une nouvelle position de département
  async createCandidat(CandidatData) {
    const formattedData = this.formatCandidatData(CandidatData);
    return await apiService.post(API_ENDPOINTS.CANDIDAT.CREATE, formattedData);
  }

  // Mettre à jour une position de département existante
  async updateCandidat(id, CandidatData) {
    const endpoint = API_ENDPOINTS.CANDIDAT.UPDATE.replace(':id', id);
    const formattedData = this.formatCandidatData(CandidatData);
    return await apiService.put(endpoint, formattedData);
  }

  // Supprimer une position de département
  async deleteCandidat(id) {
    const endpoint = API_ENDPOINTS.CANDIDAT.DELETE.replace(':id', id);
    return await apiService.delete(endpoint);
  }

  // Formater les données de la position de département
  formatCandidatData(data) {
    return {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      place_birtday: data.place_birtday,
      job_position: data.job_position,
      status: data.status,
      birthday: data.birthday,
      application_date: data.application_date,
      telephone: data.telephone,
      cv:data.cv,
    };
  }
}

export const CandidatsService = new CandidatService();
export default CandidatsService;