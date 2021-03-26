const { DataTypes } = require("sequelize");
const BaseTranslate = require("./Base");

const ServerGroupTranslate = BaseTranslate("ServerGroupTranslate", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = ServerGroupTranslate;
