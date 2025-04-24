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
                        <table class="table table-striped custom-table mb-0 table-hover">
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
                              <td class="text-end action-icons">
                                <button class="btn btn-link" @click="openEditGrantItemModal(item)">
                                  <i class="ti ti-pencil"></i>
                                </button>
                                <button class="btn btn-link" @click="deleteGrantItem(item.id)">
                                  <i class="ti ti-trash"></i>
                                </button>
                                <router-link :to="'/grant/item/details/' + item.id" class="btn btn-link">
                                  <i class="ti ti-eye"></i>
                                </router-link>
                              </td>
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
import GrantService  from "@/services/grant.service";
import { Modal } from "bootstrap";
import GrantItemService from '@/services/grantitem.service';

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
    // Appel de service pour récupérer tous les grants
    const response = await GrantService.getAllGrants(); // Récupérer les grants
    console.log("Réponse des grants :", response);
    const grantsData = Array.isArray(response.data) ? response.data : [];

    // Récupérer tous les grant items
    const response1 = await GrantItemService.getAllGrantItems(); // Récupérer les items de grant
    console.log("Réponse des grant items :", response1);
    const grantItemsData = Array.isArray(response1.data) ? response1.data : [];

    // Mappage des données récupérées pour créer la structure des grants
    grants.value = grantsData.map((grant) => {
      // Filtrer les items associés à ce grant
      const associatedItems = grantItemsData.filter(item => item.grantId === grant.id);

      return {
        id: grant.id,
        code: grant.code,
        name: grant.name,
        amount: grant.amount || calculateTotalAmount(associatedItems), // Calculer le montant total des items associés
        startDate: grant.startDate || new Date().toLocaleDateString(),
        endDate: grant.endDate || new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toLocaleDateString(),
        status: grant.status || "Pending",
        items: associatedItems.map((item) => ({
          id: item.id,
          bg_line: item.bgLine,
          grant_position: item.grantPosition,
          grant_salary: item.grantSalary,
          grant_benefit: item.grantBenefit,
          grant_level_of_effort: item.grantLevelOfEffort,
          grant_position_number: item.grantPositionNumber,
          grant_cost_by_monthly: item.grantCostByMonthly,
          grant_total_cost_by_person: item.grantTotalCostByPerson,
          grant_total_amount: item.grantTotalAmount,
        })),
        expanded: false, // Pour gérer l'affichage des éléments étendus
      };
    });

    // Mise à jour du total des grants pour la pagination
    totalGrants.value = grants.value.length;
  } catch (error) {
    console.error("Erreur lors de la récupération des grants :", error);
  }
};

const calculateTotalAmount = (items) => {
  if (!items || !items.length) return "0";
  const total = items.reduce((sum, item) => sum + Number(item.grantTotalAmount || 0), 0);
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
<style>
  .table-hover tbody tr {
  position: relative; /* Nécessaire pour positionner les actions */
}

.table-hover tbody tr:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Ombre au survol */
  background-color: #f5f5f5; /* Couleur de fond pour le survol */
}

.action-icons {
  display: none; /* Masquer par défaut les icônes d'action */
  position: absolute; /* Positionner les actions */
  right: 10px; /* Espace à droite */
  top: 50%; /* Centrer verticalement */
  transform: translateY(-50%); /* Ajuster pour centrer */
  z-index: 1; /* S'assurer qu'elles sont au-dessus */
}

.table-hover tbody tr:hover .action-icons {
  display: inline-block; /* Afficher les icônes d'action au survol */
}

.btn-update {
  color: blue; /* Couleur pour le bouton Update */
}

.btn-delete {
  color: red; /* Couleur pour le bouton Delete */
}
</style>