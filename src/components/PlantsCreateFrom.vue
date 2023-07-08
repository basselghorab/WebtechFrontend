<template>
  <div>
    <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#plants-create-offcanvas" aria-controls="plants-create-offcanvas">
      <i class="bi bi-plus"></i>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="plants-create-offcanvas" aria-labelledby="offcanvas-label">
      <div class="offcanvas-header">
        <h5 id="offcanvas-label">New Plant</h5>
        <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" v-model="name" required minlength="3" :class="{'is-invalid': !isValidName && submitClicked}">
          <div class="invalid-feedback" v-show="!isValidName && submitClicked">
            Please provide a valid name (minimum 3 characters).
          </div>
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <input type="text" class="form-control" id="description" v-model="description" required minlength="3" :class="{'is-invalid': !isValidDescription && submitClicked}">
          <div class="invalid-feedback" v-show="!isValidDescription && submitClicked">
            Please provide a valid description (minimum 3 characters).
          </div>
        </div>
        <div class="mb-3">
          <label for="wateringIntervalDays" class="form-label">Watering Interval Days</label>
          <input type="text" class="form-control" id="wateringIntervalDays" v-model="wateringIntervalDays" required minlength="1" :class="{'is-invalid': !isValidWateringIntervalDays && submitClicked}">
          <div class="invalid-feedback" v-show="!isValidWateringIntervalDays && submitClicked">
            Please provide a valid watering interval (minimum 1 day).
          </div>
        </div>
        <div v-if="serverValidationMessages.length > 0">
          <ul>
            <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: #001aff">
              {{ message }}
            </li>
          </ul>
        </div>
        <div class="mt-5 text-end">
          <button class="btn btn-primary me-3" type="submit" @click.prevent="createPlant" id="create-form-button">Create</button>
          <button class="btn btn-danger" type="reset" @click="resetForm">Reset</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlantsCreateForm',
  data () {
    return {
      id: '',
      name: '',
      description: '',
      wateringIntervalDays: '',
      serverValidationMessages: [],
      submitClicked: false
    }
  },
  computed: {
    isValidName () {
      return this.name.length >= 3
    },
    isValidDescription () {
      return this.description.length >= 3
    },
    isValidWateringIntervalDays () {
      return this.wateringIntervalDays.length >= 1
    }
  },
  methods: {
    createPlant () {
      this.submitClicked = true
      console.log('Name:', this.name)
      console.log('Description:', this.description)
      console.log('Watering Interval Days:', this.wateringIntervalDays)

      if (!this.isValidName || !this.isValidDescription || !this.isValidWateringIntervalDays) {
        console.log('Bitte füllen Sie alle erforderlichen Felder aus.')
        return
      }

      if (this.wateringIntervalDays <= 0) {
        console.log('Das Bewässerungsintervall muss größer als 0 sein.')
        return
      }

      const data = {
        name: this.name,
        description: this.description,
        wateringIntervalDays: this.wateringIntervalDays
      }

      const endpoint = 'http://localhost:8080/api/v1/plants'
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log('Plant created:', data)
          this.$emit('created', data)
          window.location.reload()
        })
        .catch(error => console.log('Error:', error))
    },
    resetForm () {
      this.id = ''
      this.name = ''
      this.description = ''
      this.wateringIntervalDays = ''
      this.submitClicked = false
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

.is-invalid {
  border-color: #0d0e0d;
}
</style>
