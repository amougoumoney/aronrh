<template>
  <layout-header />
  <layout-sidebar />
  <div class="page-wrapper">
    <div class="content">
      <!-- Breadcrumb -->
      <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <h5 class="fw-medium">Salary List</h5>
        <div class="d-flex align-items-center gap-3">
          <button class="btn btn-primary" @click="handleAddSalary">
            <i class="ti ti-plus me-1"></i> Add Salary
          </button>
        </div>
      </div>
      <!-- Table -->
      <div class="card">
        <div class="card-body p-0">
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Position</th>
                  <th>Department</th>
                  <th>Hire Date</th>
                  <th>Payslip</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="filteredPayrolls.length > 0">
                  <tr v-for="payroll in filteredPayrolls" :key="payroll.id">
                    <td>{{ payroll.id }}</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <img 
                          :src="getProfilePicture(payroll.employee.profilePicture)" 
                          class="rounded-circle me-2" 
                          width="60" 
                          height="70"
                          @error="handleImageError"
                        />
                        <div>
                          <h6 class="mb-0">{{ payroll.employee.firstName }} {{ payroll.employee.lastName }}</h6>
                          <small class="text-muted">{{ getDepartmentName(payroll.employee.departementId) }}</small>
                        </div>
                      </div>
                    </td>
                    <td>{{ payroll.employee.email }}</td>
                    <td>{{ payroll.employee.position }}</td>
                    <td>{{ getDepartmentName(payroll.employee.departementId) }}</td>
                    <td>{{ formatDate(payroll.employee.dateOfCommencementService) }}</td>
                    <td>
                      <button 
                        class="btn btn-sm btn-outline-primary"
                        @click="viewPayslip(payroll.employee.id)"
                      >
                        View Payslip
                      </button>
                    </td>
                    <td>
                      <button class="btn btn-sm btn-icon" @click="handleEditSalary(payroll)">
                        <i class="ti ti-edit"></i>
                      </button>
                      <button class="btn btn-sm btn-icon" @click="handleDeleteSalary(payroll.id)">
                        <i class="ti ti-trash"></i>
                      </button>
                    </td>
                  </tr>
                </template>
                <template v-else>
                  <tr>
                    <td colspan="8" class="text-center py-4">
                      No payroll records found. 
                      <button @click="loadData" class="btn btn-link">Refresh data</button>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <EmployeeSalaryModal
    ref="salaryModal"
    :employee="currentEmployee"
    @save="handleSaveSalary"
  />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import moment from 'moment';
import EmployeeService from '@/services/employee.service';
import payrollService from '@/services/payroll.service';
import DepartmentService from '@/services/departement.service';
import EmployeeSalaryModal from '@/components/modal/employee-salary-modal.vue';
import { useNotifications } from '@/composables/useNotifications';
import { useRouter } from 'vue-router';

const router = useRouter();

const { showNotification } = useNotifications();

// Data
const employees = ref([]);
const payrolls = ref([]);
const departments = ref([]);
const loading = ref(false);
const currentEmployee = ref(null);
const salaryModal = ref(null);

// Load all data
const loadData = async () => {
  loading.value = true;
  try {
    const [empRes, payRes, deptRes] = await Promise.all([
      EmployeeService.getEmployees(),
      payrollService.getAllPayrolls(),
      DepartmentService.getAllDepartmentPositions()
    ]);

    employees.value = empRes.data;
    payrolls.value = payRes.data;
    departments.value = deptRes.data;
    
    console.log('Employees:', employees.value);
    console.log('Payrolls:', payrolls.value);
    console.log('Departments:', departments.value);
  } catch (error) {
    console.error("Loading error:", error);
    showNotification({
      type: 'error',
      title: 'Error',
      message: 'Failed to load data'
    });
  } finally {
    loading.value = false;
  }
};

// Filter payrolls and include employee data
const filteredPayrolls = computed(() => {
  return payrolls.value.map(pay => {
    const employee = employees.value.find(emp => emp.id === pay.employeeId);
    return {
      ...pay,
      employee // Inclure toutes les données de l'employé
    };
  });
});

// Get department name
const getDepartmentName = (departmentId) => {
  if (!departmentId) return "Not assigned";
  const department = departments.value.find(dept => dept.id === departmentId);
  return department ? department.nom : "Unknown department";
};

// Profile picture handling
const getProfilePicture = (path) => {
  if (!path) return '/src/assets/default-profile.png';
  return path.startsWith('http') ? path : `/storage/${path}`;
};

const handleImageError = (event) => {
  event.target.src = '/src/assets/default-profile.png';
};

// Format date
const formatDate = (date) => {
  if (!date) return 'N/A';
  return moment(date).format('DD/MM/YYYY');
};

// Handle save
const handleSaveSalary = async ({ data, isEdit }) => {
  try {
    let response;
    if (isEdit) {
      response = await payrollService.updatePayroll(data.id, data);
    } else {
      response = await payrollService.createPayroll(data);
    }
    
    if (response && response.success) {
      await loadData();
      showNotification({
        type: 'success',
        title: 'Success', 
        message: `Salary ${isEdit ? 'updated' : 'added'} successfully`
      });
    }
  } catch (error) {
    console.error('Error saving salary:', error);
    showNotification({
      type: 'error',
      title: 'Error',
      message: error.response?.data?.message || 'Failed to save salary'
    });
  }
};

// Actions
const handleAddSalary = () => {
  currentEmployee.value = null;
  salaryModal.value.show();
};

const handleEditSalary = (payroll) => {
  currentEmployee.value = payroll.employee;
  salaryModal.value.show();
};

const handleDeleteSalary = async (payrollId) => {
  if (confirm("Are you sure you want to delete this payroll?")) {
    try {
      await payrollService.deletePayroll(payrollId);
      await loadData();
      showNotification({
        type: 'success',
        title: 'Success',
        message: 'Payroll deleted successfully'
      });
    } catch (error) {
      console.error("Deletion error:", error);
      showNotification({
        type: 'error',
        title: 'Error',
        message: 'Failed to delete payroll'
      });
    }
  }
};

const viewPayslip = (id) => {
  router.push(`/payroll/payslip/${id}`);
};

// Initialization
onMounted(() => {
  loadData();
});
</script>

<style scoped>
.avatar {
  object-fit: cover;
}

.alert-warning {
  background-color: #fff3cd;
  border-color: #ffeeba;
  color: #856404;
}

.btn-link {
  padding: 0;
  vertical-align: baseline;
}
</style>