import React from "react";
import "../../App.css";
import Header from "../../common/Header";
import Menu from "../../common/Menu";
import Footer from "../../common/Footer";
import Player from "../../common/Player";
import img from "./Buster.jpg";

function Buster() {
  var url1 = "https://vimeo.com/307621850";
  return (
    <div>
      <Menu page="work" />
      <Header />
      <Player url={url1} />
      <img alt="" src={img} />
      <Footer />
    </div>
  );
}

export default Buster;
