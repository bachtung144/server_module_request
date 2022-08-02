const express = require ('express');
const app = express.Router();
const controller  = require('../../app/controlers/device')

app.route('/device').get(controller.getAll);

module.exports = app;
