<template>
  <div class="notification-icon">
    <button @click="toggleNotifications">
      <span class="icon">🔔</span>
      <span class="count" v-if="notifications.length">{{notifications.length}}</span>
    </button>
    <div class="notification-list" v-if="showNotifications">
      <div class="notification" v-for="notification in notifications" :key="notification.plantId">
        {{notification.message}}
      </div>
      <div class="notification-time" v-if="notificationTime">{{ notificationTime }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotificationIcon',
  props: ['notifications', 'notificationTime'],
  data () {
    return {
      showNotifications: false
    }
  },
  methods: {
    toggleNotifications () {
      this.showNotifications = !this.showNotifications
    }
  }
}
</script>

<style scoped>
.notification-icon {
  position: relative;
}

.notification-list {
  position: absolute;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  padding: 1em;
  width: 200px;
}

.icon {
  font-size: 1.5em;
}

.count {
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 0.25em;
  font-size: 0.75em;
  position: absolute;
  top: 0;
  right: 0;
}

.notification-time {
  margin-top: 1em;
  text-align: center;
}
</style>
