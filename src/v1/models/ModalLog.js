const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/DBHelper");

const ModalLog = sequelize.define(
    "ModalLog",
    {
        page: {
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

module.exports = ModalLog;
