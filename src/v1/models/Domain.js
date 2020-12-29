const sequelize = require('../helpers/DBHelper')

const DomainTranslate = require('./translate/Domain')

const Domain = sequelize.define('Domain', {})
Domain.hasMany(DomainTranslate)
DomainTranslate.belongsTo(Domain)

module.exports = Domain