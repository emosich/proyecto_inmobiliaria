const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { generateToken } = require("../config/tokens");
const { validatePassword } = require("../models/User");

//ruta para registrarse
router.post("/register", (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => console.log(err));
});

//ruta para logearse
router.post("/login", (req, res) => {
    const { email, password } = req.body;
  
    User.findOne({ where: { email } }).then((user) => {
      if (!user) return res.sendStatus(401);
      user.validatePassword(password).then((isValid) => {
        if (!isValid) return res.sendStatus(401);
  
        const payload = {
          email: user.email,
          name: user.name,
          lastname: user.lastname,
        };
  
        const token = generateToken(payload);
  
        res.cookie("token", token);
  
        res.send(payload);
      });
    });
  });

//ruta para desloguearse
router.post("/logout", (req, res) => {
    res.clearCookie("token");
  
    res.sendStatus(204);
  });

module.exports = router;
