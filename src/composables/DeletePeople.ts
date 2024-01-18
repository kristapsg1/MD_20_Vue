import axios from 'axios'

const DeletePerson = async (id: string) => {
  await axios.delete(`http://localhost:3000/people/${id}`)
}

const UseDeletePeople = () => {
  const DeletePeople = async (id: string) => {
    await DeletePerson(id)
  }

  return { DeletePeople }
}

export default UseDeletePeople
