const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/DBHelper");

const GameHost = sequelize.define("GameHost");

const GameHostTranslate = require("./translate/GameHost");

GameHost.hasMany(GameHostTranslate);

module.exports = GameHost;
