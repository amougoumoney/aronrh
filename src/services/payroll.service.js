import { apiService } from '@/services/api.service';
import { API_ENDPOINTS } from '@/config/api.config';

class PayrollService {
  // Récupérer tous les enregistrements de paie
  async getAllPayrolls() {
    return await apiService.get(API_ENDPOINTS.PAYROLL.LIST);
  }

  // Créer un nouvel enregistrement de paie
  async createPayroll(payrollData) {
    const formattedData = this.formatPayrollData(payrollData);
    return await apiService.post(API_ENDPOINTS.PAYROLL.CREATE, formattedData);
  }

  // Mettre à jour un enregistrement de paie existant
  async updatePayroll(id, payrollData) {
    const endpoint = API_ENDPOINTS.PAYROLL.UPDATE.replace(':id', id);
    const formattedData = this.formatPayrollData(payrollData);
    return await apiService.put(endpoint, formattedData);
  }

  // Supprimer un enregistrement de paie
  async deletePayroll(id) {
    const endpoint = API_ENDPOINTS.PAYROLL.DELETE.replace(':id', id);
    return await apiService.delete(endpoint);
  }

  // Formater les données de paie
  formatPayrollData(data) {
    return {
    department_id: data.department_id,
    employee_id: data.employee_id,
    pay_period_date: data.pay_period_date,
    years_of_service: data.years_of_service,
    basic_salary: data.basic_salary,
    seniority_bonus: data.seniority_bonus,
    overtime_hours: data.overtime_hours,
    overtime_rate: data.overtime_rate,
    overtime_pay: data.overtime_pay,
    transport_allowance: data.transport_allowance,
    housing_allowance: data.housing_allowance,
    thirteenth_month_salary: data.thirteenth_month_salary,
    employee_social_security: data.employee_social_security,
    employee_health_welfare: data.employee_health_welfare,
    tax: data.tax,
    employer_social_security: data.employer_social_security,
    employer_health_welfare: data.employee_health_welfare,
    gross_salary: data.gross_salary,
    total_deductions: data.total_deductions,
    net_salary: data.net_salary,
    employer_contribution_total: data.employer_contribution_total,
    total_cost: data.total_cost,
    payslip_date: data.payslip_date,
    payslip_number: data.payslip_number,
    staff_signature: data.staff_signature
    };
  }
}

export const payrollService = new PayrollService();
export default payrollService;