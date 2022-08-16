const { config } = require('../config/config')

module.exports = {
  development: {
    url: config.db_url,
    dialect: 'postgres',
  },
  production: {
    url: config.db_url,
    dialect: 'postgres',
    ssl:{
      rejectUnauthorized: false,
    }
  },
}
