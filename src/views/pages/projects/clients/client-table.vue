<template>
  <div class="custom-datatable-filter table-responsive no-datatable-length border">
    <a-table class="table datatable thead-light" :columns="columns" :data-source="data" :row-selection="rowSelection">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'Name'">
          <div class="d-flex align-items-center file-name-icon">
            <a href="#" class="avatar avatar-md bg-light" data-bs-toggle="offcanvas" data-bs-target="#preview">
              <img :src="require(`@/assets/img/icons/${record.Image}`)" class="img-fluid" alt="img" /></a>
            <div class="ms-2">
              <p class="text-title fw-medium mb-0">
                <a href="#" data-bs-toggle="offcanvas" data-bs-target="#preview">{{ record.Name }}</a>
              </p>
            </div>
          </div>
        </template>
        <template v-if="column.key === 'Modified'">
          <p class="text-title mb-0">{{ record.Modified }}</p>
          <span>{{ record.Time }}</span>
        </template>
        <template v-if="column.key === 'Share'">
          <div class="avatar-list-stacked avatar-group-sm">
            <span class="avatar avatar-rounded">
              <img class="border border-white" :src="require(`@/assets/img/profiles/${record.ImageOne}`)" alt="img" />
            </span>
            <span class="avatar avatar-rounded">
              <img class="border border-white" :src="require(`@/assets/img/profiles/${record.ImageTwo}`)" alt="img" />
            </span>
            <span class="avatar avatar-rounded">
              <img class="border border-white" :src="require(`@/assets/img/profiles/${record.ImageThree}`)" alt="img" />
            </span>
            <span class="avatar avatar-rounded">
              <img class="border border-white" :src="require(`@/assets/img/profiles/${record.ImageFOur}`)" alt="img" />
            </span>
            <a class="avatar bg-primary avatar-rounded text-fixed-white" href="#">
              +1
            </a>
          </div>
        </template>
        <template v-if="column.key === 'action'">
          <div class="d-flex align-items-center">
            <div class="rating-select me-2">
              <a href="#"><i class="ti ti-star"></i></a>
            </div>
            <div class="dropdown">
              <a href="#" class="d-flex align-items-center justify-content-center" data-bs-toggle="dropdown"
                aria-expanded="false">
                <i class="ti ti-dots fs-14"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-right p-3">
                <li>
                  <a class="dropdown-item rounded-1" href="#">
                    <i class="ti ti-trash me-2"></i>Permanent Delete
                  </a>
                </li>
                <li>
                  <a class="dropdown-item rounded-1" href="#">
                    <i class="ti ti-edit-circle me-2"></i>Restore File
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </template>
      </template>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    sorter: false,
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
    title: "Size",
    dataIndex: "Size",
    sorter: {
      compare: (a, b) => {
        a = a.Size.toLowerCase();
        b = b.Size.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Type",
    dataIndex: "Type",
    sorter: {
      compare: (a, b) => {
        a = a.Type.toLowerCase();
        b = b.Type.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Modified",
    dataIndex: "Modified",
    key: "Modified",
    sorter: {
      compare: (a, b) => {
        a = a.Modified.toLowerCase();
        b = b.Modified.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Share",
    dataIndex: "Share",
    key: "Share",
    sorter: {
      compare: (a, b) => {
        a = a.Share.toLowerCase();
        b = b.Share.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "",
    key: "action",
    sorter: false,
  },
];
const data = [
  {
    Name: "Secret",
    Size: "7.6 MB",
    Type: "Doc",
    Modified: "Mar 15, 2025",
    Time: "05:00:14 PM",
    Image: "file-01.svg",
    ImageOne: "avatar-27.jpg",
    ImageTwo: "avatar-29.jpg",
    ImageThree: "avatar-12.jpg",
    ImageFOur: "avatar-06.jpg",
  },
  {
    Name: "Sophie Headrick",
    Size: "7.4 MB",
    Type: "PDF",
    Modified: "Jan 8, 2025",
    Time: "08:20:13 PM",
    Image: "file-02.svg",
    ImageOne: "avatar-15.jpg",
    ImageTwo: "avatar-16.jpg",
    ImageThree: "avatar-05.jpg",
    ImageFOur: "avatar-06.jpg",
  },
  {
    Name: "Gallery",
    Size: "6.1 MB",
    Type: "Image",
    Modified: "Aug 6, 2025",
    Time: "04:10:12 PM",
    Image: "file-03.svg",
    ImageOne: "avatar-02.jpg",
    ImageTwo: "avatar-03.jpg",
    ImageThree: "avatar-05.jpg",
    ImageFOur: "avatar-06.jpg",
  },
  {
    Name: "Doris Crowley",
    Size: "5.2 MB",
    Type: "Folder",
    Modified: "Jan 6, 2025",
    Time: "03:40:14 PM",
    Image: "file-04.svg",
    ImageOne: "avatar-06.jpg",
    ImageTwo: "avatar-10.jpg",
    ImageThree: "avatar-15.jpg",
    ImageFOur: "avatar-06.jpg",
  },
  {
    Name: "Cheat_codez",
    Size: "8 MB",
    Type: "Xml",
    Modified: "Oct 12, 2025",
    Time: "05:00:14 PM",
    Image: "file-05.svg",
    ImageOne: "avatar-28.jpg",
    ImageTwo: "avatar-14.jpg",
    ImageThree: "avatar-15.jpg",
    ImageFOur: "avatar-06.jpg",
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
