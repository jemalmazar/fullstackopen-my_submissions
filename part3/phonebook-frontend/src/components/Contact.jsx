const Contact = (props) => { 
  return (
    <li>
    {props.person.name} 📞 {`${props.person.number} `} 
    <button onClick={() => props.onClick(props.person.id)}>delete</button>
    </li>
  )
}

export default Contact