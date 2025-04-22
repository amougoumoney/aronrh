import { apiService } from '@/services/api.service';
import { API_ENDPOINTS } from '@/config/api.config';

class LookupService {
  // Récupérer tous les enregistrements de lookup
  async getAllLookups() {
    return await apiService.get(API_ENDPOINTS.LOOKUP.LIST);
  }

  // Créer un nouvel enregistrement de lookup
  async createLookup(lookupData) {
    const formattedData = this.formatLookupData(lookupData);
    return await apiService.post(API_ENDPOINTS.LOOKUP.CREATE, formattedData);
  }

  // Mettre à jour un enregistrement de lookup existant
  async updateLookup(id, lookupData) {
    const endpoint = API_ENDPOINTS.LOOKUP.UPDATE.replace(':id', id);
    const formattedData = this.formatLookupData(lookupData);
    return await apiService.put(endpoint, formattedData);
  }

  // Supprimer un enregistrement de lookup
  async deleteLookup(id) {
    const endpoint = API_ENDPOINTS.LOOKUP.DELETE.replace(':id', id);
    return await apiService.delete(endpoint);
  }

  // Formater les données de lookup
  formatLookupData(data) {
    return {
      id: data.id,
      type: data.type,
      value: data.value,
      created_by: data.created_by || null,
      updated_by: data.updated_by || null,
      created_at: data.created_at || null,
      updated_at: data.updated_at || null,
    };
  }
}

export const lookupService = new LookupService();
export default lookupService;