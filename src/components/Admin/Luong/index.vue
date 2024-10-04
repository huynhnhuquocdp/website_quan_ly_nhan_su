<template >
   <div class="row" id="app">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header mt-2">
                <h5><b>Bảng Lương</b></h5>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th class="text-center align-middle ">#</th>
                                <th class="text-center align-middle ">Tên Nhân Viên</th>
                                <th class="text-center align-middle ">Số Ngày Công</th>
                                <th class="text-center align-middle ">Thưởng</th>
                                <th class="text-center align-middle ">Phạt</th>
                                <th class="text-center align-middle ">Tổng Lương</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(v, k) in list_luong" :key="k">
                                <tr>
                                    <th class="text-center align-middle ">{{ k + 1 }}</th>
                                    <td class="align-middle ">{{ v.ho_va_ten }}</td>
                                    <td class="text-center align-middle ">{{ v.so_ngay_cong }}</td>

                                    <td class="align-middle text-end">{{ v.thuong }}đ</td>

                                    <td class="align-middle text-end">{{ v.phat }}đ</td>

                                    <td class="align-middle text-end">{{ v.tong_luong }}đ</td>

                                </tr>
                            </template>
                        </tbody>
                    </table>
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
            list_luong: [],
        }

    },
    mounted() {
        this.loadLuong();
    },
    methods: {
        loadLuong() {
            axios
                .get('http://127.0.0.1:8000/api/admin/luong/data')
                .then((res) => {
                    this.list_luong = res.data.data;
                })
        },
    }
}
</script>
<style >
    
</style>