<script setup>
import { ref, defineEmits, defineExpose } from 'vue';
import {Modal}  from 'bootstrap';
import { useNotifications } from '@/composables/useNotifications';
import InterviewService from '@/services/interview.service';

const currentDate = ref(new Date().toISOString().split('T')[0]); // Format as YYYY-MM-DD
const isEditMode = ref(false);
const {showNotification} = useNotifications();

const formData = ref({
  candidate_name: '',
  phone: '',
  resume: '',
  job_position: '',
  interviewer_name: '',
  interview_date: currentDate,
  start_time: '',
  end_time: '', 
  interview_mode: '',
  interview_status: 'scheduled',
  score: null,
  feedback: '',
  reference_info: ''
});

const show = (editMode = false, interviewData = null) => {
  isEditMode.value = editMode;
  
  if (editMode && interviewData) {
    // Map API data to form fields
    formData.value = { 
      ...interviewData,
      // Ensure date is in correct format
      interview_date: interviewData.interview_date ? interviewData.interview_date.split('T')[0] : currentDate.value
    };
  } else {
    formData.value = {
      candidate_name: '',
      phone: '',
      resume: '',
      job_position: '',
      interviewer_name: '',
      interview_date: currentDate.value,
      start_time: '',
      end_time: '', 
      interview_mode: '',
      interview_status: 'scheduled',
      score: null,
      feedback: '',
      reference_info: ''
    };
  }
  
  const modal = new Modal(document.getElementById('interview_modal'));
  modal.show();
};

// Expose the function show for parent component
defineExpose({ show });

const emit = defineEmits(['saved']);

const submitForm = async () => {
  try {
    // Prepare payload according to API schema
    const payload = {
      ...formData.value,
      // Convert empty strings to null for nullable fields
      phone: formData.value.phone || null,
      resume: formData.value.resume || null,
      interviewer_name: formData.value.interviewer_name || null,
      interview_date: formData.value.interview_date || null,
      start_time: formData.value.start_time || null,
      end_time: formData.value.end_time || null,
      interview_mode: formData.value.interview_mode || null,
      score: formData.value.score ? Number(formData.value.score) : null,
      feedback: formData.value.feedback || null,
      reference_info: formData.value.reference_info || null
    };

    let response;
    if (isEditMode.value) {

      // Update existing interview
      response = await InterviewService.updateInterview(formData.value.id, payload);
      showNotification({
        type: 'success',
        title: 'Success',
        message: 'Interview updated successfully!',
        timeout: 5000
      });
    } else {
      console.log('new interview', formData.value);
      // Add new interview
      response = await InterviewService.createInterview(payload);
      showNotification({
        type: 'success',
        title: 'Success',
        message: 'Interview created successfully!',
        timeout: 5000
      });
    }

    emit('saved', {
      action: isEditMode.value ? 'update' : 'create',
      interview: response.data
    });

    const modal = Modal.getInstance(document.getElementById('interview_modal'));
    modal.hide();
  } catch (error) {
    console.error('Submission error:', error);
    
    let errorMessage = 'An error occurred while saving the interview';
    let errorType = 'error';
    
    if (error.response) {
      // Handle HTTP errors
      switch (error.response.status) {
        case 400:
          errorMessage = error.response.data?.message || 'Invalid data provided';
          break;
        case 401:
          errorMessage = 'Authentication required';
          break;
        case 500:
          errorMessage = 'Server error, please try again later';
          break;
        default:
          errorMessage = `Request failed with status ${error.response.status}`;
      }
    } else if (error.message) {
      errorMessage = error.message;
      errorType = 'warning';
    }
    
    showNotification({
      type: errorType,
      title: 'Error',
      message: errorMessage,
      timeout: 8000
    });
  }
};
</script>

<template>
  <!-- Interview Modal -->
  <div class="modal fade" id="interview_modal">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">{{ isEditMode ? 'Edit Interview' : 'Schedule New Interview'}}</h4>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-0">
            <div class="row">
              <!-- Candidate Information -->
              <div class="col-md-12">
                <h5 class="mb-3">Candidate Information</h5>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Candidate Name <span class="text-danger">*</span></label>
                  <input 
                    class="form-control" 
                    type="text" 
                    v-model="formData.candidate_name" 
                    maxlength="255"
                    required
                  >
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Phone</label>
                  <input 
                    class="form-control" 
                    type="text" 
                    v-model="formData.phone" 
                    maxlength="10"
                  >
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Resume URL</label>
                  <input 
                    class="form-control" 
                    type="text" 
                    v-model="formData.resume" 
                    maxlength="255"
                  >
                </div>
              </div>
              
              <!-- Interview Details -->
              <div class="col-md-12">
                <h5 class="mb-3">Interview Details</h5>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Job Position <span class="text-danger">*</span></label>
                  <input 
                    class="form-control" 
                    type="text" 
                    v-model="formData.job_position" 
                    maxlength="255"
                    required
                  >
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Interviewer Name</label>
                  <input 
                    class="form-control" 
                    type="text" 
                    v-model="formData.interviewer_name" 
                    maxlength="255"
                  >
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label class="form-label">Interview Date</label>
                  <input 
                    class="form-control" 
                    type="date" 
                    v-model="formData.interview_date"
                  >
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label class="form-label">Start Time</label>
                  <input 
                    class="form-control" 
                    type="time" 
                    v-model="formData.start_time"
                  >
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label class="form-label">End Time</label>
                  <input 
                    class="form-control" 
                    type="time" 
                    v-model="formData.end_time"
                  >
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Interview Mode</label>
                  <select class="form-control" v-model="formData.interview_mode">
                    <option value="">Select Mode</option>
                    <option value="in-person">In-Person</option>
                    <option value="virtual">Virtual</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Interview Status</label>
                  <select class="form-control" v-model="formData.interview_status">
                    <option value="scheduled">Scheduled</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
              
              <!-- Evaluation -->
              <div class="col-md-12">
                <h5 class="mb-3">Evaluation</h5>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Score</label>
                  <input 
                    class="form-control" 
                    type="number" 
                    min="0" 
                    step="0.1"
                    v-model="formData.score"
                  >
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Feedback</label>
                  <textarea 
                    class="form-control" 
                    rows="3" 
                    v-model="formData.feedback"
                  ></textarea>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Reference Info</label>
                  <textarea 
                    class="form-control" 
                    rows="2" 
                    v-model="formData.reference_info"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-primary">
              {{ isEditMode ? 'Update Interview' : 'Schedule Interview' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>