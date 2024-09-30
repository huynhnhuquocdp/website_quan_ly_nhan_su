import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path: '/',
        component: () => import('../layout/wrapper/index.vue')
    },

    // <!-- VIET -->
    {
        path: "/admin/quy-dinh-cho-diem",
        component: () => import("../components/Admin/QuyDinhChoDiem/index.vue"),
    },
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

    // <!-- DUC -->
    {
        path: '/phong-ban',
        component: () => import('../components/PhongBan/index.vue')
    },
    {
        path: '/cham-cong',
        component: () => import('../components/ChamCong/index.vue')
    },
    // <!-- END_DUC -->
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router