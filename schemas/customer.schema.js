const Joi = require('joi');

const id = Joi.number().required();
const name = Joi.string().min(3);
const lastName = Joi.string().min(3);
const phone = Joi.string().min(10);

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
});

const updateCustomerSchema = Joi.object({
  name: name,
  lastName:lastName,
  phone: phone,
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema };

