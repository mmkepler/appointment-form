import React, { Component } from 'react';
import './App.css';
import AppointmentForm from './Modal';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal_visible: false,
      current: null,
      current_data: null,
      appointments: [
        {id: 'nine'},
        {id: 'ten'},
        {id: 'eleven'},
        {id: 'twelve'},
        {id: 'one'},
        {id: 'two'},
        {id: 'three'},
        {id: 'four'}
      ]
    }
    this.setNewEntry = this.setNewEntry.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    /* For now this is not working
    let temp = this.state.appointments;
    for(let i = 0; i < temp.lenth; i++) {
      if(temp.fname){
        let index = temp.id;
        document.getElementById(index).parentNode.className = "block-taken";
      }
    }*/
  }
//Pass the id of the block to the modal window
 close = () => {
  this.setState({
    modal_visible: false,
    current: null
  });
 }
  
 onPress = (e) => {
  e.preventDefault();
  //console.log(e.target.id);
  let tempNum = e.target.id;
  //console.log("tempNum : ", tempNum);
  let arr = this.state.appointments;
  for(let i = 0; i < arr.length; i++) {
    //console.log("inside for: ", arr[i].id);
    if(tempNum === arr[i].id) {
      //console.log("Ha");
      this.setState({
        current_data: arr[i],
        modal_visible: true,
        current: e.target.id
      });
    }
  }
 }


  setNewEntry = (data) => {
    
    //console.log("data ", data);
    let index = data.id;
    //console.log("index : ", index);
    let appArr = this.state.appointments;
    for(var i = 0; i < appArr.length; i++) {
      let temp = appArr[i].id;
      //console.log("appArr ", temp, index);
      if(temp === index){
        appArr[i] = data;
        document.getElementById(index).parentNode.className = "block-taken";
        this.setState({
          appointments: appArr,
          current: null,
          modal_visible: false
        });
        } 
        //console.log("try : ", this .state);
      }
    }
 
  render() {
    
    return (
      <div className="App">
        <header className="header">
          <h1>Today's Appointments</h1>
        </header>
        <div className='calendar'>
        <div>
          <ul>
            <li className="block" onClick={this.onPress}><p id='nine'>9 a.m.</p></li>
            <li className='block' onClick={this.onPress}><p id='ten'>10 a.m.</p></li>
            <li className='block' onClick={this.onPress}><p id='eleven'>11 a.m.</p></li>
            <li className='block' onClick={this.onPress}><p id='twelve'>12 p.m.</p></li>
            <li className='block' onClick={this.onPress}><p id='one'>1 p.m.</p></li>
            <li className='block' onClick={this.onPress}><p id='two'>2 p.m.</p></li>
            <li className='block' onClick={this.onPress}><p id='three'>3 p.m.</p></li>
            <li className='block' onClick={this.onPress}><p id='four'>4 p.m.</p></li>
          </ul>
        </div>
      </div>
      { this.state.modal_visible ? <AppointmentForm entry={this.state.current_data} idnum={this.state.current} returndata={this.setNewEntry} clickClose={this.close}/> : null}
        
      </div>
    );
  }
}

export default App;
