import React from 'react'
import './Playlist.css'
import TrackList from './TrackList'

const Playlist = ({ playlistName, playlistTracks, searchResults, addTrack, removeTrack, isRemoval, updatePlaylistName, savePlaylist }) => {

    const handleNameChange = (event) => {
        updatePlaylistName(event.target.value)
        console.log('playlistName', playlistName)
    }

  return (
   <div className="Playlist">
          <input placeholder={"New Playlist"} onChange={handleNameChange} type='text'/>
          {/*<!-- Add a TrackList component -->*/}
          <TrackList playlistName={playlistName} playlistTracks={playlistTracks} searchResults={searchResults} addTrack={addTrack} removeTrack={removeTrack} isRemoval={isRemoval} />
          <button className="Playlist-save" onClick={savePlaylist} >SAVE TO SPOTIFY</button>
</div>
  )
}

export default Playlist