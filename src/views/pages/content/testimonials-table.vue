<script>
const data = [
  {
    Image: "user-01.jpg",
    Author: "Ivan Lucas",
    Role: "HR Manager",
    Content:
      "This system streamlined our HR processes, saving us time and boosting team efficiency.",
    Created_Date: "12 Sep 2024",
  },
  {
    Image: "user-02.jpg",
    Author: "John Mason",
    Role: "HR Manager",
    Content:
      "This system has made payroll and attendance tracking so much easier for our team",
    Created_Date: "24 Oct 2024",
  },
  {
    Image: "user-03.jpg",
    Author: "Susan Hill",
    Role: "HR Manager",
    Content:
      "We've significantly reduced paperwork and manual errors since implementing this platform",
    Created_Date: "18 Feb 2024",
  },
  {
    Image: "user-04.jpg",
    Author: "Gary Payton",
    Role: "HR Manager",
    Content: "Managing employee leave requests and benefits is now a hassle-free process",
    Created_Date: "17 Oct 2024",
  },
  {
    Image: "user-05.jpg",
    Author: "Jennifer Vaughn",
    Role: "HR Manager",
    Content:
      "This platform has drastically cut down the time we spend on recruitment and onboarding.",
    Created_Date: "20 July 2024",
  },
  {
    Image: "user-06.jpg",
    Author: "Ricky Easley",
    Role: "HR Manager",
    Content: "The system's ease of use has greatly improved our HR team's productivity.",
    Created_Date: "10 Apr 2024",
  },
  {
    Image: "user-07.jpg",
    Author: "David Rodriguez",
    Role: "HR Manager",
    Content:
      "The platform allows me to update my personal details and view my payslips instantly",
    Created_Date: "29 Aug 2024",
  },
  {
    Image: "user-08.jpg",
    Author: "Dennis Lorenzo",
    Role: "Employee",
    Content:
      "Submitting my timesheets and checking my attendance is super easy with this tool.",
    Created_Date: "22 Feb 2024",
  },
  {
    Image: "user-09.jpg",
    Author: "Barry Ducote",
    Role: "Manager",
    Content:
      "Enhanced employee performance tracking and simplified payroll management effortlessly.",
    Created_Date: "03 Nov 2024",
  },
  {
    Image: "user-10.jpg",
    Author: "Judy Walton",
    Role: "Employee",
    Content:
      "It’s great to see all my benefits and compensation details in one user-friendly interface.",
    Created_Date: "17 Dec 2024",
  },
];

const columns = [
  {
    sorter: false,
  },
  {
    title: "Author",
    dataIndex: "Author",
    key: "Author",
    sorter: {
      compare: (a, b) => {
        a = a.Author.toLowerCase();
        b = b.Author.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Role",
    dataIndex: "Role",
    sorter: {
      compare: (a, b) => {
        a = a.Role.toLowerCase();
        b = b.Role.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Content",
    dataIndex: "Content",
    sorter: {
      compare: (a, b) => {
        a = a.Content.toLowerCase();
        b = b.Content.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Created_Date",
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
      <template v-if="column.key === 'Author'">
        <div class="d-flex align-items-center file-name-icon">
          <a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
            <img :src="require(`@/assets/img/testimonials/${record.Image}`)" class="img-fluid" alt="img" />
          </a>
          <div class="ms-2">
            <h6 class="fw-medium">
              <a href="javascript:void(0);">{{ record.Author }}</a>
            </h6>
          </div>
        </div>
      </template>
      <template v-if="column.key === 'action'">
        <div class="action-icon d-inline-flex">
          <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonials" class="me-2"><i
              class="ti ti-edit"></i></a>
          <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i
              class="ti ti-trash"></i></a>
        </div>
      </template>
    </template>
  </a-table>
</template>
