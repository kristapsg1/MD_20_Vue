import type { PeopleType } from '@/types/PeopleType'
import axios from 'axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const GetPeople = () => {
  const people = ref<PeopleType | null>(null)
  const route = useRoute()

  const getById = async () => {
    const id = route.params.id
    const res = await axios.get(`http://localhost:3000/people/${id}`)
    people.value = res.data
  }

  return { getById, people }
}

export default GetPeople
