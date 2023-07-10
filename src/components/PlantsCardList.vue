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
.col {
  transition: 0.3s;
}

.col:hover {
  transform: scale(1.02);
}

.plant-card {
  border-radius: 15px;
  box-shadow: 0px 0px 15px rgba(0,0,0,0.1);
  margin: 10px;
  padding: 20px;
  background-color: #34495e;
  color: #ecf0f1;
}

.plant-card img {
  width: 100%;
  height: auto;
  border-radius: 15px 15px 0 0;
}

.plant-card h5 {
  color: #e67e22; /* This gives your title an orange color */
}

.plant-card p {
  color: #27ae60; /* This gives your details a light green color */
}

</style>


