const express = require('express');
const category_controller = require('../controller/CategoryController');
const verifyToken = require('../route/auth');
const route = express.Router();

route.get('/category',verifyToken,category_controller.category_get);
route.post('/add/category',category_controller.category_add); 
route.put('/edit/category/:id',category_controller.category_edit);
route.put('/category/remove/:id',category_controller.category_remove);


module.exports = route