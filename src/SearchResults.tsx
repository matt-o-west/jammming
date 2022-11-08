import React from 'react'
import './SearchResults.css'
import TrackList from './TrackList'

const SearchResults = ({ searchResults, onAdd, isRemoval }) => {
    const renderSearchResults = () => {
        return searchResults.map((track) => {
            return <TrackList track={track} key={track.id} onAdd={onAdd} isRemoval={isRemoval} />
        })
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