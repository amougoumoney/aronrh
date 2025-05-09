<script setup>
import { ref } from 'vue';
import TrainersModal from '@/components/modal/trainers-modal.vue';
import TrainersTable from './trainers-table.vue';

// Refs
const trainersModalRef = ref(null);

// Data
const title = "Trainers";
const text = "Performance";
const text1 = "Trainers";

// Methods
const toggleHeader = () => {
  document.getElementById("collapse-header").classList.toggle("active");
  document.body.classList.toggle("header-collapse");
};

const showAddTrainerModal = () => {
  trainersModalRef.value.show();
};

const handleTrainerSaved = () => {
  // Rafraîchir la liste des formateurs après sauvegarde
  // Vous pouvez émettre un événement vers TrainersTable si nécessaire
};
</script>

<template>
   <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content">
      <!-- Breadcrumb -->
      <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <Breadcrumb :title="title" :text="text" :text1="text1" />
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="mb-2">
            <button @click="showAddTrainerModal" class="btn btn-primary d-flex align-items-center">
              <i class="ti ti-circle-plus me-2"></i>{{ $t('AddTrainer') }}
            </button>
          </div>
          <div class="head-icons ms-2">
            <button class="btn" @click="toggleHeader" data-bs-toggle="tooltip" data-bs-placement="top"
              data-bs-original-title="Collapse" id="collapse-header">
              <i class="ti ti-chevrons-up"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- /Breadcrumb -->

      <!-- Trainers List -->
      <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
          <h5>{{ $t('TrainersList') }}</h5>
          <div class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
            <div class="dropdown">
              <button class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                {{ $t('SortBy:Last7Days') }}
              </button>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <button class="dropdown-item rounded-1">{{ $t('RecentlyAdded') }}</button>
                </li>
                <li>
                  <button class="dropdown-item rounded-1">{{ $t('Ascending') }}</button>
                </li>
                <li>
                  <button class="dropdown-item rounded-1">{{ $t('Descending') }}</button>
                </li>
                <li>
                  <button class="dropdown-item rounded-1">{{ $t('lastMonth') }}</button>
                </li>
                <li>
                  <button class="dropdown-item rounded-1">{{ $t('Last7Days') }}</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-body p-0">
          <div class="custom-datatable-filter table-responsive">
            <TrainersTable 
              @edit-trainer="(trainerData) => trainersModalRef.value.show(true, trainerData)"
            />
          </div>
        </div>
      </div>
      <!-- /Trainers List -->
    </div>

    <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
      <p class="mb-0">2014 - 2025 &copy; AronHR.</p>
      <p>
        {{ $t('designed') }} &amp; {{ $t('developedBy') }}
        <a href="javascript:void(0);" class="text-primary">{{ $t('dreams') }}</a>
      </p>
    </div>
  </div>
  <!-- /Page Wrapper -->

  <!-- Trainers Modal -->
  <TrainersModal 
    ref="trainersModalRef"
    @trainer-saved="handleTrainerSaved"
  />
</template>