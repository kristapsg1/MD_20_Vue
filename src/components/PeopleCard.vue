<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="card-wrapper">
    <router-link class="card-link" :to="{ name: 'SingleCard', params: { id: details.id } }">
      <div class="card">
        <img
          :src="details.image"
          alt=""
          style="width: 180px; height: 180px; border-radius: 50%; margin: 0 auto"
        />
        <h2>{{ details.name }}</h2>
        <p><b>Age:</b> {{ details.age }}</p>
        <p><b>Job: </b>{{ details.job }}</p>
        <p><b>About:</b> {{ details.about.slice(0, 100) }}...</p>
      </div>
    </router-link>
  </section>
</template>

<script setup lang="ts">
import type { PeopleType } from '@/types/PeopleType'

defineProps({
  details: { type: Object as () => PeopleType, required: true }
})
</script>

<style scoped>
.card {
  border: 1px gray solid;
  padding: 20px;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  height: 90%;
  margin-top: 30px;
  cursor: pointer;
  border-radius: 15px;
  color: black;
  background-color: rgb(143, 151, 160);
}
.card-link {
  text-decoration: none;
}

h2 {
  font-size: 25px;
}

p {
  font-size: 18px;
}
</style>
