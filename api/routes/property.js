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



module.exports = router;