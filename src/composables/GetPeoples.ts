import axios from 'axios'
import { ref } from 'vue'
import type { PeopleType } from '@/types/PeopleType'

const GetPeoples = () => {
  const peoples = ref([] as PeopleType[])

  const get = async () => {
    const res = await axios.get('http://localhost:3000/people')
    peoples.value = res.data
  }

  return { get, peoples }
}

export default GetPeoples
