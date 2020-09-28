import React from "react";
import { useEffect, useState } from "react";
import "../../App.css";
import OneColumn from "../../common/OneColumn";
import { ContentObject, ContentTypes, Link, OneColumnProps, Para } from "../../common/propTypes";
import { getContent } from "../../common/JsonToContent";
import FiveWaysJSON from './FiveWays.json';
import img1 from "./WAYS1.jpg";
import img2 from "./WAYS2.jpg";
import img3 from "./WAYS3.jpg";
function FiveWays() {
  let content: ContentObject[] = getContent(FiveWaysJSON);
  let props: OneColumnProps = {
    page: "work",
    content: content
  }

  // importing isn't enough, have to refence to get react to load them
  // so the links in FiveWays.json will work. 
  //TODO make sure this works in build
  // might have to move images to public folder?
  const imgs = [img1, img2, img3];
  return (
    <OneColumn {...props} />
  );
}


/*
function getContentManual(): ContentObject[] {
  let content: ContentObject[] = [];
  let paraContent: (string | Link)[] = [
    `'5 Ways’: Street Theatre performance completed for a commission by the Faculty of Music and Fine Arts,
      at The University of Melbourne. It was exhibited as part of the First Commissions showcase at the Martin
      Myer Arena and for the Keith &amp; Elisabeth Murdoch Travelling Fellowship exhibition at The Margaret
      Lawrence Gallery. As seen in two parts on the`
    , new Link(
      "https://firstcommissions.com.au/titanic/carmen-sibha-keiso#response",
      "firstcommissions.com.au"
    ),
      "online gallery, where the video-document and action-transcript are available."
  ];
  // I want to do something like:
 //foreach(e of api.getContent("FiveWays")) {
  //  content.push(new ContentObject(e));
  //}
  content[0] = new ContentObject(ContentTypes.Para, new Para(paraContent)); 
  content[1] = new ContentObject(ContentTypes.Video, "https://vimeo.com/440788546");
  content[2] = new ContentObject(ContentTypes.Break, "");
  content[3] = new ContentObject(ContentTypes.Image, img1)
  content[4] = new ContentObject(ContentTypes.Image, img2)
  content[5] = new ContentObject(ContentTypes.Image, img3)
  //console.log(JSON.stringify(content));
  return (content);
}
*/
export default FiveWays;