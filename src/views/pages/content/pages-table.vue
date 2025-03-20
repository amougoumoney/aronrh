<script>
const data = [
  {
    "Page": "Employee",
    "Page_Slug": "employee",
    "Status": "Active"
  },
  {
    "Page": "Clients",
    "Page_Slug": "clients",
    "Status": "Active"
  },
  {
    "Page": "Projects",
    "Page_Slug": "projects",
    "Status": "Active"
  },
  {
    "Page": "Tickets",
    "Page_Slug": "tickets",
    "Status": "Active"
  },
  {
    "Page": "Contacts",
    "Page_Slug": "contacts",
    "Status": "Active"
  },
  {
    "Page": "Companies",
    "Page_Slug": "companies",
    "Status": "Active"
  },
  {
    "Page": "Deals",
    "Page_Slug": "deals",
    "Status": "Active"
  },
  {
    "Page": "Leads",
    "Page_Slug": "leads",
    "Status": "Active"
  },
  {
    "Page": "Pipeline",
    "Page_Slug": "pipeline",
    "Status": "Active"
  },
  {
    "Page": "Activities",
    "Page_Slug": "activities",
    "Status": "Active"
  }
]

const columns = [
  {
    sorter: false,
  },
  {
    title: "Page",
    dataIndex: "Page",
    key: "Page",
    sorter: {
      compare: (a, b) => {
        a = a.Page.toLowerCase();
        b = b.Page.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Page Slug",
    dataIndex: "Page_Slug",
    sorter: {
      compare: (a, b) => {
        a = a.Page_Slug.toLowerCase();
        b = b.Page_Slug.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
    sorter: {
      compare: (a, b) => {
        a = a.Status.toLowerCase();
        b = b.Status.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "",
    key: "action",
    sorter: true
  },
]

const rowSelection = {
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
};

export default {
  data() {
    return {
      data,
      columns,
      rowSelection,
    }
  },
}
</script>

<template>
  <a-table class="table datatable thead-light" :columns="columns" :data-source="data" :row-selection="rowSelection">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'Page'">
        <h6 class="fw-medium"><a href="javascript:void(0);">{{ record.Page }}</a></h6>
      </template>
      <template v-if="column.key === 'Status'">
        <span class="badge badge-success d-inline-flex align-items-center badge-xs">
          <i class="ti ti-point-filled me-1"></i>{{ record.Status }}
        </span>
      </template>
      <template v-if="column.key === 'action'">
        <div class="action-icon d-inline-flex">
          <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_page" class="me-2"><i
              class="ti ti-edit"></i></a>
          <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i
              class="ti ti-trash"></i></a>
        </div>
      </template>
    </template>
  </a-table>
</template>