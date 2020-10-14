import React from "react";
import "../../App.css";
import img1 from "./iphone-notes1.jpg";
import img2 from "./iphone-notes2.jpg";
import { getContent } from "gdocs-database";
import IPhoneNotesJson from "./IPhoneNotes.json";
import OneColumn from "../../common/OneColumn";

function IPhoneNotes() {
  // eslint-disable-next-line
  let loadimages = [img1, img2];
  const content = getContent(IPhoneNotesJson);
  const props = {
    page: "work",
    content: content
  }

  return (
    <OneColumn {...props} />
  );
}

export default IPhoneNotes;
