import React from 'react';
import './guess-form.css';

export default function GuessForm(props) {
  return (
    <div className='guess-form'>
      <div className='feedback'>Make Your Guess!</div>
      <form className='guess-input'>
        <input placeholder='Enter Your Guess'></input>
        <div className='button'><button>Guess</button></div>
        <p>Guess #<span className='guess-counter'>0</span>!</p>
      </form>
      <div className="guess-history">Guess History</div>
    </div>
  )
}