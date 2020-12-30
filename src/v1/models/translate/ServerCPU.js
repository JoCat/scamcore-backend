const { DataTypes } = require('sequelize')
const BaseTranslate = require('./Base')

const ServerCPUTranslate = BaseTranslate('ServerCpuTranslate', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = ServerCPUTranslate