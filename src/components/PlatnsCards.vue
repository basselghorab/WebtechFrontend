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
          {{ plant.description }} hat eine wateringIntervalDays von {{ plant.wateringIntervalDays }} Tage.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlantCard',
  props: {
    plant: {
      type: Object,
      required: true
    }
  },
  methods: {
    getAvatar (plant) {
      const imageMapping = {
        Germini: require('../assets/Germini.png')
        // Fügen Sie weitere Pflanzentypen und ihre Bildquellen hinzu
      }

      if (plant.type in imageMapping) {
        return imageMapping[plant.type]
      } else {
        // Hier können Sie einen Standardbildpfad für unbekannte Pflanzentypen festlegen
        return require('../assets/default-plant.png')
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
