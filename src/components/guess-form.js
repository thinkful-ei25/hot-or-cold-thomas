import React from 'react';
import './guess-form.css';

export default function GuessForm(props) {
  return (
    <section className="guess-form">
      <div className='feedback'>Make Your Guess!</div>
      <form className='guess-input'>
        <input placeholder='Enter Your Guess'></input>
        <button>Guess</button>
        <p>Guess #0!</p>
      </form>
      <div className="guess-history">Guess History</div>
      {/* <GuessHistory /> */}
    </section>
  )
}