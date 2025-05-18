const express = require("express"); // getting express
const router = express.Router(); // getting router from express.Router()

router.get("/", (req, res) => { // creating the default endpoint of auth router, i.e. "/mern/auth"
    const mern = {
        "name" : "iNoteBook",
        "language" : "react"
    };

    res.json(mern);
})

module.exports = router; // exporting the router variable to parent component