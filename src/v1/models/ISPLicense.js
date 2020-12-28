const sequelize = require('../helpers/DBHelper')

const ISPLicenseTranslate = require('./translate/ISPLicense')

const ISPLicense = sequelize.define('IspLicense', {})
ISPLicense.hasMany(ISPLicenseTranslate)
ISPLicenseTranslate.belongsTo(ISPLicense)

// ISPLicense.create();

// ISPLicenseTranslate.create({
//     IspLicenseId: 1,
//     lang: 'ru',
//     title: 'Тест',
//     price: 200
// });

// ISPLicenseTranslate.create({
//     IspLicenseId: 1,
//     lang: 'ua',
//     title: 'Тест',
//     price: 77
// });

// ISPLicenseTranslate.create({
//     IspLicenseId: 1,
//     lang: 'en',
//     title: 'Test',
//     price: 2.7
// });

module.exports = ISPLicense