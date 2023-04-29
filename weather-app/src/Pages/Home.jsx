import Header from "../components/Header"
import { useEffect } from "react"
import HourlyForcast from "../components/HourlyForcast"
import DaysForecast from "../components/DaysForecast"

function Home() {

  useEffect(() => {
    document.body.style.background = "linear-gradient(to bottom, #121923, #2B3142)";
  }, [])

  return (
    <div className="home mx-[18px]">
        <Header/>
        <HourlyForcast/>
        <DaysForecast/>
    </div>
  )
}

export default Home