const { DataTypes } = require('sequelize')
const sequelize = require('../helpers/DBHelper')

const Server = sequelize.define('Server', {
    type: {
        type: DataTypes.ENUM('vds', 'dedicated', 'not-install'),
        allowNull: false
    },
    cpuCoresCount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ram: {
        type: DataTypes.STRING,
        allowNull: false
    },
    traffic: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ddos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    geekbench: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    geekbenchMultithread: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
})

module.exports = Server