const express = require("express");
const router = express.Router();
const user = require("./user");
const property = require("./property");


router.use("/user", user);
router.use("/property", property);



module.exports = router;