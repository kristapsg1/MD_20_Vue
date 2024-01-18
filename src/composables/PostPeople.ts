import axios from 'axios'
import { ref } from 'vue'
import type { PeopleType } from '@/types/PeopleType'

const PostPeople = () => {
  const peoples = ref([] as PeopleType[])

  const AddPerson = async (peopleAdd: PeopleType) => {
    const res = await axios.post('http://localhost:3000/people', peopleAdd)
    const newPerson = res.data
    peoples.value = [...peoples.value, newPerson]
  }

  return { AddPerson, peoples }
}

export default PostPeople
