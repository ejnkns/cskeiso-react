import React from "react";
import "../../App.css";
import OneColumn from "../../common/OneColumn";
import img1 from "./Act4_1.jpg";
import img2 from "./Act4_2.jpg";
import img3 from "./Act4_3.jpg";
import ActFourPDF from "./act4.pdf";
import { ContentObject } from "gdocs-database";
import { OneColumnProps } from "../../common/propTypes";
import { getContent } from "gdocs-database";
import ActFourJSON from "./ActFour.json";

function ActFour() {
  const content: ContentObject[] = getContent(ActFourJSON);
  let props: OneColumnProps = {
    page: "work",
    content: content
  }
  // importing isn't enough, have to refence to get react to load them
  // so the links in FiveWays.json will work. 
  //TODO make sure this works in build
  // might have to move images to public folder?
  // eslint-disable-next-line
  const resources = [img1, img2, img3, ActFourPDF];
  return (
    <OneColumn {...props} />
  );
}

export default ActFour;
