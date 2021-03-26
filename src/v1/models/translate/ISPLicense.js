const { DataTypes } = require("sequelize");
const BaseTranslate = require("./Base");

const ISPLicenseTranslate = BaseTranslate("IspLicenseTranslate", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

module.exports = ISPLicenseTranslate;
