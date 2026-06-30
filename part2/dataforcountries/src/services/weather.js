import axios from "axios";

const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=`
const api_key = import.meta.env.VITE_SOME_KEY

const getWeather = (city) => {
  const request = axios.get(`${baseUrl}${city}&units=metric&APPID=${api_key}`)
  return request.then(response => response.data)
}

export default { getWeather }