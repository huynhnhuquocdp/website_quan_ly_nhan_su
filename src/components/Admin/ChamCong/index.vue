<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-3">
                            <label class="form-label fw-bold">Chọn Nhân Viên</label>
                            <select v-model="create.id_nhan_vien" class="form-control mt-1">
                                <template v-for="(value, index) in list_nhan_vien" :key="index">
                                    <option v-bind:value="value.id">{{ value.ho_va_ten }}</option>
                                </template>
                            </select>
                        </div>
                        <div class="col-lg-3">
                            <label class="form-label fw-bold">Chọn Ngày</label>
                            <input v-model="create.ngay_lam_viec" type="date" class="form-control">
                        </div>
                        <div class="col-lg-3">
                            <label class="form-label fw-bold">Chọn Ca</label>
                            <select v-model="create.ca_lam" class="form-control">
                                <option value="1">Ca Sáng</option>
                                <option value="2">Ca Chiều</option>
                                <option value="3">Ca Tối</option>
                            </select>
                        </div>
                        <div class="col-lg-3 d-flex align-items-end">
                            <button class="btn btn-primary w-100" v-on:click="themMoi()">Chấm Công</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-12">
            <div class="row">
                <div class="col-lg-5">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mt-1"><b>Bảng Chấm Công</b></h5>
                        </div>
                        <div class="card-body">
                            <table class="table table-bordered table-hover mt-2">
                                <thead>
                                    <tr>
                                        <th class="text-center">#</th>
                                        <th class="text-center">Nhân Viên</th>
                                        <th class="text-center">Phòng Ban</th>
                                        <th class="text-center">Ngày Chấm Công</th>
                                        <th class="text-center">Ca Làm</th>
                                        <th class="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="(value, index) in list_cham_cong" :key="index">
                                        <tr>
                                            <th class="align-middle text-center">{{ index + 1 }}</th>
                                            <td class="align-middle">{{ value.ho_va_ten }}</td>
                                            <td class="align-middle">{{ value.ten_phong_ban }}</td>
                                            <td class="align-middle text-center">{{ value.ngay_lam_viec }}</td>
                                            <td class="align-middle text-center"> {{ value.ca_lam == 1 ? "Ca Sáng" :
                                (value.ca_lam == 2 ? "Ca Chiều" : "Ca Tối") }} </td>
                                            <td class="align-middle text-center">
                                                <button class="btn btn-primary me-2" data-bs-toggle="modal"
                                                    v-on:click="Object.assign(update, value)"
                                                    data-bs-target="#capnhatDM">
                                                    Cập nhật
                                                </button>
                                                <button class="btn btn-danger" data-bs-toggle="modal"
                                                    v-on:click="Object.assign(del, value)" data-bs-target="#delModal">
                                                    Xóa
                                                </button>
                                            </td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="fw-bold">Bảng Lương</h5>
                        </div>
                        <div class="card-body">
                            <table class="table table-bordered">
                                <thead>
                                    <tr class="align-middle">
                                        <th class="text-center">#</th>
                                        <th class="text-center">Số Ca Sáng</th>
                                        <th class="text-center">Số Ca Chiều</th>
                                        <th class="text-center">Số Ca Tối</th>
                                        <th class="text-center">Tổng Số Buổi</th>
                                        <th class="text-center">Thưởng/Phạt</th>
                                        <th class="text-center">KPI</th>
                                        <th class="text-center">Tiền Thực Nhận</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="align-middle">
                                        <th class="text-center">1</th>
                                        <td class="text-center">2</td>
                                        <td class="text-center">3</td>
                                        <td class="text-center">2</td>
                                        <td class="text-center">7</td>
                                        <td class="text-center">100 điểm</td>
                                        <td class="text-center">500 điểm</td>
                                        <td class="text-end">10.000.000 đ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="delModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Chấm Công</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-danger border-0 bg-danger alert-dismissible fade show py-2">
                            <div class="d-flex align-items-center">
                                <div class="font-35 text-white">
                                    <i class="bx bxs-message-square-x"></i>
                                </div>
                                <div class="ms-1">
                                    <h6 class="mb-1 text-white">
                                        Bạn chắc chắc xóa bảng chấm công của  <b>{{ del.ho_va_ten }}</b>
                                        chứ !!!
                                    </h6>
                                    <div class="text-white text-nowrap">
                                        <b>LƯU Ý !!!</b> Điều này không thể khôi phục khi ấn xác
                                        nhận
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Đóng
                        </button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                            v-on:click="xoaChamCong()">
                            Xác nhận
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="capnhatDM" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                            Cập nhật Chấm Công
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label class="form-label fw-bold">Chọn Nhân Viên</label>
                            <select v-model="update.id_nhan_vien" class="form-control mt-1">
                                <template v-for="(value, index) in list_nhan_vien" :key="index">
                                    <option v-bind:value="value.id">{{ value.ho_va_ten }}</option>
                                </template>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Chọn Ngày</label>
                            <input v-model="update.ngay_lam_viec" type="date" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Chọn Ca</label>
                            <select v-model="update.ca_lam" class="form-control">
                                <option value="1">Ca Sáng</option>
                                <option value="2">Ca Chiều</option>
                                <option value="3">Ca Tối</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Đóng
                        </button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                            v-on:click="updateChamCong()">
                            Cập nhật
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            list_cham_cong: [],
            list_nhan_vien: [],
            create: {},
            update: {},
            del: {},
        }

    },
    mounted() {
        this.loadDataNhanVien();
        this.loadDataChamCong();
    },
    methods: {
        loadDataNhanVien() {
            axios
                .get("http://127.0.0.1:8000/api/admin/nhan-vien/data-open")
                .then((res) => {
                    this.list_nhan_vien = res.data.data;
                });
        },
        loadDataChamCong() {
            axios
                .get("http://127.0.0.1:8000/api/admin/cham-cong/data")
                .then((res) => {
                    this.list_cham_cong = res.data.data;
                });
        },

        themMoi() {
            axios
                .post('http://127.0.0.1:8000/api/admin/cham-cong/create', this.create)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadDataChamCong();
                        this.create = {};
                    }
                    else {
                        this.$toast.error(res.data.message);
                    }
                })
        },
        updateChamCong() {
            axios
                .post('http://127.0.0.1:8000/api/admin/cham-cong/update', this.update)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadDataChamCong();
                    }
                    else {
                        this.$toast.error(res.data.message);
                    }
                })
        },
        xoaChamCong() {
            axios
                .post('http://127.0.0.1:8000/api/admin/cham-cong/delete', this.del)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadDataChamCong();
                    }
                    else {
                        this.$toast.error(res.data.message);
                    }
                })

        },
    },
}
</script>
<style></style>
