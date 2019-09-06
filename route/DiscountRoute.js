const express = require('express');
const discount_controller = require('../controller/DiscountController');
const route = express.Router();

// route.get('/category',category_controller.category_get);
route.post('/add/discount/products',discount_controller.discount_add); 
route.put('/edit/distcountitems/:id',discount_controller.discount_edit);
// route.put('/category/remove/:id',category_controller.category_remove);


module.exports = route