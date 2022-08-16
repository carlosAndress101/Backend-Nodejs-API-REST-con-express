const { Pool } = require('pg');
const { config } = require('../config/config');

let URL = '';

if (config.isProd) {
  URL = config.db_url;
} else {
  const USER = encodeURIComponent(config.dbUser);
  const PASSWORD = encodeURIComponent(config.dbPassword);
  URL = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
}
const pool = new Pool({ connectionString: URL });
module.exports = pool;
