const { Router } = require('express');
const router = Router();

    router.get("/", (resquest, response) => {
        response.status(200).render("index");           
    });

module.exports = router