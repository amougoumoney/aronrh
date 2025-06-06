<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Breadcrumb -->
      <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div>
          <h4 class="mb-0">Grants</h4>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Dashboard</a></li>
              <li class="breadcrumb-item active">Grant List</li>
            </ol>
          </nav>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="me-2 mb-2">
            <button class="btn btn-primary" @click="openAddGrantModal">
              <i class="ti ti-plus me-1"></i>Create Grant
            </button>
          </div>
        </div>
      </div>

      <!-- Grant List Table -->
      <div class="card">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-striped custom-table mb-0">
              <thead>
                <tr>
                  <th style="width: 40px;"></th>
                  <th>Code</th>
                  <th>Nom</th>
                  <th>Montant</th>
                  <th>Date début</th>
                  <th>Date fin</th>
                  <th>Statut</th>
                  <th class="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="grant in grants" :key="grant.id">
                  <tr>
                    <td>
                      <button class="btn btn-link btn-sm" @click="toggleGrant(grant)">
                        <i :class="grant.expanded ? 'ti ti-chevron-down' : 'ti ti-chevron-right'"></i>
                      </button>
                    </td>
                    <td>{{ grant.code }}</td>
                    <td>{{ grant.name }}</td>
                    <td>{{ formatCurrency(grant.amount) }}</td>
                    <td>{{ formatDate(grant.startDate) }}</td>
                    <td>{{ formatDate(grant.endDate) }}</td>
                    <td>
                      <span :class="'badge ' + getStatusClass(grant.status)">
                        {{ formatStatus(grant.status) }}
                      </span>
                    </td>
                    <td class="text-end">
                      <div class="dropdown dropdown-action">
                        <a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="ti ti-dots-vertical"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a href="#" class="dropdown-item" @click.prevent="openEditGrantModal(grant)">
                            <i class="ti ti-pencil me-2"></i>Edit
                          </a>
                          <a href="#" class="dropdown-item" @click.prevent="confirmDeleteGrant(grant)">
                            <i class="ti ti-trash me-2"></i>Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <!-- Expanded row for grant items -->
                  <tr v-if="grant.expanded">
                    <td colspan="8" class="p-0">
                      <div class="p-2 bg-light">
                        <table class="table table-striped custom-table mb-0 table-hover">
                          <thead>
                            <tr>
                              <th>Ligne BG</th>
                              <th>Position</th>
                              <th>Salaire</th>
                              <th>Avantage</th>
                              <th>Effort</th>
                              <th>Numéro Position</th>
                              <th>Coût Mensuel</th>
                              <th>Coût Total</th>
                              <th>Montant Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in grant.items" :key="item.id">
                              <td>{{ item.bg_line }}</td>
                              <td>{{ item.grant_position }}</td>
                              <td>{{ formatCurrency(item.grant_salary) }}</td>
                              <td>{{ formatCurrency(item.grant_benefit) }}</td>
                              <td>{{ item.grant_level_of_effort }}%</td>
                              <td>{{ item.grant_position_number }}</td> 
                              <td>{{ formatCurrency(item.grant_cost_by_monthly) }}</td>
                              <td>{{ formatCurrency(item.grant_total_cost_by_person) }}</td>
                              <td>{{ formatCurrency(item.grant_total_amount) }}</td>
                              <td class="text-end">
                                <button class="btn btn-link" @click="openEditGrantItemModal(grant, item)">
                                  <i class="ti ti-pencil"></i>
                                </button>
                                <button class="btn btn-link text-danger" @click="confirmDeleteGrantItem(item.id)">
                                  <i class="ti ti-trash"></i>
                                </button>
                              </td>
                            </tr>
                            <tr v-if="grant.items && grant.items.length === 0">
                              <td colspan="10" class="text-center text-muted">Aucun item associé à ce grant</td>
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
    </div>

    <!-- Grant Modal -->
    <grant-modal ref="grantModal" 
                @submit="handleGrantSubmit"
                @item-created="handleItemCreated" 
                @refresh="handleRefresh"/>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import GrantModal from "@/components/modal/grant-modal.vue";
import GrantService from "@/services/grant.service";
import GrantItemService from "@/services/grantitem.service";

const grants = ref([]);
const grantModal = ref(null);
const totalGrants = ref(0);

