const express = require('express');
const validatingStatusCodes = require('../../../common/http-response/validating-status-code');
const app = express();
const router = express.Router();  

const getMethod = async (url) => { 
    try {
        const urlToString = url.toString();
        router.get(urlToString, (resquest, response) => {
            response.status(200).render("index");           
        });
    
        app.use(urlToString, router);        
    } catch (error) {
        return validatingStatusCodes(500, error, 'getMethod')
    }
}

module.exports = getMethod;
