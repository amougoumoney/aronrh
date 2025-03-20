<script>
const data = [
  {
    "State_Name": "California",
    "Country_Name": "United States",
    "Status": "Active"
  },
  {
    "State_Name": "New York",
    "Country_Name": "United States",
    "Status": "Active"
  },
  {
    "State_Name": "Texas",
    "Country_Name": "United States",
    "Status": "Active"
  },
  {
    "State_Name": "Bavaria",
    "Country_Name": "Germany",
    "Status": "Active"
  },
  {
    "State_Name": "Quebec",
    "Country_Name": "Canada",
    "Status": "Active"
  },
  {
    "State_Name": "Ontario",
    "Country_Name": "Canada",
    "Status": "Active"
  },
  {
    "State_Name": "Florida",
    "Country_Name": "United States",
    "Status": "Active"
  },
  {
    "State_Name": "Berlin",
    "Country_Name": "Germany",
    "Status": "Active"
  },
  {
    "State_Name": "Victoria",
    "Country_Name": "Australia",
    "Status": "Active"
  },
  {
    "State_Name": "Gauteng",
    "Country_Name": "Egypt",
    "Status": "Active"
  }
]

const columns = [
  {
    sorter: false,
  },
  {
    title: "State Name",
    dataIndex: "State_Name",
    key: "State_Name",
    sorter: {
      compare: (a, b) => {
        a = a.State_Name.toLowerCase();
        b = b.State_Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Country Name",
    dataIndex: "Country_Name",
    sorter: {
      compare: (a, b) => {
        a = a.Country_Name.toLowerCase();
        b = b.Country_Name.toLowerCase();
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
      <template v-if="column.key === 'State_Name'">
        <h6 class="fw-medium"><a href="#">{{ record.State_Name }}</a></h6>
      </template>
      <template v-if="column.key === 'Status'">
        <span class="badge badge-success d-inline-flex align-items-center badge-xs">
          <i class="ti ti-point-filled me-1"></i>{{ record.Status }}
        </span>
      </template>
      <template v-if="column.key === 'action'">
        <div class="action-icon d-inline-flex">
          <a href="#" data-bs-toggle="modal" data-bs-target="#edit_state" class="me-2"><i class="ti ti-edit"></i></a>
          <a href="#" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
        </div>
      </template>
    </template>
  </a-table>
</template>