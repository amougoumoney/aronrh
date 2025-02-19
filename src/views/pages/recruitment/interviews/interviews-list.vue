<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content">
      <!-- Breadcrumb -->
      <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <index-breadcrumb :title="title" :text="text" :text1="text1" />
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="me-2 mb-2">
            <div class="dropdown">
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                <i class="ti ti-file-export me-1"></i>Export
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">
                    <i class="ti ti-file-type-pdf me-1"></i>Export as PDF
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">
                    <i class="ti ti-file-type-xls me-1"></i>Export as Excel
                  </a>
                </li>
              </ul>
            </div>
          </div>
        <div class="mb-2">
            <!-- Use data attributes for the modal -->
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#add_interview"
              class="btn btn-primary d-flex align-items-center"
            >
              <i class="ti ti-circle-plus me-2"></i>Add Interview
            </a>
        </div>
        </div>
      </div>
      <!-- /Breadcrumb -->

      <!-- Interviews List Table -->
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Job Position</th>
                      <th>Interview Date</th>
                      <th>Time</th>
                      <th>Interviewer</th>
                      <th>Mode</th>
                      <th>Status</th>
                      <th>Score</th>
                      <th class="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="interview in interviews" :key="interview.id">
                      <td>{{ interview.id }}</td>
                      <td>{{ interview.job_position }}</td>
                      <td>{{ formatDate(interview.interview_date) }}</td>
                      <td>{{ formatTime(interview.start_time) }} - {{ formatTime(interview.end_time) }}</td>
                      <td>{{ interview.interviewer_name }}</td>
                      <td>{{ interview.interview_mode }}</td>
                      <td>
                        <span :class="'badge ' + getStatusClass(interview.interview_status)">
                          {{ interview.interview_status }}
                        </span>
                      </td>
                      <td>{{ interview.score || 'N/A' }}</td>
                      <td class="text-end">
                        <div class="dropdown dropdown-action">
                          <a href="javascript:void(0);" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
                            <a href="javascript:void(0);" class="dropdown-item" @click="viewInterviewDetails(interview.id)">
                              <i class="ti ti-eye me-2"></i>View Details
                            </a>
                            <a href="javascript:void(0);" class="dropdown-item" @click="editInterviewDetails(interview.id)">
                              <i class="ti ti-pencil me-2"></i>Edit
                            </a>
                            <a href="javascript:void(0);" class="dropdown-item" @click="addFeedback(interview.id)">
                              <i class="ti ti-message me-2"></i>Add Feedback
                            </a>
                            <a href="javascript:void(0);" class="dropdown-item" @click="deleteInterviewRecord(interview.id)">
                              <i class="ti ti-trash me-2"></i>Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Interviews List Table -->
    </div>
  </div>

  <!-- Interview Modal -->
  <interview-modal ref="interviewModal" @interview-added="onInterviewAdded"/>
</template>

<script>
import indexBreadcrumb from '@/components/breadcrumb/index-breadcrumb.vue';

export default {
  name: 'InterviewsList',
  components: {
    indexBreadcrumb,
   
  },
  data() {
    return {
      title: 'Interviews',
      text: 'Recruitment',
      text1: 'Interviews List',
      interviews: [],
      currentPage: 1,
      pageSize: 10,
      totalInterviews: 0,
      searchTerm: ''
    };
  },
  methods: {
    
    
    onInterviewAdded(interview) {
      // Add the new interview to the list
      this.interviews.push({
        id: this.interviews.length + 1,
        ...interview
      });
    },
    
    getStatusClass(status) {
      const statusClasses = {
        'Scheduled': 'bg-warning-light',
        'Completed': 'bg-success-light',
        'Cancelled': 'bg-danger-light',
        'In Progress': 'bg-info-light'
      };
      return statusClasses[status] || 'bg-secondary-light';
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
    formatTime(time) {
      return time.substring(0, 5); // Format HH:mm
    },
    viewInterviewDetails(interviewId) {
      // Navigate to interview details page
      this.$router.push(`/interviews/details/${interviewId}`);
    },
    editInterviewDetails(interviewId) {
      // Navigate to interview edit page
      this.$router.push(`/interviews/edit/${interviewId}`);
    },
    addFeedback(interviewId) {
      // Open feedback modal or navigate to feedback page
      this.$router.push(`/interviews/feedback/${interviewId}`);
    },
    deleteInterviewRecord(interviewId) {
      // Implement delete confirmation and API call
      if (confirm('Are you sure you want to delete this interview record?')) {
        // Call API to delete interview
        console.log('Deleting interview record:', interviewId);
      }
    },
    async fetchInterviews() {
      try {
        // Implement API call to fetch interviews
        // const response = await interviewService.getInterviews();
        // this.interviews = response.data;
      } catch (error) {
        console.error('Error fetching interviews:', error);
      }
    }
  },
  mounted() {
    this.fetchInterviews();
  }
};
</script>
