<template>
  <div class="header">
    <div class="main-header">
      <div class="header-left">
        <!-- New Normal Logo -->
        <div class="logo-wrapper">
          <router-link :to="dashboardRoute" class="logo logo-normal">
            <div class="logo-container">
              <h1 class="logo-title">ARONHR</h1>
              <span class="logo-tagline">ARON / BHF</span>
            </div>
          </router-link>
        </div>

        <router-link :to="dashboardRoute" class="dark-logo">
          <span class="logo-text">ARONHR</span>
        </router-link>
      </div>

      <a id="mobile_btn" class="mobile_btn" @click="toggleSidebar1" href="javascript:void(0);">
        <span class="bar-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </a>

      <div class="header-user">
        <div class="nav user-menu nav-list">
          <div class="me-auto d-flex align-items-center" id="header-search">
            <a id="toggle_btn" href="javascript:void(0);" @click="toggleSidebar" class="btn btn-menubar me-1">
              <i class="ti ti-arrow-bar-to-left"></i>
            </a>
            <!-- Search -->
            <div class="input-group input-group-flat d-inline-flex me-1">
              <span class="input-icon-addon">
                <i class="ti ti-search"></i>
              </span>
              <input type="text" class="form-control" :placeholder="$t('searchInARONHR')" />
              <span class="input-group-text">
                <kbd>CTRL + / </kbd>
              </span>
            </div>
            <!-- /Search -->

          </div>

          <div class="d-flex align-items-center">
            <div class="">
              <language-switcher />
            </div>

            <div class="me-1">
              <a href="javascript:void(0);" class="btn btn-menubar btnFullscreen" @click="initFullScreen">
                <i class="ti ti-maximize"></i>
              </a>
            </div>

            <div class="me-1 notification_item">
              <a href="javascript:void(0);" class="btn btn-menubar position-relative me-1" id="notification_popup"
                data-bs-toggle="dropdown">
                <i class="ti ti-bell"></i>
                <span class="notification-status-dot"></span>
              </a>
              <div class="dropdown-menu dropdown-menu-end notification-dropdown p-4">
                <div class="d-flex align-items-center justify-content-between border-bottom p-0 pb-3 mb-3">
                  <h4 class="notification-title">{{ $t('notifications') }} (2)</h4>
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="text-primary fs-15 me-3 lh-1">{{ $t('markAllAsRead') }}</a>
                    <div class="dropdown">
                      <a href="javascript:void(0);" class="bg-white dropdown-toggle" data-bs-toggle="dropdown">
                        <i class="ti ti-calendar-due me-1"></i>{{ $t('today') }}
                      </a>
                      <ul class="dropdown-menu mt-2 p-3">
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1">
                            {{ $t('thisWeek') }}
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1">
                            {{ $t('lastWeek') }}
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1">
                            {{ $t('lastMonth') }}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="noti-content">
                  <div class="d-flex flex-column">
                    <div class="border-bottom mb-3 pb-3">
                      <router-link to="/crm/activity">
                        <div class="d-flex">
                          <span class="avatar avatar-lg me-2 flex-shrink-0">
                            <img src="@/assets/img/profiles/avatar-27.jpg" alt="Profile" />
                          </span>
                          <div class="flex-grow-1">
                            <p class="mb-1">
                              <span class="text-dark fw-semibold">Shawn</span>
                              {{ $t('performanceInMathIsBelowTheThreshold') }}
                            </p>
                            <span>{{ $t('justNow') }}</span>
                          </div>
                        </div>
                      </router-link>
                    </div>
                    <div class="border-bottom mb-3 pb-3">
                      <router-link to="/crm/activity" class="pb-0">
                        <div class="d-flex">
                          <span class="avatar avatar-lg me-2 flex-shrink-0">
                            <img src="@/assets/img/profiles/avatar-23.jpg" alt="Profile" />
                          </span>
                          <div class="flex-grow-1">
                            <p class="mb-1">
                              <span class="text-dark fw-semibold">Sylvia</span>
                              {{ $t('addAppointmentOn02PM') }}
                            </p>
                            <span>{{ $t('10MinsAgo') }}</span>
                            <div class="d-flex justify-content-start align-items-center mt-1">
                              <span class="btn btn-light btn-sm me-2">{{ $t('deny') }}</span>
                              <span class="btn btn-primary btn-sm">{{ $t('approve') }}</span>
                            </div>
                          </div>
                        </div>
                      </router-link>
                    </div>
                    <div class="border-bottom mb-3 pb-3">
                      <router-link to="/crm/activity">
                        <div class="d-flex">
                          <span class="avatar avatar-lg me-2 flex-shrink-0">
                            <img src="@/assets/img/profiles/avatar-25.jpg" alt="Profile" />
                          </span>
                          <div class="flex-grow-1">
                            <p class="mb-1">
                              {{ $t('newStudentRecord') }}
                              <span class="text-dark fw-semibold"> George</span>
                              {{ $t('isCreatedBy') }}
                              <span class="text-dark fw-semibold">Teressa</span>
                            </p>
                            <span>{{ $t('2HrsAgo') }}</span>
                          </div>
                        </div>
                      </router-link>
                    </div>
                    <div class="border-0 mb-3 pb-0">
                      <router-link to="/crm/activity">
                        <div class="d-flex">
                          <span class="avatar avatar-lg me-2 flex-shrink-0">
                            <img src="@/assets/img/profiles/avatar-01.jpg" alt="Profile" />
                          </span>
                          <div class="flex-grow-1">
                            <p class="mb-1">
                              {{ $t('aNewTeacherRecordFor') }}
                              <span class="text-dark fw-semibold">Elisa</span>
                            </p>
                            <span>{{ $t('0945AM') }}</span>
                          </div>
                        </div>
                      </router-link>
                    </div>
                  </div>
                </div>
                <div class="d-flex p-0">
                  <a href="javascript:void(0);" class="btn btn-light w-100 me-2">{{ $t('cancel') }}</a>
                  <router-link to="/crm/activity" class="btn btn-primary w-100">{{ $t('viewAll') }}</router-link>
                </div>
              </div>
            </div>

            <div class="dropdown profile-dropdown">
              <a href="javascript:void(0);" class="dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown">
                <span class="avatar avatar-sm online">
                  <img src="@/assets/img/profiles/avatar-12.jpg" alt="Img" class="img-fluid rounded-circle" />
                </span>
              </a>
              <div class="dropdown-menu shadow-none">
                <div class="card mb-0">
                  <div class="card-header">
                    <div class="d-flex align-items-center">
                      <span class="avatar avatar-lg me-2 avatar-rounded">
                        <img src="@/assets/img/profiles/avatar-12.jpg" alt="img" />
                      </span>
                      <div>
                        <h5 class="mb-0">{{ username }}</h5>
                        <p class="fs-12 fw-medium mb-0">{{ email }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <router-link class="dropdown-item d-inline-flex align-items-center p-0 py-2" to="/pages/profile">
                      <i class="ti ti-user-circle me-1"></i>{{ $t('myProfil') }}
                    </router-link>
                    <router-link class="dropdown-item d-inline-flex align-items-center p-0 py-2"
                      to="/general-settings/profile-settings">
                      <i class="ti ti-settings me-1"></i>{{ $t('settings') }}
                    </router-link>







                  </div>
                  <div class="card-footer">
                    <a class="dropdown-item d-inline-flex align-items-center p-0 py-2" href="javascript:void(0);"
                      @click.prevent="handleLogout">
                      <i class="ti ti-login me-2"></i>{{ $t('logout') }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div class="dropdown mobile-user-menu">
        <a href="javascript:void(0);" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
          aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
        <div class="dropdown-menu dropdown-menu-end">
          <router-link class="dropdown-item" to="/pages/profile">{{ $t('myProfil') }}</router-link>
          <router-link class="dropdown-item" to="/general-settings/profile-settings">{{ $t('settings') }}</router-link>
          <a class="dropdown-item" href="javascript:void(0);" @click.prevent="handleLogout">{{ $t('logout') }}</a>
        </div>
      </div>
      <!-- /Mobile Menu -->
    </div>
  </div>
  <theme-settings></theme-settings>

</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { useRouter } from 'vue-router';
import { authService } from '@/services/auth.service';
import sideBarData from "@/assets/json/sidebar-menuone.json";
import Swal from 'sweetalert2';

const router = useRouter();

const notificationClass = ref("pe-1");
const openMenuItem = ref(null);
const openSubmenuOneItem = ref(null);
const route_array = ref([]);
const username = ref(null);
const email = ref(null);

const fetchUserDetails = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    try {
      const userData = JSON.parse(userStr);
      username.value = userData.name || 'User';
      email.value = userData.email || 'user@example.com';
    } catch (e) {
      username.value = 'User';
      email.value = 'user@example.com';
    }
  } else {
    username.value = 'User';
    email.value = 'user@example.com';
  }
};

