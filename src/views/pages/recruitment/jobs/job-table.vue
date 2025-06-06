<script setup>
import { ref, onMounted } from 'vue'
import jobOfferService from '@/services/job.service'
import { useNotifications } from "@/composables/useNotifications"
import JobModal from '@/components/modal/job-list-modal.vue'
import { Modal } from 'bootstrap'

const { showNotification } = useNotifications()
const jobs = ref([])
const loading = ref(false)
const jobModalRef = ref(null)
const deleteJobId = ref(null)

// Configuration des colonnes avec CamelCase
const columns = ref([
/*   {
    title: "Job ID",
    dataIndex: "jobId",
    key: "jobId",
    sorter: (a, b) => a.jobId.localeCompare(b.jobId)
  }, */
  {
    title: "Job Title",
    dataIndex: "jobTitle",
    key: "jobTitle",
    sorter: (a, b) => a.jobTitle.localeCompare(b.jobTitle)
  },
  {
    title: "Category",
    dataIndex: "jobCategory",
    sorter: (a, b) => a.jobCategory.localeCompare(b.jobCategory)
  },
  {
    title: "Location",
    dataIndex: "city",
    sorter: (a, b) => a.city.localeCompare(b.city)
  },
  {
    title: "Salary Range",
    dataIndex: "salaryRange",
    sorter: (a, b) => a.salaryRange.localeCompare(b.salaryRange)
  },
  {
    title: "Posted Date",
    dataIndex: "postedDate",
    sorter: (a, b) => a.postedDate.localeCompare(b.postedDate)
  },
  {
    title: "Expired Date",
    dataIndex: "expiredDate",
    sorter: (a, b) => a.postedDate.localeCompare(b.expiredDate)
  },
  {
    title: "Actions",
    key: "action"
  }
])

// Récupération des jobs
const fetchJobs = async () => {
  loading.value = true
  try {
    const response = await jobOfferService.getAllJobOffers()
    jobs.value = response.data.map(job => ({
      ...job,
      key: job.id,
      salaryRange: `${job.minSalary} - ${job.maxSalary}`,
      postedDate: new Date(job.createdAt).toLocaleDateString()
    }))
  } catch (error) {
    console.error("Error fetching jobs:", error)
    showNotification({
      type: 'error',
      title: 'Error',
      message: 'Failed to load jobs',
      timeout: 5000
    })
  } finally {
    loading.value = false
  }
}

// Gestion des événements du modal
const handleJobSaved = ({ action, job }) => {
  if (action === 'create') {
    jobs.value.unshift({
      ...job,
      key: job.id,
      salaryRange: `${job.minSalary} - ${job.maxSalary}`,
      postedDate: new Date(job.createdAt).toLocaleDateString()
    })
  } else if (action === 'update') {
    const index = jobs.value.findIndex(j => j.id === job.id)
    if (index !== -1) {
      jobs.value[index] = {
        ...job,
        key: job.id,
        salaryRange: `${job.minSalary} - ${job.maxSalary}`,
        postedDate: new Date(job.createdAt).toLocaleDateString()
      }
    }
  }
}

// Édition
const handleEdit = (record) => {
  jobModalRef.value?.show(true, {
    ...record,
    // Transformation des données si nécessaire
    minSalary: record.minSalary || record.salaryRange?.split('-')[0]?.trim(),
    maxSalary: record.maxSalary || record.salaryRange?.split('-')[1]?.trim()
  })
}

// Suppression
const handleDelete = (id) => {
  deleteJobId.value = id
  const modal = new Modal(document.getElementById('delete_job_modal'))
  modal.show()
}

const confirmDelete = async () => {
  if (!deleteJobId.value) return
  
  try {
    await jobOfferService.deleteJobOffer(deleteJobId.value)
    showNotification({
      type: 'success',
      title: 'Success',
      message: 'Job deleted successfully',
      timeout: 5000
    })
    jobs.value = jobs.value.filter(job => job.id !== deleteJobId.value)
  } catch (error) {
    console.error("Error deleting job:", error)
    showNotification({
      type: 'error',
      title: 'Error',
      message: 'Failed to delete job',
      timeout: 5000
    })
  } finally {
    deleteJobId.value = null
    const modal = Modal.getInstance(document.getElementById('delete_job_modal'))
    modal.hide()
  }
}

onMounted(() => {
  fetchJobs()
})
</script>

<template>
  <div>
    <a-table 
      class="table datatable thead-light" 
      :columns="columns" 
      :data-source="jobs"
      :row-key="record => record.id"
      :loading="loading"
    >
      <template #bodyCell="{ column, record }">
        <!-- Colonne Job Title avec image -->
        <template v-if="column.key === 'jobTitle'">
          <div class="d-flex align-items-center">
            <div class="avatar avatar-md bg-light rounded me-2">
              <img 
                :src="record.jobImageUrl || '@/assets/img/icons/default-job.svg'" 
                class="img-fluid rounded-circle"
                @error="e => e.target.src = '@/assets/img/icons/default-job.svg'"
                alt="Job"
              >
            </div>
            <div>
              <h6 class="fw-medium mb-0">{{ record.jobTitle }}</h6>
              <small class="text-muted">{{ record.applicantsCount }} applicants</small>
            </div>
          </div>
        </template>

        <!-- Actions -->
        <template v-if="column.key === 'action'">
          <div class="action-icon d-inline-flex">
            <button @click="handleEdit(record)" class="btn btn-sm btn-icon me-2">
              <i class="ti ti-edit"></i>
            </button>
            <button 
              @click="handleDelete(record.id)" 
              class="btn btn-sm btn-icon text-danger"
            >
              <i class="ti ti-trash"></i>
            </button>
          </div>
        </template>
      </template>

      <template #emptyText>
        <div class="text-center py-4">
          <i class="ti ti-briefcase-off fs-20 text-muted"></i>
          <p class="mt-2 text-muted">No jobs found</p>
        </div>
      </template>
    </a-table>

    <!-- Modal pour éditer/ajouter -->
    <JobModal ref="jobModalRef" @saved="handleJobSaved" />

    <!-- Modal de suppression -->
    <div class="modal fade" id="delete_job_modal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body text-center">
            <i class="ti ti-alert-circle fs-1 text-danger mb-3"></i>
            <h4>Confirm Deletion</h4>
            <p>Are you sure you want to delete this job?</p>
            <div class="d-flex justify-content-center gap-3 mt-4">
              <button 
                type="button" 
                class="btn btn-light" 
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button 
                type="button" 
                class="btn btn-danger" 
                data-bs-dismiss="modal"
                @click="confirmDelete"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.avatar {
  width: 40px;
  height: 40px;
  object-fit: cover;
}

.btn-icon {
  background: transparent;
  border: none;
  padding: 0.25rem;
}

.action-icon {
  gap: 8px;
}
</style>