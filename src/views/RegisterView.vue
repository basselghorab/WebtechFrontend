<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title mb-4">Register</h2>
            <form @submit.prevent="register">
              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" v-model="registerData.username" id="username" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="registerData.password" id="password" class="form-control" required>
              </div>
              <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
              <button type="submit" class="btn btn-primary btn-block">Register</button>
            </form>
            <p class="mt-3 text-center">Already have an account? <router-link to="/">Login here</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerData: {
        username: '',
        password: '',
        confirmPassword: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    register() {
      if (!this.registerData.username || !this.registerData.password) {
        this.errorMessage = 'Please enter both username and password.'
        return
      }

      fetch('/api/v1/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.registerData)
      })
        .then(response => response.json())
        .then(data => {
          // Handle the response from the backend
          // For example, display a success message or redirect to another page
          console.log(data)
        })
        .catch(error => {
          console.error('Error:', error)
        })
    }
  }
}
</script>

<style scoped>
.card {
  margin-top: 20px;
}
</style>
