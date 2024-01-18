<template>
  <Header :header="isEditing ? 'Edit Details' : 'Details'"></Header>
  <section class="card-wrapper">
    <div v-if="people" class="card">
      <div class="pic-and-title">
        <img :src="people.image" alt="" style="width: 180px; height: 180px; border-radius: 50%" />
        <h1 v-if="!isEditing">{{ people.name }}</h1>
        <div></div>
      </div>

      <template v-if="!isEditing">
        <p><b>Age:</b> {{ people.age }}</p>
        <p><b>Job:</b> {{ people.job }}</p>
        <p><b>About:</b> {{ people.about }}</p>
      </template>

      <template v-if="isEditing">
        <div class="edit">
          <div>
            <p><b>Name:</b></p>
            <input v-model="editedData.name" required />
          </div>
          <div>
            <p><b>Age:</b></p>
            <input v-model="editedData.age" required />
          </div>
          <div>
            <p><b>Job:</b></p>
            <input v-model="editedData.job" required />
          </div>
          <div>
            <p><b>About:</b></p>
            <textarea rows="4" v-model="editedData.about" required />
          </div>
        </div>
      </template>
    </div>

    <div class="button-wrapper">
      <Buttons
        v-if="!isEditing"
        class="danger"
        @click="deletePersonButton"
        btn-label="Delete"
      ></Buttons>

      <template v-if="isEditing">
        <Buttons class="danger" @click="cancelEdit" btn-label="Cancel"></Buttons>
        <Buttons class="success" @click="saveEdit" btn-label="Save"></Buttons>
      </template>

      <Buttons v-else class="success" @click="toggleEdit" btn-label="Edit"></Buttons>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import GetPeople from '@/composables/GetPeople'
import UseDeletePeople from '@/composables/DeletePeople'
import UseEditPeople from '@/composables/EditPeople'
import Buttons from '@/components/Buttons.vue'
import { useRoute, useRouter } from 'vue-router'
import type { PeopleType } from '@/types/PeopleType'
import Header from '@/components/Header.vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const route = useRoute()
const router = useRouter()
const id = route.params.id as string

const { getById, people } = GetPeople()
const { DeletePeople } = UseDeletePeople()
const { EditPersonData } = UseEditPeople()

const isEditing = ref(false)
const editedData = ref<PeopleType>({ name: '', age: '', job: '', about: '' })

const deletePersonButton = async () => {
  await DeletePeople(id)

  router.push('/')
  setTimeout(() => {
    toast('People card deleted!', {
      theme: 'light',
      type: 'success',
      position: 'top-right',
      transition: 'zoom',
      dangerouslyHTMLString: true
    })
  })
}

const defaultEditedData = () => ({
  name: '',
  age: '',
  job: '',
  about: '',
  ...people.value
})

const toggleEdit = () => {
  isEditing.value = !isEditing.value

  if (isEditing.value) {
    editedData.value = defaultEditedData()
  }
}

const saveEdit = async () => {
  await EditPersonData(id, editedData.value)
  isEditing.value = false
  getById()
  toast('Changes saved successfully!', {
    theme: 'light',
    type: 'success',
    position: 'top-right',
    transition: 'zoom',
    dangerouslyHTMLString: true
  })
}

const cancelEdit = () => {
  isEditing.value = false
  editedData.value = defaultEditedData()
}

onMounted(() => {
  getById()
})
</script>

<style scoped>
h1 {
  font-size: 30px;
}

p {
  font-size: 18px;
  margin: 0;
}

.card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid black;
  max-width: 400px;
  margin: 0 auto;
  padding: 40px 50px;
  border-radius: 10px;
  background-color: rgb(143, 151, 160);
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
}

.pic-and-title {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
}

.edit {
  display: flex;
  flex-direction: column;
  width: 400px;
}

input {
  width: 100%;
}

textarea {
  width: 100%;
  padding: 9px;
}

input {
  padding: 5px 7px;
}
</style>
