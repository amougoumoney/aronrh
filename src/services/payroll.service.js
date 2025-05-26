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
      id: data.id,
      department_id: data.department_id,
      employee_id: data.employee_id,
      pay_period_date: data.pay_period_date,
      payslip_date: data.payslip_date || null,
      basic_salary: data.basic_salary,
      salary_by_fte: data.salary_by_fte,
      compensation_refund: data.compensation_refund,
      overtime_hours: data.overtime_hours,
      transport_allowance: data.transport_allowance,
      housing_allowance: data.housing_allowance,
      thirteen_month_salary: data.thirteen_month_salary,
      employee_social_security: data.employee_social_security,
      employee_health_welfare: data.employee_health_welfare,
      tax: data.tax,
      pvd: data.pvd,
      saving_fund: data.saving_fund,
      employer_social_security: data.employer_social_security,
      employer_health_welfare: data.employer_health_welfare,
      grand_total_income: data.grand_total_income,
      grand_total_deduction: data.grand_total_deduction,
      net_paid: data.net_paid,
      employer_contribution_total: data.employer_contribution_total,
      two_sides: data.two_sides,
      payslip_number: data.payslip_number || null,
      staff_signature: data.staff_signature || null,
      created_at: data.created_at || null,
      updated_at: data.updated_at || null,
      created_by: data.created_by || null,
      updated_by: data.updated_by || null,
    };
  }
}

export const payrollService = new PayrollService();
export default payrollService;