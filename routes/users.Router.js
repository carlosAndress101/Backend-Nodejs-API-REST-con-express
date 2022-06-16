const express = require('express');
const router = express.Router();

router.get('/carlos', (req, res) =>
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

//enpoint de usuario.
router.get('/Usuarios', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('no tenemos parametros');
  }
});

module.exports = router;