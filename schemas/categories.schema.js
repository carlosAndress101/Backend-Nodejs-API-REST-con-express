const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const imagen = Joi.string().uri();

const createCategorySchema = Joi.object({
  name: name.required(),
  imagen: imagen.required()
});

const updateCategorySchema = Joi.object({
  name: name,
  imagen: imagen
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

module.exports = { createCategorySchema, updateCategorySchema, getCategorySchema }
