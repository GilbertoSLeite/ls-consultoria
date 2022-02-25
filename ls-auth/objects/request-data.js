const express = require('express');
const router = express.Router();  
const validatingStatusCodes = require("../common/http-response/validating-status-code");
const controllerScreening = require('../controllers/controller-screening');

const requestData = async (app) => {
    try { 
        app.use((request, response, next) =>{
            const data = {
                "GET": () => response.status(200).render("index"),
                "POST": () => controllerScreening(request, response)
                };
            data[request.method.toString()]?.() ?? validatingStatusCodes(500, `Não foi possível encontrar o metódo ${request.method.toString()} solicitado.`, 'requestData', response, request);
        });
    } catch (error) {
        return validatingStatusCodes(500, error, 'getMethod');         
    }
};

module.exports = requestData