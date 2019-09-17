const express = require('express');
const discount_controller = require('../controller/DiscountController');
const route = express.Router();

route.get('/discount',discount_controller.discount_get);
route.post('/discount/add/products',discount_controller.discount_add); 
route.put('/discount/edit/:id',discount_controller.discount_edit);



module.exports = route