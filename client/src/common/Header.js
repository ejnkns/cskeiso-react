import React from 'react';
import { A } from 'hookrouter';
import '../App.css';
import withBorder from './with-border.jpg';

function Header() {
  return (
    <div className="header">
        <A href="/">
          <img 
            rel="preload"
            className="header-img" 
            alt="logo" 
            src={withBorder} 
          />
        </A>
    </div>
  );
}

export default Header;