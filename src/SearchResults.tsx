import React from 'react'
import './SearchResults.css'
import TrackList from './TrackList'

const SearchResults = ({ searchResults = [], onAdd, isRemoval }) => {
  const renderSearchResults = () => {
    if (searchResults.length > 0) {
      return <TrackList searchResults={searchResults} addTrack={onAdd} isRemoval={isRemoval} />
    } else {
      return <p>No results</p>
    }
}


  return (
    <div className="SearchResults">
  <h2>Results</h2>
          {/* <!-- You will add a map method that renders a set of Track components  --> */}
          {renderSearchResults()}
</div>
  )
}

export default SearchResults