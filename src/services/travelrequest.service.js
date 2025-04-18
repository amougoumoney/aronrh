import { apiService } from '@/services/api.service';
import { API_ENDPOINTS } from '@/config/api.config';

class TravelRequestService {
  // Récupérer toutes les demandes de voyage
  async getAllTravelRequests() {
    return await apiService.get(API_ENDPOINTS.TRAVEL_REQUEST.LIST);
  }

  // Créer une nouvelle demande de voyage
  async createTravelRequest(travelRequestData) {
    const formattedData = this.formatTravelRequestData(travelRequestData);
    return await apiService.post(API_ENDPOINTS.TRAVEL_REQUEST.CREATE, formattedData);
  }

  // Mettre à jour une demande de voyage existante
  async updateTravelRequest(id, travelRequestData) {
    const endpoint = API_ENDPOINTS.TRAVEL_REQUEST.UPDATE.replace(':id', id);
    const formattedData = this.formatTravelRequestData(travelRequestData);
    return await apiService.put(endpoint, formattedData);
  }

  // Supprimer une demande de voyage
  async deleteTravelRequest(id) {
    const endpoint = API_ENDPOINTS.TRAVEL_REQUEST.DELETE.replace(':id', id);
    return await apiService.delete(endpoint);
  }

  // Formater les données de demande de voyage
  formatTravelRequestData(data) {
    return {
      id: data.id,
      employee_id: data.employee_id,
      department_position_id: data.department_position_id || null,
      destination: data.destination || null,
      start_date: data.start_date || null,
      end_date: data.end_date || null,
      purpose: data.purpose || null,
      grant: data.grant || null,
      transportation: data.transportation || null,
      accommodation: data.accommodation || null,
      request_by_signature: data.request_by_signature || null,
      request_by_fullname: data.request_by_fullname || null,
      request_by_date: data.request_by_date || null,
      remarks: data.remarks || null,
      status: data.status || 'pending',
      created_at: data.created_at || null,
      updated_at: data.updated_at || null,
      created_by: data.created_by || null,
      updated_by: data.updated_by || null,
    };
  }
}

export const travelRequestService = new TravelRequestService();
export default travelRequestService;