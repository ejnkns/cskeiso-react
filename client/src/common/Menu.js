import React from "react";
import { A } from "hookrouter";
import "../App.css";
import CV from "./CARMENKEISO_CV_06_09_2020.pdf"

function Menu({ page }) {
  function isSelected(selectedPage) {
    if (selectedPage === page) {
      return "u b";
    } else {
      return "opaque";
    }
  }

  return (
    <div className="menu">
      <span>
        <A className={isSelected("work")} href="/work">
          Work
        </A>
      </span>
      <span>
        <A className={isSelected("text")} href="/text">
          Text
        </A>
      </span>
      <span>
        <A className={isSelected("audio")} href="/audio">
          Audio
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
      <A
        className={isSelected("readtheroom")}
        href="./READTHEROOM"
      >
        ReadtheRoom
        </A>
    </div>
  );
}

export default Menu;