const express = require("express"); // getting express
const router = express.Router(); // getting router from express.Router()
const User = require("../models/UserModel");

// endpoint to create user using POST request and endpoint "/mern/auth/createuser"
router.post("/createuser", (req, res) => {
    
    const user = User(req.body);
    user.save();

    res.send("user created");
});

module.exports = router; // exporting the router variable to parent component