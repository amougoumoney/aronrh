import { apiService } from '@/services/api.service';
import { API_ENDPOINTS } from '@/config/api.config';

class InterviewService {
  // Fetch all interviews
  async getAllInterviews() {
    return await apiService.get(API_ENDPOINTS.INTERVIEW.LIST);
  }

  // Get interview by ID
  async getInterviewById(id) {
    const endpoint = API_ENDPOINTS.INTERVIEW.DETAILS.replace(':id', id);
    return await apiService.get(endpoint);
  }

  // Create a new interview
  async createInterview(interviewData) {
    const formadatta = this.formatInterviewData(interviewData);
    return await apiService.post(API_ENDPOINTS.INTERVIEW.CREATE, formadatta);
  }

  // Update an existing interview
  async updateInterview(id, interviewData) {
    const endpoint = API_ENDPOINTS.INTERVIEW.UPDATE.replace(':id', id);
    return await apiService.put(endpoint, interviewData);
  }

  // Delete an interview
  async deleteInterview(id) {
    const endpoint = API_ENDPOINTS.INTERVIEW.DELETE.replace(':id', id);
    return await apiService.delete(endpoint);
  }

  // Update interview status
  async updateInterviewStatus(id, status) {
    const endpoint = API_ENDPOINTS.INTERVIEW.UPDATE_STATUS.replace(':id', id);
    return await apiService.patch(endpoint, { status });
  }


  formatInterviewData(data) {
    return {
  candidate_name: data.candidate_name,
  phone: data.phone,
  resume: data.resume,
  job_position: data.job_position,
  interviewer_name: data.interviewer_name,
  interview_date: data.interview_date,
  start_time: data.start_time,
  end_time: data.end_time, 
  interview_mode: data.interview_mode,
  interview_status:data.interview_status,
  score: data.score,
  feedback: data.feedback,
  reference_info: data.reference_info,
  created_by: data.created_by || 1, // CHAMP CRUCIAL
  updated_by: data.updated_by || 1 // Souvent requis pour les updates
    };
  }
  // Submit interview feedback
  async submitFeedback(id, feedback, score) {
    const endpoint = API_ENDPOINTS.INTERVIEW.FEEDBACK.replace(':id', id);
    return await apiService.post(endpoint, {
      feedback,
      score
    });
  }
}

export const interviewService = new InterviewService();
export default interviewService;
