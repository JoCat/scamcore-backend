const { DataTypes } = require('sequelize')
const sequelize = require('../helpers/DBHelper')

const Server = sequelize.define('Server', {
    type: {
        type: DataTypes.ENUM('vds', 'dedicated', 'not-install'),
        allowNull: false
    },
    priceRu: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    priceUa: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    priceEn: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    cpu: DataTypes.STRING,
    ram: DataTypes.STRING,
    storage: DataTypes.STRING,
    traffic: DataTypes.STRING,
    ddos: DataTypes.STRING,
    geekbench: DataTypes.INTEGER.UNSIGNED,
    geekbenchMultithread: DataTypes.INTEGER.UNSIGNED,
})

module.exports = Server