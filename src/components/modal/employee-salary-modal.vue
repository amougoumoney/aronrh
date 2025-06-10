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
                      <select v-model="formData.departmentId" class="form-control" @change="loadEmployeesByDepartment">
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
                      <select class="form-control" :disabled="!formData.departmentId" 
                              v-model="formData.employeeId" @change="loadEmployeeData">
                        <option value="" disabled>Select Employee</option>
                        <option v-for="employee in filteredEmployees" :key="employee.id" :value="employee.id">
                          {{ employee.fullName }}
                        </option>
                      </select>
                      <small v-if="!formData.departmentId" class="text-muted">
                        Please select a department first
                      </small>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Pay Period Date</label>
                      <input type="date" class="form-control" v-model="formData.payPeriodDate" />
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Years of Service</label>
                      <input type="number" class="form-control" v-model="formData.yearsOfService" 
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
                               v-model="formData.basicSalary" @input="calculateAll" required readonly>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Seniority Bonus</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control" 
                               v-model="formData.seniorityBonus" readonly>
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
                      <small class="text-muted">Amount: {{ formatCurrency(formData.overtimePay) }}</small>
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
                               v-model="formData.transportAllowance" @input="calculateAll">
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Housing Allowance</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control" 
                               v-model="formData.housingAllowance" @input="calculateAll">
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">13th Month Salary</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control" 
                               v-model="formData.thirteenthMonthSalary" readonly>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="alert alert-success bg-success bg-opacity-10">
                      <strong>Total Earnings: {{ formatCurrency(formData.grossSalary) }}</strong>
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
                        <input type="number" min="0" class="form-control" v-model="formData.employeeSocialSecurity" readonly>
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
                        <input type="number" min="0" class="form-control" v-model="formData.employeeHealthWelfare" @input="calculateAll">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="alert alert-danger bg-danger bg-opacity-10">
                      <strong>Total Deductions: {{ formatCurrency(formData.totalDeductions) }}</strong>
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
                        <input type="number" min="0" class="form-control" v-model="formData.employerSocialSecurity" readonly>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Other Contributions</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control" v-model="formData.employerHealthWelfare" @input="calculateAll">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="alert alert-info bg-info bg-opacity-10">
                      <strong>Total Employer Contribution: {{ formatCurrency(formData.employerContributionTotal) }}</strong>
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
                        <input type="number" min="0" class="form-control bg-success bg-opacity-10" v-model="formData.grossSalary" readonly>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-4">
                    <div class="mb-3">
                      <label class="form-label fw-bold">Total Deductions</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control bg-danger bg-opacity-10" v-model="formData.totalDeductions" readonly>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-4">
                    <div class="mb-3">
                      <label class="form-label fw-bold">Net Salary</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control bg-primary bg-opacity-10 fw-bold" v-model="formData.netSalary" readonly>
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
                        <input type="number" min="0" class="form-control bg-info bg-opacity-10" v-model="formData.employerContributionTotal" readonly>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Total Cost to Company</label>
                      <div class="input-group">
                        <span class="input-group-text">FCFA</span>
                        <input type="number" min="0" class="form-control bg-warning bg-opacity-10" v-model="formData.totalCost" readonly>
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
                      <input type="date" class="form-control" v-model="formData.payslipDate" />
                    </div>
                  </div>
                  <div class="col-12 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Payslip Number</label>
                      <input type="text" class="form-control" v-model="formData.payslipNumber" />
                    </div>
                  </div>
                  <div class="col-12 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Staff Signature</label>
                      <input type="text" class="form-control" v-model="formData.staffSignature" />
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
  departmentId: '',
  employeeId: '',
  payPeriodDate: '',
  yearsOfService: 0,
  hireDate: '',
  basicSalary: 0,
  seniorityBonus: 0,
  overtimeHours: 0,
  overtimeRate: 50,
  overtimePay: 0,
  transportAllowance: 0,
  housingAllowance: 0,
  thirteenthMonthSalary: 0,
  employeeSocialSecurity: 0,
  employeeHealthWelfare: 0,
  tax: 0,
  employerSocialSecurity: 0,
  employerHealthWelfare: 0,
  grossSalary: 0,
  totalDeductions: 0,
  netSalary: 0,
  employerContributionTotal: 0,
  totalCost: 0,
  payslipDate: '',
  payslipNumber: '',
  staffSignature: ''
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
      baseSalary: emp.basicSalary || 0
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
  formData.value.employeeId = '';
  if (!formData.value.departmentId) {
    filteredEmployees.value = [];
    return;
  }
  const deptId = Number(formData.value.departmentId);
  
  filteredEmployees.value = allEmployees.value.filter(
    emp => Number(emp.departementId) === deptId
  );
};

