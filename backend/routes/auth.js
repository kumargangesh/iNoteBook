const express = require("express"); // getting express
const router = express.Router(); // getting router from express.Router()
const User = require("../models/UserModel"); // fetching User from UserModel
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

const JWT_SIGN = "iNoteBook"; // this is the JWT SIGN, use to generate Token of logged user

// endpoint to create user using POST request and endpoint "/mern/auth/createuser", no login required
router.post(
  "/createuser",
  [
    body("name", "enter name size bigger than 5 characters").isLength({
      min: 5,
    }), // validation for name field
    body("email", "enter a valid email").isEmail(), // validation for email field
    body("password", "enter password size bigger than 5 characters").isLength({
      min: 5,
    }), // validation for password field
  ],
  async (req, res) => {
    const error = validationResult(req); // getting errors from validationResult
    if (!error.isEmpty()) return res.status(400).json({ error: error.array() });
    // returning status 400, with json message for errors received from errors array

    // check whether the user with email exists
    try {
      let user = await User.findOne({ email: req.body.email });

      if (user)
        return res
          .status(400)
          .json({ message: "user with this email already exists" });

      var salt = await bcrypt.genSalt(10); // this is the salt 
      var securePassword = await bcrypt.hash(req.body.password, salt); // creating a secure password, using hash function of bcrypt and passing the plain password and genaredt salt

      user = await User.create({ // creating an new user
        // creting an User
        name: req.body.name,
        email: req.body.email,
        password: securePassword,
      });

      const data = { // data object consisting of newly created user, whose id receiving from database
        user : {
          id : user.id
        }
      };

      const authToken = jwt.sign(data, JWT_SIGN); // generating the token, to pass reather the whole user

      res.status(200).json({ authToken, message: "User created successfully" }); // sending the user,when it created successfully
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// endpoint to login user using POST request and endpoint "/mern/auth/login", no login required

router.post("/login", [
  body("email", "enter a valid email").isEmail(),
  body("password", "password length should be grater than 5").isLength({min : 5})
], async(req, res) => {
  const error = validationResult(req); // getting errors from validationResult
    if (!error.isEmpty()) return res.status(400).json({ error: error.array() });
    // returning status 400, with json message for errors received from errors array

    try{
      
      const { email, password } = req.body; // destructuring user's email and password from req.body
      
      const user = await User.findOne({email});
      if(!user){
        res.status(400).json({ message : "Login with correct credintials" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password); // comparing the stored user's password and entred user password
      if(!passwordCompare){
        res.status(400).json({ message : "Login with correct credintials" });
      }

      const data = { // data object consisting of newly created user, whose id receiving from database
        user : {
          id : user.id
        }
      };

      const authToken = jwt.sign(data, JWT_SIGN); // generating the token, to pass reather the whole user

      res.status(200).json({ authToken, message: "User found successfully" }); // sending the authToken, when it found successfully

    }catch(error){
      res.status(500).json({ error : error.message });
    }
});

module.exports = router; // exporting the router variable to parent component 
