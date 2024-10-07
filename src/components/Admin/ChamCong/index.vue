<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-3">
                            <label class="form-label fw-bold">Chọn Nhân Viên</label>
                            <select class="form-control w-100">
                                <option value="0">Nhân Viên 1</option>
                                <option value="1">Nhân Viên 2</option>
                            </select>
                        </div>
                        <div class="col-lg-3">
                            <label class="form-label fw-bold">Chọn Ngày</label>
                            <input type="date" class="form-control">
                        </div>
                        <div class="col-lg-3">
                            <label class="form-label fw-bold">Chọn Ca</label>
                            <select class="form-control">
                                <option value="0">Ca Sáng</option>
                                <option value="1">Ca Chiều</option>
                                <option value="2">Ca Tối</option>
                            </select>
                        </div>
                        <div class="col-lg-3 d-flex align-items-end">
                            <button class="btn btn-primary w-100">Chấm Công</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-12">
            <div class="row">
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="fw-bold">Bảng Chấm Công</h5>
                        </div>
                        <div class="card-body">
                            <table class="table table-bordered">
                                <thead>
                                    <tr class="align-middle">
                                        <th>#</th>
                                        <th>Ngày Chấm Công</th>
                                        <th>Ca Làm</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="align-middle">
                                        <td>1</td>
                                        <td>07/10/2024</td>
                                        <td>Ca Sáng 08:00 - 11:30</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
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
        
    }
}
</script>
<style></style>