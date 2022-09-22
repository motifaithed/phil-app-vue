import { createRouter, createWebHistory } from "vue-router";
import Default from '../views/dashboards/Default.vue';
import Automotive from "../views/dashboards/Automotive.vue";
import Todo from '../pages/qa-managers/Todo.vue';
const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/qamanagers/todo",
  },
  {
    path: "/dashboards/dashboard-default",
    name: "Default",
    component: Default,
  },
  {
    path: "/dashboards/automotive",
    name: "Automotive",
    component: Automotive,
  },
  {
    path: "/QA/todo",
    name: "Todo",
    component: Todo,
  },
  // {
  //   path: "/qamanagement/addqa",
  //   name: "addqa",
  //   component: AddQA,
  // }
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
