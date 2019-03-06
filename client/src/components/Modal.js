import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

export default class Modal extends Component {
  render() {
    const {handleSubmit} = this.props;
    return (
      <div className='modal-bg'>
      
        <div className='modal-body'>
        <span id='close'><button>X</button></span>
          <form id='modal-form' onSubmit={handleSubmit}>
            <label htmlFor='fname'>First Name:</label>
            <br></br>
            
            <Field name="fname" component='input' type='text' placeholder='First Name' />
            <br></br>
            <label htmlFor='lname'>Last Name:</label>
            <br></br>
            <input type='text' name='lname' id='last-name'></input>
            <br></br>
            <label htmlFor='phone'>Phone:</label>
            <br></br>
            <input type='tel' name='phone' id='phone' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'></input>
            <br></br>
            <button className='submit-button'>Submit</button>
          </form>
        </div>
        
      </div>
    )
  }
}
