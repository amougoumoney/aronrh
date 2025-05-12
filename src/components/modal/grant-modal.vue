<template>
  <div class="modal custom-modal fade" id="grant_modal" role="dialog" data-bs-backdrop="static">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ isEditing ? 'Modifier le Grant' : 'Ajouter un Grant' }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="resetForm"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="handleSubmit">
            <div class="contact-grids-tab">
              <ul class="nav nav-underline" id="grantTabs" role="tablist">
                <li class="nav-item" role="presentation">
                  <button 
                    class="nav-link active" 
                    data-bs-toggle="tab" 
                    data-bs-target="#grant-info" 
                    type="button"
                    @click="activeTab = 'grant'"
                  >
                    Grant
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button 
                    class="nav-link" 
                    data-bs-toggle="tab" 
                    data-bs-target="#grant-items" 
                    type="button"
                    @click="activeTab = 'items'"
                    :disabled="grants.length === 0"
                  >
                    Grant Items
                  </button>
                </li>
              </ul>
            </div>

            <div class="tab-content p-3">
              <!-- Onglet Informations sur le Grant -->
              <div class="tab-pane fade show active" id="grant-info">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label class="form-label">Nom du Grant <span class="text-danger">*</span></label>
                    <input v-model="formData.name" type="text" class="form-control" @input="validateForm">
                  </div>
                  <div class="col-md-6 mb-3">
                    <label class="form-label">Code du Grant <span class="text-danger">*</span></label>
                    <input v-model="formData.code" type="text" class="form-control" @input="validateForm">
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 mb-3">
                    <label class="form-label">Description</label>
                    <textarea v-model="formData.description" class="form-control"></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label class="form-label">Date de début</label>
                    <input v-model="formData.start_date" type="date" class="form-control">
                  </div> 
                  <div class="col-md-6 mb-3">
                    <label class="form-label">Date de Fin</label>
                    <input v-model="formData.end_date" type="date" class="form-control">
                  </div> 
                </div>
              </div>
              
              <!-- Onglet Éléments du Grant -->
              <div class="tab-pane fade" id="grant-items">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label class="form-label">{{$t('BGLine')}}</label>
                    <input type="text" v-model="itemData.bg_line" class="form-control">
                  </div>
                  <div class="col-md-6 mb-3">
                    <label class="form-label">{{$t('GrantPosition')}}</label>
                    <input type="text" v-model="itemData.grant_position" class="form-control">
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label class="form-label">{{$t('GrantSalary')}}</label>
                    <input type="number" v-model="itemData.grant_salary" class="form-control">
                  </div>
                  <div class="col-md-6 mb-3">
                    <label class="form-label">{{$t('GrantBenefit')}}</label>
                    <input type="number" v-model="itemData.grant_benefit" class="form-control">
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label class="form-label">{{$t('GrantLevelofEffort')}}</label>
                    <input type="number" v-model="itemData.grant_level_of_effort" class="form-control">
                  </div>
                  <div class="col-md-6 mb-3">
                    <label class="form-label">{{$t('GrantPositionNumber')}}</label>
                    <input type="number" v-model="itemData.grant_position_number" class="form-control">
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 mb-3">
                    <label class="form-label">{{$t('GrantCostbyMonthly')}}</label>
                    <input type="number" v-model="itemData.grant_cost_by_monthly" class="form-control">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label class="form-label">{{$t('GrantTotalCostbyPerson')}}</label>
                    <input type="number" v-model="itemData.grant_total_cost_by_person" class="form-control">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label class="form-label">{{$t('GrantID')}}</label>
                    <select v-model="itemData.grant_id" class="form-control">
                      <option v-for="grant in grants" :key="grant.id" :value="grant.id">
                        {{ grant.name }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label class="form-label">{{$t('PositionID')}}</label>
                    <select v-model="itemData.position_id" class="form-control">
                      <option v-for="position in positions" :key="position.id" :value="position.id">
                        {{ position.name }}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label class="form-label">{{$t('GrantTotalAmount')}}</label>
                    <input type="number" v-model="itemData.grant_total_amount" class="form-control">
                  </div>
                </div>
              </div>
            </div>

            <div class="submit-section text-end mt-4">
              <button 
                type="submit" 
                class="btn btn-primary"
                :disabled="activeTab === 'grant' ? !isFormValid : !itemData.grant_id"
              >
                <i class="fas fa-save me-2"></i>
                {{ 
                  isEditing 
                    ? (activeTab === 'grant' ? 'Mettre à jour le Grant' : 'Mettre à jour les Items') 
                    : (activeTab === 'grant' ? 'Enregistrer le Grant' : 'Enregistrer les Items') 
                }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineEmits, defineExpose, watch } from 'vue';
import GrantItemService from '@/services/grantitem.service';
import GrantService from '@/services/grant.service';
import { useNotifications } from '@/composables/useNotifications';
import { Modal } from 'bootstrap';

const emit = defineEmits(['submit', 'refresh']);
const { showNotification } = useNotifications();

const isEditing = ref(false);
const activeTab = ref('grant');
const isFormValid = ref(false);

const formData = ref({
  id: null,
  name: '',
  code: '',
  description: '',
  start_date: '',
  end_date: '',
});

const itemData = ref({
  id: null,
  bg_line: '',
  grant_position: '',
  grant_salary: null,
  grant_benefit: null,
  grant_level_of_effort: null,
  grant_position_number: null,
  grant_cost_by_monthly: null,
  grant_total_cost_by_person: null,
  grant_id: null,
  position_id: null,
  grant_total_amount: null,
});

const grants = ref([]);
const positions = ref([]);
let grantModal = null;

onMounted(() => {
  grantModal = new Modal(document.getElementById('grant_modal'));
  fetchGrants();
  fetchPositions();
  validateForm();
});

const fetchGrants = async () => {
  try {
    const response = await GrantService.getAllGrants();
    grants.value = response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des grants :', error);
    showNotification({
      type: 'error',
      title: 'Erreur',
      message: 'Impossible de charger les grants',
    });
  }
};

const fetchPositions = async () => {
  try {
    const response = await GrantItemService.getPositions();
    positions.value = response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des positions :', error);
    showNotification({
      type: 'error',
      title: 'Erreur',
      message: 'Impossible de charger les positions',
    });
  }
};

const validateForm = () => {
  isFormValid.value = formData.value.name.trim() !== '' && 
  formData.value.code.trim() !== '';
};

watch(formData, () => {
  validateForm();
}, { deep: true });

const handleSubmit = async () => {
  try {
    if (activeTab.value === 'grant') {
      await saveGrant();
    } else {
      await saveGrantItems();
    }
  } catch (error) {
    handleError(error);
  }
};

const saveGrant = async () => {
   try {
    let response;
    if (isEditing.value && formData.value.id) {
      response = await GrantService.updateGrant(formData.value.id, formData.value);
    } else {
      response = await GrantService.createGrant(formData.value);
      // Mettre à jour l'ID du nouveau Grant
      formData.value.id = response.data.id;
    }

    showNotification({
      type: 'success',
      title: 'Succès',
      message: isEditing.value ? 'Grant mis à jour avec succès !' : 'Grant créé avec succès !',
    });

    emit('submit', response.data);
    
    if (!isEditing.value) {
      // Après création, on passe à l'onglet Items
      activeTab.value = 'items';
      // Pré-remplir le select avec le nouveau Grant
      itemData.value.grant_id = response.data.id;
    } else {
      closeModal();
    }
  } catch (error) {
    handleError(error);
  }
};


const saveGrantItems = async () => {
  try {
    // Si on est en mode création et qu'aucun Grant n'est sélectionné
    if (!isEditing.value && !itemData.value.grant_id && grants.value.length > 0) {
      // On prend le premier Grant disponible par défaut
      itemData.value.grant_id = grants.value[0].id;
    }

    if (!itemData.value.grant_id) {
      throw new Error('Veuillez sélectionner un Grant');
    }

    let response;
    if (isEditing.value && itemData.value.id) {
      response = await GrantItemService.updateGrantItem(itemData.value.id, itemData.value);
    } else {
      response = await GrantItemService.createGrantItem(itemData.value);
    }

    showNotification({
      type: 'success',
      title: 'Succès',
      message: isEditing.value ? 'Items mis à jour avec succès !' : 'Items ajoutés avec succès !',
    });

    emit('submit', response.data);
    
    // Réinitialiser seulement les champs des items pour permettre d'ajouter d'autres items
    itemData.value = {
      ...itemData.value,
      id: null,
      bg_line: '',
      grant_position: '',
      grant_salary: null,
      grant_benefit: null,
      grant_level_of_effort: null,
      grant_position_number: null,
      grant_cost_by_monthly: null,
      grant_total_cost_by_person: null,
      position_id: null,
      grant_total_amount: null,
    };
    
     closeModal();
  } catch (error) {
    handleError(error);
  }
};


const showSuccessMessage = () => {
  showNotification({
    type: 'success',
    title: 'Succès',
    message: isEditing.value ? 'Grant mis à jour avec succès !' : 'Grant ajouté avec succès !',
    duration: 3000
  });
};

const handleError = (error) => {
  console.error('Erreur :', error);
  showNotification({
    type: 'error',
    title: 'Erreur',
    message: error.response?.data?.message || 'Une erreur est survenue lors de l\'opération',
    duration: 5000
  });
};

const openModal = () => {
  grantModal.show();
};

const closeModal = () => {
  grantModal.hide();
};

const resetForm = () => {
  formData.value = {
    id: null,
    name: '',
    code: '',
    description: '',
    start_date: '',
    end_date: '',
  };
  itemData.value = {
    id: null,
    bg_line: '',
    grant_position: '',
    grant_salary: null,
    grant_benefit: null,
    grant_level_of_effort: null,
    grant_position_number: null,
    grant_cost_by_monthly: null,
    grant_total_cost_by_person: null,
    grant_id: null,
    position_id: null,
    grant_total_amount: null,
  };
  isEditing.value = false;
  isFormValid.value = false;
  activeTab.value = 'grant';
};

const setEditData = (grant, grantItem = null) => {
  formData.value = { ...grant };
  
  if (grantItem) {
    itemData.value = { ...grantItem };
    activeTab.value = 'items';
  } else {
    itemData.value.grant_id = grant.id;
    activeTab.value = 'grant';
  }
  
  isEditing.value = true;
  validateForm();
};

defineExpose({ openModal, closeModal, setEditData });
</script>

<style scoped>
.modal-dialog {
  max-width: 800px;
}

.form-label {
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.input-block {
  position: relative;
}

.btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.nav-underline .nav-link {
  color: #495057;
  border-bottom: 2px solid transparent;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
}

.nav-underline .nav-link.active {
  color: #0d6efd;
  border-bottom-color: #0d6efd;
  font-weight: 500;
}

.nav-link:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: transparent !important;
}

.nav-link:disabled:hover {
  color: #6c757d !important;
}

.submit-section {
  border-top: 1px solid #eee;
  padding-top: 1.5rem;
  margin-top: 1rem;
}

.custom-modal .modal-content {
  border-radius: 0.5rem;
  border: none;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.custom-modal .modal-header {
  border-bottom: 1px solid #eee;
  padding: 1rem 1.5rem;
}

.custom-modal .modal-body {
  padding: 1.5rem;
}

.custom-modal .btn-close {
  background-size: 0.75rem;
}
</style>