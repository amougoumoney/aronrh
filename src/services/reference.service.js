import { apiService } from '@/services/api.service';
import { API_ENDPOINTS } from '@/config/api.config';

class ReferenceService {
  // Récupérer toutes les positions de département
  async getAllreferences() {
    return await apiService.get(API_ENDPOINTS.REFERENCE.LIST);
  }

  // Créer une nouvelle position de département
  async createreference(referenceData) {
    const formattedData = this.formatreferenceData(referenceData);
    return await apiService.post(API_ENDPOINTS.REFERENCE.CREATE, formattedData);
  }

  // Mettre à jour une position de département existante
  async updatereference(id, referenceData) {
    const endpoint = API_ENDPOINTS.REFERENCE.UPDATE.replace(':id', id);
    const formattedData = this.formatreferenceData(referenceData);
    return await apiService.put(endpoint, formattedData);
  }

  // Supprimer une position de département
  async deletereference(id) {
    const endpoint = API_ENDPOINTS.REFERENCE.DELETE.replace(':id', id);
    return await apiService.delete(endpoint);
  }

  // Formater les données de la position de département
  formatreferenceData(data) {
    return {
        name: data.name,
        entreprise_name: data.entreprise_name,
        entreprise_adresse: data.entreprise_adresse,
        phone_entreprise: data.phone_entreprise,
        job_title: data.job_title,
        candidate_id: data.candidate_id,
        status: data.status,
    };
  }
}

export const ReferencesService = new ReferenceService();
export default ReferencesService;