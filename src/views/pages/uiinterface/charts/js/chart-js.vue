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
            <h3 class="page-title">{{ $t('Chartjs') }}</h3>
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
              <div>
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...barchartjs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">{{ $t('Transparency') }}</div>
            </div>
            <div class="card-body">
              <div>
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...transparencychartJs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">{{ $t('GradientBarChart') }}</div>
            </div>
            <div class="card-body">
              <div>
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...gradientchartJs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">{{ $t('HorizontalBarChart') }}</div>
            </div>
            <div class="card-body">
              <div class="chartjs-wrapper-demo">
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...horizontalchartJs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">{{ $t('HorizontalBarChartStyle2') }}</div>
            </div>
            <div class="card-body">
              <div class="chartjs-wrapper-demo">
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...horizontal2chartJs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">{{ $t('VerticalStackedBarChart') }}</div>
            </div>
            <div class="card-body">
              <div class="chartjs-wrapper-demo">
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...verticalchartJs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">{{ $t('HorizontalStackedBarChart') }}</div>
            </div>
            <div class="card-body">
              <div class="chartjs-wrapper-demo">
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...horizontal3ChartJs }"
                ></vue3-chart-js>
              </div>
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
              <div class="chartjs-wrapper-demo">
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...linechartJs }"
                ></vue3-chart-js>
              </div>
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
              <div class="chartjs-wrapper-demo">
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...donutchartJs }"
                ></vue3-chart-js>
              </div>
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
              <div class="chartjs-wrapper-demo">
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...piechartJs }"
                ></vue3-chart-js>
              </div>
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
              <div class="chartjs-wrapper-demo">
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...areachartJs }"
                ></vue3-chart-js>
              </div>
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
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import {
  barchartjs,
  transparencychartJs,
  gradientchartJs,
  horizontalchartJs,
  horizontal2chartJs,
  verticalchartJs,
  horizontal3ChartJs,
  linechartJs,
  areachartJs,
  donutchartJs,
  piechartJs,
} from "./data";
export default {
  data() {
    return {
      barchartjs: barchartjs,
      transparencychartJs: transparencychartJs,
      gradientchartJs: gradientchartJs,
      horizontalchartJs: horizontalchartJs,
      horizontal2chartJs: horizontal2chartJs,
      verticalchartJs: verticalchartJs,
      horizontal3ChartJs: horizontal3ChartJs,
      linechartJs: linechartJs,
      areachartJs: areachartJs,
      donutchartJs: donutchartJs,
      piechartJs: piechartJs,
    };
  },
  components: {
    Vue3ChartJs,
  },
};
</script>
