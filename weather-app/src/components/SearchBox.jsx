import { useCallback, useEffect, useRef, useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import axios from 'axios';
import debounce from 'lodash.debounce';

function SearchBox() {
  const [isFocused, setIsFocused] = useState(false)
  const [query, setQuery] = useState('')
  const resultsRef = useRef([])
  const [suggestion, setSuggestion] = useState([])
  const GEODB_KEY = import.meta.env.VITE_GEODB_KEY

  // sent req to Gdbcities api every 500ms
  const handleSearch = useCallback(
    debounce(async (searchQuery) => {
    const options = {
        method: 'GET',
        url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
        params: {
            namePrefix: searchQuery,
            sort: '-population'
        }, 
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': GEODB_KEY,
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        },
        responseType: 'json'
    };
    try {
            const response = await axios.request(options);
            resultsRef.current = response.data.data
            setSuggestion(resultsRef.current.filter((result) => {
              return result.name.toLowerCase().includes(query.toLowerCase())
            }))
        } catch (error) {
            console.error(error);
        }
    
    }, 500), [GEODB_KEY]
  )

    useEffect(() => {
      if(query){
        handleSearch(query)
      }
    }, [query, handleSearch])

  const handleFilter = (e) => {
    let value = e.target.value
    setQuery(value)
  }

  return (
      <>
        <div className="w-[100%] bg-gray-1000 rounded-[10px] py-2 flex items-center justify-around">
            <AiOutlineSearch className={`text-white opacity-50 ${isFocused ? "hidden" : ""}`}/>
            <input className='w-[90%] outline-none bg-transparent text-opacity-50 placeholder-white placeholder-opacity-50 border-none text-white' 
              type="text" name="" id="" placeholder='Search for a city'
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChange={handleFilter}
            />
        </div>
        <div className="relutl">
              {suggestion && suggestion.map((r, i) => <p className='text-white' key={i}>{r.name}</p>)}
        </div>
      </>
  )
}

export default SearchBox