<template>
  <div class="modal fade" id="new-employee-salary">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">{{ editMode ? 'Edit' : 'Add' }} Employee Salary</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
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
                      <select v-model="formData.department_id" class="form-control" @change="loadEmployeesByDepartment">
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
                      <select class="form-control" :disabled="!formData.department_id" 
                              v-model="formData.employee_id" @change="loadEmployeeData">
                        <option value="" disabled>Select Employee</option>
                        <option v-for="employee in filteredEmployees" :key="employee.id" :value="employee.id">
                          {{ employee.fullName }}
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
                      <input type="number" class="form-control" v-model="formData.years_of_service" 
                             @input="calculateAll" min="0" readonly>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Earnings Section -->
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
                        <input type="number" min="0" class="form-control" 
                               v-model="formData.basic_salary" @input="calculateAll" required readonly>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Seniority Bonus</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control" 
                               v-model="formData.seniority_bonus" readonly>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Overtime</label>
                      <div class="input-group">
                        <input type="number" min="0" class="form-control" 
                               v-model="formData.overtime_hours" @input="calculateAll" placeholder="Hours">
                        <input type="number" min="0" class="form-control" style="max-width: 100px;"
                               v-model="formData.overtime_rate" @input="calculateAll" placeholder="Rate %">
                        <span class="input-group-text">%</span>
                      </div>
                      <small class="text-muted">Amount: {{ formatCurrency(formData.overtime_pay) }}</small>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Transport Allowance</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control" 
                               v-model="formData.transport_allowance" @input="calculateAll">
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Housing Allowance</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control" 
                               v-model="formData.housing_allowance" @input="calculateAll">
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">13th Month Salary</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control" 
                               v-model="formData.thirteenth_month_salary" readonly>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="alert alert-success bg-success bg-opacity-10">
                      <strong>Total Earnings: {{ formatCurrency(formData.gross_salary) }}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Deductions Section -->
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
                      <strong>Total Deductions: {{ formatCurrency(formData.total_deductions) }}</strong>
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

            <!-- Summary Section -->
            <div class="card mb-4 border">
              <div class="card-header bg-primary bg-opacity-10">
                <h5 class="mb-0 text-primary">Salary Summary</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-md-4">
                    <div class="mb-3">
                      <label class="form-label fw-bold">Gross Salary</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control bg-success bg-opacity-10" v-model="formData.gross_salary" readonly>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-4">
                    <div class="mb-3">
                      <label class="form-label fw-bold">Total Deductions</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control bg-danger bg-opacity-10" v-model="formData.total_deductions" readonly>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-4">
                    <div class="mb-3">
                      <label class="form-label fw-bold">Net Salary</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control bg-primary bg-opacity-10 fw-bold" v-model="formData.net_salary" readonly>
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
                        <input type="number" min="0" class="form-control bg-warning bg-opacity-10" v-model="formData.total_cost" readonly>
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
import { ref, onMounted } from 'vue';
import { Modal } from 'bootstrap';
import EmployeeService from '@/services/employee.service';
import DepartmentPositionService from '@/services/departement.service';
import { useNotifications } from '@/composables/useNotifications';

const { showNotification } = useNotifications();
const emit = defineEmits(['save']);

const props = defineProps({
  editMode: {
    type: Boolean,
    default: false
  },
  salaryData: {
    type: Object,
    default: null
  }
});

const PAYROLL_CONFIG = {
  CNPS_EMPLOYEE_RATE: 0.042,    // 4.2%
  CNPS_EMPLOYER_RATE: 0.084,    // 8.4%
  CNPS_MAX_BASE: 274944,        // CNPS ceiling 2024
  SENIORITY_RATE: 0.02,         // 2% per year
  WORKING_HOURS_PER_MONTH: 173.33,
  DAYS_PER_YEAR: 365.25,
  THIRTEENTH_MONTH_DIVIDER: 12  // 1/12 of annual salary
};

const departments = ref([]);
const allEmployees = ref([]);
const filteredEmployees = ref([]);

