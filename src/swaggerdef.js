const swaggerJsdoc = require('swagger-jsdoc');
const swaggerConfig = require('./swaggerconfig');
const options = {
  definition: swaggerConfig,
  apis: ['./src/routes/wordTermRoutes.ts'],
};

module.exports = swaggerJsdoc(options);
