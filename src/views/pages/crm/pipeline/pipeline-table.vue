<script>
const data = [
  {
    Pipeline_Name: "Sales",
    Total_Deal_Value: "$4,50,000",
    No_of_Deals: "315",
    Stages: "Won",
    Created_Date: "14 Jan 2024",
    Status: "Active",
  },
  {
    Pipeline_Name: "Marketing",
    Total_Deal_Value: "$3,15,000",
    No_of_Deals: "447",
    Stages: "In Pipeline",
    Created_Date: "21 Jan 2024",
    Status: "Active",
  },
  {
    Pipeline_Name: "Calls",
    Total_Deal_Value: "$8,40,000",
    No_of_Deals: "654",
    Stages: "Won",
    Created_Date: "20 Feb 2024",
    Status: "Active",
  },
  {
    Pipeline_Name: "Email",
    Total_Deal_Value: "$6,10,000",
    No_of_Deals: "545",
    Stages: "Conversation",
    Created_Date: "15 Mar 2024",
    Status: "Active",
  },
  {
    Pipeline_Name: "Chats",
    Total_Deal_Value: "$4,70,000",
    No_of_Deals: "787",
    Stages: "Won",
    Created_Date: "12 Apr 2024",
    Status: "Active",
  },
  {
    Pipeline_Name: "Operational",
    Total_Deal_Value: "$5,50,000",
    No_of_Deals: "787",
    Stages: "Follow Up",
    Created_Date: "20 May 2024",
    Status: "Active",
  },
  {
    Pipeline_Name: "Collabrative",
    Total_Deal_Value: "$5,00,000",
    No_of_Deals: "315",
    Stages: "Won",
    Created_Date: "06 Jul 2024",
    Status: "Inactive",
  },
  {
    Pipeline_Name: "Differentiate",
    Total_Deal_Value: "$4,50,000",
    No_of_Deals: "478",
    Stages: "Schedule servise",
    Created_Date: "02 Sep 2024",
    Status: "Active",
  },
  {
    Pipeline_Name: "Interact",
    Total_Deal_Value: "$6,20,000",
    No_of_Deals: "664",
    Stages: "Won",
    Created_Date: "15 Nov 2024",
    Status: "Active",
  },
  {
    Pipeline_Name: "Identify",
    Total_Deal_Value: "$7,40,000",
    No_of_Deals: "128",
    Stages: "Lost",
    Created_Date: "10 Dec 2024",
    Status: "Active",
  },
];

const columns = [
  {
    sorter: false,
  },
  {
    title: "Pipeline Name",
    dataIndex: "Pipeline_Name",
    key: "Pipeline_Name",
    sorter: {
      compare: (a, b) => {
        a = a.Pipeline_Name.toLowerCase();
        b = b.Pipeline_Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Total Deal Value",
    dataIndex: "Total_Deal_Value",
    sorter: {
      compare: (a, b) => {
        a = a.Total_Deal_Value.toLowerCase();
        b = b.Total_Deal_Value.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "No of Deals",
    dataIndex: "No_of_Deals",
    sorter: {
      compare: (a, b) => {
        a = a.No_of_Deals.toLowerCase();
        b = b.No_of_Deals.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Stages",
    dataIndex: "Stages",
    key: "Stages",
    sorter: {
      compare: (a, b) => {
        a = a.Stages.toLowerCase();
        b = b.Stages.toLowerCase();
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
  onChange: () => {},
  onSelect: () => {},
  onSelectAll: () => {},
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
  <a-table
    class="table datatable thead-light"
    :columns="columns"
    :data-source="data"
    :row-selection="rowSelection"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'Pipeline_Name'">
        <h6 class="fs-14 fw-medium">{{ record.Pipeline_Name }}</h6>
      </template>
      <template v-if="column.key === 'Stages'">
        <div class="d-flex align-items-center">
          <div
            class="progress me-2"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
            style="height: 5px; min-width: 80px"
          >
            <div
              :class="[
                'progress-bar',
                record.Stages === 'Won'
                  ? 'bg-success'
                  : record.Stages === 'In Pipeline'
                  ? 'bg-purple'
                  : record.Stages === 'Conversation'
                  ? 'bg-skyblue'
                  : record.Stages === 'Follow Up'
                  ? 'bg-warning'
                  : record.Stages === 'Schedule servise'
                  ? 'bg-pink'
                  : 'bg-danger',
              ]"
              style="width: 100%"
            ></div>
          </div>
          <span class="fs-14 fw-normal">{{ record.Stages }}</span>
        </div>
      </template>
      <template v-if="column.key === 'Status'">
        <span
          :class="[
            'badge',
            record.Status === 'Active' ? 'badge-success' : 'badge-danger',
            'd-inline-flex',
            'align-items-center',
            'badge-xs',
          ]"
        >
          <i class="ti ti-point-filled me-1"></i>{{ record.Status }}
        </span>
      </template>
      <template v-if="column.key === 'action'">
        <div class="action-icon d-inline-flex">
          <a
            href="javascript:void(0);"
            class="me-2"
            data-bs-toggle="modal"
            data-bs-target="#edit_pipeline"
            ><i class="ti ti-edit"></i
          ></a>
          <a
            href="javascript:void(0);"
            data-bs-toggle="modal"
            data-bs-target="#delete_modal"
            ><i class="ti ti-trash"></i
          ></a>
        </div>
      </template>
    </template>
  </a-table>
</template>
