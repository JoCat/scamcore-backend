const { Request, Response } = require('express')
const Server = require('../models/Server')

/**
 * @param {Request} _ 
 * @param {Response} res 
 */
async function getTranslate(_, res) {
    const vds = await Server.findAll({
        where: {
            type: 'vds'
        }
    })
    res.json(vds)
}

/**
 * @param {Request} _ 
 * @param {Response} res 
 */
function addTest(_, res) {
    const server = Server.build({
        
    })
    res.json(true)
}

module.exports = {
    get: getTranslate,
    '/addTest': {
        get: addTest
    }
}
