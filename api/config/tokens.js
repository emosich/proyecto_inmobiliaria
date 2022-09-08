const jwt = require("jsonwebtoken");
const SECRET = "milanesa"


const generateToken = (payload) => {
    const token = jwt.sign(payload, SECRET, { expiresIn: "2d" });
    return token;
}

const validateToken = () => {}





module.exports = { generateToken, validateToken };