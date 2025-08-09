import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, X } from "lucide-react";
import { useCassette } from "./cassetteContext";

function MusicPlayer() {
  const [visible, setVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const { selectedCassette, setSelectedCassette } = useCassette()
  const [url, setUrl] = useState(null)

  const togglePlay = (play) => {
    if (!audioRef.current) return;
    console.log("togglePlay(" + play + ")")
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
  }, [selectedCassette])

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white flex items-center justify-between p-4 shadow-lg">
      <audio ref={audioRef} src={selectedCassette.soundUrl} />

      <div className="flex items-center space-x-4">
        <button
          onClick={() => togglePlay(!isPlaying)}
          className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <span className="text-sm ps-2 truncate max-w-[200px]">{selectedCassette.title}</span>
      </div>
    </div>
  );
}

export default MusicPlayer