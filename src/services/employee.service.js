import { apiService } from './api.service';
import { API_ENDPOINTS } from '../config/api.config';

class EmployeeService {
    // Get all employees
    async getEmployees() {
        return await apiService.get(API_ENDPOINTS.EMPLOYEE.LIST);
    }

    // Get employee details
    async getEmployeeDetails(id) {
        const endpoint = API_ENDPOINTS.EMPLOYEE.DETAILS.replace(':id', id);
        return await apiService.get(endpoint);
    }

    // Create employee
    async createEmployee(data) {
        const formattedData = this.formatEmployeeData(data);
        return await apiService.post(API_ENDPOINTS.EMPLOYEE.CREATE, formattedData);
    }

    // Update employee
    async updateEmployee(id, data) {
        const endpoint = API_ENDPOINTS.EMPLOYEE.UPDATE.replace(':id', id);
        const formattedData = this.formatEmployeeData(data);
        return await apiService.put(endpoint, formattedData);
    }

    // Delete employee
    async deleteEmployee(id) {
        const endpoint = API_ENDPOINTS.EMPLOYEE.DELETE.replace(':id', id);
        return await apiService.delete(endpoint);
    }

    // Search employees
    async searchEmployees(searchTerm) {
        const endpoint = `${API_ENDPOINTS.EMPLOYEE.SEARCH}?search=${encodeURIComponent(searchTerm)}`;
        return await apiService.get(endpoint);
    }

    // Helper method to format employee data according to API schema
    formatEmployeeData(data) {
        return {
            staff_id: data.staff_id,
            subsidiary: data.subsidiary || 'SMRU',
            first_name: data.first_name,
            middle_name: data.middle_name,
            last_name: data.last_name,
            gender: data.gender,
            date_of_birth: data.date_of_birth,
            status: data.status || 'active',
            religion: data.religion,
            birth_place: data.birth_place,
            identification_number: data.identification_number,
            passport_number: data.passport_number,
            bank_name: data.bank_name,
            bank_branch: data.bank_branch,
            bank_account_name: data.bank_account_name,
            bank_account_number: data.bank_account_number,
            office_phone: data.office_phone,
            mobile_phone: data.mobile_phone,
            height: data.height,
            weight: data.weight,
            permanent_address: data.permanent_address,
            current_address: data.current_address,
            stay_with: data.stay_with,
            military_status: data.military_status || false,
            marital_status: data.marital_status,
            spouse_name: data.spouse_name,
            spouse_occupation: data.spouse_occupation,
            father_name: data.father_name,
            father_occupation: data.father_occupation,
            mother_name: data.mother_name,
            mother_occupation: data.mother_occupation,
            driver_license_number: data.driver_license_number
        };
    }
}

export const employeeService = new EmployeeService(); 