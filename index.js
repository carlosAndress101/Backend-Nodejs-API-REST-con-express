/* eslint-disable no-console */
const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler')
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

const whitelist = ['http://localhost:3000', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));
app.get('/', (req, res) => res.send('Hello World!'));

routerApi(app);
//manejo de errores con middlewares
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`App listening on port http://localhost:${port}`)
);
