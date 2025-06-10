<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content">
      <!-- Breadcrumb -->
      <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div>
          <h4 class="mb-0">{{ $t('Departments') }}</h4>
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">{{ $t('Home') }}</router-link>
            </li>
            <li class="breadcrumb-item active">{{ $t('Departments') }}</li>
          </ul>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="me-2 mb-2">
            <div class="d-flex align-items-center border bg-white rounded p-1 me-2">
              <router-link to="/departments/list" class="btn btn-icon btn-sm active bg-primary text-white me-1">
                <i class="ti ti-list-tree"></i>
              </router-link>
              <router-link to="/departments/grid" class="btn btn-icon btn-sm">
                <i class="ti ti-layout-grid"></i>
              </router-link>
            </div>
          </div>
          <div class="me-2 mb-2">
            <div class="dropdown">
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown">
                <i class="ti ti-file-export me-1"></i>{{ $t('dashboard.export') }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                      class="ti ti-file-type-pdf me-1"></i>{{ $t('dashboard.exportPDF') }}</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                      class="ti ti-file-type-xls me-1"></i>{{ $t('dashboard.exportEXCEL') }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="mb-2">
            <a href="javascript:void(0);" @click="openDepartmentModal(false)"
              class="btn btn-primary d-flex align-items-center">
              <i class="ti ti-circle-plus me-2"></i>{{ $t('AddNewDepartment') }}
            </a>
          </div>
          <div class="head-icons ms-2">
            <a href="javascript:void(0);" class="" data-bs-toggle="tooltip" data-bs-placement="top"
              data-bs-original-title="Collapse" id="collapse-header" @click="toggleHeader">
              <i class="ti ti-chevrons-up"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- /Breadcrumb -->

      <!-- Department Stats Cards -->
      <div class="row">
        <div class="col-lg-3 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-body d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center overflow-hidden">
                <div>
                  <span class="avatar avatar-lg bg-primary rounded-circle"><i class="ti ti-building"></i></span>
                </div>
                <div class="ms-2 overflow-hidden">
                  <p class="fs-12 fw-medium mb-1 text-truncate">{{ $t('TotalDepartments') }}</p>
                  <h4>{{ departmentStats.total }}</h4>
                </div>
              </div>
              <div>
                <span class="badge badge-soft-success badge-sm fw-normal">
                  <i class="ti ti-arrow-wave-right-up"></i>
                  +{{ departmentStats.growth }}%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-body d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center overflow-hidden">
                <div>
                  <span class="avatar avatar-lg bg-purple rounded-circle"><i class="ti ti-star"></i></span>
                </div>
                <div class="ms-2 overflow-hidden">
                  <p class="fs-12 fw-medium mb-1 text-truncate">{{ $t('NewDepartments') }}</p>
                  <h4>{{ departmentStats.new }}</h4>
                </div>
              </div>
              <div>
                <span class="badge badge-soft-danger badge-sm fw-normal">
                  <i class="ti ti-arrow-wave-right-down"></i>
                  -2.1%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Department Stats Cards -->

      <!-- Department Table -->
      <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
          <h5>{{ $t('DepartmentList') }}</h5>
          <div class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
            <div class="me-3">
              <div class="input-icon-end position-relative">
                <input type="text" class="form-control" v-model="searchQuery" 
                  :placeholder="$t('SearchDepartments')" />
                <span class="input-icon-addon">
                  <i class="ti ti-search"></i>
                </span>
              </div>
            </div>
            <div class="dropdown me-3">
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown">
                {{ $t('SortBy') }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" @click="sortDepartments('name')" class="dropdown-item rounded-1">
                    {{ $t('ByName') }}
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" @click="sortDepartments('employees')" class="dropdown-item rounded-1">
                    {{ $t('ByEmployeesCount') }}
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" @click="sortDepartments('date')" class="dropdown-item rounded-1">
                    {{ $t('ByCreationDate') }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="card-body p-0">
          <div class="custom-datatable-filter table-responsive">
            <table class="table datatable thead-light">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>{{ $t('Name') }}</th>
                  <th>{{ $t('Position') }}</th>
                  <th>{{ $t('Description') }}</th>
                  <th>{{ $t('Actions') }}</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="filteredDepartments.length > 0">
                  <tr v-for="department in filteredDepartments" :key="department.id">
                    <td>{{ department.id }}</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="avatar avatar-sm bg-light-primary rounded-circle me-2">
                          <span>{{ department.nom.charAt(0).toUpperCase() }}</span>
                        </div>
                        <h6 class="fw-medium mb-0">
                          <a href="javascript:void(0);">{{ department.nom }}</a>
                        </h6>
                      </div>
                    </td>
                    <td>{{ department.position || '-' }}</td>
                    <td>
                      <span class="text-truncate-3" :title="department.description">
                        {{ department.description || '-' }}
                      </span>
                    </td>
                    <td>
                      <div class="action-icon d-inline-flex">
                        <a href="javascript:void(0);" class="me-2" @click="openDepartmentModal(true, department)">
                          <i class="ti ti-edit text-primary"></i>
                        </a>
                        <a href="javascript:void(0);" @click="confirmDelete(department.id)">
                          <i class="ti ti-trash text-danger"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                </template>
                <template v-else>
                  <tr>
                    <td colspan="5" class="text-center py-4">{{ $t('NoDepartmentsFound') }}</td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>

        <div class="card-footer d-flex justify-content-between align-items-center">
          <div class="text-muted">
            {{ $t('Showing') }} {{ Math.min((currentPage - 1) * itemsPerPage + 1, filteredDepartments.length) }} 
            {{ $t('to') }} {{ Math.min(currentPage * itemsPerPage, filteredDepartments.length) }} 
            {{ $t('of') }} {{ filteredDepartments.length }} {{ $t('entries') }}
          </div>
          <ul class="pagination mb-0">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <a class="page-link" href="javascript:void(0);" @click="currentPage = 1">
                <i class="ti ti-chevrons-left"></i>
              </a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <a class="page-link" href="javascript:void(0);" @click="currentPage--">
                <i class="ti ti-chevron-left"></i>
              </a>
            </li>
            <li class="page-item" v-for="page in totalPages" :key="page" 
                :class="{ active: currentPage === page }">
              <a class="page-link" href="javascript:void(0);" @click="currentPage = page">
                {{ page }}
              </a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
              <a class="page-link" href="javascript:void(0);" @click="currentPage++">
                <i class="ti ti-chevron-right"></i>
              </a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
              <a class="page-link" href="javascript:void(0);" @click="currentPage = totalPages">
                <i class="ti ti-chevrons-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- /Department Table -->
    </div>

    <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
      <p class="mb-0">2014 - 2025 &copy; AronHR.</p>
      <p>
        {{ $t('designed') }} &amp; {{ $t('developedBy') }}
        <a href="javascript:void(0);" class="text-primary">{{ $t('dreams') }}</a>
      </p>
    </div>
  </div>
  <!-- /Page Wrapper -->

  <!-- Department Modal -->
  <DepartmentModal ref="departmentModal" @saved="handleDepartmentSaved" />
  
  <!-- Delete Confirmation Modal -->
  <div class="modal fade" id="deleteConfirmModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center p-4">
          <i class="ti ti-alert-circle fs-48 text-danger mb-3"></i>
          <h5>{{ $t('ConfirmDelete') }}</h5>
          <p class="mb-4">{{ $t('DeleteDepartmentWarning') }}</p>
          <div class="d-flex justify-content-center itemss-center">
            <button type="button" class="btn btn-light" data-bs-dismiss="modal">{{ $t('Cancel') }}</button>
            <button @click="deleteDepartment" type="button" class="btn btn-danger">{{ $t('Delete') }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import moment from "moment";
import DepartmentModal from '@/components/modal/department-modal.vue';
import departmentPositionService from '@/services/departement.service.js';
import { Modal } from "bootstrap";
import { useNotifications } from '@/composables/useNotifications';

const { showNotification } = useNotifications();

// Data
const departments = ref([]);
const departmentModal = ref(null);
const departmentToDelete = ref(null);
const isLoading = ref(false);
const searchQuery = ref('');
const currentPage = ref(1);
const itemsPerPage = ref(10);
const sortField = ref('name');
const sortDirection = ref('asc');

// Department statistics
const departmentStats = ref({
  total: 0,
  withEmployees: 0,
  active: 0,
  new: 0,
  growth: 5.2
});

// Computed
const filteredDepartments = computed(() => {
  let result = departments.value.filter(dept => {
    const matchesSearch = dept.nom.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                         dept.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    return matchesSearch;
  });

  // Sorting
  result.sort((a, b) => {
    let comparison = 0;
    
    if (sortField.value === 'name') {
      comparison = a.nom.localeCompare(b.nom);
    } 
    
    return sortDirection.value === 'asc' ? comparison : -comparison;
  });

  // Pagination
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return result.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(departments.value.length / itemsPerPage.value);
});

// Methods
const fetchDepartments = async () => {
  try {
    isLoading.value = true;
    const response = await departmentPositionService.getAllDepartmentPositions();
    departments.value = response.data;
    
    // Update stats
    updateDepartmentStats(response.data);
  } catch (error) {
    console.error('Error fetching departments:', error);
    showNotification({
      type: 'error',
      title: 'Error',
      message: 'Failed to load departments',
      timeout: 5000
    });
  } finally {
    isLoading.value = false;
  }
};

const updateDepartmentStats = (depts) => {
  departmentStats.value = {
    total: depts.length,
    new: depts.filter(d => {
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    }).length,
    growth: 5.2 // This would normally come from your API
  };
};

const openDepartmentModal = (isEdit, departmentData = null) => {
  departmentModal.value.show(isEdit, departmentData);
};

const confirmDelete = (deptId) => {
  departmentToDelete.value = deptId;
  const modal = new Modal(document.getElementById('deleteConfirmModal'));
  modal.show();
};

const deleteDepartment = async () => {
  try {
    if (!departmentToDelete.value) return;
    
    await departmentPositionService.deleteDepartmentPosition(departmentToDelete.value);
    
    departments.value = departments.value.filter(d => d.id !== departmentToDelete.value);
    updateDepartmentStats(departments.value);
    
    showNotification({
      type: 'success',
      title: 'Success',
      message: 'Department deleted successfully',
      timeout: 5000
    });
    
    const modal = Modal.getInstance(document.getElementById('deleteConfirmModal'));
    modal.hide();
  } catch (error) {
    console.error('Error deleting department:', error);
    showNotification({
      type: 'error',
      title: 'Error',
      message: 'Failed to delete department',
      timeout: 5000
    });
  }
};

const formatDate = (date) => {
  return moment(date).format("DD/MM/YYYY");
};

const handleDepartmentSaved = ({ action, department }) => {
  if (action === 'update') {
    const index = departments.value.findIndex(d => d.id === department.id);
    if (index !== -1) {
      departments.value[index] = department;
    }
  } else {
    departments.value.unshift(department);
  }
  
  updateDepartmentStats(departments.value);
  
  showNotification({
    type: 'success',
    title: 'Success',
    message: `Department ${action === 'update' ? 'updated' : 'created'} successfully`,
    timeout: 5000
  });
};

const sortDepartments = (field) => {
  if (sortField.value === field) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortField.value = field;
    sortDirection.value = 'asc';
  }
};


const toggleHeader = () => {
  // Your header toggle logic here
};

onMounted(() => {
  fetchDepartments();
});
</script>

<style scoped>
.text-truncate-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.avatar-sm span {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-weight: 600;
}

.pagination .page-item.active .page-link {
  background-color: #3b7ddd;
  border-color: #3b7ddd;
  color: white;
}

.pagination .page-link {
  color: #3b7ddd;
}

.custom-datatable-filter {
  min-height: 400px;
}
</style>