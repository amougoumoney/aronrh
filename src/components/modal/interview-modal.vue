<script>
import { ref } from "vue";
const currentDate = ref(new Date());

export default {
  name: 'InterviewModal',
  data() {
    return {
      formData: {
        jobPosition: '',
        interviewMode: '',
        interviewDate: currentDate,
        startTime: '',
        endTime: '', 
        interviewerName: '',
        interviewStatus: 'Scheduled',
        score: '',
        notes: ''
      },
      dateFormat: "dd-MM-yyyy"
    }
  },
  methods: {
    submitForm() {
      // Create interview object matching table structure
      const interview = {
        job_position: this.formData.jobPosition,
        interview_date: this.formData.interviewDate,
        start_time: this.formData.startTime,
        end_time: this.formData.endTime,
        interviewer_name: this.formData.interviewerName,
        interview_mode: this.formData.interviewMode,
        interview_status: this.formData.interviewStatus,
        score: this.formData.score || null,
        notes: this.formData.notes
      }

      // Emit event with interview data
      this.$emit('interview-added', interview)

      // Reset form
      this.formData = {
        jobPosition: '',
        interviewMode: '',
        interviewDate: currentDate,
        startTime: '',
        endTime: '',
        interviewerName: '',
        interviewStatus: 'Scheduled', 
        score: '',
        notes: ''
      }
    }
  }
}
</script>

<template>
  <!-- Add Interview -->
  <div class="modal fade" id="add_interview">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Interview</h4>
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
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Job Position <span class="text-danger">*</span></label>
                  <input class="form-control" type="text" v-model="formData.jobPosition" required>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Interview Mode <span class="text-danger">*</span></label>
                  <select class="form-control" v-model="formData.interviewMode" required>
                    <option value="">Select Mode</option>
                    <option value="Phone">Phone</option>
                    <option value="Video Call">Video Call</option>
                    <option value="In Person">In Person</option>
                  </select>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Interview Date <span class="text-danger">*</span></label>
                  <div class="input-icon-end position-relative">
                    <date-picker
                      v-model="formData.interviewDate"
                      class="form-control datetimepicker"
                      placeholder="dd/mm/yyyy"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar text-gray-7"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Start Time <span class="text-danger">*</span></label>
                  <input class="form-control" type="time" v-model="formData.startTime" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">End Time <span class="text-danger">*</span></label>
                  <input class="form-control" type="time" v-model="formData.endTime" required>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Interviewer Name <span class="text-danger">*</span></label>
                  <input class="form-control" type="text" v-model="formData.interviewerName" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <select class="form-control" v-model="formData.interviewStatus">
                    <option value="Scheduled">Scheduled</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Score</label>
                  <input class="form-control" type="number" min="0" max="100" v-model="formData.score">
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Notes</label>
                  <textarea class="form-control" rows="3" v-model="formData.notes"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-primary">Add Interview</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Interview -->
</template>
