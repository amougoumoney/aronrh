<script>
const data = [
  {
    Client_Name: "Michael Walker",
    Image: "user-09.jpg",
    Roll: "CEO",
    Company_Name: "BrightWave Innovations",
    Estimate_Date: "14 Jan 2024",
    Expiry_Date: "15 Jan 2024",
    Amount: "$3000",
    Status: "Accepted",
  },
  {
    Client_Name: "Sophie Headrick",
    Image: "user-40.jpg",
    Roll: "Manager",
    Company_Name: "Stellar Dynamics",
    Estimate_Date: "21 Jan 2024",
    Expiry_Date: "25 Jan 2024",
    Amount: "$2500",
    Status: "Sent",
  },
  {
    Client_Name: "Cameron Drake",
    Image: "user-41.jpg",
    Roll: "Director",
    Company_Name: "Quantum Nexus",
    Estimate_Date: "20 Feb 2024",
    Expiry_Date: "22 Feb 2024",
    Amount: "$2800",
    Status: "Expired",
  },
  {
    Client_Name: "Doris Crowley",
    Image: "user-42.jpg",
    Roll: "Consultant",
    Company_Name: "EcoVision Enterprises",
    Estimate_Date: "15 Mar 2024",
    Expiry_Date: "17 Mar 2024",
    Amount: "$3300",
    Status: "Accepted",
  },
  {
    Client_Name: "Thomas Bordelon",
    Image: "user-44.jpg",
    Roll: "Manager",
    Company_Name: "Aurora Technologies",
    Estimate_Date: "12 Apr 2024",
    Expiry_Date: "16 Apr 2024",
    Amount: "$3600",
    Status: "Declined",
  },
  {
    Client_Name: "Kathleen Gutierrez",
    Image: "user-45.jpg",
    Roll: "Director",
    Company_Name: "BlueSky Ventures",
    Estimate_Date: "20 May 2024",
    Expiry_Date: "21 May 2024",
    Amount: "$2000",
    Status: "Sent",
  },
  {
    Client_Name: "Bruce Wright",
    Image: "user-46.jpg",
    Roll: "CEO",
    Company_Name: "TerraFusion Energy",
    Estimate_Date: "06 Jul 2024",
    Expiry_Date: "06 Jul 2024",
    Amount: "$3400",
    Status: "Expired",
  },
  {
    Client_Name: "Estelle Morgan",
    Image: "user-47.jpg",
    Roll: "Manager",
    Company_Name: "UrbanPulse Design",
    Estimate_Date: "02 Sep 2024",
    Expiry_Date: "04 Sep 2024",
    Amount: "$4000",
    Status: "Declined",
  },
  {
    Client_Name: "Stephen Dias",
    Image: "user-48.jpg",
    Roll: "CEO",
    Company_Name: "Nimbus Networks",
    Estimate_Date: "15 Nov 2024",
    Expiry_Date: "15 Nov 2024",
    Amount: "$4500",
    Status: "Accepted",
  },
  {
    Client_Name: "Angela Thomas",
    Image: "user-43.jpg",
    Roll: "Consultant",
    Company_Name: "Epicurean Delights",
    Estimate_Date: "10 Dec 2024",
    Expiry_Date: "11 Dec 2024",
    Amount: "$3800",
    Status: "Sent",
  },
];

const columns = [
  {
    sorter: false,
  },
  {
    title: "Client Name",
    dataIndex: "Client_Name",
    key: "Client_Name",
    sorter: {
      compare: (a, b) => {
        a = a.Client_Name.toLowerCase();
        b = b.Client_Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Company Name",
    dataIndex: "Company_Name",
    sorter: {
      compare: (a, b) => {
        a = a.Company_Name.toLowerCase();
        b = b.Company_Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Estimate Date",
    dataIndex: "Estimate_Date",
    sorter: {
      compare: (a, b) => {
        a = a.Estimate_Date.toLowerCase();
        b = b.Estimate_Date.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Expiry Date",
    dataIndex: "Expiry_Date",
    sorter: {
      compare: (a, b) => {
        a = a.Expiry_Date.toLowerCase();
        b = b.Expiry_Date.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Amount",
    dataIndex: "Amount",
    sorter: {
      compare: (a, b) => {
        a = a.Amount.toLowerCase();
        b = b.Amount.toLowerCase();
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
      <template v-if="column.key === 'Client_Name'">
        <div class="d-flex align-items-center file-name-icon">
          <a href="javascript:void(0);" class="avatar avatar-md avatar-rounded">
            <img :src="require(`@/assets/img/users/${record.Image}`)" class="img-fluid" alt="img" />
          </a>
          <div class="ms-2">
            <h6 class="fw-medium">
              <a href="javascript:void(0);">{{ record.Client_Name }}</a>
            </h6>
            <span class="d-block mt-1">{{ record.Roll }}</span>
          </div>
        </div>
      </template>
      <template v-if="column.key === 'Status'">
        <span class="badge" :class="[
          record.Status === 'Accepted'
            ? 'badge-soft-success'
            : record.Status === 'Sent'
              ? 'badge-soft-purple'
              : record.Status === 'Expired'
                ? 'badge-soft-warning'
                : 'badge-soft-danger',
        ]">{{ record.Status }}</span>
      </template>
      <template v-if="column.key === 'action'">
        <div class="action-icon d-inline-flex">
          <a href="javascript:void(0);" class="me-2" data-bs-toggle="modal" data-bs-target="#edit_estimate"><i
              class="ti ti-edit"></i></a>
          <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i
              class="ti ti-trash"></i></a>
        </div>
      </template>
    </template>
  </a-table>
</template>
