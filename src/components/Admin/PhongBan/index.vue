<template>
    <div class="row">
        <div class="col-lg-4">
            <div class='card border-top border-0 border-4 border-primary'>
                <div class='card-header'>
                    <h5>Thêm Mới Phòng Ban</h5>
                </div>
                <div class='card-body'>
                    <div class="">
                        <div class=" mb-3">
                            <label class="mb-2">Tên Phòng Ban</label>
                            <input type="text" class="form-control" placeholder="">
                        </div>
                        <div class=" mb-3">
                            <label class="mb-2"> Phòng Ban Cha</label>
                            <input type="number" class="form-control" placeholder="">
                        </div>
                        <div class=" mb-3">
                            <label class="mb-2">Trưởng Phòng</label>
                            <input type="number" class="form-control" placeholder="">
                        </div>
                        <div class=" mb-3">
                            <label class="mb-2">Tình Trạng</label>
                            <select class="form-select" aria-label="Default select example">
                                <option value="1">Hiển Thị</option>
                                <option value="0">Tạm tắt</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class='card-footer text-end'>
                    <button type="button" class="btn btn-primary">Thêm Mới</button>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class='card border-top border-0 border-4 border-primary'>
                <div class='card-header'>
                    <h5>Danh Sách Phòng Ban</h5>
                </div>
                <div class='card-body'>
                    <table class='table table-bordered'>
                        <thead>
                            <tr class="text-center">
                                <th class='align-middle'>#</th>
                                <th class='align-middle'>Tên Phòng Ban</th>
                                <th class='align-middle'>Phòng Ban Cha</th>
                                <th class='align-middle'>Trưởng phòng</th>
                                <th class='align-middle'>Tình Trạng</th>
                                <th class='align-middle'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class='align-middle text-center'>
                                <th class='align-middle'>1</th>
                                <td class='align-middle'>Ban Giám Đốc</td>
                                <td class='align-middle'>Root</td>
                                <td class='align-middle'>Nguyễn Quốc Long</td>
                                <td class='align-middle'>
                                    <button type="button" class="btn btn-info">Hiển thị</button>
                                </td>
                                <td class='align-middle'>
                                    <button type="button" class="btn btn-primary me-2" data-bs-toggle='modal'
                                        data-bs-target='#edit'>Cập Nhật</button>
                                    <button type="button" data-bs-toggle='modal' data-bs-target='#xoa'
                                        class="btn btn-danger">Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class='modal fade' id='edit' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                    <div class='modal-dialog'>
                        <div class='modal-content'>
                            <div class='modal-header'>
                                <h1 class='modal-title fs-5' id='exampleModalLabel'>Modal title</h1>
                                <button type='button' class='btn-close' data-bs-dismiss='modal'
                                    aria-label='Close'></button>
                            </div>
                            <div class='modal-body'>
                                <div class=" mb-3">
                                    <label class="mb-2">Tên Phòng Ban</label>
                                    <input type="text" class="form-control" placeholder="">
                                </div>
                                <div class=" mb-3">
                                    <label class="mb-2"> Phòng Ban Cha</label>
                                    <input type="number" class="form-control" placeholder="">
                                </div>
                                <div class=" mb-3">
                                    <label class="mb-2">Trưởng Phòng</label>
                                    <input type="number" class="form-control" placeholder="">
                                </div>
                                <div class=" mb-3">
                                    <label class="mb-2">Tình Trạng</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option value="1">Hiển Thị</option>
                                        <option value="0">Tạm tắt</option>
                                    </select>
                                </div>
                            </div>
                            <div class='modal-footer'>
                                <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
                                <button type='button' class='btn btn-primary' data-bs-dismiss='modal'>Xác
                                    Nhận</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class='modal fade' id='xoa' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                    <div class='modal-dialog'>
                        <div class='modal-content'>
                            <div class='modal-header'>
                                <h1 class='modal-title fs-5' id='exampleModalLabel'>Modal title</h1>
                                <button type='button' class='btn-close' data-bs-dismiss='modal'
                                    aria-label='Close'></button>
                            </div>
                            <div class='modal-body'>
                                <div class="alert alert-danger border-0 bg-danger alert-dismissible fade show py-2">
                                    <div class="d-flex align-items-center">
                                        <div class="font-35 text-white"><i class="bx bxs-message-square-x"></i>
                                        </div>
                                        <div class="ms-1">
                                            <h6 class="mb-1 text-white">Bạn chắc chắc xóa phòng ban <b>xxx</b> này chứ
                                                !!!</h6>
                                            <div class="text-white text-nowrap"><b>LƯU Ý !!!</b> Điều này không thể khôi
                                                phục
                                                khi ấn xác nhận
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='modal-footer'>
                                <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
                                <button type='button' class='btn btn-danger' data-bs-dismiss='modal'>Xóa</button>
                            </div>
                        </div>
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