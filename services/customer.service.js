const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CustomerService {

  constructor(){}

  async find() {
    const res = await models.customer.findAll();
    return res;
  }

  async findOne(id) {
    const customer = await models.customer.findByPk(id);
    if(!customer){
      throw boom.notFound('Customer no found');
    }
    return customer;
  }

  async create(data) {
    const newCustomer = await models.customer.create(data);
    return newCustomer;
  }

  async update(id, changes) {
    const customer = await this.findOne(id);
    const res = await customer.update(changes);
    return res;
  }

  async delete(id) {
    const customer = await this.findOne(id);
    await customer.destroy();
    return { id };
  }
}

module.exports = CustomerService;
