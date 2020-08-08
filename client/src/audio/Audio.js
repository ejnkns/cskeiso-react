import React from 'react';
import '../App.css';
import Header from '../common/Header';
import Footer from '../common/Footer';
import TwoColumns from '../common/TwoColumns';
import Menu from '../common/Menu';
import { A } from 'hookrouter';

function Audio() {
  return (
    <div className="audio">
      <Menu page="audio"/>
      <Header />
      <TwoColumns 
        Column1 = "live reading"
        Column2 = "music / mixes"
        Rows1 = {Rows1}
        Rows2 = {Rows2} 
      />
      <Footer />
    </div>
  );
}

function Rows1() { 
  return ( 
    <div className="row-data">
        <p>
            <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/joshua-edward-330824759/iedwreading-series-one-new-york">ie - dw reading series one</a>
            <br/>
            IchikawaEdward
            <br/><br/>
            <A target="_blank" rel="noopener noreferrer" href="/audio/Hard-To-Read">Diana Di Prima Revolutionary Letters,</A>
            <br/>
            Hard to Read, Montez Press Radio
            <br/><br/>
            <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1rTLduD5kSC4-TmGDaRCICEQZkrC656Ph/view">On Love &amp; Fascism: The Cultivated Self</a>
            <br/>
            Writing &amp; Concept, SIGNAL Artspace
            <br/><br/>
            <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/line-podcast-46683675/4-carmen-sibha-keiso-ichikawaedward-bridget-chappell">Line 4 Podcast </a>
            <br/>
            Lebowskis
        </p>
    </div>
  )
}

function Rows2() {
    return (
      <div className="row-data">
        <p>
        <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/ellablou/transient-landscapes-ep-5-skylab-radio-060919-with-carmen-k">Cold Winter Jazz mix</a>
        <br/>
        <br/>
        <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/loop-radio/lr-001-carmenk">Hot Summer Jazz mix</a>
        <br/>
        <br/>
        <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/carmensk/mild-autumn-jazz-20-5-18">Mild Autumn Jazz mix</a>
        <br/>
        <br/>
        <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/baba_sib/live-442018">Yarra Hotel Live</a>
        <br/>
        <br/>
        <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/baba_sib/live-longplay">Long Play Live</a>
        </p>
      </div>
  )
}

export default Audio;