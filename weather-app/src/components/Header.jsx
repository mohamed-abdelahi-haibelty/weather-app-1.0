import { useContext, } from "react"
import { currentWeatherData } from "../Context"

function Header() {
  const {weatherData} = useContext(currentWeatherData)

  return (
    <div className="header px-[48px] pt-[34px] flex items-center flex-col">
        <h1 className="city-name font-heading text-[37px] text-white font-normal tracking-wide">{weatherData && weatherData.name}</h1>
        <div className="temp text-center flex items-center gap-1 flex-col">
            <h1 className="current-temp text-[50px] text-white font-body font-thin ">{`${Math.trunc(weatherData && weatherData.main.temp)}°`}</h1>
            <p className="w-description font-body text-white font-normal text-2xl">{weatherData && weatherData.weather[0].description}</p>
            <div className="mxmin-tem flex gap-3">
                <span className="mx font-body text-white font-medium text-[21px]">{`H:${Math.trunc(weatherData && weatherData.main.temp_max)}°`}</span>
                <span className="min font-body text-white font-medium text-[21px]">{`L:${Math.trunc(weatherData && weatherData.main.temp_min)}°`}</span>
            </div>
        </div>
    </div>
  )
}

export default Header