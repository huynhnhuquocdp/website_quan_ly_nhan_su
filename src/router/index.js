import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
  {
    path: "/",
    component: () => import("../layout/wrapper/index.vue"),
  },

  // <!-- VIET -->

  // <!-- END_VIET -->

  // <!-- SANG -->
  {
    path: "/admin/tieu-chi-kpi",
    component: () => import("../components/Admin/TieuChiKpi/index.vue"),
  },
  // <!-- END_SANG -->

  // <!-- QUY -->

  // <!-- END_QUY -->

  // <!-- DUC -->

  // <!-- END_DUC -->
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
