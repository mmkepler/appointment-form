const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

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
app.use(bodyParser.json())

//This simulates a call to a database, sending the initialState object instead
app.get('/store', (req, res) => {
  res.send(initialState);
});

//post request sends a JSON with state data to the server. From here it would be sent to the database. It sends back a response string for confirmation
app.post('/appointments', (req, res) => {
  let reqData = req.body;
  console.log('req ', req.body);
  res.send("File was sent");
});

const port = process.env.PORT || 5002;
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});