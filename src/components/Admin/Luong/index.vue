<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-5">
                            <label class="form-label fw-bold">Từ Ngày</label>
                            <input v-model="tinh_luong.begin" type="date" class="form-control">
                        </div>
                        <div class="col-lg-5">
                            <label class="form-label fw-bold">Đến Ngày</label>
                            <input v-model="tinh_luong.end" type="date" class="form-control">
                        </div>
                        <div class="col-lg-2 d-flex align-items-end">
                            <button v-on:click="tinhLuong()" class="btn btn-primary w-100">Tìm Kiếm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="fw-bold">Bảng Lương</h5>
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr class="align-middle">
                                <th class="text-center">#</th>
                                <th class="text-center">Tên Nhân Viên</th>
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
                            <template v-for="(value, index) in list" :key="index">
                                <tr class="align-middle">
                                    <th class="text-center">{{ index + 1 }}</th>
                                    <td class="">{{ value.ho_va_ten }}</td>
                                    <td class="text-center">{{ value.ca_sang }}</td>
                                    <td class="text-center">{{ value.ca_chieu }}</td>
                                    <td class="text-center">{{ value.ca_toi }}</td>
                                    <td class="text-center">{{ value.ca_sang + value.ca_chieu + value.ca_toi }}</td>
                                    <td class="text-center">{{ value.thuong - value.phat }} điểm</td>
                                    <td class="text-center">{{ value.diem_KPI }} điểm</td>
                                    <td class="text-end">{{ formatVND(value) }}</td>
                                </tr>
                            </template>

                        </tbody>
                    </table>
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
            tinh_luong: {},
            list: []

        }

    },
    mounted() {

    },
    methods: {
        formatVND(value) {
            var tinh_tien = (value.ca_sang + value.ca_chieu + value.ca_toi) / 24 + (value.thuong -
                value.phat) * 10000 + (value.diem_KPI * 20000)
            return new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(tinh_tien,
            )
        },
        tinhLuong() {
            axios
                .post('http://127.0.0.1:8000/api/admin/tinh-luong', this.tinh_luong)
                .then((res) => {
                    this.list = res.data.data
                })
        }

    },
}
</script>
<style></style>
