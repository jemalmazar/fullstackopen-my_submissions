import Weather from "./Weather"

const Country = ({ country }) => {
   return (
      <div>
        <section>
          <h2>{ country.name.common }</h2>
          <p>Capital: { country.capital }</p>
          <p>Area: { Intl.NumberFormat("en-US").format(country.area) } km²</p>
        </section>
        <section>
          <h3>Languages</h3>
          <ul>
            { Object.entries(country.languages).map(lang => <li key={ lang[0] }>{ lang[1] }</li>) }
          </ul>
        </section>
        <img className="flag" src={ country.flags.svg } alt={ country.flags.alt } />
        <Weather country={country} />
      </div>
   )
}

export default Country