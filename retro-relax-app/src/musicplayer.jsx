import React, { useState, useRef } from "react";
import { Play, Pause, X } from "lucide-react";
import sampleTrack from "./assets/output.wav"; 

function MusicPlayer({ url, visible = true }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  if (!visible) return null;

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white flex items-center justify-between p-4 shadow-lg">
      <audio ref={audioRef} src={sampleTrack} />

      <div className="flex items-center space-x-4">
        <button
          onClick={togglePlay}
          className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <span className="text-sm truncate max-w-[200px]">{sampleTrack}</span>
      </div>
    </div>
  );
}

export default MusicPlayer