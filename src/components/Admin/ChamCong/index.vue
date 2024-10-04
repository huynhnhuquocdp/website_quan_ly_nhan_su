<template>
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
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(v, k) in list_cham_cong" :key="k">
                                <tr class='align-middle text-center'>
                                    <th class='align-middle'>{{ k + 1 }}</th>
                                    <td class='align-middle'>{{ v.ho_va_ten }}</td>
                                    <td class='align-middle'>{{ v.ngay_lam_viec }}</td>
                                    <td class='align-middle'>{{ v.gio_vao }} </td>
                                    <td class='align-middle'>{{ v.gio_ra }}</td>
                                </tr>
                            </template>
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
            list_cham_cong: [],
        }

    },
    mounted() {
        this.loadChamCong();
    },
    methods: {
        loadChamCong() {
            axios
                .get('http://127.0.0.1:8000/api/admin/cham-cong/data')
                .then((res) => {
                    this.list_cham_cong = res.data.data;
                })
        },
    }
}
</script>
<style></style>