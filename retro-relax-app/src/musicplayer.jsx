import React, { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { useCassette } from "./cassetteContext";

function MusicPlayer() {
  const [visible, setVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const { selectedCassette, setSelectedCassette } = useCassette();
  const [url, setUrl] = useState(null);

  const togglePlay = (play) => {
    if (!audioRef.current) return;
    if (play) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(play);
  };

  useEffect(() => {
    if (!url) return;
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [url]);

  useEffect(() => {
    if (selectedCassette?.isEnabled) {
      setVisible(true);
      setUrl(selectedCassette.soundUrl);
    }
  }, [selectedCassette]);

  return (
    <div className=
      {(visible ? "" : "hide ")
        + "retro-player fixed bottom-0 left-0 w-full text-white flex items-center justify-between p-4 shadow-lg"}>
      <audio ref={audioRef} src={selectedCassette?.soundUrl} />

      {/* Left Reel */}
      <div className='reel'></div>

      {/* Controls & Title */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => togglePlay(!isPlaying)}
          className="play-btn"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>

        <div className="track-title ms-3">{selectedCassette?.title}</div>
      </div>

      {/* Right Reel */}
      <div className='reel'></div>
    </div>
  );
}

export default MusicPlayer;