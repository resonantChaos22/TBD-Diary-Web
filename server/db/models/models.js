const db = {};
const sequelize = require("../db").sequelize;
const DataTypes = require("../db").Sequelize;
db.sequelize = sequelize;

//User Management
db.users = require("./user_management/user").User;

module.exports = db;
