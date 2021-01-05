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

const ServerTranslate = require('./translate/Server')

Server.hasMany(ServerTranslate)
ServerTranslate.belongsTo(Server)

const ServerCPU = require('./ServerCPU')
const ServerStorage = require('./ServerStorage')

Server.hasMany(ServerCPU)
ServerCPU.belongsTo(Server)

Server.hasMany(ServerStorage)
ServerStorage.belongsTo(Server)

module.exports = Server