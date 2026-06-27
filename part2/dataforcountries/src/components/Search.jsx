const Search = ({ onChange, value }) => {
  return (
    <>
      <label htmlFor="search">Search countries: </label>
      <input
        type="test"
        id="search"
        onChange={onChange}
        value={value}
        placeholder="Enter a country name"
      />
    </>
  )
}

export default Search