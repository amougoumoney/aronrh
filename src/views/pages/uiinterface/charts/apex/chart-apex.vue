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
            <h3 class="page-title">{{ $t('Charts') }}</h3>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <div class="row">
        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('ApexSimple') }}</h5>
            </div>
            <div class="card-body">
              <apexchart
                type="line"
                height="350"
                :options="basicAreaChart.sline"
                :series="basicAreaChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('AreaChart') }}</h5>
            </div>
            <div class="card-body">
              <apexchart
                type="area"
                height="350"
                :options="splineAreaChart.slinearea"
                :series="splineAreaChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('ColumnChart') }}</h5>
            </div>
            <div class="card-body">
              <apexchart
                type="bar"
                height="350"
                :options="scolAreaChart.scol"
                :series="scolAreaChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('ColumnStackedChart') }}</h5>
            </div>
            <div class="card-body">
              <apexchart
                type="bar"
                height="350"
                :options="scolstackedAreaChart.scolstacked"
                :series="scolstackedAreaChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('BarChart') }}</h5>
            </div>
            <div class="card-body">
              <apexchart
                type="bar"
                height="350"
                :options="sbarAreaChart.sbar"
                :series="sbarAreaChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('MixedChart') }}</h5>
            </div>
            <div class="card-body">
              <apexchart
                type="line"
                height="350"
                :options="mixedchartAreaChart.mixedchart"
                :series="mixedchartAreaChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('DonutChart') }}</h5>
            </div>
            <div class="card-body">
              <apexchart
                type="donut"
                height="350"
                :options="donutAreaChart.donutchart"
                :series="donutAreaChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('RadialChart') }}</h5>
            </div>
            <div class="card-body">
              <apexchart
                type="radialBar"
                height="350"
                :options="radialAreaChart.radialchart"
                :series="radialAreaChart.series"
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
  basicAreaChart,
  splineAreaChart,
  scolAreaChart,
  scolstackedAreaChart,
  sbarAreaChart,
  mixedchartAreaChart,
  donutAreaChart,
  radialAreaChart,
} from "./data";
export default {
  data() {
    return {
      basicAreaChart: basicAreaChart,
      splineAreaChart: splineAreaChart,
      scolAreaChart: scolAreaChart,
      scolstackedAreaChart: scolstackedAreaChart,
      sbarAreaChart: sbarAreaChart,
      mixedchartAreaChart: mixedchartAreaChart,
      donutAreaChart: donutAreaChart,
      radialAreaChart: radialAreaChart,
    };
  },
};
</script>
