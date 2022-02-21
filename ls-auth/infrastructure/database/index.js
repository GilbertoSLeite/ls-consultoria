const Sequelize = require("sequelize");

const sequelize = require("../config/connect-database");;

const dataBase = {};

dataBase.Sequelize = Sequelize;
dataBase.sequelize = sequelize;

dataBase.cadastros_imagens = require("./schema/cadastro-usuario")(sequelize, Sequelize);

module.exports = dataBase;
