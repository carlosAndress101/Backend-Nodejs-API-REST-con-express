const express = require('express');
const ProductsService = require('../services/products.service');
const router = express.Router();
const service = new ProductsService();

//enpoint de productos.
router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/:id', async (req, res, next) => {
  try {
    
    const { id } = req.params;
  const product = await service.findOne(id);
  res.json(product);

  } catch (error) {
    next(error)
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res, next) => {
  try {

    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.status(200).json(product);

  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.delete(id);
  res.status(200).json(product);
});

module.exports = router;
