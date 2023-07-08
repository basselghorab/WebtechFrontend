<template>
  <h1>Plants</h1>
  <div class="container-fluid">
    <plants-card-list :plants="plants"></plants-card-list>
  </div>
  <plants-create-form @created="createPlant"></plants-create-form>
</template>
<script>
import PlantsCardList from '@/components/PlantsCardList'
import PlantsCreateForm from '@/components/PlantsCreateFrom'

export default {
  name: 'PlantsCard',
  components: {
    PlantsCardList,
    PlantsCreateForm
  },
  data () {
    return {
      plants: []
    }
  },
  methods: {
    createPlant (newPlant) {
      const endpoint = 'http://localhost:8080/api/v1/plants'
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPlant),
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(plant => {
          this.plants.push(plant)
        })
        .catch(error => console.log('error', error))
    },
    fetchPlants () {
      const endpoint = 'http://localhost:8080/api/v1/plants'
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => {
          this.plants = result
        })
        .catch(error => console.log('error', error))
    }
  },
  mounted () {
    this.fetchPlants()
  }
}
</script>

<style scoped>

</style>
