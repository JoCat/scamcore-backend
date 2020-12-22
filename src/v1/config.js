const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '..', '..', '..', 'site-backend.env') })

const config = {
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    }
}

module.exports = config