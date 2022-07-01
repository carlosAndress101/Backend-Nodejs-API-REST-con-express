const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URL = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;


module.exports = {
    development: {
        url: URL,
        dialect: 'postgres',
    },
    production: {
        url: URL,
        dialect: 'postgres',
    }
}