<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <index-breadcrumb :title="title" :text="text" :text1="text1" />
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <!-- Bouton Export -->
          <div class="me-2 mb-2">
            <div class="dropdown">
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown">
                <i class="ti ti-file-export me-1"></i>{{ $t('dashboard.export') }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li><a href="javascript:void(0);" class="dropdown-item rounded-1">
                  <i class="ti ti-file-type-pdf me-1"></i>{{ $t('dashboard.exportPDF') }}</a></li>
                <li><a href="javascript:void(0);" class="dropdown-item rounded-1">
                  <i class="ti ti-file-type-xls me-1"></i>{{ $t('dashboard.exportEXCEL') }}</a></li>
              </ul>
            </div>
          </div>
          <!-- Bouton Ajouter -->
          <div class="mb-2">
            <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" @click="showReferenceModal(false)">
              <i class="ti ti-circle-plus me-2"></i>{{ $t('AddReference') }}
            </a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
          <h5>{{ $t('ReferencesList') }}</h5>
          <div class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
            <!-- Filtre Date -->
            <div class="me-3">
              <div class="input-icon-end position-relative">
                <input type="text" class="form-control date-range bookingrange" ref="dateRangeInput"
                  :placeholder="$t('dd/mm/yyyy - dd/mm/yyyy')" />
                <span class="input-icon-addon">
                  <i class="ti ti-chevron-down"></i>
                </span>
              </div>
            </div>
            <!-- Filtre Statut -->
            <div class="dropdown me-3">
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown">
                {{ $t('Status') }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li v-for="status in statusOptions" :key="status">
                  <a href="javascript:void(0);" class="dropdown-item rounded-1" @click="filterByStatus(status)">
                    {{ $t(status) }}
                  </a>
                </li>
              </ul>
            </div>
            <!-- Tri -->
            <div class="dropdown">
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown">
                {{ $t('SortBy') }}: {{ currentSort }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li v-for="sortOption in sortOptions" :key="sortOption.value">
                  <a href="javascript:void(0);" class="dropdown-item rounded-1" @click="sortReferences(sortOption.value)">
                    {{ $t(sortOption.label) }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="card-body p-0">
          <div class="custom-datatable-filter table-responsive">
            <a-table class="table datatable thead-light" :columns="columns" :data-source="filteredReferences"
              :row-selection="rowSelection" :pagination="pagination" @change="handleTableChange">
              <template #bodyCell="{ column, record }">
                <!-- Colonne Statut -->
                <template v-if="column.key === 'status'">
                  <span :class="['badge', getStatusClass(record.status), 'align-items-center', 'badge-xs']">
                    <i class="ti ti-point-filled me-1"></i>
                    {{ record.status }}
                  </span>
                </template>
                
                <!-- Colonne Entreprise -->
                <template v-else-if="column.key === 'company'">
                  <div>
                    <div class="fw-bold">{{ record.companyName || '-' }}</div>
                    <div class="text-muted small">{{ record.companyAddress }}</div>
                  </div>
                </template>
                
                <!-- Colonne Contact -->
                <template v-else-if="column.key === 'contact'">
                  <div>
                    <div>{{ record.companyPhone || '-' }}</div>
                    <div class="text-muted small">{{ record.phone }}</div>
                  </div>
                </template>
                
                <!-- Colonne Candidat -->
                <template v-else-if="column.key === 'candidate'">
                  {{ getCandidateName(record.candidate_id) }}
                </template>
                
                <!-- Colonne Date -->
                <template v-else-if="column.key === 'dateAdded'">
                  {{ formatDate(record.dateAdded) }}
                </template>
                
                <!-- Actions -->
                <template v-else-if="column.key === 'action'">
                  <div class="action-icon d-inline-flex">
                    <a href="javascript:void(0);" class="me-2" @click="viewReferenceDetails(record.id)">
                      <i class="ti ti-eye"></i>
                    </a>
                    <a href="javascript:void(0);" class="me-2" @click="showReferenceModal(true, record)">
                      <i class="ti ti-edit"></i>
                    </a>
                    <a href="javascript:void(0);" @click="deleteReference(record.id)">
                      <i class="ti ti-trash"></i>
                    </a>
                  </div>
                </template>
                
                <!-- Valeur par défaut -->
                <template v-else>
                  {{ record[column.dataIndex] }}
                </template>
              </template>
            </a-table>
          </div>
        </div>
      </div>
    </div>

    <reference-modal ref="referenceModal" :candidats="candidats" @saved="handleReferenceSaved"></reference-modal>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
import indexBreadcrumb from "@/components/breadcrumb/index-breadcrumb.vue";
import ReferenceModal from "@/components/modal/reference-modal.vue";
import { useI18n } from "vue-i18n";
import ReferencesService from "@/services/reference.service";
import CandidatsService from "@/services/candidat.service";
import { useNotifications } from '@/composables/useNotifications'

const { t } = useI18n();

// Références
const dateRangeInput = ref(null);
const referenceModal = ref(null);
const title = ref(t('References'));
const text = ref(t('Recruitment'));
const text1 = ref(t('ReferencesList'));
const currentSort = ref(t('Last7Days'));
const currentStatusFilter = ref(null);
const currentCandidateFilter = ref(null);
const currentCompanyFilter = ref(null);
const { showNotification } = useNotifications()
const pagination = ref({
  current: 1,
  pageSize: 10,
  total: 0,
});

// Données
const statusOptions = ['Pending', 'Verified', 'Rejected', 'Expired'];
const sortOptions = [
  { value: 'date-desc', label: 'NewestFirst' },
  { value: 'date-asc', label: 'OldestFirst' },
  { value: 'name-asc', label: 'NameAZ' },
  { value: 'name-desc', label: 'NameZA' },
  { value: 'company-asc', label: 'CompanyAZ' },
];

const columns = [
  
  {
    title: t('Company'),
    key: "company",
    sorter: (a, b) => (a.companyName || '').localeCompare(b.entrpriseName || '')
  },

  {
    title: t('ReferenceName'),
    dataIndex: "name",
    sorter: true
  },
  {
    title: t('JobTitle'),
    dataIndex: "jobTitle",
    sorter: true
  },
  {
    title: t('Contact'),
    key: "contact"
  },
  {
    title: t('Candidate'),
    key: "candidate",
    sorter: (a, b) => getCandidateName(a.candidate_id).localeCompare(getCandidateName(b.candidate_id))
  },
  {
    title: t('Status'),
    dataIndex: "status",
    key: "status",
    width: 120
  },
  {
    title: t('DateAdded'),
    key: "dateAdded",
    sorter: (a, b) => new Date(a.dateAdded) - new Date(b.createAt),
    width: 120
  },
  {
    title: "",
    key: "action",
    width: 100
  }
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log('Selected rows:', selectedRows);
  }
};

const references = ref([]);
const candidats = ref([]);

// Computed
const filteredReferences = computed(() => {
  let result = [...references.value];
  
  if (currentStatusFilter.value) {
    result = result.filter(ref => ref.status === currentStatusFilter.value);
  }
  
  if (currentCandidateFilter.value) {
    result = result.filter(ref => ref.candidate_id === currentCandidateFilter.value);
  }
  
  if (currentCompanyFilter.value) {
    result = result.filter(ref => ref.companyName === currentCompanyFilter.value);
  }
  
  return result;
});

const uniqueCompanies = computed(() => {
  const companies = new Set();
  references.value.forEach(ref => {
    if (ref.companyName) companies.add(ref.companyName);
  });
  return Array.from(companies).sort();
});

// Méthodes
const showReferenceModal = (isEditMode = false, referenceData = null) => {
  referenceModal.value.show(isEditMode, referenceData);
};

const handleReferenceSaved = ({ action, reference }) => {
  if (action === 'create') {
    references.value.unshift(reference);
  } else if (action === 'update') {
    const index = references.value.findIndex(r => r.id === reference.id);
    if (index !== -1) {
      references.value.splice(index, 1, reference);
    }
  }
  fetchReferences();
};

const getCandidateName = (candidateId) => {
  const candidate = candidats.value.find(c => c.id === candidateId);
  return candidate ? `${candidate.firstName} ${candidate.lastName}` : 'Inconnu';
};

const booking_range = (start, end) => {
  return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
};

const getStatusClass = (status) => {
  const statusClasses = {
    Verified: "bg-success-light",
    Pending: "bg-warning-light",
    Rejected: "bg-danger-light",
    Expired: "bg-secondary-light"
  };
  return statusClasses[status] || "bg-info-light";
};

const formatDate = (date) => {
  return moment(date).format('DD/MM/YYYY');
};

const viewReferenceDetails = (referenceId) => {
  console.log("View reference details:", referenceId);
};

const deleteReference = async (id) => {
  if (confirm(t('ConfirmDeleteReference'))) {
    try {
      await ReferencesService.deleteReference(id);
      references.value = references.value.filter(ref => ref.id !== id);
      showNotification({
        type: 'success',
        title: 'Success',
        message: 'Reference deleted successfully!',
        timeout: 5000
      });
    } catch (error) {
      console.error("Error deleting reference:", error);
      showNotification({
        type: 'error',
        title: 'Error',
        message: 'Failed to delete reference',
        timeout: 5000
      });
    }
  }
};

const filterByStatus = (status) => {
  currentStatusFilter.value = currentStatusFilter.value === status ? null : status;
};


const sortReferences = (sortOption) => {
  switch (sortOption) {
    case 'date-desc':
      references.value.sort((a, b) => new Date(b.createAt) - new Date(a.createAt));
      currentSort.value = t('NewestFirst');
      break;
    case 'date-asc':
      references.value.sort((a, b) => new Date(a.createAt) - new Date(b.createAt));
      currentSort.value = t('OldestFirst');
      break;
    case 'name-asc':
      references.value.sort((a, b) => a.name.localeCompare(b.name));
      currentSort.value = t('NameAZ');
      break;
    case 'name-desc':
      references.value.sort((a, b) => b.name.localeCompare(a.name));
      currentSort.value = t('NameZA');
      break;

  }
};

const handleTableChange = (pagination, filters, sorter) => {
  console.log('Table changed:', pagination, filters, sorter);
};

const fetchReferences = async () => {
  try {
    const [candidatesResponse, referencesResponse] = await Promise.all([
      CandidatsService.getAllCanxxxdidats(),
      ReferencesService.getAllreferences()
    ]);
    
    candidats.value = candidatesResponse.data;
    references.value = referencesResponse.data.map(ref => ({
      ...ref,
      companyPhone: formatPhoneNumber(ref.companyPhone),
      phone: formatPhoneNumber(ref.phoneEntreprise)
    }));
    
    pagination.value.total = references.value.length;
  } catch (error) {
    console.error("Error fetching data:", error);
    showNotification({
      type: 'error',
      title: 'Error',
      message: 'Failed to load references',
      timeout: 5000
    });
  }
};

const formatPhoneNumber = (phone) => {
  if (!phone) return '';
  // Formatage international simple
  return phone.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '+$1 $2 $3 $4 $5');
};

// Lifecycle
onMounted(() => {
  if (dateRangeInput.value) {
    const start = moment().subtract(6, "days");
    const end = moment();

    new DateRangePicker(dateRangeInput.value, {
      startDate: start,
      endDate: end,
      ranges: {
        [t('Today')]: [moment(), moment()],
        [t('Yesterday')]: [moment().subtract(1, "days"), moment().subtract(1, "days")],
        [t('Last7Days')]: [moment().subtract(6, "days"), moment()],
        [t('Last30Days')]: [moment().subtract(29, "days"), moment()],
        [t('ThisMonth')]: [moment().startOf("month"), moment().endOf("month")],
        [t('LastMonth')]: [
          moment().subtract(1, "month").startOf("month"),
          moment().subtract(1, "month").endOf("month"),
        ],
      },
    }, booking_range);

    booking_range(start, end);
  }

  fetchReferences();
});
</script>

<style scoped>
.fw-bold {
  font-weight: 600;
}
.text-muted {
  color: #6c757d;
}
.small {
  font-size: 0.875em;
}
</style>