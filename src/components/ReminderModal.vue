<template>
  <div v-if="show" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>Erinnerung einrichten</h2>

      <label>Datum:</label>
      <input type="date" v-model="date" />

      <label>Uhrzeit:</label>
      <input type="time" v-model="time" />

      <button @click="setReminder">Erinnerung setzen</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReminderModal',
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      date: '',
      time: ''
    }
  },
  computed: {
    show: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    closeModal () {
      this.show = false
    },
    setReminder () {
      const reminderDate = new Date(this.date + ' ' + this.time)
      console.log(`Set reminder for plant ${this.plant.name} on ${reminderDate}`)
    }
  }
}
</script>

<style scoped>
</style>
