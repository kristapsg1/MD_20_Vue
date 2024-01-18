<template>
  <form class="label-input" @submit.prevent="handleSubmit">
    <label>Image:</label>
    <input type="text" placeholder="Img Url" name="image" v-model="modelValue.image" required />
    <label>Name:</label>
    <input type="text" placeholder="John..." name="name" v-model="modelValue.name" required />
    <label>Age:</label>
    <input type="text" placeholder="40..." name="age" v-model="modelValue.age" required />
    <label>Job:</label>
    <input type="text" placeholder="IT specialist" name="job" v-model="modelValue.job" required />
    <label>About:</label>
    <textarea
      rows="4"
      type="text"
      placeholder="I am very good at ...."
      name="about"
      v-model="modelValue.about"
      required
    ></textarea>
    <div class="btn-add">
      <Buttons type="submit" btn-label="Add"></Buttons>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Buttons from './Buttons.vue'

const modelValue = ref({
  image: '',
  name: '',
  age: '',
  job: '',
  about: ''
})

const handleSubmit = () => {
  emit('addPeople', modelValue.value)
  modelValue.value = {
    image: '',
    name: '',
    age: '',
    job: '',
    about: ''
  }
}

const emit = defineEmits(['addPeople'])
</script>

<style>
input {
  padding: 5px 7px;
}

.btn-add {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
</style>
