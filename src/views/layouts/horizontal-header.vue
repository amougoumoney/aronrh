<template>
  <div class="sidebar sidebar-horizontal" id="horizontal-menu">
    <div class="sidebar-menu">
      <div class="main-menu">
        <ul class="nav-menu">
          <template v-for="item in sideBarData" :key="item.tittle">
            <li class="menu-title">
              <span>{{ item.tittle }}</span>
            </li>
            <template v-for="menu in item.menu" :key="menu.menuValue">
              <li v-if="!menu.hasSubRoute && menu.menuValue === 'Application'">
                <router-link :to="menu.route">
                  <i :class="'ti ti-' + menu.icon"></i>
                  <span>{{ menu.menuValue }}</span>
                </router-link>
              </li>
              <li class="submenu"
                v-else-if="menu.hasSubRoute && ['Dashboard', 'Applications', 'Super Admin', 'Layouts'].includes(menu.menuValue)"
                @click="expandSubMenus(menu)">
                <a href="javascript:void(0)" :class="{ subdrop: menu.showSubRoute }">
                  <i :class="'ti ti-' + menu.icon"></i>
                  <span>{{ menu.menuValue }}</span>
                  <span class="menu-arrow"></span>
                </a>
                <ul :class="{ 'd-block': menu.showSubRoute, 'd-none': !menu.showSubRoute }">
                  <template v-for="subMenu in menu.subMenus" :key="subMenu.menuValue">
                    <li>
                      <router-link :to="subMenu.route">{{ subMenu.menuValue }}</router-link>
                    </li>
                  </template>
                </ul>
              </li>
              <li v-if="menu.hasSubRouteTwo" class="submenu">
                <a href="javascript:void(0);" @click="openMenu(menu)"
                  :class="{ subdrop: openMenuItem === menu, active: route_array[0] === menu.active_link }">
                  <i :class="'ti ti-' + menu.icon"></i><span>{{ menu.menuValue }}</span>
                  <span class="menu-arrow"></span>
                </a>
                <ul :class="{ 'd-block': openMenuItem === menu, 'd-none': openMenuItem !== menu }">
                  <li v-for="subMenus in menu.subMenus" :key="subMenus.menuValue"
                    :class="{ 'submenu submenu-two': submenuTwoList.includes(subMenus.menuValue) }">
                    <template v-if="!subMenus.customSubmenuTwo">
                      <router-link :to="subMenus.route">{{ subMenus.menuValue }}</router-link>
                    </template>
                    <template v-else>
                      <a href="javascript:void(0);" @click="openSubmenuOne(subMenus)"
                        :class="{ subdrop: openSubmenuOneItem === subMenus }">
                        {{ subMenus.menuValue }}
                        <span class="menu-arrow inside-submenu"></span>
                      </a>
                      <ul
                        :class="{ 'd-block': openSubmenuOneItem === subMenus, 'd-none': openSubmenuOneItem !== subMenus }">
                        <li v-for="subMenuTwo in subMenus.subMenusTwo" :key="subMenuTwo.menuValue">
                          <router-link :to="subMenuTwo.route">{{ subMenuTwo.menuValue }}</router-link>
                        </li>
                      </ul>
                    </template>
                  </li>
                </ul>
              </li>
            </template>
          </template>
        </ul>
        <div class="d-xl-flex align-items-center d-none">
          <a href="javascript:void(0);" class="me-3 avatar avatar-sm">
            <img src="@/assets/img/profiles/avatar-07.jpg" alt="profile" class="rounded-circle" />
          </a>
          <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle mode-toggle">
            <i class="ti ti-sun"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import sideBarData from "@/assets/json/sidebar-menuone.json";

// Références réactives
const openMenuItem = ref(null);
const openSubmenuOneItem = ref(null);
const route_array = ref([]);

// Liste des sous-menus spécifiques
const submenuTwoList = [
  "Calls", "Projects", "Crm", "Employee", "Tickets", "Attendance", "Performance",
  "Training", "Requirment", "Sales", "Accounting", "Payroll", "Assets", "Help & Supports",
  "User Management", "Reports", "General Settings", "Website Settings", "App Settings",
  "System Settings", "Financial Settings", "Other Settings", "Blogs", "Locations",
  "Login", "Register", "Forgot Password", "Reset Password", "Email Verification",
  "2 Step Verification", "Base UI", "Advanced UI", "Forms", "Tables", "Charts", "Icons"
];

// Fonction pour gérer l'affichage des sous-menus
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

// Fonction pour ouvrir un menu principal
const openMenu = (menu) => {
  openMenuItem.value = openMenuItem.value === menu ? null : menu;
};

// Fonction pour ouvrir un sous-menu secondaire
const openSubmenuOne = (subMenus) => {
  openSubmenuOneItem.value = openSubmenuOneItem.value === subMenus ? null : subMenus;
};
</script>
