import React from "react";
import { A } from "hookrouter";
import "../App.css";
import Menu from "./Menu";
import withBorder from "./with-border.jpg";

function Header({ page }) {
  return (
    <div>
      <Menu page={page} />
      <div className="header">
        <A href="/">
          <img rel="preload" className="header-img yellow-shadow" alt="logo" src={withBorder} />
        </A>
      </div>
    </div>
  );
}

export default Header;
