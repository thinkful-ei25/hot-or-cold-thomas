import React from 'react';

import './navbar.css';

export default function NavBar(props) {
  return (
    <nav className="navigation-bar">
      <ul>
        <li>
          <a href="#" id="what">WHAT?</a>
        </li>
        <li>
          <a href="#" id="new-game">+ NEW GAME</a>
        </li>
      </ul>
    </nav>
  );
}