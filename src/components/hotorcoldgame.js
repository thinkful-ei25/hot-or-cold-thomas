import React from 'react';

import Header from './header';
import Navbar from './navbar';
import GuessForm from './guess-form.js';

export default function HotOrCold(props) {
  return (
    // <React.fragment>
      <div>
        <Navbar />
        <Header />
        <GuessForm />
      </div>
    // </React.fragment>
  )
}