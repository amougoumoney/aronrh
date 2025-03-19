<template>
    <ul>
        <template v-for="item in sideBarData" :key="item.tittle">
            <li class="menu-title">
                <span>{{ item.tittle }}</span>
            </li>
            <li>
                <ul>
                    <template v-for="menu in item.menu" :key="menu.menuValue">
                        <li v-if="!menu.hasSubRoute && menu.menuValue !== 'Dashboard'"
                            :class="{ 'active': isMenuActive(menu) }">
                            <router-link v-if="menu.route" :to="menu.route">
                                <i :class="'ti ti-' + menu.icon"></i>
                                <span>{{ menu.menuValue }}</span>
                            </router-link>
                        </li>
                        <li v-else-if="menu.menuValue === 'Dashboard'" class="submenu">
                            <a href="javascript:void(0);" @click="toggleDashboard"
                                :class="{ subdrop: isDashboardOpen || hasActiveSubMenu(menu), 'active': isActive(menu) }">
                                <i :class="'ti ti-' + menu.icon"></i><span>{{ menu.menuValue }}</span>
                                <span class="menu-arrow"></span>
                            </a>
                            <ul
                                :class="{ 'd-block': isDashboardOpen || hasActiveSubMenu(menu), 'd-none': !isDashboardOpen && !hasActiveSubMenu(menu) }">
                                <li v-for="(subMenu, index) in menu.subMenus" :key="index"
                                    :class="{ 'active': isSubMenuActive(subMenu) }">
                                    <router-link :to="subMenu.route">{{ subMenu.menuValue }}</router-link>
                                </li>
                            </ul>
                        </li>

                        <li v-else class="submenu">
                            <a href="javascript:void(0);" @click="expandSubMenus(menu)"
                                :class="{ subdrop: menu.showSubRoute || hasActiveSubMenu(menu), 'active': isActive(menu) }">
                                <i :class="'ti ti-' + menu.icon"></i><span>{{ menu.menuValue }}</span>
                                <span class="menu-arrow"></span>
                            </a>
                            <ul
                                :class="{ 'd-block': menu.showSubRoute || hasActiveSubMenu(menu), 'd-none': !menu.showSubRoute && !hasActiveSubMenu(menu) }">
                                <li v-for="(subMenu, index) in menu.subMenus" :key="index"
                                    :class="{ 'active': isSubMenuActive(subMenu) }">
                                    <router-link :to="subMenu.route">{{ subMenu.menuValue }}</router-link>
                                </li>
                            </ul>
                        </li>

                        <li v-if="menu.hasSubRouteTwo" class="submenu">
                            <a href="javascript:void(0);" @click="OpenMenu(menu)"
                                :class="{ subdrop: openMenuItem === menu || hasActiveSubMenu(menu), 'active': isActive(menu) }">
                                <i :class="'ti ti-' + menu.icon"></i><span>{{ menu.menuValue }}</span>
                                <span class="menu-arrow"></span>
                            </a>
                            <ul
                                :class="{ 'd-block': openMenuItem === menu || hasActiveSubMenu(menu), 'd-none': openMenuItem !== menu && !hasActiveSubMenu(menu) }">
                                <li v-for="subMenus in menu.subMenus" :key="subMenus.menuValue">
                                    <template v-if="!subMenus.customSubmenuTwo">
                                        <router-link :to="subMenus.route"
                                            :class="{ 'active': isSubMenuActive(subMenus) }">
                                            {{ subMenus.menuValue }}
                                        </router-link>
                                    </template>
                                    <template v-else-if="subMenus.customSubmenuTwo">
                                <li class="submenu submenu-two">
                                    <a href="javascript:void(0);" @click="openSubmenuOne(subMenus)"
                                        :class="{ subdrop: openSubmenuOneItem === subMenus || hasActiveSubMenuTwo(subMenus), 'active': isSubActive(subMenus) }">
                                        {{ subMenus.menuValue }}<span class="menu-arrow inside-submenu"></span>
                                    </a>
                                    <ul
                                        :class="{ 'd-block': openSubmenuOneItem === subMenus || hasActiveSubMenuTwo(subMenus), 'd-none': openSubmenuOneItem !== subMenus && !hasActiveSubMenuTwo(subMenus) }">
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
<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import sideBarData1 from "@/assets/json/sidebar-data.json";
import { menuService } from '@/services/menu.service';
import router from '../../router';

