const joi = require('joi');

const id = joi.string().uuid();
const name = joi.string().alphanum().min(3).max(15);
const price = joi.number().integer().min(10);


const createProductSchemas = joi.object({
    name: name.required(),
    price: price.required(),
});

const updateProductSchemas = joi.object({
    name: name.required(),
    price: price.required(),
});

const getProductSchemas = joi.object({
    id: id.required(),
});

module.exports = {createProductSchemas, updateProductSchemas, getProductSchemas};