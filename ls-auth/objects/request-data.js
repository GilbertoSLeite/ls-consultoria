const validatingStatusCodes = require("../common/http-response/validating-status-code");
const getMethod = require("../interface/http/get/request-get");

const requestData = async (url, method) => {
    try {
        const data = {
        "GET": await getMethod(url),
        "POST": await getMethod(url)
        }
        data[method];        
    } catch (error) {
        return validatingStatusCodes(500, error, 'getMethod');         
    }
};

module.exports = requestData