const express = require('express')
const ProductsService = require('../services/products.service')
const validatorHandler = require('../middlewares/validator.handler')
const {
  createProductSchemas,
  updateProductSchemas,
  getProductSchemas,
} = require('../schemas/products.schema')
const router = express.Router()
const service = new ProductsService()

//enpoint de productos.
router.get('/', async (req, res) => {
  const products = await service.find()
  res.json(products)
})

router.get(
  '/:id',
  validatorHandler(getProductSchemas, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const product = await service.findOne(id)
      res.json(product)
    } catch (error) {
      next(error)
    }
  },
)

router.post(
  '/',
  validatorHandler(createProductSchemas, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      const newProduct = await service.create(body)
      res.status(201).json(newProduct)
    } catch (error) {
      next(error)
    }
  },
)

router.patch(
  '/:id',
  validatorHandler(getProductSchemas, 'params'),
  validatorHandler(updateProductSchemas, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body
      const product = await service.update(id, body)
      res.status(200).json(product)
    } catch (error) {
      next(error)
    }
  },
)

router.delete(
  '/:id',
  validatorHandler(getProductSchemas, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      await service.delete(id)
      res.status(201).json({ id })
    } catch (error) {
      next(error)
    }
  },
)

module.exports = router
