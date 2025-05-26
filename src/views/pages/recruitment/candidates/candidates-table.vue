<script setup>
import { ref, onMounted } from 'vue'
import { Modal } from 'bootstrap'
import { useRouter } from 'vue-router'
import { useNotifications } from '@/composables/useNotifications'
// import CandidateService from '@/services/candidate.service'

const router = useRouter()
const { showNotification } = useNotifications()

// Références
const candidates = ref([])
const selectedCandidate = ref(null)
const isLoading = ref(false)
const candidateModal = ref(null)
const deleteModal = ref(null)

// Configuration des colonnes
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: (a, b) => a.id.localeCompare(b.id),
  },
  {
    title: "Candidate",
    dataIndex: "fullName",
    key: "candidate",
    sorter: (a, b) => a.fullName.localeCompare(b.fullName),
  },
  {
    title: "Applied Role",
    dataIndex: "jobPosition",
    key: "jobPosition",
    sorter: (a, b) => a.jobPosition.localeCompare(b.jobPosition),
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "CV",
    key: "cv",
    customRender: ({ record }) => {
      if (!record.cvUrl) return 'No CV'
      const extension = record.cvUrl.split('.').pop().toLowerCase()
      const icon = extension === 'pdf' ? 'ti ti-file-type-pdf' : 'ti ti-file-type-doc'
      return h('a', {
        href: record.cvUrl,
        target: '_blank',
        class: 'btn btn-sm btn-outline-primary',
        onClick: (e) => {
          e.preventDefault()
          window.open(record.cvUrl, '_blank', 'noopener,noreferrer')
        }
      }, [
        h('i', { class: icon + ' me-1' }),
        'Download CV'
      ])
    }
  },
  {
    title: "Applied Date",
    dataIndex: "applicationDate",
    key: "applicationDate",
    sorter: (a, b) => new Date(a.applicationDate) - new Date(b.applicationDate),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    sorter: (a, b) => a.status.localeCompare(b.status),
  },
  {
    title: "Actions",
    key: "actions",
  }
]

// Formater les données pour le tableau
const formatCandidates = (data) => {
  return data.map(candidate => ({
    ...candidate,
    fullName: `${candidate.firstName} ${candidate.lastName}`,
    applicationDate: new Date(candidate.applicationDate).toLocaleDateString('fr-FR'),
    status: candidate.status.charAt(0).toUpperCase() + candidate.status.slice(1)
  }))
}

// Récupérer les candidats
const fetchCandidates = async () => {
  try {
    isLoading.value = true
    const response = await CandidateService.getCandidates()
    candidates.value = formatCandidates(response)
  } catch (error) {
    if (error.response?.status === 401) {
      router.push('/login')
    }
    showNotification({
      title: 'Error',
      message: error.message,
      type: 'error'
    })
  } finally {
    isLoading.value = false
  }
}

// Gestion des modales
const showDeleteModal = (candidate) => {
  selectedCandidate.value = candidate
  deleteModal.value.show()
}

// Supprimer un candidat
const handleDelete = async () => {
  try {
    isLoading.value = true
    await CandidateService.deleteCandidate(selectedCandidate.value.id)
    showNotification({
      title: 'Success',
      message: 'Candidate deleted successfully',
      type: 'success'
    })
    await fetchCandidates()
    deleteModal.value.hide()
  } catch (error) {
    if (error.response?.status === 401) {
      router.push('/login')
    }
    showNotification({
      title: 'Error',
      message: error.message,
      type: 'error'
    })
  } finally {
    isLoading.value = false
  }
}

// Initialisation
onMounted(() => {
  candidateModal.value = new Modal(document.getElementById('candidateModal'))
  deleteModal.value = new Modal(document.getElementById('deleteModal'))
  fetchCandidates()
})

// Empêcher l'ajout dans l'historique de navigation
const cleanUrl = () => {
  window.history.replaceState({}, document.title, window.location.pathname)
}

// Surveiller les changements de route
router.afterEach(() => {
  cleanUrl()
})
</script>

<template>
  <div class="candidate-management">
    <div class="card">
      <div class="card-body">
        <a-table
          :columns="columns"
          :data-source="candidates"
          :loading="isLoading"
          :row-key="record => record.id"
          bordered
        >
          <template #bodyCell="{ column, record }">
            <!-- Colonne Candidate -->
            <template v-if="column.key === 'candidate'">
              <div class="d-flex align-items-center">
                <div class="avatar me-3">
                  <img 
                    :src="record.photoUrl || '/src/assets/images/default-avatar.jpg'"
                    class="rounded-circle"
                    width="40"
                    height="40"
                    alt="Avatar"
                  >
                </div>
                <div>
                  <div class="fw-semibold">{{ record.fullName }}</div>
                  <div class="text-muted small">{{ record.email }}</div>
                </div>
              </div>
            </template>

            <!-- Colonne Status -->
            <template v-if="column.key === 'status'">
              <span class="badge" :class="{
                'bg-primary': ['sent', 'received'].includes(record.status.toLowerCase()),
                'bg-info': record.status.toLowerCase() === 'scheduled',
                'bg-warning': record.status.toLowerCase() === 'interviewed',
                'bg-success': record.status.toLowerCase() === 'hired',
                'bg-danger': record.status.toLowerCase() === 'rejected'
              }">
                {{ record.status }}
              </span>
            </template>

            <!-- Colonne Actions -->
            <template v-if="column.key === 'actions'">
              <div class="d-flex gap-2">
                <button 
                  class="btn btn-sm btn-outline-primary" 
                  @click="router.push(`/candidates/edit/${record.id}`)"
                >
                  <i class="ti ti-edit"></i>
                </button>
                <button 
                  class="btn btn-sm btn-outline-danger" 
                  @click="showDeleteModal(record)"
                >
                  <i class="ti ti-trash"></i>
                </button>
              </div>
            </template>
          </template>
        </a-table>
      </div>
    </div>

    <!-- Modal de suppression -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Confirm Deletion</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to delete candidate <strong>{{ selectedCandidate?.fullName }}</strong>?</p>
            <p class="text-danger">This action cannot be undone.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button 
              type="button" 
              class="btn btn-danger" 
              @click="handleDelete" 
              :disabled="isLoading"
            >
              <span v-if="isLoading" class="spinner-border spinner-border-sm me-1"></span>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.avatar img {
  object-fit: cover;
}

.btn-outline-primary, .btn-outline-danger {
  border-width: 1px;
}

:deep(.ant-table-thead > tr > th) {
  background-color: #f8f9fa;
  font-weight: 600;
}
</style>