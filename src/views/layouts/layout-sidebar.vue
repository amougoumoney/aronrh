<script setup>
import { ref, computed } from "vue";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/style.css";
import SidebarMenu from "./sidebar-menu.vue";
import horizontalHeader from "./horizontal-header.vue";
import twoSidebar from "./two-sidebar.vue";
import StackedSidebar from "./stacked-sidebar.vue";

const settings = ref({
	suppressScrollX: true,
});
const activeClass = ref("active");

const scrollHandle = () => { };

const currentPath = computed(() => {
	return useRoute().name;
});

const dashboardRoute = computed(() => {
	const userRole = localStorage.getItem("userRole")?.toLowerCase();
	switch (userRole) {
		case "admin":
			return "/dashboard/admin-dashboard";
		case "hr-manager":
			return "/dashboard/hr-manager-dashboard";
		case "hr-assistant":
			return "/dashboard/hr-assistant-dashboard";
		case "manager":
		case "employee":
		case "superadmin":
			return "/dashboard/superadmin-dashboard";
		default:
			return "/dashboard/employee-dashboard";
	}
});
</script>


<template>
	<!-- Sidebar -->
	<div class="sidebar" id="sidebar">
		<!-- Logo -->
		<div class="sidebar-logo">
			<router-link :to="dashboardRoute" class="logo logo-normal">
				<div class="logo-container">
					<h1 class="logo-title">AR HR</h1>
				</div>
			</router-link>

			<router-link :to="dashboardRoute" class="logo logo-small">
				<div class="logo-container">
					<h1 class="logo-title">ARHR</h1>
				</div>
			</router-link>


			<router-link :to="dashboardRoute" class="dark-logo">
				<span class="logo-text">ARONHR </span>
				<span
					style="background: linear-gradient(to right, #00008B, #4169E1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 10px; font-weight: bold;">@ARONHR</span>
			</router-link>
		</div>

		<!-- /Logo -->
		<div class="modern-profile p-3 pb-0">
			<div class="text-center rounded bg-light p-3 mb-4 user-profile">
				<div class="avatar avatar-lg online mb-3">
					<img src="@/assets/img/profiles/avatar-02.jpg" alt="Img" class="img-fluid rounded-circle">
				</div>
				<h6 class="fs-12 fw-normal mb-1">Adrian Herman</h6>
				<p class="fs-10">{{ $t('SystemAdmin') }}</p>
			</div>
			<div class="sidebar-nav mb-3">
				<ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified bg-transparent" role="tablist">
					<li class="nav-item"><a class="nav-link active border-0" href="javascript:void(0);">{{ $t('menu')
					}}</a></li>
					<li class="nav-item">
						<router-link class="nav-link border-0" to="/applications/chat">{{ $t('chats') }}</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link border-0" to="/applications/email">{{ $t('inbox') }}</router-link>
					</li>
				</ul>
			</div>
		</div>

		<div class="sidebar-header p-3 pb-0 pt-2">
			<div class="text-center rounded bg-light p-2 mb-4 sidebar-profile d-flex align-items-center">
				<div class="avatar avatar-md onlin">
					<img src="@/assets/img/profiles/avatar-02.jpg" alt="Img" class="img-fluid rounded-circle">
				</div>
				<div class="text-start sidebar-profile-info ms-2">
					<h6 class="fs-12 fw-normal mb-1">Adrian Herman</h6>
					<p class="fs-10">{{ $t('SystemAdmin') }}</p>
				</div>
			</div>
			<div class="input-group input-group-flat d-inline-flex mb-4">
				<span class="input-icon-addon">
					<i class="ti ti-search"></i>
				</span>
				<input type="text" class="form-control" placeholder="Search in ARONHR">
				<span class="input-group-text">
					<kbd>CTRL + / </kbd>
				</span>
			</div>
			<div class="d-flex align-items-center justify-content-between menu-item mb-3">
				<div class="me-3">
					<a href="javascript:void(0);" class="btn btn-menubar position-relative">
						<i class="ti ti-shopping-bag"></i>
						<span
							class="badge bg-success rounded-pill d-flex align-items-center justify-content-center header-badge">5</span>
					</a>
				</div>
				<div class="me-3">
					<a href="javascript:void(0);" class="btn btn-menubar">
						<i class="ti ti-layout-grid-remove"></i>
					</a>
				</div>
				<div class="me-3">
					<a href="javascript:void(0);" class="btn btn-menubar position-relative">
						<i class="ti ti-brand-hipchat"></i>
						<span
							class="badge bg-info rounded-pill d-flex align-items-center justify-content-center header-badge">5</span>
					</a>
				</div>
				<div class="me-3 notification-item">
					<a href="javascript:void(0);" class="btn btn-menubar position-relative me-1">
						<i class="ti ti-bell"></i>
						<span class="notification-status-dot"></span>
					</a>
				</div>
				<div class="me-0">
					<a href="javascript:void(0);" class="btn btn-menubar">
						<i class="ti ti-message"></i>
					</a>
				</div>
			</div>
		</div>
		<div class="sidebar-inner slimscroll">
			<PerfectScrollbar class="scroll-area" :settings="settings" @ps-scroll-y="scrollHanle">
				<div id="sidebar-menu" class="sidebar-menu">
					<SidebarMenu></SidebarMenu>
				</div>
			</PerfectScrollbar>
		</div>
	</div>
	<!-- /Sidebar -->

	<horizontal-header></horizontal-header>
	<two-sidebar></two-sidebar>
	<stacked-sidebar></stacked-sidebar>
</template>