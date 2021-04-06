const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/DBHelper");

const OtherOffer = sequelize.define("OtherOffer", {
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

const OtherOfferTranslate = require("./translate/OtherOffer");

OtherOffer.hasMany(OtherOfferTranslate);

module.exports = OtherOffer;