const handleClick = (event) => {
  event.stopPropagation();
  if (notificationClass.value === "pe-1 notification-item-show") {
    notificationClass.value = "";
    document.removeEventListener("click", handleOutsideClick);
  } else {
    notificationClass.value = "pe-1 notification-item-show";
    document.addEventListener("click", handleOutsideClick);
  }
};

const handleOutsideClick = (event) => {
  const notificationItem = event.target.closest(".notification-item");
  if (!notificationItem) {
    notificationClass.value = "";
    document.removeEventListener("click", handleOutsideClick);
  }
};

const toggleSidebar1 = () => {
  document.body.classList.toggle("slide-nav");
};

const toggleSidebar = () => {
  document.body.classList.toggle("mini-sidebar");
};

const initFullScreen = () => {
  document.body.classList.toggle("fullscreen-enable");
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
};

const handleMouseover = (e) => {
  e.stopPropagation();
  const body = document.body;
  const toggleBtn = document.getElementById("toggle_btn");
  if (body.classList.contains("mini-sidebar") && toggleBtn?.offsetWidth > 0) {
    const target = e.target.closest(".sidebar, .header-left");
    if (target) {
      body.classList.add("expand-menu");
    } else {
      body.classList.remove("expand-menu");
    }
  }
};

const expandSubMenus = (menu) => {
  sideBarData.forEach((item) => {
    item.menu.forEach((subMenu) => {
      if (subMenu !== menu) {
        subMenu.showSubRoute = false;
      }
    });
  });
  menu.showSubRoute = !menu.showSubRoute;
};

const openMenu = (menu) => {
  openMenuItem.value = openMenuItem.value === menu ? null : menu;
};

const openSubmenuOne = (subMenus) => {
  openSubmenuOneItem.value = openSubmenuOneItem.value === subMenus ? null : subMenus;
};

const handleLogout = async () => {
  try {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out of the system",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout',
      cancelButtonText: 'Cancel'
    });

    if (result.isConfirmed) {
      const logoutResult = await authService.logout();
      if (logoutResult.success) {
        router.push('/login');
      }
    }
  } catch (error) {
    console.error('Logout failed:', error);
    router.push('/login');
  }
};

const dashboardRoute = computed(() => '/dashboard/');

onMounted(() => {
  fetchUserDetails();
  document.addEventListener("mouseover", handleMouseover);
});

onBeforeUnmount(() => {
  document.removeEventListener("mouseover", handleMouseover);
  document.removeEventListener("click", handleOutsideClick);
});
</script>
