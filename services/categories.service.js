const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');
class CategorieService{

    async create(data){
        const newCategory = await models.Categories.create(data);
        return newCategory;
    }

    async find(){
        const res = await models.Categories.findAll();
        return res;
    }

    async findOne(id){
        const category = await models.Categories.findByPk(id);
        if(!category){
            throw boom.notFound('Category not found');
        }
        return category;
    }

    async update(id, changes){
        const category = await this.findOne(id);
        const res = await category.update(changes);
        return res;
    }

    async delete(id){
        const category = await this.findOne(id);
        await category.destroy();
        return { id };
    }
    
}
module.exports = CategorieService;