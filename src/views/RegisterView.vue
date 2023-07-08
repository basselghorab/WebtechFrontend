<template>
  <div class="container">
    <h2 class="mb-4">Register</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <input type="text" v-model="registerData.username" class="form-control" placeholder="Username" required>
      </div>
      <div class="form-group">
        <input type="password" v-model="registerData.password" class="form-control" placeholder="Password" required>
      </div>
      <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
      <button type="submit" class="btn btn-primary w-100">Register</button>
    </form>
    <p class="mt-3 text-center">Already have an account? <router-link to="/">Login here</router-link></p>
  </div>
</template>

<script>
export default {
  data () {
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
    register () {
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
/* Add any custom CSS styles here */
</style>
