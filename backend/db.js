// this is the file for DataBase connectivity from Mongodb

// this file db.js will return the connected instance of the mongodb

const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/iNoteBook?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.10";

const connectToMongoDB =() => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to MongoDB, Successfully");
    });
}  // function which is connecting to MongoDB and having a call back function which returns acknowledgement

module.exports = connectToMongoDB;