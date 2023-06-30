<template>
  <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#plants-create-offcanvas" aria-controls="#plants-create-offcanvas">
    <i class="bi bi-person-plus-fill"></i>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="plants-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">New Plant</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-control" id="name" v-model="name" required>
      <div class="invalid-feedback">
        Please provide a name.
      </div>
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <input type="text" class="form-control" id="description" v-model="description" required>
      <div class="invalid-feedback">
        Please provide the description.
      </div>
      <div v-if="serverValidationMessages.length > 0">
        <ul>
          <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: #001aff">
            {{ message }}
          </li>
        </ul>
      </div>
      <div class="mt-5">
        <button class="btn btn-primary me-3" type="submit" @click.prevent="createPlant">Create</button>
        <button class="btn btn-danger" type="reset">Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlantsCreateForm',
  data () {
    return {
      name: '',
      description: '',
      image: '',
      serverValidationMessages: []
    }
  },
  emits: ['created'],
  methods: {
    async createPlant () {
      if (this.validate()) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/plants'

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        const plantData = JSON.stringify({
          name: this.name,
          description: this.description
        })

        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: plantData,
          redirect: 'follow'
        }

        const response = await fetch(endpoint, requestOptions)
        await this.handleResponse(response)
      }
    },
    async handleResponse (response) {
      if (response.ok) {
        this.$emit('created', response.headers.get('location'))
        document.getElementById('close-offcanvas').click()
      } else if (response.status === 400) {
        const responseBody = await response.json()
        responseBody.errors.forEach(error => {
          this.serverValidationMessages.push(error.defaultMessage)
        })
      } else {
        this.serverValidationMessages.push('Unknown error occurred')
      }
    },
    validate () {
      const form = document.getElementById('plants-create-form')
      form.classList.add('was-validated')
      return form.checkValidity()
    }
  }
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 30px;
}
</style>
