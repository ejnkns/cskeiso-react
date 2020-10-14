import React from "react";
import "../../App.css";
import img1 from "./casting-couch-1.png";
import img2 from "./casting-couch-2.jpg";
import img3 from "./casting-couch-3.jpg";
import { getContent } from "gdocs-database";
import CastingCouchJson from "./CastingCouch.json";
import OneColumn from "../../common/OneColumn";

function CastingCouch() {
  // eslint-disable-next-line
  let loadimages = [img1, img2, img3];
  const content = getContent(CastingCouchJson);
  const props = {
    page: "work",
    content: content
  }

  return (
    <OneColumn {...props} />
  );
}

export default CastingCouch;
