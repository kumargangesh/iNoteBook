const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.10";

const connectToMongo =() => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to MongoDB");
    });
}

module.exports = connectToMongo;