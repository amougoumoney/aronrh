import { apiService } from '@/services/api.service';
import { API_ENDPOINTS } from '@/config/api.config';

class GrantItemService {
  // Récupérer tous les éléments de subvention
  async getAllGrantItems(grantId) {
    const endpoint = API_ENDPOINTS.GRANT_ITEM.LIST.replace(':grantId', grantId);
    return await apiService.get(endpoint);
  }

  // Créer un nouvel élément de subvention
  async createGrantItem(grantItemData) {
      const formattedData = this.formatGrantItemData(grantItemData);
      const endpoint = API_ENDPOINTS.GRANT_ITEM.CREATE
    return await apiService.post(endpoint, formattedData);
  }

  // Mettre à jour un élément de subvention existant
  async updateGrantItem(id, grantItemData) {
    const endpoint = API_ENDPOINTS.GRANT_ITEM.UPDATE.replace(':id', id);
    const formattedData = this.formatGrantItemData(grantItemData);
    return await apiService.put(endpoint, formattedData);
  }

  // Supprimer un élément de subvention
  async deleteGrantItem(id) {
    const endpoint = API_ENDPOINTS.GRANT_ITEM.DELETE.replace(':id', id);
    return await apiService.delete(endpoint);
  }

  // Formater les données de l'élément de subvention
  formatGrantItemData(data) {
    return {
      grant_id: data.grant_id|| 1,
      bg_line: data.bg_line,
      grant_position: data.grant_position,
      grant_salary: data.grant_salary,
      grant_benefit: data.grant_benefit,
      grant_level_of_effort: data.grant_level_of_effort,
      grant_position_number: data.grant_position_number,
      grant_cost_by_monthly: data.grant_cost_by_monthly,
      grant_total_cost_by_person: data.grant_total_cost_by_person,
      grant_benefit_fte: data.grant_benefit_fte ||1,
      position_id: data.position_id || 1,
      grant_total_amount: data.grant_total_amount,
      created_by: data.created_by || 'admin',
      updated_by: data.updated_by || 'admin',
    };
  }
}

export const grantItemService = new GrantItemService();
export default grantItemService;