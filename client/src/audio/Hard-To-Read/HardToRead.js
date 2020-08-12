import React from "react";
import "../../App.css";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

function HardToRead() {
  return (
    <div>
      <Header page="work" />
      <p>
        Reading for&nbsp;
        <a href="https://soundcloud.com/hard-to-read">Hard To Read</a>
        &nbsp;at Montez Press Radio NYC. Show available on Montez Radio’s&nbsp;
        <a href="https://radio.montezpress.com/#/archive">public archive.</a>
      </p>
      <Footer />
    </div>
  );
}

export default HardToRead;
