import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';
import Navbar from './components/navbar';
import HotOrCold from './components/hotorcoldgame';


ReactDOM.render(
  <HotOrCold />,
  document.getElementById('root')
);

