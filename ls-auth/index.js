const express = require('express');
const bodyParser = require('body-parser');
const { join } = require('path');
const app = express();

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: false
}));

require("./interface/http/index")(app)

app.listen(3001, ()=> console.log("Server funcionando na porta 3001"));
