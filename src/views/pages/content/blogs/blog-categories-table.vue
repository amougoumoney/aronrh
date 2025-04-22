<script>
const data = [
  {
    Category: "Evlovution",
    Created_Date: "12 Sep 2024",
    Status: "Active",
  },
  {
    Category: "Guide",
    Created_Date: "24 Oct 2024",
    Status: "Active",
  },
  {
    Category: "Security",
    Created_Date: "18 Feb 2024",
    Status: "Active",
  },
  {
    Category: "Recruitment",
    Created_Date: "17 Oct 2024",
    Status: "Active",
  },
  {
    Category: "Payroll",
    Created_Date: "20 Jul 2024",
    Status: "Active",
  },
  {
    Category: "Benefits",
    Created_Date: "10 Apr 2024",
    Status: "Active",
  },
  {
    Category: "Employee",
    Created_Date: "29 Aug 2024",
    Status: "Active",
  },
  {
    Category: "Onboarding",
    Created_Date: "22 Feb 2024",
    Status: "Active",
  },
  {
    Category: "Implementation",
    Created_Date: "03 Nov 2024",
    Status: "Active",
  },
  {
    Category: "Management",
    Created_Date: "17 Dec 2024",
    Status: "Active",
  },
];

const columns = [
  {
    sorter: false,
  },
  {
    title: "Category",
    dataIndex: "Category",
    key: "Category",
    sorter: {
      compare: (a, b) => {
        a = a.Category.toLowerCase();
        b = b.Category.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Created Date",
    dataIndex: "Created_Date",
    sorter: {
      compare: (a, b) => {
        a = a.Created_Date.toLowerCase();
        b = b.Created_Date.toLowerCase();
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
    sorter: true,
  },
];

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
    };
  },
};
</script>

<template>
  <a-table class="table datatable thead-light" :columns="columns" :data-source="data" :row-selection="rowSelection">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'Category'">
        <div class="text-dark">{{ record.Category }}</div>
      </template>
      <template v-if="column.key === 'Status'">
        <span class="badge badge-success"><i class="ti ti-point-filled"></i>{{ record.Status }}</span>
      </template>
      <template v-if="column.key === 'action'">
        <div class="action-icon d-inline-flex">
          <a href="javascript:void(0);" class="me-2" data-bs-toggle="modal" data-bs-target="#edit_blog-category"><i
              class="ti ti-edit"></i></a>
          <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i
              class="ti ti-trash"></i></a>
        </div>
      </template>
    </template>
  </a-table>
</template>
