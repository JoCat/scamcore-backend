const { DataTypes } = require("sequelize");
const sequelize = require("../../helpers/DBHelper");

const BaseTranslate = (modelName, attributes) => {
    return sequelize.define(
        modelName,
        Object.assign(
            {
                lang: {
                    type: DataTypes.ENUM("ru", "en", "ua"),
                    allowNull: false,
                },
            },
            attributes
        )
    );
};

module.exports = BaseTranslate;
