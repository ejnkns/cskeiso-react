import React from "react";
import "../../App.css";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Player from "../../common/Player";
import img1 from "./WAYS1.jpg";
import img2 from "./WAYS2.jpg";
import img3 from "./WAYS3.jpg";

function FiveWays() {
  var url = "https://vimeo.com/440788546";
  return (
    <div>
      <Header page="work" />
      <p>
        '5 Ways’: Street Theatre performance completed for a commission by the Faculty of Music and Fine Arts,
        at The University of Melbourne. It was exhibited as part of the First Commissions showcase at the Martin
        Myer Arena and for the Keith &amp; Elisabeth Murdoch Travelling Fellowship exhibition at The Margaret
        Lawrence Gallery. As seen in two parts on the
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://firstcommissions.com.au/titanic/carmen-sibha-keiso#response"
        >
          &nbsp;firstcommissions.com.au&nbsp;
        </a>
        online gallery, where the video-
        document and action-transcript are available.
        <br />
      </p>
      <Player url={url} />
      <br />
      <img loading="lazy" alt="" src={img1} />
      <img loading="lazy" alt="" src={img2} />
      <img loading="lazy" alt="" src={img3} />
      <Footer />
    </div>
  );
}

export default FiveWays;
