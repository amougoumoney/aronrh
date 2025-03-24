<template>
  <layout-header />
  <layout-sidebar />

  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col">
            <h3 class="page-title">{{ $t('DataTables') }}</h3>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-2">{{ $t('DefaultDatatable') }}</h5>
              <p class="card-text">
                {{ $t('Thisisthemostbasicexampleofthedatatableswithzeroconfiguration.') }}
                {{ $t('Usethe') }} <code>.datatable</code> {{ $t('classtoinitializedatatables.') }}
              </p>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <a-table :columns="columns" :data-source="data" :pagination="{ pageSize: 10 }"
                  @change="handleTableChange" bordered />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Page Wrapper -->
</template>

<script setup>
import { ref } from "vue";

const data = ref([
  { key: "1", name: "Airi Satou", position: "Accountant", office: "Tokyo", age: 33, start_date: "2008/11/28", salary: "$162,700" },
  { key: "2", name: "Angelica Ramos", position: "CEO", office: "London", age: 47, start_date: "2009/10/09", salary: "$1,200,000" },
  { key: "3", name: "Ashton Cox", position: "Junior Technical Author", office: "San Francisco", age: 66, start_date: "2009/01/12", salary: "$86,000" },
  { key: "4", name: "Bradley Greer", position: "Software Engineer", office: "London", age: 41, start_date: "2012/10/13", salary: "$132,000" },
  { key: "5", name: "Brenden Wagner", position: "Software Engineer", office: "San Francisco", age: 28, start_date: "2011/06/07", salary: "$206,850" },
]);

const columns = ref([
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Position",
    dataIndex: "position",
    sorter: (a, b) => a.position.localeCompare(b.position),
  },
  {
    title: "Office",
    dataIndex: "office",
    sorter: (a, b) => a.office.localeCompare(b.office),
  },
  {
    title: "Age",
    dataIndex: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Start Date",
    dataIndex: "start_date",
    sorter: (a, b) => new Date(a.start_date) - new Date(b.start_date),
  },
  {
    title: "Salary",
    dataIndex: "salary",
    sorter: (a, b) => parseInt(a.salary.replace(/[$,]/g, "")) - parseInt(b.salary.replace(/[$,]/g, "")),
  },
]);

const handleTableChange = (pagination, filters, sorter, extra) => {
  console.log("Table Params:", pagination, filters, sorter, extra);
};
</script>

<style>
/* Hide unwanted tooltip */
.ant-tooltip {
  display: none !important;
}
</style>
