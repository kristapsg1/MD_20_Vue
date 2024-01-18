import axios from 'axios'
import type { PeopleType } from '@/types/PeopleType'

const EditPeople = async (id: string, updatedData: PeopleType) => {
  const response = await axios.put(`http://localhost:3000/people/${id}`, updatedData)
  return response.data
}

const useEditPeople = () => {
  const EditPersonData = async (id: string, updatedData: PeopleType) => {
    await EditPeople(id, updatedData)
  }

  return { EditPersonData }
}

export default useEditPeople
