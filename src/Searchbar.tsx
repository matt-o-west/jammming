import React from 'react'
import './Searchbar.css'

const Searchbar = ({ search }) => {
    console.log('search', search)
  
    const handleSearch = (event) => {
        search(event.target.value)
    }
  
    return (
    <form className="SearchBar" onSubmit={handleSearch}>
    <input placeholder="Enter A Song, Album, or Artist"  />
    <button className="SearchButton" >SEARCH</button>
  </form>
  )
}

export default Searchbar