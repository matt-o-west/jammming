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
  const [token, setToken] = useState(null)

  const client_id: string = '59fee7bd01504b5faead9f4da53bd898'
  const redirect_uri: string = 'http://localhost:5173/'

  /*useEffect(() => {
    const accessToken = getAccessToken()
    setToken(accessToken)
  }, [])*/

  function getAccessToken() {
    if (token) {
        return token
    } else {
        //check for access token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)
        const refreshToken = window.location.href.match(/refresh_token=([^&]*)/)

        if (accessTokenMatch && expiresInMatch) {
            let token = accessTokenMatch[1]
            const expiresIn = Number(expiresInMatch[1])
            window.setTimeout(() => token = '', expiresIn * 1000)
            window.history.pushState('Access Token', null, '/')
            setToken(token)
            return token
        } else {
            const accessURL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_uri}`
            window.location.href = accessURL
        }
    }
}

  async function search() {
    const accessToken = getAccessToken()

    return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (!data.tracks) {
                return []
            }
            const results = data.tracks.items.map(track => (
                {
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
              }))
              setSearchResults(results)
        })
  }

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