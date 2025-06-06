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
      job_title: data.job_title || null,
      job_description: data.job_description || null,
      job_category: data.job_category || null,
      job_type: data.job_type || null,
      job_level: data.job_level || null,
      experience: data.experience || null,
      qualification: data.qualification || null,
      gender: data.gender || null,
      min_salary: data.min_salary || null,
      max_salary: data.max_salary || null,
      skills: data.skills || null,
      job_image_url: data.job_image_url || null,
      job_image_name: data.job_image_name || null,
      expired_date: data.expired_date || null,
      address: data.address || null,
      city: data.city || null,
      state: data.state || null,
      country: data.country || null,
      zip_code: data.zip_code || null,
      created_at: data.created_at || null,
      updated_at: data.updated_at || null
    };
}
}

export const jobOfferService = new JobOfferService();
export default jobOfferService;