import { useState, useEffect } from 'react'

import Search from './components/Search'
import Display from './components/Display'

import countryService from './services/countries'

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [viewClicked, setViewClicked] = useState(false)

  useEffect(() => {
    countryService
      .getAll()
      .then(countries => {
        setCountries(countries)       
      })
  }, [])

  const handleSearchInputChange = (e) => {
    setSearch(e.target.value)
    setViewClicked(false)
  }

  const handleViewClick = (id) => {
    const country = countries.find(c => c.cca3 === id) 
    setViewClicked([country])    
  }

  return (
    <div>
      <h1>Data for Countries</h1>
      <Search onChange={handleSearchInputChange} value={search} />
      <Display data={viewClicked ? viewClicked : countries} search={search} onClick={handleViewClick} />
    </div>
  )
}

export default App