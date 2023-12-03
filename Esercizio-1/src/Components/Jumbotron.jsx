import React from 'react';
import './Jumbotron.css';
import { MdOutlineNightlight } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";
import { TbMinusVertical } from "react-icons/tb";

export default function Jumbotron({ wave, clickModeNight }) {

  return (

    <section>

      <figure>
        <img src={wave} alt='' />
      </figure>

      <div id='intro'>
        <h1>Audio Wave</h1>
        <h3>Studios</h3>
        <button onClick={clickModeNight}><MdOutlineNightlight/><TbMinusVertical /><IoSunnyOutline/></button>
      </div>

    </section>

  );

}
