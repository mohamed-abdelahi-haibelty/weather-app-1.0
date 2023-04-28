import { useContext, useEffect, useState } from "react"
import DayTime from "./DayTime"
import Temp from "./Temp"
import { currentWeatherData } from "../Context"
import { getTime, getTimeFormat } from "../TimeFormat"


function HourlyForcast() {
  const hours = getTime(3, 12, 3)
  const hoursFormat = getTimeFormat(hours)
  const [hourlyTemp, setHourlyTemp] = useState()
  const {weatherData, weatherForecast,} = useContext(currentWeatherData)

  useEffect(() => {
    if(weatherData){
      const currentWeather = Math.trunc(weatherData.main.temp)
      let temperatures = weatherForecast.list.slice(0, 4).map((el) => Math.trunc(el.main.temp))
      temperatures.unshift(currentWeather)
      setHourlyTemp(temperatures)
    }
  }, [weatherData, weatherForecast])

  return (
    <div className="hour-forcast mt-[44px] px-[17px] card pt-[10px]">
        <p className="text-white font-normal text-[14px] font-body">Cloudy conditions from 1AM-9AM, with
                showers expected at 9AM.</p>
       <div className="mt-[16px] border-t border-white border-opacity-25 pt-[14px] pb-[11px] gap-[20px] flex flex-col justify-between">
       
           <div className="flex justify-between">
                {hoursFormat.map((hour, i) => <DayTime time={hour} key={i}/>)}
           </div>

          <div className="flex justify-between">
            {hourlyTemp && hourlyTemp.map((temp, i) => <Temp temperature={`${temp}°`} key={i}/>)}
          </div>

       </div>
    </div>
  )
}

export default HourlyForcast