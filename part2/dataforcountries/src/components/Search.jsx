const Search = ({ onChange, value }) => {
  return (
    <form>
      <label htmlFor="search">Search countries: </label>
      <input
        type="test"
        id="search"
        onChange={onChange}
        value={value}
        placeholder="Enter a country name"
      />
    </form>
  )
}

export default Search