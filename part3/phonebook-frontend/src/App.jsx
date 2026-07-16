import { useState, useEffect } from 'react'
import Search from './components/Search'
import AddContact from './components/AddContact'
import Contacts from './components/Contacts'
import personService from './services/persons'
import Notification from './components/Notifcation'

const App = () => {
  const [persons, setPersons] = useState([]) 
  // initial state for adapted from https://medium.com/@amitsharma_24072/handling-multiple-inputs-in-reactjs-best-practices-for-react-js-input-forms-9b973f4beb7e
  const [newName, setNewName] = useState({ name: "", number: "" })
  const [search, setSearch] = useState("")
  const [notification, setNotification] = useState(null)

  const notificationDelay = () => {
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }

  useEffect(() => {
    personService
      .getAll()
      .then(defaultContacts => {
        setPersons(defaultContacts)
      })
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()

    const entry = { name: newName.name, number: newName.number }
    const isDuplicate = persons.find(person => person.name.toLowerCase() === newName.name.toLowerCase())

    isDuplicate && window.confirm(`${newName.name} is already in the phonebook. Update their number?`)
      ? personService
          .update(isDuplicate.id, { ...isDuplicate, number: newName.number})
          .then(updatedPerson => {
            setPersons(persons.map(person => person.id === isDuplicate.id ? updatedPerson : person))
            setNotification({ success: `Updated ${updatedPerson.name}'s phone number to 📞 ${updatedPerson.number}.` })
            notificationDelay()
          })
          .catch(() => {
            setNotification({ error: `Information on ${isDuplicate.name} has already been removed from the server.` })
            notificationDelay()
            setPersons(persons.filter(c => c.id !== isDuplicate.id))
          })
      : ""

    !isDuplicate
      ? personService
          .create(entry)
          .then(newPerson => {
            setPersons(persons.concat(newPerson))
            setNotification({ success: `Added ${newPerson.name} to Contacts.` })
            notificationDelay()
          })
      : ""
          
   setNewName({ name: "", number: "" })
  }

  const handleFormInputChange = (e) => {
    // multiple input handling adapted from https://www.w3schools.com/react/react_forms_multiple_inputs.asp
    const { id, value } = e.target    
    setNewName(previousState => ({...previousState, [id]: value}))    
  }

  const handleSearchInputChange = (e) => setSearch(e.target.value)

  const handleDeleteClick = (id) => {
    const contact = persons.find(c => c.id === id)

    window.confirm(`Delete ${contact.name} from Contacts?`) 
      ? personService
        .remove(id, contact)
        .then(() => {
          setPersons(persons.filter(c => c.id !== id))
        })
        .catch(() => {
          setNotification({ error: `Information on ${contact.name} has already been removed from the server.` })
          notificationDelay()
          setPersons(persons.filter(c => c.id !== id))
        })
      : ""
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification
        message={notification}
      />
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
        onClick={handleDeleteClick}
      /> 
    </div>
  )
}

export default App