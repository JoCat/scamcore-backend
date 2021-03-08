const { Request, Response } = require('express')
const DataCenter = require('../models/DataCenter')
const DataCenterTranslate = require('../models/translate/DataCenter')

/**
 * @param {Request} req 
 * @param {Response} res 
 */
async function getDataCenters(req, res) {
    const dc = await DataCenter.findAll({ include: DataCenterTranslate })

    const result = dc.map(e => {
        const t = e.DataCenterTranslates.find(t => t.lang === req.params.lang)
        return {
            id: e.id,
            title: t.title,
            location: JSON.parse(e.location),
            images: JSON.parse(e.images),
            description: t.description,
            content: t.content,
        }
    })

    res.json(result)
}

module.exports = {
    get: getDataCenters
}