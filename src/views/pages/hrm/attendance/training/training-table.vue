<script setup>
import { ref, onMounted } from 'vue';
import { Table } from 'ant-design-vue';
import TrainingService from '@/services/training.service';
import EmployeeService from '@/services/employee.service';
import TrainerService from '@/services/trainerList.service'; // Nouveau service
import TrainertypeService from '@/services/trainertype.service'; // Nouveau service
import { useNotifications } from "@/composables/useNotifications";
import TrainingModal from '@/components/modal/training-modal.vue';

const { showNotification } = useNotifications();
const data = ref([]);
const employeeImages = ref({});
const trainers = ref({}); // Stocke les formateurs par ID
const trainingTypes = ref({}); // Stocke les types par ID
const trainingModalRef = ref(null);
const deleteTrainingId = ref(null);
const isModalVisible = ref(false);
const currentTraining = ref(null);

// Récupérer les employés
const fetchEmployees = async () => {
  try {
    const response = await EmployeeService.getEmployees();
    employeeImages.value = response.data.reduce((acc, emp) => {
      acc[emp.id] = emp.profilePicture || 'default-user.jpg';
      return acc;
    }, {});
  } catch (error) {
    console.error('Erreur chargement employés:', error);
  }
};

// Récupérer les formateurs
const fetchTrainers = async () => {
  try {
    const response = await TrainerService.getAllTrainer();
    trainers.value = response.data.reduce((acc, trainer) => {
      acc[trainer.id] = trainer;
      return acc;
    }, {});
  } catch (error) {
    console.error('Erreur chargement formateurs:', error);
  }
};

// Récupérer les types de formation
const fetchTrainingTypes = async () => {
  try {
    const response = await TrainertypeService.getAllTrainertype();
    trainingTypes.value = response.data.reduce((acc, type) => {
      acc[type.id] = type;
      return acc;
    }, {});
  } catch (error) {
    console.error('Erreur chargement types de formation:', error);
  }
};

// Récupérer les formations
const fetchTrainings = async () => {
  try {
    await Promise.all([fetchEmployees(), fetchTrainers(), fetchTrainingTypes()]);
    const response = await TrainingService.getAllTrainings();
    
    data.value = response.data.map(training => {
      const employees = training.employees.map(emp => {
        try {
          return typeof emp === 'string' ? JSON.parse(emp) : emp;
        } catch {
          return { value: 0, label: 'Inconnu', image: null };
        }
      });

      return {
        ...training,
        key: training.id.toString(),
        Training_Type: trainingTypes.value[training.trainingType]?.type || 'Inconnu',
        Trainer: trainers.value[training.trainer]?.firstName || 'Inconnu',
        Employee: employees.length.toString(),
        Time_Duration: `${new Date(training.startDate).toLocaleDateString()} - ${new Date(training.endDate).toLocaleDateString()}`,
        Description: training.description,
        Cost: `$${training.trainingCost}`,
        Status: training.status ? 'Active' : 'Inactive',
        Image: trainers.value[training.trainer]?.profilePicture || 'default-user.jpg',
        employeeImages: employees.slice(0, 5).map(emp => ({
          id: emp.value,
          image: employeeImages.value[emp.value] || 'default-user.jpg'
        })),
        originalData: {
          ...training,
          employees: employees.map(emp => emp.value),
          trainerName: trainers.value[training.trainer]?.name,
          trainingTypeName: trainingTypes.value[training.trainingType]?.name
        }
      };
    });
  } catch (error) {
    console.error('Erreur chargement formations:', error);
    showNotification({
      type: 'error',
      title: 'Erreur',
      message: 'Échec du chargement des formations',
      timeout: 5000
    });
  }
};

// Ouvrir le modal en mode édition ou création
const openModal = (training = null) => {
  currentTraining.value = training ? { ...training.formData } : null;
  isModalVisible.value = true;
};

// Fermer le modal
const closeModal = () => {
  isModalVisible.value = false;
};

// Sauvegarder la formation
const saveTraining = async (trainingData) => {
  try {
    if (trainingData.id) {
      await TrainingService.updateTraining(trainingData.id, trainingData);
      showNotification({
        type: 'success',
        title: 'Succès',
        message: 'Formation mise à jour avec succès',
        timeout: 5000
      });
    } else {
      await TrainingService.createTraining(trainingData);
      showNotification({
        type: 'success',
        title: 'Succès',
        message: 'Formation créée avec succès',
        timeout: 5000
      });
    }
    closeModal();
    fetchTrainings();
  } catch (error) {
    console.error('Erreur sauvegarde formation:', error);
    showNotification({
      type: 'error',
      title: 'Erreur',
      message: 'Échec de la sauvegarde',
      timeout: 5000
    });
  }
};

