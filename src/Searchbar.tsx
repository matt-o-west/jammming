import React from 'react'
import './Searchbar.css'

const Searchbar = ({ search }) => {
    
  
    const handleSearch = (event) => {
        search(event.target.value)
    }
  
    return (
    <div className="SearchBar" >
    <input placeholder="Enter A Song, Album, or Artist" onChange={handleSearch} />
    <button className="SearchButton" >SEARCH</button>
  </div>
  )
}

export default Searchbar