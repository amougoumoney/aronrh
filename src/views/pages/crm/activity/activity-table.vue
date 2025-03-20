<script>
const data = [
  {
    Title: "We scheduled a meeting for next week",
    Activity_Type: "Meeting",
    Due_Date: "16 Jan 2024",
    Owner: "Hendry",
    Created_Date: "14 Jan 2024",
  },
  {
    Title: "Had conversation with Fred regarding task",
    Activity_Type: "Calls",
    Due_Date: "24 Jan 2024",
    Owner: "Guilory",
    Created_Date: "21 Jan 2024",
  },
  {
    Title: "Analysing latest time estimation for new project",
    Activity_Type: "Tasks",
    Due_Date: "23 Feb 2024",
    Owner: "Jami",
    Created_Date: "20 Feb 2024",
  },
  {
    Title: "Store and manage contact data",
    Activity_Type: "Email",
    Due_Date: "18 Mar 2024",
    Owner: "Theresa",
    Created_Date: "15 Mar 2024",
  },
  {
    Title: "Call John and discuss about project",
    Activity_Type: "Calls",
    Due_Date: "14 Apr 2024",
    Owner: "Smith",
    Created_Date: "12 Apr 2024",
  },
  {
    Title: "Will have a meeting before project start",
    Activity_Type: "Meeting",
    Due_Date: "22 May 2024",
    Owner: "Martin",
    Created_Date: "20 May 2024",
  },
  {
    Title: "Will have a meeting before project start",
    Activity_Type: "Meeting",
    Due_Date: "22 May 2024",
    Owner: "Martin",
    Created_Date: "20 May 2024",
  },
  {
    Title: "Built landing pages",
    Activity_Type: "Email",
    Due_Date: "08 Jul 2024",
    Owner: "Newell",
    Created_Date: "06 Jul 2024",
  },
  {
    Title: "Discussed budget proposal with Edwin",
    Activity_Type: "Calls",
    Due_Date: "05 Sep 2024",
    Owner: "Janet",
    Created_Date: "02 Sep 2024",
  },
  {
    Title: "Attach final proposal for upcoming project",
    Activity_Type: "Tasks",
    Due_Date: "18 Nov 2024",
    Owner: "Craig",
    Created_Date: "15 Nov 2024",
  },
  {
    Title: "Regarding latest updates in project",
    Activity_Type: "Meeting",
    Due_Date: "12 Dec 2024",
    Owner: "Daniel",
    Created_Date: "10 Dec 2024",
  },
];

const columns = [
  {
    sorter: false,
  },
  {
    title: "Title",
    dataIndex: "Title",
    key: "Title",
    sorter: {
      compare: (a, b) => {
        a = a.Title.toLowerCase();
        b = b.Title.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Activity Type",
    dataIndex: "Activity_Type",
    key: "Activity_Type",
    sorter: {
      compare: (a, b) => {
        a = a.Activity_Type.toLowerCase();
        b = b.Activity_Type.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Due Date",
    dataIndex: "Due_Date",
    sorter: {
      compare: (a, b) => {
        a = a.Due_Date.toLowerCase();
        b = b.Due_Date.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Owner",
    dataIndex: "Owner",
    sorter: {
      compare: (a, b) => {
        a = a.Owner.toLowerCase();
        b = b.Owner.toLowerCase();
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
      <template v-if="column.key === 'Title'">
        <p class="fs-14 text-dark fw-medium">{{ record.Title }}</p>
      </template>
      <template v-if="column.key === 'Activity_Type'">
        <span class="badge badge-pink-transparent" :class="[
          'badge',
          record.Activity_Type === 'Meeting'
            ? 'badge-pink-transparent'
            : record.Activity_Type === 'Calls'
              ? 'badge-purple-transparent'
              : record.Activity_Type === 'Tasks'
                ? 'badge-info-transparent'
                : 'badge-warning-transparent',
        ]">
          <i class="ti ti-device-computer-camera me-1" :class="[
            'ti',
            record.Activity_Type === 'Meeting'
              ? 'ti-device-computer-camera'
              : record.Activity_Type === 'Calls'
                ? 'ti-phone'
                : record.Activity_Type === 'Tasks'
                  ? 'ti-subtask'
                  : 'ti-mail',
            'me-1',
          ]"></i>
          {{ record.Activity_Type }}
        </span>
      </template>
      <template v-if="column.key === 'action'">
        <div class="action-icon d-inline-flex">
          <a href="javascript:void(0);" class="me-2" data-bs-toggle="modal" data-bs-target="#edit_activity"><i
              class="ti ti-edit"></i></a>
          <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i
              class="ti ti-trash"></i></a>
        </div>
      </template>
    </template>
  </a-table>
</template>
