const Item = (props) => {
  return (
    <li> 
      <img className="list-flag" src={props.country.flags.svg} alt={props.country.flags.alt} />
      {props.country.name.common} <button onClick={() => props.onClick(props.country.cca3)}>View</button>
    </li>
  )
}

export default Item