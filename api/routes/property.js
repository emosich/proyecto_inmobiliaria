const express = require("express");
const Sequelize = require("sequelize");
const Property = require("../models/Property");
const router = express.Router();


//ruta vista admin todas las propiedades
router.get("/admprops", (req, res) => {
  Property.findAll().then((props) => {
    res.send(props);
    });
  });

//ruta para traer 1 sola propiedad
router.get("/singleproperty/:id", (req, res) => {
  const { id } = req.params;
  Property.findByPk(id)
  .then((property) =>
    res.send(property))
})


module.exports = router;