const express = require('express');
const price_controller = require('../controller/PriceController');
const route = express.Router();

// route.get('/get/prices',price_controller.price_get);
route.post('/add/price',price_controller.price_add); 
route.put('/edit/price/:id',price_controller.price_edit);
route.put('/price/remove/:id',price_controller.price_remove);


module.exports = route