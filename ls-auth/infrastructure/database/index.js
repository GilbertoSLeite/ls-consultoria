const Sequelize = require("sequelize");

const sequelize = require("../config/connect-database");;

const dataBase = {};

dataBase.Sequelize = Sequelize;
dataBase.sequelize = sequelize;

dataBase.cadastro_usuario = require("./schema/cadastro-usuario")(sequelize, Sequelize);

module.exports = dataBase;
