import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainPage from "../views/MainPage.vue";
import UserPanel from "../views/UserPanel.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: MainPage,
  },
  {
    path: "/panel",
    name: "panel",
    component: UserPanel,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
