import React from 'react';
import './App.css';

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <span>OpenApp</span>
      </div>
      <div className="header-buttons">
        <button className="deploy-button">Deploy</button>
        <button className="run-button">Run</button>
      </div>
    </div>
  );
}

export default Header;
