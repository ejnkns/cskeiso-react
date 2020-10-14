import React from "react";
import "../../App.css";
import { ContentObject } from "../../common/ContentTypes";
import { OneColumnProps } from "../../common/propTypes";
import { getContent } from "gdocs-database";
import OneColumn from "../../common/OneColumn";
import BangBangJson from "./BangBang.json";

function BangBang() {
  const content: ContentObject[] = getContent(BangBangJson);
  let props: OneColumnProps = {
    page: "work",
    content: content
  }
  return (
    <OneColumn {...props} />
  );
}

export default BangBang;
