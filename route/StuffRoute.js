const express = require('express');
const route = express.Router();
const stuff_controller= require('../controller/StuffsController');


route.post('/user/create',stuff_controller.stuff_create);
route.put('/user/edit/:id',stuff_controller.stuff_edit);
route.put('/user/deactivate/:id',stuff_controller.stuff_deactivate);

module.exports = route;