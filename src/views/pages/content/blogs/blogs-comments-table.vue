<script>
const data = [
  {
    Comment: "Useful breakdown of HRMS evolution!",
    Created_Date: "12 Sep 2024",
    Blog: "The Evolution of HRMS: From Manual to Digital",
    By: "Gertrude",
  },
  {
    Comment: "Easy-to-follow HRMS guide!",
    Created_Date: "24 Oct 2024",
    Blog: "HRMS Implementation: A Step-by-Step Guide",
    By: "Edward",
  },
  {
    Comment: "Essential tips on HRMS data security!",
    Created_Date: "18 Feb 2024",
    Blog: "Data Security in HRMS: What Matters",
    By: "Mark",
  },
  {
    Comment: "Great HRMS recruitment tips",
    Created_Date: "17 Oct 2024",
    Blog: "Improving Recruitment with HRMS",
    By: "Nidia",
  },
  {
    Comment: "Great look at how HRMS affects culture",
    Created_Date: "20 Jul 2024",
    Blog: "Impact of HRMS on Company Culture",
    By: "Rebecca",
  },
  {
    Comment: "Valuable points on HRMS benefits",
    Created_Date: "10 Apr 2024",
    Blog: "Key Benefits of Implementing HRMS",
    By: "Jimmy",
  },
  {
    Comment: "Great points on why an HRMS is crucial",
    Created_Date: "29 Aug 2024",
    Blog: "Why Your Company Needs an HRMS",
    By: "Richard",
  },
  {
    Comment: "Great take on HRMS technology’s future",
    Created_Date: "22 Feb 2024",
    Blog: "The Future of HRMS Technology",
    By: "Rachael",
  },
  {
    Comment: "Valuable insights on scaling HR with HRMS!",
    Created_Date: "03 Nov 2024",
    Blog: "Scaling Your HR Operations with HRMS",
    By: "Tammy",
  },
  {
    Comment: "Useful points on how HRMS drives success",
    Created_Date: "17 Dec 2024",
    Blog: "How HRMS Drives Organizational Success",
    By: "Judith",
  },
];

const columns = [
  {
    sorter: false,
  },
  {
    title: "Comment",
    dataIndex: "Comment",
    key: "Comment",
    sorter: {
      compare: (a, b) => {
        a = a.Comment.toLowerCase();
        b = b.Comment.toLowerCase();
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
    title: "Review",
    dataIndex: "Review",
    key: "Review",
    sorter: {
      compare: (a, b) => {
        a = a.Review.toLowerCase();
        b = b.Review.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Blog",
    dataIndex: "Blog",
    sorter: {
      compare: (a, b) => {
        a = a.Blog.toLowerCase();
        b = b.Blog.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "By",
    dataIndex: "By",
    sorter: {
      compare: (a, b) => {
        a = a.By.toLowerCase();
        b = b.By.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "",
    key: "Nil",
    sorter: true,
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
      <template v-if="column.key === 'Comment'">
        {{ record.Comment }}
      </template>
      <template v-if="column.key === 'Review'">
        <span class="text-warning">
          <i class="ti ti-star-filled"></i>
          <i class="ti ti-star-filled"></i>
          <i class="ti ti-star-filled"></i>
          <i class="ti ti-star-filled"></i>
          <i class="ti ti-star-filled"></i>
        </span>
      </template>
      <template v-if="column.key === 'Nil'">
        <div class="dropdown me-3">
          <a
            href="javascript:void(0);"
            class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
            data-bs-toggle="dropdown"
          >
            unpublish
          </a>
          <ul class="dropdown-menu dropdown-menu-end p-3">
            <li>
              <a href="javascript:void(0);" class="dropdown-item rounded-1">unpublish</a>
            </li>
            <li>
              <a href="javascript:void(0);" class="dropdown-item rounded-1">publish</a>
            </li>
          </ul>
        </div>
      </template>
      <template v-if="column.key === 'action'">
        <div class="action-icon d-inline-flex">
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
