const Search = ({header, onChange, value}) => {
  return (
    <div>
      <h2>{header}</h2>
      <div>
        <label htmlFor="search">Search: </label>
        <input 
          type="text"
          id="search"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default Search