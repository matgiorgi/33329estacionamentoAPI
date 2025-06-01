const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Parking API',
        description: 'API para gerenciar estacionamento'
    },
    host: 'localhost:3000',
    schemes: ['http']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
