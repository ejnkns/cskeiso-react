import React from "react";
import "../../App.css";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Player from "../../common/Player";

function BangBang() {
  var url = "https://vimeo.com/112134680";
  return (
    <div>
      <Header page="work" />
      <p>
        Video footage of a girl wearing an ‘L O V E’ skirt positioned in the
        corner of a 3x2 studio space. Once the recording device is turned on,
        the girl incorporates acts similar to that of triggering explosive
        devices; guns and grenades. The girl employs a selection of six
        ‘air-guns’ to facilitate her physical conduct: 3 machine guns,
        pistol/hand-gun, and 2 shotguns, each with a unique sound,
        simultaneously shot &amp; vocally interpreted by the girl. Sampled audio
        bites are overlaid to enhance the impact of these acts, elevating its
        artificiality.
        The act ends and the girl reverts to a neutral stance in the studio
        corner and turns off the recording device.
      </p>
      <Player url={url} />
      <Footer />
    </div>
  );
}

export default BangBang;