const fetchAllData = async () => {
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
        status: grant.status,
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

const handleGrantSubmit = (event) => {
  if (!event) return;

  switch (event.type) {
    case 'UPDATE_GRANT':
      const index = grants.value.findIndex(g => g.id === event.data.id);
      if (index !== -1) {
        grants.value[index] = { 
          ...grants.value[index], 
          ...event.data 
        };
      }
      break;
    
    case 'CREATE_GRANT':
      grants.value.push({
        ...event.data,
        expanded: false,
        items: []
      });
      break;
  }
};

const handleRefresh = async ({ type, data }) => {
  switch(type) {
    case 'GRANT_CREATED':
    case 'GRANT_UPDATED':
      await fetchGrants(); // Rechargez la liste des grants
      break;
    case 'GRANT_ITEM_CREATED':
    case 'GRANT_ITEM_UPDATED':
      await fetchGrantItems(); // Rechargez la liste des items
      break;
  }
};

const fetchGrants = async () => {
  const grantsList = ref([])
  try {
    const response = await GrantService.getAllGrants();
    grantsList.value = response.data;
  } catch (error) {
    console.error("Erreur lors du chargement des grants", error);
  }
};

const fetchGrantItems = async () => {
  const grantsItemsList = ref([])
  try {
    const response = await GrantItemService.getAllGrantItems();
    grantsItemsList.value = response.data;
  } catch (error) {
    console.error("Erreur lors du chargement des grants", error);
  }
};


const handleItemCreated = (newItem) => {

    console.log('New item received:', newItem.value); // Debug
  const grantId = newItem.grant_id || newItem.grantId; // Essayez les deux possibilités
  if (!grantId) {
    console.error('Grant ID is missing in the new item');
    return;
  }
  const grantIndex = grants.value.findIndex(g => g.id === newItem.grantId);
  if (grantIndex !== -1) {
    if (!grants.value[grantIndex].items) {
      grants.value[grantIndex].items = [];
    }
    
    const existingIndex = grants.value[grantIndex].items.findIndex(i => i.id === newItem.id);
    if (existingIndex !== -1) {
      grants.value[grantIndex].items[existingIndex] = newItem;
    } else {
      grants.value[grantIndex].items.push(newItem);
    }
  }
};

const openAddGrantModal = () => {
  grantModal.value?.openModal();
};

const openEditGrantModal = (grant) => {
  grantModal.value?.setEditData(grant);
  grantModal.value?.openModal();
};

const openAddGrantItemModal = (grant) => {
  grantModal.value?.setEditData(grant);
  grantModal.value?.openModal();
};

const openEditGrantItemModal = (grant, item) => {
  grantModal.value?.setEditData(grant, item);
  grantModal.value?.openModal();
};

const confirmDeleteGrant = (grant) => {
  if (confirm(`Êtes-vous sûr de vouloir supprimer le grant "${grant.name}" et tous ses items associés ? Cette action est irréversible.`)) {
    deleteGrant(grant);
  }
};

const deleteGrant = async (grant) => {
  try {
    // Supprimer d'abord tous les items associés
    if (grant.items && grant.items.length > 0) {
      await Promise.all(
        grant.items.map(item => 
          GrantItemService.deleteGrantItem(item.id)
        )
      );
    }
    
    // Puis supprimer le grant
    await GrantService.deleteGrant(grant.id);
    
    // Mettre à jour la liste
    grants.value = grants.value.filter(g => g.id !== grant.id);
  } catch (error) {
    console.error("Erreur lors de la suppression:", error);
    alert('Erreur lors de la suppression du grant');
  }
};

const confirmDeleteGrantItem = (id) => {
  if (confirm('Êtes-vous sûr de vouloir supprimer cet item ?')) {
    deleteGrantItem(id);
  }
};

const deleteGrantItem = async (id) => {
  try {
    await GrantItemService.deleteGrantItem(id);
    for (const grant of grants.value) {
      if (grant.items) {
        grant.items = grant.items.filter(item => item.id !== id);
      }
    }
  } catch (error) {
    console.error("Erreur lors de la suppression de l'item:", error);
    alert('Erreur lors de la suppression de l\'item');
  }
};

const toggleGrant = (grant) => {
  grant.expanded = !grant.expanded;
};

const getStatusClass = (status) => {
  if (typeof status === 'boolean') {
    return status ? 'bg-success' : 'bg-danger';
  }
  
  // Gestion pour les cas où status serait une string (au cas où)
  const statusStr = String(status || '').toLowerCase();
  switch (statusStr) {
    case 'active':
    case 'true':
      return 'bg-success';
    case 'Inactive':
    case 'false':
      return 'bg-danger';
    case 'pending':
      return 'bg-warning';
    case 'completed':
      return 'bg-info';
    default:
      return 'bg-secondary';
  }
};

const formatStatus = (status) => {
  if (typeof status === 'boolean') {
    return status ? 'Active' : 'Inactive';
  }
  
  // Pour les chaînes (au cas où)
  const statusStr = String(status || '').toLowerCase();
  switch (statusStr) {
    case 'active':
    case 'true':
      return 'Active';
    case 'inactive':
    case 'false':
      return 'Inactive';
    default:
      return status || 'Inactive';
  }
};

const formatDate = (dateString) => {
  if (!dateString) return '-';
  return new Date(dateString).toLocaleDateString('fr-FR');
};

const formatCurrency = (value) => {
  if (!value) return '0.00';
  return parseFloat(value).toLocaleString('fr-FR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

onMounted(() => {
  fetchAllData();
});
</script>

<style>
/* Styles existants */
</style>

<style>
/* Vos styles existants */
.table-hover tbody tr {
  position: relative;
}

.table-hover tbody tr:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #f5f5f5;
}

.action-icons {
  display: none;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.table-hover tbody tr:hover .action-icons {
  display: inline-block;
}

.btn-link {
  padding: 0.25rem 0.5rem;
}
</style>