import { ref } from 'vue';

const notifications = ref([]);

export function useNotifications() {
  const showNotification = (options) => {
    const notification = {
      id: Date.now(),
      ...options
    };
    
    notifications.value.push(notification);
    
    if (notification.timeout !== 0) {
      setTimeout(() => {
        removeNotification(notification.id);
      }, notification.timeout || 5000);
    }
    
    return notification.id;
  };

  const removeNotification = (id) => {
    notifications.value = notifications.value.filter(n => n.id !== id);
  };

  return {
    notifications,
    showNotification,
    removeNotification
  };
}