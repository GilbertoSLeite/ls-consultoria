const validatingStatusCodes = require("../common/http-response/validating-status-code");
const requestData = require("./request-data");

const objectsRoute = async (app) => {
    try {    
        app.use(function(req, res, next){  
            const url = req.url;   
            const method = req.method;
            requestData(url, method)
        });
    } catch (error) {
        return validatingStatusCodes(500, error, 'getMethod');       
    };
};

module.exports = objectsRoute;
