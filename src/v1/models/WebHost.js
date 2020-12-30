const { DataTypes } = require('sequelize')
const sequelize = require('../helpers/DBHelper')

const WebHostTranslate = require('./translate/WebHost')

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

WebHost.hasMany(WebHostTranslate)
WebHostTranslate.belongsTo(WebHost)

module.exports = WebHost