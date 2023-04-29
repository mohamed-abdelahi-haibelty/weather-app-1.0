

function Temp(props) {
  return (
    <span className={`text-[${props.className? "14px" : "22px"}] text-white font-medium font-body ${props.style}`}>{props.temperature}</span>
  )
}

export default Temp