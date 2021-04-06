const { DataTypes } = require("sequelize");
const BaseTranslate = require("./Base");

const OtherOfferTranslate = BaseTranslate("OtherOfferTranslate", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    list: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = OtherOfferTranslate;
