const { Request, Response } = require('express')
const WebHost = require('../models/WebHost')
const WebHostTranslate = require('../models/translate/WebHost')

/**
 * @param {Request} req 
 * @param {Response} res 
 */
async function getWebHosts(req, res) {
    const hosts = await WebHost.findAll({ include: WebHostTranslate })

    const result = hosts.map(e => {
        const t = e.WebHostTranslates.find(t => t.lang === req.params.lang)
        return {
            id: e.id,
            productID: e.productId,
            storage: e.storage,
            sites: e.sites,
            title: t.title,
            description: t.description,
            features: JSON.parse(t.features),
            price: t.price,
        }
    })

    res.json(result)
}

module.exports = {
    get: getWebHosts
}