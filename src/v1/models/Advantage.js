const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/DBHelper");

const Advantage = sequelize.define("Advantage", {
    page: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

const AdvantageTranslate = require("./translate/Advantage");

Advantage.hasMany(AdvantageTranslate);

module.exports = Advantage;
