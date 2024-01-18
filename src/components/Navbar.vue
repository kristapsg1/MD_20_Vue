<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <div class="navbar">
      <RouterLink to="/" class="nav-link">Home</RouterLink>

      <RouterLink to="/add" class="nav-link">Add</RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style>
.navbar {
  display: flex;
  padding: 10px;
}

.nav-link {
  color: black;
  text-decoration: none;
  padding: 10px;
  margin-right: 10px;
  transition: background-color 0.3s;
  font-size: 30px;
  text-decoration: underline;
}

.nav-link:hover {
  background-color: rgb(143, 151, 160);
  color: white;
}
</style>
