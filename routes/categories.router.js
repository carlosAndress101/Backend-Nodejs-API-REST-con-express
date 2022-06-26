const express = require('express')
const CategorieService = require('../services/categories.service')
const validatorHandler = require('../middlewares/validator.handler')
const {
  CreateCategorieSchema,
  updateCategorieSchema,
  getCategorieSchema,
} = require('../schemas/categories.schema')
const router = express.Router()
const service = new CategorieService()

router.get('/', async (req, res, next) => {
  try {
    const categories = await service.find()
    res.json(categories)
  } catch (error) {
    next(error)
  }
})

router.get(
  '/:id',
  validatorHandler(getCategorieSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const category = await service.findOne(id)
      res.json(category)
    } catch (error) {
      next(error)
    }
  },
)

router.post(
  '/',
  validatorHandler(CreateCategorieSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      const newCategory = await service.create(body)
      res.status(201).json(newCategory)
    } catch (error) {
      next(error)
    }
  },
)

router.patch(
  '/:id',
  validatorHandler(getCategorieSchema, 'params'),
  validatorHandler(updateCategorieSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body
      const category = await service.update(id, body)
      res.status(200).json(category)
    } catch (error) {
      next(error)
    }
  },
)

router.delete(
  '/:id',
  validatorHandler(getCategorieSchema, 'params'),
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
