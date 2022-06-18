//const express = require('express');
const faker = require('faker');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    /*for de productos con libreria faker */
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        imagen: faker.image.imageUrl(),
      });
    }
  }
  
  create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find(i => i.id === id);
  }

  update(id, change) {
    const posi = this.products.findIndex(i => i.id === id);
    if(posi === -1){
      throw new Error('product not found');
    }
    const product = this.products[posi];
    this.products[posi] = {
      ...product,
      ...change
    }
    return this.products[posi];
  }

  delete(id) {
    const posi = this.products.findIndex(i => i.id === id);
    if(posi === -1){
      throw new Error('product not found');
    }
    this.products.splice(posi, 1);
    return {id};
  }
}

module.exports = ProductsService;
