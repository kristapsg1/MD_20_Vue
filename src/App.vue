<template>
  <nav>
    <Navbar></Navbar>
  </nav>
  <RouterView></RouterView>
  <br /><br />
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
}
</style>
