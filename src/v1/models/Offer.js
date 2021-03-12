const { DataTypes } = require('sequelize')
const sequelize = require('../helpers/DBHelper')

const Offer = sequelize.define('Offer', {
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    percentage: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    start: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end: {
        type: DataTypes.DATE,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const OfferTranslate = require('./translate/Offer')

Offer.hasMany(OfferTranslate)

module.exports = Offer