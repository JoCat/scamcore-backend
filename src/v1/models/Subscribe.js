const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/DBHelper");

const Subscribe = sequelize.define(
    "Subscribe",
    {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        code: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: true,
        updatedAt: false,
    }
);

module.exports = Subscribe;
