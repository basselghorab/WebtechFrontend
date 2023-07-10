<template>
  <div id="app">
    <header class="bg-gray py-5 text-white">
      <div class="container">
        <h1 class="text-center display-5 mb-4 font-weight-bold">Willkommen beim Blumengießen Reminder!</h1>
        <p class="lead text-center font-size-medium">Erhalten Sie rechtzeitig Erinnerungen, um Ihre Pflanzen zu gießen.</p>
      </div>
    </header>

    <section class="py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="card border-0 shadow">
              <div class="card-body">
                <h2 class="mb-4 text-center">Login</h2>
                <form @submit.prevent="login">
                  <div class="form-group">
                    <label for="username">Benutzername</label>
                    <input v-model="username" type="text" name="username" id="username" class="form-control" required>
                  </div>
                  <div class="form-group">
                    <label for="password">Passwort</label>
                    <input v-model="password" type="password" name="password" id="password" class="form-control" required>
                  </div>
                  <button type="submit" class="btn btn-primary btn-block">Anmelden</button>
                </form>
                <p class="mt-3 text-center">Sie haben noch keinen Account? <a href="/register">Hier registrieren</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="features-section py-5">
      <div class="container">
        <h2 class="text-center mb-4 font-weight-bold">Unsere Hauptfunktionen</h2>
        <div class="row">
          <!-- Feature 1 -->
          <div class="col-md-4 mb-4">
            <div class="text-center feature-card">
              <i class="bi bi-clock-history display-3 mb-4"></i>
              <h3>Gieß-Erinnerungen</h3>
              <p>Erhalten Sie Erinnerungen, wann Sie Ihre Pflanzen gießen sollten.</p>
            </div>
          </div>
          <!-- Feature 2 -->
          <div class="col-md-4 mb-4">
            <div class="text-center feature-card">
              <i class="bi bi-calendar-check display-3 mb-4"></i>
              <h3>Wasserbedarf verfolgen</h3>
              <p>Verfolgen Sie den Wasserbedarf Ihrer Pflanzen und halten Sie sie gesund.</p>
            </div>
          </div>
          <!-- Feature 3 -->
          <div class="col-md-4 mb-4">
            <div class="text-center feature-card">
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
  data() {
    return {
      username: '',
      password: '',
      loginMessage: ''
    }
  },
  methods: {
    login() {
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
            throw new Error('Anmeldung fehlgeschlagen.')
          }
        })
        .then((data) => {
          // Anmeldung erfolgreich
          console.log(data)
          localStorage.setItem('isLoggedIn', true)
          // Weiterleitung zur Pflanzenseite
          this.$router.push({ name: 'plants' })
        })
        .catch((error) => {
          console.error('Fehler:', error)
          this.loginMessage = 'Anmeldung fehlgeschlagen.'
        })
    }
  }
}
</script>

<style scoped>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');

#app {
  color: white;
  background: linear-gradient(45deg, red, orange, purple, blue);
  background-size: 300% 300%;
  animation: colors 10s ease infinite;
}

@keyframes colors {
  0% {
    background-position: 0 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0 50%;
  }
}

#app {
  padding: 30px;
}

form {
  max-width: 700px;
  margin: 0 auto;
  border-radius: 30px;
  padding: 50px;
  box-shadow: 0 0 5px #ffffff20;
  background: #131417;
}
</style>
