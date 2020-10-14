import React from "react";
import "../../App.css";
import img1 from "./Westspace_Extra-8.jpg";
import OneColumn from "../../common/OneColumn";
import { getContent } from "gdocs-database";
import MeowTVJson from "./MeowTV.json";

function MeowTV() {
  // eslint-disable-next-line
  let loadimages = [img1];
  const content = getContent(MeowTVJson);
  const props = {
    page: "work",
    content: content
  }
  return (
    <OneColumn {...props} />
  );
}

export default MeowTV;
