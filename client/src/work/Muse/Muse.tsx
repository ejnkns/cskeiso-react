import React from "react";
import "../../App.css";
import img1 from "./muse-1.jpg";
import img2 from "./muse-2.jpg";
import img3 from "./muse-3.jpg";
import img4 from "./muse-4.jpg";
import img5 from "./muse-5.jpg";
import img6 from "./muse-6.jpg";
import OneColumn from "../../common/OneColumn";
import { getContent } from "gdocs-database";
import MuseJson from "./Muse.json";

function Muse() {
  // eslint-disable-next-line
  let loadimages = [img1, img2, img3, img4, img5, img6];
  const content = getContent(MuseJson);
  const props = {
    page: "work",
    content: content
  }
  return (
    <OneColumn {...props} />
  );
}

export default Muse;
