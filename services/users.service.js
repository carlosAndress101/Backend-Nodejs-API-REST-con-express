const boom = require('@hapi/boom');
const getConnection = require('../libs/postgres');
class UserService {
  constructor() {}

  create(data) {
    return data;
  }

  async find() {
    const client = await getConnection();
    const res = await client.query('SELECT * FROM task');
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
