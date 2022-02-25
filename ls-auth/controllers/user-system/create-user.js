const { Router } = require('express');
const router = Router();
const Users = require('../../infrastructure/database/').cadastro_usuario

    router.post("/create-use", async (request, response) => {
        try {
            console.log('Entrou na criação da Rota create-use')
        } catch (error) {
            return validatingStatusCodes(500, error, 'rota create-use', request, response)            
        }  
    });

module.exports = router