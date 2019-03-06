import React, { Component } from 'react';
import './App.css';
import Calendar from './Calendar';
import Modal from './Modal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Today's Appointments</h1>
        </header>
        <Modal />
      </div>
    );
  }
}

export default App;