const formData = ref({
  department_id: '',
  employee_id: '',
  pay_period_date: '',
  years_of_service: 0,
  hire_date: '',
  basic_salary: 0,
  seniority_bonus: 0,
  overtime_hours: 0,
  overtime_rate: 50,
  overtime_pay: 0,
  transport_allowance: 0,
  housing_allowance: 0,
  thirteenth_month_salary: 0,
  employee_social_security: 0,
  employee_health_welfare: 0,
  tax: 0,
  employer_social_security: 0,
  employer_health_welfare: 0,
  gross_salary: 0,
  total_deductions: 0,
  net_salary: 0,
  employer_contribution_total: 0,
  total_cost: 0,
  payslip_date: '',
  payslip_number: '',
  staff_signature: ''
});

onMounted(async () => {
  try {
    const [deptsResponse, empsResponse] = await Promise.all([
      DepartmentPositionService.getAllDepartmentPositions(),
      EmployeeService.getEmployees()
    ]);

    departments.value = deptsResponse.data;
    allEmployees.value = empsResponse.data.map(emp => ({
      ...emp,
      fullName: `${emp.firstName} ${emp.lastName}`,
      hireDate: emp.dateOfCommencementService,
      base_salary: emp.basicSalary || 0
    }));

    console.log('allemployee:', allEmployees)
  } catch (error) {
    showNotification({
      type: 'error',
      title: 'Error',
      message: 'Failed to load initial data'
    });
    console.error('Initialization error:', error);
  }
});

const loadEmployeesByDepartment = () => {
  formData.value.employee_id = '';
  if (!formData.value.department_id) {
    filteredEmployees.value = [];
    return;
  }
  const deptId = Number(formData.value.department_id);
  
  filteredEmployees.value = allEmployees.value.filter(
    emp => Number(emp.departementId) === deptId
  );
};

const loadEmployeeData = () => {
  const employee = allEmployees.value.find(e => e.id === formData.value.employee_id);
  if (employee) {
    formData.value.basic_salary = employee.base_salary;
    formData.value.hire_date = employee.dateOfCommencementService;
    formData.value.years_of_service = calculateYearsOfService(employee.hireDate);
    calculateAll();
  }
};

const calculateYearsOfService = (hireDate) => {
  if (!hireDate) return 0;
  const hire = new Date(hireDate);
  const today = new Date();
  const diffTime = today - hire;
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * PAYROLL_CONFIG.DAYS_PER_YEAR);
  return Math.max(0, Math.floor(diffYears));
};

const calculateAll = () => {
  calculateEarnings();
  calculateDeductions();
  calculateEmployerContributions();
  updateTotals();
};

const calculateEarnings = () => {
  formData.value.seniority_bonus = Math.round(formData.value.basic_salary * 
    PAYROLL_CONFIG.SENIORITY_RATE * formData.value.years_of_service);
  
  const hourlyRate = formData.value.basic_salary / PAYROLL_CONFIG.WORKING_HOURS_PER_MONTH;
  const rateMultiplier = formData.value.overtime_rate / 100;
  formData.value.overtime_pay = Math.round(formData.value.overtime_hours * hourlyRate * (1 + rateMultiplier));
  
  formData.value.thirteenth_month_salary = Math.round(formData.value.basic_salary / 
    PAYROLL_CONFIG.THIRTEENTH_MONTH_DIVIDER);
  
  formData.value.gross_salary = Math.round(
    parseFloat(formData.value.basic_salary || 0) +
    parseFloat(formData.value.seniority_bonus || 0) +
    parseFloat(formData.value.overtime_pay || 0) +
    parseFloat(formData.value.transport_allowance || 0) +
    parseFloat(formData.value.housing_allowance || 0) +
    parseFloat(formData.value.thirteenth_month_salary || 0)
  );
};

const calculateDeductions = () => {
  const cnpsBase = Math.min(formData.value.gross_salary, PAYROLL_CONFIG.CNPS_MAX_BASE);
  formData.value.employee_social_security = Math.round(cnpsBase * PAYROLL_CONFIG.CNPS_EMPLOYEE_RATE);
  
  const taxableIncome = formData.value.gross_salary - formData.value.employee_social_security;
  formData.value.tax = Math.round(calculateMonthlyIRPP(taxableIncome));
  
  formData.value.total_deductions = 
    Math.round(formData.value.employee_social_security) +
    Math.round(formData.value.tax) +
    Math.round(parseFloat(formData.value.employee_health_welfare || 0));
};

