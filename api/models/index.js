const User = require("./User");
const Category = require("./Category");
const Property = require("./Property");

//Category tiene muchas Propertys
//Property tiene una category

Property.belongsTo(Category);


module.exports = { User, Category, Property };
