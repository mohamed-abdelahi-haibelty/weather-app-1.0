import Temp from "./Temp"

function DayForcast({date, min, max, icon}) {
  return (
    <>
         <div className="day my-[14px] flex justify-between items-center pb-[14px] border-b border-white border-opacity-25">
            <span className="date font-body text-[15px] font-medium text-white">{date}</span>
            <span className="icon">{icon}</span>
            <Temp style={`opacity-[0.3]`} temperature={`${min}°`} className={true}/>
            <div className="progress-bar before:w-[50%] before:left-[30%] before:bg-gradient-to-r before:from-blue-0 before:to-orange-30"></div>
            <Temp temperature={`${max}°`} className={true}/>
        </div>
    </>
  )
}

export default DayForcast