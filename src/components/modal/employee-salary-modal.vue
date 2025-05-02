<template>
  <!-- Add Employee Salary -->
  <div class="modal fade" id="new-employee-salary">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Employee Salary</h4>
          <button
            type="button" 
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-0">
            <!-- Employee Information Section -->
            <div class="card mb-4 border">
              <div class="card-header bg-light">
                <h5 class="mb-0">Employee Information</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Department</label>
                      <select 
                        v-model="formData.department_id"
                        class="form-control"
                      >
                        <option value="" disabled>Select Department</option>
                        <option v-for="dept in departments" :key="dept.id" :value="dept.id">
                          {{ dept.nom }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Employee Name</label>
                      <select
                        placeholder="Select"
                        class="form-control"
                        :disabled="!formData.department_id"
                        v-model="formData.employee_id"
                      ><option value="" disabled>Select Employee</option>
                        <option v-for="employee in EmployeName" :key="employee.id" :value="employee.id">
                          {{ employee.name }}
                        </option>

                    </select>
                    <small v-if="!formData.department_id" class="text-muted">
                      Please select a department first
                    </small>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Pay Period Date</label>
                      <input type="date" class="form-control" v-model="formData.pay_period_date" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Earnings Section -->
            <div class="card mb-4 border">
              <div class="card-header bg-success bg-opacity-10">
                <div class="d-flex justify-content-between align-items-center">
                  <h5 class="mb-0 text-success">Earnings</h5>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Basic Salary</label>
                      <div class="input-group">
                        <span class="input-group-text">&#3647;</span>
                        <input type="number" min="0" class="form-control" v-model="formData.basic_salary" @input="calculateTotals" />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Salary by FTE</label>
                      <div class="input-group">
                        <span class="input-group-text">&#3647;</span>
                        <input type="number" min="0" class="form-control" v-model="formData.salary_by_FTE" @input="calculateTotals" />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Compensation Refund</label>
                      <div class="input-group">
                        <span class="input-group-text">&#3647;</span>
                        <input type="number" min="0" class="form-control" v-model="formData.compensation_refund" @input="calculateTotals" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">13th Month Salary</label>
                      <div class="input-group">
                        <span class="input-group-text">&#3647;</span>
                        <input type="number" min="0" class="form-control" v-model="formData.thirteen_month_salary" @input="calculateTotals" />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">PVD</label>
                      <div class="input-group">
                        <span class="input-group-text">&#3647;</span>
                        <input type="number" min="0" class="form-control" v-model="formData.pvd" @input="calculateTotals" />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Saving Fund</label>
                      <div class="input-group">
                        <span class="input-group-text">&#3647;</span>
                        <input type="number" min="0" class="form-control" v-model="formData.saving_fund" @input="calculateTotals" />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Others</label>
                      <div class="input-group">
                        <span class="input-group-text">&#3647;</span>
                        <input type="number" min="0" class="form-control" v-model="formData.saving_fund" @input="calculateTotals" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="alert alert-success bg-success bg-opacity-10">
                      <strong>Total Earnings: ${{ parseFloat(formData.grand_total_income).toFixed(2) }}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Deductions Section -->
            <div class="card mb-4 border">
              <div class="card-header bg-danger bg-opacity-10">
                <div class="d-flex justify-content-between align-items-center">
                  <h5 class="mb-0 text-danger">Deductions</h5>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Employee Social Security</label>
                      <div class="input-group">
                        <span class="input-group-text">&#3647;</span>
                        <input type="number"  min= "0" class="form-control" v-model="formData.employee_social_security" @input="calculateTotals" />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Employee Health Welfare</label>
                      <div class="input-group">
                        <span class="input-group-text">&#3647;</span>
                        <input type="number" min="0" class="form-control" v-model="formData.employee_health_welfare" @input="calculateTotals" />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Tax</label>
                      <div class="input-group">
                        <span class="input-group-text">&#3647;</span>
                        <input type="number" min="0" class="form-control" v-model="formData.tax" @input="calculateTotals" />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Others</label>
                      <div class="input-group">
                        <span class="input-group-text">&#3647;</span>
                        <input type="number" min="0" class="form-control" v-model="formData.saving_fund" @input="calculateTotals" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="alert alert-danger bg-danger bg-opacity-10">
                      <strong>Total Deductions: ${{ parseFloat(formData.grand_total_deduction).toFixed(2) }}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Employer Contributions Section -->
            <div class="card mb-4 border">
              <div class="card-header bg-info bg-opacity-10">
                <h5 class="mb-0 text-info">Employer Contributions</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Employer Social Security</label>
                      <div class="input-group">
                        <span class="input-group-text">&#3647;</span>
                        <input type="number" min="0" class="form-control" v-model="formData.employer_social_security" @input="calculateEmployerContribution" />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Employer Health Welfare</label>
                      <div class="input-group">
                        <span class="input-group-text">&#3647;</span>
                        <input type="number" min="0" class="form-control" v-model="formData.employer_health_welfare" @input="calculateEmployerContribution" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="alert alert-info bg-info bg-opacity-10">
                      <strong>Total Employer Contribution: ${{ parseFloat(formData.employer_contribution_total).toFixed(2) }}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Summary Section -->
            <div class="card mb-4 border">
              <div class="card-header bg-primary bg-opacity-10">
                <h5 class="mb-0 text-primary">Salary Summary</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-md-4">
                    <div class="mb-3">
                      <label class="form-label fw-bold">Grand Total Income</label>
                      <div class="input-group">
                        <span class="input-group-text">&#3647;</span>
                        <input type="number" min="0" class="form-control bg-success bg-opacity-10" v-model="formData.grand_total_income" readonly />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-4">
                    <div class="mb-3">
                      <label class="form-label fw-bold">Grand Total Deduction</label>
                      <div class="input-group">
                        <span class="input-group-text">&#3647;</span>
                        <input type="number" min="0" class="form-control bg-danger bg-opacity-10" v-model="formData.grand_total_deduction" readonly />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-4">
                    <div class="mb-3">
                      <label class="form-label fw-bold">Net Paid</label>
                      <div class="input-group">
                        <span class="input-group-text">&#3647;</span>
                        <input type="number" min="0" class="form-control bg-primary bg-opacity-10 fw-bold" v-model="formData.net_paid" readonly />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Employer Contribution Total</label>
                      <div class="input-group">
                        <span class="input-group-text">&#3647;</span>
                        <input type="number" min="0" class="form-control bg-info bg-opacity-10" v-model="formData.employer_contribution_total" readonly />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Total Cost to Company</label>
                      <div class="input-group">
                        <span class="input-group-text">&#3647;</span>
                        <input type="number" min="0" class="form-control bg-warning bg-opacity-10" v-model="formData.two_sides" readonly />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Payslip Information Section -->
            <div class="card mb-4 border">
              <div class="card-header bg-light">
                <h5 class="mb-0">Payslip Information</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Payslip Date</label>
                      <input type="date" class="form-control" v-model="formData.payslip_date" />
                    </div>
                  </div>
                  <div class="col-12 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Payslip Number</label>
                      <input type="text" class="form-control" v-model="formData.payslip_number" />
                    </div>
                  </div>
                  <div class="col-12 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Staff Signature</label>
                      <input type="text" class="form-control" v-model="formData.staff_signature" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-white border me-2"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Add Employee Salary</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { Modal } from 'bootstrap';
import EmployeeService from '@/services/employee.service'
import DepartmentPositionService from '@/services/departement.service'
import { useNotifications } from '@/composables/useNotifications';

const { showNotification } = useNotifications();

// Données des employés et départements
const EmpoyeName = ref([]);
const departments = ref([]);
const EditEmpoyeName = ref(["Select", "Anthony Lewis", "Brian Villalobos", "Doglas Martini"]);

// Données du formulaire
const formData = ref({
  department_id: '',
  employee_id: '',
  pay_period_date: '',
  basic_salary: 0,
  salary_by_FTE: 0,
  compensation_refund: 0,
  thirteen_month_salary: 0,
  pvd: 0,
  saving_fund: 0,
  employee_social_security: 0,
  employee_health_welfare: 0,
  tax: 0,
  employer_social_security: 0,
  employer_health_welfare: 0,
  grand_total_income: 0,
  grand_total_deduction: 0,
  net_paid: 0,
  employer_contribution_total: 0,
  two_sides: 0,
  payslip_date: '',
  payslip_number: '',
  staff_signature: ''
});

const isEditMode = ref(false);

// Méthodes pour calculer les totaux
const calculateTotals = () => {
  // Calcul des gains totaux
  formData.value.grand_total_income = 
    parseFloat(formData.value.basic_salary || 0) +
    parseFloat(formData.value.salary_by_FTE || 0) +
    parseFloat(formData.value.compensation_refund || 0) +
    parseFloat(formData.value.thirteen_month_salary || 0) +
    parseFloat(formData.value.pvd || 0) +
    parseFloat(formData.value.saving_fund || 0);

  // Calcul des déductions totales
  formData.value.grand_total_deduction = 
    parseFloat(formData.value.employee_social_security || 0) +
    parseFloat(formData.value.employee_health_welfare || 0) +
    parseFloat(formData.value.tax || 0);

  // Calcul du net payé
  formData.value.net_paid = 
    formData.value.grand_total_income - formData.value.grand_total_deduction;

  calculateEmployerContribution();
};

const calculateEmployerContribution = () => {
  // Calcul des contributions employeur
  formData.value.employer_contribution_total = 
    parseFloat(formData.value.employer_social_security || 0) +
    parseFloat(formData.value.employer_health_welfare || 0);

  // Calcul du coût total pour l'entreprise
  formData.value.two_sides = 
    formData.value.grand_total_income + formData.value.employer_contribution_total;
};

// Méthode pour ouvrir le modal
const show = (editMode = false, salaryData = null) => {
  isEditMode.value = editMode;
  
  if (editMode && salaryData) {
    formData.value = { ...salaryData };
  } else {
    // Réinitialiser le formulaire
    formData.value = {
      department_id: '',
      employee_id: '',
      pay_period_date: '',
      basic_salary: 0,
      salary_by_FTE: 0,
      compensation_refund: 0,
      thirteen_month_salary: 0,
      pvd: 0,
      saving_fund: 0,
      employee_social_security: 0,
      employee_health_welfare: 0,
      tax: 0,
      employer_social_security: 0,
      employer_health_welfare: 0,
      grand_total_income: 0,
      grand_total_deduction: 0,
      net_paid: 0,
      employer_contribution_total: 0,
      two_sides: 0,
      payslip_date: '',
      payslip_number: '',
      staff_signature: ''
    };
  }
  
  const modalId = editMode ? 'edit-employee-salary' : 'new-employee-salary';
  const modal = new Modal(document.getElementById(modalId));
  modal.show();
};

// Ajout d'une propriété calculée pour filtrer les employés par département
const filteredEmployees = computed(() => {
  if (!formData.value.department_id) return [];
  return EmpoyeName.value.filter(emp => emp.department_id === formData.value.department_id);
});


const fetchEmploye = async () => {
  try {
    const response = await EmployeeService.getEmployees();
    EmpoyeName.value = response.data.map(emp => ({
      label: `${emp.firstName} ${emp.lastName}`,
      value: emp.id,
      department_id: emp.department_id // Assurez-vous que votre API retourne cette info
    }));
  } catch (error) {
    console.error('Erreur lors de la récupération des employés :', error);
    showNotification({
      type: 'error',
      title: 'Erreur',
      message: 'Impossible de charger les employés',
    });
  }
};

const fetchDepartments = async () => {
  try {
    const response = await DepartmentPositionService.getAllDepartmentPositions();
    departments.value = response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des départements :', error);
    showNotification({
      type: 'error',
      title: 'Erreur',
      message: 'Impossible de charger les départements',
    });
  }
};

// Ajout d'un watcher pour réinitialiser l'employé sélectionné quand le département change
watch(() => formData.value.department_id, (newDeptId) => {
  if (newDeptId && formData.value.employee_id) {
    const selectedEmployee = EmpoyeName.value.find(emp => emp.value === formData.value.employee_id);
    if (!selectedEmployee || selectedEmployee.department_id !== newDeptId) {
      formData.value.employee_id = '';
    }
  }
});

// Méthode pour soumettre le formulaire
const submitForm = () => {
  // Ici vous pourriez ajouter la logique de soumission
  const modalId = isEditMode.value ? 'edit-employee-salary' : 'new-employee-salary';
  const modal = Modal.getInstance(document.getElementById(modalId));
  modal.hide();

  fetchDepartments()
  
  // Redirection après soumission
  window.location.href = "/payroll/employee-salary";
};

// Exposer les méthodes
defineExpose({ show });

// Chargement initial
onMounted(() => {
  fetchEmploye();
  fetchDepartments();
});
</script>