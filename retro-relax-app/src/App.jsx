import { useState, useEffect } from 'react'
import Card from './card.jsx'
import { FetchCassetes } from './api.jsx'
import MusicPlayer from './musicplayer.jsx'
import { useCassette } from "./cassetteContext";

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  const [cassettes, setCassettes] = useState([]);
  const { selectedCassette } = useCassette();
  const [mood, setMood] = useState("🎧 Chill");
  const [fakeListeners, setFakeListeners] = useState(0);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    FetchCassetes().then((data) => setCassettes(data));

    // Fake listener counter
    const interval = setInterval(() => {
      setFakeListeners(Math.floor(Math.random() * 2000) + 500);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
        <h1 className="text-center retro-title">
          RETRO RELAX
        </h1>
        <p className="retro-subtitle text-center">
          Cassette vibes from another time
        </p>

        {/* Equalizer */}
        <div className="equalizer-container my-4">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="bar"
              style={{ animationDelay: `${(i * 0.1) % 1}s` }}
            ></div>
          ))}
        </div>

        {/* Fake features row */}
        <div className="d-flex flex-wrap justify-content-between align-items-center my-4 p-3 bg-light rounded">
          <div>
            <label className="me-2 fw-bold">Mood:</label>
            <select
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              className="form-select d-inline-block w-auto"
            >
              <option>🎧 Chill</option>
              <option>💃 Groovy</option>
              <option>🕺 Funky</option>
            </select>
          </div>
          <div className="fw-bold">{fakeListeners} people vibing right now</div>
          <div>
            <label className="me-2 fw-bold">Speed:</label>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
            />
            <span className="ms-2">{speed}×</span>
          </div>
        </div>

        <div className="row g-4 justify-content-center my-media-grid">
          {cassettes.map(x => (
            <Card key={x.cassetteId} cassette={x} />
          ))}
        </div>

        <MusicPlayer />
      </div>


      {/* Fake Footer */}
      <footer className="retro-footer mt-5 py-4 text-center text-light">
        <div className="container">
          <h5 className="mb-3">RETRO RELAX</h5>
          <p className="small">
            Bringing back the cassette era, one vibe at a time.
            No rewinding fees. No batteries required.
          </p>

          <div className="mb-3">
            <a href="#" className="text-light mx-2">Home</a> |
            <a href="#" className="text-light mx-2">Mixtapes</a> |
            <a href="#" className="text-light mx-2">About</a> |
            <a href="#" className="text-light mx-2">Contact</a>
          </div>

          <div className="social-icons mb-3">
            <a href="#" className="text-light mx-2"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-light mx-2"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-light mx-2"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-light mx-2"><i className="bi bi-vinyl"></i></a>
          </div>

          <p className="small mb-0">&copy; 1984-{new Date().getFullYear()} Retro Relax. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App;