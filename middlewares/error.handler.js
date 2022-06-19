/* eslint-disable no-console */

function logErrors(error, req, res, next){
    console.error(error);
    next(error)
}

//middleware manejo de errores con orden y un message y un stack para mayor facilidad.
function errorHandler(error, req, res, next){
    res.status(500).json({
        message: error.message,
        stack: error.stack,
    })
}


//middleware para maneja los errores especificos de boom.
function boomErrorHandler(error, req, res, next){
   if(error.isBoom){
    const { output } = error;
    res.status(output.statusCode).json(output.payload);
   }
   next(error);
}

module.exports = {logErrors, errorHandler, boomErrorHandler};