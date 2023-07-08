<template>
  <div v-if="plant">
    <h2>{{ plant.name }}</h2>
    <p>{{ plant.description }}</p>
    <p>Watering interval: {{ plant.wateringIntervalDays }} Tage</p>
    <ReminderModal v-model="showModal" />
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import ReminderModal from './ReminderModal.vue'

export default {
  name: 'PlantDetails',
  components: {
    ReminderModal
  },
  props: {
    plant: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      plant: null,
      showModal: false
    }
  },
  async created () {
    // Hier wird die Pflanzen-ID aus dem Routen-Parameter abgerufen.
    const plantId = this.$route.params.plantId

    // Nutzen Sie die ID, um die Details für diese spezifische Pflanze zu holen.
    try {
      const response = await fetch(`http://localhost:8080/api/v1/plants/${plantId}`)
      // eslint-disable-next-line vue/no-mutating-props
      this.plant = await response.json()
    } catch (error) {
      console.error(error)
    }
  }

}
</script>
