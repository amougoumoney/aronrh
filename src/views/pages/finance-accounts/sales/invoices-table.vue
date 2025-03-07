<script>
const data = [
  {
    Invoice: "INV-1454",
    Image: "user-32.jpg",
    Name: "Anthony Lewis",
    Roll: "anthony@example.com",
    Created_On: "14 Jan 2024, 04:27 AM",
    Total: "$300",
    Amount_Due: "$0",
    Due_Date: "14 Jan 2024, 04:27 AM",
    Status: "Paid",
  },
  {
    Invoice: "INV-6571",
    Image: "user-09.jpg",
    Name: "Brian Villalobos",
    Roll: "brian@example.com",
    Created_On: "21 Jan 2024, 03:19 AM",
    Total: "$547",
    Amount_Due: "$200",
    Due_Date: "21 Jan 2024, 03:19 AM",
    Status: "Overdue",
  },
  {
    Invoice: "INV-2245",
    Image: "user-01.jpg",
    Name: "Harvey Smith",
    Roll: "harvey@example.com",
    Created_On: "20 Feb 2024, 12:15 PM",
    Total: "$325",
    Amount_Due: "$65",
    Due_Date: "20 Feb 2024, 12:15 PM",
    Status: "Pending",
  },
  {
    Invoice: "INV-1456",
    Image: "user-33.jpg",
    Name: "Stephan Peralt",
    Roll: "peral@example.com",
    Created_On: "15 Mar 2024, 12:11 AM",
    Total: "$471",
    Amount_Due: "$145",
    Due_Date: "15 Mar 2024, 12:11 AM",
    Status: "Pending",
  },
  {
    Invoice: "INV-0045",
    Image: "user-34.jpg",
    Name: "Doglas Martini",
    Roll: "martniwr@example.com",
    Created_On: "12 Apr 2024, 05:48 PM",
    Total: "$147",
    Amount_Due: "$32",
    Due_Date: "12 Apr 2024, 05:48 PM",
    Status: "Overdue",
  },
  {
    Invoice: "INV-6244",
    Image: "user-02.jpg",
    Name: "Linda Ray",
    Roll: "ray456@example.com",
    Created_On: "20 May 2024, 06:11 PM",
    Total: "$654",
    Amount_Due: "$140",
    Due_Date: "20 May 2024, 06:11 PM",
    Status: "Draft",
  },
  {
    Invoice: "INV-9565",
    Image: "user-35.jpg",
    Name: "Elliot Murray",
    Roll: "murray@example.com",
    Created_On: "14 Jan 2024, 04:27 AM",
    Total: "$300",
    Amount_Due: "$0",
    Due_Date: "14 Jan 2024, 04:27 AM",
    Status: "Paid",
  },
  {
    Invoice: "INV-6874",
    Image: "user-36.jpg",
    Name: "Rebecca Smtih",
    Roll: "smtih@example.com",
    Created_On: "02 Sep 2024, 09:21 PM",
    Total: "$654",
    Amount_Due: "$65",
    Due_Date: "02 Sep 2024, 09:21 PM",
    Status: "Paid",
  },
  {
    Invoice: "INV-1454",
    Image: "user-32.jpg",
    Name: "Anthony Lewis",
    Roll: "anthony@example.com",
    Created_On: "14 Jan 2024, 04:27 AM",
    Total: "$300",
    Amount_Due: "$0",
    Due_Date: "14 Jan 2024, 04:27 AM",
    Status: "Draft",
  },
  {
    Invoice: "INV-6587",
    Image: "user-37.jpg",
    Name: "Connie Waters",
    Roll: "connie@example.com",
    Created_On: "15 Nov 2024, 12:44 PM",
    Total: "$987",
    Amount_Due: "$47",
    Due_Date: "15 Nov 2024, 12:44 PM",
    Status: "Pending",
  },
  {
    Invoice: "INV-5879",
    Image: "user-38.jpg",
    Name: "Lori Broaddus",
    Roll: "broaddus@example.com",
    Created_On: "10 Dec 2024, 11:23 PM",
    Total: "$365",
    Amount_Due: "$21",
    Due_Date: "10 Dec 2024, 11:23 PM",
    Status: "Overdue",
  },
];

const columns = [
  {
    sorter: false,
  },
  {
    title: "Invoice",
    dataIndex: "Invoice",
    key: "Invoice",
    sorter: {
      compare: (a, b) => {
        a = a.Invoice.toLowerCase();
        b = b.Invoice.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    sorter: {
      compare: (a, b) => {
        a = a.Name.toLowerCase();
        b = b.Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Created On",
    dataIndex: "Created_On",
    sorter: {
      compare: (a, b) => {
        a = a.Created_On.toLowerCase();
        b = b.Created_On.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Total",
    dataIndex: "Total",
    sorter: {
      compare: (a, b) => {
        a = a.Total.toLowerCase();
        b = b.Total.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Amount Due",
    dataIndex: "Amount_Due",
    sorter: {
      compare: (a, b) => {
        a = a.Amount_Due.toLowerCase();
        b = b.Amount_Due.toLowerCase();
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
      <template v-if="column.key === 'Invoice'">
        <router-link to="/sales/invoice-details" class="tb-data">{{
          record.Invoice
        }}</router-link>
      </template>
      <template v-if="column.key === 'Name'">
        <div class="d-flex align-items-center">
          <router-link to="/sales/invoice-details" class="avatar avatar-md me-2">
            <img
              :src="require(`@/assets/img/users/${record.Image}`)"
              class="rounded-circle"
              alt="user"
            />
          </router-link>
          <div>
            <h6 class="fw-medium">
              <router-link to="/sales/invoice-details">{{ record.Name }}</router-link>
            </h6>
            <span class="fs-12">{{ record.Email }}</span>
          </div>
        </div>
      </template>
      <template v-if="column.key === 'Status'">
        <span
          class="d-inline-flex align-items-center"
          :class="[
            'badge',
            record.Status === 'Paid'
              ? 'badge-soft-success'
              : record.Status === 'Pending'
              ? 'badge-soft-purple'
              : record.Status === 'Draft'
              ? 'badge-soft-warning'
              : 'badge-soft-danger',
          ]"
        >
          <i class="ti ti-point-filled me-1"></i>{{ record.Status }}
        </span>
      </template>
      <template v-if="column.key === 'action'">
        <div class="action-icon d-inline-flex">
          <router-link to="/sales/invoice-details" class="me-2"
            ><i class="ti ti-eye"></i
          ></router-link>
          <router-link to="/sales/edit-invoices" class="me-2"
            ><i class="ti ti-edit"></i
          ></router-link>
          <a
            href="#delete_modal"
            class=""
            data-bs-toggle="modal"
            data-bs-target="#delete_modal"
            ><i class="ti ti-trash"></i
          ></a>
        </div>
      </template>
    </template>
  </a-table>
</template>
