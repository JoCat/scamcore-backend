const express = require('express')
const apiv1 = express.Router()

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
    '/translate': require('./handlers/translate'),
});

module.exports = apiv1