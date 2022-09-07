const S = require("sequelize");
const db = require("../db");

class User extends S.Model {}


User.init({
    name: {
        type: S.STRING,
        allowNull: false,
    },

    lastname: {
        type: S.STRING,
        allowNull: false,
    },

    email: {
        type: S.STRING,
        validate: { isEmail: true },
        unique: true,
        allowNull: false,
    },

    is_admin: {
        type: S.BOOLEAN,
        defaultValue: false,
    },

    password: {
        type: S.STRING,
        allowNull: false,
    },
  
    salt: {
        type: S.STRING,
    },


}, {sequelize: db, modelName: "user"});

module.exports = User;
