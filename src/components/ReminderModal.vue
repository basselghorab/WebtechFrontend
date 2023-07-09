<template>
  <div class="reminder-modal" :class="{'reminder-model-active': value}">
    <!-- Other content of the modal -->
    <div class="time-picker">
      <label for="reminder-time">Reminder Time:</label>
      <input type="time" id="reminder-time" v-model="selectedTime">
    </div>
    <button @click="setReminder">Set Reminder</button>
  </div>
</template>

<script>
export default {
  props: ['value', 'plant', 'reminderTime'],
  data () {
    return {
      selectedDate: null,
      selectedTime: this.reminderTime || ''
    }
  },
  watch: {
    selectedTime(newVal) {
      console.log(newVal)
    }
  },
  methods: {
    setReminder () {
      const timeArray = this.selectedTime.split(':')
      const hours = parseInt(timeArray[0]) * 60 * 60 * 1000
      const minutes = parseInt(timeArray[1]) * 60 * 1000

      const dateTime = 1000 * 60 * 60 * 24 * this.$props.plant.wateringIntervalDays + hours + minutes + Date.now()

      this.$emit('reminderSet', {
        dateTime: dateTime,
        plant: this.$props.plant
      })
      // Close the modal
      this.$emit('input', false)
    }
  }
}
</script>

<style scoped>
.reminder-modal {
  display: none; /* Versteckt das Modal standardmäßig */
  position: fixed; /* Hält das Modal an Ort und Stelle */
  z-index: 1; /* Positioniert das Modal über anderen Elementen */
  left: 0;
  top: 0;
  width: 100%; /* Volle Breite */
  height: 100%; /* Volle Höhe */
  overflow: auto; /* Erlaubt das Scrollen, falls nötig */
  background-color: rgba(0,0,0,0.4); /* Schwarzer Hintergrund mit etwas Transparenz */
}

.reminder-model-active {
  display: inline !important;
}
</style>
