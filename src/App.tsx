import { useState } from 'react'
import './App.scss'
import Searchbar from './Searchbar'
import SearchResults from './SearchResults'
import Playlist from './Playlist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <Searchbar />
      <div className="App-playlist">
          {/* <!-- Add a SearchResults component --> */}
          <SearchResults />
          {/* <!-- Add a Playlist component --> */}
          <Playlist />
      </div>
    </div>
  </div>
  )
}

export default App
