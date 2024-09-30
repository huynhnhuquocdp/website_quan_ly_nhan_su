<template>
    <div class="row">
        <div class="col-lg-3">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2"><b>THÊM MỚI QUY ĐỊNH ĐIỂM</b></h5>
                </div>
                <div class="card-body">
                    <div class="mb-2">
                        <label class="form-label">Mã Số</label>
                        <input type="text" class="form-control" placeholder="Vd: QD001" />
                    </div>
                    <div class="mb-2">
                        <label class="form-label">Số Điểm</label>
                        <input type="number" class="form-control" placeholder="Vd: 10" />
                    </div>
                    <div class="mb-2">
                        <label class="form-label">Nội Dung</label>
                        <input type="text" class="form-control" placeholder="Vd: Điểm cho công việc đúng hạn" />
                    </div>
                    <div class="mb-2">
                        <label class="form-label">Ghi Chú</label>
                        <textarea class="form-control" cols="30" rows="2"></textarea>
                    </div>
                    <div class="mb-2">
                        <label class="form-label">Loại Điểm</label>
                        <select class="form-control">
                            <option value="Thưởng">Thưởng</option>
                            <option value="Phạt">Phạt</option>
                        </select>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-primary">Thêm Mới</button>
                </div>
            </div>
        </div>
        <div class="col-lg-9">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2"><b>DANH SÁCH QUY ĐỊNH ĐIỂM</b></h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th class="text-center align-middle">#</th>
                                    <th class="text-center align-middle">Mã Số</th>
                                    <th class="text-center align-middle">Số Điểm</th>
                                    <th class="text-center align-middle">Nội Dung</th>
                                    <th class="text-center align-middle">Ghi Chú</th>
                                    <th class="text-center align-middle">Loại Điểm</th>
                                    <th class="text-center align-middle">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="align-middle text-center">1</th>
                                    <td class="align-middle">QD001</td>
                                    <td class="align-middle text-center">10</td>
                                    <td class="align-middle text-nowrap">
                                        Điểm thưởng cho hoàn thành công việc đúng hạn
                                    </td>
                                    <td class="align-middle text-nowrap">
                                        Chỉ áp dụng cho nhân viên được quản lý đánh giá
                                    </td>
                                    <td class="align-middle text-center">Thưởng</td>
                                    <td class="align-middle text-center">
                                        <button class="btn btn-primary me-2" data-bs-toggle="modal"
                                            data-bs-target="#capnhatMGG">
                                            Cập nhật
                                        </button>
                                        <button class="btn btn-danger" data-bs-toggle="modal"
                                            data-bs-target="#delModal">
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="align-middle text-center">2</th>
                                    <td class="align-middle">QD002</td>
                                    <td class="align-middle text-center">10</td>
                                    <td class="align-middle text-nowrap">
                                        Điểm phạt cho hoàn thành công việc không đúng hạn
                                    </td>
                                    <td class="align-middle text-nowrap">
                                        Chỉ áp dụng cho nhân viên được quản lý đánh giá
                                    </td>
                                    <td class="align-middle text-center">Phạt</td>
                                    <td class="align-middle text-center">
                                        <button class="btn btn-primary me-2" data-bs-toggle="modal"
                                            data-bs-target="#capnhatMGG">
                                            Cập nhật
                                        </button>
                                        <button class="btn btn-danger" data-bs-toggle="modal"
                                            data-bs-target="#delModal">
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="capnhatMGG" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                            Cập Nhật Quy Định Điểm
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-2">
                            <label class="form-label">Mã Số</label>
                            <input type="text" class="form-control" placeholder="Vd: QD001" />
                        </div>
                        <div class="mb-2">
                            <label class="form-label">Số Điểm</label>
                            <input type="number" class="form-control" placeholder="Vd: 10" />
                        </div>
                        <div class="mb-2">
                            <label class="form-label">Nội Dung</label>
                            <input type="text" class="form-control" placeholder="Vd: Điểm cho công việc đúng hạn" />
                        </div>
                        <div class="mb-2">
                            <label class="form-label">Ghi Chú</label>
                            <textarea class="form-control" cols="30" rows="2"></textarea>
                        </div>
                        <div class="mb-2">
                            <label class="form-label">Loại Điểm</label>
                            <select class="form-control">
                                <option value="1">Thưởng</option>
                                <option value="0">Phạt</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Đóng
                        </button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
                            Cập nhật
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="delModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                            Xóa Quy Định Điểm
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-danger border-0 bg-danger alert-dismissible fade show py-2">
                            <div class="d-flex align-items-center">
                                <div class="font-35 text-white"><i class="bx bxs-message-square-x"></i>
                                </div>
                                <div class="ms-1">
                                    <h6 class="mb-1 text-white">Bạn chắc chắc xóa quy định cho điểm <b>xxx</b> này chứ
                                        !!!</h6>
                                    <div class="text-white text-nowrap"><b>LƯU Ý !!!</b> Điều này không thể khôi phục
                                        khi ấn xác nhận
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Đóng
                        </button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                            Xóa
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style></style>
