const { Pool } = require('pg')
const { config } = require('../config/config')


const options = {}
if (config.isProd) {
  options.connectionString = config.db_url
  options.ssl = {
    rejectUnauthorized: false,
  }
} else {
  const USER = encodeURIComponent(config.dbUser)
  const PASSWORD = encodeURIComponent(config.dbPassword)
  const URL = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
  options.connectionString = URL;
}

const pool = new Pool(options)
module.exports = pool
