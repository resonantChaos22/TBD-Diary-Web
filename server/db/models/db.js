const { Sequelize, DataTypes } = require("sequelize");

const db = {};

// The cache configuration
var Redis = require("ioredis");
db.cache = Redis;

db.Sequelize = Sequelize;
db.Op = Sequelize.Op;
db.sequelize = require("../db");
db.models = require("./models");

// db.models.users.belongsToMany(db.models.jobs, { through: "job_applications" });
// db.models.jobs.belongsToMany(db.models.users, { through: "job_applications" });

module.exports = db;