// Suppression
const confirmDelete = async () => {
  if (!deleteTrainingId.value) return;
  
  try {
    await TrainingService.deleteTraining(deleteTrainingId.value);
    showNotification({
      type: 'success',
      title: 'Succès',
      message: 'Formation supprimée avec succès',
      timeout: 5000
    });
    fetchTrainings();
  } catch (error) {
    console.error('Erreur suppression:', error);
    showNotification({
      type: 'error',
      title: 'Erreur',
      message: 'Échec de la suppression',
      timeout: 5000
    });
  } finally {
    deleteTrainingId.value = null;
  }
};

const columns = [
  {
    title: "Type de Formation",
    dataIndex: "Training_Type",
    key: "Training_Type"
  },
  {
    title: "Formateur",
    dataIndex: "Trainer",
    key: "Trainer"
  },
  {
    title: "Employés",
    dataIndex: "Employee",
    key: "Employee"
  },
  {
    title: "Durée",
    dataIndex: "Time_Duration",
    key: "Time_Duration"
  },
  {
    title: "Description",
    dataIndex: "Description",
    key: "Description"
  },
  {
    title: "Coût",
    dataIndex: "Cost",
    key: "Cost"
  },
  {
    title: "Statut",
    dataIndex: "Status",
    key: "Status"
  },
  {
    title: "Actions",
    key: "actions"
  }
];

onMounted(() => {
  fetchTrainings();
});
</script>

<template>
  <div>
    <!-- Tableau des formations -->
    <a-table 
      class="table datatable thead-light" 
      :columns="columns" 
      :data-source="data"
      :row-key="record => record.key"
    >
      <template #bodyCell="{ column, record }">
        <!-- Colonne Formateur -->
        <template v-if="column.key === 'Trainer'">
          <div class="d-flex align-items-center">
            <img 
              :src="`/src/assets/img/users/${record.Image}`" 
              class="avatar rounded-circle me-2"
              width="40"
              alt="Formateur"
            />
            <span>{{ record.Trainer }}</span>
          </div>
        </template>

        <!-- Colonne Employés -->
        <template v-if="column.key === 'Employee'">
          <div class="avatar-list-stacked avatar-group-sm">
            <span 
              v-for="(emp, index) in record.employeeImages" 
              :key="index" 
              class="avatar border-0"
            >
              <img 
                :src="`/src/assets/img/users/${emp.image}`" 
                class="rounded-circle" 
                alt="Employé"
              />
            </span>
            <span 
              v-if="record.employeeImages.length > 5" 
              class="avatar group-counts bg-primary rounded-circle border-0 fs-10"
            >
              +{{ record.employeeImages.length - 5 }}
            </span>
          </div>
        </template>

        <!-- Colonne Statut -->
        <template v-if="column.key === 'Status'">
          <span class="badge" :class="record.Status === 'Active' ? 'badge-success' : 'badge-danger'">
            <i class="ti ti-point-filled me-1"></i>{{ record.Status }}
          </span>
        </template>

        <!-- Actions -->
        <template v-if="column.key === 'actions'">
          <div class="action-icon d-inline-flex">
            <a href="javascript:void(0);" class="me-2" @click="openModal(record)">
              <i class="ti ti-edit"></i>
            </a>
            <a href="javascript:void(0);" @click="deleteTrainingId = record.id" data-bs-toggle="modal" data-bs-target="#delete_modal">
              <i class="ti ti-trash"></i>
            </a>
          </div>
        </template>
      </template>
    </a-table>

    <!-- Modal d'édition/ajout -->
    <TrainingModal 
      ref="trainingModalRef"
      :visible="isModalVisible"
      :training="currentTraining"
      :trainers="Object.values(trainers)"
      :trainingTypes="Object.values(trainingTypes)"
      @close="closeModal"
      @save="saveTraining"
    />

    <!-- Modal de suppression -->
    <div class="modal fade" id="delete_modal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body text-center">
            <i class="ti ti-alert-circle fs-1 text-danger mb-3"></i>
            <h4>Confirmer la suppression</h4>
            <p>Êtes-vous sûr de vouloir supprimer cette formation ?</p>
            <div class="d-flex justify-content-center gap-3 mt-4">
              <button class="btn btn-light" data-bs-dismiss="modal">Annuler</button>
              <button class="btn btn-danger" data-bs-dismiss="modal" @click="confirmDelete">
                Confirmer
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
  width: 32px;
  height: 32px;
}
.avatar img {
  object-fit: cover;
}
.group-counts {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>