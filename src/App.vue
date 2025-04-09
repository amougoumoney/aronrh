<template>
  <div id="app">
    <div class="main-wrapper">
      <router-view />
    </div>
    <div class="notifications-container">
      <NotificationMessage
        v-for="notification in notifications"
        :key="notification.id"
        v-bind="notification"
        @close="removeNotification(notification.id)"
      />
    </div>
  </div>
</template>
<script setup>
import { useNotifications } from '@/composables/useNotifications';
import NotificationMessage from '@/components/NotificationComponents/NotificationMessage.vue';

const { notifications, removeNotification } = useNotifications();
</script>

<style>
.notifications-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>