import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path: '/',
        component: () => import('../layout/wrapper/index.vue')
    },

    // <!-- VIET -->

    // <!-- END_VIET -->

    // <!-- SANG -->

    // <!-- END_SANG -->

    // <!-- QUY -->

    // <!-- END_QUY -->

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
    routes: routes
})

export default router