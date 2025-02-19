// grant.service.js
import { apiService } from '@/services/api.service';

class GrantService {
  // Fetch all grants
  async getGrants() {
    return await apiService.get('/grants');
  }

  // Create a new grant
  async createGrant(grantData) {
    return await apiService.post('/grants', grantData);
  }

  // Update an existing grant
  async updateGrant(id, grantData) {
    return await apiService.put(`/grants/${id}`, grantData);
  }

  // Delete a grant
  async deleteGrant(id) {
    return await apiService.delete(`/grants/${id}`);
  }

  // Upload a grant file with FormData
  async uploadGrantFile(formData) {
    // Build the full URL using apiService
    const url = apiService.getFullURL('/grants/upload');

    // Clone headers and remove Content-Type to allow the browser to set the correct multipart boundary
    const headers = { ...apiService.headers };
    delete headers['Content-Type'];

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: formData,
    });

    return apiService.handleResponse(response);
  }
}

export const grantService = new GrantService();
