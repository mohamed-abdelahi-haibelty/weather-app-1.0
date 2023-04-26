import DayTime from "./DayTime"
import Temp from "./Temp"


function HourlyForcast() {
  return (
    <div className="hour-forcast mt-[44px] px-[17px] border border-white border-opacity-25 rounded-[15px] pt-[10px]">
        <p className="text-white font-normal text-[14px] font-body">Cloudy conditions from 1AM-9AM, with
                showers expected at 9AM.</p>
       <div className="mt-[16px] border-t border-white border-opacity-25 pt-[14px] pb-[11px] gap-[20px] flex flex-col justify-between">
           <div className="flex justify-between">
                <DayTime time={"now"}/>
                <DayTime time={"10PM"}/>
                <DayTime time={"11PM"}/>
                <DayTime time={"12PM"}/>
                <DayTime time={"1AM"}/>
           </div>
          <div className="flex justify-between">
            <Temp temperature={"21°"}/>
            <Temp temperature={"21°"}/>
            <Temp temperature={"19°"}/>
            <Temp temperature={"19°"}/>
            <Temp temperature={"19°"}/>
          </div>
       </div>
    </div>
  )
}

export default HourlyForcast