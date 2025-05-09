<template>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content">
      <!-- Breadcrumb -->
      <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <index-breadcrumb :title="title" :text="text" :text1="text1" />
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="me-2 mb-2">
            <div class="d-flex align-items-center border bg-white rounded p-1 me-2">
              <router-link to="/employee/employee-list" class="btn btn-icon btn-sm active bg-primary text-white me-1"><i
                  class="ti ti-list-tree"></i></router-link>
              <router-link to="/employee/employee-grid" class="btn btn-icon btn-sm"><i
                  class="ti ti-layout-grid"></i></router-link>
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
            <a href="javascript:void(0);" @click="openEmployeeModal(false)"
              class="btn btn-primary d-flex align-items-center"><i class="ti ti-circle-plus me-2"></i>{{
                $t('AddNewEmployee') }}
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

      <div class="row">
        <!-- Total Plans -->
        <div class="col-lg-3 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-body d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center overflow-hidden">
                <div>
                  <span class="avatar avatar-lg bg-dark rounded-circle"><i class="ti ti-users"></i></span>
                </div>
                <div class="ms-2 overflow-hidden">
                  <p class="fs-12 fw-medium mb-1 text-truncate">{{ $t('TotalEmployee') }}</p>
                  <h4>1007</h4>
                </div>
              </div>
              <div>
                <span class="badge badge-soft-purple badge-sm fw-normal">
                  <i class="ti ti-arrow-wave-right-down"></i>
                  +19.01%
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- /Total Plans -->

        <!-- Total Plans -->
        <div class="col-lg-3 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-body d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center overflow-hidden">
                <div>
                  <span class="avatar avatar-lg bg-success rounded-circle"><i class="ti ti-user-share"></i></span>
                </div>
                <div class="ms-2 overflow-hidden">
                  <p class="fs-12 fw-medium mb-1 text-truncate">{{ $t('Active') }}</p>
                  <h4>1007</h4>
                </div>
              </div>
              <div>
                <span class="badge badge-soft-primary badge-sm fw-normal">
                  <i class="ti ti-arrow-wave-right-down"></i>
                  +19.01%
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- /Total Plans -->

        <!-- Inactive Plans -->
        <div class="col-lg-3 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-body d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center overflow-hidden">
                <div>
                  <span class="avatar avatar-lg bg-danger rounded-circle"><i class="ti ti-user-pause"></i></span>
                </div>
                <div class="ms-2 overflow-hidden">
                  <p class="fs-12 fw-medium mb-1 text-truncate">{{ $t('Inactive') }}</p>
                  <h4>1007</h4>
                </div>
              </div>
              <div>
                <span class="badge badge-soft-dark badge-sm fw-normal">
                  <i class="ti ti-arrow-wave-right-down"></i>
                  +19.01%
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- /Inactive Companies -->

        <!-- No of Plans  -->
        <div class="col-lg-3 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-body d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center overflow-hidden">
                <div>
                  <span class="avatar avatar-lg bg-info rounded-circle"><i class="ti ti-user-plus"></i></span>
                </div>
                <div class="ms-2 overflow-hidden">
                  <p class="fs-12 fw-medium mb-1 text-truncate">{{ $t('NewJoiners') }}</p>
                  <h4>67</h4>
                </div>
              </div>
              <div>
                <span class="badge badge-soft-secondary badge-sm fw-normal">
                  <i class="ti ti-arrow-wave-right-down"></i>
                  +19.01%
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- /No of Plans -->
      </div>

      <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
          <h5>{{ $t('EmployeeList') }}</h5>
          <div class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
            <div class="me-3">
              <div class="input-icon-end position-relative">
                <input type="text" class="form-control date-range bookingrange" ref="dateRangeInput"
                  :placeholder="$t('dd/mm/yyyy - dd/mm/yyyy')" />
                <span class="input-icon-addon">
                  <i class="ti ti-chevron-down"></i>
                </span>
              </div>
            </div>
            <div class="dropdown me-3">
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown">
                {{ $t('Designation') }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('finance') }}</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('Developer') }}</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('executive') }}</a>
                </li>
              </ul>
            </div>
            <div class="dropdown me-3">
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown">
                {{ $t('SelectStatus') }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('Active') }}</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('Inactive') }}</a>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown">
                {{ $t('SortBy:Last7Days') }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('Ascending') }}</a>
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
          <th></th>
          <th>Staff ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Subsidiary</th>
          <th>Gender</th>
          <th>Date of Birth</th>
          <th>Designation</th>
          <th>Joining Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.id">
          <td><input type="checkbox" class="form-check-input"></td>
          <td>{{ employee.staffId }}</td>
          <td>
            <div class="d-flex align-items-center file-name-icon">
              <a href="javascript:void(0);" class="avatar avatar-md">
                <img :src="employee.profilePicture || '@/assets/img/users/default-user.png'" 
                     class="img-fluid rounded-circle profile-image" alt="img" />
              </a>
              <div class="ms-2">
                <h6 class="fw-medium">
                  <a href="javascript:void(0);">
                    {{ employee.firstName }} {{ employee.lastName }}
                  </a>
                </h6>
                <span class="d-block mt-1">{{ employee.designation }}</span>
              </div>
            </div>
          </td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.mobilePhone }}</td>
          <td>{{ employee.subsidiary }}</td>
          <td>{{ employee.gender }}</td> 
          <td>{{ formatDate(employee.dateOfBirth) }}</td>
          <td>
            <div class="dropdown">
              <a href="javascript:void(0);" 
                 class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                 data-bs-toggle="dropdown">
                <span class="rounded-circle bg-transparent-success d-flex justify-content-center align-items-center me-2"></span>
                {{ employee.designation || 'Not specified' }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li v-for="dept in ['Finance', 'Developer', 'Executive', 'Manager']" :key="dept">
                  <a href="javascript:void(0);"
                    class="dropdown-item rounded-1 d-flex justify-content-start align-items-center">
                    <span class="rounded-circle bg-transparent-success d-flex justify-content-center align-items-center me-2"></span>
                    {{ dept }}
                  </a>
                </li>
              </ul>
            </div>
          </td>
          <td>{{ formatDate(employee.joining_date) }}</td>
          <td>
            <span :class="[
              'badge',
              employee.status === 'Active' 
                ? 'badge-success' 
                : 'badge-danger',
              'align-items-center',
              'badge-xs',
            ]">
              <i class="ti ti-point-filled me-1"></i>
              {{ employee.status }}
            </span>
          </td>
          <td>
            <div class="action-icon d-inline-flex">
              <a href="javascript:void(0);" class="me-2" @click="openEmployeeModal(true, employee)">
                <i class="ti ti-edit"></i>
              </a>
              <a href="javascript:void(0);" @click="confirmDelete(employee.id)">
                <i class="ti ti-trash"></i>
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
      </div>
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

  <!-- Employee Modal -->
  <EmployeeModal ref="employeeModal" @saved="handleEmployeeSaved" />
  
  <!-- Delete Confirmation Modal -->
  <div class="modal fade" id="deleteConfirmModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center p-4">
          <i class="ti ti-alert-circle fs-48 text-danger mb-3"></i>
          <h5>{{ $t('ConfirmDelete') }}</h5>
          <p class="mb-4">{{ $t('DeleteEmployeeWarning') }}</p>
          <div class="d-flex justify-content-center itemss-center">
            <button type="button" class="btn btn-light" data-bs-dismiss="modal">{{ $t('Cancel') }}</button>
            <button @click="deleteEmployee" type="button" class="btn btn-danger">{{ $t('Delete') }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import EmployeeModal from '@/components/modal/employee-list-modal.vue';
import EmployeeService from '@/services/employee.service.js';
import { Modal } from "bootstrap";
import { useNotifications } from '@/composables/useNotifications';

const { showNotification } = useNotifications();

// Data
const employees = ref([]);
const employeeModal = ref(null);
const employeeToDelete = ref(null);
const isLoading = ref(false);

// Methods
const fetchEmployees = async () => {
  try {
    isLoading.value = true;
    const response = await EmployeeService.getEmployees();
    console.log('employe data:',response.data); // Vérifiez ce que l'API retourne
    employees.value = response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    showNotification({
      type: 'error',
      title: 'Error',
      message: 'Failed to load employees',
      timeout: 5000
    });
  } finally {
    isLoading.value = false;
  }
};

const openEmployeeModal = (isEdit, employeeData = null) => {
  employeeModal.value.show(isEdit, employeeData);
};

const confirmDelete = (empId) => {
  employeeToDelete.value = empId;
  const modal = new Modal(document.getElementById('deleteConfirmModal'));
  modal.show();
};

const deleteEmployee = async () => {
  try {
    if (!employeeToDelete.value) return;
    
    await EmployeeService.deleteEmployee(employeeToDelete.value);
    
    employees.value = employees.value.filter(e => e.id !== employeeToDelete.value);
    
    showNotification({
      type: 'success',
      title: 'Success',
      message: 'Employee deleted successfully',
      timeout: 5000
    });
    
    const modal = Modal.getInstance(document.getElementById('deleteConfirmModal'));
    modal.hide();
  } catch (error) {
    console.error('Error deleting employee:', error);
    showNotification({
      type: 'error',
      title: 'Error',
      message: 'Failed to delete employee',
      timeout: 5000
    });
  }
};

const formatDate = (date) => {
  return moment(date).format("DD/MM/YYYY"); // ou le format que vous souhaitez
};

const handleEmployeeSaved = ({ action, employee }) => {
  if (action === 'update') {
    const index = employees.value.findIndex(e => e.staff_id === employee.staff_id);
    if (index !== -1) {
      employees.value[index] = employee;
    }
  } else {
    employees.value.unshift(employee);
  }
  
  showNotification({
    type: 'success',
    title: 'Success',
    message: `Employee ${action === 'update' ? 'updated' : 'created'} successfully`,
    timeout: 5000
  });
};

onMounted(() => {
  fetchEmployees();
  
  // Initialize date range picker
  const start = moment().subtract(6, "days");
  const end = moment();

  new DateRangePicker(
    document.querySelector('.bookingrange'),
    {
      startDate: start,
      endDate: end,
      ranges: {
        Today: [moment(), moment()],
        Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
        "Last 7 Days": [moment().subtract(6, "days"), moment()],
        "Last 30 Days": [moment().subtract(29, "days"), moment()],
        "This Month": [moment().startOf("month"), moment().endOf("month")],
        "Last Month": [
          moment().subtract(1, "month").startOf("month"),
          moment().subtract(1, "month").endOf("month"),
        ],
      },
    },
    function(start, end) {
      return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
    }
  );
});
</script>

<style scoped>
.profile-image {
  width: 100px; /* Remplacez par la largeur souhaitée */
  height: 40px; /* Remplacez par la hauteur souhaitée */
  object-fit: cover; /* Conserve l'aspect ratio et couvre l'élément */
  border-radius: 50%; /* Pour un affichage circulaire */
}
</style>