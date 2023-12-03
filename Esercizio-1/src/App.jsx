import React, { useState } from 'react';
import Navbar from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";
import logo from './assets/logo.png';
import wave from './assets/wave.png';
import './App.css';

function App() {

  const linksList = [
    { name: 'Home', url: './url' },
    { name: 'Play Music', url: './play-music' },
    { name: 'About Us', url: './about-us' },
    { name: 'Contact Us', url: './contact-us' },
  ];

  const [isNightMode, setIsNightMode] = useState(false);

  const buttonNightMode = () => {
    setIsNightMode((isNightMode) => !isNightMode);
  };

  return (

    <div className={isNightMode ? 'night-mode' : 'day-mode'}>

      <Navbar
        logo={logo}
        logoAlt={'Audio Wave'}
        links={linksList}
      />

      <Jumbotron
        wave={wave}
        clickModeNight={buttonNightMode}
      />

    </div>

  );

}

export default App;
