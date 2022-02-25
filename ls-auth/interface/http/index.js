const index = require("../http/get/request-get-index");
const sorting = require('../http/post/request-post-user');

module.exports = (app) => {
        app.use("/", index)
        app.use("/create-use", sorting.postUser.userCreation)
};
