import Contact from "./Contact"

const Contacts = ({header, data, search}) => {
  const contactsFilter = search.length === 0
    ? data
    : data.filter(person => person.name.toLowerCase().includes(search.toLowerCase())) 

  return (
    <div>
      <h2>{header}</h2>
      <ul>
        {contactsFilter.map(person => <Contact key={person.id} person={person} />)}
      </ul>
    </div>
  )
}

export default Contacts