const { DataTypes } = require("sequelize");
const BaseTranslate = require("./Base");

const AdvantageTranslate = BaseTranslate("AdvantageTranslate", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

module.exports = AdvantageTranslate;
