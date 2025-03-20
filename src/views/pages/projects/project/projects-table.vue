<script>
const data = [
  {
    Project_ID: "PRO-001",
    Image: "user-39.jpg",
    Project_Name: "Office Management App",
    Leader: "Michael Walker",
    Img: "avatar-02.jpg",
    Img1: "avatar-03.jpg",
    Img2: "avatar-05.jpg",
    Team: "1",
    Deadline: "12 Sep 2024",
    Priority: "High",
    Status: "Active",
  },
  {
    Project_ID: "PRO-002",
    Image: "user-09.jpg",
    Project_Name: "Clinic Management",
    Leader: "Brian Villalobos",
    Img: "avatar-06.jpg",
    Img1: "avatar-07.jpg",
    Img2: "avatar-08.jpg",
    Team: "1",
    Deadline: "24 Oct 2024",
    Priority: "Low",
    Status: "Active",
  },
  {
    Project_ID: "PRO-003",
    Image: "user-01.jpg",
    Project_Name: "Educational Platform",
    Leader: "Harvey Smith",
    Img: "avatar-09.jpg",
    Img1: "avatar-10.jpg",
    Img2: "avatar-11.jpg",
    Team: "1",
    Deadline: "18 Feb 2024",
    Priority: "Medium",
    Status: "Active",
  },
  {
    Project_ID: "PRO-004",
    Image: "user-33.jpg",
    Project_Name: "Chat & Call  Mobile App",
    Leader: "Stephan Peralt",
    Img: "avatar-12.jpg",
    Img1: "avatar-13.jpg",
    Img2: "avatar-14.jpg",
    Team: "3",
    Deadline: "17 Oct 2024",
    Priority: "Medium",
    Status: "Active",
  },
  {
    Project_ID: "PRO-005",
    Image: "user-34.jpg",
    Project_Name: "Travel Planning Website",
    Leader: "Doglas Martini",
    Img: "avatar-15.jpg",
    Img1: "avatar-16.jpg",
    Img2: "avatar-17.jpg",
    Team: "2",
    Deadline: "20 Jul 2024",
    Priority: "Medium",
    Status: "Active",
  },
  {
    Project_ID: "PRO-006",
    Image: "user-02.jpg",
    Project_Name: "Service Booking Software",
    Leader: "Linda Ray",
    Img: "avatar-18.jpg",
    Img1: "avatar-19.jpg",
    Img2: "avatar-20.jpg",
    Team: "4",
    Deadline: "10 Feb 2024",
    Priority: "High",
    Status: "Active",
  },
  {
    Project_ID: "PRO-007",
    Image: "user-35.jpg",
    Project_Name: "Hotel Booking App",
    Leader: "Elliot Murray",
    Img: "avatar-21.jpg",
    Img1: "avatar-22.jpg",
    Img2: "avatar-23.jpg",
    Team: "4",
    Deadline: "10 Apr 2024",
    Priority: "Medium",
    Status: "Active",
  },
  {
    Project_ID: "PRO-008",
    Image: "user-36.jpg",
    Project_Name: "Car & Bike Rental Software",
    Leader: "Rebecca Smtih",
    Img: "avatar-24.jpg",
    Img1: "avatar-25.jpg",
    Img2: "avatar-26.jpg",
    Team: "2",
    Deadline: "22 Feb 2024",
    Priority: "Low",
    Status: "Inactive",
  },
  {
    Project_ID: "PRO-009",
    Image: "user-37.jpg",
    Project_Name: "Food Order App",
    Leader: "Connie Waters",
    Img: "avatar-27.jpg",
    Img1: "avatar-28.jpg",
    Img2: "avatar-29.jpg",
    Team: "3",
    Deadline: "03 Nov 2024",
    Priority: "Medium",
    Status: "Active",
  },
  {
    Project_ID: "PRO-010",
    Image: "user-38.jpg",
    Project_Name: "POS Admin Software",
    Leader: "Lori Broaddus",
    Img: "avatar-30.jpg",
    Img1: "avatar-13.jpg",
    Img2: "avatar-01.jpg",
    Team: "4",
    Deadline: "17 Dec 2024",
    Priority: "High",
    Status: "Active",
  },
];

