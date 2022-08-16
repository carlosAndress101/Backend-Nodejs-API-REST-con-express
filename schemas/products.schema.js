const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const description = Joi.string().min(10);
const image = Joi.string().uri();
const categoryId = Joi.number().integer();
const limit = Joi.number().integer();
const offset = Joi.number().integer();
const price_min = Joi.number().integer().min(10);
const price_max = Joi.number().integer().min(10);


const createProductSchemas = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
  description: description.required(),
  categoryId:categoryId.required(),
});

const updateProductSchemas = Joi.object({
  name: name,
  price: price,
  image: image,
  description:description,
  categoryId
});

const getProductSchemas = Joi.object({
  id: id.required(),
});

const queryProductSchemas = Joi.object({
  limit,
  offset,
  price,
  price_min,
  price_max: price_max.when('price_min', {
    is: Joi.number().integer().required(),
    then:Joi.required()
  })
});

module.exports = {
  createProductSchemas,
  updateProductSchemas,
  getProductSchemas,
  queryProductSchemas,
};
