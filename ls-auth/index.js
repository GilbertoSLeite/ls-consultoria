const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const { join } = require('path');
const app = express();
require("dotenv").config();
const enverioment = process.env;

const dataBase = require('./infrastructure/database/index');
dataBase.sequelize.sync();

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(
    session({
        name: enverioment.NAME_SESSION,
        secret: enverioment.SECRET_SESSION,
        resave: Boolean(enverioment.RESAVE_SESSION),
        saveUninitialized: Boolean(enverioment.SAVE_UNINITIALIZED),
    })
)

require("./interface/http/index")(app)

app.listen(3001, ()=> console.log("Server funcionando na porta 3001"));
