import { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

function SearchBox() {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <div className="w-[100%] bg-gray-1000 rounded-[10px] py-2 flex items-center justify-around">
        <AiOutlineSearch className={`text-white opacity-50 ${isFocused ? "hidden" : ""}`}/>
        <input className='w-[90%] outline-none bg-transparent text-opacity-50 placeholder-white placeholder-opacity-50 border-none text-white' 
        type="text" name="" id="" placeholder='Search for a city'
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
         />
    </div>
  )
}

export default SearchBox