import { useState, useEffect } from 'react'
import './App.css'
import Card from './card.jsx'
import { FetchCassetes, Cassette } from './api.jsx'
import MusicPlayer from './musicplayer.jsx'

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
      <h1>Retro Relax App</h1>
      <div className='card-group row'>
        {cassettes.map(x => (
          <Card key={x.cassetteId} cassette={x} onPlay={onPlay} />
        )
        )}
      </div>
      <MusicPlayer
        url="./assets/SoundHelix-Song-1.mp3"
        visible={showPlayer}
      />
    </>
  )
}

export default App
