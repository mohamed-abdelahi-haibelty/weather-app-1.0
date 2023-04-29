import DayForcast from "./DayForcast"
import { useContext, useEffect, useState} from "react"
import { currentWeatherData } from "../Context"
import { DateFormat } from "../utils/DateFormat"
import { getDays } from "../utils/GetDays"
import { weatherIcons } from "../utils/WeatherIcons"


function DaysForecast() {
  const {weatherForecast} = useContext(currentWeatherData)
  const [days, setDays] = useState(null)
  const [icons, setIcons] = useState(null)
  const [minmaxTemp, setMinmaxTemp] = useState(null)
  
  useEffect(() => {
    if(weatherForecast){
      let [days, icons, minmaxTemp] = getDays(weatherForecast.list)
      days = DateFormat(days)
      const wIcons = icons.map((icon, index) => {
        const WeatherIcon = weatherIcons[icon]
        return <WeatherIcon className="w-[25px] h-[25px] text-white" key={index}/>
      })
      setDays(days)
      setIcons(wIcons)
      setMinmaxTemp(minmaxTemp)
    }
  }, [weatherForecast])

  return (
    <div className="days-forecast px-4 py-[14px] mt-[8px] card">
            <h3 className="font-body text-[15px] font-medium ml-[15px] mb-[6px] text-white">5-Day FORECAST </h3>
            <div className="days flex flex-col border-t border-white border-opacity-25 ">
              {days && days.map((day, index) => 
                <DayForcast 
                  date={day}
                  min={minmaxTemp[index].min}
                  max={minmaxTemp[index].max}
                  icon={icons[index]}
                  key={index}
                />
              )}
            </div>
    </div>
  )
}

export default DaysForecast