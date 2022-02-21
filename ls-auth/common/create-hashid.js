const crypto = require('crypto');
const validatingStatusCodes = require("./http-response/validating-status-code");
require("dotenv").config();
const enverioment = process.env;

const createHashid = async (idUser) => {
    try {
        const secret = enverioment.SECRET_SESSION + idUser
        // Chamando o metódo para criar a hash
        const hash = crypto.createHash('sha256', secret)
            // Atualizando os dados
            .update(secret)
        // codificando a hash em hexadecimal
            .digest('hex');
    
        // Returna Hash para uso
        return hash;        
    } catch (error) {
        return validatingStatusCodes(500, error, 'createHashid')        
    }
}

module.exports = createHashid