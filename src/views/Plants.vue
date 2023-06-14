<template>
    <h1>Blumen Arten</h1>
    <div class="row">
        <div class="col-md-6" v-for="plant in plants" :key="plant.id">
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="placeholder.jpg" class="img-fluid rounded-start" alt="Placeholder Image">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{{ plant.name }}</h5>
                            <p class="card-text">{{ plant.description }}</p>
                            <p class="card-text">Watering Interval: {{ plant.wateringIntervalDays }} days</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Plants',
  data () {
    return {
      plants: []
    }
  },
  mounted: function () {
    const requestOption = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch('http://localhost:8080/api/v1/plants', requestOption)
      .then(response => response.json())
      .then(result => result.forEach(plant => {
        this.plants.push(plant)
      }))
      .then(error => console.log('error', error))
  }
}
</script>
