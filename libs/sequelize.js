const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URL = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URL, {
    dialect: 'postgres',
    logging: true,
});

module.exports = sequelize;