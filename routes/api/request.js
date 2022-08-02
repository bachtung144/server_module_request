const express = require ('express');
const app = express.Router();
const controller  = require('../../app/controlers/request')

app.route('/request').get(controller.getAll);
app.route('/request').post(controller.add);

module.exports = app;
