import React from "react";
import "../../App.css";
import img1 from "./1 copy.jpg";
import img2 from "./2.jpg";
import img3 from "./SD_2.jpg";
import img4 from "./S2CF.jpg";
import img5 from "./S2CB.jpg";
import OneColumn from "../../common/OneColumn";
import { getContent } from "gdocs-database";
import SomethingDrawings2Json from "./SomethingDrawings2.json";

function SomethingDrawings2() {
  // eslint-disable-next-line
  let loadimages = [img1, img2, img3, img4, img5];
  const content = getContent(SomethingDrawings2Json);
  const props = {
    page: "work",
    content: content
  }
  return (
    <OneColumn {...props} />
  );
}
export default SomethingDrawings2;
