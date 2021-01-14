const sequelize = require('../helpers/DBHelper')

const ServerGroup = sequelize.define('ServerGroup')

const ServerGroupTranslate = require('./translate/ServerGroup')

ServerGroup.hasMany(ServerGroupTranslate)

module.exports = ServerGroup
