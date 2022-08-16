const { models } = require('./../libs/sequelize')
const boom = require('@hapi/boom');
class CategorieService{

    async create(data){
        const newCategory = await models.Category.create(data);
        return newCategory;
    }

    async find(){
        const res = await models.Category.findAll();
        return res;
    }

    async findOne(id){
        const categoria = await models.Category.findByPk(id,{
          include: ['products']
        });
        if(!categoria){
            throw boom.notFound('Category not found');
        }
        return categoria;
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
