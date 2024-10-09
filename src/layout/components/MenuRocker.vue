<template>
	<div class="nav-container primary-menu">
		<div class="mobile-topbar-header">
			<div>
				<img src="../../assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
			</div>
			<div>
				<h4 class="logo-text">Rukada</h4>
			</div>
			<div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
			</div>
		</div>
		<nav class="navbar navbar-expand-xl w-100">
			<ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
				<li class="nav-item">
					<router-link to="/">
						<a class="nav-link" href="/">
							<div class="parent-icon"><i class="fa-solid fa-home"></i>
							</div>
							<div class="menu-title">Home</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/nhan-vien">
						<a class="nav-link" href="/admin/nhan-vien">
							<div class="parent-icon"><i class="fa-solid fa-user"></i>
							</div>
							<div class="menu-title">Nhân Viên</div>
						</a>
					</router-link>

				</li>
				<li class="nav-item">
					<router-link to="/admin/chuc-vu">
						<a class="nav-link" href="/admin/chuc-vu">
							<div class="parent-icon"><i class="fa-solid fa-user-tie"></i>
							</div>
							<div class="menu-title">Chức Vụ</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/phong-ban">
						<a class="nav-link" href="/admin/phong-ban">
							<div class="parent-icon"><i class="fa-solid fa-person-shelter"></i>
							</div>
							<div class="menu-title">Phòng Ban</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/tieu-chi-kpi">
						<a class="nav-link" href="/admin/tieu-chi-kpi">
							<div class="parent-icon"><i class="fas fa-chart-line"></i>
							</div>
							<div class="menu-title">Tiêu Chí KPI</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/kpi-nhan-vien">
						<a class="nav-link" href="/admin/kpi-nhan-vien">
							<div class="parent-icon"><i class="fa-solid fa-magnifying-glass-chart"></i>
							</div>
							<div class="menu-title">KPI Nhân Viên</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/quy-dinh-cho-diem">
						<a class="nav-link" href="/admin/quy-dinh-cho-diem">
							<div class="parent-icon"><i class="fa-solid fa-feather-pointed"></i>
							</div>
							<div class="menu-title">Quy Định Cho Điểm</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/thuong-va-phat">
						<a class="nav-link" href="/admin/thuong-va-phat">
							<div class="parent-icon"><i class="fa-solid fa-feather-pointed"></i>
							</div>
							<div class="menu-title">Thưởng Và Phạt</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/loai-hop-dong">
						<a class="nav-link" href="/admin/loai-hop-dong">
							<div class="parent-icon"><i class="fa-solid fa-file-contract"></i>
							</div>
							<div class="menu-title">Loại Hợp Đồng</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/chi-tiet-hop-dong">
						<a class="nav-link" href="/admin/chi-tiet-hop-dong">
							<div class="parent-icon"><i class="fa-solid fa-file-signature"></i>
							</div>
							<div class="menu-title">Hợp Đồng Nhân Viên</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/cham-cong">
						<a class="nav-link" href="/admin/cham-cong">
							<div class="parent-icon"><i class="fa-solid fa-calendar-plus"></i>
							</div>
							<div class="menu-title">Chấm Công</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/thong-ke">
						<a class="nav-link" href="/admin/thong-ke">
							<div class="parent-icon"><i class="fa-solid fa-chart-simple"></i>
							</div>
							<div class="menu-title">Thống Kê</div>
						</a>
					</router-link>
				</li>
			</ul>
		</nav>
	</div>
</template>
<script>
export default {

}
</script>
<style></style>