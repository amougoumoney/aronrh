<script>
const data = [
 {
   "Employee_Name": "Anthony Lewis",
   "Image": "user-32.jpg",
   "Roll": "Finance",
   "Provident_Fund_Type": "Employee Provident Fund",
   "Employee_Share": "2%",
   "Organization_Share": "2%",
   "Status": "Approved"
 },
 {
   "Employee_Name": "Brian Villalobos",
   "Image": "user-09.jpg",
   "Roll": "Developer",
   "Provident_Fund_Type": "Employee Provident Fund",
   "Employee_Share": "2%",
   "Organization_Share": "2%",
   "Status": "Pending"
 },
 {
   "Employee_Name": "Harvey Smith",
   "Image": "user-01.jpg",
   "Roll": "Developer",
   "Provident_Fund_Type": "Voluntary Provident Fund",
   "Employee_Share": "5%",
   "Organization_Share": "2%",
   "Status": "Approved"
 },
 {
   "Employee_Name": "Stephan Peralt",
   "Image": "user-33.jpg",
   "Roll": "Executive Officer",
   "Provident_Fund_Type": "Voluntary Provident Fund",
   "Employee_Share": "3%",
   "Organization_Share": "2%",
   "Status": "Pending"
 },
 {
   "Employee_Name": "Doglas Martini",
   "Image": "user-34.jpg",
   "Roll": "Manager",
   "Provident_Fund_Type": "Employee Provident Fund",
   "Employee_Share": "2%",
   "Organization_Share": "2%",
   "Status": "Approved"
 },
 {
   "Employee_Name": "Linda Ray",
   "Image": "user-02.jpg",
   "Roll": "Finance",
   "Provident_Fund_Type": "Employee Provident Fund",
   "Employee_Share": "2%",
   "Organization_Share": "2%",
   "Status": "Pending"
 },
 {
   "Employee_Name": "Elliot Murray",
   "Image": "user-35.jpg",
   "Roll": "Developer",
   "Provident_Fund_Type": "Voluntary Provident Fund",
   "Employee_Share": "6%",
   "Organization_Share": "2%",
   "Status": "Approved"
 },
 {
   "Employee_Name": "Rebecca Smtih",
   "Image": "user-36.jpg",
   "Roll": "Executive",
   "Provident_Fund_Type": "Voluntary Provident Fund",
   "Employee_Share": "4%",
   "Organization_Share": "2%",
   "Status": "Pending"
 },
 {
   "Employee_Name": "Connie Waters",
   "Image": "user-37.jpg",
   "Roll": "Developer",
   "Provident_Fund_Type": "Employee Provident Fund",
   "Employee_Share": "2%",
   "Organization_Share": "2%",
   "Status": "Approved"
 },
 {
   "Employee_Name": "Lori Broaddus",
   "Image": "user-38.jpg",
   "Roll": "Finance",
   "Provident_Fund_Type": "Voluntary Provident Fund",
   "Employee_Share": "7%",
   "Organization_Share": "2%",
   "Status": "Pending"
 }
]

const columns = [
    {
        sorter: false,
    },
    {
        title: "Employee Name",
        dataIndex: "Employee_Name",
        key: "Employee_Name",
        sorter: {
        compare: (a, b) => {
            a = a.Employee_Name.toLowerCase();
            b = b.Employee_Name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
        },
        },
    },
    {
        title: "Provident Fund Type",
        dataIndex: "Provident_Fund_Type",
        sorter: {
        compare: (a, b) => {
            a = a.Provident_Fund_Type.toLowerCase();
            b = b.Provident_Fund_Type.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
        },
        },
    },
    {
        title: "Employee Share",
        dataIndex: "Employee_Share",
        sorter: {
        compare: (a, b) => {
            a = a.Employee_Share.toLowerCase();
            b = b.Employee_Share.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
        },
        },
    },
    {
        title: "Organization Share",
        dataIndex: "Organization_Share",
        sorter: {
        compare: (a, b) => {
            a = a.Organization_Share.toLowerCase();
            b = b.Organization_Share.toLowerCase();
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
        }
    },
}
</script>

<template>
    <a-table class="table datatable thead-light" 
        :columns="columns"  
        :data-source="data" 
        :row-selection="rowSelection"
    >
        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'Employee_Name'">
                <div class="d-flex align-items-center file-name-icon">
                    <a href="javascript:void(0);" class="avatar avatar-md avatar-rounded">
                        <img :src="require(`@/assets/img/users/${record.Image}`)" class="img-fluid" alt="img">
                    </a>
                    <div class="ms-2">
                        <h6 class="fw-medium"><a href="javascript:void(0);">{{record.Employee_Name}}</a></h6>
                        <span class="d-block mt-1">{{record.Roll}}</span>
                    </div>
                </div>
            </template>
            <template v-if="column.key === 'Status'">
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                        <span class="rounded-circle d-flex justify-content-center align-items-center me-2"
                        :class="[record.Status === 'Approved' ? 'bg-transparent-success' : 'bg-transparent-info']">
                            <i class="ti ti-point-filled"
                            :class="[record.Status === 'Approved' ? 'text-success' : 'text-info']"
                            ></i>
                        </span> {{record.Status}}
                    </a>
                    <ul class="dropdown-menu  dropdown-menu-end p-3">
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item rounded-1 d-flex justify-content-start align-items-center"><span class="rounded-circle bg-transparent-success d-flex justify-content-center align-items-center me-2"><i class="ti ti-point-filled text-success"></i></span>Approved</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item rounded-1 d-flex justify-content-start align-items-center"><span class="rounded-circle bg-transparent-skyblue d-flex justify-content-center align-items-center me-2"><i class="ti ti-point-filled text-skyblue"></i></span>Pending </a>
                        </li>
                    </ul>
                </div>
            </template>
            <template v-if="column.key === 'action'">
                <div class="action-icon d-inline-flex">
                <a href="javascript:void(0);" class="me-2" data-bs-toggle="modal" data-bs-target="#edit_provident-fund"><i class="ti ti-edit"></i></a>
                    <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
                </div>
            </template>
        </template>
    </a-table>
</template>