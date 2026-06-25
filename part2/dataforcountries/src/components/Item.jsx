const Item = ({ country }) => {
  return (
    <li> 
      <img className="list-flag" src={country.flags.svg} alt={country.flags.alt} />
      {country.name.common}
    </li>
  )
}

export default Item