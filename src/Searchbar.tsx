import React from 'react'
import './Searchbar.css'

const Searchbar = () => {
  return (
    <div className="SearchBar">
    <input placeholder="Enter A Song, Album, or Artist" />
    <button className="SearchButton">SEARCH</button>
  </div>
  )
}

export default Searchbar