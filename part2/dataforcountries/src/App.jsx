import { useState, useEffect } from 'react'
import countryService from './services/countries'

const App = () => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    countryService
      .getAll()
      .then(countries =>{
        console.log(countries)        
      })
  }, [])

  return (
    <div>
      <h1>Data for Countries</h1>
      <form>
        <label htmlFor="search">Search countries: </label>
        <input
          type="test"
          name="search"
        />
      </form>
    </div>
  )
}

export default App