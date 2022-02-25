/* eslint-disable camelcase */
const formatDate = require('moment');
const today = formatDate();
const date = today.format('YYYY').concat('-', today.format('MM')).concat('-', today.format('D'));
const server = require('http');
const successResponse = require('./success-response');
const errorResponse = require('./error-response');

const validatingStatusCodes = async (code, body, placeHappened, response, request) => {
    try {
        const okStatus = (code === 200 && await successResponse(body, placeHappened, response, request));
        const badRequest = (code === 400 && await errorResponse(400, body, placeHappened, response, request));
        const notFound = (code === 404 && await errorResponse(404, body, placeHappened, response, request));
        const internalError = (code === 500 && await errorResponse(500, body, placeHappened, response, request));
        const resultFinal = (okStatus || badRequest || notFound || internalError);
        return resultFinal;
    } catch (error) {
        server.createServer((request, response) => response.status(500).send({
            statusCode: 500,
            body: `Ocorreu um Erro durante identificação dos aniversarientes ${date} na função validatingStatusCodes - ${error}`,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }));
    };
};

module.exports = validatingStatusCodes;
