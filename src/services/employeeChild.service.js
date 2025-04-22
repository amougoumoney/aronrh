import { apiService } from '@/services/api.service';
import { API_ENDPOINTS } from '@/config/api.config';

class ChildEmployeeService {
  // Fetch all child employees
  async getAllChildren() {
    return await apiService.get(API_ENDPOINTS.ENFANT_EMPLOYES.LIST);
  }

  // Get child employee by ID
  async getChildById(id) {
    const endpoint = API_ENDPOINTS.ENFANT_EMPLOYES.DETAILS.replace(':id', id);
    return await apiService.get(endpoint);
  }

  // Create a new child employee
  async createChild(childData) {
    const formattedData = this.formatChildData(childData);
    return await apiService.post(API_ENDPOINTS.ENFANT_EMPLOYES.CREATE, formattedData);
  }

  // Update an existing child employee
  async updateChild(id, childData) {
    const endpoint = API_ENDPOINTS.ENFANT_EMPLOYES.UPDATE.replace(':id', id);
    const formattedData = this.formatChildData(childData);
    return await apiService.put(endpoint, formattedData);
  }

  // Delete a child employee
  async deleteChild(id) {
    const endpoint = API_ENDPOINTS.ENFANT_EMPLOYES.DELETE.replace(':id', id);
    return await apiService.delete(endpoint);
  }

  // Format child employee data
  formatChildData(data) {
    return {
      identifiant_employe: data.identifiant_employe || 1,
      nom: data.nom,
      date_de_naissance: data.date_de_naissance,
      cree_par: data.cree_par || 'admin', // Valeur par défaut
      mis_a_jour_par: data.mis_a_jour_par || 'admin', // Valeur par défaut
      created_at: new Date().toISOString(), // Date de création
      updated_at: new Date().toISOString() // Date de mise à jour
    };
  }
}

export const childEmployeeService = new ChildEmployeeService();
export default childEmployeeService;