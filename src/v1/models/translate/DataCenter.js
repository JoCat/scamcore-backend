const { DataTypes } = require('sequelize')
const BaseTranslate = require('./Base')

const DataCenterTranslate = BaseTranslate('DataCenterTranslate', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

module.exports = DataCenterTranslate