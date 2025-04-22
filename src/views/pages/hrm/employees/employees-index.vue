<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <router-view></router-view>
</template>
<script setup>
import LayoutHeader from "../../../layouts/layout-header.vue";
import LayoutSidebar from "../../../layouts/layout-sidebar.vue";
</script>
