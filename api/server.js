const express = require('express')
const app = express()
const sequelize = require("./db")
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use("/", routes);

sequelize.sync({force : false}).then(() => {
  app.listen(3001, () => {
      console.log("servidor corriendo");
  })
})