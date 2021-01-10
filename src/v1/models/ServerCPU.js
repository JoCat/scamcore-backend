const { DataTypes } = require('sequelize')
const sequelize = require('../helpers/DBHelper')

const ServerCPUTranslate = require('./translate/ServerCPU')

const ServerCPU = sequelize.define('ServerCpu', {
    frequency: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    maxCores: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

ServerCPU.hasMany(ServerCPUTranslate)

module.exports = ServerCPU
