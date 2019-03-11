const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

const initialState = {
  modal_visible: false,
  id: '',
  fname: '',
  lname: '',
  phone: '',
  appointments: [
    {
      id: 'nine',
      fname: '',
      lname: '',
      phone: ''
    },
    {
      id: 'ten',
      fname: '',
      lname: '',
      phone: ''
    },
    {
      id: 'eleven',
      fname: '',
      lname: '',
      phone: ''
    },
    {
      id: 'twelve',
      fname: '',
      lname: '',
      phone: ''
    },
    {
      id: 'one',
      fname: '',
      lname: '',
      phone: ''
    },
    {
      id: 'two',
      fname: '',
      lname: '',
      phone: ''
    },
    {
      id: 'three',
      fname: '',
      lname: '',
      phone: ''
    },
    {
      id: 'four',
      fname: '',
      lname: '',
      phone: ''
    }
  ]
};


app.use(express.static(path.join(__dirname, 'client/build')));

//This simulates a call to a database, sending the initialState object instead
app.get('/store', (req, res) => {
  res.send(initialState);
});

const port = process.env.PORT || 5002;
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});