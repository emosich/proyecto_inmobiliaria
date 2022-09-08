const S = require("sequelize");
const bcrypt = require("bcrypt");
const db = require("../db");

class User extends S.Model {

    hash(password, salt){
        return bcrypt.hash(password, salt)
    }

    validatePassword (password) {
        
        return this.hash(password, this.salt)
            .then(newHash => newHash === this.password )
    
    }

}


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

User.beforeCreate((user) => {
    const salt = bcrypt.genSaltSync();

    user.salt = salt;
 
    return user.hash(user.password, salt).then(hash => {
        user.password = hash
    });
});

module.exports = User;
