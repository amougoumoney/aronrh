<script setup>
import { ref, onMounted } from 'vue'
import TrainerService from '@/services/trainerList.service'

// Data
const data = ref([])
const loading = ref(false)

// Columns configuration (identique à votre version originale)
const columns = ref([
  {
    sorter: false,
  },
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    sorter: {
      compare: (a, b) => {
        a = a.Name.toLowerCase()
        b = b.Name.toLowerCase()
        return a > b ? -1 : b > a ? 1 : 0
      },
    },
  },
  {
    title: "Phone",
    dataIndex: "Phone",
    sorter: {
      compare: (a, b) => {
        a = a.Phone.toLowerCase()
        b = b.Phone.toLowerCase()
        return a > b ? -1 : b > a ? 1 : 0
      },
    },
  },
  {
    title: "Email",
    dataIndex: "Email",
    sorter: {
      compare: (a, b) => {
        a = a.Email.toLowerCase()
        b = b.Email.toLowerCase()
        return a > b ? -1 : b > a ? 1 : 0
      },
    },
  },
  {
    title: "Description",
    dataIndex: "Description",
    sorter: {
      compare: (a, b) => {
        a = a.Description.toLowerCase()
        b = b.Description.toLowerCase()
        return a > b ? -1 : b > a ? 1 : 0
      },
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
    sorter: {
      compare: (a, b) => {
        a = a.Status.toLowerCase()
        b = b.Status.toLowerCase()
        return a > b ? -1 : b > a ? 1 : 0
      },
    },
  },
  {
    title: "Action",
    key: "action",
    sorter: true
  },
])

// Row selection (identique à votre version originale)
const rowSelection = ref({
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
})

// Fetch trainers data
const fetchTrainers = async () => {
  loading.value = true
  try {
    const response = await TrainerService.getAllTrainer()
    // Transformation des données pour correspondre à votre structure
    data.value = response.data.map(trainer => ({
      Image: trainer.profilePicture || 'user-' + (Math.floor(Math.random() * 34)) + '.jpg', // Génération aléatoire pour l'exemple
      Name: trainer.firstName + ' ' + trainer.lastName,
      Phone: trainer.phone,
      Email: trainer.email,
      Description: trainer.description,
      Status: trainer.status ? 'Active' : 'Inactive',
      id: trainer.id // Ajout de l'ID pour les actions
    }))
  } catch (error) {
    console.error("Error fetching trainers:", error)
    data.value = []
  } finally {
    loading.value = false
  }
}

// Fetch data on component mount
onMounted(() => {
  fetchTrainers()
})
</script>

<template>
  <a-table 
    class="table datatable thead-light" 
    :columns="columns" 
    :data-source="data" 
    :row-selection="rowSelection"
    :loading="loading"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'Name'">
        <div class="d-flex align-items-center file-name-icon">
          <a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
            <img 
              :src="`/src/assets/img/users/${record.Image}`" 
              class="img-fluid" 
              alt="img"
              @error="(e) => e.target.src = '/src/assets/img/users/user-01.jpg'" 
            >
          </a>
          <div class="ms-2">
            <h6 class="fw-medium"><a href="javascript:void(0);">{{ record.Name }}</a></h6>
          </div>
        </div>
      </template>
      
      <template v-if="column.key === 'Status'">
        <span class="badge d-inline-flex align-items-center badge-xs"  
        :class="record.Status === 'Active' ? 'badge-success' : 'badge-danger'">
          <i class="ti ti-point-filled me-1"></i>{{ record.Status }}
        </span>
      </template>
      
      <template v-if="column.key === 'action'">
        <div class="action-icon d-inline-flex">
          <a 
            href="javascript:void(0);" 
            class="me-2" 
            data-bs-toggle="modal" 
            data-bs-target="#edit_trainer"
          >
            <i class="ti ti-edit"></i>
          </a>
          <a 
            href="javascript:void(0);" 
            data-bs-toggle="modal" 
            data-bs-target="#delete_modal"
          >
            <i class="ti ti-trash"></i>
          </a>
        </div>
      </template>
    </template>

    <template #emptyText>
      <div class="text-center py-4">
        <i class="ti ti-folder-off fs-20 text-muted"></i>
        <p class="mt-2 text-muted">No trainers found</p>
      </div>
    </template>
  </a-table>
</template>

<style scoped>
/* Styles pour le message "no data" */
.text-center {
  padding: 2rem 0;
}
.ti-folder-off {
  font-size: 3rem;
  opacity: 0.5;
}
.badge-danger {
  background-color: #f06548;
  color: white;
}
.badge-success {
  background-color: #28a745;
  color: white;
}
</style>