import React, { useEffect } from 'react';
/*
import placeholder from './sibhplaceholder.JPG';
*/
import { A } from 'hookrouter';
import '../App.css';
import Footer from '../common/Footer';
import Player from '../common/Player'
import logoVideo from './movie.mp4';
import CV from '../common/CARMENKEISO_CV_28_07_2020.pdf';

function Home() {

  useEffect(() => {
    let el = document.querySelector('.fade-in');
    el.classList.add("solid");
  });

  return (
    <div className="home fade-in">
      <Above/>
      <Player url={logoVideo}/>
      <Below/>
      <Footer/>
    </div>
  );
}

function Above() {
  return (
    <div className="home-above">
      <span className="home-title">&nbsp;Carmen-Sibha Keiso&nbsp;</span>
      <a 
        className = "right home-email"
        target = "_blank" 
        rel = "noopener noreferrer"
        href = "mailto:carmen.s.keiso@gmail.com"
      >
        carmen.s.keiso@gmail.com
      </a>
    </div>
  )
}

function Below() {
  return (
    <div>
      <div>
        <div className = "home-table home-below">
          <span>
              <A href="/work"> WORK</A>
          </span>
          <span>
              <A href="/text">TEXT</A>
          </span>
          <span>
              <A href="/audio"> AUDIO</A>
          </span>
              <a target="_blank" rel="noopener noreferrer" href={CV}> CV</a>
        </div>
        <A className="home-below right" href="./READTHEROOM"> READTHEROOM</A>
      </div>
    </div>
  )

}

export default Home;