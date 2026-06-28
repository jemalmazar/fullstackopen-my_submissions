import Country from "./Country"
import Item from "./Item"

const Display = ({ data, search, onClick }) => {
  const countriesFilter = data.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))

  if (search.length === 0) return null
    else if (countriesFilter.length > 10) return <p>Too many matches, refine search</p>
    else if (countriesFilter.length === 1) {
      return countriesFilter.map(country => <Country key={ country.cca3 } country={ country } />)
    }
    else if (countriesFilter.length === 0) return <p>No matches, try a new search</p>

  return (
    <ul className="countries">
      {countriesFilter.map(country => <Item key={ country.cca3 } country={ country } onClick={ onClick } />)}
    </ul>
  )
}

export default Display