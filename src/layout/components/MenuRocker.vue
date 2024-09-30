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
					<a class="nav-link" href="/">
						<div class="parent-icon"><i class="fa-solid fa-home"></i>
						</div>
						<div class="menu-title">Home</div>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/admin/chuc-vu">
						<div class="parent-icon"><i class="fa-solid fa-home"></i>
						</div>
						<div class="menu-title">Chức Vụ</div>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/admin/luong">
						<div class="parent-icon"><i class="fa-solid fa-money-bill"></i>
						</div>
						<div class="menu-title">Lương</div>
					</a>
				</li>
				<!-- VIET -->

				<!-- END_VIET -->

				<!-- SANG -->
				<li class="nav-item">
					<router-link to="/admin/tieu-chi-kpi">
						<a class="nav-link" href="/admin/tieu-chi-kpi">
							<div class="parent-icon"><i class="fas fa-chart-line"></i>
							</div>
							<div class="menu-title">Tiêu Chí KPI</div>
						</a>
					</router-link>
				</li>
				<!-- END_SANG -->

				<!-- QUY -->

				<!-- END_QUY -->

				<!-- DUC -->
				<li class="nav-item">
					<router-link to="/phong-ban">
						<a class="nav-link" href="/">
							<div class="parent-icon"><i class="fa-solid fa-home"></i>
							</div>
							<div class="menu-title">Phòng Ban</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/cham-cong">
						<a class="nav-link" href="/">
							<div class="parent-icon"><i class="fa-solid fa-home"></i>
							</div>
							<div class="menu-title">Chấm Công</div>
						</a>
					</router-link>
				</li>
				<!-- END_DUC -->
			</ul>
		</nav>
	</div>
</template>
<script>
export default {

}
</script>
<style></style>