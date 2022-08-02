const express = require ('express');
const app = express.Router();
const controller  = require('../../app/controlers/user')

app.route('/user/login').post(controller.checkLogin);
app.route('/user').put(controller.update);

module.exports = app;
