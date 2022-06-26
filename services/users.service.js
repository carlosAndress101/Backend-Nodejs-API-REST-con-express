const boom = require('@hapi/boom');
//const getConnection = require('../libs/postgres');
const pool = require('../libs/postgres.pool');
class UserService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (error) => console.error(error));
  }

  create(data) {
    return data;
  }

  async find() {
    const query = 'SELECT * FROM task';
    const res = await this.pool.query(query);
    return res.rows;
  }

  findOne(id) {
    return { id };
  }

  update(id, changes) {
    return {
        id, changes
    };
  }

  delete(id) {
    return { id };
  }
}

module.exports = UserService;