const sideBarData = ref(sideBarData1);
const openMenuItem = ref(null);
const openSubmenuOneItem = ref(null);
const isDashboardOpen = ref(false);

const route_array = ref([]);
const multilevel = ref([false, false, false]);

// Computed properties
const userRole = computed(() => {
    return localStorage.getItem('userRole')?.toLowerCase() || 'employee';
});

const currentPath = computed(() => {
    return router.currentRoute.value.path; // You can replace `route()` with `$route` if not using Composition API
});

const isMenuActive = computed(() => {
    return (menu) => {
        if (menu.menuValue === 'Dashboard') {
            return currentPath.value.includes('/dashboard/') || currentPath.value.includes('/super-admin');
        }
        const pathSegments = currentPath.value.split('/').filter(part => part);
        const menuPath = menu.route?.split('/').filter(part => part) || [];

        return currentPath === menu.route ||
            currentPath === menu.active_link ||
            currentPath === menu.active_link1 ||
            (pathSegments[0] === menuPath[0]);
    };
});

const isActive = computed(() => {
    return (menu) => {
        if (menu.menuValue === 'Dashboard') {
            return currentPath.value.includes('/dashboard/') || currentPath.value.includes('/super-admin');
        }
        const pathSegments = currentPath.value.split('/').filter(part => part);
        const base = pathSegments[0];

        return base === menu.active_link ||
            base === menu.active_link1 ||
            (menu.route && currentPath.value.startsWith(menu.route));
    };
});

const initializeActiveMenus = () => {
    // Handle dashboard routes
    if (currentPath.value.startsWith('/dashboard/')) {
        isDashboardOpen.value = true;
    }

    // Close other menus when navigating to a new route
    sideBarData.value.forEach(section => {
        section.menu.forEach(menuItem => {
            if (menuItem.menuValue !== 'Dashboard') {
                menuItem.showSubRoute = isMenuActive.value(menuItem);
            }
        });
    });
};
const isSubActive = computed(() => {
    return (menu) => {
        const pathSegments = currentPath.value.split('/').filter(part => part);
        const base = pathSegments[0];
        const subPath = pathSegments[1];

        if (base === 'dashboard') {
            const dashboardType = subPath?.replace('-dashboard', '');
            const menuValue = menu.menuValue.toLowerCase();
            return menuValue.includes(dashboardType);
        }

        return base === menu.active_link ||
            (menu.route && currentPath.value.startsWith(menu.route));
    };
});

// Watch for route changes
watch(() => router.currentRoute.value.path, (newRoute) => {
    if (newRoute)
        if (newRoute.includes('/dashboard/') || newRoute.includes('/super-admin')) {
            isDashboardOpen.value = true;
        }
    initializeActiveMenus();
}, { immediate: true });

// Lifecycle hook for setup
onMounted(() => {
    sideBarData.value = menuService.filterSidebarData(JSON.parse(JSON.stringify(sideBarData.value)));
});

// Methods
const isSubMenuActive = (subMenu) => {
    return currentPath === subMenu.route || currentPath === subMenu.active_link;
};

const hasActiveSubMenu = (menu) => {
    return menu.subMenus?.some(subMenu => isSubMenuActive(subMenu)) || false;
};

const hasActiveSubMenuTwo = (subMenus) => {
    return subMenus.subMenusTwo?.some(subMenu => isSubMenuActive(subMenu)) || false;
};

const toggleDashboard = () => {
    isDashboardOpen.value = !isDashboardOpen.value;
};


const expandSubMenus = (menu) => {
    sideBarData.value.forEach((item) => {
        item.menu.forEach((subMenu) => {
            if (subMenu !== menu) {
                subMenu.showSubRoute = false;
            }
        });
    });
    menu.showSubRoute = !menu.showSubRoute;
};

const OpenMenu = (menu) => {
    openMenuItem.value = openMenuItem.value === menu ? null : menu;
};

const openSubmenuOne = (subMenus) => {
    openSubmenuOneItem.value = openSubmenuOneItem.value === subMenus ? null : subMenus;
};
</script>
