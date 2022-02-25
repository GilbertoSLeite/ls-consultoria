const controllerCreateUser = require("../../../controllers/user-system/create-user");

const postUser = {
    userCreation: (request, response) => controllerCreateUser(request, response),
}


module.exports = { 
    postUser
}