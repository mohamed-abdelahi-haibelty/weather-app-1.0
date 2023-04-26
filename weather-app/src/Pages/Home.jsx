import Header from "../components/Header"
import HourlyForcast from "../components/HourlyForcast"

function Home() {
  return (
    <div className="home mx-[18px]">
        <Header/>
        <HourlyForcast/>
    </div>
  )
}

export default Home