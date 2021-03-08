const express = require('express')
const ErrorHelper = require('./helpers/ErrorHelper')
const apiv1 = express.Router();

(async () => {
    const DB = require('./helpers/DBHelper')
    try {
        await DB.authenticate()
        await DB.sync()
        // require('./tests')
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
})()

const langMiddleware = (req, res, next) => {
    if (req.params.lang !== undefined && !['ru', 'ua', 'en'].includes(req.params.lang)) {
        res.status(400).json(ErrorHelper.error(0, 'lang nf'))
        return
    }
    next()
}

// Роутинг апишки
apiv1.map = function (a, route = '') {
    for (const key in a) {
        switch (typeof a[key]) {
            // { '/path': { ... }}
            case 'object':
                apiv1.map(a[key], route + key)
                break
            // get: function(){ ... }
            case 'function':
                apiv1[key](route, a[key])
                break
        }
    }
}

apiv1.map({
    '/:lang': {
        use: langMiddleware,
        '/isp': require('./handlers/isp'),
        '/servers': require('./handlers/servers'),
        '/reviews': require('./handlers/reviews'),
    },
});

module.exports = apiv1