// VideoPlayer.js
"use client"

import React, { useRef, useState } from 'react';

const Player = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    videoRef.current.volume = e.target.value;
  };

  return (
    <div className='flex items-center justify-center md:-ml-48 md:mt-2 sm:mt-2 sm:-ml-40'>
      <video ref={videoRef} width="600" height="400">
        <source
          src="/image/video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className='md:mt-96 items-center justify-center md:-ml-72 sm:mt-96 sm:-ml-24'>
        <button className='bg-blue-300 rounded-md w-24 -ml-72' onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>

        <input className='md:ml-6 md:mt-5 sm:ml-12'
          type="range"
          min="0"
          max="1"
          step="0.1"
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default Player;
