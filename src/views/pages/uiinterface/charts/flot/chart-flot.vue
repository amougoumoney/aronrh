<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper cardhead">
    <div class="content">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">{{ $t('FlotChart') }}</h3>
            <ul class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/dashboard">{{ $t('Dashboard') }}</router-link>
              </li>
              <li class="breadcrumb-item active">{{ $t('FlotCharts') }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- /Page Header -->

      <div class="row">
        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">{{ $t('BarChart') }}</div>
            </div>
            <div class="card-body">
              <apexchart
                type="bar"
                height="300"
                :options="barflotChart.flotbar1"
                :series="barflotChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">{{ $t('BarChart') }}</div>
            </div>
            <div class="card-body">
              <apexchart
                type="bar"
                height="300"
                :options="bar2flotChart.flotbar2"
                :series="bar2flotChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">{{ $t('LineChart') }}</div>
            </div>
            <div class="card-body">
              <apexchart
                type="line"
                height="300"
                :options="lineflotChat.flotline1"
                :series="lineflotChat.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">{{ $t('LineChartPOints') }}</div>
            </div>
            <div class="card-body">
              <apexchart
                type="line"
                height="300"
                :options="linepointflotChart.flotline2"
                :series="linepointflotChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">{{ $t('AreaChart') }}</div>
            </div>
            <div class="card-body">
              <apexchart
                type="area"
                height="300"
                :options="areaflotChart.flotarea1"
                :series="areaflotChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">{{ $t('AreaChartPoints') }}</div>
            </div>
            <div class="card-body">
              <apexchart
                type="area"
                height="300"
                :options="areapointflotChart.flotarea2"
                :series="areapointflotChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">{{ $t('PieChart') }}</div>
            </div>
            <div class="card-body">
              <apexchart
                type="pie"
                height="300"
                :options="pieflotChart.flotpie1"
                :series="pieflotChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">{{ $t('DonutChart') }}</div>
            </div>
            <div class="card-body">
              <apexchart
                type="donut"
                height="300"
                :options="donutflotChart.flotpie2"
                :series="donutflotChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->
      </div>
    </div>
  </div>
  <!-- /Page Wrapper -->
</template>
<script>
import {
  barflotChart,
  bar2flotChart,
  lineflotChat,
  linepointflotChart,
  areaflotChart,
  areapointflotChart,
  pieflotChart,
  donutflotChart,
} from "./data";
export default {
  data() {
    return {
      barflotChart: barflotChart,
      bar2flotChart: bar2flotChart,
      lineflotChat: lineflotChat,
      linepointflotChart: linepointflotChart,
      areaflotChart: areaflotChart,
      areapointflotChart: areapointflotChart,
      pieflotChart: pieflotChart,
      donutflotChart: donutflotChart,
    };
  },
};
</script>
