import { useEffect, useState } from 'react'
import './App.scss'
import Searchbar from './Searchbar'
import SearchResults from './SearchResults'
import Playlist from './Playlist'
import Spotify from './utils/Spotify'

function App() {
  const [searchResults, setSearchResults] = useState([{ name: 'name', artist: 'artist', album: 'album', id: 1, uri: 'uri' }])
  const [playlistName, setPlaylistName] = useState('New Playlist')
  const [playlistTracks, setPlaylistTracks] = useState([])
  const [isRemoval, setIsRemoval] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')


  
  
  

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
    Spotify.savePlaylist(playlistName, playlistTracks.map(track => track.uri))
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setSearchTerm(event.target.value)
  }

  const search = (term: string) => {
    //console.log(term)
    Spotify.search(searchTerm)
      .then(tracks => {
        console.log(tracks)
        setSearchResults(tracks)
      })
      .finally(() => {
        setSearchTerm(term)
      }) 
  }

  return (
    <>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
        <Searchbar search={search} searchResults={searchResults} handleSearch={handleSearch} />
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