import { useEffect, useState } from 'react'
import './App.css'
import { currentWeatherEndPoint, weatherForecastEndPoint } from './FetchApi'
import { currentWeatherData } from './Context'
//import { getLocation } from './utils/getLocation'

///COMPONENTS

import Home from './Pages/Home'



function App() {
  const [weatherData, setWeatherdata] = useState(null)
  const [weatherForecast, setWeatherForecast] = useState(null)
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    Promise.all([
      fetch(`${currentWeatherEndPoint}?lat=34.26457&lon=-6.570169&units=metric&appid=${API_KEY}`)
        .then(response => response.json()),
      fetch(`${weatherForecastEndPoint}?lat=34.26457&lon=-6.570169&units=metric&appid=${API_KEY}`)
        .then(response => response.json())
    ]).then(([currentWeatherData, weatherForecastData]) => {
      setWeatherdata(currentWeatherData);
      setWeatherForecast(weatherForecastData);
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
    console.log(weatherData)
  }, []);

  return (
  <>
    <currentWeatherData.Provider value={{weatherData, setWeatherdata, weatherForecast, setWeatherForecast}}>
      <Home />
    </currentWeatherData.Provider>
  </>
  )
}

export default App
