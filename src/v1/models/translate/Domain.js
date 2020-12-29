const { DataTypes } = require('sequelize')
const BaseTranslate = require('./Base')

const DomainTranslate = BaseTranslate('DomainTranslate', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    storage: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sites: {
        type: DataTypes.INTEGER,
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

module.exports = DomainTranslate