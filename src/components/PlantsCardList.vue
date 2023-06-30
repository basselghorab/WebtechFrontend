<template>
<div class="row row-cols-1 row-cols-md-4 g-4">
<div class="col" v-for="plant in plants" :key="plant.id">
  <plant-card :plant="plant"></plant-card>
</div>
</div>
</template>

<script>

import PlantCard from '@/components/PlatnsCards.vue'

export default {
  name: 'PersonsCardList',
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

</style>
