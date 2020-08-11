import React from "react";
import "../../App.css";
import Header from "../../common/Header";
import Menu from "../../common/Menu";
import Footer from "../../common/Footer";
import img1 from "./long-legs.jpg";
import img2 from "./clipboard-floorplan.jpg";
import LongLegsPDF from "./long-legs.pdf";

function LongLegs() {
  return (
    <div>
      <Menu page="work" />
      <Header />
      <p>
        Yea she's got long legs and huge tits
        <br />
        <a target="_blank" rel="noopener noreferrer" href={LongLegsPDF}>
          PDF
        </a>
      </p>
      <img alt="she's got long legs" src={img1} />
      <img loading="lazy" alt="clipboard floorplan" src={img2} />
      <Footer />
    </div>
  );
}

export default LongLegs;
