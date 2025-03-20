<script>
const data = [
  {
    "Country_Name": "United States",
    "Country_Code": "US",
    "Status": "Active"
  },
  {
    "Country_Name": "Canada",
    "Country_Code": "CA",
    "Status": "Active"
  },
  {
    "Country_Name": "United Kingdom",
    "Country_Code": "UK",
    "Status": "Active"
  },
  {
    "Country_Name": "Germany",
    "Country_Code": "DE",
    "Status": "Active"
  },
  {
    "Country_Name": "France",
    "Country_Code": "FR",
    "Status": "Active"
  },
  {
    "Country_Name": "Argentina",
    "Country_Code": "AR",
    "Status": "Active"
  },
  {
    "Country_Name": "India",
    "Country_Code": "IN",
    "Status": "Active"
  },
  {
    "Country_Name": "Italy",
    "Country_Code": "IT",
    "Status": "Active"
  },
  {
    "Country_Name": "New Zealand",
    "Country_Code": "NZ",
    "Status": "Active"
  },
  {
    "Country_Name": "Australia",
    "Country_Code": "AU",
    "Status": "Active"
  }
]

const columns = [
  {
    sorter: false,
  },
  {
    title: "Country Name",
    dataIndex: "Country_Name",
    key: "Country_Name",
    sorter: {
      compare: (a, b) => {
        a = a.Country_Name.toLowerCase();
        b = b.Country_Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Country Code",
    dataIndex: "Country_Code",
    sorter: {
      compare: (a, b) => {
        a = a.Country_Code.toLowerCase();
        b = b.Country_Code.toLowerCase();
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
      <template v-if="column.key === 'Country_Name'">
        <h6 class="fw-medium"><a href="#">{{ record.Country_Name }}</a></h6>
      </template>
      <template v-if="column.key === 'Status'">
        <span class="badge badge-success d-inline-flex align-items-center badge-xs">
          <i class="ti ti-point-filled me-1"></i>{{ record.Status }}
        </span>
      </template>
      <template v-if="column.key === 'action'">
        <div class="action-icon d-inline-flex">
          <a href="#" data-bs-toggle="modal" data-bs-target="#edit_countries" class="me-2"><i
              class="ti ti-edit"></i></a>
          <a href="#" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
        </div>
      </template>
    </template>
  </a-table>
</template>