const connectToMongoDB = require("./db");
const express = require('express')

connectToMongoDB();

const app = express()
const port = 5000 // 5000 portNumber for Express server

app.use(express.json()); // this is a middleware, and this is written here to access req.body 

// Available Routes

app.use("/notes", require("./routes/notes"));
app.use("/auth", require("./routes/auth"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})