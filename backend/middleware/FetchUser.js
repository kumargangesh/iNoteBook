const jwt = require("jsonwebtoken");
const JWT_SECRET = "myNameIsGangeshKumar";

const fetchUser = (req, res, next) => {
    // get the user from jwt and also get its id 

    const token = req.header("auth-token"); // here we are hard-doing the token receiving after loging a user with crediantals, using header
    if (!token) {
        res.status(401).send({ Error: "Authenticate using correct token" });
    }

    try {
        const status = jwt.verify(token, JWT_SECRET); // here we are verifiing the token receiving as header and our JWT_SECRET
        req.user = status.user; // here we are assagning the user to request of suer of status
        next(); // it is the function called after this middleware
    } catch (error) {
        return res.status(400).json({ rror: "Some internal error" });
    }

}

module.exports = fetchUser;