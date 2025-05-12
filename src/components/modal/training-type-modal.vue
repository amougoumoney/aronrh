<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { Modal } from "bootstrap"; // Assurez-vous que Bootstrap est importé
import { defineExpose } from "vue"; // Assurez-vous que defineExpose est importé
import { useNotifications } from "@/composables/useNotifications";

const { showNotification } = useNotifications()

const router = useRouter();

// Options pour le statut
const Status = ref(["Active", "Inactive"]);

// Données du formulaire
const formData = ref({
  type: '',
  description: '',
  status: 'Active'
});

// Contrôle de l'affichage
const isEditMode = ref(false);
const modalTitle = computed(() => isEditMode.value ? "Edit Training Type" : "Add Training Type");

// Méthodes
const show = (editMode = false, trainingTypeData = null) => {
  isEditMode.value = editMode;
  
  if (editMode && trainingTypeData) {
    formData.value = { ...trainingTypeData };
  } else {
    resetForm();
  }
  
  // Afficher la modale
  const modal = new Modal(document.getElementById('trainingTypeModal'));
  modal.show();
};

const resetForm = () => {
  formData.value = {
    type: '',
    description: '',
    status: 'Active'
  };
};

const submitForm = () => {
  // Ici, ajoutez la logique pour sauvegarder les données
  // if (isEditMode.value) {
  //   TrainingTypeService.update(formData.value);
  // } else {
  //   TrainingTypeService.create(formData.value);
  // }
  
  router.push("/training/training-type");
};

// Exposer la méthode show au parent
defineExpose({ show });
</script>

<template>
  <!-- Modal unique pour ajout/édition -->
  <div class="modal fade" id="trainingTypeModal">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">{{ modalTitle }}</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Type <span class="text-danger">*</span></label>
                  <input 
                    type="text" 
                    class="form-control" 
                    v-model="formData.type"
                    required
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Description</label>
                  <textarea 
                    class="form-control" 
                    rows="3"
                    v-model="formData.description"
                  ></textarea>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Status <span class="text-danger">*</span></label>
                  <select 
                    v-model="formData.status" 
                    class="form-control"
                    required
                  >
                    <option v-for="status in Status" :key="status" :value="status">
                      {{ status }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">
              {{ isEditMode ? 'Save Changes' : 'Add Training Type' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Delete Modal -->
  <div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span class="avatar avatar-xl bg-transparent-danger text-danger mb-3">
            <i class="ti ti-trash-x fs-36"></i>
          </span>
          <h4 class="mb-1">Confirm Delete</h4>
          <p class="mb-3">
            You want to delete all the marked items, this cant be undone once you delete.
          </p>
          <div class="d-flex justify-content-center">
            <button class="btn btn-light me-3" data-bs-dismiss="modal">Cancel</button>
            <router-link to="/training/training-type" class="btn btn-danger">Yes, Delete</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>