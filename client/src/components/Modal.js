import React, { Component } from 'react';

export default class Modal extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: null,
      fname: null,
      lname: null,
      phone: null
    }
  }
  
  componentDidMount() {
    //console.log("this ", this.props.entry);
    if(this.props.entry.fname){
      //console.log("trying ", this.props.entry.fname )
      document.getElementById('fname').value = this.props.entry.fname;
      document.getElementById('lname').value = this.props.entry.lname;
      document.getElementById('phone').value = this.props.entry.phone;
      this.setState({
        id: this.props.entry.id,
        fname: this.props.entry.fname,
        lname: this.props.entry.lname,
        phone: this.props.entry.phone
      });

    } else {
      //console.log("it doesn't ");
      return false;
    }
  }
  

  
  close = (e) => {
    e.preventDefault();
    //console.log("tryna close");
    this.props.clickClose();
  }

    handleChange = (e) => {
      this.setState({
        id: this.props.idnum,
        [e.target.id]: e.target.value
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      let entry = {
        id: this.state.id,
        fname: this.state.fname,
        lname: this.state.lname,
        phone: this.state.phone
      }
      //console.log("state in handle submit", this.state);
      //console.log("entry in handle submit", entry);
      
      this.props.returndata(entry)

    }

    
  
  render() {
    const {handleSubmit, handleChange, close} = this.props;
    return (
      <div className='modal-bg'>
      
        <div className='modal-body'>
        <span id='close'onClick={this.props.clickClose}><button>X</button></span>
          <form id='modal-form' onSubmit={this.handleSubmit}>
            <label htmlFor='fname'>First Name:</label>
            <br></br>
            
            <input name="fname"  type='text' id='fname' onChange={this.handleChange} required></input>
            <br></br>
            <label htmlFor='lname'>Last Name:</label>
            <br></br>
            <input type='text' name='lname' id='lname' onChange={this.handleChange} required></input>
            <br></br>
            <label htmlFor='phone'>Phone:</label>
            <br></br>
            <input type='tel' name='phone' id='phone' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' onChange={this.handleChange} required></input>
            <br></br>
            <button className='submit-button'>Submit</button>
          </form>
        </div>
        
      </div>
    )
  }
}
