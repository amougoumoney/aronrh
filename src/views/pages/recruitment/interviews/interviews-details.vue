<template>

  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content">
      <!-- Breadcrumb -->
      <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <index-breadcrumb :title="title" :text="text" :text1="text1" />
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="mb-2">
            <a href="javascript:void(0);" @click="$router.push('/interviews')"
              class="btn btn-secondary d-flex align-items-center">
              <i class="ti ti-arrow-left me-2"></i>Back to List
            </a>
          </div>
        </div>
      </div>
      <!-- /Breadcrumb -->

      <!-- Interview Details -->
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <h4 class="mb-4">Interview Information</h4>
              <div class="table-responsive">
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td>Job Position:</td>
                      <td>{{ interview.job_position }}</td>
                    </tr>
                    <tr>
                      <td>Interview Date:</td>
                      <td>{{ formatDate(interview.interview_date) }}</td>
                    </tr>
                    <tr>
                      <td>Time:</td>
                      <td>{{ formatTime(interview.start_time) }} - {{ formatTime(interview.end_time) }}</td>
                    </tr>
                    <tr>
                      <td>Interviewer:</td>
                      <td>{{ interview.interviewer_name }}</td>
                    </tr>
                    <tr>
                      <td>Mode:</td>
                      <td>{{ interview.interview_mode }}</td>
                    </tr>
                    <tr>
                      <td>Status:</td>
                      <td>
                        <span :class="'badge ' + getStatusClass(interview.interview_status)">
                          {{ interview.interview_status }}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Score:</td>
                      <td>{{ interview.score || 'N/A' }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-md-6">
              <h4 class="mb-4">Candidate Information</h4>
              <div class="table-responsive">
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td>Name:</td>
                      <td>{{ interview.candidate_name }}</td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td>{{ interview.candidate_email }}</td>
                    </tr>
                    <tr>
                      <td>Phone:</td>
                      <td>{{ interview.candidate_phone }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Interview Feedback Section -->
          <div class="row mt-4">
            <div class="col-md-12">
              <h4 class="mb-4">Interview Feedback</h4>
              <div class="feedback-section">
                <div v-if="interview.feedback" class="card">
                  <div class="card-body">
                    <p>{{ interview.feedback }}</p>
                  </div>
                </div>
                <div v-else class="text-center">
                  <p>No feedback available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Interview Details -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import indexBreadcrumb from "@/components/breadcrumb/index-breadcrumb.vue";
import router from "../../../../router";

const interviewId = computed(() => router.currentRoute.value.params.id);

const title = ref("Interview Details");
const text = ref("Recruitment");
const text1 = ref("Interview Details");

const interview = ref({
  id: "",
  job_position: "",
  interview_date: "",
  start_time: "",
  end_time: "",
  interviewer_name: "",
  interview_mode: "",
  interview_status: "",
  score: "",
  candidate_name: "",
  candidate_email: "",
  candidate_phone: "",
  feedback: "",
});

const getStatusClass = (status) => {
  const statusClasses = {
    Scheduled: "bg-warning-light",
    Completed: "bg-success-light",
    Cancelled: "bg-danger-light",
    "In Progress": "bg-info-light",
  };
  return statusClasses[status] || "bg-secondary-light";
};

const formatDate = (date) => {
  return date ? new Date(date).toLocaleDateString() : "N/A";
};

const formatTime = (time) => {
  return time ? time.substring(0, 5) : "N/A"; // Format HH:mm
};

const fetchInterviewDetails = async () => {
  try {
    console.log(interviewId.value);
    // Implement API call to fetch interview details
    // const response = await interviewService.getInterviewDetails(interviewId.value);
    // interview.value = response.data;
  } catch (error) {
    console.error("Error fetching interview details:", error);
  }
};

onMounted(fetchInterviewDetails);
</script>
