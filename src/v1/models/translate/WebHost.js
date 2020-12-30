const { DataTypes } = require('sequelize')
const BaseTranslate = require('./Base')

const WebHostTranslate = BaseTranslate('WebHostTranslate', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    features: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
})

module.exports = WebHostTranslate