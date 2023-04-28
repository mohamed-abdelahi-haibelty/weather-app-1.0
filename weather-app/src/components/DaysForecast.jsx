import Temp from "./Temp"
import { WiRainWind } from "react-icons/wi";

function DaysForecast() {

  return (
    <div className="days-forecast px-4 py-[14px] mt-[8px] card">
            <h3 className="font-body text-[15px] font-medium ml-[15px] mb-[6px] text-white">5-Day FORECAST </h3>
            <div className="days flex flex-col border-t border-white border-opacity-25 ">
                <div className="day my-[14px] flex justify-between items-center pb-[14px] border-b border-white border-opacity-25">
                    <span className="date font-body text-[22px] font-medium text-white">Today</span>
                    <span className="icon"><WiRainWind className="w-[25px] h-[25px] text-white"/></span>
                    <Temp temperature={'15°'}/>
                    <div className="progress-bar before:w-[50%] before:left-[30%] before:bg-gradient-to-r before:from-blue-0 before:to-orange-30"></div>
                    <Temp temperature={'22°'}/>
                </div>
            </div>
    </div>
  )
}

export default DaysForecast