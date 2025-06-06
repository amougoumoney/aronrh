<script setup>
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref, onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
import CandidateModal from "@/components/modal/candidat-list-modal.vue";
import { Modal } from "bootstrap";
import candidatesTable from './candidates-table.vue'
import  CandidatService from '@/services/candidat.service';

const title = "Candidates";
const text = "HR";
const text1 = "Candidates";

const dateRangeInput = ref(null);
const candidateModalRef = ref(null);

// Fonctions pour gérer les actions sur les candidats
const openAddCandidateModal = () => {
  candidateModalRef.value?.show(false);
};

const handleEditCandidate = (candidate) => {
  // Convertir les noms de propriétés snake_case en camelCase
  const formattedCandidate = {
    candidateName: candidate.candidate_name,
    candidateSurname: candidate.candidate_surname,
    birthDate: candidate.birth_date,
    birthPlace: candidate.birth_place,
    email: candidate.email,
    phone: candidate.phone,
    cv: candidate.cv,
    id: candidate.id
  };
  candidateModalRef.value?.show(true, formattedCandidate);
};


const fetchallCandidate = async() => {
  try{
    const response = await CandidatService.getAllCandidats()
    console.log('response.candidate:', response)
  }catch(error){
    console.error('error', error)
  }
}
// const handleDeleteCandidate = async (candidateId) => {
//   try {
//     // Appel API pour supprimer le candidat
//     // await CandidateService.deleteCandidate(candidateId);
//     showNotification({
//       type: 'success',
//       title: 'Success',
//       message: 'Candidate deleted successfully!',
//       timeout: 5000
//     });
//     // Émettre un événement ou rafraîchir la liste
//   } catch (error) {
//     showNotification({
//       type: 'error',
//       title: 'Error',
//       message: 'Failed to delete candidate',
//       timeout: 5000
//     });
//   }
// };

// Fonction pour formater la plage de dates
function bookingRange(start, end) {
  return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
}

// Initialisation du DateRangePicker
onMounted(() => {

  fetchallCandidate()
  if (dateRangeInput.value) {
    const start = moment().subtract(6, "days");
    const end = moment();

    new DateRangePicker(
      dateRangeInput.value,
      {
        startDate: start,
        endDate: end,
        ranges: {
          Today: [moment(), moment()],
          Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
          "Last 7 Days": [moment().subtract(6, "days"), moment()],
          "Last 30 Days": [moment().subtract(29, "days"), moment()],
          "This Month": [moment().startOf("month"), moment().endOf("month")],
          "Last Month": [
            moment().subtract(1, "month").startOf("month"),
            moment().subtract(1, "month").endOf("month"),
          ],
        },
      },
      bookingRange
    );

    bookingRange(start, end);
  }
});

function toggleHeader() {
  document.getElementById("collapse-header").classList.toggle("active");
  document.body.classList.toggle("header-collapse");
}
</script>

<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content">
      <!-- Breadcrumb -->
      <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <index-breadcrumb :title="title" :text="text" :text1="text1" />
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="me-2 mb-2">
            <div class="d-flex align-items-center border bg-white rounded p-1 me-2">
              <router-link to="/recuritment/candidates-kanban" class="btn btn-icon btn-sm me-1">
                <i class="ti ti-layout-kanban"></i>
              </router-link>
              <router-link to="/recuritment/candidates" class="btn btn-icon btn-sm active bg-primary text-white me-1">
                <i class="ti ti-list-tree"></i>
              </router-link>                                
              <router-link to="/recuritment/candidates-grid" class="btn btn-icon btn-sm">
                <i class="ti ti-layout-grid"></i>
              </router-link>
            </div>
          </div>
          <div class="me-2 mb-2">
            <div class="dropdown">
              <a href="javascript:void(0);"
                class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown">
                <i class="ti ti-file-export me-1"></i>Export
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">
                    <i class="ti ti-file-type-pdf me-1"></i>Export as PDF
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">
                    <i class="ti ti-file-type-xls me-1"></i>Export as Excel
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="mb-2">
            <a href="javascript:void(0);" data-bs-toggle="modal" @click="openAddCandidateModal"
              class="btn btn-primary d-flex align-items-center">
              <i class="ti ti-circle-plus me-2"></i>{{ $t('AddNewCandidat')}} 
            </a>
          </div>
          <div class="head-icons ms-2">
            <a href="javascript:void(0);" class="" data-bs-toggle="tooltip" data-bs-placement="top" 
              data-bs-original-title="Collapse" id="collapse-header" @click="toggleHeader">
              <i class="ti ti-chevrons-up"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- /Breadcrumb -->

      <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
          <h5>Candidates List</h5>
          <div class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
            <!-- Filtres et tris... -->
          </div>
        </div>
        <div class="card-body p-0">
          <div class="custom-datatable-filter table-responsive">
            <!-- Passez les handlers d'événements au composant table -->
            <candidates-table 
              @edit-candidate="handleEditCandidate"
              @delete-candidate="handleDeleteCandidate"
            ></candidates-table>
          </div>
        </div>
      </div>
    </div>

    <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
      <p class="mb-0">2014 - 2025 &copy; SmartHR.</p>
      <p>Designed &amp; Developed By <a href="javascript:void(0);" class="text-primary">Dreams</a></p>
    </div>
  </div>
  <!-- /Page Wrapper -->

  <!-- Modal pour ajouter/éditer un candidat -->
  <CandidateModal 
    ref="candidateModalRef"
    @saved="refreshCandidateList"
  />
</template>