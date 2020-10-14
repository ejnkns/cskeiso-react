import React from "react";
import "../../App.css";
import img1 from "./ALETHEA-.jpg";
import img2 from "./SD3.jpg";
import img3 from "./the-room.jpg";
import OneColumn from "../../common/OneColumn";
import { getContent } from "gdocs-database";
import SomethingDrawings3Json from "./SomethingDrawings3.json";

function SomethingDrawings3() {
  // eslint-disable-next-line
  let loadimages = [img1, img2, img3];
  const content = getContent(SomethingDrawings3Json);
  const props = {
    page: "work",
    content: content
  }
  return (
    <OneColumn {...props} />
  );
}

export default SomethingDrawings3;
