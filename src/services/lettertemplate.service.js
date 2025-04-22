import { apiService } from '@/services/api.service';
import { API_ENDPOINTS } from '@/config/api.config';

class LetterTemplateService {
  // Récupérer tous les modèles de lettres
  async getAllLetterTemplates() {
    return await apiService.get(API_ENDPOINTS.LETTER_TEMPLATE.LIST);
  }

  // Créer un nouveau modèle de lettre
  async createLetterTemplate(letterTemplateData) {
    const formattedData = this.formatLetterTemplateData(letterTemplateData);
    return await apiService.post(API_ENDPOINTS.LETTER_TEMPLATE.CREATE, formattedData);
  }

  // Mettre à jour un modèle de lettre existant
  async updateLetterTemplate(id, letterTemplateData) {
    const endpoint = API_ENDPOINTS.LETTER_TEMPLATE.UPDATE.replace(':id', id);
    const formattedData = this.formatLetterTemplateData(letterTemplateData);
    return await apiService.put(endpoint, formattedData);
  }

  // Supprimer un modèle de lettre
  async deleteLetterTemplate(id) {
    const endpoint = API_ENDPOINTS.LETTER_TEMPLATE.DELETE.replace(':id', id);
    return await apiService.delete(endpoint);
  }

  // Formater les données du modèle de lettre
  formatLetterTemplateData(data) {
    return {
      id: data.id,
      title: data.title,
      content: data.content || null,
      created_at: data.created_at || null,
      updated_at: data.updated_at || null,
      created_by: data.created_by || null,
      updated_by: data.updated_by || null,
    };
  }
}

export const letterTemplateService = new LetterTemplateService();
export default letterTemplateService;