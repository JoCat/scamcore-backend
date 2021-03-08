const { Request, Response } = require('express')
const ISPLicense = require('../models/ISPLicense')
const ISPLicenseTranslate = require('../models/translate/ISPLicense')

/**
 * @param {Request} req 
 * @param {Response} res 
 */
async function getLicense(req, res) {
    const isp = await ISPLicense.findAll({ include: ISPLicenseTranslate })

    const result = isp.map(e => {
        const t = e.IspLicenseTranslates.find(t => t.lang === req.params.lang)
        return {
            id: e.id,
            title: t.title,
            price: t.price
        }
    })

    res.json(result)
}

module.exports = {
    get: getLicense
}
