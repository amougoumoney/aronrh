<script>
const data = [
  {
    Subscriber: "BrightWave Innovations",
    Image: "company-01.svg",
    Plan: "Advanced (Monthly)",
    Billing_Cycle: "30 Days",
    Payment_Method: "Credit Card",
    Amount: "$200",
    Created_Date: "12 Sep 2024",
    Expiring_On: "11 Oct 2024",
    Status: "Paid",
  },
  {
    Subscriber: "Stellar Dynamics",
    Image: "company-02.svg",
    Plan: "Basic (Yearly)",
    Billing_Cycle: "365 Days",
    Payment_Method: "Paypal",
    Amount: "$600",
    Created_Date: "24 Oct 2024",
    Expiring_On: "23 Oct 2025",
    Status: "Paid",
  },
  {
    Subscriber: "Quantum Nexus",
    Image: "company-03.svg",
    Plan: "Advanced (Monthly)",
    Billing_Cycle: "30 Days",
    Payment_Method: "Debit Card",
    Amount: "$200",
    Created_Date: "18 Feb 2024",
    Expiring_On: "17 Mar 2024",
    Status: "Paid",
  },
  {
    Subscriber: "EcoVision Enterprises",
    Image: "company-04.svg",
    Plan: "Advanced (Monthly)",
    Billing_Cycle: "30 Days",
    Payment_Method: "Paypal",
    Amount: "$200",
    Created_Date: "17 Oct 2024",
    Expiring_On: "16 Nov 2024",
    Status: "Paid",
  },
  {
    Subscriber: "Aurora Technologies",
    Image: "company-05.svg",
    Plan: "Enterprise (Monthly)",
    Billing_Cycle: "30 Days",
    Payment_Method: "Credit Card",
    Amount: "$400",
    Created_Date: "20 Jul 2024",
    Expiring_On: "19 Aug 2024",
    Status: "Paid",
  },
  {
    Subscriber: "BlueSky Ventures",
    Image: "company-06.svg",
    Plan: "Advanced (Monthly)",
    Billing_Cycle: "30 Days",
    Payment_Method: "Paypal",
    Amount: "$200",
    Created_Date: "10 Apr 2024",
    Expiring_On: "19 Aug 2024",
    Status: "Paid",
  },
  {
    Subscriber: "TerraFusion Energy",
    Image: "company-07.svg",
    Plan: "Enterprise (Yearly)",
    Billing_Cycle: "365 Days",
    Payment_Method: "Credit Card",
    Amount: "$4800",
    Created_Date: "29 Aug 2024",
    Expiring_On: "28 Aug 2025",
    Status: "Paid",
  },
  {
    Subscriber: "UrbanPulse Design",
    Image: "company-08.svg",
    Plan: "Basic (Monthly)",
    Billing_Cycle: "30 Days",
    Payment_Method: "Credit Card",
    Amount: "$50",
    Created_Date: "22 Feb 2024",
    Expiring_On: "21 Mar 2024",
    Status: "Unpaid",
  },
  {
    Subscriber: "Nimbus Networks",
    Image: "company-09.svg",
    Plan: "Basic (Yearly)",
    Billing_Cycle: "365 Days",
    Payment_Method: "Paypal",
    Amount: "$600",
    Created_Date: "03 Nov 2024",
    Expiring_On: "02 Nov 2025",
    Status: "Paid",
  },
  {
    Subscriber: "Epicurean Delights",
    Image: "company-10.svg",
    Plan: "Advanced (Monthly)",
    Billing_Cycle: "30 Days",
    Payment_Method: "Credit Card",
    Amount: "$200",
    Created_Date: "17 Dec 2024",
    Expiring_On: "16 Jan 2024",
    Status: "Paid",
  },
];

const columns = [
  {
    sorter: false,
  },
  {
    title: "Subscriber",
    dataIndex: "Subscriber",
    key: "Subscriber",
    sorter: {
      compare: (a, b) => {
        a = a.Subscriber.toLowerCase();
        b = b.Subscriber.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Plan",
    dataIndex: "Plan",
    sorter: {
      compare: (a, b) => {
        a = a.Plan.toLowerCase();
        b = b.Plan.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Billing Cycle",
    dataIndex: "Billing_Cycle",
    sorter: {
      compare: (a, b) => {
        a = a.Billing_Cycle.toLowerCase();
        b = b.Billing_Cycle.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Payment Method",
    dataIndex: "Payment_Method",
    sorter: {
      compare: (a, b) => {
        a = a.Payment_Method.toLowerCase();
        b = b.Payment_Method.toLowerCase();
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
    title: "Expiring On",
    dataIndex: "Expiring_On",
    sorter: {
      compare: (a, b) => {
        a = a.Expiring_On.toLowerCase();
        b = b.Expiring_On.toLowerCase();
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
      <template v-if="column.key === 'Subscriber'">
        <div class="d-flex align-items-center file-name-icon">
          <a href="javascript:void(0);" class="avatar avatar-md border rounded-circle">
            <img :src="require(`@/assets/img/company/${record.Image}`)" class="img-fluid" alt="img" />
          </a>
          <div class="ms-2">
            <h6 class="fw-medium">
              <a href="javascript:void(0);">{{ record.Subscriber }}</a>
            </h6>
          </div>
        </div>
      </template>
      <template v-if="column.key === 'Status'">
        <span class="d-flex align-items-center badge-xs"
          :class="['badge', record.Status === 'Paid' ? 'badge-success' : 'badge-danger']">
          <i class="ti ti-point-filled me-1"></i>{{ record.Status }}
        </span>
      </template>
      <template v-if="column.key === 'action'">
        <div class="action-icon d-inline-flex">
          <a href="javascript:void(0);" class="me-2" data-bs-toggle="modal" data-bs-target="#view_invoice">
            <i class="ti ti-file-invoice"></i>
          </a>
          <a href="javascript:void(0);" class="me-2">
            <i class="ti ti-download"></i>
          </a>
          <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal">
            <i class="ti ti-trash"></i>
          </a>
        </div>
      </template>
    </template>
  </a-table>
</template>
