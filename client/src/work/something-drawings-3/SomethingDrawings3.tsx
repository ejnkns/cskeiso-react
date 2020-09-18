import React from "react";
import "../../App.css";
import Header from "../../common/Header";
import Player from "../../common/Player";
import Footer from "../../common/Footer";
import img1 from "./ALETHEA-.jpg";
import img2 from "./SD3.jpg";
import img3 from "./the-room.jpg";

function SomethingDrawings3() {
  let url = "https://vimeo.com/369252270";
  return (
    <div>
      <Header page="work" />
      <h1>'SOmething Drawings3' READTHEROOM</h1>
      <p>
        22.10.2019 <br />
        <a href="https://www.instagram.com/readtheroom_/">
          @readtheroom_
        </a>
        <br />
        Opening reception for Something Drawings Series3 presented by Read the
        Room. <br />
        With Alethea Everard’s presentation of the catalogue photo-essay / RTR
        lecture series. <br />
        <br />
        Curated by Carmen-Sibha Keiso <br />
        <br />
        MAFFEW LINDE - DOMINIC SARGENT - LEILEI KUNG - <br />
        BETH DOWNING - NUNZIO MADDEN - DIGBY HOUGHTON - <br />
        JOSH KRUM - ANTONIA ELLIS - ALETHEA EVERARD <br />
        <br />
        'Read the Room' is an expanded literary practice space focusing on
        writers and artists working both on and off the page. Co-directed by
        Carmen-Sibha Keiso and Kat Capel, the initiative runs workshops,
        readings, lectures and exhibition events.
      </p>
      <Player url={url} />
      <img loading="lazy" alt="" src={img3} />
      <img loading="lazy" alt="" src={img2} />
      <img loading="lazy" alt="" src={img1} />
      <Footer />
    </div>
  );
}

export default SomethingDrawings3;
