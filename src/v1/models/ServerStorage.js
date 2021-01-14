const { DataTypes } = require('sequelize')
const sequelize = require('../helpers/DBHelper')

const ServerStorage = sequelize.define('ServerStorage', {
    type: {
        type: DataTypes.ENUM('hdd', 'ssd', 'nvme'),
        allowNull: false
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = ServerStorage
