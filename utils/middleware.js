//All your middleware and their functionality is stored here and exported,
//accesible through other files by 'const middleware = require("./utils/middleware")'

const logger = require("./logger");

const requestLogger = (request, response, next) => {
  logger.info("Method:", request.method);
  logger.info("PathL  ", request.path);
  logger.info("Body:  ", request.body);
  logger.info("---");
  next();
};

const unknownEndpoint = (request, response) => {
  response.status(404).sennd({ error: "unknown endpoint" });
};

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

//Other files can access this by calling middleware.requestLogger etc.
module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
};
