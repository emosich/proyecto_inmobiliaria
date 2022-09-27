const express = require("express");
const Sequelize = require("sequelize");
const User = require("../models/User.js");
const router = express.Router();
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

//ruta vista admin todos los usuarios
router.get("/admusers", (req, res) => {
  User.findAll().then((users) => {
    res.send(users);
  });
});

//ruta para ver el detalle de un usuario
router.get("/edituser/:id", (req, res) => {
  User.findByPk(req.params.id)
  .then((user) =>
    res.send(user))
});

//ruta para editar un usuario
router.put("/edituser/:id", (req, res) => {
  const { id } = req.params;

   User.update(
    req.body,
    { where: {id:id} }
  ).then((data)=>{
    res.status(200).send(data);
  }); 
});

//ruta para eliminar un usuario
router.delete("/edituser/:id", (req, res) => {
  User.destroy({
    where: {id: req.params.id },
  }).then(() => {
    res.sendStatus(202);
  })
  .catch((err) => console.log(err));
})



module.exports = router;
