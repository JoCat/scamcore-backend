const { DataTypes } = require('sequelize')
const sequelize = require('../helpers/DBHelper')

const DataCenter = sequelize.define('DataCenter', {
    img: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    location: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

const DataCenterTranslate = require('./translate/DataCenter')

DataCenter.hasMany(DataCenterTranslate)

module.exports = DataCenter