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

const ServerCPU = require('./ServerCPU')
const ServerStorage = require('./ServerStorage')
const ServerGroup = require('./ServerGroup')

ServerCPU.hasMany(Server)

Server.hasMany(ServerStorage)

ServerGroup.hasMany(Server)

module.exports = Server

/* test */

// Server.create({
//     ServerGroupId: 1,
// })

// ServerGroupTranslate.create({
//     ServerGroupId: 1,
//     lang: 'ru',
//     title: 'Сервера где-то в жопе ru'
// })

// ServerGroupTranslate.create({
//     ServerId: 1,
//     lang: 'en',
//     title: 'Сервера где-то в жопе en'
// })

// ServerGroupTranslate.create({
//     ServerId: 1,
//     lang: 'ua',
//     title: 'Сервера где-то в жопе ua'
// })
