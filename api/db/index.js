const S = require("sequelize");

const db = new S("inmobiliariadb", null, null,{
    dialect: "postgres",
    host: "localhost",
    logging: false
});

module.exports = db;