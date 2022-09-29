const Mysql = require("mysql2")
const Sequelize = require("sequelize")
const dotenv = require("dotenv")
dotenv.config()

let sequelize

function createPool() {
    let mysql_connect = Mysql.createPool({
        password: process.env.DATABASE_PASSWORD,
        user: process.env.DATABASE_USER,
        database: process.env.DATABASE_NAME,
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        
    })

    mysql_connect.getConnection((err) => {
        if (!err) console.log("DB connection success");
        else console.log("DB connect fail", err);

    });
    
    createSequelize()

    
}

function createSequelize() {
    sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER,process.env.DATABASE_PASSWORD,
        {
            host: process.env.DATABASE_HOST,
            dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
            logging : false 
        })
}

function setSequelize() {
    if (sequelize){
        return sequelize
    }else{
        createPool()
        return sequelize
    }
}

module.exports = {createPool,createSequelize,setSequelize}