<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <div class=" mb-3 text-end">
                    <button class="btn btn-primary" data-bs-toggle='modal' data-bs-target='#themmoi'>Thêm
                        Mới</button>
                </div>
            </div>

            <div class='modal fade' id='themmoi' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                <div class='modal-dialog'>
                    <div class='modal-content'>
                        <div class='modal-header'>
                            <h1 class='modal-title fs-5' id='exampleModalLabel'>Thêm Mới</h1>
                            <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div class='modal-body'>
                            <div class=" mb-3">
                                <label class="mb-2">Tên Nhân Viên</label>
                                <input type="text" class="form-control" placeholder="">
                            </div>
                            <div class=" mb-3">
                                <label class="mb-2"> Ngày Làm Việc</label>
                                <input type="number" class="form-control" placeholder="">
                            </div>
                            <div class=" mb-3">
                                <label class="mb-2">Giờ Vào</label>
                                <input type="number" class="form-control" placeholder="">
                            </div>
                            <div class=" mb-3">
                                <label class="mb-2">Giờ Ra</label>
                                <input type="number" class="form-control" placeholder="">
                            </div>
                        </div>
                        <div class='modal-footer'>
                            <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
                            <button type='button' class='btn btn-primary' data-bs-dismiss='modal'>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class='card border-top border-0 border-4 border-primary'>
                    <div class='card-header'>
                        <h5> Bảng Chấm Công</h5>
                    </div>
                    <div class='card-body'>
                        <table class='table table-bordered'>
                            <thead>
                                <tr class='align-middle text-center'>
                                    <th class='align-middle'>#</th>
                                    <th class='align-middle'>Tên Nhân Viên</th>
                                    <th class='align-middle'>Ngày Làm Việc</th>
                                    <th class='align-middle'>Giờ Vào </th>
                                    <th class='align-middle'>Giờ Ra</th>
                                    <th class='align-middle'>Aciton</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class='align-middle text-center'>
                                    <th class='align-middle'>1</th>
                                    <td class='align-middle'>Hoàng Việt ĐỨc</td>
                                    <td class='align-middle'>30/09/2024</td>
                                    <td class='align-middle'>08:00 </td>
                                    <td class='align-middle'>11:30</td>
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

                    <div class='modal fade' id='xoa' tabindex='-1' aria-labelledby='exampleModalLabel'
                        aria-hidden='true'>
                        <div class='modal-dialog'>
                            <div class='modal-content'>
                                <div class='modal-header'>
                                    <h1 class='modal-title fs-5' id='exampleModalLabel'>Modal title</h1>
                                    <button type='button' class='btn-close' data-bs-dismiss='modal'
                                        aria-label='Close'></button>
                                </div>
                                <div class='modal-body'>
                                    Bạn có chắc chắn muốn xóa ... này không?
                                </div>
                                <div class='modal-footer'>
                                    <button type='button' class='btn btn-secondary'
                                        data-bs-dismiss='modal'>Close</button>
                                    <button type='button' class='btn btn-primary' data-bs-dismiss='modal'>Save
                                        changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='modal fade' id='edit' tabindex='-1' aria-labelledby='exampleModalLabel'
                        aria-hidden='true'>
                        <div class='modal-dialog'>
                            <div class='modal-content'>
                                <div class='modal-header'>
                                    <h1 class='modal-title fs-5' id='exampleModalLabel'>Cập Nhật Chấm Công</h1>
                                    <button type='button' class='btn-close' data-bs-dismiss='modal'
                                        aria-label='Close'></button>
                                </div>
                                <div class='modal-body'>
                                    <div class=" mb-3">
                                        <label class="mb-2">Tên Nhân Viên</label>
                                        <input type="text" class="form-control" placeholder="">
                                    </div>
                                    <div class=" mb-3">
                                        <label class="mb-2"> Ngày Làm Việc</label>
                                        <input type="number" class="form-control" placeholder="">
                                    </div>
                                    <div class=" mb-3">
                                        <label class="mb-2">Giờ Vào</label>
                                        <input type="number" class="form-control" placeholder="">
                                    </div>
                                    <div class=" mb-3">
                                        <label class="mb-2">Giờ Ra</label>
                                        <input type="number" class="form-control" placeholder="">
                                    </div>

                                </div>
                                <div class='modal-footer'>
                                    <button type='button' class='btn btn-secondary'
                                        data-bs-dismiss='modal'>Close</button>
                                    <button type='button' class='btn btn-primary' data-bs-dismiss='modal'>Xác
                                        Nhận</button>
                                </div>
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