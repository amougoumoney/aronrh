<template>
    <ul>
        <template v-for="item in sideBarData" :key="item.tittle">
            <li class="menu-title">
                <span>{{ item.tittle }}</span>
            </li>  
            <li>
                <ul>
                    <template v-for="menu in item.menu" :key="menu.menuValue">
                        <li v-if="!menu.hasSubRoute && menu.menuValue !== 'Dashboard'" :class="{ 'active': isMenuActive(menu) }">
                            <router-link v-if="menu.route" :to="menu.route">
                                <i :class="'ti ti-' + menu.icon"></i>
                                <span>{{ menu.menuValue }}</span>
                            </router-link>
                        </li>
                        <li v-else-if="menu.menuValue === 'Dashboard'" class="submenu">
                            <a href="javascript:void(0);" @click="toggleDashboard" 
                            :class="{ subdrop: isDashboardOpen, 'active': isActive(menu) }">
                                <i :class="'ti ti-' + menu.icon"></i><span>{{ menu.menuValue }}</span>
                                <span class="menu-arrow"></span>
                            </a>
                            <ul :class="{ 'd-block': isDashboardOpen, 'd-none': !isDashboardOpen }">
                                <li v-for="(subMenu, index) in menu.subMenus" :key="index"
                                    :class="{ 'active': isSubMenuActive(subMenu) }">
                                    <router-link :to="subMenu.route">{{ subMenu.menuValue }}</router-link>
                                </li>
                            </ul>
                        </li>
                        <li v-else class="submenu">
                            <a href="javascript:void(0);" @click="expandSubMenus(menu)" 
                            :class="{ subdrop: menu.showSubRoute, 'active': isActive(menu) }">
                                <i :class="'ti ti-' + menu.icon"></i><span>{{ menu.menuValue }}</span>
                                <span v-if="menu.currentActive" class="badge badge-danger fs-10 fw-medium text-white p-1">Hot</span>
                                <span class="menu-arrow"></span>
                            </a>
                            <ul :class="{ 'd-block': menu.showSubRoute, 'd-none': !menu.showSubRoute }">
                                <li v-for="(subMenu, index) in menu.subMenus" :key="index"
                                    :class="{ 'active': isSubMenuActive(subMenu) }">
                                    <router-link :to="subMenu.route">{{ subMenu.menuValue }}</router-link>
                                </li>
                            </ul>
                        </li>
                        <li v-if="menu.hasSubRouteTwo" class="submenu">
                            <a href="javascript:void(0);" @click="OpenMenu(menu)"
                            :class="{ subdrop: openMenuItem === menu, 'active': isActive(menu) }">
                                <i :class="'ti ti-' + menu.icon"></i><span>{{ menu.menuValue }}</span>
                                <span class="menu-arrow"></span>
                            </a>
                            <ul :class="{ 'd-block': openMenuItem === menu, 'd-none': openMenuItem !== menu }">
                                <li v-for="subMenus in menu.subMenus" :key="subMenus.menuValue">
                                    <template v-if="!subMenus.customSubmenuTwo">
                                        <router-link :to="subMenus.route" :class="{ 'active': isSubMenuActive(subMenus) }">
                                            {{ subMenus.menuValue }}
                                        </router-link>
                                    </template>
                                    <template v-else-if="subMenus.customSubmenuTwo">
                                        <li class="submenu submenu-two">
                                            <a href="javascript:void(0);" @click="openSubmenuOne(subMenus)"
                                            :class="{ subdrop: openSubmenuOneItem === subMenus, 'active': isSubActive(subMenus) }">
                                                {{ subMenus.menuValue }}<span class="menu-arrow inside-submenu"></span>
                                            </a>
                                            <ul :class="{ 'd-block': openSubmenuOneItem === subMenus, 'd-none': openSubmenuOneItem !== subMenus }">
                                                <li v-for="subMenuTwo in subMenus.subMenusTwo" :key="subMenuTwo.menuValue">
                                                    <router-link :to="subMenuTwo.route">{{ subMenuTwo.menuValue }}</router-link>
                                                </li>
                                            </ul>
                                        </li>
                                    </template>
                                </li>                                
                            </ul>
                        </li>                    
                    </template>							
                </ul>
            </li>
        </template>
    </ul>
</template>

<script>
import sideBarData from "@/assets/json/sidebar-data.json";
import { menuService } from '@/services/menu.service';

export default {
    data() {
        return {
            sideBarData: [],
            openMenuItem: null,
            openSubmenuOneItem: null,
            route_array: [],
            multilevel: [false, false, false],
            isDashboardOpen: false
        };
    },
    created() {
        this.initializeMenu();
        this.initializeActiveMenus();
    },
    watch: {
        '$route': {
            handler() {
                this.initializeActiveMenus();
            },
            immediate: true
        }
    },
    computed: {
        userRole() {
            return localStorage.getItem('userRole') || 'employee';
        },
        isMenuActive() {
            return (menu) => {
                const currentPath = this.$route.path;
                return currentPath === menu.route ||
                       currentPath === menu.active_link ||
                       currentPath === menu.active_link1 ||
                       currentPath === menu.active_link2 ||
                       currentPath === menu.active_link3 ||
                       currentPath === menu.active_link4 ||
                       currentPath === menu.active_link5 ||
                       (currentPath.startsWith('/dashboard/') && menu.route === '/dashboard/');
            };
        },
        isActive() {
            return (menu) => {
                const currentPath = this.$route.path;
                const pathSegments = currentPath.split('/').filter(part => part);
                const base = pathSegments[0];
                return base === menu.active_link || 
                       base === menu.active_link1 ||
                       (base === 'dashboard' && menu.menuValue === 'Dashboard');
            };
        },
        isSubActive() {
            return (menu) => {
                const currentPath = this.$route.path;
                const pathSegments = currentPath.split('/').filter(part => part);
                const base = pathSegments[0];
                const subPath = pathSegments[1];
                return base === menu.active_link ||
                       (base === 'dashboard' && subPath && menu.menuValue.toLowerCase().includes(subPath.replace('-dashboard', '')));
            };
        }
    },
    methods: {
        initializeMenu() {
            this.sideBarData = menuService.filterSidebarData(sideBarData);
        },
        initializeActiveMenus() {
            const currentPath = this.$route.path;
            if (currentPath.startsWith('/dashboard/')) {
                this.isDashboardOpen = true;
            }
        },
        isSubMenuActive(subMenu) {
            return this.$route.path === subMenu.route;
        },
        toggleDashboard() {
            this.isDashboardOpen = !this.isDashboardOpen;
        },
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
        OpenMenu(menu) {
            this.openMenuItem = this.openMenuItem === menu ? null : menu;
        },
        openSubmenuOne(subMenus) {
            this.openSubmenuOneItem = this.openSubmenuOneItem === subMenus ? null : subMenus;
        }
    }
};
</script>
  