const express = require('express');
const productsRouter = require('./products.Router');
const usersRouter = require('./users.Router')
const categoriesRouter = require('./categories.router');

function routerApi(app) {
    const router = express.Router();
    //podemos globalizar una version de esta forma.
    app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
