import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path: '/',
        component: () => import('../layout/wrapper/index.vue')
    },
    {
        path : '/admin/dang-nhap',
        component: ()=>import('../components/Admin/DangNhap/index.vue'),
        meta: { layout: "blank" },
    },
    {
        path : '/admin/profile',
        component: ()=>import('../components/Admin/Profile/index.vue')
    },
    {
        path : '/admin/nhan-vien',
        component: ()=>import('../components/Admin/NhanVien/index.vue')
    },
    {
        path : '/admin/chuc-vu',
        component: ()=>import('../components/Admin/ChucVu/index.vue')
    },
    {
        path: "/admin/quy-dinh-cho-diem",
        component: () => import("../components/Admin/QuyDinhChoDiem/index.vue"),
    },
    {
        path: "/admin/tieu-chi-kpi",
        component: () => import("../components/Admin/TieuChiKpi/index.vue"),
    },
    {
        path: '/admin/phong-ban',
        component: () => import('../components/Admin/PhongBan/index.vue')
    },
    {
        path: '/admin/chi-tiet-hop-dong',
        component: () => import('../components/Admin/ChiTietHopDong/index.vue')
    },
    {
        path: '/admin/loai-hop-dong',
        component: () => import('../components/Admin/LoaiHopDong/index.vue')
    },
    {
        path: '/admin/cham-cong',
        component: () => import('../components/Admin/ChamCong/index.vue')
    },
    {
        path: '/admin/luong',
        component: () => import('../components/Admin/Luong/index.vue')
    },
    {
        path: '/admin/kpi-nhan-vien',
        component: () => import('../components/Admin/KPINhanVien/index.vue')
    },
    {
        path: '/admin/thuong-va-phat',
        component: () => import('../components/Admin/ThuongVaPhat/index.vue')
    },
    {
        path: '/admin/thong-ke-ca-cham-cong',
        component: () => import('../components/Admin/ThongKe/ThongKeCaChamCong/index.vue')
    },
    {
        path: '/admin/thong-ke-diem-kpi-nhan-vien',
        component: () => import('../components/Admin/ThongKe/ThongKeDiemKPINhanVien/index.vue')
    },
    {
        path: '/admin/thong-ke-diem-phat',
        component: () => import('../components/Admin/ThongKe/ThongKeDiemPhat/index.vue')
    },
    {
        path: '/admin/thong-ke-diem-thuong',
        component: () => import('../components/Admin/ThongKe/ThongKeDiemThuong/index.vue')
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router