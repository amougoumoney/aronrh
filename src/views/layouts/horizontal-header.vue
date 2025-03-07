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
              <li
                class="submenu"
                v-else-if="
                  menu.hasSubRoute &&
                  (menu.menuValue === 'Dashboard' ||
                    menu.menuValue === 'Applications' ||
                    menu.menuValue === 'Super Admin' ||
                    menu.menuValue === 'Layouts'
                  )
                "
                @click="expandSubMenus(menu)"
              >
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
                  :class="{'submenu submenu-two' : subMenus.menuValue === 'Calls' ||
                        subMenus.menuValue === 'Projects' || 
                        subMenus.menuValue === 'Crm' ||
                        subMenus.menuValue === 'Employee' ||
                        subMenus.menuValue === 'Tickets' ||
                        subMenus.menuValue === 'Attendance' ||
                        subMenus.menuValue === 'Performance' ||
                        subMenus.menuValue === 'Training' ||
                        subMenus.menuValue === 'Requirment' ||
                        subMenus.menuValue === 'Sales' ||
                        subMenus.menuValue === 'Accounting' ||
                        subMenus.menuValue === 'Payroll' ||
                        subMenus.menuValue === 'Assets' ||
                        subMenus.menuValue === 'Help & Supports' ||
                        subMenus.menuValue === 'User Management' ||
                        subMenus.menuValue === 'Reports' ||
                        subMenus.menuValue === 'General Settings' ||
                        subMenus.menuValue === 'Website Settings' ||
                        subMenus.menuValue === 'App Settings' ||
                        subMenus.menuValue === 'System Settings' ||
                        subMenus.menuValue === 'Financial Settings' ||
                        subMenus.menuValue === 'Other Settings' ||
                        subMenus.menuValue === 'Blogs' ||
                        subMenus.menuValue === 'Locations' ||
                        subMenus.menuValue === 'Login' ||
                        subMenus.menuValue === 'Register' ||
                        subMenus.menuValue === 'Forgot Password' ||
                        subMenus.menuValue === 'Reset Password' ||
                        subMenus.menuValue === 'Email Verification' ||
                        subMenus.menuValue === '2 Step Verification' ||
                        subMenus.menuValue === 'Base UI' ||
                        subMenus.menuValue === 'Advanced UI' ||
                        subMenus.menuValue === 'Forms' ||
                        subMenus.menuValue === 'Tables' ||
                        subMenus.menuValue === 'Charts' ||
                        subMenus.menuValue === 'Icons'
                      }">
                      <template v-if="!subMenus.customSubmenuTwo">
                          <router-link :to="subMenus.route">{{ subMenus.menuValue }}</router-link>
                      </template>
                      <template v-else-if="subMenus.customSubmenuTwo">
                        <a href="javascript:void(0);" @click="openSubmenuOne(subMenus)"
                            :class="{ subdrop: openSubmenuOneItem === subMenus }">{{ subMenus.menuValue }}<span
                                class="menu-arrow inside-submenu"></span></a>
                        <ul :class="{ 'd-block': openSubmenuOneItem === subMenus, 'd-none': openSubmenuOneItem !== subMenus,}">
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
            <img
              src="@/assets/img/profiles/avatar-07.jpg"
              alt="profile"
              class="rounded-circle"
            />
          </a>
          <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle mode-toggle">
            <i class="ti ti-sun"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sideBarData from "@/assets/json/sidebar-menuone.json";
export default {
  data() {
    return {
      sideBarData: sideBarData,
      openMenuItem: null,
      openSubmenuOneItem: null,
      route_array: [],
    };
  },
  methods: {
    expandSubMenus(menu) {
      this.sideBarData.forEach((item) => {
        item.menu.forEach((subMenu) => {
        if (subMenu !== menu) {
          subMenu.showSubRoute = false;
        }
        });
      });
      menu.showSubRoute = !menu.showSubRoute;
    },
    openMenu(menu) {
      this.openMenuItem = this.openMenuItem === menu ? null : menu;
    },
    openSubmenuOne(subMenus) {
      this.openSubmenuOneItem = this.openSubmenuOneItem === subMenus ? null : subMenus;
    },
  },
};
</script>
