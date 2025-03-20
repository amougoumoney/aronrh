<script>
const data = [
    {
        "Tax_Name": "VAT",
        "Tax_Percentage": "20%",
        "Status": "Active",
    },
    {
        "Tax_Name": "GST",
        "Tax_Percentage": "18%",
        "Status": "Active",
    },
    {
        "Tax_Name": "Income Tax",
        "Tax_Percentage": "30%",
        "Status": "Inactive",
    },
    {
        "Tax_Name": "Corporate Tax",
        "Tax_Percentage": "25%",
        "Status": "Inactive",
    }
]

const columns = [
    {
        sorter: false,
    },
    {
        title: "Tax Name",
        dataIndex: "Tax_Name",
        key: "Tax_Name",
        sorter: {
            compare: (a, b) => {
                a = a.Tax_Name.toLowerCase();
                b = b.Tax_Name.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "Tax Percentage",
        dataIndex: "Tax_Percentage",
        sorter: {
            compare: (a, b) => {
                a = a.Tax_Percentage.toLowerCase();
                b = b.Tax_Percentage.toLowerCase();
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
            <template v-if="column.key === 'Tax_Name'">
                <div class="d-flex align-items-center">
                    <h6 class="fs-14 fw-medium text-gray-9 me-2">{{ record.Tax_Name }}</h6>
                    <a href="#" class="text-info" data-bs-toggle="tooltip" data-bs-placement="right"
                        title="Comprehensive tax on the supply of goods and services.">
                        <i class="ti ti-info-circle"></i>
                    </a>
                </div>
            </template>
            <template v-if="column.key === 'Status'">
                <div class="dropdown">
                    <a href="#" class="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center"
                        data-bs-toggle="dropdown">
                        <span class="rounded-circle d-flex justify-content-center align-items-center me-2"
                            :class="[record.Status === 'Active' ? 'bg-transparent-success' : 'bg-transparent-danger']">
                            <i class="ti ti-point-filled text-success"
                                :class="[record.Status === 'Active' ? 'text-success' : 'text-danger']"></i>
                        </span> {{ record.Status }}
                    </a>
                    <ul class="dropdown-menu  dropdown-menu-end p-3">
                        <li>
                            <a href="#"
                                class="dropdown-item rounded-1 d-flex justify-content-start align-items-center"><span
                                    class="rounded-circle bg-transparent-success d-flex justify-content-center align-items-center me-2"><i
                                        class="ti ti-point-filled text-success"></i></span>Active</a>
                        </li>
                        <li>
                            <a href="#"
                                class="dropdown-item rounded-1 d-flex justify-content-start align-items-center"><span
                                    class="rounded-circle bg-transparent-danger d-flex justify-content-center align-items-center me-2"><i
                                        class="ti ti-point-filled text-danger"></i></span>Inactive</a>
                        </li>
                    </ul>
                </div>
            </template>
            <template v-if="column.key === 'action'">
                <div class="action-icon d-inline-flex">
                    <a href="#" class="me-2" data-bs-toggle="modal" data-bs-target="#edit_tax"><i
                            class="ti ti-edit"></i></a>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
                </div>
            </template>
        </template>
    </a-table>
</template>