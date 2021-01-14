const { DataTypes } = require('sequelize')
const sequelize = require('../helpers/DBHelper')

const ServerCPU = sequelize.define('ServerCpu', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    frequency: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    maxCores: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = ServerCPU
