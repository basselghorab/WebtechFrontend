<template>
  <div class="card h-100">
    <img :src="getAvatar(plant)" class="card-img-top" :alt="plant.name">
    <div class="card-body">
      <div>
        <h5 class="card-title custom-font">
          <span class="bold-text">{{ plant.name }}</span>
        </h5>
      </div>
      <div>
        <p class="card-text custom-description-font">
          {{ plant.description }} has a wateringintervalDays   {{ plant.wateringIntervalDays }}Days .
        </p>
      </div>
      <!-- Hinzufügen einer Schaltfläche, die das Modal öffnet -->
      <button @click.stop="showReminderModal">set a reminder</button>
    </div>
    <div class="card-footer">
      <button class="btn btn-primary" @click.stop="navigateToPlantDetails">more Details</button>
    </div>
    <!-- Modal-Komponente -->
    <reminder-modal :value="showModal" :plant="plant" @reminderSet="handleReminderSet"></reminder-modal>

  </div>
</template>

<script>
import router from '@/router'
import ReminderModal from '@/components/ReminderModal.vue'
import axios from "axios";

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
      showModal: false,
      reminderTime: null
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
    },
    handleReminderSet (payload) {
      console.log('Reminder set for', payload.dateTime)

      const newDateTime = new Date(payload.dateTime);
      newDateTime.setDate(newDateTime.getDate() + this.plant.wateringIntervalDays);


      axios(
        {
          url: `http://localhost:8080/api/v1/plants/reminders/${payload.plant.id}`,
          method: "POST",
          data: JSON.stringify({
            plantId: payload.plant.id,
            dateTime: payload.dateTime
          }),
          withCredentials: true,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Credentials': 'true'
          }
        }).then(response => {
          console.log(response.data)
      }).catch(error => {
          // Handle the error
          console.error('Error saving reminder:', error)
          // Rest of the code...
        })
    },
    showReminderModal () {
      this.showModal = true
      this.reminderTime = null
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
