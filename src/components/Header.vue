<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="header-wrapper">
    <h1>{{ header }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps({
  header: String
})
</script>

<style scoped>
.header-wrapper {
  display: flex;
  justify-content: center;
  font-size: 25px;
}
</style>
