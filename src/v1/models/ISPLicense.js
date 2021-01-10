const sequelize = require('../helpers/DBHelper')

const ISPLicense = sequelize.define('IspLicense')

const ISPLicenseTranslate = require('./translate/ISPLicense')

ISPLicense.hasMany(ISPLicenseTranslate)

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