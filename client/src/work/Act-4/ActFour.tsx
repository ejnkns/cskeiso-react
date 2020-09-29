import React from "react";
import "../../App.css";
import OneColumn from "../../common/OneColumn";
import img1 from "./Act4_1.jpg";
import img2 from "./Act4_2.jpg";
import img3 from "./Act4_3.jpg";
import ActFourPDF from "./act4.pdf";
import { ContentObject } from "../../common/ContentTypes";
import { OneColumnProps } from "../../common/propTypes";
import { getContent } from "../../common/JsonToContent";
import ActFourJSON from "./ActFour.json";

function ActFour() {
  let content: ContentObject[] = getContent(ActFourJSON);
  let props: OneColumnProps = {
    page: "work",
    content: content
  }
  // importing isn't enough, have to refence to get react to load them
  // so the links in FiveWays.json will work. 
  //TODO make sure this works in build
  // might have to move images to public folder?
  const resources = [img1, img2, img3, ActFourPDF];
  return (
    <OneColumn {...props} />
  );
}

/*
function getContentManual() {
  let content: ContentObject[] = [];
  let paraContent: (string | Link)[] = [
    new Link(
      ActFourPDF,
      "Act Four: Fragments"
    ),
      "\n\r",
      "PDF"
  ];
  // I want to do something like:
 //foreach(e of api.getContent("FiveWays")) {
  //  content.push(new ContentObject(e));
  //}
  content[0] = new ContentObject(ContentTypes.Para, new Para(paraContent)); 
  content[1] = new ContentObject(ContentTypes.Image, img1)
  content[2] = new ContentObject(ContentTypes.Image, img2)
  content[3] = new ContentObject(ContentTypes.Image, img3)
  console.log(JSON.stringify(content));
}
*/

export default ActFour;
