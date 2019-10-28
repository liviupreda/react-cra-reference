import React, { Component } from 'react';
import Dog from './Dog';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Dog />
        <div className='App-outside'>DIV OUTSIDE DOG COMPONENT</div>
      </div>
    );
  }
}

export default App;
