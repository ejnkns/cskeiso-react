import React from "react";
import "../../App.css";
import OneColumn from "../../common/OneColumn";
import img from "./Buster.jpg";
import { getContent } from "gdocs-database";
import BusterJson from "./Buster.json";

function Buster() {
  // eslint-disable-next-line
  let loadimages = [img];
  const content = getContent(BusterJson);
  const props = {
    page: "work",
    content: content
  }

  return (
    <OneColumn {...props} />
  )
}

export default Buster;
