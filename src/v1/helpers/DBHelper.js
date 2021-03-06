const db_config = require("../config").db;
const { Sequelize } = require("sequelize");

const connect = new Sequelize({
    database: db_config.database,
    username: db_config.user,
    password: db_config.password,
    host: db_config.host,
    dialect: "mysql",
    define: {
        underscored: true,
        timestamps: false,
    },
});

module.exports = connect;
