import React from "react";
import "../../App.css";
import img1 from "./WAYS1.jpg";
import img2 from "./WAYS2.jpg";
import img3 from "./WAYS3.jpg";
import OneColumn from "../../common/OneColumn";
import { ContentObject, ContentTypes, Link, OneColumnProps, Para } from "../../common/propTypes";


function FiveWays() {
  let content: ContentObject[] = getContent();
  let props: OneColumnProps = {
    page: "work",
    content: content
  }
  return (
    <OneColumn {...props} />
  );
}


function getContent(): ContentObject[] {
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
  /*
  foreach(e of api.getContent("FiveWays")) {
    content.push(new ContentObject(e));
  }
  */
  content[0] = new ContentObject(ContentTypes.Para, new Para(paraContent)); 
  content[1] = new ContentObject(ContentTypes.Video, "https://vimeo.com/440788546");
  content[2] = new ContentObject(ContentTypes.Break, "");
  content[3] = new ContentObject(ContentTypes.Image, img1)
  content[4] = new ContentObject(ContentTypes.Image, img2)
  content[5] = new ContentObject(ContentTypes.Image, img3)
  return (content);
}
export default FiveWays;