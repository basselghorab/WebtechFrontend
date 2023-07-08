<template>
  <div class="card h-100" @click="navigateToPlantDetails">
    <img :src="getAvatar(plant)" class="card-img-top" :alt="plant.name">
    <div class="card-body">
      <div>
        <h5 class="card-title custom-font">
          <span class="bold-text">{{ plant.name }}</span>
        </h5>
      </div>
      <div>
        <p class="card-text custom-description-font">
          {{ plant.description }} hat eine wateringIntervalDays von {{ plant.wateringIntervalDays }} Tage.
        </p>
      </div>
    </div>
    <!-- Modal-Komponente -->
    <reminder-modal v-model="showModal" :plant="plant" @reminderSet="handleReminderSet"></reminder-modal>
  </div>
</template>

<script>
import ReminderModal from './ReminderModal.vue'
import router from '@/router'
export default {
  name: 'PlantCard',
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
      showModal: false
    }
  },
  methods: {
    navigateToPlantDetails () {
      router.push({ name: 'PlantDetails', params: { plantId: this.plant.id } })
    },
    getAvatar (plant) {
      const defaultImagePath = require('../assets/default-plant.png') // Pfad zum Standardbild

      if (plant.image) {
        // Wenn ein Bildpfad in der Datenbank vorhanden ist
        return plant.image // Verwenden Sie den in der Datenbank gespeicherten Imgur-Link
      } else {
        return defaultImagePath // Verwenden Sie den Standardbildpfad, wenn kein Bildpfad in der Datenbank vorhanden ist
      }
    }
  }
}
</script>

<style scoped>
.custom-font {
  font-family: 'Arial', sans-serif; /* Beispiel für eine benutzerdefinierte Schriftart für den Pflanzennamen */
}

.bold-text {
  font-weight: bold; /* Fettdruck für den Pflanzennamen */
}

.custom-description-font {
  font-family: 'Tahoma', sans-serif; /* Beispiel für eine ruhige Schriftart für die Beschreibung */
}
</style>
