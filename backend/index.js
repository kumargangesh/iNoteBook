const mongoose = require("mongoose")
const express = require('express')

// in above, we are importing mongoose and express 

const app = express() // getting instance of express in app variable
const port = 5000 // 5000, is the port for express server

const databaseURI = "mongodb://localhost:27017/"; // this is MongoDB's URL

mongoose.connect(databaseURI).then(() => { // this is the function to connect with MongoDB
    console.log("connected to database")
}).catch((err) => {
    console.log("error message : "+err)
});

app.get('/', (req, res) => {
  res.send('this is the very first API, built from Gangesh Kumar')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})