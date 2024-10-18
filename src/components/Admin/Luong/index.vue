<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-5">
                            <label class="form-label fw-bold">Từ Ngày</label>
                            <input type="date" class="form-control">
                        </div>
                        <div class="col-lg-5">
                            <label class="form-label fw-bold">Đến Ngày</label>
                            <input type="date" class="form-control">
                        </div>
                        <div class="col-lg-2 d-flex align-items-end">
                            <button class="btn btn-primary w-100">Tìm Kiếm</button>
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
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            
        }

    },
    mounted() {
       
    },
    methods: {
        
    },
}
</script>
<style></style>
