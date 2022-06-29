const { models } = require('../libs/sequelize');
class UserService {
  
  create(data) {
    return data;
  }

  async find() {
    const res = await models.User.findAll();
    return res;
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
