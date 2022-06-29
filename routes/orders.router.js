const express = require('express');
const orderService  = require('../services/orders.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
    createUserSchema,
    updateUserSchema,
    getUserSchema,
  } = require('../schemas/orders.schema');
const router = express.Router();
const service = new orderService();

//endpoint de usuarios.

router.get('/', async (req, res, next)=>{
    try {
        const orders = await service.find();
        res.json(orders);
    } catch (error) {
        next(error);
    }
})

module.exports = router;