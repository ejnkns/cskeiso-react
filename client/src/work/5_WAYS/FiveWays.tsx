import React from "react";
import "../../App.css";
import OneColumn from "../../common/OneColumn";
import { ContentObject } from "../../common/ContentTypes";
import { OneColumnProps } from "../../common/propTypes";
import { getContent } from "../../common/JsonToContent";
import FiveWaysJSON from './FiveWays.json';
import img1 from "./WAYS1.jpg";
import img2 from "./WAYS2.jpg";
import img3 from "./WAYS3.jpg";
function FiveWays() {
  const content: ContentObject[] = getContent(FiveWaysJSON);
  let props: OneColumnProps = {
    page: "work",
    content: content
  }

  // importing isn't enough, have to refence to get react to load them
  // so the static links in FiveWays.json will work. 
  //TODO: make sure this works in build
  // might have to move images to public folder?
  const imgs = [img1, img2, img3];
  return (
    <OneColumn {...props} />
  );
}
export default FiveWays;