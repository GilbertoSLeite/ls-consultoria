/* eslint-disable camelcase */
const formatDate = require('moment');
const today = formatDate();
const date = today.format('YYYY').concat('-', today.format('MM')).concat('-', today.format('D'));
const server = require('http')

const successResponse = async (body, localSuccess, response, request) => {
    try {
        response.status(200).send({
            statusCode: 200,
            body: `Sucesso ocorrido em ${localSuccess} os dados: ${JSON.stringify(body, null,2)}`,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
    } catch (error) {
        response.status(500).send({
            statusCode: 500,
            body: `Ocorreu um Erro durante identificação dos aniversarientes ${date} na função successResponse - ${error}`,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });     
    };
};

module.exports = successResponse;
