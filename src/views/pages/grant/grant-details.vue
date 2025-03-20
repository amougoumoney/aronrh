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
            <router-link :to="'/grant/edit/' + grantId" class="btn btn-primary">
              <i class="ti ti-pencil me-1"></i>Edit Grant
            </router-link>
          </div>
        </div>
      </div>
      <!-- /Breadcrumb -->

      <!-- Grant Details -->
      <div class="row">
        <div class="col-lg-8">
          <div class="card">
            <div class="card-body">
              <div class="project-details">
                <h5 class="card-title">{{ grant.name }}</h5>
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="project-info">
                      <label>Grant Amount</label>
                      <p>{{ grant.amount }}</p>
                    </div>
                    <div class="project-info">
                      <label>Start Date</label>
                      <p>{{ grant.startDate }}</p>
                    </div>
                    <div class="project-info">
                      <label>End Date</label>
                      <p>{{ grant.endDate }}</p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="project-info">
                      <label>Status</label>
                      <p>
                        <span :class="'badge ' + getStatusClass(grant.status)">
                          {{ grant.status }}
                        </span>
                      </p>
                    </div>
                    <div class="project-info">
                      <label>Department</label>
                      <p>{{ grant.department }}</p>
                    </div>
                    <div class="project-info">
                      <label>Principal Investigator</label>
                      <p>{{ grant.investigator }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="project-description">
                <h5 class="card-title">Description</h5>
                <p>{{ grant.description }}</p>
              </div>

              <div class="project-files mt-4">
                <h5 class="card-title">Documents</h5>
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12" v-for="doc in grant.documents" :key="doc.id">
                    <div class="card file-card">
                      <div class="card-body">
                        <div class="d-flex align-items-center">
                          <i class="ti ti-file-text me-2 fs-20"></i>
                          <div>
                            <h6 class="mb-0">{{ doc.name }}</h6>
                            <small>{{ doc.size }}</small>
                          </div>
                          <a href="javascript:void(0);" class="ms-auto">
                            <i class="ti ti-download"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Timeline</h5>
              <div class="activity-feed">
                <div class="feed-item" v-for="activity in grant.activities" :key="activity.id">
                  <div class="feed-date">{{ activity.date }}</div>
                  <span class="feed-text">{{ activity.description }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Grant Details -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'GrantDetails',
  data() {
    return {
      title: 'Grant Details',
      text: 'Grant',
      text1: 'Grant Details',
      grantId: this.$route.params.id,
      grant: {
        name: 'Research Grant 2024',
        amount: '$50,000',
        startDate: '01/01/2024',
        endDate: '12/31/2024',
        status: 'Active',
        department: 'Research & Development',
        investigator: 'Dr. John Smith',
        description: 'This grant is focused on advancing research in artificial intelligence and its applications in healthcare.',
        documents: [
          { id: 1, name: 'Grant Proposal.pdf', size: '2.5 MB' },
          { id: 2, name: 'Budget Plan.xlsx', size: '1.8 MB' }
        ],
        activities: [
          { id: 1, date: '01/01/2024', description: 'Grant approved and initiated' },
          { id: 2, date: '01/15/2024', description: 'First milestone completed' }
        ]
      }
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
    }
  }
};
</script>

<style scoped>
.project-info {
  margin-bottom: 1rem;
}

.project-info label {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.activity-feed {
  padding: 1rem 0;
}

.feed-item {
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.feed-date {
  color: #888;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.file-card {
  margin-bottom: 1rem;
}
</style>