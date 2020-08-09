import React from 'react';
import { A } from 'hookrouter';
import '../App.css';
import withBorder from './with-border.jpg';

function Header() {
  return (
    <div className="header">
      <A href="/">
        <img 
          className="header-img" 
          alt="logo" 
          src={withBorder} 
          width="100%"
        />
      </A>
    </div>
  );
}

export default Header;