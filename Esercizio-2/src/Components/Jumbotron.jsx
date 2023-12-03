import React from 'react';
import './Jumbotron.css';
import Slider from './slider';

export default function Jumbotron({ wave }) {

  return (

    <section>

      <figure>
        <img src={wave} alt='' />
      </figure>

      <div id='intro'>

        <h1>Audio Wave</h1>
        <h3>Studios</h3>

        <Slider />

      </div>

    </section>

  );

}
