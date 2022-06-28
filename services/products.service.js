//const express = require('express');
const faker = require('faker');
const boom = require('@hapi/boom');
const sequelize = require('../libs/sequelize');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  async generate() {
    const limit = 100;
    /*for de productos con libreria faker */
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        imagen: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }
  
  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    const query = 'SELECT * FROM task'
    const [data] = await sequelize.query(query);
    return data;
  }

  async findOne(id) {
    const product = this.products.find(i => i.id === id);
    if(!product){
      throw boom.notFound('products not found');
    }
    if(product.isBlock){
      throw boom.conflict('product is block');
    }
    return product;
  }

  async update(id, change) {
    const posi = this.products.findIndex(i => i.id === id);
    if(posi === -1){
      throw boom.notFound('products not found');
    }
    const product = this.products[posi];
    this.products[posi] = {
      ...product,
      ...change
    }
    return this.products[posi];
  }

  async delete(id) {
    const posi = this.products.findIndex(i => i.id === id);
    if(posi === -1){
      throw boom.notFound('products not found');
    }
    this.products.splice(posi, 1);
    return {id};
  }
}

module.exports = ProductsService;
