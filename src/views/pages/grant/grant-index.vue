<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <router-view></router-view>
</template>
<script setup>
import layoutHeader from '../../layouts/layout-header.vue';
import layoutSidebar from '../../layouts/layout-sidebar.vue';
</script>