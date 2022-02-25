/* eslint-disable camelcase */
const formatDate = require('moment');
const today = formatDate();
const date = today.format('DD/MM/YYYY');

const errorResponse = async (statusCode, body, localError, response, request) => {
    try {
        response.status(statusCode).send({
            statusCode: statusCode,
            body: `Ocorreu o erro: ${JSON.stringify(body, null, 2)}, durante o processo de login no dia ${date} na função ${localError}`,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
    } catch (error) { 
        response.status(500).send({
            statusCode: 500,
            body: `Ocorreu um erro: ${error}, durante a execução no dia ${date} na função errorResponse.`,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
    };
};

module.exports = errorResponse;
