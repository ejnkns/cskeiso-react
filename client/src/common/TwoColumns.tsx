import React from "react";
import "../App.css";
import { TwoColumnProps } from "./propTypes";

function TwoColumns(props: TwoColumnProps) {
  return (
    <div className="two-columns">
      <div className="row">
        <div className="column">
          <h2>{props.column1}</h2>
          <props.Rows1 />
        </div>
        <div className="column">
          <h2>{props.column2}</h2>
          <props.Rows2 />
        </div>
      </div>
    </div>
  );
}

export default TwoColumns;