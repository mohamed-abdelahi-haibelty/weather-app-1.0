import { useEffect } from "react"
import SearchHeader from "../components/SearchHeader"

function Search() {
 useEffect(() => {
    document.body.style.backgroundColor = "black";
    console.log('hello')
 }, [])

  return (
    <div>
        <SearchHeader/>
    </div>
  )
}

export default Search