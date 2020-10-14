import React from "react";
import "../../App.css";
import img1 from "./scripts1.jpg";
import img2 from "./film1.jpg";
import img3 from "./LF-edit.jpg";
import img4 from "./LFINSTALL2.jpg";
import img5 from "./21_edited.jpg";
import img6 from "./36_edited.jpg";
import img7 from "./45_edited.jpg";
import img8 from "./47_edited.jpg";
import img9 from "./48_edited.jpg";
import { getContent } from "gdocs-database";
import LoveFascismJson from "./LoveFascism.json";
import OneColumn from "../../common/OneColumn";

function LoveFascism() {
  // eslint-disable-next-line
  let loadimages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const content = getContent(LoveFascismJson);
  const props = {
    page: "work",
    content: content
  }

  return (
    <OneColumn {...props} />
  );
}

export default LoveFascism;