const calculateMonthlyIRPP = (monthlyTaxableIncome) => {
  const abatement = Math.min(monthlyTaxableIncome * 0.30, 41667);
  const netTaxable = monthlyTaxableIncome - abatement;

  let tax = 0;

  if (netTaxable <= 166667) {
    tax = 0;
  } else if (netTaxable <= 250000) {
    tax = (netTaxable - 166667) * 0.10;
  } else if (netTaxable <= 416667) {
    tax = (250000 - 166667) * 0.10 + (netTaxable - 250000) * 0.15;
  } else if (netTaxable <= 833333) {
    tax = (250000 - 166667) * 0.10 +
          (416667 - 250000) * 0.15 +
          (netTaxable - 416667) * 0.25;
  } else {
    tax = (250000 - 166667) * 0.10 +
          (416667 - 250000) * 0.15 +
          (833333 - 416667) * 0.25 +
          (netTaxable - 833333) * 0.35;
  }

  const taxWithCAC = tax + tax * 0.10; 
  return Math.round(taxWithCAC);
};


const calculateEmployerContributions = () => {
  const cnpsBase = Math.min(formData.value.gross_salary, PAYROLL_CONFIG.CNPS_MAX_BASE);
  formData.value.employer_social_security = Math.round(cnpsBase * PAYROLL_CONFIG.CNPS_EMPLOYER_RATE);
  
  formData.value.employer_contribution_total = 
    Math.round(formData.value.employer_social_security) +
    Math.round(parseFloat(formData.value.employer_health_welfare || 0));
};

const updateTotals = () => {
  formData.value.net_salary = Math.round(formData.value.gross_salary - formData.value.total_deductions);
  formData.value.total_cost = Math.round(formData.value.gross_salary + formData.value.employer_contribution_total);
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat('fr-FR', { 
    style: 'currency', 
    currency: 'XAF',
    minimumFractionDigits: 0
  }).format(value || 0);
};

const show = () => {
  if (props.editMode && props.salaryData) {
    formData.value = { 
      ...props.salaryData,
      pay_period_date: formatDateForInput(props.salaryData.pay_period_date),
      payslip_date: formatDateForInput(props.salaryData.payslip_date)
    };
  } else {
    resetForm();
  }
  
  const modal = new Modal(document.getElementById('new-employee-salary'));
  modal.show();
};

const formatDateForInput = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];
};

const resetForm = () => {
  formData.value = {
    department_id: '',
    employee_id: '',
    pay_period_date: '',
    years_of_service: 0,
    hire_date: '',
    basic_salary: 0,
    seniority_bonus: 0,
    overtime_hours: 0,
    overtime_rate: 50,
    overtime_pay: 0,
    transport_allowance: 0,
    housing_allowance: 0,
    thirteenth_month_salary: 0,
    employee_social_security: 0,
    employee_health_welfare: 0,
    tax: 0,
    employer_social_security: 0,
    employer_health_welfare: 0,
    gross_salary: 0,
    total_deductions: 0,
    net_salary: 0,
    employer_contribution_total: 0,
    total_cost: 0,
    payslip_date: '',
    payslip_number: '',
    staff_signature: ''
  };
};

const submitForm = async () => {
  try {
    const payload = {
      ...formData.value,
      pay_period_date: formData.value.pay_period_date ? new Date(formData.value.pay_period_date).toISOString() : null,
      payslip_date: formData.value.payslip_date ? new Date(formData.value.payslip_date).toISOString() : null
    };

    emit('save', {
      data: payload,
      isEdit: props.editMode
    });

    showNotification({
      type: 'success',
      title: 'Success',
      message: `Salary ${props.editMode ? 'updated' : 'added'} successfully`
    });

    const modal = Modal.getInstance(document.getElementById('new-employee-salary'));
    modal.hide();
  } catch (error) {
    showNotification({
      type: 'error',
      title: 'Error',
      message: `Failed to ${props.editMode ? 'update' : 'add'} salary record`
    });
    console.error('Submission error:', error);
  }
};

defineExpose({ show });
</script>