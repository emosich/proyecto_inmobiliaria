const S = require("sequelize");
const db = require("../db");

class Property extends S.Model {}


Property.init({
    name: {
        type: S.STRING,
        allowNull: false,
    },

    price: {
        type: S.INTEGER,
        allowNull: false,
    },

    description: {
        type: S.TEXT,
    },

    images: {
        type: S.STRING,
    },

    availability: {
        type: S.TEXT,
        allowNull: false,
    },

    type: {
        type: S.TEXT,
        allowNull: false,
    },

    address: {
        type: S.TEXT
    },

    location: {
        type: S.TEXT
    },

}, {sequelize: db, modelName: "property"});

module.exports = Property;