const mysql = require('mysql2/promise')
const db_config = require('../config.js').db

const connect = mysql.createPool({
    host: db_config.host,
    user: db_config.user,
    password: db_config.password,
    database: db_config.database,
    // timezone: '+03:00'
})

module.exports = connect