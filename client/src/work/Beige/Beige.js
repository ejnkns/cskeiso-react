import React from "react";
import "../../App.css";
import Header from "../../common/Header";
import Player from "../../common/Player";
import Footer from "../../common/Footer";
import img1 from "./1-beige.jpg";
import img2 from "./BEIGESHOW-poster1.jpg";

function Beige() {
  return (
    <div>
      <Header page="work" />
      <Player url={"https://vimeo.com/434936637"} />
      <img alt="" src={img1} />
      <img loading="lazy" alt="" src={img2} />
      <Footer />
    </div>
  );
}

export default Beige;
