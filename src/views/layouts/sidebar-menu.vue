<template>
    <ul>
        <template v-for="item in sideBarData" :key="item.tittle">
            <li class="menu-title">
                <span>{{ item.tittle }}</span>
            </li>  
            <li>
                <ul>
                    <template v-for="menu in item.menu" :key="menu.menuValue">
                        <li v-if="!menu.hasSubRoute" :class="{ 'active': isMenuActive(menu) }">
                            <router-link v-if="menu.route" :to="menu.route">
                                <i :class="'ti ti-' + menu.icon"></i>
                                <span>{{ menu.menuValue }}</span>
                            </router-link>
                        </li>
                        <li v-else class="submenu">
                            <a href="javascript:void(0);" @click="expandSubMenus(menu)" 
                            :class="{ subdrop: menu.showSubRoute && !openMenuItem, 'active': isActive(menu) }">
                                <i :class="'ti ti-' + menu.icon"></i><span>{{ menu.menuValue }}</span>
                                <span v-if="menu.currentActive" class="badge badge-danger fs-10 fw-medium text-white p-1">Hot</span>
                                <span class="menu-arrow"></span>
                            </a>
                            <ul :class="menu.showSubRoute ? 'd-block' : 'd-none'">
                                <li v-for="(subMenu, index) in menu.subMenus" :key="index">
                                    <router-link :to="subMenu.route">{{ subMenu.menuValue }}</router-link>
                                </li>
                            </ul>
                        </li>
                        <li v-if="menu.hasSubRouteTwo" class="submenu">
                            <a href="javascript:void(0);" @click="OpenMenu(menu)"
                            :class="{ subdrop: openMenuItem === menu || isActive(menu), 'active': isActive(menu) }">
                                <i :class="'ti ti-' + menu.icon"></i><span>{{ menu.menuValue }}</span>
                                <span class="menu-arrow"></span>
                            </a>
                            <ul :class="{ 'd-block': openMenuItem === menu, 'd-none': openMenuItem !== menu }">
                                <li v-for="subMenus in menu.subMenus" :key="subMenus.menuValue">
                                    <template v-if="!subMenus.customSubmenuTwo">
                                        <router-link :to="subMenus.route" router-link-active="active">{{ subMenus.menuValue }}</router-link>
                                    </template>
                                    <template v-else-if="subMenus.customSubmenuTwo">
                                        <li class="submenu submenu-two">
                                            <a href="javascript:void(0);" @click="openSubmenuOne(subMenus)"
                                            :class="{ subdrop: openSubmenuOneItem === subMenus || isSubActive(subMenus), 'active': isSubActive(subMenus) }">
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
        };
    },
    created() {
        this.initializeMenu();
    },
    computed: {
        userRole() {
            return localStorage.getItem('userRole') || 'employee'; // Default to employee if no role set
        },
        isMenuActive() {
            return (menu) => {
                return this.$route.path === menu.route ||
                this.$route.path === menu.active_link ||
                this.$route.path === menu.active_link1 ||
                this.$route.path === menu.active_link2 ||
                this.$route.path === menu.active_link3 ||
                this.$route.path === menu.active_link4 ||
                this.$route.path === menu.active_link5;                
            };
        },
        isActive(){
            return (menu) => {
                let result = this.$route.path.split('/').filter(part => part);
                let base = result[0];
                return base === menu.active_link || base === menu.active_link1
            }
        },
        isSubActive(){
            return (menu) => {
                let result = this.$route.path.split('/').filter(part => part);
                let base = result[0];
                return base === menu.active_link
            }
        }
    },
    methods: {
        initializeMenu() {
            // Use menu service to filter sidebar data
            this.sideBarData = menuService.filterSidebarData(sideBarData);
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
            this.sideBarData.forEach((item) => {
                item.menu.forEach((subMenu) => {
                    subMenu.showSubRoute = false; 
                });
            });
            this.openMenuItem = this.openMenuItem === menu ? null : menu;
        },
        openSubmenuOne(subMenus) {
            this.openSubmenuOneItem = this.openSubmenuOneItem === subMenus ? null : subMenus;
        },
    }
};
</script>
  