const loadEmployeeData = () => {
  const employee = allEmployees.value.find(e => e.id === formData.value.employeeId);
  if (employee) {
    formData.value.basicSalary = employee.baseSalary;
    formData.value.hireDate = employee.dateOfCommencementService;
    formData.value.yearsOfService = calculateYearsOfService(employee.hireDate);
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
  formData.value.seniorityBonus = Math.round(formData.value.basicSalary * 
    PAYROLL_CONFIG.SENIORITY_RATE * formData.value.yearsOfService);
  
  const hourlyRate = formData.value.basicSalary / PAYROLL_CONFIG.WORKING_HOURS_PER_MONTH;
  const rateMultiplier = formData.value.overtimeRate / 100;
  formData.value.overtimePay = Math.round(formData.value.overtimeHours * hourlyRate * (1 + rateMultiplier));
  
  formData.value.thirteenthMonthSalary = Math.round(formData.value.basicSalary / 
    PAYROLL_CONFIG.THIRTEENTH_MONTH_DIVIDER);
  
  formData.value.grossSalary = Math.round(
    parseFloat(formData.value.basicSalary || 0) +
    parseFloat(formData.value.seniorityBonus || 0) +
    parseFloat(formData.value.overtimePay || 0) +
    parseFloat(formData.value.transportAllowance || 0) +
    parseFloat(formData.value.housingAllowance || 0) +
    parseFloat(formData.value.thirteenthMonthSalary || 0)
  );
};

const calculateDeductions = () => {
  const cnpsBase = Math.min(formData.value.grossSalary, PAYROLL_CONFIG.CNPS_MAX_BASE);
  formData.value.employeeSocialSecurity = Math.round(cnpsBase * PAYROLL_CONFIG.CNPS_EMPLOYEE_RATE);
  
  const taxableIncome = formData.value.grossSalary - formData.value.employeeSocialSecurity;
  formData.value.tax = Math.round(calculateMonthlyIRPP(taxableIncome));
  
  formData.value.totalDeductions = 
    Math.round(formData.value.employeeSocialSecurity) +
    Math.round(formData.value.tax) +
    Math.round(parseFloat(formData.value.employeeHealthWelfare || 0));
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
  const cnpsBase = Math.min(formData.value.grossSalary, PAYROLL_CONFIG.CNPS_MAX_BASE);
  formData.value.employerSocialSecurity = Math.round(cnpsBase * PAYROLL_CONFIG.CNPS_EMPLOYER_RATE);
  
  formData.value.employerContributionTotal = 
    Math.round(formData.value.employerSocialSecurity) +
    Math.round(parseFloat(formData.value.employerHealthWelfare || 0));
};

const updateTotals = () => {
  formData.value.netSalary = Math.round(formData.value.grossSalary - formData.value.totalDeductions);
  formData.value.totalCost = Math.round(formData.value.grossSalary + formData.value.employerContributionTotal);
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
      payPeriodDate: formatDateForInput(props.salaryData.payPeriodDate),
      payslipDate: formatDateForInput(props.salaryData.payslipDate)
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
    departmentId: '',
    employeeId: '',
    payPeriodDate: '',
    yearsOfService: 0,
    hireDate: '',
    basicSalary: 0,
    seniorityBonus: 0,
    overtimeHours: 0,
    overtimeRate: 50,
    overtimePay: 0,
    transportAllowance: 0,
    housingAllowance: 0,
    thirteenthMonthSalary: 0,
    employeeSocialSecurity: 0,
    employeeHealthWelfare: 0,
    tax: 0,
    employerSocialSecurity: 0,
    employerHealthWelfare: 0,
    grossSalary: 0,
    totalDeductions: 0,
    netSalary: 0,
    employerContributionTotal: 0,
    totalCost: 0,
    payslipDate: '',
    payslipNumber: '',
    staffSignature: ''
  };
};

const submitForm = async () => {
  try {
const payload = {
  department_id: formData.value.departmentId,
  employee_id: formData.value.employeeId,
  years_of_service: formData.value.yearsOfService,
  hire_date: formData.value.hireDate,
  basic_salary: formData.value.basicSalary,
  seniority_bonus: formData.value.seniorityBonus, // Correction de casse
  overtime_hours: formData.value.overtimeHours,
  overtime_rate: formData.value.overtimeRate,
  overtime_pay: formData.value.overtimePay,
  transport_allowance: formData.value.transportAllowance,
  housing_allowance: formData.value.housingAllowance,
  thirteenth_month_salary: formData.value.thirteenthMonthSalary,
  employee_social_security: formData.value.employeeSocialSecurity,
  employee_health_welfare: formData.value.employeeHealthWelfare,
  tax: formData.value.tax,
  employer_social_security: formData.value.employerSocialSecurity,
  employer_health_welfare: formData.value.employerHealthWelfare,
  gross_salary: formData.value.grossSalary,
  total_deductions: formData.value.totalDeductions,
  net_salary: formData.value.netSalary,
  employer_contribution_total: formData.value.employerContributionTotal, // Correction du nom
  total_cost: formData.value.totalCost,
  payslip_number: formData.value.payslipNumber,
  staff_signature: formData.value.staffSignature,
  pay_period_date: formData.value.payPeriodDate ? new Date(formData.value.payPeriodDate).toISOString() : null,
  payslip_date: formData.value.payslipDate ? new Date(formData.value.payslipDate).toISOString() : null
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