const { models } = require('../libs/sequelize');
class OrderService {

    async create (data) {
      const newOrder = await models.Order.create(data);
      return newOrder;
    }
    async addItem (data){
      const newItem = await models.Order_Product.create(data);
      return newItem;
    }

    async find(){
        const res = await models.Order.findAll();
        return res;
    }

    async findOne(id){
      const resOrder = await models.Order.findByPk(id, {
        include:[
          {
            association:'customer',
            include:['users']
          },
          'items'
        ]
      });
      return resOrder
    }

    update(){

    }

    delete(){

    }
}

module.exports = OrderService;
