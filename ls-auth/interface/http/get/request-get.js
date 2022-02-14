const statusCodes = require('../../../common/http-response/status-code');
const router = require('express').Router();  

const getMethod = async (app) => { 
    try {
        router.get("/", (resquest, response) => {
            response.status(200).render("index");           
        });
    
        app.use("/", router);        
    } catch (error) {
        return statusCodes(500, error, 'getMethod')
    }
}

module.exports = getMethod;
