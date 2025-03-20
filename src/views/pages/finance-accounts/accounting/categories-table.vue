<script>
const data = [
  {
    "Category_Name": "Technology",
    "Sub_Category_Name": "Hardware Cost"
  },
  {
    "Category_Name": "Taxes",
    "Sub_Category_Name": "Payroll Taxes"
  },
  {
    "Category_Name": "Recruitment",
    "Sub_Category_Name": "Advertisement"
  },
  {
    "Category_Name": "Compensation",
    "Sub_Category_Name": "Incentive"
  },
  {
    "Category_Name": "Travel",
    "Sub_Category_Name": "Business Travel"
  },
  {
    "Category_Name": "Internship",
    "Sub_Category_Name": "Stipends"
  },
  {
    "Category_Name": "Employee Engagement",
    "Sub_Category_Name": "Engagement Activities"
  },
  {
    "Category_Name": "Employee Benefits",
    "Sub_Category_Name": "Healthcare Benefits"
  },
  {
    "Category_Name": "Corporate Events",
    "Sub_Category_Name": "Decorations"
  },
  {
    "Category_Name": "Compliance",
    "Sub_Category_Name": "Performance Appraisal"
  }
]

const columns = [
  {
    sorter: false,
  },
  {
    title: "Category Name",
    dataIndex: "Category_Name",
    key: "Category_Name",
    sorter: {
      compare: (a, b) => {
        a = a.Category_Name.toLowerCase();
        b = b.Category_Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Sub Category Name",
    dataIndex: "Sub_Category_Name",
    sorter: {
      compare: (a, b) => {
        a = a.Sub_Category_Name.toLowerCase();
        b = b.Sub_Category_Name.toLowerCase();
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
      <template v-if="column.key === 'Category_Name'">
        <h6 class="fw-medium">{{ record.Category_Name }}</h6>
      </template>
      <template v-if="column.key === 'action'">
        <div class="action-icon d-inline-flex">
          <a href="#" class="me-2" data-bs-toggle="modal" data-bs-target="#edit_category"><i class="ti ti-edit"></i></a>
          <a href="#" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
        </div>
      </template>
    </template>
  </a-table>
</template>