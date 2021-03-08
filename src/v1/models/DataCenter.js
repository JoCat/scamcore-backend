const { DataTypes } = require('sequelize')
const sequelize = require('../helpers/DBHelper')

const DataCenter = sequelize.define('DataCenter', {
    images: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const DataCenterTranslate = require('./translate/DataCenter')

DataCenter.hasMany(DataCenterTranslate)

module.exports = DataCenter