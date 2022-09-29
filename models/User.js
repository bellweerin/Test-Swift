const { Model, DataTypes,QueryTypes } = require('sequelize');
const { setSequelize } = require("../database/index");

let sequelize = setSequelize()

class User extends Model{
   
}

User.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey:true },
        username: DataTypes.CHAR,
        password: DataTypes.CHAR,
        approve: DataTypes.BOOLEAN
    },
    {
        sequelize: sequelize,
        modelName: 'user',
        tableName: 'user',
        timestamps: false,
        // createdAt:'created_at'
    }
)

module.exports = User;