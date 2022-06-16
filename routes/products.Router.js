const express = require('express');
const faker = require('faker');
const router = express.Router();

//enpoint de productos.
router.get('/', (req, res) => {
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
  //respuesta de productos
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

router.get('/:id', (req, res) => {
  const { id } = req.params.id;
  res.json({
    id,
    name: 'product 2',
    price: 2000,
  });
});

router.post('/', (req, res)=>{
  const body = req.body;
  res.json({
    message:"creacion de producto",
    data:body
  })
});

router.patch('/:id', (req, res)=>{
  const {id} = req.params;
  const body = req.body;
  res.json({
    message:"update",
    data:body,
    id
  })
});

router.delete('/:id', (req, res)=>{
  const {id} = req.params;
  res.json({
    message:"deleted",
    id
  })
});

module.exports = router;
