const statusCodes = require("../common/http-response/status-code");
const getMethod = require("../interface/http/get/request-get");

const objectsRoute = async (app) => {
    try {
        const requestData = { 
            get: await getMethod(app)
        };
    
        app.use(function(req, res, next){ 
            requestData[req.headers.request_method];
        });   

    } catch (error) {
        return statusCodes(500, error, 'getMethod');       
    };
};

module.exports = objectsRoute;
