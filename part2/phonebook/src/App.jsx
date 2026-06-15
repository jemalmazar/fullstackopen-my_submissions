import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import AddContact from './components/AddContact'
import Contacts from './components/Contacts'

const App = () => {
  const [persons, setPersons] = useState([]) 
  // initial state for adapted from https://medium.com/@amitsharma_24072/handling-multiple-inputs-in-reactjs-best-practices-for-react-js-input-forms-9b973f4beb7e
  const [newName, setNewName] = useState({ name: "",number: "" })
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()

    const entry = { name: newName.name, number: newName.number }
    const isDuplicate = persons.find(person => person.name.toLowerCase() === newName.name.toLowerCase())

    isDuplicate
      ? alert(`${newName.name} has already been added to the phonebook`)
      : setPersons(persons.concat(entry))
      
    setNewName({ name: "", number: "" })
  }

  const handleFormInputChange = (e) => {
    // multiple input handling adapted from https://www.w3schools.com/react/react_forms_multiple_inputs.asp
    const { id, value } = e.target    
    setNewName(previousState => ({...previousState, [id]: value}))    
  }

  const handleSearchInputChange = (e) => setSearch(e.target.value)

  return (
    <div>
      <h1>Phonebook</h1>
      <Search 
        header="Search Contacts"
        onChange={handleSearchInputChange}
        value={search} 
      />
      <AddContact 
        header="Create Contact"
        onSubmit={onSubmit}
        onChange={handleFormInputChange}
        value={newName}
      />
      <Contacts
        header="Contacts"
        data={persons}
        search={search}
      /> 
    </div>
  )
}

export default App