const { DataTypes } = require("sequelize");
const BaseTranslate = require("./Base");

const FaqTranslate = BaseTranslate("FaqTranslate", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    button: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = FaqTranslate;
