<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-parsing-error -->
<template>
  <button :class="class" @click="onClick">{{ btnLabel }}</button>
</template>

<script setup lang="ts">
defineProps({
  btnLabel: String,
  class: {
    type: String as () => 'primary' | 'success' | 'danger',
    default: 'primary'
  }
})
const emit = defineEmits(['onClick'])

const onClick = () => {
  emit('onClick')
}
</script>

<style>
.primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  display: flex;
  width: fit-content;
  justify-content: center;
  border: 1px black solid;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 18px;
}

.success {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
  display: flex;
  width: fit-content;
  justify-content: center;
  border: 1px black solid;
  border-radius: 5px;
  padding: 15px 10px;
  cursor: pointer;
  font-size: 18px;
}

.danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
  display: flex;
  width: fit-content;
  justify-content: center;
  border: 1px black solid;
  border-radius: 5px;
  padding: 15px 10px;
  cursor: pointer;
  font-size: 18px;
}
</style>
