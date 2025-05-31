const express = require("express"); // getting express
const router = express.Router(); // getting router from express.Router()
const FetchUser = require("../middleware/FetchUser");
const Notes = require("../models/NotesModel");
const {body, validationResult} = require("express-validator");

// ROUTE 1. to fetch all notes of logged user using "/mern/notes/fetchallnotes" using GET request and Login required

router.get("/fetchAllNotes", FetchUser, async(req, res) => {  
    const notes = await Notes.find({ user : req.user.id });
    res.status(200).send({notes});
});

// ROUTE 2. to add a new note using "/mern/notes/addNote" using POST request and Login required

router.post("/addNote", FetchUser, [
    body("title").isLength({ min : 1 }),
    body("description").isLength({ min : 1 })
], async(req, res) => {
    const error = validationResult(req); // getting errors from validationResult
    if (!error.isEmpty()) return res.status(400).json({ error: error.array() });
    // returning status 400, with json message for errors received from errors array

    // check whether the user with email exists

    const { title, description } = req.body;

    try{
        const note = new Notes({ // creating a new note of a logged in user
            title, description, user : req.user.id // here user is the id of logged in User, getting from FetchUser, which is the middleware function
        });

        const savedNote = await note.save();

        res.status(200).json({savedNote});
    }catch(error){
        res.status(500).send({ error : error.message})
    }
});

module.exports = router; // exporting the router variable to parent component