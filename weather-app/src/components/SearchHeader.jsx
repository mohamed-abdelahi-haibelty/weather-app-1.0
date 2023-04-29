import SearchBox from "./SearchBox"

function SearchHeader() {
  return (
    <div className="mx-[16px] mt-[30px] mb-[15px]">
        <h1 className="text-[37px] font-el font-bold text-white mb-2">Weather</h1>
        <SearchBox/>
    </div>
  )
}

export default SearchHeader