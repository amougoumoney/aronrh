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
              <router-link to="/employee/employee-list" class="btn btn-icon btn-sm active bg-primary text-white me-1">
                <i class="ti ti-list-tree"></i>
              </router-link>
              <router-link to="/employee/employee-grid" class="btn btn-icon btn-sm">
                <i class="ti ti-layout-grid"></i>
              </router-link>
            </div>
          </div>
          <div class="mb-2">
            <a href="javascript:void(0);" @click="openChildModal(false, null, selectedEmployee.id)"
              class="btn btn-primary d-flex align-items-center">
              <i class="ti ti-circle-plus me-2"></i>
              {{ $t('AddNewChild') }}
            </a>
          </div>
        </div>
      </div>
      <!-- /Breadcrumb -->

      <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between">
          <h5>{{ $t('ChildrenList') }} - {{ selectedEmployee.firstName }} {{ selectedEmployee.lastName }}</h5>
        </div>
        <div class="card-body p-0">
          <div class="custom-datatable-filter table-responsive">
            <table class="table datatable thead-light">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date of Birth</th>
                  <th>Age</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="child in employeeChildren" :key="child.id">
                  <td>{{ child.nom }}</td>
                  <td>{{ formatDate(child.dateDeNaissance) }}</td>
                  <td>{{ calculateAge(child.dateDeNaissance) }}</td>
                  <td>
                    <div class="action-icon d-inline-flex">
                      <a href="javascript:void(0);" class="me-2" @click="openChildModal(true, child)">
                        <i class="ti ti-edit"></i>
                      </a>
                      <a href="javascript:void(0);" @click="confirmDelete(child.id)">
                        <i class="ti ti-trash"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr v-if="employeeChildren.length === 0">
                  <td colspan="4" class="text-center">No children found</td>
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

  <!-- Child Modal -->
  <EmployeeChildModal ref="childModal" @saved="handleChildSaved" />
  
  <!-- Delete Confirmation Modal -->
  <div class="modal fade" id="deleteConfirmModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center p-4">
          <i class="ti ti-alert-circle fs-48 text-danger mb-3"></i>
          <h5>{{ $t('ConfirmDelete') }}</h5>
          <p class="mb-4">{{ $t('DeleteChildWarning') }}</p>
          <div class="d-flex justify-content-center itemss-center">
            <button type="button" class="btn btn-light" data-bs-dismiss="modal">{{ $t('Cancel') }}</button>
            <button @click="deleteChild" type="button" class="btn btn-danger">{{ $t('Delete') }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import moment from "moment";
import EmployeeChildModal from '@/components/modal/employee-child-modal.vue';
import ChildEmployeeService from '@/services/employeeChild.service.js';
import { Modal } from "bootstrap";
import { useNotifications } from '@/composables/useNotifications';
import { useRoute } from 'vue-router';

const { showNotification } = useNotifications();
const route = useRoute();

// Data
const employeeChildren = ref([]);
const childModal = ref(null);
const childToDelete = ref(null);
const isLoading = ref(false);
const selectedEmployee = ref({
  id: null,
  firstName: '',
  lastName: ''
});

// Methods
const fetchEmployeeChildren = async () => {
  try {
    isLoading.value = true;
    const response = await ChildEmployeeService.getAllChildren();
    employeeChildren.value = response.data;
    console.log('Employee Children:', employeeChildren.value);
  } catch (error) {
    console.error('Error fetching employee children:', error);
    showNotification({
      type: 'error',
      title: 'Error',
      message: 'Failed to load employee children',
      timeout: 5000
    });
  } finally {
    isLoading.value = false;
  }
};

const fetchEmployeeDetails = async (employeeId) => {
  try {
    const response = await ChildEmployeeService.getEmployee(employeeId);
    selectedEmployee.value = response.data;
  } catch (error) {
    console.error('Error fetching employee details:', error);
  }
};

const openChildModal = (isEdit, childData = null, employeeId = null) => {
  childModal.value.show(isEdit, childData, employeeId);
};

const confirmDelete = (childId) => {
  childToDelete.value = childId;
  const modal = new Modal(document.getElementById('deleteConfirmModal'));
  modal.show();
};

const deleteChild = async () => {
  try {
    if (!childToDelete.value) return;
    
    await ChildEmployeeService.deleteChild(childToDelete.value);
    
    employeeChildren.value = employeeChildren.value.filter(c => c.id !== childToDelete.value);
    
    showNotification({
      type: 'success',
      title: 'Success',
      message: 'Child deleted successfully',
      timeout: 5000
    });
    
    const modal = Modal.getInstance(document.getElementById('deleteConfirmModal'));
    modal.hide();
  } catch (error) {
    console.error('Error deleting child:', error);
    showNotification({
      type: 'error',
      title: 'Error',
      message: 'Failed to delete child',
      timeout: 5000
    });
  }
};

const formatDate = (date) => {
  return date ? moment(date).format("DD/MM/YYYY") : '';
};

const calculateAge = (birthDate) => {
  if (!birthDate) return '';
  return moment().diff(moment(birthDate), 'years');
};

const handleChildSaved = ({ action, child }) => {
  if (action === 'update') {
    const index = employeeChildren.value.findIndex(c => c.id === child.id);
    if (index !== -1) {
      employeeChildren.value[index] = child;
    }
  } else {
    employeeChildren.value.unshift(child);
  }
  
  showNotification({
    type: 'success',
    title: 'Success',
    message: `Child ${action === 'update' ? 'updated' : 'added'} successfully`,
    timeout: 5000
  });
};

onMounted(() => {

  fetchEmployeeChildren();
  const employeeId = route.params.id;
  if (employeeId) {
    selectedEmployee.value.id = employeeId;
    fetchEmployeeDetails(employeeId);
  }
});
</script>