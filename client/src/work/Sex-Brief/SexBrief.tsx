import React from "react";
import "../../App.css";
import img1 from "./1jessie.jpg";
import img2 from "./2jessie2.jpg";
import img3 from "./3SexBriefClipboard0.jpg";
import img4 from "./4SexBriefClipboard1.jpg";
import img5 from "./5jessie0.jpg";
import img6 from "./6evelyn1.jpg";
import OneColumn from "../../common/OneColumn";
import { getContent } from "gdocs-database";
import SexBriefJson from "./SexBrief.json";

function SexBrief() {
  // eslint-disable-next-line
  let loadimages = [img1, img2, img3, img4, img5, img6];
  const content = getContent(SexBriefJson);
  const props = {
    page: "work",
    content: content
  }
  return (
    <OneColumn {...props} />
  );
}

export default SexBrief;
