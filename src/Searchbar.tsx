import React from 'react'
import './Searchbar.css'
import { useRef, useEffect } from 'react'

const Searchbar = ({ search, handleSearch }) => {
  const searchInput = useRef('')
  

  useEffect(() => {
    searchInput.current.focus()
  }, [])

  /*const handleSearch = (event) => {
        search(event.target.value)
  }*/
  
  const handleSubmit = async (event) => {
      event.preventDefault()
    const results = await search(searchInput.current.value)
    return results
  }
  
    return (
    <form className="SearchBar" onSubmit={handleSubmit}>
        <input placeholder="Enter A Song, Album, or Artist" ref={searchInput} onChange={handleSearch} />
    <button className="SearchButton" type="submit" value="search">SEARCH</button>
  </form>
  )
}

export default Searchbar