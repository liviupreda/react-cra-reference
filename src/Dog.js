import React, { Component } from 'react';
import pug from './pug.jpg';
import './Dog.css';

class Dog extends Component {
  render() {
    return (
      <div className='Dog'>
        <h1>DOG</h1>
        <img className='Dog-img' src={pug} alt='pug in tux' />
      </div>
    );
  }
}

export default Dog;
