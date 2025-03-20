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

<script setup>
import { ref, computed, onMounted } from "vue";
import GrantModal from "@/components/modal/grant-modal.vue";
import GrantUploadModal from "@/components/modal/grant-upload-modal.vue";
import indexBreadcrumb from "@/components/breadcrumb/index-breadcrumb.vue";
import { grantService } from "@/services/grant.service";
import { Modal } from "bootstrap";

const title = ref("Grants");
const text = ref("Grants");
const text1 = ref("Grant List");
const grants = ref([]);
const currentPage = ref(1);
const pageSize = ref(10);
const totalGrants = ref(0);
const searchTerm = ref("");

const totalPages = computed(() => Math.ceil(totalGrants.value / pageSize.value));

const paginatedGrants = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return grants.value.slice(start, end);
});

const fetchGrants = async () => {
  try {
    const response = await grantService.getGrants();
    const grantsData = Array.isArray(response.data)
      ? response.data
      : Array.isArray(response)
        ? response
        : [];

    grants.value = grantsData.map((grant) => ({
      id: grant.id,
      code: grant.code,
      name: grant.name,
      amount: grant.amount || calculateTotalAmount(grant.grant_items),
      startDate: grant.startDate || new Date().toLocaleDateString(),
      endDate:
        grant.endDate ||
        new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toLocaleDateString(),
      status: grant.status || "Pending",
      items: (grant.grant_items || []).map((item) => ({
        id: item.id,
        bg_line: item.bg_line,
        grant_position: item.grant_position,
        grant_salary: item.grant_salary,
        grant_benefit: item.grant_benefit,
        grant_level_of_effort: item.grant_level_of_effort,
        grant_position_number: item.grant_position_number,
        grant_cost_by_monthly: item.grant_cost_by_monthly,
        grant_total_cost_by_person: item.grant_total_cost_by_person,
        grant_total_amount: item.grant_total_amount,
      })),
      expanded: false,
    }));

    totalGrants.value = grants.value.length;
  } catch (error) {
    console.error("Error fetching grants:", error);
  }
};

const calculateTotalAmount = (items) => {
  if (!items || !items.length) return "0";
  const total = items.reduce((sum, item) => sum + Number(item.grant_total_amount || 0), 0);
  return `${total.toFixed(2)}`;
};

const toggleGrant = (grant) => {
  grant.expanded = !grant.expanded;
};

const getStatusClass = (status) => {
  switch (status.toLowerCase()) {
    case "active":
      return "bg-success";
    case "pending":
      return "bg-warning";
    case "completed":
      return "bg-info";
    case "cancelled":
      return "bg-danger";
    default:
      return "bg-secondary";
  }
};

const openAddGrantModal = (grantModalRef) => {
  grantModalRef.value?.resetForm();
  new Modal(document.getElementById("grant_modal")).show();
};

const openGrantUploadModal = () => {
  new Modal(document.getElementById("grantUploadModal")).show();
};

const openEditGrantModal = (grant, grantModalRef) => {
  const grantData = {
    grantName: grant.name,
    grantCode: grant.code || "",
    grantBGLine: grant.bgLine || "",
    grantPosition: grant.position || "",
    grantSalary: grant.salary || null,
    grantBenefit: grant.benefit || null,
    grantLevelOfEffort: grant.levelOfEffort || null,
    grantPositionNumber: grant.positionNumber || "",
    grantCostMonthly: grant.costMonthly || null,
    grantTotalAmountYear: grant.totalAmountYear || null,
    grantTotalCostByPerson: grant.totalCostByPerson || null,
    grantPositionId: grant.positionId || "",
  };
  grantModalRef.value?.setEditData(grantData);
  new Modal(document.getElementById("grant_modal")).show();
};

const handleGrantSubmit = (formData) => {
  console.log("Submitted grant data:", formData);
  if (formData.id) {
    const index = grants.value.findIndex((g) => g.id === formData.id);
    if (index !== -1) {
      grants.value[index] = { ...grants.value[index], ...formData };
    }
  } else {
    grants.value.push({
      id: grants.value.length + 1,
      name: formData.grantName,
      amount: `$${formData.grantTotalAmountYear}`,
      startDate: new Date().toLocaleDateString(),
      endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toLocaleDateString(),
      status: "Pending",
    });
  }
};

const deleteGrant = (id) => {
  console.log("Delete grant:", id);
  grants.value = grants.value.filter((grant) => grant.id !== id);
};

onMounted(() => {
  fetchGrants();
});
</script>
