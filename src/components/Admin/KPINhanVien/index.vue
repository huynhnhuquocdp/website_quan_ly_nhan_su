<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center mt-2">
                    <h6><b>DANH SÁCH KPI NHÂN VIÊN</b></h6>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Thêm Mới
                    </button>
                </div>
                <div class="card-body table-responsive">
                    <div class="input-group mt-3 w-100">
                        <input type="text"
                            class="form-control search-control border border-1 border-secondary"
                            placeholder="Search...">
                        <span class="position-absolute top-50 search-show translate-middle-y" style="left: 15px;"><i
                                class="bx bx-search"></i></span>
                        <button class="btn btn-outline-secondary" type="button"
                            id="button-addon2">Tìm
                            Kiếm</button>
                    </div>
                    <table class="table table-bordered table-hover mt-2">
                        <thead>
                            <tr>
                                <th class="text-center">#</th>
                                <th class="text-center">Nhân Viên</th>
                                <th class="text-center">Tên KPI</th>
                                <th class="text-center">Điểm Được Chấm</th>
                                <th class="text-center">Người Đánh Giá</th>
                                <th class="text-center">Ngày Đánh Giá</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th class="align-middle text-center">1</th>
                                <td class="align-middle">Nguyễn Văn A</td>
                                <td class="align-middle">Hoàn thành tài liệu dự án </td>
                                <td class="align-middle text-center">50 điểm</td>
                                <td class="align-middle">Nguyễn Quốc Long</td>
                                <td class="align-middle text-center">07/10/2024</td>
                                <td class="align-middle text-center">
                                    <button class="btn btn-info me-2" data-bs-toggle="modal"
                                        data-bs-target="#chamDiemModal">Chấm Điểm</button>
                                    <button class="btn btn-primary me-2" data-bs-toggle="modal"
                                        data-bs-target="#capnhatDM">Cập nhật</button>
                                    <button class="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#delModal">Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới KPI</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label class="form-label">Chọn Nhân Viên</label>
                            <select class="form-control mt-1">
                                <option value="0">Nhân Viên 1</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Chọn KPI</label>
                            <select class="form-control mt-1">
                                <option value="0">Hoàn thành tài liệu dự án</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button class="btn btn-primary" data-bs-dismiss="modal">Thêm Mới</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="delModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa KPI</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-danger border-0 bg-danger alert-dismissible fade show py-2">
                            <div class="d-flex align-items-center">
                                <div class="font-35 text-white"><i class="bx bxs-message-square-x"></i>
                                </div>
                                <div class="ms-1">
                                    <h6 class="mb-1 text-white">Bạn chắc chắc xóa kpi <b>Hoàn thành tài liệu dự án </b> này chứ
                                        !!!</h6>
                                    <div class="text-white text-nowrap"><b>LƯU Ý !!!</b> Điều này không thể khôi
                                        phục
                                        khi ấn xác nhận
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" >Xác nhận</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="capnhatDM" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Cập nhật KPI</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label class="form-label">Chọn Nhân Viên</label>
                            <select class="form-control mt-1">
                                <option value="0">Nhân Viên 1</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Chọn KPI</label>
                            <select class="form-control mt-1">
                                <option value="0">Hoàn thành tài liệu dự án</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cập nhật</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="chamDiemModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Chấm Điểm KPI</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row mt-2">
                            <div class="col-lg-12">
                                <label class="form-label fw-bold">Cho Điểm KPI</label>
                                <input type="number" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Chấm Điểm</button>
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
