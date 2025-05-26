const express = require("express"); // getting express
const router = express.Router(); // getting router from express.Router()
const User = require("../models/UserModel"); // fetching User from UserModel
const { body, validationResult } = require("express-validator");

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

      user = await User.create({ // creating an new user
        // creting an User
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      res.status(200).json({ user, message: "User created successfully" }); // sending the user,when it created successfully
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

module.exports = router; // exporting the router variable to parent component
