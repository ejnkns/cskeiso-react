import React from "react";
import "../../App.css";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import img1 from "./1jessie.jpg";
import img2 from "./2jessie2.jpg";
import img3 from "./3SexBriefClipboard0.jpg";
import img4 from "./4SexBriefClipboard1.jpg";
import img5 from "./5jessie0.jpg";
import img6 from "./6evelyn1.jpg";

function SexBrief() {
  return (
    <div>
      <Header page="work" />
      <p>
        Interview series with sculptural components filmed and exhibited in
        2017.
        <br />
      </p>
      <img loading="lazy" alt="" src={img1} />
      <img loading="lazy" alt="" src={img2} />
      <img loading="lazy" alt="" src={img3} />
      <img loading="lazy" alt="" src={img4} />
      <img loading="lazy" alt="" src={img5} />
      <img loading="lazy" alt="" src={img6} />
      <Footer />
    </div>
  );
}

export default SexBrief;
