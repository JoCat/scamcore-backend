const { DataTypes } = require("sequelize");
const BaseTranslate = require("./Base");

const ServerTranslate = BaseTranslate("ServerTranslate", {
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

module.exports = ServerTranslate;
