const Sequelize = require('sequelize');
require("dotenv").config();
const enverioment = process.env;

module.exports = new Sequelize(
    enverioment.DB,
    enverioment.USER,
    enverioment.PASSWORD,
    {
      host: enverioment.HOST,
      dialect: enverioment.dialect,
      operatorsAliases: 0,
      pool: {
        max: enverioment.pool.max,
        min: enverioment.pool.min,
        acquire: enverioment.pool.acquire,
        idle: enverioment.pool.idle,
      },
    }
  );

module.exports = sequelize;
