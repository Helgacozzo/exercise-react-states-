import React, { useState } from 'react';
import './Slider.css'

const Slider = () => {
  const [volume, setVolume] = useState(20);

  const handleSliderChange = (e) => {
    const newVolume = (e.target.value);
    setVolume(newVolume);
  };

  const handleMuteClick = () => {
    setVolume(0);
  };

  return (

    <div id='slider'>

      <input
        type="range"
        min={0}
        max={100}
        value={volume}
        onChange={handleSliderChange}
      />

      <span>Volume: {volume}</span>
      <button onClick={handleMuteClick}>Mute</button>

    </div>

  );

};

export default Slider;
