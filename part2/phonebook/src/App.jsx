import { useState } from 'react'

const Search = ({header, onChange, value}) => {
  return (
    <div>
      <h2>{header}</h2>
      <div>
        <label htmlFor="search">Search: </label>
        <input 
          type="text"
          id="search"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

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
        <label htmlFor="name">Name:</label>
        <input 
          type="text"
          id="name"
          value={props.value.name}
          onChange={props.onChange}
          placeholder="Enter Full Name"
          autoComplete="on"
          required />
      </div>
      <div>
        <label htmlFor="number">Number:</label>
        <input 
            type="text" 
            id="number"
            value={props.value.number}
            onChange={props.onChange}
            placeholder="Enter Phone Number"
            required
          />
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

const Person = (props) => <li>{props.person.name} 📞 {props.person.number}</li>

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  // initial state for adapted from https://medium.com/@amitsharma_24072/handling-multiple-inputs-in-reactjs-best-practices-for-react-js-input-forms-9b973f4beb7e
  const [newName, setNewName] = useState({
    name: "",
    number: ""
  })

  const [search, setSearch] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    const entry = {
      name: newName.name,
      number: newName.number
    }
    const isDuplicate = persons.find(person => person.name === newName.name)

    isDuplicate
      ? alert(`${newName.name} has already been added to the phonebook`)
      : setPersons(persons.concat(entry))
      
    setNewName({
      name: "",
      number: ""
    })
  }

  const handleFormInputChange = (event) => {
    // multiple input handling adapted from https://www.w3schools.com/react/react_forms_multiple_inputs.asp
    const { id, value } = event.target    
    setNewName(previousState => ({...previousState, [id]: value}))    
  }

  const handleSearchInputChange = (e) => {
    setSearch(e.target.value)
  }

  const displayFilter = search.length === 0
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase())) 

  return (
    <div>
      <h1>Phonebook</h1>
      <Search header='Search Contacts' onChange={handleSearchInputChange} value={search} />
      <Phonebook header='Add New' onSubmit={onSubmit} onChange={handleFormInputChange} value={newName}/>
      <Numbers header='Numbers' data={displayFilter}/> 
    </div>
  )
}

export default App