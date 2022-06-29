const { models } = require('../libs/sequelize');
class CategorieService{

    create(){

    }

    async find(){
        const res = await models.Categories.findAll();
        return res;
    }

    findOne(){

    }

    update(){

    }

    delete(){

    }
    
}
module.exports = CategorieService;