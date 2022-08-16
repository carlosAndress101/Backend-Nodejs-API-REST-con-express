const express = require('express');
const orderService = require('../services/order.service');
const {  createOrderSchema, getOrderSchema, addItemSchema } = require('../schemas/order.schema');
const validatorHandler = require('../middlewares/validator.handler');
const router = express.Router();
const service = new orderService();


//endpoint de customer.

router.get('/', async (req, res, next) => {
  try {
    const order = await service.find();
    res.json(order);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
validatorHandler(getOrderSchema, 'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await service.findOne(id);
    res.json(order);
  } catch (error) {
    next(error);
  }
})

router.post('/',
validatorHandler(createOrderSchema, 'body'),
async (req, res) => {
  const body = req.body;
  const newOrder = await service.create(body);
  res.status(201).json(newOrder);
});

router.post('/addItem',
validatorHandler(addItemSchema, 'body'),
async (req, res) => {
  const body = req.body;
  const newItem = await service.addItem(body);
  res.status(201).json(newItem);
});

router.delete(
  '/:id',
  validatorHandler(getOrderSchema, 'params'),
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
