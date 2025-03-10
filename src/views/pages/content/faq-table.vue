<script>
const data = [
  {
    "Questions": "What is an ARONHR?",
    "Answers": "Software system that automates and manages various human resources tasks",
    "Categories": "General"
  },
  {
    "Questions": "How does an ARONHR benefit organizations?",
    "Answers": "It enhances operational efficiency, reduces manual errors, and centralizes HR tasks",
    "Categories": "General"
  },
  {
    "Questions": "Is the data stored in an AronHR secure?",
    "Answers": "Yes, AronHR is design with advanced security measures, including data encryption",
    "Categories": "Feature"
  },
  {
    "Questions": "How do I add a new employee to the ARONHR?",
    "Answers": "Add new employees by  entering their personal details & setting up their profiles.",
    "Categories": "Employee"
  },
  {
    "Questions": "How do I generate custom reports in the AronHR?",
    "Answers": "Custom reports can be generated using the reporting module within the ARONHR",
    "Categories": "Reports"
  },
  {
    "Questions": "How do I schedule training sessions in the ARONHR?",
    "Answers": "Creating training events, setting dates and times, and enrolling employees",
    "Categories": "Leaves"
  },
  {
    "Questions": "How do I process payroll in the AronHR?",
    "Answers": "Reviewing employee hours and deductions and executing payments.",
    "Categories": "Payroll"
  },
  {
    "Questions": "How do I export reports from the ARONHR?",
    "Answers": "Export reports by selecting the desired report format and using the export function",
    "Categories": "Reports"
  },
  {
    "Questions": "Can I track employee attendance and absences?",
    "Answers": "Yes, track attendance and absences by using the attendance management",
    "Categories": "Employee"
  },
  {
    "Questions": "Can I track employee attendance and absences?",
    "Answers": "Yes, track attendance and absences by using the attendance management",
    "Categories": "Employee"
  },
  {
    "Questions": "How can I assign a ticket to a specific team member?",
    "Answers": "Assign a ticket by selecting the ticket from the queue, choosing the team member",
    "Categories": "Tickets"
  }
]

const columns = [
  {
    sorter: false,
  },
  {
    title: "Questions",
    dataIndex: "Questions",
    key: "Questions",
    sorter: {
      compare: (a, b) => {
        a = a.Questions.toLowerCase();
        b = b.Questions.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Answers",
    dataIndex: "Answers",
    sorter: {
      compare: (a, b) => {
        a = a.Answers.toLowerCase();
        b = b.Answers.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Categories",
    dataIndex: "Categories",
    sorter: {
      compare: (a, b) => {
        a = a.Categories.toLowerCase();
        b = b.Categories.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "",
    key: "action",
    sorter: true
  },
]

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
    }
  },
}
</script>

<template>
  <a-table class="table datatable thead-light" :columns="columns" :data-source="data" :row-selection="rowSelection">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'Questions'">
        <h6 class="fw-medium"><a href="javascript:void(0);">{{ record.Questions }}</a></h6>
      </template>
      <template v-if="column.key === 'action'">
        <div class="action-icon d-inline-flex">
          <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_faq" class="me-2"><i
              class="ti ti-edit"></i></a>
          <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i
              class="ti ti-trash"></i></a>
        </div>
      </template>
    </template>
  </a-table>
</template>