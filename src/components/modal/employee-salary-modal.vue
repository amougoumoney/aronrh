<template>
  <!-- Modal Structure inchangée -->
  <div class="modal fade" id="new-employee-salary">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Employee Salary</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-0">
            <!-- Employee Information Section (inchangée) -->
            <div class="card mb-4 border">
              <div class="card-header bg-light">
                <h5 class="mb-0">Employee Information</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Department</label>
                      <select v-model="formData.department_id" class="form-control">
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
                      <select class="form-control" :disabled="!formData.department_id" v-model="formData.employee_id">
                        <option value="" disabled>Select Employee</option>
                        <option v-for="employee in EmployeName" :key="employee.id" :value="employee.id">
                          {{ employee.label }}
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
                  <div class="col-12 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Years of Service</label>
                      <input type="number" class="form-control" v-model="seniorityYears" @input="calculateAll" min="0">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Earnings Section - Modifiée pour calculs automatiques -->
            <div class="card mb-4 border">
              <div class="card-header bg-success bg-opacity-10">
                <h5 class="mb-0 text-success">Earnings</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Basic Salary*</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control" v-model="formData.basic_salary" @input="calculateAll" required>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Seniority Bonus</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control" v-model="formData.salary_by_FTE" readonly>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Overtime ({{overtimeRate}}%)</label>
                      <div class="input-group">
                        <input type="number" min="0" class="form-control" v-model="formData.overtime_hours" @input="calculateAll" placeholder="Hours">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control" v-model="formData.compensation_refund" readonly>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Transport Allowance</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control" v-model="formData.transport_allowance" @input="calculateAll">
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Housing Allowance</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control" v-model="formData.housing_allowance" @input="calculateAll">
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">13th Month Salary</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control" v-model="formData.thirteen_month_salary" readonly>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="alert alert-success bg-success bg-opacity-10">
                      <strong>Total Earnings: {{ formatCurrency(formData.grand_total_income) }}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Deductions Section - Modifiée pour calculs automatiques -->
            <div class="card mb-4 border">
              <div class="card-header bg-danger bg-opacity-10">
                <h5 class="mb-0 text-danger">Deductions</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">CNPS (4.2%)</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control" v-model="formData.employee_social_security" readonly>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Income Tax (IRPP)</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control" v-model="formData.tax" readonly>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Health Insurance</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control" v-model="formData.employee_health_welfare" @input="calculateAll">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="alert alert-danger bg-danger bg-opacity-10">
                      <strong>Total Deductions: {{ formatCurrency(formData.grand_total_deduction) }}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Employer Contributions Section - Modifiée pour calculs automatiques -->
            <div class="card mb-4 border">
              <div class="card-header bg-info bg-opacity-10">
                <h5 class="mb-0 text-info">Employer Contributions</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">CNPS Employer (8.4%)</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control" v-model="formData.employer_social_security" readonly>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Other Contributions</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control" v-model="formData.employer_health_welfare" @input="calculateAll">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="alert alert-info bg-info bg-opacity-10">
                      <strong>Total Employer Contribution: {{ formatCurrency(formData.employer_contribution_total) }}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Summary Section (inchangée) -->
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
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control bg-success bg-opacity-10" v-model="formData.grand_total_income" readonly>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-4">
                    <div class="mb-3">
                      <label class="form-label fw-bold">Grand Total Deduction</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control bg-danger bg-opacity-10" v-model="formData.grand_total_deduction" readonly>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-4">
                    <div class="mb-3">
                      <label class="form-label fw-bold">Net Paid</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control bg-primary bg-opacity-10 fw-bold" v-model="formData.net_paid" readonly>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Employer Contribution Total</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control bg-info bg-opacity-10" v-model="formData.employer_contribution_total" readonly>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Total Cost to Company</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control bg-warning bg-opacity-10" v-model="formData.two_sides" readonly>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Payslip Information Section (inchangée) -->
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
            <button type="button" class="btn btn-white border me-2" data-bs-dismiss="modal">
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
import EmployeeService from '@/services/employee.service';
import DepartmentPositionService from '@/services/departement.service';
import { useNotifications } from '@/composables/useNotifications';

const { showNotification } = useNotifications();

// Constants for Cameroon payroll
const CNPS_EMPLOYEE_RATE = 0.042; // 4.2%
const CNPS_EMPLOYER_RATE = 0.084; // 8.4%
const CNPS_MAX_BASE = 274944; // Plafond CNPS 2024
const SENIORITY_RATE = 0.02; // 2% per year
const OVERTIME_RATE = 1.5; // 50% additional
const THIRTEENTH_MONTH_DIVIDER = 12; // 1/12 of annual salary

// Data
const EmployeName = ref([]);
const departments = ref([]);
const seniorityYears = ref(1);
const overtimeRate = ref(50); // 50% for normal overtime

