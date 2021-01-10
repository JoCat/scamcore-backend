const { DataTypes } = require('sequelize')
const sequelize = require('../helpers/DBHelper')

const WebHost = sequelize.define('WebHost', {
    storage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sites: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
})

const WebHostTranslate = require('./translate/WebHost')

WebHost.hasMany(WebHostTranslate)

module.exports = WebHost