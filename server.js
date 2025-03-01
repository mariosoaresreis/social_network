const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });



app.get('/', (req, res)=> res.send('Hello World!!'));

const port = 5000

app.listen(port, ()=> console.log(`running on port ${port}`)) 
