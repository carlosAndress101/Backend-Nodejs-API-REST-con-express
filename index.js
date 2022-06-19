/* eslint-disable no-console */
const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

routerApi(app);
//manejo de errores con middlewares
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`App listening on port http://localhost:${port}`)
);
