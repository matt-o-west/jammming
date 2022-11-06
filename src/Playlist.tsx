import React from 'react'
import './Playlist.css'
import TrackList from './TrackList'

const Playlist = ({ playlistName, playlistTracks, searchResults }) => {
  return (
    <div><div className="Playlist">
    <input value={"New Playlist"}/>
          {/*<!-- Add a TrackList component -->*/}
          <TrackList playlistName={playlistName} playlistTracks={playlistTracks} searchResults={searchResults} />
    <button className="Playlist-save">SAVE TO SPOTIFY</button>
  </div></div>
  )
}

export default Playlist