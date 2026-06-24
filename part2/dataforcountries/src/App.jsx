import { useState } from 'react'

const App = () => {
  const [search, setSearch] = useState('')

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