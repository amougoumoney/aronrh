<template>
  <div class="notification" :class="type" v-if="show">
    <div class="notification-content">
      <span class="icon">
        <i :class="iconClass"></i>
      </span>
      <div class="message">
        <h4 v-if="title">{{ title }}</h4>
        <p>{{ message }}</p>
      </div>
      <button class="close-btn" @click="hideNotification">&times;</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'info',
    validator: (value) => ['success', 'warning', 'error', 'info'].includes(value)
  },
  message: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  timeout: {
    type: Number,
    default: 5000
  },
  id: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(['close']);

const show = ref(true);

const iconClass = computed(() => {
  return {
    'success': 'ti ti-circle-check',
    'warning': 'ti ti-alert-triangle',
    'error': 'ti ti-circle-x',
    'info': 'ti ti-info-circle'
  }[props.type];
});

const hideNotification = () => {
  show.value = false;
  emit('close', props.id);
};

onMounted(() => {
  if (props.timeout > 0) {
    setTimeout(() => {
      hideNotification();
    }, props.timeout);
  }
});
</script>

<style scoped>
.notification {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 600px;
  padding: 16px 24px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  z-index: 1000;
  transition: all 0.3s ease;
}

.notification-content {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
}

.notification.success {
  border-left: 4px solid #4caf50;
  background-color: #f6fff6;
}

.notification.warning {
  border-left: 4px solid #ff9800;
  background-color: #fffaf0;
}

.notification.error {
  border-left: 4px solid #f44336;
  background-color: #fff5f5;
}

.notification.info {
  border-left: 4px solid #2196f3;
  background-color: #f5fbff;
}

.icon i {
  font-size: 22px;
}

.notification.success .icon i {
  color: #4caf50;
}

.notification.warning .icon i {
  color: #ff9800;
}

.notification.error .icon i {
  color: #f44336;
}

.notification.info .icon i {
  color: #2196f3;
}

.message {
  flex: 1;
}

.message h4 {
  margin: 0 0 4px 0;
  font-weight: 600;
  font-size: 16px;
  color: #333;
}

.message p {
  margin: 0;
  font-size: 14px;
  color: #555;
  line-height: 1.4;
}

.close-btn {
  background: transparent;
  border: none;
  color: #888;
  font-size: 22px;
  cursor: pointer;
  margin-left: auto;
  padding: 0 0 0 16px;
  transition: color 0.2s;
}

.close-btn:hover {
  color: #333;
}
</style>