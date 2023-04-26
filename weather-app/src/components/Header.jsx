

function Header() {
  return (
    <div className="header px-[65px] pt-[34px]">
        <h1 className="city-name font-heading text-[37px] text-white font-normal tracking-tighter">Seongname-si</h1>
        <div className="temp text-center flex items-center gap-1 flex-col">
            <h1 className="current-temp text-[102px] text-white font-heading font-thin mt-[-32px] mb-[-24px]">21°</h1>
            <p className="w-description font-body text-white font-normal text-2xl">Partly Cloudy</p>
            <div className="mxmin-tem flex gap-3">
                <span className="mx font-body text-white font-medium text-[21px]">H:29°</span>
                <span className="min font-body text-white font-medium text-[21px]">L:15°</span>
            </div>
        </div>
    </div>
  )
}

export default Header