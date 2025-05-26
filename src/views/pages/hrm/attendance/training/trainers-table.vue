<script setup>
import { ref, onMounted } from 'vue'
import TrainerService from '@/services/trainerList.service'
import { useNotifications } from "@/composables/useNotifications"
import TrainerModal from '@/components/modal/trainers-modal.vue' // Créez ce composant similaire à TrainingModal
import { Modal } from 'bootstrap';



const { showNotification } = useNotifications()
const data = ref([])
const loading = ref(false)
const trainerModalRef = ref(null)
const deleteTrainerId = ref(null)

// Columns configuration
const columns = ref([
  {
    title: "Nom",
    dataIndex: "Name",
    key: "Name",
    sorter: (a, b) => a.Name.localeCompare(b.Name)
  },
  {
    title: "Téléphone",
    dataIndex: "Phone",
    sorter: (a, b) => a.Phone.localeCompare(b.Phone)
  },
  {
    title: "Email",
    dataIndex: "Email",
    sorter: (a, b) => a.Email.localeCompare(b.Email)
  },
  {
    title: "Description",
    dataIndex: "Description",
    sorter: (a, b) => a.Description.localeCompare(b.Description)
  },
  {
    title: "Statut",
    dataIndex: "Status",
    key: "Status",
    sorter: (a, b) => a.Status.localeCompare(b.Status)
  },
  {
    title: "Actions",
    key: "action"
  }
])

// Fetch trainers data
const fetchTrainers = async () => {
  loading.value = true
  try {
    const response = await TrainerService.getAllTrainer()
    data.value = response.data.map(trainer => ({
      ...trainer,
      key: trainer.id,
      Name: `${trainer.firstName} ${trainer.lastName}`,
      Status: trainer.status ? 'Active' : 'Inactive',
      Image: trainer.profilePicture || 'default-user.jpg'
    }))
  } catch (error) {
    console.error("Error fetching trainers:", error)
    showNotification({
      type: 'error',
      title: 'Erreur',
      message: 'Échec du chargement des formateurs',
      timeout: 5000
    })
  } finally {
    loading.value = false
  }
}

// Edit trainer
const handleEdit = (record) => {
  trainerModalRef.value?.show(true, {
    ...record,
    firstName: record.firstName || record.Name.split(' ')[0],
    lastName: record.lastName || record.Name.split(' ')[1] || '',
    status: record.Status === 'Active' ? 1 : 0
  })
}

// Delete confirmation
const handleDelete = (id) => {
  deleteTrainerId.value = id
  const modal = new Modal(document.getElementById('delete_trainer_modal'))
  modal.show()
}

// Confirm delete
const confirmDelete = async () => {
  if (!deleteTrainerId.value) return
  
  try {
    await TrainerService.deleteTrainer(deleteTrainerId.value)
    showNotification({
      type: 'success',
      title: 'Succès',
      message: 'Formateur supprimé avec succès',
      timeout: 5000
    })
    fetchTrainers()
  } catch (error) {
    console.error("Error deleting trainer:", error)
    showNotification({
      type: 'error',
      title: 'Erreur',
      message: 'Échec de la suppression du formateur',
      timeout: 5000
    })
  } finally {
    deleteTrainerId.value = null
  }
}

onMounted(() => {
  fetchTrainers()
})
</script>

<template>
  <div>
    <a-table 
      class="table datatable thead-light" 
      :columns="columns" 
      :data-source="data"
      :row-key="record => record.id"
    >
      <template #bodyCell="{ column, record }">
        <!-- Colonne Nom -->
        <template v-if="column.key === 'Name'">
          <div class="d-flex align-items-center">
            <img 
              :src="(`${record.profilePicture}`)" 
              class="avatar rounded-circle me-2"
              width="40"
              alt="Formateur"
              @error="e => e.target.src = ('@/assets/img/users/default-user.jpg')"
            />
            <span>{{ record.firstName }}</span>
          </div>
        </template>

        <!-- Colonne Statut -->
        <template v-if="column.key === 'Status'">
          <span class="badge" :class="record.Status === 'Active' ? 'badge-success' : 'badge-danger'">
            <i class="ti ti-point-filled me-1"></i>{{ record.Status }}
          </span>
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
          <i class="ti ti-folder-off fs-20 text-muted"></i>
          <p class="mt-2 text-muted">Aucun formateur trouvé</p>
        </div>
      </template>
    </a-table>

    <!-- Modal pour éditer/ajouter -->
    <TrainerModal ref="trainerModalRef" @success="fetchTrainers" />

    <!-- Modal de suppression -->
    <div class="modal fade" id="delete_trainer_modal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body text-center">
            <i class="ti ti-alert-circle fs-1 text-danger mb-3"></i>
            <h4>Confirmer la suppression</h4>
            <p>Êtes-vous sûr de vouloir supprimer ce formateur ?</p>
            <div class="d-flex justify-content-center gap-3 mt-4">
              <button 
                type="button" 
                class="btn btn-light" 
                data-bs-dismiss="modal"
              >
                Annuler
              </button>
              <button 
                type="button" 
                class="btn btn-danger" 
                data-bs-dismiss="modal"
                @click="confirmDelete"
              >
                Supprimer
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
.badge-danger {
  background-color: #f06548;
  color: white;
}
.badge-success {
  background-color: #28a745;
  color: white;
}
.btn-icon {
  background: transparent;
  border: none;
  padding: 0.25rem;
}
</style>