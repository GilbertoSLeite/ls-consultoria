const Sequelize = require('sequelize');
require("dotenv").config();
const enverioment = process.env;

module.exports = new Sequelize(
    enverioment.DB,
    enverioment.USER,
    enverioment.PASSWORD,
    {
      host: enverioment.HOST,
      dialect: enverioment.DIALECT,
      operatorsAliases: 0,
      pool: {
        max: enverioment.POOL_MAX,
        min: enverioment.POOL_min,
        acquire: enverioment.POOL_acquire,
        idle: enverioment.POOL_idle,
      },
    }
  );

module.exports = sequelize;
