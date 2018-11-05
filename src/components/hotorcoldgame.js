import React from 'react';

import Header from './header';
import Navbar from './navbar';
import GuessForm from './guess-form.js';

export default function HotOrCold(props) {
  return (
      <div>
        <Navbar />
        <Header />
        <GuessForm />
      </div>
  )
}