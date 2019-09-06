const express = require('express');

const product_controller = require('../controller/ProductController');
const route = express.Router();

// route.get('/product',product_controller.product_get);
route.post('/add/product',product_controller.product_add); 
route.put('/edit/product/:id',product_controller.product_edit);
//route.put('/product/remove/:id',product_controller.product_remove);


module.exports = route