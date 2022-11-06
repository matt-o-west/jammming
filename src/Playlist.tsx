import React from 'react'
import './Playlist.css'
import TrackList from './TrackList'

const Playlist = ({ playlistName, playlistTracks, searchResults, addTrack, removeTrack }) => {
  return (
    <div><div className="Playlist">
    <input value={"New Playlist"}/>
          {/*<!-- Add a TrackList component -->*/}
          <TrackList playlistName={playlistName} playlistTracks={playlistTracks} searchResults={searchResults} addTrack={addTrack} removeTrack={removeTrack} />
    <button className="Playlist-save">SAVE TO SPOTIFY</button>
  </div></div>
  )
}

export default Playlist