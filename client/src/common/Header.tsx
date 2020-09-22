import React from "react";
import { A } from "hookrouter";
import "../App.css";
import Menu from "./Menu";
import withBorder from "./with-border.jpg";
import { PageProps } from "./propTypes";


function Header(props: PageProps) {
  return (
    <div>
      <Menu page={props.page} />
      <div className="header">
        <A href="/">
          <img className="header-img yellow-shadow" alt="logo" src={withBorder} />
        </A>
      </div>
    </div>
  );
}

export default Header;
