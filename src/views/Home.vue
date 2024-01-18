<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Header header="Home of Peoples Blog"></Header>
  <div class="cards">
    <PeopleCard class="card-single" v-for="people in peoples" :key="people.id" :details="people" />
  </div>
</template>

<script setup lang="ts">
import PeopleCard from '@/components/PeopleCard.vue'
import GetPeoples from '@/composables/GetPeoples'
import Header from '@/components/Header.vue'
import { onMounted } from 'vue'

const { get, peoples } = GetPeoples()

onMounted(() => {
  get()
})
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.card-single {
  transition: transform 0.3s ease;
}

.card-single:hover {
  transform: scale(1.1);
}
</style>
