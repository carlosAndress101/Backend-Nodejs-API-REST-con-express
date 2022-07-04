const express = require('express');
const customerService = require('../services/customer.service');
const {  createCustomerSchema, updateCustomerSchema, getCustomerSchema } = require('../schemas/customer.schema');
const validatorHandler = require('../middlewares/validator.handler');
const router = express.Router();
const service = new customerService();


//endpoint de customer.

router.get('/', async (req, res, next) => {
  try {
    const customer = await service.find();
    res.json(customer);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
validatorHandler(getCustomerSchema, 'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const customer = await service.findOne(id);
    res.json(customer);
  } catch (error) {
    next(error);
  }
})

router.post('/',
validatorHandler(createCustomerSchema, 'body'),
async (req, res) => {
  const body = req.body;
  const newCustomer = await service.create(body);
  res.status(201).json(newCustomer);
});

router.patch(
  '/:id',
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  async (req, res, next) =>{
    try {
      const { id } = req.params;
      const body = req.body;
      const customer = await service.update(id, body);
      res.status(200).json(customer);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) =>{
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
