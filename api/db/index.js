const S = require("sequelize");

const sequelize = new S("inmobiliariadb", null, null,{
    dialect: "postgres",
    host: "localhost",
    logging: false
});

module.exports = sequelize;