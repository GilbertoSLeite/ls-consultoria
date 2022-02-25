const Users = require('../../infrastructure/database/').cadastro_usuario

const domainCreateUser = async (request, response) => {
    console.log('Entrou na criação da Rota create-use')
    try {
        const userCreation = await Users.create({
            id: request.body.id,
            hash_id: request.body.hash_id,
            nome_usuario: request.body.nome_usuario,
            email_usuario: request.body.email_usuario,
            senha_usuario: request.body.senha_usuario,
            status_usuario: request.body.status_usuario,
        });
        response.status(200).send({
            fullData: userCreation,
            status: true
        });
    } catch (error) {
        return validatingStatusCodes(500, error, 'rota create-use', request, response)            
    }  
};

module.exports = domainCreateUser