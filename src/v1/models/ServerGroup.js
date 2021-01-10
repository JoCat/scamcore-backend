const sequelize = require('../helpers/DBHelper')

const ServerGroup = sequelize.define('ServerGroup')

const ServerGroupTranslate = require('./translate/ServerGroup')

ServerGroup.hasMany(ServerGroupTranslate)

module.exports = ServerGroup

/* test */

// ServerGroup.create()

// ServerGroupTranslate.create({
//     ServerGroupId: 1,
//     lang: 'ru',
//     title: 'Сервера где-то в жопе ru'
// })

// ServerGroupTranslate.create({
//     ServerId: 1,
//     lang: 'en',
//     title: 'Сервера где-то в жопе en'
// })

// ServerGroupTranslate.create({
//     ServerId: 1,
//     lang: 'ua',
//     title: 'Сервера где-то в жопе ua'
// })
