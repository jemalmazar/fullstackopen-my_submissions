import { useState, useEffect } from 'react'

import weatherService from '../services/weather.js'

const Weather = ({ country }) => {
  const [weather, setWeather] = useState()
  const weatherIconURL = 'https://openweathermap.org/payload/api/media/file/'

  useEffect(() => {
    weatherService
      .getWeather(country.capital)
      .then(capitalWeather => {      
        setWeather(capitalWeather)       
      })
      .catch(() => {
        console.log(`Weather data request for ${ country.capital } failed`)                
      })
  }, [country.capital])

  if (!weather) return (
    <article> 
      <h2>Weather in { country.capital }</h2>
      <p>Weather data currently unavailable</p>
    </article>
  )

  return (
    <article>
      <h2>Weather in { country.capital }</h2>
      <p>Temperature: { weather.main.temp } ℃elsius</p>
      <img src={ `${weatherIconURL}${weather.weather[0].icon}.png` } alt={ weather.weather[0].description } />
      <p>Wind: { weather.wind.speed } m/s</p> 
    </article>
  )
}

export default Weather