<script>
const data = [
  {
    Image: "user-49.jpg",
    Name: "Darlee Robertson",
    Roll: "Facility Manager",
    Email: "darlee@example.com",
    Phone: "(163) 2459 315",
    Location: "Germany",
    Rating: "4.2",
    Owner: "Hendry Milner",
    Status: "Active",
  },
  {
    Image: "user-50.jpg",
    Name: "Sharon Roy",
    Roll: "Installer",
    Email: "sharon@example.com",
    Phone: "(146) 1249 296",
    Location: "USA",
    Rating: "5",
    Owner: "Guilory Berggren",
    Status: "Active",
  },
  {
    Image: "user-51.jpg",
    Name: "Vaughan Lewis",
    Roll: "Senior  Manager",
    Email: "vaughan@example.com",
    Phone: "(135) 3489 516",
    Location: "Canada",
    Rating: "3.5",
    Owner: "Jami Carlile",
    Status: "Active",
  },
  {
    Image: "user-02.jpg",
    Name: "Jessica Louise",
    Roll: "Test Engineer",
    Email: "jessica@example.com",
    Phone: "(158) 3459 596",
    Location: "India",
    Rating: "4.5",
    Owner: "Theresa Nelson",
    Status: "Active",
  },
  {
    Image: "user-52.jpg",
    Name: "Carol Thomas",
    Roll: "UI /UX Designer",
    Email: "carol@example.com",
    Phone: "(196) 4862 196",
    Location: "China",
    Rating: "4.7",
    Owner: "Smith Cooper",
    Status: "Active",
  },
  {
    Image: "user-57.jpg",
    Name: "Dawn Mercha",
    Roll: "Technician",
    Email: "dawn@example.com",
    Phone: "(163) 6498 256",
    Location: "Japan",
    Rating: "5",
    Owner: "Martin Lewis",
    Status: "Active",
  },
  {
    Image: "user-54.jpg",
    Name: "Rachel Hampton",
    Roll: "Software Developer",
    Email: "rachel@example.com",
    Phone: "(154) 6481 075",
    Location: "Indonesia",
    Rating: "3.1",
    Owner: "Newell Egan",
    Status: "Active",
  },
  {
    Image: "user-56.jpg",
    Name: "Jonelle Curtiss",
    Roll: "Supervisor",
    Email: "jonella@example.com",
    Phone: "(184) 6348 195",
    Location: "Cuba",
    Rating: "5",
    Owner: "Janet Carlson",
    Status: "Active",
  },
  {
    Image: "user-26.jpg",
    Name: "Jonathan Smith",
    Roll: "Team Lead Dev",
    Email: "jonathan@example.com",
    Phone: "(175) 2496 125",
    Location: "Israel",
    Rating: "2.7",
    Owner: "Craig Brown",
    Status: "Active",
  },
  {
    Image: "user-36.jpg",
    Name: "Patricia Carter",
    Roll: "Team Lead Dev",
    Email: "patricia@example.com",
    Phone: "(132) 3145 977",
    Location: "Colombia",
    Rating: "3",
    Owner: "Daniel Byrne",
    Status: "Active",
  },
];

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
    title: "Email",
    dataIndex: "Email",
    sorter: {
      compare: (a, b) => {
        a = a.Email.toLowerCase();
        b = b.Email.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Phone",
    dataIndex: "Phone",
    sorter: {
      compare: (a, b) => {
        a = a.Phone.toLowerCase();
        b = b.Phone.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Location",
    dataIndex: "Location",
    sorter: {
      compare: (a, b) => {
        a = a.Location.toLowerCase();
        b = b.Location.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Rating",
    dataIndex: "Rating",
    key: "Rating",
    sorter: {
      compare: (a, b) => {
        a = a.Rating.toLowerCase();
        b = b.Rating.toLowerCase();
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
    title: "Contact",
    dataIndex: "Contact",
    key: "Contact",
    sorter: {
      compare: (a, b) => {
        a = a.Contact.toLowerCase();
        b = b.Contact.toLowerCase();
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
      <template v-if="column.key === 'Name'">
        <div class="d-flex align-items-center file-name-icon">
          <router-link to="/crm/contact-details" class="avatar avatar-md border avatar-rounded">
            <img :src="require(`@/assets/img/users/${record.Image}`)" class="img-fluid" alt="img" />
          </router-link>
          <div class="ms-2">
            <h6 class="fw-medium">
              <router-link to="/crm/contact-details">{{ record.Name }}</router-link>
            </h6>
            <span class="fs-12 fw-normal">{{ record.Roll }}</span>
          </div>
        </div>
      </template>
      <template v-if="column.key === 'Rating'">
        <span class="d-flex align-items-center"><i class="ti ti-star-filled text-warning me-2"></i>{{ record.Rating
        }}</span>
      </template>
      <template v-if="column.key === 'Contact'">
        <ul class="contact-icon d-flex align-items-center">
          <li>
            <a href="javascript:void(0);"
              class="p-1 rounded-circle contact-icon-mail d-flex align-items-center justify-content-center"><span
                class="d-flex align-items-center justify-content-center"><i
                  class="ti ti-mail text-gray-5"></i></span></a>
          </li>
          <li>
            <a href="javascript:void(0);"
              class="p-1 rounded-circle contact-icon-call d-flex align-items-center justify-content-center"><span
                class="d-flex align-items-center justify-content-center"><i
                  class="ti ti-phone-call text-gray-5"></i></span></a>
          </li>
          <li>
            <a href="javascript:void(0);"
              class="p-1 rounded-circle contact-icon-msg d-flex align-items-center justify-content-center"><span
                class="d-flex align-items-center justify-content-center"><i
                  class="ti ti-message-2 text-gray-5"></i></span></a>
          </li>
          <li>
            <a href="javascript:void(0);"
              class="p-1 rounded-circle contact-icon-skype d-flex align-items-center justify-content-center"><span
                class="d-flex align-items-center justify-content-center"><i
                  class="ti ti-brand-skype text-gray-5"></i></span></a>
          </li>
          <li>
            <a href="javascript:void(0);"
              class="p-1 rounded-circle contact-icon-facebook d-flex align-items-center justify-content-center"><span
                class="d-flex align-items-center justify-content-center"><i
                  class="ti ti-brand-facebook text-gray-5"></i></span></a>
          </li>
        </ul>
      </template>
      <template v-if="column.key === 'Status'">
        <span class="badge badge-success d-inline-flex align-items-center badge-xs">
          <i class="ti ti-point-filled me-1"></i>{{ record.Status }}
        </span>
      </template>
      <template v-if="column.key === 'action'">
        <div class="action-icon d-inline-flex">
          <a href="javascript:void(0);" class="me-2" data-bs-toggle="modal" data-bs-target="#edit_contact"><i
              class="ti ti-edit"></i></a>
          <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i
              class="ti ti-trash"></i></a>
        </div>
      </template>
    </template>
  </a-table>
</template>
