import React from "react";
import "../App.css";

function Footer() {
  // repo https://github.com/cskeiso/cskeiso.github.io created dec 8 2018
  return (
    <div className="footer">
      &copy; 2018 - {(new Date().getFullYear())} Carmen-Sibha Keiso<br/>
      Website created by
      <a target="_blank" rel="noopener noreferrer" href="https://ejnkns.com">
        &nbsp;Elliot Jenkins
      </a>
    </div>
  );
}

export default Footer;
