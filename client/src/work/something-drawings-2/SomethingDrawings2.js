import React from "react";
import "../../App.css";
import Header from "../../common/Header";
import Menu from "../../common/Menu";
import Footer from "../../common/Footer";
import Player from "../../common/Player";
import img1 from "./1 copy.jpg";
import img2 from "./2.jpg";
import img3 from "./SD_2.jpg";
import img4 from "./S2CF.jpg";
import img5 from "./S2CB.jpg";

function SomethingDrawings2() {
  var url = "https://vimeo.com/353194832";
  return (
    <div>
      <Menu page="work" />
      <Header />
      <h1>'SOmething Drawings2' READTHEROOM</h1>
      <p>
        Opening reception for Something Drawings Series2 presented by Read the
        Room. <br />
        With Audrey Schmidt’s presentation of the catalogue text / RTR lecture
        series. <br />
        Curated by Carmen-Sibha Keiso <br />
        6.8.2019
        <br />
        @readtheroom_ <br />
        ANDER RENNICK - BRIGHID FITZGERALD - DOUGLAS MAXTED - GEORGE
        EGERTON-WARBURTON - LORILEE YANG - NIK LEE - VICTORIA TODOROV - ZOE
        JACKSON - AUDREY SCHMIDT <br />
        <br />
        <br />
        'Read the Room' is an expanded literary practice space focusing on
        writers and artists working both on and off the page. Co-directed by
        Carmen-Sibha Keiso and Kat Capel, the initiative runs workshops,
        readings, lectures and exhibition events.
      </p>
      <Player url={url} />
      <img loading="lazy" alt="" src={img1} />
      <img loading="lazy" alt="" src={img2} />
      <img loading="lazy" alt="" src={img3} />
      <img loading="lazy" alt="" src={img4} />
      <img loading="lazy" alt="" src={img5} />
      <Footer />
    </div>
  );
}

export default SomethingDrawings2;
