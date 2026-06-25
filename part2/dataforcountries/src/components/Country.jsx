const Country = ({ country }) => {
   return (
    <div>
      <h2>{country.name.common}</h2>
       <div>
        <p>Capital: { country.capital }</p>
        <p>Area: { Intl.NumberFormat("en-US").format(country.area) } km²</p>
      </div>
      <h3>Languages</h3>
      <ul>
        { Object.entries(country.languages).map(lang => <li key={lang[0]}>{lang[1]}</li>) }
      </ul>
      <img className="flag" src={ country.flags.svg } alt={ country.flags.alt } />
    </div>
   )
}

export default Country