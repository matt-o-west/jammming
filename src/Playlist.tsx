import React from 'react'
import './Playlist.css'

const Playlist = () => {
  return (
    <div><div className="Playlist">
    <input value={"New Playlist"}/>
    {/*<!-- Add a TrackList component -->*/}
    <button className="Playlist-save">SAVE TO SPOTIFY</button>
  </div></div>
  )
}

export default Playlist