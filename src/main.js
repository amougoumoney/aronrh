import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { router } from './router';
import { initData } from './mocks';
import App from "./App.vue";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import VueFeather from 'vue-feather';
import FlagIcon from 'vue-flag-icon';
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import VueApexCharts from "vue3-apexcharts";
import StarRating from 'vue-star-rating'
import VueFormWizard from "vue3-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import DatePicker from 'vue3-datepicker'
import VCalendar from 'v-calendar';
import ThemifyIcon from "vue-themify-icons";
import { IconHome } from '@tabler/icons-vue';
import Vue3TagsInput from "vue3-tags-input";
import VueEasyLightbox from "vue-easy-lightbox";
import CKEditor from '@ckeditor/ckeditor5-vue';
import SimpleLineIcons from "vue-simple-line";
import CircleProgress from "vue3-circle-progress";
import "vue3-circle-progress/dist/circle-progress.css";
import i18n from './lang/index'



import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'ionicons-npm/css/ionicons.css';
import 'material-icons/css/material-icons.min.css';
import 'material-icons/css/material-icons.css';
import 'pe7-icon/dist/dist/pe-icon-7-stroke.css';
import 'typicons.font/src/font/typicons.css';
import 'weathericons/css/weather-icons.css'
import '@/assets/css/feather.css'
import '@/assets/css/sticky.css'
import '@/assets/css/tabler-icons.css'
import '@/assets/css/vue-form-wizard.css';
import "boxicons/css/boxicons.min.css";
import "v-calendar/dist/style.css";
import '@/assets/scss/main.scss'


import swal from 'sweetalert2';
window.Swal = swal;
const pinia = createPinia();
const initDaya = initData();
const app = createApp(App)
window.$ = window.jQuery = $;

app.component(VueFeather.name, VueFeather)
app.use(VueSweetalert2)
app.use(VueApexCharts)
app.component('star-rating', StarRating)
app.component('circle-progress', CircleProgress)
app.component('date-picker', DatePicker);
app.component('vue3-tags-input', Vue3TagsInput);
app.use(FlagIcon)
  .use(Antd)
  .use(VueEasyLightbox)
  .use(VueFormWizard)
app.use(VCalendar)
  // .use(BootstrapVue3)
  // .use(BToastPlugin)
  .use(ThemifyIcon)
  .use(SimpleLineIcons)
app.component('IconHome', IconHome);
app.use(CKEditor);
app.use(initData)
app.use(pinia);
app.use(i18n)
app.use(router).mount('#app');