const columns = [
  {
    sorter: false,
  },
  {
    title: "Project ID",
    dataIndex: "Project_ID",
    key: "Project_ID",
    sorter: {
      compare: (a, b) => {
        a = a.Project_ID.toLowerCase();
        b = b.Project_ID.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Project Name",
    dataIndex: "Project_Name",
    key: "Project_Name",
    sorter: {
      compare: (a, b) => {
        a = a.Project_Name.toLowerCase();
        b = b.Project_Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Leader",
    dataIndex: "Leader",
    key: "Leader",
    sorter: {
      compare: (a, b) => {
        a = a.Leader.toLowerCase();
        b = b.Leader.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Team",
    dataIndex: "Team",
    key: "Team",
    sorter: {
      compare: (a, b) => {
        a = a.Team.toLowerCase();
        b = b.Team.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Deadline",
    dataIndex: "Deadline",
    sorter: {
      compare: (a, b) => {
        a = a.Deadline.toLowerCase();
        b = b.Deadline.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Priority",
    dataIndex: "Priority",
    key: "Priority",
    sorter: {
      compare: (a, b) => {
        a = a.Priority.toLowerCase();
        b = b.Priority.toLowerCase();
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
      <template v-if="column.key === 'Project_ID'">
        <router-link to="/projects/projects-details">{{ record.Project_ID }}</router-link>
      </template>
      <template v-if="column.key === 'Project_Name'">
        <h6 class="fw-medium">{{ record.Project_Name }}</h6>
      </template>
      <template v-if="column.key === 'Leader'">
        <div class="d-flex align-items-center file-name-icon">
          <a href="#" class="avatar avatar-sm border avatar-rounded">
            <img :src="require(`@/assets/img/users/${record.Image}`)" class="img-fluid" alt="img" />
          </a>
          <div class="ms-2">
            <h6 class="fw-normal">
              <a href="#">{{ record.Leader }}</a>
            </h6>
          </div>
        </div>
      </template>
      <template v-if="column.key === 'Team'">
        <div class="avatar-list-stacked avatar-group-sm">
          <span class="avatar avatar-rounded">
            <img class="border border-white" :src="require(`@/assets/img/profiles/${record.Img}`)" alt="img" />
          </span>
          <span class="avatar avatar-rounded">
            <img class="border border-white" :src="require(`@/assets/img/profiles/${record.Img1}`)" alt="img" />
          </span>
          <span class="avatar avatar-rounded">
            <img class="border border-white" :src="require(`@/assets/img/profiles/${record.Img2}`)" alt="img" />
          </span>
          <a class="avatar bg-primary avatar-rounded text-fixed-white fs-12 fw-medium" href="#">
            +{{ record.Team }}
          </a>
        </div>
      </template>
      <template v-if="column.key === 'Priority'">
        <div class="dropdown">
          <a href="#" class="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center"
            data-bs-toggle="dropdown">
            <span class="rounded-circle d-flex justify-content-center align-items-center me-2" :class="[
              record.Priority === 'High'
                ? 'bg-transparent-danger'
                : record.Priority === 'Low'
                  ? 'bg-transparent-success'
                  : 'bg-transparent-warning',
            ]">
              <i class="ti ti-point-filled" :class="[
                record.Priority === 'High'
                  ? 'text-danger'
                  : record.Priority === 'Low'
                    ? 'text-success'
                    : 'text-warning',
              ]"></i>
            </span>
            {{ record.Priority }}
          </a>
          <ul class="dropdown-menu dropdown-menu-end p-3">
            <li>
              <a href="#" class="dropdown-item rounded-1 d-flex justify-content-start align-items-center"><span
                  class="rounded-circle bg-transparent-danger d-flex justify-content-center align-items-center me-2"><i
                    class="ti ti-point-filled text-danger"></i></span>High</a>
            </li>
            <li>
              <a href="#" class="dropdown-item rounded-1 d-flex justify-content-start align-items-center"><span
                  class="rounded-circle bg-transparent-warning d-flex justify-content-center align-items-center me-2"><i
                    class="ti ti-point-filled text-warning"></i></span>Medium</a>
            </li>
            <li>
              <a href="#" class="dropdown-item rounded-1 d-flex justify-content-start align-items-center"><span
                  class="rounded-circle bg-transparent-success d-flex justify-content-center align-items-center me-2"><i
                    class="ti ti-point-filled text-success"></i></span>Low</a>
            </li>
          </ul>
        </div>
      </template>
      <template v-if="column.key === 'Status'">
        <span class="d-inline-flex align-items-center badge-xs" :class="[
          'badge',
          record.Status === 'Active' ? 'badge-success' : 'badge-danger',
        ]">
          <i class="ti ti-point-filled me-1"></i>{{ record.Status }}
        </span>
      </template>
      <template v-if="column.key === 'action'">
        <div class="action-icon d-inline-flex">
          <a href="#" class="me-2" data-bs-toggle="modal" data-bs-target="#edit_project"><i class="ti ti-edit"></i></a>
          <a href="#" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
        </div>
      </template>
    </template>
  </a-table>
</template>
