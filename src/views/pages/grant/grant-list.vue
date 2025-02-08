<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <div class="page-wrapper">
    <div class="content">
      <!-- Breadcrumb -->
      <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <breadcrumb :title="title" :text="text" :text1="text1" />
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="me-2 mb-2">
            <button class="btn btn-primary" @click="openAddGrantModal">
              <i class="ti ti-plus me-1"></i>Create Grant
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
                  <th>Grant Name</th>
                  <th>Amount</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Status</th>
                  <th class="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="grant in grants" :key="grant.id">
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
                      <a href="javascript:void(0);" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="ti ti-dots-vertical"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end">
                        <router-link :to="'/grant/details/' + grant.id" class="dropdown-item">
                          <i class="ti ti-eye me-2"></i>View
                        </router-link>
                        <a href="javascript:void(0);" class="dropdown-item" @click="openEditGrantModal(grant)">
                          <i class="ti ti-pencil me-2"></i>Edit
                        </a>
                        <a href="javascript:void(0);" class="dropdown-item" @click="deleteGrant(grant.id)">
                          <i class="ti ti-trash me-2"></i>Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
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
</template>

<script>
import GrantModal from '@/components/modal/grant-modal.vue';
import { Modal } from 'bootstrap';

export default {
  name: 'GrantList',
  components: {
    GrantModal
  },
  data() {
    return {
      title: 'Grants',
      text: 'Grant',
      text1: 'Grant List',
      grants: [
        {
          id: 1,
          name: 'Research Grant 2024',
          amount: '$50,000',
          startDate: '01/01/2024',
          endDate: '12/31/2024',
          status: 'Active'
        },
        {
          id: 2,
          name: 'Innovation Fund',
          amount: '$75,000',
          startDate: '03/01/2024',
          endDate: '02/28/2025',
          status: 'Pending'
        }
      ]
    };
  },
  methods: {
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