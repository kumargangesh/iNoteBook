// this is the MongoDB Schema for Users for our iNoteBook app

const mongoose = require("mongoose");
const {Schema} = mongoose;

const UserSchema = new Schema({  // here we are creating a new Schema for Users
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('user', UserSchema);  // here we are exporting the UserSchema module