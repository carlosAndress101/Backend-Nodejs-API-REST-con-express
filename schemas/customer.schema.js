const Joi = require('joi');

const id = Joi.number().required();
const name = Joi.string().min(3);
const lastName = Joi.string().min(3);
const phone = Joi.string().min(10);
const usersId = Joi.number().integer();

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  usersId: usersId.required(),
});

const updateCustomerSchema = Joi.object({
  name: name,
  lastName:lastName,
  phone: phone,
  usersId: usersId,
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema };

