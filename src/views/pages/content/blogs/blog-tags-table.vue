<script>
const data = [
  {
    Tag: "ARONHR",
    Created_Date: "12 Sep 2024",
  },
  {
    Tag: "Recruitment",
    Created_Date: "24 Oct 2024",
  },
  {
    Tag: "HRTech",
    Created_Date: "18 Feb 2024",
  },
  {
    Tag: "HRMSFuture",
    Created_Date: "17 Oct 2024",
  },
  {
    Tag: "DataSecurity",
    Created_Date: "20 Jul 2024",
  },
  {
    Tag: "HRSoftware",
    Created_Date: "10 Apr 2024",
  },
  {
    Tag: "HRTrends",
    Created_Date: "29 Aug 2024",
  },
  {
    Tag: "HRMSBenefits",
    Created_Date: "22 Feb 2024",
  },
  {
    Tag: "HRMSTools",
    Created_Date: "03 Nov 2024",
  },
  {
    Tag: "HRTechInnovation",
    Created_Date: "17 Dec 2024",
  },
];

const columns = [
  {
    sorter: false,
  },
  {
    title: "Tag",
    dataIndex: "Tag",
    key: "Tag",
    sorter: {
      compare: (a, b) => {
        a = a.Tag.toLowerCase();
        b = b.Tag.toLowerCase();
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
      <template v-if="column.key === 'Tag'">
        <div class="text-dark">{{ record.Tag }}</div>
      </template>
      <template v-if="column.key === 'action'">
        <div class="action-icon d-inline-flex">
          <a href="javascript:void(0);" class="me-2" data-bs-toggle="modal" data-bs-target="#edit_blog-tags"><i
              class="ti ti-edit"></i></a>
          <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i
              class="ti ti-trash"></i></a>
        </div>
      </template>
    </template>
  </a-table>
</template>
