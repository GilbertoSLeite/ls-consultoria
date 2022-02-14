/* eslint-disable camelcase */
const formatDate = require('moment');
const today = formatDate();
const date = today.format('YYYY').concat('-', today.format('MM')).concat('-', today.format('D'));
const server = require('http')

const errorResponse = async (statusCode, body, localError) => {
    try {
        server.createServer((request, response) => response.status(statusCode).send({
            statusCode: statusCode,
            body: `Ocorreu um Erro durante identificação dos aniversarientes ${date} na função ${localError} - ${JSON.stringify(body, null, 2)}`,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }));
    } catch (error) {
        server.createServer((request, response) => response.status(500).send({
            statusCode: 500,
            body: `Ocorreu um Erro durante identificação dos aniversarientes ${date} na função errorResponse - ${error}`,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }));     
    };
};

module.exports = errorResponse;
