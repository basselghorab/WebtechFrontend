<template>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col" v-for="plant in plants" :key="plant.id">
      <plant-card :plant="plant"></plant-card>
    </div>
  </div>
</template>

<script>
import PlantCard from '@/components/PlatnCards.vue'

export default {
  name: 'PlantsCardList',
  components: {
    PlantCard
  },
  props: {
    plants: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
/* Füge hier benutzerdefinierte CSS-Stile hinzu, wenn nötig */
</style>
