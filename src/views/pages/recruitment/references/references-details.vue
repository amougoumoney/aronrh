<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  
  <div class="page-wrapper">
    <div class="content">
      <!-- Breadcrumb -->
      <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <index-breadcrumb :title="title" :text="text" :text1="text1" />
        <div class="d-flex align-items-center gap-3">
          <button @click="router.back()" class="btn btn-outline-secondary">
            <i class="ti ti-arrow-left me-2"></i>Back to List
          </button>
          <button @click="editReference" class="btn btn-primary">
            <i class="ti ti-edit me-2"></i>Edit Reference
          </button>
        </div>
      </div>

      <!-- Main Card -->
      <div class="card">
        <div class="card-body">
          <div class="row">
            <!-- Left Column - Reference Info -->
            <div class="col-lg-6">
              <div class="mb-4">
                <h4 class="card-title mb-4">
                  <i class="ti ti-user-check me-2"></i>Reference Details
                </h4>
                <div class="table-responsive">
                  <table class="table table-striped table-borderless">
                    <tbody>
                      <tr>
                        <th width="40%">Reference Name:</th>
                        <td>{{ reference.name || 'N/A' }}</td>
                      </tr>
                      <tr>
                        <th>Job Title:</th>
                        <td>{{ reference.jobTitle || 'N/A' }}</td>
                      </tr>
                      <tr>
                        <th>Status:</th>
                        <td>
                          <span :class="'badge ' + getStatusClass(reference.status)">
                            {{ reference.status || 'N/A' }}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th>Date Added:</th>
                        <td>{{ formatDate(reference.dateAdded) }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Candidate Section -->
              <div class="mb-4">
                <h5 class="card-subtitle mb-3">
                  <i class="ti ti-user me-2"></i>Candidate Information
                </h5>
                <div class="table-responsive">
                  <table class="table table-striped table-borderless">
                    <tbody>
                      <tr>
                        <th width="40%">Candidate Name:</th>
                        <td>{{ reference.candidateName || 'N/A' }}</td>
                      </tr>
                      <tr>
                        <th>Candidate Position:</th>
                        <td>{{ reference.candidatePosition || 'N/A' }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Right Column - Company Info -->
            <div class="col-lg-6">
              <div class="mb-4">
                <h5 class="card-subtitle mb-3">
                  <i class="ti ti-building me-2"></i>Company Information
                </h5>
                <div class="table-responsive">
                  <table class="table table-striped table-borderless">
                    <tbody>
                      <tr>
                        <th width="40%">Company Name:</th>
                        <td>{{ reference.companyName || 'N/A' }}</td>
                      </tr>
                      <tr>
                        <th>Company Address:</th>
                        <td>
                          <div v-if="reference.companyAddress">
                            {{ reference.companyAddress }}
                          </div>
                          <span v-else class="text-muted">N/A</span>
                        </td>
                      </tr>
                      <tr>
                        <th>Company Phone:</th>
                        <td>{{ reference.companyPhone || 'N/A' }}</td>
                      </tr>
                      <tr>
                        <th>Reference Contact:</th>
                        <td>{{ reference.phone || 'N/A' }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Additional Info -->
              <div class="mb-4">
                <h5 class="card-subtitle mb-3">
                  <i class="ti ti-info-circle me-2"></i>Additional Information
                </h5>
                <div class="table-responsive">
                  <table class="table table-striped table-borderless">
                    <tbody>
                      <tr>
                        <th width="40%">Relationship:</th>
                        <td>{{ reference.relationship || 'N/A' }}</td>
                      </tr>
                      <tr>
                        <th>Years Known:</th>
                        <td>{{ reference.yearsKnown || 'N/A' }}</td>
                      </tr>
                      <tr>
                        <th>Last Contact:</th>
                        <td>{{ formatDate(reference.lastContactDate) }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <!-- Notes Section -->
          <div class="row mt-4">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">
                    <i class="ti ti-notes me-2"></i>Reference Notes
                  </h5>
                </div>
                <div class="card-body">
                  <div v-if="reference.notes" class="bg-light p-3 rounded">
                    {{ reference.notes }}
                  </div>
                  <div v-else class="text-muted">
                    No notes available for this reference
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import moment from "moment";
import indexBreadcrumb from "@/components/breadcrumb/index-breadcrumb.vue";
import ReferencesService from "@/services/reference.service";

const router = useRouter();
const title = ref("Reference Details");
const text = ref("Recruitment");
const text1 = ref("Reference Details");

const reference = ref({
  id: "",
  name: "",
  jobTitle: "",
  candidateName: "",
  candidatePosition: "",
  status: "",
  dateAdded: "",
  companyName: "",
  companyAddress: "",
  companyPhone: "",
  phone: "",
  relationship: "",
  yearsKnown: "",
  lastContactDate: "",
  notes: ""
});

const getStatusClass = (status) => {
  const statusClasses = {
    Verified: "bg-success-light text-success",
    Pending: "bg-warning-light text-warning",
    Rejected: "bg-danger-light text-danger",
    Expired: "bg-secondary-light text-secondary"
  };
  return statusClasses[status] || "bg-info-light text-info";
};

const formatDate = (date) => {
  return date ? moment(date).format("DD MMM YYYY") : "N/A";
};

const editReference = () => {
  router.push(`/recruitment/references/edit/${reference.value.id}`);
};

const fetchReferenceDetails = async () => {
  try {
    const referenceId = router.currentRoute.value.params.id;
    const response = await ReferencesService.getReference(referenceId);
    reference.value = response.data;
    
    // Format phone numbers if needed
    if (reference.value.companyPhone) {
      reference.value.companyPhone = formatPhoneNumber(reference.value.companyPhone);
    }
    if (reference.value.phone) {
      reference.value.phone = formatPhoneNumber(reference.value.phone);
    }
  } catch (error) {
    console.error("Error fetching reference details:", error);
  }
};

const formatPhoneNumber = (phone) => {
  if (!phone) return '';
  // Simple formatting for display
  return phone.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '+$1 $2 $3 $4 $5');
};

onMounted(() => {
  fetchReferenceDetails();
});
</script>

<style scoped>
.card-title {
  font-size: 1.25rem;
  font-weight: 600;
}
.card-subtitle {
  font-size: 1rem;
  font-weight: 500;
  color: #495057;
}
.table th {
  font-weight: 500;
  color: #6c757d;
}
.table td {
  font-weight: 400;
}
.table-borderless td, .table-borderless th {
  border: 0;
}
.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.02);
}
</style>