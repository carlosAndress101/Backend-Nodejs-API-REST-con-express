const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();

const createProductSchemas = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
});

const updateProductSchemas = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image,
});

const getProductSchemas = Joi.object({
  id: id.required(),
});

module.exports = {
  createProductSchemas,
  updateProductSchemas,
  getProductSchemas,
};
