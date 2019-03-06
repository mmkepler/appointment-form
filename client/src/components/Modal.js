import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
    return (
      <div className='modal-bg'>
        <div className='modal-body'>
          <label>First Name:</label>
          <br></br>
          <input></input>
          <br></br>
          <label>Last Name:</label>
          <br></br>
          <input></input>
          <br></br>
          <label>Phone:</label>
          <br></br>
          <input></input>
        </div>
        
      </div>
    )
  }
}
