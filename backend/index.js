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

app.use(express.json()) // middleware to ready values from body of request

// available routes 

app.use("/mern/auth", require("./routes/auth")); // this is the parent endpoint for authentication related routes
app.use("/mern/notes", require("./routes/notes")); // this is the parent endpoint for notes related routes

app.listen(port, () => {
  console.log(`iNoteBook app listening on port ${port}`)
})