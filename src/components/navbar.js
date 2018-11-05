import React from 'react';

import './navbar.css';

export default function NavBar(props) {
  return (
    <nav className="navigation-bar">
      <ul>
        <li id="what">WHAT?</li>
        <li id="new-game">+ NEW GAME</li>
      </ul>
    </nav>
  );
}