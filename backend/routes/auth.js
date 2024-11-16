const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator"); // we are using express-validator for validating our input fields
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "myNameIsGangeshKumar";

// API for creating a new user, using : POST request and URL : /auth/createUser

router.post("/createUser", [
    body("name", "Enter a valid name").isLength({ min: 5 }), // for validating name
    body("email", "Enter a valid email").isEmail(), // for validating email
    body("password", "Enter a password greater than 5 characters").isLength({ min: 5 }) // for validating password
], async (req, res) => {

    // if any error occours, then return bad request and the error

    const errors = validationResult(req); // here the errors, which will generated received
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // check whether the User with Email already exists

    try {
        let user = await User.findOne({ email: req.body.email });  // here we are checking whether the user with entered email is already exists or not

        if (user) { // in this if user already exists, we will return the status cofde 400 with message that user already exists
            return res.status(400).json({ Error: "User with this email, already exists" });
        }

        const salt = await bcrypt.genSalt(10); // this is salt for some more security and here, it is having a size of 10
        const securePassword = await bcrypt.hash(req.body.password, salt); //  in this, we are creating a secirePassword variable in which we are storing the hash of password field returing by hash()

        user = await User.create({ // here we are finally creating a new user
            name: req.body.name,
            email: req.body.email,
            password: securePassword
        });

        const data = { // this is data object, in this there is logged in user ID stored
            user : {
                id : user.id
            }
        };

        const authToken = await jwt.sign(data, JWT_SECRET); // authToken is constant holding authToken created by jsonwebtoken 

        res.json({ 
            Message: "User created successfully",
            authToken
        }); // after finally we are returing message that user created successfully
    } catch (error) {
        return res.status(500).json({ Error: error.message });
    }
});

module.exports = router;