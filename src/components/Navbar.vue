<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">LeafLove </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/about">About</router-link>
          <router-link class="nav-link" to="/plants">Plants</router-link>
        </div>
      </div>
      <notification-icon :notifications="notifications"></notification-icon>
    </div>
  </nav>
</template>

<script>
import NotificationIcon from '@/components/NotificationIcon'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar',
  components: {
    NotificationIcon
  },
  data () {
    return {
      notifications: []
    }
  }
  // Implement methods or watch properties to update the notifications
}
</script>

<style scoped>

</style>
