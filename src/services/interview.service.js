import { apiService } from '@/services/api.service';

class InterviewService {
  // Fetch all interviews
  async getAllInterviews() {
    return await apiService.get('/interviews');
  }

  // Get interview by ID
  async getInterviewById(id) {
    return await apiService.get(`/interviews/${id}`);
  }

  // Create a new interview
  async createInterview(interviewData) {
    return await apiService.post('/interviews', interviewData);
  }

  // Update an existing interview
  async updateInterview(id, interviewData) {
    return await apiService.put(`/interviews/${id}`, interviewData);
  }

  // Delete an interview
  async deleteInterview(id) {
    return await apiService.delete(`/interviews/${id}`);
  }

  // Update interview status
  async updateInterviewStatus(id, status) {
    return await apiService.patch(`/interviews/${id}/status`, { status });
  }

  // Submit interview feedback
  async submitFeedback(id, feedback, score) {
    return await apiService.post(`/interviews/${id}/feedback`, {
      feedback,
      score
    });
  }
}

export const interviewService = new InterviewService();
