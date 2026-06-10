import { useState } from 'react'

const Numbers = ({data}) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {data.map(person => <Person key={person.name} person={person}/>)}
      </ul>
    </div>
  )
}

const Person = (props) => <li>{props.person.name}</li>

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addEntry = (event) => {
    event.preventDefault()
    const entry = {
      name: newName
    }
    const isDuplicate = persons.find(person => person.name === newName)

    isDuplicate
      ? alert(`${newName} has already been added to the phonebook`)
      : setPersons(persons.concat(entry))
      
    setNewName('')
  }

  const handleNameInputChange = (event) => {
    setNewName(event.target.value)    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form name="entry_form" onSubmit={addEntry}>
        <div>
          <label htmlFor="name_input">Name:</label>
          <input name="name_input" value={newName} onChange={handleNameInputChange} required />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Numbers data={persons}/> 
    </div>
  )
}

export default App