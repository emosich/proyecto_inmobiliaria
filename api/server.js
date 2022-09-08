const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const db = require("./db");
const routes = require("./routes");
const models = require("./models");
const cors = require("cors");



app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());


app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api", routes);

app.get('/', function (req, res) {
  res.send('Hello World')
})

db.sync({force : false}).then(() => {
  app.listen(3001, () => {
      console.log("servidor corriendo en el puerto 3001"); 
  })
})