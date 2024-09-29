import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path : '/',
        component: ()=>import('../layout/wrapper/index.vue')
    },
    {
        path : '/admin/chuc-vu',
        component: ()=>import('../components/Admin/ChucVu/index.vue')
    },
    {
        path : '/admin/luong',
        component: ()=>import('../components/Admin/Luong/index.vue')
    },
    // <!-- VIET -->

    // <!-- END_VIET -->

    // <!-- SANG -->

    // <!-- END_SANG -->

    // <!-- QUY -->

    // <!-- END_QUY -->

    // <!-- DUC -->

    // <!-- END_DUC -->
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router