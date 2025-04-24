import { apiService } from '@/services/api.service';
import { API_ENDPOINTS } from '@/config/api.config';

class GrantService {
  // Récupérer toutes les subventions
  async getAllGrants() {
    return await apiService.get(API_ENDPOINTS.GRANT.LIST);
  }

  // Créer une nouvelle subvention
  async createGrant(grantData) {
    const formattedData = this.formatGrantData(grantData);
    return await apiService.post(API_ENDPOINTS.GRANT.CREATE, formattedData);
  }

  // Mettre à jour une subvention existante
  async updateGrant(id, grantData) {
    const endpoint = API_ENDPOINTS.GRANT.UPDATE.replace(':id', id);
    const formattedData = this.formatGrantData(grantData);
    return await apiService.put(endpoint, formattedData);
  }

  // Supprimer une subvention
  async deleteGrant(id) {
    const endpoint = API_ENDPOINTS.GRANT.DELETE.replace(':id', id);
    return await apiService.delete(endpoint);
  }

  // Télécharger un fichier de subvention
  async uploadGrantFile(formData) {
    const url = apiService.getFullURL(API_ENDPOINTS.GRANT.UPLOAD);
    const headers = { ...apiService.headers };
    delete headers['Content-Type']; // Laisser le navigateur gérer le type de contenu

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: formData,
    });

    return apiService.handleResponse(response);
  }

  // Formater les données de la subvention
  formatGrantData(data) {
    return {
      name: data.name,
      code: data.code,
      description: data.description,
      end_date: data.end_date,
      created_by: data.created_by || 'admin',
      updated_by: data.updated_by || 'admin',
    };
  }
}

export const grantService = new GrantService();
export default grantService;