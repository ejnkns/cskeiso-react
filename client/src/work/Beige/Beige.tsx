import React from "react";
import "../../App.css";
import img1 from "./1-beige.jpg";
import img2 from "./BEIGESHOW-poster1.jpg";
import { ContentObject } from "gdocs-database";
import { getContent } from "gdocs-database";
import BeigeJson from "./Beige.json";
import OneColumn from "../../common/OneColumn";

function Beige() {
  let content: ContentObject[] = getContent(BeigeJson);
  let props = {
    page: "work",
    content: content
  }
  // eslint-disable-next-line
  let loadcontentplease = [img1, img2];
  return (
    <OneColumn {...props} />
  );
}

export default Beige;
