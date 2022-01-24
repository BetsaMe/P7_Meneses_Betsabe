const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class User extends Model {}
User.init({     
    firstName:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len:{
                args:[2, 10],
                msg:"le prénom doit comporter entre 2 et 10 caractères"
            }
        }
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len:{
                args:[2, 10],
                msg:"le nom doit comporter entre 2 et 10 caractères"
            }
        }
    },    
    email:{
        type: DataTypes.STRING,
        isEmail: true, 
        unique: true,
        validate:{
            isEmail:{
                msg:"veuillez entrer une adresse email valide"
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "user"
});

module.exports = User;

