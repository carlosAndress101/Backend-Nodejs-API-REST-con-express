//const express = require('express');
const faker = require('faker')
const {Op} = require('sequelize')
const boom = require('@hapi/boom')
const { models } = require('./../libs/sequelize')

class ProductsService {
  constructor() {
    this.products = []
    this.generate()
  }

  async generate() {
    const limit = 100
    /*for de productos con libreria faker */
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        imagen: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      })
    }
  }

  async create(data) {
    const newProduct = await models.product.create(data)
    return newProduct
  }

  async find(query) {
    const options = {
      include: ['category'],
      where: {}
    }
    const {limit, offset} = query;
    if(limit && offset ){
      options.limit = limit,
      options.offset = offset
    }
    const { price_min, price_max } = query;
    if(price_min && price_max){
      options.where.price = {
        [Op.gte]: price_min,
        [Op.lte]: price_max
      };
    }
    const products = await models.product.findAll(options)
    return products
  }

  async findOne(id) {
    const oneProducts = await models.product.findByPk(id)
    return oneProducts
  }

  async update(id, change) {
    const posi = this.products.findIndex((i) => i.id === id)
    if (posi === -1) {
      throw boom.notFound('products not found')
    }
    const product = this.products[posi]
    this.products[posi] = {
      ...product,
      ...change,
    }
    return this.products[posi]
  }

  async delete(id) {
    const posi = this.products.findIndex((i) => i.id === id)
    if (posi === -1) {
      throw boom.notFound('products not found')
    }
    this.products.splice(posi, 1)
    return { id }
  }
}

module.exports = ProductsService
