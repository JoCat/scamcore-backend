const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/DBHelper");

const Feedback = sequelize.define(
    "Feedback",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true,
        updatedAt: false,
    }
);

module.exports = Feedback;
