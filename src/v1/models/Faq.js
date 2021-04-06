const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/DBHelper");

const Faq = sequelize.define("Faq", {
    page: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

const FaqTranslate = require("./translate/Faq");

Faq.hasMany(FaqTranslate);

module.exports = Faq;
