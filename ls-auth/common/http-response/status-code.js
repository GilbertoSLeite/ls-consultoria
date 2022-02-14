/* eslint-disable camelcase */
const formatDate = require('moment');
const today = formatDate();
const date = today.format('YYYY').concat('-', today.format('MM')).concat('-', today.format('D'));
const server = require('http');
const validatingStatusCodes = require('./validating-status-code');

const statusCodes = async (statusCode, body, placeHappened) => {
    try {
        return validatingStatusCodes(statusCode, body, placeHappened)
    } catch (error) {
        server.createServer((request, response) => response.status(500).send({
            statusCode: 500,
            body: `Ocorreu um Erro durante identificação dos aniversarientes ${date} na função statusCodes - ${error}`,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }));        
    };
};

module.exports = statusCodes;
