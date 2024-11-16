const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const obj = {
        name : "Gangesh",
        age : 21
    };
    res.json(obj);
});

module.exports = router;