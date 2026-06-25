import Country from "./Country"
import Item from "./Item"

const Display = ({ data, search }) => {
  const countriesFilter = data.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))

  if (search.length === 0) {
    return null
  }

  if (countriesFilter.length > 10) {
    return <p>Too many matches, refine search</p>
  }
  
  if (countriesFilter.length === 1) {
    return countriesFilter.map(country => <Country country={country} />)
  }

  return (
    <ul className="countries">
      {countriesFilter.map(country => <Item key={country.cca3} country={country} />)}
    </ul>
  )
}

export default Display