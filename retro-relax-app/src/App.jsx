import { useState, useEffect } from 'react'
import Card from './card.jsx'
import { FetchCassetes, Cassette } from './api.jsx'
import MusicPlayer from './musicplayer.jsx'

// import css
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS

function App() {
  const [cassettes, setCassettes] = useState([]);
  const [selectedCassette, setSelectedCassette] = useState(null);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    FetchCassetes().then((data) => setCassettes(data));
  }, []);

  const onPlay = () => {
    setShowPlayer(!showPlayer)
  }

  return (
    <>
      <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
        <h1 className="display-1" >RETRO RELAX</h1>

        <div className="row g-4 justify-content-center my-media-grid">
          {cassettes.map(x => (
            <Card key={x.cassetteId} cassette={x} onPlay={onPlay} />
          ))}
        </div>
        <MusicPlayer
          url="./assets/SoundHelix-Song-1.mp3"
          visible={showPlayer}
        />
      </div>
    </>
  )
}

export default App
