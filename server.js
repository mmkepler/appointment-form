const express = require("express");
const app = express();
const path = require('path');
import axios from 'axios';

app.use(express.static(path.join(__dirname, "client","build")));


/* If this was a fully functioning app these items would be included

a way to recieve post data from the front end to send to the database

a way to retrieve data from the database and send it to the front end

There would also be models for the data

*/

const port = process.env.PORT || 5002;
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});