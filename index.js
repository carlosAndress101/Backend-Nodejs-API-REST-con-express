/* eslint-disable no-console */
const express = require('express');
const faker = require('faker');

const app = express();
const port = 3000;


app.get('/', (req, res) => res.send('Hello World!'));


app.get('/carlos', (req, res) =>
  res.json([
    {
      name: 'Andres',
      lastname: 'Hinestroza',
      age: 20,
    },
    {
      name: 'Sonia',
      lastname: 'Badillo',
      age: 19,
    },
    {
      name: 'rosa',
      lastname: 'Perez',
      age: 50,
    },
    {
      name: 'Darcio',
      lastname: 'Hinestroza',
      age: 55,
    },
  ])
);

app.get('/products', (req, res) => {

  /*variables */
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  /*for de productos con libreria faker */
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      imagen: faker.image.imageUrl(),
    });
  }

  res.json(products);

  res.json([
    {
      name: 'producto1',
      price: 2000,
    },
    {
      name: 'producto2',
      price: 1000,
    },
  ]);
});

app.get('/product', (req, res) =>
  res.send('Hello! My name is Carlos Andres. and you, what your name')
);

app.listen(port, () =>
  console.log(`App listening on port http://localhost:${port}`)
);
