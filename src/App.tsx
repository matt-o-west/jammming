import { useEffect, useState } from 'react'
import './App.scss'
import Searchbar from './Searchbar'
import SearchResults from './SearchResults'
import Playlist from './Playlist'

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [playlistName, setPlaylistName] = useState('New Playlist')
  const [playlistTracks, setPlaylistTracks] = useState([])
  const [isRemoval, setIsRemoval] = useState(true)

  useEffect(() => {
    fetch('https://api.spotify.com/v1/search?q=roadhouse&type=track')
      .then(response => response.json())
      .then(data => setSearchResults(data.tracks.items))
  }, [])

  const addTrack = (track) => {
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return
    }
    
    setPlaylistTracks([...playlistTracks, track])
  }

  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter(savedTrack => savedTrack.id !== track.id))
  }

  const updatePlaylistName = (name: string) => {
    setPlaylistName(name)
  }

  const savePlaylist = () => {
    const trackUris = playlistTracks.map(track => track.uri)
  }

  const search = (term: string) => {
    console.log(term)
    fetch(`https://api.spotify.com/v1/search?q=${term}&type=track`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setSearchResults(data.tracks.items)
      })
  }

  return (
    <>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
        <Searchbar search={search} />
      <div className="App-playlist">
          {/* <!-- Add a SearchResults component --> */}
          <SearchResults searchResults={searchResults} onAdd={addTrack} isRemoval={isRemoval} />
          {/* <!-- Add a Playlist component --> */}
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} searchResults={searchResults} addTrack={addTrack} removeTrack={removeTrack} isRemoval={isRemoval} updatePlaylistName={updatePlaylistName} savePlaylist={savePlaylist} />
      </div>
    </div>
  </>
  )
}

export default App
