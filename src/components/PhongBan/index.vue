<template lang="">
    <div class="row">
        <div class="col-lg-4">
            <div class='card border-top border-0 border-4 border-primary'>
                 <div class='card-header'>
                     <h5>Thêm Mới Phòng Ban</h5>
                 </div>
                 <div class='card-body'>
                    <div class="">
                        <div class=" mb-3">
                            <label class="mb-2" >Tên Phòng Ban</label>
                            <input v-model="create.ten_phong_ban" type="text" class="form-control"  placeholder="">
                        </div>
                        <div class=" mb-3">
                            <label class="mb-2" > Phòng Ban Cha</label>
                            <input v-model="create.id_phong_ban_cha" type="number" class="form-control"  placeholder="">
                        </div>
                        <div class=" mb-3">
                            <label class="mb-2" >Trưởng Phòng</label>
                            <input v-model="create.id_truong_phong" type="number" class="form-control"  placeholder="">
                        </div>
                        <div class=" mb-3">
                            <label class="mb-2" >Tình Trạng</label>
                            <select v-model="create.tinh_trang" class="form-select" aria-label="Default select example">
                                <option value="1">Hiển Thị</option>
                                <option value="0">Tạm tắt</option>
                            </select>
                        </div>
                    </div>
                 </div>
                 <div class='card-footer text-end'>
                    <button v-on:click="themMoi()" type="button" class="btn btn-primary">Thêm Mới</button>
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
                            <template v-for="(v,k) in list">
                                <tr class='align-middle text-center'>
                                    <th class='align-middle'>{{k + 1}}</th>
                                    <td class='align-middle'>{{v.ten_phong_ban}}</td>
                                    <td class='align-middle'>{{v.id_phong_ban_cha}}</td>
                                    <td class='align-middle'>{{v.id_truong_phong}}</td>
                                    <td class='align-middle'>
                                        <button v-on:click=trangThai(v) v-if="v.tinh_trang == 1" type="button" class="btn btn-info">Hiển thị</button>
                                        <button v-on:click=trangThai(v) v-else type="button" class="btn btn-warning">Tạm Tắt</button>
                                    </td>
                                    <td class='align-middle'>
                                        <button type="button" v-on:click="Object.assign(update,v)" class="btn btn-primary me-2" data-bs-toggle='modal' data-bs-target='#edit'>Cập Nhật</button>
                                        <button type="button" v-on:click="Object.assign(del,v)" data-bs-toggle='modal' data-bs-target='#xoa' class="btn btn-danger">Xóa</button>
                                    </td>
                            </tr>
                            </template>
</tbody>
</table>
<div class='modal fade' id='edit' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
    <div class='modal-dialog'>
        <div class='modal-content'>
            <div class='modal-header'>
                <h1 class='modal-title fs-5' id='exampleModalLabel'>Modal title</h1>
                <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div class='modal-body'>
                <div class=" mb-3">
                    <label class="mb-2">Tên Phòng Ban</label>
                    <input v-model="update.ten_phong_ban" type="text" class="form-control" placeholder="">
                </div>
                <div class=" mb-3">
                    <label class="mb-2"> Phòng Ban Cha</label>
                    <input v-model="update.id_phong_ban_cha" type="number" class="form-control" placeholder="">
                </div>
                <div class=" mb-3">
                    <label class="mb-2">Trưởng Phòng</label>
                    <input v-model="update.id_truong_phong" type="number" class="form-control" placeholder="">
                </div>
                <div class=" mb-3">
                    <label class="mb-2">Tình Trạng</label>
                    <select v-model="update.tinh_trang" class="form-select" aria-label="Default select example">
                        <option value="1">Hiển Thị</option>
                        <option value="0">Tạm tắt</option>
                    </select>
                </div>
            </div>
            <div class='modal-footer'>
                <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
                <button type='button' v-on:click="capNhat()" class='btn btn-primary' data-bs-dismiss='modal'>Xác
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
                <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div class='modal-body'>
                Bạn có chắc chắc muốn xóa phòng ban <b>{{del.ten_phong_ban}} </b> này không?
            </div>
            <div class='modal-footer'>
                <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
                <button type='button' v-on:click="Xoa()" class='btn btn-primary' data-bs-dismiss='modal'>Xác Nhận
                    Xóa</button>
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
import axios from 'axios';
export default {
    data() {
        return {
            list: [],
            create: {},
            update: {},
            del: {},

        }
    },
    mounted() {
        this.LoadPB();
    },
    methods: {
        LoadPB() {
            axios
                .get('http://127.0.0.1:8000/api/phong-ban/data')
                .then((res) => {
                    this.list = res.data.data
                })

        },
        themMoi() {
            axios
                .post('http://127.0.0.1:8000/api/phong-ban/create', this.create)
                .then((res) => {
                    if (res.data.status) {
                        alert(res.data.message)
                        this.LoadPB();

                    } else {
                        alert(res.data.message)
                    }
                })
            // .catch((res) => {
            //     var list_error = Object.values(res.response.data.errors);
            //     list_error.forEach((v, k) => {
            //         toaster.error(v[0]);
            //     });
            // });
        },
        capNhat() {
            axios
                .post('http://127.0.0.1:8000/api/phong-ban/update', this.update)
                .then((res) => {
                    if (res.data.status) {
                        alert(res.data.message)
                        this.LoadPB();
                    } else {
                        alert(res.data.message)
                    }
                })
        },
        Xoa() {
            axios
                .post('http://127.0.0.1:8000/api/phong-ban/delete', this.del)
                .then((res) => {
                    if (res.data.status) {
                        alert(res.data.message)
                        this.LoadPB();
                    } else {
                        alert(res.data.message)
                    }
                })
        },
        trangThai(v) {
            axios
                .post('http://127.0.0.1:8000/api/phong-ban/status', v)
                .then((res) => {
                    if (res.data.status) {
                        alert(res.data.message)
                        this.LoadPB();
                    } else {
                        alert(res.data.message)
                    }
                })
        }
    },
}
</script>
<style lang="">

</style>