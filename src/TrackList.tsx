import React from 'react'
import './TrackList.css'
import Track from './Track'

const TrackList = ({ searchResults, addTrack, removeTrack, playlistTracks }) => {
    const renderTracks = () => {
        return searchResults.map((track) => {
            return <Track track={track} key={track.id} addTrack={addTrack} removeTrack={removeTrack} playlistTracks={playlistTracks} />
        })
    }

  return (
    <div className="TrackList">
          {/* <!-- You will add a map method that renders a set of Track components  --> */}
            {renderTracks()}
          
</div>
  )
}

export default TrackList