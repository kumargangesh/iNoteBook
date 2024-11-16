// this is the MongoDB Schema for Notes for our iNoteBook app

const mongoose = require("mongoose");
const {Schema} = mongoose;

const NotesSchema = new Schema({ // here we are creating a new Schema for Notes
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('notes', NotesSchema); // here we are exporting the NotesSchema module