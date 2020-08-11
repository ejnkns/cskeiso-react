import React from "react";
import { A } from "hookrouter";
import "../App.css";
import CV from "./CARMENKEISO_CV_28_07_2020.pdf";

function Menu(props) {
  function isSelected(page) {
    if (page === props.page) {
      return "i";
    } else {
      return "opaque";
    }
  }

  return (
    <div className="menu">
      <div>
        <div className="home-table home-below">
          <span>
            <A className={isSelected("work")} href="/work">
              {" "}
              WORK
            </A>
          </span>
          <span>
            <A className={isSelected("text")} href="/text">
              TEXT
            </A>
          </span>
          <span>
            <A className={isSelected("audio")} href="/audio">
              {" "}
              AUDIO
            </A>
          </span>
          <a
            className="opaque"
            target="_blank"
            rel="noopener noreferrer"
            href={CV}
          >
            CV
          </a>
        </div>
        <A
          className={"home-below right " + isSelected("readtheroom")}
          href="./READTHEROOM"
        >
          {" "}
          READTHEROOM
        </A>
      </div>
    </div>
  );
}

export default Menu;
