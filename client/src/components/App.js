import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { MODAL_OPEN, MODAL_CLOSE, UPDATE_FIELDS, SUBMIT, LOAD_INITIAL } from '../actions/formActions';
import axios from 'axios';


class App extends Component {
   componentDidMount() {
    axios.get('/store')
    .then(res => {
      console.log("res ", res.data);
      this.props.loadInitial(res.data);
    })
    .catch(err => console.log("err ", err))
   }
 
  render() {

    //send correct data to reducer for modal open
    const findData = (e) => {
      let tempId = e.target.id;
      console.log("experiment ", tempId);
      let tempArr = this.props.appointments;
      for(let i = 0; i < tempArr.length; i++) {
        if(tempArr[i].id === tempId){
          console.log("experiment ", tempArr[i]);
          this.props.onPress({
            id: e.target.id,
            fname: tempArr[i].fname,
            lname: tempArr[i].lname,
            phone: tempArr[i].phone
          })
        }
      }
    }

    //send correct data to reducer for form submission
    const addData = (e) => {
      //stop default form submission which resets store with this use of form
      e.preventDefault();
      let appArr = this.props.appointments;
      for(let i = 0; i < appArr.length; i++) {
        if(appArr[i].id === this.props.id){
          appArr[i].fname = this.props.fname;
          appArr[i].lname = this.props.lname;
          appArr[i].phone = this.props.phone;
          console.log("appArr ", appArr);
          let block = document.getElementById(this.props.id);
          block.parentElement.classList.add('block-taken');
          block.parentElement.classList.remove('block');
          this.props.submit(appArr)
        }
      }
    }

   console.log("props in app" , this.props);
    return (
      <div className="App">
        <header className="header">
          <h1>Today's Appointments</h1>
        </header>
        <div className='calendar'>
        <div>
          <ul>
            <li className='block' onClick={(e) => findData(e)}><p id='nine'>9:00 - 10:00 a.m.</p></li>
            <li className='block' onClick={(e) => findData(e)}><p id='ten'>10:00 - 11:00 a.m.</p></li>
            <li className='block' onClick={(e) => findData(e)}><p id='eleven'>11:00 - 12:00 p.m.</p></li>
            <li className='block' onClick={(e) => findData(e)}><p id='twelve'>12:00 - 1:00 p.m.</p></li>
            <li className='block' onClick={(e) => findData(e)}><p id='one'>1:00 - 2:00 p.m.</p></li>
            <li className='block' onClick={(e) => findData(e)}><p id='two'>2:00 - 3:00 p.m.</p></li>
            <li className='block' onClick={(e) => findData(e)}><p id='three'>3:00 - 4:00 p.m.</p></li>
            <li className='block' onClick={(e) => findData(e)}><p id='four'>4:00 - 5:00 p.m.</p></li>
          </ul>
        </div>
        </div>

        { this.props.modal_visible ? 
          <div className='modal-bg'>
            <div className='modal-body'>
            <span id='close' onClick={this.props.onClose}><button>X</button></span>
              <form onSubmit={e => addData(e)}>
                <label htmlFor='fname'>First Name:</label>
                <br></br>
                <input name="fname"  type='text' id='fname' value={this.props.fname} onChange={e => this.props.onKeyup(e)} required></input>
                <br></br>
                <label htmlFor='lname'>Last Name:</label>
                <br></br>
                <input type='text' name='lname' id='lname' value={this.props.lname} onChange={e => this.props.onKeyup(e)} required></input>
                <br></br>
                <label htmlFor='phone'>Phone:</label>
                <br></br>
                <input type='tel' name='phone' id='phone' value={this.props.phone} pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' onChange={e => this.props.onKeyup(e)} required></input>
                <br></br>
                <button className='submit-button' type='submit'>Submit</button>
              </form>
            </div>
        </div> 
      : null}

      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    modal_visible: store.appointmentsReducer.modal_visible,
    id: store.appointmentsReducer.id,
    fname: store.appointmentsReducer.fname,
    lname: store.appointmentsReducer.lname,
    phone: store.appointmentsReducer.phone,
    appointments: store.appointmentsReducer.appointments
  }
}

const mapDispatchToProps = (dispatch) => ({
  onPress: (id) => {
    dispatch({type: MODAL_OPEN, payload: id})
  },
  onClose: () => {
    dispatch({type: MODAL_CLOSE})
  },
  onKeyup: (data) => {
    dispatch({type: UPDATE_FIELDS, payload: data})
  },
  submit: (obj) => {
    dispatch({type: SUBMIT, payload: obj});
  },
  loadInitial: (data) => {
    dispatch({type: LOAD_INITIAL, payload: data});
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);