// Form data
const formData = ref({
  department_id: '',
  employee_id: '',
  pay_period_date: '',
  basic_salary: 0,
  salary_by_FTE: 0, // Used for seniority bonus
  compensation_refund: 0, // Used for overtime pay
  transport_allowance: 0,
  housing_allowance: 0,
  thirteen_month_salary: 0,
  overtime_hours: 0,
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

// Main calculation function
const calculateAll = () => {
  // 1. Calculate earnings
  calculateEarnings();
  
  // 2. Calculate deductions
  calculateDeductions();
  
  // 3. Calculate employer contributions
  calculateEmployerContributions();
  
  // 4. Update totals
  updateTotals();
};

const calculateEarnings = () => {
  // Seniority bonus (2% per year)
  formData.value.salary_by_FTE = formData.value.basic_salary * SENIORITY_RATE * seniorityYears.value;
  
  // Overtime pay (basic_salary / 173.33 = hourly rate)
  const hourlyRate = formData.value.basic_salary / 173.33;
  formData.value.compensation_refund = formData.value.overtime_hours * hourlyRate * OVERTIME_RATE;
  
  // 13th month (prorated)
  formData.value.thirteen_month_salary = formData.value.basic_salary / THIRTEENTH_MONTH_DIVIDER;
  
  // Gross salary
  formData.value.grand_total_income = 
    parseFloat(formData.value.basic_salary || 0) +
    parseFloat(formData.value.salary_by_FTE || 0) +
    parseFloat(formData.value.compensation_refund || 0) +
    parseFloat(formData.value.transport_allowance || 0) +
    parseFloat(formData.value.housing_allowance || 0) +
    parseFloat(formData.value.thirteen_month_salary || 0);
};

const calculateDeductions = () => {
  // CNPS Employee (4.2% of capped salary)
  const cnpsBase = Math.min(formData.value.grand_total_income, CNPS_MAX_BASE);
  formData.value.employee_social_security = Math.round(cnpsBase * CNPS_EMPLOYEE_RATE);
  
  // Income Tax (IRPP - progressive)
  const taxableIncome = formData.value.grand_total_income - formData.value.employee_social_security;
  formData.value.tax = calculateIRPP(taxableIncome);
};

const calculateEmployerContributions = () => {
  // CNPS Employer (8.4% of capped salary)
  const cnpsBase = Math.min(formData.value.grand_total_income, CNPS_MAX_BASE);
  formData.value.employer_social_security = Math.round(cnpsBase * CNPS_EMPLOYER_RATE);
  
  // Other employer contributions (manual input)
  formData.value.employer_contribution_total = 
    parseFloat(formData.value.employer_social_security || 0) +
    parseFloat(formData.value.employer_health_welfare || 0);
};

// Progressive IRPP calculation
const calculateIRPP = (taxableIncome) => {
  // Apply 20% deduction (optional)
  taxableIncome = taxableIncome * 0.8;
  
  if (taxableIncome <= 2000000) return 0;
  if (taxableIncome <= 3000000) return (taxableIncome - 2000000) * 0.1;
  if (taxableIncome <= 5000000) return 100000 + (taxableIncome - 3000000) * 0.15;
  return 400000 + (taxableIncome - 5000000) * 0.25;
};

const updateTotals = () => {
  // Total deductions
  formData.value.grand_total_deduction = 
    parseFloat(formData.value.employee_social_security || 0) +
    parseFloat(formData.value.tax || 0) +
    parseFloat(formData.value.employee_health_welfare || 0);

  // Net salary
  formData.value.net_paid = 
    formData.value.grand_total_income - formData.value.grand_total_deduction;
  
  // Total cost to company
  formData.value.two_sides = 
    formData.value.grand_total_income + formData.value.employer_contribution_total;
};

// Format currency for display
const formatCurrency = (value) => {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XAF' }).format(value);
};

// Rest of your existing methods (show, fetchEmploye, fetchDepartments, etc.)
const isEditMode = ref(false);
const show = (editMode = false, salaryData = null) => {
  isEditMode.value = editMode;
  
  if (editMode && salaryData) {
    formData.value = { ...salaryData };
    seniorityYears.value = salaryData.years_of_service || 1;
  } else {
    // Reset form
    formData.value = {
      department_id: '',
      employee_id: '',
      pay_period_date: '',
      basic_salary: 0,
      salary_by_FTE: 0,
      compensation_refund: 0,
      transport_allowance: 0,
      housing_allowance: 0,
      thirteen_month_salary: 0,
      overtime_hours: 0,
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
    seniorityYears.value = 1;
  }
  
  const modalId = 'new-employee-salary';
  const modal = new Modal(document.getElementById(modalId));
  modal.show();
  calculateAll();
};

const fetchEmploye = async () => {
  try {
    const response = await EmployeeService.getEmployees();
    EmployeName.value = response.data.map(emp => ({
      label: `${emp.firstName} ${emp.lastName}`,
      value: emp.id,
      department_id: emp.department_id
    }));
  } catch (error) {
    console.error('Error fetching employees:', error);
    showNotification({
      type: 'error',
      title: 'Error',
      message: 'Failed to load employees'
    });
  }
};

const fetchDepartments = async () => {
  try {
    const response = await DepartmentPositionService.getAllDepartmentPositions();
    departments.value = response.data;
  } catch (error) {
    console.error('Error fetching departments:', error);
    showNotification({
      type: 'error',
      title: 'Error',
      message: 'Failed to load departments'
    });
  }
};

const submitForm = () => {
  const modalId = 'new-employee-salary';
  const modal = Modal.getInstance(document.getElementById(modalId));
  modal.hide();
  window.location.href = "/payroll/employee-salary";
};

// Initialize
onMounted(() => {
  fetchEmploye();
  fetchDepartments();
});

defineExpose({ show });
</script>