const { models } = require('../libs/sequelize');
class OrderService {
    
    create(){

    }

    async find(){
        const res = await models.Order.findAll();
        return res;
    }

    findOne(){

    }

    update(){

    }

    delete(){

    }   
}

module.exports = OrderService;