import { useState } from 'react'

const Phonebook = ({header, onSubmit, onChange, value}) => {
  return (
    <div>
      <h2>{header}</h2>
      <Form onSubmit={onSubmit} value={value} onChange={onChange}/>
    </div>
  )
}

const Form = (props) => {
  return (
    <form id="entry_form" onSubmit={props.onSubmit}>
      <div>
        <label htmlFor="fullname">Name:</label>
        <input type="text" id="fullname" value={props.value} onChange={props.onChange} required />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Numbers = ({header, data}) => {
  return (
    <div>
      <h2>{header}</h2>
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
      <Phonebook header='Phonebook' onSubmit={addEntry} onChange={handleNameInputChange} value={newName}/>
      <Numbers header='Numbers' data={persons}/> 
    </div>
  )
}

export default App