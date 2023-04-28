import Header from "../components/Header"
import HourlyForcast from "../components/HourlyForcast"
import DaysForecast from "../components/DaysForecast"

function Home() {
  return (
    <div className="home mx-[18px]">
        <Header/>
        <HourlyForcast/>
        <DaysForecast/>
    </div>
  )
}

export default Home