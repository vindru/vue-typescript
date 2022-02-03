import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home/index.vue";
import { Routes } from "./routes";

export const routes: Array<RouteRecordRaw> = [
  {
    path: Routes.HOME,
    name: "Home",
    component: Home,
  },
  {
    path: Routes.ABOUT,
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/about/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
