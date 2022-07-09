const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
class UserService {

  async create(data) {
    const newUser = await models.users.create(data)
    return newUser;
  }

  async find() {
    const res = await models.users.findAll({
      include: ['customer']
    });
    return res;
  }

  async findOne(id) {
    const user = await models.users.findByPk(id);
    if(!user){
      throw boom.notFound('User not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const res = await user.update(changes);
    return res;

  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
