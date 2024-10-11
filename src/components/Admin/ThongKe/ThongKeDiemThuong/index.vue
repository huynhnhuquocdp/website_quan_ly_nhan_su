<template>
    <div class="row">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-5">
                                <div class="input-group">
                                    <span class="input-group-text">Từ ngày</span>
                                    <input type="date" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="input-group">
                                    <span class="input-group-text">Đến ngày</span>
                                    <input type="date" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-2">
                                <button class="btn btn-primary w-100">Thống Kê</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-header">
                        <h5 class="mt-2">THÔNG TIN ĐÃ THỐNG KÊ</h5>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-center">#</th>
                                    <th class="text-center">Tên Nhân Viên</th>
                                    <th class="text-center">Số Điểm Thưởng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="text-center">1</th>
                                    <td>xxx</td>
                                    <td>xxx</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h5 class="mt-2">Thống Kê Số Điểm Thưởng Của Từng Nhân Viên</h5>
                    </div>
                    <div class="card-body">
                        CHART Ở ĐÂY
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

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
<style>

</style>