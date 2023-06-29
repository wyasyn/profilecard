import React from 'react';
import { Card } from './components';
import {images} from "./constants";

function App() {
  return (
  <main className='main'>
    <div className="top_pattern">
      <img src={images.top} alt="" />
    </div>
       <Card 
     cardBg={images.card}
     pic={images.pic}
     name="Victor Crest"
     age="26"
     city="London"
     />
     <div className="bottom_pattern">
      <img src={images.bottom} alt="" />
     </div>
     <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor</a>. 
      Coded by <a href="https://walumyas.netlify.app" target='_blank' rel='noreferrer'>Yasin Walum</a>.
  </div>
  </main>
  );
}

export default App;
