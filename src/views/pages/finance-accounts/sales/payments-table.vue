<script>
const data = [
  {
    Invoice_ID: "Inv-001",
    Image: "user-39.jpg",
    Client_Name: "Michael Walker",
    Roll: "CEO",
    Company_Name: "BrightWave Innovations",
    Payment_Type: "Paypal",
    Paid_Date: "15 Jan 2024",
    Paid_Amount: "$3000",
  },
  {
    Invoice_ID: "Inv-002",
    Image: "user-40.jpg",
    Client_Name: "Sophie Headrick Manager",
    Roll: "Manager",
    Company_Name: "Stellar Dynamics",
    Payment_Type: "Paypal",
    Paid_Date: "25 Jan 2024",
    Paid_Amount: "$2500",
  },
  {
    Invoice_ID: "Inv-003",
    Image: "user-41.jpg",
    Client_Name: "Cameron Drake Director",
    Roll: "Director",
    Company_Name: "Quantum Nexus",
    Payment_Type: "Paypal",
    Paid_Date: "22 Feb 2024",
    Paid_Amount: "$2800",
  },
  {
    Invoice_ID: "Inv-004",
    Image: "user-42.jpg",
    Client_Name: "Doris Crowley Consultant",
    Roll: "Consultant",
    Company_Name: "EcoVision Enterprises",
    Payment_Type: "Paypal",
    Paid_Date: "17 Mar 2024",
    Paid_Amount: "$3300",
  },
  {
    Invoice_ID: "Inv-005",
    Image: "user-43.jpg",
    Client_Name: "Thomas Bordelon",
    Roll: "Manager",
    Company_Name: "Aurora Technologies",
    Payment_Type: "Paypal",
    Paid_Date: "16 Apr 2024",
    Paid_Amount: "$3600",
  },
  {
    Invoice_ID: "Inv-006",
    Image: "user-44.jpg",
    Client_Name: "Kathleen Gutierrez",
    Roll: "Director",
    Company_Name: "BlueSky Ventures",
    Payment_Type: "Paypal",
    Paid_Date: "21 May 2024",
    Paid_Amount: "$2000",
  },
  {
    Invoice_ID: "Inv-007",
    Image: "user-45.jpg",
    Client_Name: "Bruce Wright",
    Roll: "CEO",
    Company_Name: "TerraFusion Energy",
    Payment_Type: "Paypal",
    Paid_Date: "06 Jun 2024",
    Paid_Amount: "$3400",
  },
  {
    Invoice_ID: "Inv-008",
    Image: "user-46.jpg",
    Client_Name: "Estelle Morgan",
    Roll: "Manager",
    Company_Name: "UrbanPulse Design",
    Payment_Type: "Paypal",
    Paid_Date: "04 Sep 2024",
    Paid_Amount: "$4000",
  },
  {
    Invoice_ID: "Inv-009",
    Image: "user-47.jpg",
    Client_Name: "Stephen Dias",
    Roll: "CEO",
    Company_Name: "Nimbus Networks",
    Payment_Type: "Paypal",
    Paid_Date: "15 Nov 2024",
    Paid_Amount: "$4500",
  },
  {
    Invoice_ID: "Inv-010",
    Image: "user-48.jpg",
    Client_Name: "Angela Thomas",
    Roll: "Consultant",
    Company_Name: "Epicurean Delights",
    Payment_Type: "Paypal",
    Paid_Date: "11 Dec 2024",
    Paid_Amount: "$3800",
  },
];

const columns = [
  {
    sorter: false,
  },
  {
    title: "Invoice ID",
    dataIndex: "Invoice_ID",
    key: "Invoice_ID",
    sorter: {
      compare: (a, b) => {
        a = a.Invoice_ID.toLowerCase();
        b = b.Invoice_ID.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
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
    title: "Payment Type",
    dataIndex: "Payment_Type",
    sorter: {
      compare: (a, b) => {
        a = a.Payment_Type.toLowerCase();
        b = b.Payment_Type.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Paid Date",
    dataIndex: "Paid_Date",
    sorter: {
      compare: (a, b) => {
        a = a.Paid_Date.toLowerCase();
        b = b.Paid_Date.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Paid Amount",
    dataIndex: "Paid_Amount",
    sorter: {
      compare: (a, b) => {
        a = a.Paid_Amount.toLowerCase();
        b = b.Paid_Amount.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
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
      <template v-if="column.key === 'Invoice_ID'">
        <router-link to="/sales/invoice-details" class="link-info">
          {{ record.Invoice_ID }}</router-link>
      </template>
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
    </template>
  </a-table>
</template>
