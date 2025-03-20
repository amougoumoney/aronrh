<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <div class="page-wrapper">
    <div class="content">
      <!-- Breadcrumb -->
      <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <index-breadcrumb :title="title" :text="text" :text1="text1" />
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="me-2 mb-2">
            <button class="btn btn-primary" @click="openAddGrantModal">
              <i class="ti ti-plus me-1"></i>{{ $t('CreateGrant') }}
            </button>
          </div>
          <div class="me-2 mb-2">
            <!-- Create Grant Upload Modal button -->
            <button class="btn btn-primary" @click="openGrantUploadModal">
              <i class="ti ti-upload me-1"></i>{{ $t('UploadGrant') }}
            </button>
          </div>
        </div>
      </div>
      <!-- /Breadcrumb -->

      <!-- Grant List Table -->
      <div class="card">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-striped custom-table mb-0">
              <thead>
                <tr>
                  <!-- Add a column for the expand/collapse button -->
                  <th style="width: 40px;"></th>
                  <th>{{ $t('GrantCode') }}</th>
                  <th>{{ $t('GrantName') }}</th>
                  <th>{{ $t('Amount') }}</th>
                  <th>{{ $t('StartDate') }}</th>
                  <th>{{ $t('EndDate') }}</th>
                  <th>{{ $t('Status') }}</th>
                  <th class="text-end">{{ $t('Actions') }}</th>
                </tr>
              </thead>
              <tbody>
                <!-- Loop over each grant -->
                <template v-for="grant in grants" :key="grant.id">
                  <tr>
                    <!-- Expand/collapse toggle button -->
                    <td>
                      <button class="btn btn-link btn-sm" @click="toggleGrant(grant)">
                        <i :class="grant.expanded ? 'ti ti-chevron-down' : 'ti ti-chevron-right'"></i>
                      </button>
                    </td>
                    <td>{{ grant.code }}</td>
                    <td>{{ grant.name }}</td>
                    <td>{{ grant.amount }}</td>
                    <td>{{ grant.startDate }}</td>
                    <td>{{ grant.endDate }}</td>
                    <td>
                      <span :class="'badge ' + getStatusClass(grant.status)">
                        {{ grant.status }}
                      </span>
                    </td>
                    <td class="text-end">
                      <div class="dropdown dropdown-action">
                        <a href="javascript:void(0);" class="action-icon dropdown-toggle" data-bs-toggle="dropdown"
                          aria-expanded="false">
                          <i class="ti ti-dots-vertical"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <router-link :to="'/grant/details/' + grant.id" class="dropdown-item">
                            <i class="ti ti-eye me-2"></i>{{ $t('View') }}
                          </router-link>
                          <a href="javascript:void(0);" class="dropdown-item" @click="openEditGrantModal(grant)">
                            <i class="ti ti-pencil me-2"></i>{{ $t('Edit') }}
                          </a>
                          <a href="javascript:void(0);" class="dropdown-item" @click="deleteGrant(grant.id)">
                            <i class="ti ti-trash me-2"></i>{{ $t('Delete') }}
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <!-- Expandable sub-row for grant items -->
                  <tr v-if="grant.expanded">
                    <td colspan="7" class="p-0">
                      <div class="p-2 bg-light">
                        <!-- Sub-table for grant items -->
                        <table class="table table-sm mb-0">
                          <thead>
                            <tr>
                              <th>{{ $t('BGLine') }}</th>
                              <th>{{ $t('Position') }}</th>
                              <th>{{ $t('Salary') }}</th>
                              <th>{{ $t('Benefit') }}</th>
                              <th>{{ $t('Effort') }}</th>
                              <th>{{ $t('PositionNumber') }}</th>
                              <th>{{ $t('CostMonthly') }}</th>
                              <th>{{ $t('TotalCostByPerson') }}</th>
                              <th>{{ $t('BenefitFTE') }}</th>
                              <th>{{ $t('PositionID') }}</th>
                              <th>{{ $t('TotalAmount') }}</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in grant.items" :key="item.id">
                              <td>{{ item.bg_line }}</td>
                              <td>{{ item.grant_position }}</td>
                              <td>{{ item.grant_salary }}</td>
                              <td>{{ item.grant_benefit }}</td>
                              <td>{{ item.grant_level_of_effort }}</td>
                              <td>{{ item.grant_position_number }}</td>
                              <td>{{ item.grant_cost_by_monthly }}</td>
                              <td>{{ item.grant_total_cost_by_person }}</td>
                              <td>{{ item.grant_benefit_fte }}</td>
                              <td>{{ item.position_id }}</td>
                              <td>{{ item.grant_total_amount }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- /Grant List Table -->
    </div>
  </div>

  <!-- Grant Modal -->
  <grant-modal ref="grantModal" @submit="handleGrantSubmit" />
  <!-- Grant Upload Modal -->
  <grant-upload-modal ref="grantUploadModal" @submit="handleGrantUploadSubmit" />
</template>

<script>
import GrantModal from '@/components/modal/grant-modal.vue';
import GrantUploadModal from '@/components/modal/grant-upload-modal.vue';
import { Modal } from 'bootstrap';
import indexBreadcrumb from '@/components/breadcrumb/index-breadcrumb.vue';
import { grantService } from '@/services/grant.service';

export default {
  name: 'GrantList',
  components: {
    GrantModal,
    GrantUploadModal,
    indexBreadcrumb
  },
  data() {
    return {
      title: 'Grants',
      text: 'Grants',
      text1: 'Grant List',
      grants: [],
      currentPage: 1,
      pageSize: 10,
      totalGrants: 0,
      searchTerm: ''
    };
  },

  computed: {
    totalPages() {
      return Math.ceil(this.totalGrants / this.pageSize);
    },
    paginatedGrants() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.grants.slice(start, end);
    }
  },

  mounted() {
    this.fetchGrants();
  },
  methods: {
    async fetchGrants() {
      try {
        const response = await grantService.getGrants();
        // Check if response.data exists and is an array; if not, assume response is the array
        const grantsData = Array.isArray(response.data)
          ? response.data
          : Array.isArray(response)
            ? response
            : [];

        this.grants = grantsData.map(grant => ({
          id: grant.id,
          code: grant.code,
          name: grant.name,
          amount: grant.amount || this.calculateTotalAmount(grant.grant_items),
          startDate: grant.startDate || new Date().toLocaleDateString(),
          endDate:
            grant.endDate ||
            new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toLocaleDateString(),
          status: grant.status || 'Pending',
          items: (grant.grant_items || []).map(item => ({
            id: item.id,
            bg_line: item.bg_line,
            grant_position: item.grant_position,
            grant_salary: item.grant_salary,
            grant_benefit: item.grant_benefit,
            grant_level_of_effort: item.grant_level_of_effort,
            grant_position_number: item.grant_position_number,
            grant_cost_by_monthly: item.grant_cost_by_monthly,
            grant_total_cost_by_person: item.grant_total_cost_by_person,
            grant_total_amount: item.grant_total_amount
          })),
          expanded: false
        }));

        this.totalGrants = this.grants.length;
      } catch (error) {
        console.error('Error fetching grants:', error);
      }
    },

    calculateTotalAmount(items) {
      if (!items || !items.length) return '0';
      const total = items.reduce((sum, item) => sum + Number(item.grant_total_amount || 0), 0);
      return `${total.toFixed(2)}`;
    },


    toggleGrant(grant) {
      // Toggle the expanded property for the selected grant.
      grant.expanded = !grant.expanded;
    },

    getStatusClass(status) {
      switch (status.toLowerCase()) {
        case 'active':
          return 'bg-success';
        case 'pending':
          return 'bg-warning';
        case 'completed':
          return 'bg-info';
        case 'cancelled':
          return 'bg-danger';
        default:
          return 'bg-secondary';
      }
    },
    openAddGrantModal() {
      this.$refs.grantModal.resetForm();
      new Modal(document.getElementById('grant_modal')).show();
    },

    openGrantUploadModal() {

      new Modal(document.getElementById('grantUploadModal')).show();
    },

    openEditGrantModal(grant) {
      const grantData = {
        grantName: grant.name,
        grantCode: grant.code || '',
        grantBGLine: grant.bgLine || '',
        grantPosition: grant.position || '',
        grantSalary: grant.salary || null,
        grantBenefit: grant.benefit || null,
        grantLevelOfEffort: grant.levelOfEffort || null,
        grantPositionNumber: grant.positionNumber || '',
        grantCostMonthly: grant.costMonthly || null,
        grantTotalAmountYear: grant.totalAmountYear || null,
        grantTotalCostByPerson: grant.totalCostByPerson || null,
        grantPositionId: grant.positionId || ''
      };
      this.$refs.grantModal.setEditData(grantData);
      new Modal(document.getElementById('grant_modal')).show();
    },
    handleGrantSubmit(formData) {
      // Handle the submitted form data
      console.log('Submitted grant data:', formData);
      // TODO: Add API call to save/update grant data
      // For now, just add to the local array
      if (formData.id) {
        // Update existing grant
        const index = this.grants.findIndex(g => g.id === formData.id);
        if (index !== -1) {
          this.grants[index] = { ...this.grants[index], ...formData };
        }
      } else {
        // Add new grant
        this.grants.push({
          id: this.grants.length + 1,
          name: formData.grantName,
          amount: `$${formData.grantTotalAmountYear}`,
          startDate: new Date().toLocaleDateString(),
          endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toLocaleDateString(),
          status: 'Pending'
        });
      }
    },
    deleteGrant(id) {
      // TODO: Add confirmation dialog and API call
      console.log('Delete grant:', id);
      this.grants = this.grants.filter(grant => grant.id !== id);
    }
  }
};
</script>