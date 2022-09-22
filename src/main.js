import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index';
import router from './router/index';
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import VueTilt from "vue-tilt.js";
import VueSweetalert2 from "vue-sweetalert2";
import SoftUIDashboard from "./soft-ui-dashboard";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(VueTilt);
app.use(VueSweetalert2);
app.use(SoftUIDashboard);
app.mount('#app');


