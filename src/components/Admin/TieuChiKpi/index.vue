<template>
    <div class="row">
        <div class="col-lg-4 col-md-12">
            <div class="card">
                <div class="card-header mt-2">
                    <h5>Thêm Tiêu Chí KPI</h5>
                </div>
                <div class="card-body">
                    <div class="mb-2">
                        <label class="mb-1">Tên Tiêu Chí</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="mb-2">
                        <label class="mb-1">Điểm</label>
                        <input type="number" class="form-control">
                    </div>
                    <div class="mb-2">
                        <label class="mb-1">Mô Tả</label>
                        <textarea class="form-control" rows="3"></textarea>
                    </div>
                    <div class="mb-2">
                        <label class="mb-1">Tình Trạng</label>
                        <select class="form-select">
                            <option value="1">Hiển Thị</option>
                            <option value="0">Tạm Dừng</option>
                        </select>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button type="button" class="btn btn-primary">Thêm Mới</button>
                </div>
            </div>
        </div>
        <div class="col-lg-8 col-md-12">
            <div class="card">
                <div class="card-header mt-2">
                    <h5>Danh Sách Tiêu Chí KPI</h5>
                </div>
                <div class="card-body">
                    <div class='table-responsive'>
                        <table class='table table-bordered table-hover'>
                            <thead>
                                <tr>
                                    <th class='align-middle text-center text-nowrap'>#</th>
                                    <th class='align-middle text-center text-nowrap'>Tên Tiêu Chí</th>
                                    <th class='align-middle text-center text-nowrap'>Điểm</th>
                                    <th class='align-middle text-center text-nowrap'>Mô Tả</th>
                                    <th class='align-middle text-center text-nowrap'>Tình Trạng</th>
                                    <th class='align-middle text-center text-nowrap'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class='align-middle text-nowrap text-center'>1</th>
                                    <td class='align-middle text-nowrap'>Hoàn thành dự án</td>
                                    <td class='align-middle text-nowrap text-end'>5</td>
                                    <td class='align-middle text-nowrap'>Đã hoàn thành dự án được giao trước thời gian
                                        quy định</td>
                                    <td class='align-middle text-nowrap text-center'>
                                        <button class="btn btn-success">Hiển Thị</button>
                                    </td>
                                    <td class='align-middle text-nowrap text-center'>
                                        <button class="btn btn-primary me-2" data-bs-toggle='modal'
                                            data-bs-target='#updateModal'>Cập Nhật</button>
                                        <button class="btn btn-danger" data-bs-toggle='modal'
                                            data-bs-target='#deleteModal'>Xóa</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal update -->
        <div class='modal fade' id='updateModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
            <div class='modal-dialog'>
                <div class='modal-content'>
                    <div class='modal-header'>
                        <h1 class='modal-title fs-5' id='exampleModalLabel'>Cập Nhật Tiêu Chí KPI</h1>
                        <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                    </div>
                    <div class='modal-body'>
                        <div class="mb-2">
                            <label class="mb-1">Tên Tiêu Chí</label>
                            <input type="text" class="form-control" value="Hoàn thành dự án">
                        </div>
                        <div class="mb-2">
                            <label class="mb-1">Điểm</label>
                            <input type="number" class="form-control" value="5">
                        </div>
                        <div class="mb-2">
                            <label class="mb-1">Mô Tả</label>
                            <textarea class="form-control" rows="3"
                                placeholder="Đã hoàn thành dự án được giao trước thời gian quy định"></textarea>
                        </div>
                        <div class="mb-2">
                            <label class="mb-1">Tình Trạng</label>
                            <select class="form-select">
                                <option value="1">Hiển Thị</option>
                                <option value="0">Tạm Dừng</option>
                            </select>
                        </div>
                    </div>
                    <div class='modal-footer'>
                        <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Đóng</button>
                        <button type='button' class='btn btn-primary' data-bs-dismiss='modal'>Xác Nhận</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal delete -->
        <div class='modal fade' id='deleteModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
            <div class='modal-dialog'>
                <div class='modal-content'>
                    <div class='modal-header'>
                        <h1 class='modal-title fs-5' id='exampleModalLabel'>Xóa Tiêu Chí KPI</h1>
                        <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                    </div>
                    <div class='modal-body'>
                        <div class="alert alert-danger border-0 bg-danger alert-dismissible fade show py-2">
                            <div class="d-flex align-items-center">
                                <div class="font-35 text-white"><i class="bx bxs-message-square-x"></i>
                                </div>
                                <div class="ms-1">
                                    <h6 class="mb-1 text-white">Bạn chắc chắc xóa tiêu chí <b>xxx</b> này chứ
                                        !!!</h6>
                                    <div class="text-white text-nowrap"><b>LƯU Ý !!!</b> Điều này không thể khôi phục
                                        khi ấn xác nhận
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='modal-footer'>
                        <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Đóng</button>
                        <button type='button' class='btn btn-danger' data-bs-dismiss='modal'>Xác Nhận</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>