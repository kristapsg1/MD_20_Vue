<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Header header="Add People"></Header>

  <CreateForm class="form-wrapper" @addPeople="fromEmit"></CreateForm>
</template>

<script setup lang="ts">
import CreateForm from '@/components/CreateForm.vue'
import Header from '@/components/Header.vue'
import PostPeople from '@/composables/PostPeople'
import type { PeopleType } from '@/types/PeopleType'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const { AddPerson } = PostPeople()

const fromEmit = (data: PeopleType) => {
  handleSubmit(data)
}

const handleSubmit = async (data: PeopleType) => {
  const people = {
    image: data.image,
    name: data.name,
    age: data.age,
    job: data.job,
    about: data.about
  }

  await AddPerson(people)

  toast('Card added successfully!', {
    theme: 'light',
    type: 'success',
    position: 'top-right',
    transition: 'zoom',
    dangerouslyHTMLString: true
  })
}
</script>

<style scoped>
.form-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  padding: 40px 30px;
  border: 3px solid black;
  margin: 0 auto;
  gap: 5px;
  border-radius: 10px;
  background-color: rgb(143, 151, 160);
}
</style>
