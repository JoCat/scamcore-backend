const { DataTypes } = require('sequelize')
const BaseTranslate = require('./Base')

const OfferTranslate = BaseTranslate('OfferTranslate', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

module.exports = OfferTranslate