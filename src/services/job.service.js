import { apiService } from '@/services/api.service';
import { API_ENDPOINTS } from '@/config/api.config';

class JobOfferService {
  // Récupérer toutes les offres d'emploi
  async getAllJobOffers() {
    return await apiService.get(API_ENDPOINTS.JOB_OFFER.LIST);
  }

  // Créer une nouvelle offre d'emploi
  async createJobOffer(jobOfferData) {
    const formattedData = this.formatJobOfferData(jobOfferData);
    return await apiService.post(API_ENDPOINTS.JOB_OFFER.CREATE, formattedData);
  }

  // Mettre à jour une offre d'emploi existante
  async updateJobOffer(id, jobOfferData) {
    const endpoint = API_ENDPOINTS.JOB_OFFER.UPDATE.replace(':id', id);
    const formattedData = this.formatJobOfferData(jobOfferData);
    return await apiService.put(endpoint, formattedData);
  }

  // Supprimer une offre d'emploi
  async deleteJobOffer(id) {
    const endpoint = API_ENDPOINTS.JOB_OFFER.DELETE.replace(':id', id);
    return await apiService.delete(endpoint);
  }

  // Formater les données de l'offre d'emploi
  formatJobOfferData(data) {
    return {
      id: data.id,
      date: data.date,
      candidate_name: data.candidate_name,
      position_name: data.position_name,
      salary_detail: data.salary_detail,
      acceptance_deadline: data.acceptance_deadline,
      acceptance_status: data.acceptance_status,
      note: data.note || null,
      created_by: data.created_by || null,
      updated_by: data.updated_by || null,
    };
  }
}

export const jobOfferService = new JobOfferService();
export default jobOfferService;