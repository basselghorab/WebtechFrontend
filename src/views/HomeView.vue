<template>
  <div>
    <header class="bg-light py-3">
      <div class="container">
        <h1 class="text-center">Willkommen beim Blumengießen Reminder!</h1>
        <p class="text-center">Erhalten Sie rechtzeitig Erinnerungen, um Ihre Pflanzen zu gießen.</p>
      </div>
    </header>

    <section class="py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <h2 class="mb-4">Login</h2>
            <form @submit.prevent="login">
              <div class="mb-3">
                <input v-model="username" type="text" name="username" class="form-control" placeholder="Username" required>
              </div>
              <div class="mb-3">
                <input v-model="password" type="password" name="password" class="form-control" placeholder="Password" required>
              </div>
              <button type="submit" class="btn btn-primary w-100">Login</button>
            </form>
            <p class="mt-3 text-center">Don't have an account? <a href="/register">Register here</a></p>
          </div>
        </div>
      </div>
    </section>

    <section class="features-section bg-light py-5">
      <div class="container">
        <h2 class="text-center mb-4">Unsere Hauptfunktionen</h2>
        <div class="row">
          <!-- Feature 1 -->
          <div class="col-md-4">
            <div class="feature text-center">
              <i class="bi bi-clock-history display-3 mb-4"></i>
              <h3>Gieß-Erinnerungen</h3>
              <p>Wir senden Ihnen Erinnerungen, wann Sie Ihre Pflanzen gießen sollten.</p>
            </div>
          </div>
          <!-- Feature 2 -->
          <div class="col-md-4">
            <div class="feature text-center">
              <i class="bi bi-calendar-check display-3 mb-4"></i>
              <h3>Wasserbedarf verfolgen</h3>
              <p>Verfolgen Sie den Wasserbedarf Ihrer Pflanzen und halten Sie sie gesund.</p>
            </div>
          </div>
          <!-- Feature 3 -->
          <div class="col-md-4">
            <div class="feature text-center">
              <i class="bi bi-list-check display-3 mb-4"></i>
              <h3>Pflanzenverwaltung</h3>
              <p>Verwalten Sie Ihre Pflanzen und halten Sie alle wichtigen Informationen an einem Ort.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      loginMesage: ''
    }
  },
  methods: {
    login: function () {
      fetch('/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password
        })
      })
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('Login failed.')
          }
        })
        .then((data) => {
          // Login erfolgreich
          console.log(data)
          localStorage.setItem('isLoggedIn', true)
          // Weiterleitung zur "Plants"-Komponente
          this.$router.push({ name: 'plants' })
        })
        .catch((error) => {
          console.error('Error:', error)
          this.loginMessage = 'Login fehlgeschlagen'
        })
    }
  }
}
</script>

<style scoped>
/* Fügen Sie hier beliebige benutzerdefinierte CSS-Stile hinzu */
</style>
