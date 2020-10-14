import React from "react";
import "../../App.css";
import img1 from "./catalogue.jpg";
import img2 from "./left corner chair 2.jpg";
import img3 from "./jasmine billy close.jpg";
import img4 from "./bren ellen.jpg";
import img5 from "./abella brit.jpg";
import OneColumn from "../../common/OneColumn";
import { getContent } from "gdocs-database";
import SomethingDrawings1Json from "./SomethingDrawings1.json";

function SomethingDrawings1() {
  // eslint-disable-next-line
  let loadimages = [img1, img2, img3, img4, img5];
  const content = getContent(SomethingDrawings1Json);
  const props = {
    page: "work",
    content: content
  }
  return (
    <OneColumn {...props} />
  );
}


export default SomethingDrawings1;
